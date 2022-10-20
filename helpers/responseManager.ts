import { Response } from "express";
import {
  buildResponseUserStore,
  buildResponseLoginUserStore,
} from "./buildResponses";

export const responseSuccess = (resp: Response, data: any, code: any) => {
  resp.status(code).json({
    codigo: 0,
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
    codigo: data.codigo_de_error,
    mensage: `${data.mensaje}: ${payload.message}`,
  });
};

export const returnResponse = (
  resp: { [index: string]: any },
  descriptor: string
) => {
  if (descriptor === "userStore") return buildResponseUserStore(resp);
  if (descriptor === "loginUserStore") return buildResponseLoginUserStore(resp);
};
