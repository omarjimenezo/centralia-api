import boom from "@hapi/boom";
import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../helpers/responseManager";
import { loginUserStore } from "./auth-store";

export const auth = async (req: Request, res: Response) => {
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