import apis from "./apis.json";
import models from "./models.json";
import auth from "./auth.json";

export const swaggerJSON = {
  swagger: "2.0",
  info: {
    title: "Web3Hub API",
    version: "0.0.1-alpha",
    description: "Restful API from Web3HUB",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Web3API",
      url: "https://web3api.dev/#/",
    },
  },
  paths: {
    ...auth,
    ...apis,
  },
  definitions: {
    ...models
  },
};
