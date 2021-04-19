import { Request, Response, Router } from "express";

import { fetchOrganizations } from "../services/github";
import { checkAccessToken } from "./auth";

const router = Router();

const userOrganizations = async (request: Request, response: Response) => {
  if (!request.accessToken) {
    return response.json({
      status: 404,
      message: "Access Token missing in Authorization header",
    });
  }

  const orgs = await fetchOrganizations(request.accessToken);
  return response.json({
    status: 200,
    orgs,
  });
};

router.get("/orgs", checkAccessToken, userOrganizations);

export { router as UserController };
