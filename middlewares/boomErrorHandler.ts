import { Request, Response, NextFunction } from "express";

export const boomErroHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
    return false;
  }
  next(err);
};
