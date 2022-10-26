import { IBusiness } from "../../interfaces/business-interface";
import { ICommonResponse } from "../../interfaces/common-interface";
import { models } from "../../models/business-model";

export const createBusinessStore = async (body: IBusiness) => {
    try {
        const { Business } = models;

        let response: ICommonResponse | undefined;
        const business = new Business<IBusiness>(body);
        const responseDB = await business.save();

        if (responseDB) {
            return response = {
                code: 0,
                message: 'Negocio creado'
            };
        }
    } catch (error: any) {
        console.error("[createBusinessStoreFail]: ", error.message);
        const response = {
            code: 2,
            message: "Algo salio mal al crear el negocio"
        };

        return response;
    }
};

export const getAllBusinessStore = async () => {
    try {
        const { Business } = models;

        let response: ICommonResponse | undefined;
        const responseDB = await Business.find();
        if (responseDB) {
            return response = {
                code: 0,
                message: 'Operacion exitosa',
                data: responseDB
            };
        }
    } catch (error: any) {
        console.error("[getAllBusinessStoreFail]: ", error.message);
        const response = {
            code: 2,
            message: "Algo salio mal al obtener los negocios"
        };

        return response;
    }
};
