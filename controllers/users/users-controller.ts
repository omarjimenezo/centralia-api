import boom from "@hapi/boom";
import { Request, Response } from "express";
import { responseError, responseSuccess } from "../../helpers/responseManager";
import { ICommonResponse } from "../../interfaces/common-interface";
import { createUserStore, getAllUsersStore } from "./users-store";

export const createUser = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const response: ICommonResponse | any = await createUserStore(body);
        if (response.code === 2) {
            responseError(res, response, boom.serverUnavailable());
        } else if (typeof response === "object") {
            response.code === 0
                ? responseSuccess(res, response, 200)
                : responseError(res, response, boom.badRequest());
        }
    } catch (error) {
        console.error("[createUserError]: ", error);
        const response = {
            code: 1,
            message: 'Hay un error inesperado, intenta de nuevo mas tarde'
        };
        return response;
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const response: ICommonResponse | any = await getAllUsersStore();
        if (response.code === 2) {
            responseError(res, response, boom.serverUnavailable());
        } else if (typeof response === "object") {
            response.code === 0
                ? responseSuccess(res, response, 200)
                : responseError(res, response, boom.badRequest());
        }
    } catch (error) {
        console.error("[getAllUsersError]: ", error);
        const response = {
            code: 1,
            message: 'Hay un error inesperado, intenta de nuevo mas tarde'
        };
        return response;
    }
};