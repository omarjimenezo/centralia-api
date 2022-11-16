import boom from "@hapi/boom";
import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../helpers/responseManager";
import { ICommonResponse } from "../../interfaces/common-interface";
import { authStore } from "./auth-store";

export const auth = async (req: Request, res: Response) => {
    try {
        const response: ICommonResponse | any = await authStore(req.body);
        if (response.code === 2) {
            responseError(res, response, boom.internal());
        } else if (typeof response === "object") {
            (response?.data && typeof response?.data.token)
                ? responseSuccess(res, response, 200)
                : responseError(res, response, boom.badRequest());
        }
    } catch (error) {
        console.error("[loginUserError]: ", error);
        const response = {
            code: 1,
            message: 'Hay un error inesperado, intenta de nuevo mas tarde'
        };
        return response;
    }
};