import db from "../services/db";

declare global {
  namespace Express {
    export interface User extends UserData {}
  }
}

export interface UserData {
  id: string;
  accessToken: string;
  username: string;
  address: string;
  addressType: number;
  githubId: string;
}

export enum AddressesTypes {
  ETHEREUM = 1,
}

export class User {
  public static async findOrCreateByGithub({
    accessToken,
    username,
    githubId,
  }: Pick<UserData, "accessToken" | "username" | "githubId">): Promise<
    Partial<UserData>
  > {
    const connection = await db.connect();
    try {
      const user = await connection.oneOrNone(
        "INSERT INTO users (username, github_id, github_token) VALUES ($1, $2, $3) ON CONFLICT (username) DO NOTHING RETURNING *",
        [username, githubId, accessToken]
      );
      if (user) return user;
      const data = await connection.one(
        "SELECT users.id, addresses.address, users.username, users.github_token FROM addresses RIGHT JOIN users ON addresses.fk_user_id = users.id WHERE users.github_id = $1",
        [githubId]
      );
      return data;
    } catch (error) {
      console.log(
        "Error on method: User.findOrCreateByGithub() -> ",
        error.message
      );
      throw new Error(error);
    } finally {
      connection.done();
    }
  }

  public static async findOrCreateByAddress({
    address,
    addressType = AddressesTypes.ETHEREUM,
  }: Pick<UserData, "address" | "addressType">): Promise<Partial<UserData>> {
    const connection = await db.connect();
    try {
      const user = await connection.oneOrNone(
        "SELECT users.id, addresses.address, users.username, users.github_token FROM addresses INNER JOIN users ON addresses.fk_user_id = users.id WHERE address = $1",
        [address]
      );
      if (user) return user;
      const createUserAndInsertAddress = async (tx) => {
        const user = await tx.one(
          "INSERT INTO users DEFAULT VALUES RETURNING id"
        );
        await tx.none(
          "INSERT INTO addresses (address, fk_user_id, fk_address_type_id) VALUES ($1, $2, $3)",
          [address, user.id, addressType]
        );
      };

      await db.tx(createUserAndInsertAddress);
      return {
        address,
        id: user.id,
      };
    } catch (error) {
      console.log(
        "Error on method: User.findOrCreateByAddress() -> ",
        error.message
      );
      throw new Error(error);
    } finally {
      connection.done();
    }
  }
}
