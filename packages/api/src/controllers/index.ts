import { Router } from "express";

import { UserController } from "./users";
import { AuthController } from "./auth";
import { ApiController } from "./apis";

const router = Router();

const controllerRouters = [
  {
    path: "/apis",
    controller: ApiController,
  },
  {
    path: "/auth",
    controller: AuthController,
  },
  {
    path: "/users",
    controller: UserController,
  },
];

controllerRouters.forEach(({ path, controller }) => {
  router.use(path, controller);
});

export { router as controllers };
