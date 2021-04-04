import { NextFunction, Request, Response } from "express";
import { object, array, string } from "joi";

import { validateRequest } from "./validateRequest";

export const validatePublishBody = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  
  const schema = object({
    description: string().required(),
    name: string().required(),
    icon: string().required(),
    location: string().required(),
    pointers: array().items(string()),
  });

  validateRequest(request, response, next, schema);
};
