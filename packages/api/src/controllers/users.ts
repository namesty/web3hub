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

const checkRedirectUri = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { redirectUrl } = request.query;
  if (redirectUrl) {
    request.redirectUrl = redirectUrl as string;
    console.log("This is the redirect url ", request.redirectUrl);
    return next();
  }

  return response.json({
    status: 400,
    message: "Redirect URL has not been sent",
  });
};

const handleSignIn = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { address, addressType } = request.query;
  try {
    if (address) {
      // @TODO: Improve this
      const user = await User.findOrCreateByAddress({
        address: address as string,
        addressType: Number(addressType) || 1,
      });
      return response.json({
        status: 200,
        user,
      });
    }
  } catch (error) {
    response.json({
      status: 500,
      error: error.message,
    });
  }

  return next();
};

const authScopes = authenticate("github", {
  scope: ["read:org", "read:user"],
});

const onSuccessAuthHandler = (request: Request, response: Response) => {
  console.log(request.redirectUrl);
  response.json({ test: "test" });
};

router.get("/user/orgs", isLoggedWithGithub, userOrganizations);
router.get("/auth/sign-in", handleSignIn, checkRedirectUri, authScopes);
router.get(
  "/auth/github/callback",
  authenticate("github"),
  onSuccessAuthHandler
);
router.get("/auth/sign-out", (request: Request, response: Response) => {
  request.logout();
  response.json({ status: 200 });
});

export { isLoggedWithGithub, router as AuthController };
