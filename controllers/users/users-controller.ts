import boom from "@hapi/boom";
import { Request, Response } from "express";
import { createUserStore, loginUserStore } from "./users-store";
import { responseError, responseSuccess } from "../../helpers/responseManager";
import { messageDB } from "../../interfaces/common-interface";

export const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const response: string | any | messageDB = await createUserStore(body);
    if (typeof response === "string") {
      responseError(res, response, boom.serverUnavailable());
    } else if (typeof response === "object") {
      response?.token && typeof response?.token === "string"
        ? responseSuccess(res, response, 201)
        : responseError(res, response, boom.badRequest());
    }
  } catch (error) {
    console.error("[createUserError]: ", error);
    return "Algo salio mal al crear el usuario";
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const response = await loginUserStore(req.body);
    if (typeof response === "string") {
      responseError(res, response, boom.serverUnavailable());
    } else if (typeof response === "object") {
      response?.token && typeof response?.token === "string"
        ? responseSuccess(res, response, 201)
        : responseError(res, response, boom.badRequest());
    }
  } catch (error) {
    console.error("[loginUserError]: ", error);
    return "Hay un error inesperado, intenta de nuevo mas tarde";
  }
};
