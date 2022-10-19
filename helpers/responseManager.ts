import { Response } from "express";
import { messageDB } from "../types/user-types";

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
  isUnique: any,
  responseDB: any = undefined,
  token: string | undefined = undefined
) => {
  const dataResponse: messageDB = {
    mensaje: "",
  };
  if (token) {
    dataResponse.mensaje = "usuario creado";
    dataResponse.token = token;
    dataResponse.nombre = responseDB.nombre;
    dataResponse.rol = responseDB.rol;
    return dataResponse;
  } else if (isUnique) {
    dataResponse.mensaje = "Algo salio mal al crear el usuario";
    dataResponse.codigo_de_error = 1;
    return dataResponse;
  } else if (!responseDB) {
    dataResponse.mensaje = "Algo salio mal al crear el usuario";
    dataResponse.codigo_de_error = 1;
    return dataResponse;
  }
};
