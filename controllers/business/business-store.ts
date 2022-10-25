import { returnResponse } from "../../helpers/responseManager";
import { buildResp, messageDB } from "../../interfaces/common-interface";
import { IBusiness } from "../../interfaces/business-interface";
import { models } from "../../models/business-model";

export const createBusinessStore = async (body: IBusiness) => {
  try {
    const { Business } = models;
    const descriptor = "createBusinessStore";
    let response: messageDB | undefined;
    let buildObject: buildResp;
    const business = new Business<IBusiness>(body);
    const responseDB = await business.save();
    if (responseDB) {
      buildObject = {
        responseDB,
      };
      response = returnResponse(buildObject, descriptor);
      return response;
    }
    buildObject = {
      responseDB,
    };
    response = returnResponse(buildObject, descriptor);
    return response;
  } catch (error: any) {
    console.error("[createBusinessStoreFail]: ", error.message);
    return "Algo salio mal al crear el negocio";
  }
};

export const getAllBusinessStore = async () => {
  try {
    const descriptor = "getAllBusinessStore";
    const { Business } = models;
    let response: messageDB | undefined;
    let buildObject: buildResp;
    const responseDB = await Business.find();
    if (responseDB) {
      buildObject = {
        responseDB,
      };
      response = returnResponse(buildObject, descriptor);

      return response;
    }
    buildObject = {
      responseDB,
    };
    response = returnResponse(buildObject, descriptor);
    return response;
  } catch (error: any) {
    console.error("[getAllBusinessStoreFail]: ", error.message);
    return "Algo salio mal al obtener los negocios";
  }
};
