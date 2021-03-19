import pgp from "pg-promise";

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:postgres@127.0.0.1:5432/web3hub";

export default pgp()(DATABASE_URL);
