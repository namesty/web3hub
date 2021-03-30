import { Request, Response, Router } from "express";

import { Api, ApiData, ApiModel } from "../models/Api";
import { SanitizeApis } from "../services/cronjob/checkApis";
import { checkContentIsValid } from "../services/ens";
import { validatePublishBody } from "./helpers";
import { isLoggedWithGithub } from "./users";

const router = Router();

const publishApi = async (request: Request, response: Response) => {
  try {
    const apiInfo: ApiData = {
      ownerId: 1,
      ...request.body,
    };

    const pointer = apiInfo.locations.find((api) => api.type === "pointer");
    const location = apiInfo.locations.find((api) => api.type === "location");

    if (!pointer || !location) {
      return response.json({
        status: 400,
        error: "You need to send pointer AND location in Locations array",
      });
    }

    const { valid, message } = await checkContentIsValid(
      pointer.uri,
      location.uri
    );

    if (valid) {
      const api = await Api.create(apiInfo);
      return response.json({ status: 200, api });
    }

    return response.json({
      status: 406,
      error: message,
    });
  } catch (error) {
    if (error.message === "One of the locations has an invalid URI type") {
      return response.json({ status: 400, error: error.message });
    }

    response.json({ status: 500, error: error.message });
  }
};

const getAll = async (_: Request, response: Response) => {
  try {
    const apis = await Api.getAllActive();
    return response.json({
      status: 200,
      apis,
    });
  } catch (error) {
    response.json({ status: 500, error: error.message });
  }
};

export const checkAndUpdateApis = async () => {
  try {
    const apis = await Api.getAllActive();

    apis.forEach(async (api: ApiModel) => {
      const { valid } = await checkContentIsValid(api.pointer, api.location);
      if (!valid) Api.deactivate(api.id);
    });
  } catch (e) {
    console.log("Error when checking and updating apis -> ", e.message);
  }
};

SanitizeApis.getInstance();
router.get("/api/actives", getAll);
router.post("/publish", isLoggedWithGithub, validatePublishBody, publishApi);

export { router as ApiController };
