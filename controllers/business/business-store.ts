import { encryptPassword } from "../../helpers/encrypt";
import { returnResponse } from "../../helpers/responseManager";
import { buildResp, messageDB } from "../../interfaces/common-interface";
import { IBusiness } from "../../interfaces/business-interface";
import { models } from "../../models/business-model";
import { generateJWT } from "../../utils/jwt";

export const createBusinessStore = async (body: IBusiness) => {
  try {
    const { Business } = models;
    const descriptor = "businessStore";
    let response: messageDB | undefined;
    let buildObject: buildResp;
    const business = new Business<IBusiness>(body);
    const responseDB = await business.save();

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
    const descriptor = "businessStore";
    const { Business } = models;
    const business = await Business.find();

    const response = returnResponse(business, descriptor);

    return response;

  } catch (error: any) {
    console.error("[getAllBusinessStoreFail]: ", error.message);
    return "Algo salio mal al obtener los negocios";
  }
};
