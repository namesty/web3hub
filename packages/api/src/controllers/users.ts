import axios from "axios";
import { NextFunction, Request, Response, Router } from "express";
import { authenticate } from "passport";

import { User } from "../models/User";
import { fetchOrganizations } from "../services/github";
import { ghCallback } from "../services/github/strategy";

const router = Router();

const checkAccessToken = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const auth = request.headers.authorization || "";
  const isAuthed = auth.includes("token");
  if (isAuthed) {
    const [_, token] = auth.split(" ");
    request.accessToken = token;
    return next();
  }
  response.json({
    status: 404,
    message: "Authentication with GitHub is required",
  });
};

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

const checkRedirectUri = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { redirectUrl } = request.query;
  if (redirectUrl) {
    request.redirectUrl = redirectUrl as string;
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

const authHandler = async (request: Request, response: Response) => {
  const data = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code: request.params.code,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const codeRequest = await axios.post(
    "https://github.com/login/oauth/access_token",
    data,
    config
  );

  if ("error" in codeRequest.data) {
    return response.json({
      status: 503,
      message: codeRequest.data.error,
    });
  }

  try {
    await ghCallback(codeRequest.data.access_token);
    return response.json({
      status: 200,
      ...codeRequest.data,
    });
  } catch (e) {
    return response.json({
      status: 503,
      error: e.message,
    });
  }
};

router.get("/user/orgs", checkAccessToken, userOrganizations);
router.get("/auth/sign-in", handleSignIn, checkRedirectUri, authScopes);
router.get("/auth/github/callback/:code", authHandler);

router.get("/auth/sign-out", (request: Request, response: Response) => {
  request.logout();
  response.json({ status: 200 });
});

export { checkAccessToken, router as AuthController };
