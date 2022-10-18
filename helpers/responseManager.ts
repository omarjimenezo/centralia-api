import { Response } from "express";

export const responseSuccess = (resp: Response, data: any, code: any) => {
  resp.status(code).json({
    codigo: 0,
    mensaje: "Usuario Creado",
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
    codigo: 1,
    mensage: `${data}: ${payload.message}`,
  });
};
