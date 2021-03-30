import db from "../services/db";

type Location = {
  uri: string;
  authority: string;
  type: "pointer" | "location";
};

export interface ApiData {
  name: string;
  description: string;
  icon: string;
  locations: Location[];
  ownerId: string;
}

export enum Authorities {
  ENS = 1,
  IPFS,
}

export class Api {
  public static async create(apiInfo: ApiData) {
    const connection = await db.connect();
    try {
      const { name, description, icon, locations, ownerId } = apiInfo;
      const uris = {};

      const insertApi = async (tx) => {
        const api = await tx.one(
          "INSERT INTO apis (name, description, icon, fk_owner_id) VALUES ($1, $2, $3, $4) RETURNING *",
          [name, description, icon, ownerId]
        );

        const insertUris = async (location, index) => {
          const name = location.authority;
          uris[name] = locations[index].uri;
          const authId = Authorities[name.toUpperCase()];
          
          if (!(location.authority === name)) {
            throw new Error(`Authority ${name} is not supported`);
          }

          await tx.none(
            "INSERT INTO api_uris (uri, fk_api_id, fk_uri_type_id) VALUES ($1, $2, $3)",
            [uris[name], api.id, authId]
          );
        };
        locations.map(insertUris);
      };

      await connection.tx(insertApi);
      return {
        name,
        description,
        icon,
        uris,
      };
    } catch (error) {
      console.log("Error on method: Api.create() -> ", error.message);
      throw new Error(error);
    } finally {
      connection.done();
    }
  }

  public static async getAllActive() {
    const connection = await db.connect();
    try {
      const apis = await connection.many(
        "SELECT * FROM apis WHERE visible = true"
      );
      return apis;
    } catch (error) {
      console.log("Error on method: Api.getAllActive() -> ", error.message);
      throw new Error(error);
    } finally {
      connection.done();
    }
  }
}
