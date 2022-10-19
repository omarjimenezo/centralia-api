import Joi from "joi";
import { Response, NextFunction } from "express";
import boom from "@hapi/boom";

export const validationHandler = (
  schema: Joi.ObjectSchema<any>,
  property: string
) => {
  return (req: { [index: string]: any }, res: Response, next: NextFunction) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      console.error("[ErrorDetails]:", error.details);
      next(boom.badRequest());
    }
    next();
  };
};
