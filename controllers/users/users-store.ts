import { encryptPassword } from "../../helpers/encrypt";
import { models } from "../../models/user-model";
import { IUser } from "../../interfaces/user-interface";
import { messageDB } from "../../types/user-types";
import { generateJWT } from "../../utils/jwt";
import { returnResponse } from "../../helpers/responseManager";

export const createUserStore = async (body: { [index: string]: any }) => {
  try {
    const { User } = models;
    const { email } = body;
    const isUniqueEmail = await User.findOne({ email });
    let response: messageDB | undefined;
    if (!isUniqueEmail) {
      const encryptData = encryptPassword(body);
      const user = new User<IUser>(encryptData);
      const responseDB = await user.save();
      //generate JWT
      if (responseDB) {
        const { _id: uid, nombre, rol } = responseDB;
        const token = await generateJWT({ uid, nombre, rol });
        response = returnResponse(isUniqueEmail, responseDB, token);
        return response;
      }
      response = returnResponse(isUniqueEmail, responseDB);
      return response;
    } else {
      response = returnResponse(isUniqueEmail);
      return response;
    }
  } catch (error: any) {
    console.error("[createUserStoreFail]: ", error.message);
    return "Algo salio mal al crear el usuario";
  }
};
