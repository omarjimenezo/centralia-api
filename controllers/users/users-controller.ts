import boom from "@hapi/boom";
import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../helpers/responseManager";
import { messageDB } from "../../interfaces/common-interface";
import { createUserStore } from "./users-store";

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
