import bcrypt from "bcryptjs";
import { encryptPassword } from "../../helpers/encrypt";
import { models } from "../../models/user-model";
import { IUser } from "../../interfaces/user-interface";
import { messageDB, buildResp } from "../../interfaces/common-interface";
import { generateJWT } from "../../utils/jwt";
import { returnResponse } from "../../helpers/responseManager";

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

export const loginUserStore = async (body: { [index: string]: any }) => {
  try {
    const descriptor = "loginUserStore";
    let buildObject: buildResp;
    const { User } = models;
    const { email, password } = body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      buildObject = {
        findUser,
      };
      return returnResponse(buildObject, descriptor);
    }
    const validPassword = bcrypt.compareSync(
      password,
      findUser.password as string
    );
    if (!validPassword) {
      buildObject = {
        validPassword,
      };
      return returnResponse(buildObject, descriptor);
    }
    const { _id: uid, nombre, rol } = findUser;
    const token = await generateJWT({ uid, nombre, rol });
    return { token };
  } catch (error: any) {
    console.error("[loginUserStoreError]: ", error.message);
    return "Hay un error inesperado, intenta de nuevo mas tarde";
  }
};
