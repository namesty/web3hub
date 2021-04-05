import db from "../services/db";
export interface ApiData {
  id: number;
  name: string;
  subtext: string;
  description: string;
  icon: string;
  location: string;
  pointers: string[];
  ownerId?: string;
}

export enum Authorities {
  ENS = 1,
  IPFS,
}

export class Api {
  public static async create(apiInfo: ApiData) {
    const connection = await db.connect();
    try {
      const { name, subtext, description, icon, location, pointers, ownerId } = apiInfo;
      const insertApi = async (tx) => {
        const api = await tx.one(
          "INSERT INTO apis (name, subtext, description, icon, fk_owner_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
          [name, subtext, description, icon, ownerId]
        );

        //@TODO: Retrieve authId dynamically
        await tx.none(
          "INSERT INTO api_uris (uri, fk_api_id, fk_uri_type_id) VALUES ($1, $2, $3)",
          [location, api.id, Authorities.IPFS]
        );

        const insertPointers = async (location) => {
          await tx.none(
            "INSERT INTO api_uris (uri, fk_api_id, fk_uri_type_id) VALUES ($1, $2, $3)",
            [location, api.id, Authorities.ENS]
          );
        };

        pointers.map(insertPointers);
      };

      await connection.tx(insertApi);
      return {
        name,
        subtext,
        description,
        icon,
        location,
        pointers,
      };
    } catch (error) {
      console.log("Error on method: Api.create() -> ", error.message);
      throw new Error(error);
    } finally {
      connection.done();
    }
  }

  public static async getAllActive(): Promise<ApiData[]> {
    const connection = await db.connect();
    try {
      const apis = await connection.manyOrNone(
        `SELECT 
          apis.id, 
          apis.description, 
          apis.name, 
          apis.subtext,
          apis.icon, 
          uri_types.type as type, 
          api_uris.uri 
        FROM apis 
        INNER JOIN api_uris ON apis.id = api_uris.fk_api_id 
        INNER JOIN uri_types ON uri_types.id = api_uris.fk_uri_type_id 
        WHERE visible = true`
      );

      const sanitizeApis = (acc: ApiData[], api): ApiData[] => {
        const { authority, type, uri, ...metadata } = api;
        let apiAdded = acc.find(({ id }) => id === api.id);
        let apiSanitized = {
          ...metadata,
          pointers: [],
          ...(apiAdded || {}),
        };

        if (api.type === "pointer") {
          apiSanitized.pointers.push(api.uri);
        } else {
          apiSanitized.location = api.uri;
        }

        if (!apiAdded) return [...acc, apiSanitized];
        apiAdded = apiSanitized;
        return acc;
      };

      return apis.reduce(sanitizeApis, []);
    } catch (error) {
      console.log("Error on method: Api.getAllActive() -> ", error.message);
      throw new Error(error);
    } finally {
      connection.done();
    }
  }

  public static async deactivate(id: number) {
    const connection = await db.connect();
    try {
      await connection.none("UPDATE apis SET visible = false WHERE id = $1", [
        id,
      ]);
    } catch (error) {
      console.log("Error on method: Api.deactivate() -> ", error.message);
      throw new Error(error);
    }
  }
}
