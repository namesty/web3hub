import { NextFunction, Request, Response, Router } from "express";
import { authenticate } from "passport";

import { fetchOrganizations } from "services/github";

const router = Router();

export const isLoggedWithGithub = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (request.isAuthenticated()) return next();
  response.json({
    status: 404,
    message: "Authentication with GitHub is required",
  });
};

const userOrganizations = async (request: Request, response: Response) => {
  const orgs = await fetchOrganizations(request.user.accessToken);
  return response.json({
    status: 200,
    orgs,
  });
};

const authScopes = authenticate("github", {
  scope: ["read:org", "read:user"],
});

const onErrorAuthHandler = authenticate("github", {
  failureRedirect: "/login",
});

const onSuccessAuthHandler = (_, response: Response) => {
  response.redirect("/");
};

router.get("/user/orgs", isLoggedWithGithub, userOrganizations);

router.get("/auth/github", authScopes);
router.get("/auth/github/callback", onErrorAuthHandler, onSuccessAuthHandler);
router.get("/auth/session/remove", (request: Request, response: Response) => {
  request.logout();
  response.json({ status: 200 });
});

export default router;
