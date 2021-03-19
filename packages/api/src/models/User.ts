import db from "services/db";

declare global {
  namespace Express {
    export interface User extends UserData {}
  }
}

export interface UserData {
  accessToken: string;
  username: string;
}

export class User {
  public static async create({
    accessToken,
    username,
  }: UserData): Promise<string> {
    const connection = await db.connect();
    try {
      await connection.none(
        "INSERT INTO users (username, github_token) VALUES ($1, $2) ON CONFLICT (username) DO NOTHING ",
        [username, accessToken]
      );
      return username;
    } catch (e) {
      console.log("Error on method: User.create() -> ", e.message);
      throw new Error(e);
    } finally {
      connection.done();
    }
  }
}
