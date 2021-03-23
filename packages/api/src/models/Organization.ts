import db from "../services/db";

export class Organization {
  public static async get(orgId: number) {
    const connection = await db.connect();
    try {
      const organization = await connection.oneOrNone("");
      return organization;
    } catch (e) {
      console.log("Error on method: Organization.get() -> ", e.message);
      throw new Error(e);
    } finally {
      connection.done();
    }
  }
}
