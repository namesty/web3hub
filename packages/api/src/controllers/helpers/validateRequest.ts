import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export function validateRequest(
  request: Request,
  response: Response,
  next: NextFunction,
  schema: Schema
) {
  const options = {
    abortEarly: false,
    stripUnknown: true,
  };

  const { value, error } = schema.validate(request.body, options);
  if (error) {
    return response.json({
      status: 400,
      message: `Error(s) on body: ${error.details
        .map((x) => x.message)
        .join(", ")}`,
    });
  }

  request.body = value;
  next();
}
