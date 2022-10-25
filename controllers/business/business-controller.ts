import boom from "@hapi/boom";
import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../helpers/responseManager";
import { messageDB } from "../../interfaces/common-interface";
import { createBusinessStore, getAllBusinessStore } from "./business-store";

export const createBusiness = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const response: string | any | messageDB = await createBusinessStore(body);
    if (typeof response === "string") {
      responseError(res, response, boom.serverUnavailable());
    } else if (typeof response === "object") {
      response
        ? responseSuccess(res, response, 200)
        : responseError(res, response, boom.badRequest());
    }
  } catch (error) {
    console.error("[createBusinessError]: ", error);
    return "Algo salio mal al crear el negocio";
  }
};

export const getAllBusiness = async (req: Request, res: Response) => {
  try {
    const response: string | any | messageDB = await getAllBusinessStore();
    if (typeof response === "string") {
      responseError(res, response, boom.serverUnavailable());
    } else if (typeof response === "object") {
      response
        ? responseSuccess(res, response, 200)
        : responseError(res, response, boom.badRequest());
    }
  } catch (error) {
    console.error("[getAllBusinessError]: ", error);
    return "Algo salio mal al obtener los negocios";
  }
};
