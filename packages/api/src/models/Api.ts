import db from "../services/db";

export interface ApiData {
  name: string;
  description: string;
  icon: string;
  location: string;
  pointer: string;
  ownerId: string;
}

export class Api {
  public static async create(apiInfo: ApiData) {
    const connection = await db.connect();
    try {
      const { name, description, icon, location, pointer, ownerId } = apiInfo;
      const api = await connection.one(
        "INSERT INTO apis (name, description, icon, location, pointer, fk_owner_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [name, description, icon, location, pointer, ownerId]
      );
      return api;
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
