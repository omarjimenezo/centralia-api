import { Response } from "express";

export const responseSuccess = (resp: Response, data: any, code: any) => {
  resp.status(code).json({
    error: false,
    message: "created",
    data,
  });
};
export const responseError = (
  resp: Response,
  data: any,
  code: any | number
) => {
  const { output } = code;
  const { statusCode, payload } = output;
  resp.status(statusCode).json({
    error: true,
    message: `${data}: ${payload.message}`,
  });
};
