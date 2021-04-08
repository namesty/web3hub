import { Request, Response, Router } from "express";

import { Api, ApiData } from "../models/Api";
import { SanitizeApis } from "../services/cronjob/checkApis";
import { checkContentIsValid } from "../services/ens";
import { validatePublishBody } from "./helpers";
import { checkAccessToken } from "./users";

const router = Router();

const publishApi = async (request: Request, response: Response) => {
  try {
    const apiInfo: ApiData = {
      ownerId: request.user.id,
      ...request.body,
    };

    const { location, pointers } = apiInfo;
    const { valid, message } = await checkContentIsValid(pointers, location);

    if (valid) {
      const api = await Api.create(apiInfo);
      return response.json({ status: 200, api });
    }

    return response.json({
      status: 406,
      error: message,
    });
  } catch (error) {
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

    apis.forEach(async (api: ApiData) => {
      const { valid } = await checkContentIsValid(api.pointers, api.location);
      if (!valid) Api.deactivate(api.id);
    });
  } catch (e) {
    console.log("Error when checking and updating apis -> ", e.message);
  }
};

router.get("/api/actives", getAll);
router.post("/publish", checkAccessToken, validatePublishBody, publishApi);

export { router as ApiController };
