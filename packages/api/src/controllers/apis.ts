import { Request, Response, Router } from "express";

import { Api, ApiData } from "../models/Api";
import { checkContentIsValid } from "../services/ens";

const router = Router();

const publishApi = async (request: Request, response: Response) => {
  try {
    const apiInfo: ApiData = {
      ownerId: request.body.userId,
      ...request.body,
    };

    const pointer = apiInfo.locations.find((api) => api.type === "pointer");
    const location = apiInfo.locations.find((api) => api.type === "location");

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
      message,
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

router.get("/api/actives", getAll);
router.post("/publish", publishApi);

export { router as ApiController };
