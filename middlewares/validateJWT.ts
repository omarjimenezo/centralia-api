import jwt from "jsonwebtoken";
import boom from "@hapi/boom";
import { Request, Response, NextFunction } from "express";

export const validateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-token") as string;

  if (!token) {
    return next(boom.forbidden());
  }

  try {
    const jwtverified = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED as string,
      (err: any, decoded: any) => {
        if (err) {
          console.log("[errorVerifyJWT]: ", err.message);
          next(boom.badRequest());
          return false;
        }
        return decoded;
      }
    );
    next();
  } catch (error: any) {
    console.error("[errorValidateJWT]: ", error.message);
    next(boom.serverUnavailable());
  }
};
