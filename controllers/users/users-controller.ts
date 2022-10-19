import boom from "@hapi/boom";
import { Request, Response } from "express";
import { createUserStore } from "./users-store";
import { responseError, responseSuccess } from "../../helpers/responseManager";
import { messageDB } from "../../types/user-types";

export const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data: string | any | messageDB = await createUserStore(body);
    if (typeof data === "string") {
      responseError(res, data, boom.serverUnavailable());
    } else if (typeof data === "object") {
      data?.token && typeof data?.token === "string"
        ? responseSuccess(res, data, 201)
        : responseError(res, data, boom.badRequest());
    }
  } catch (error) {
    console.error("[createUserError]: ", error);
    return "Algo salio mal al crear el usuario";
  }
};

export const loginUser = async (req: Request, res: Response) => {};
