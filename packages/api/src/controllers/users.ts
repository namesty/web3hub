import { NextFunction, Request, Response, Router } from "express";
import { authenticate } from "passport";

import { User } from "../models/User";
import { fetchOrganizations } from "../services/github";

const router = Router();

const isLoggedWithGithub = (
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

const handleSignIn = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { address, addressType } = request.body;

  if (address) {
    const user = await User.findOrCreateByAddress({
      address,
      addressType,
    });
    return response.json({
      status: 200,
      user,
    });
  }

  return next();
};

const authScopes = authenticate("github", {
  scope: ["read:org", "read:user"],
});

const onErrorAuthHandler = authenticate("github", {
  failureRedirect: "/login",
});

const onSuccessAuthHandler = ({ user }: Request, response: Response) => {
  response.json({ status: 200, user });
};

router.get("/user/orgs", isLoggedWithGithub, userOrganizations);

router.get("/auth/sign-in", handleSignIn, authScopes);
router.get("/auth/github/callback", onErrorAuthHandler, onSuccessAuthHandler);
router.get("/auth/sign-out", (request: Request, response: Response) => {
  request.logout();
  response.json({ status: 200 });
});

export { isLoggedWithGithub, router as AuthController };
