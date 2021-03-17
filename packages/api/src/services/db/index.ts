import pgp from "pg-promise";

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost/web3hub";

export default pgp()(DATABASE_URL);
