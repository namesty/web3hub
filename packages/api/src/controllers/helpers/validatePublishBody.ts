import { NextFunction, Request, Response } from "express";
import { object, array, string } from "joi";

import { validateRequest } from "./validateRequest";

export const validatePublishBody = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const locationSchema = object({
    uri: string().required(),
    authority: string().required(),
    type: string().valid("pointer", "location"),
  });

  const schema = object({
    description: string().required(),
    name: string().required(),
    icon: string().required(),
    locations: array().items(locationSchema),
  });

  validateRequest(request, response, next, schema);
};
