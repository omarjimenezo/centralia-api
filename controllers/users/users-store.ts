import { encryptPassword } from "../../helpers/encrypt";
import { returnResponse } from "../../helpers/responseManager";
import { buildResp, messageDB } from "../../interfaces/common-interface";
import { IUser } from "../../interfaces/user-interface";
import { models } from "../../models/user-model";
import { generateJWT } from "../../utils/jwt";

export const createUserStore = async (body: { [index: string]: any }) => {
  try {
    const { User } = models;
    const { email } = body;
    const descriptor = "userStore";
    let response: messageDB | undefined;
    let buildObject: buildResp;
    const isUniqueEmail = await User.findOne({ email });
    if (!isUniqueEmail) {
      const encryptData = encryptPassword(body);
      const user = new User<IUser>(encryptData);
      const responseDB = await user.save();
      //generate JWT
      if (responseDB) {
        const { _id: uid, nombre, rol } = responseDB;
        const token = await generateJWT({ uid, nombre, rol });
        buildObject = {
          token,
          isUniqueEmail,
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
    } else {
      buildObject = {
        isUniqueEmail,
      };
      response = returnResponse(buildObject, descriptor);
      return response;
    }
  } catch (error: any) {
    console.error("[createUserStoreFail]: ", error.message);
    return "Algo salio mal al crear el usuario";
  }
};

