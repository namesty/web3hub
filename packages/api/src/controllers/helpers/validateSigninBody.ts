import { Request, Response, NextFunction } from "express";
import { object, string } from "joi";
import { validateRequest } from "./validateRequest";

export const validateSigninBody = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  
  const schema = object({
    address: string(),
  });

  validateRequest(request, response, next, schema);
};
