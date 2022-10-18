import boom from "@hapi/boom";
import { Request, Response } from "express";
import { createUserStore } from "./users-store";
import { responseError, responseSuccess } from "../../helpers/responseManager";
import { messageDB } from "../../interfaces/user-interface";

export const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data: string | any | messageDB = await createUserStore(body);
    if (typeof data === "string") {
      responseError(res, data, boom.serverUnavailable());
    } else if (typeof data === "object") {
      data?.message
        ? responseError(res, data.message, boom.badRequest())
        : responseSuccess(res, data, 201);
    }
  } catch (error) {
    console.error("[createUserError]: ", error);
    return "Something go wrong trying to create the user";
  }
};

export const loginUser = async (req: Request, res: Response) => {};
