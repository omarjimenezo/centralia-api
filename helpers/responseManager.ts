import { Response } from "express";
import { ICommonResponse } from "../interfaces/common-interface";

export const responseSuccess = (resp: Response, data: ICommonResponse, code: any) => {
    resp.status(code).json({
        codigo: 0,
        mesaje: data.message,
        data: data.data,
    });
};

export const responseError = (
    resp: Response,
    data: ICommonResponse,
    code: any | number
) => {
    const { output } = code;
    const { statusCode, payload } = output;
    resp.status(statusCode).json({
        codigo: data.code,
        mensage: `${data.message}: ${payload.message}`,
    });
};
