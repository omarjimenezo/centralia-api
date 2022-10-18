import { encryptPassword } from "../../helpers/encrypt";
import { models } from "../../models/user-model";
import { IUser, messageDB } from "../../interfaces/user-interface";
import { generateJWT } from "../../utils/jwt";

const dataResponse: messageDB = {
  mensaje: "",
};
const returnResponse = (
  isUnique: any,
  responseDB: any = undefined,
  token: string | undefined = undefined
) => {
  if (token) {
    dataResponse.mensaje = "usuario creado";
    dataResponse.token = token;
    return dataResponse;
  } else if (isUnique) {
    dataResponse.mensaje = "Algo salio mal al crear el usuario";
    dataResponse.codigo_de_error = 1;
    return dataResponse;
  } else if (!responseDB) {
    dataResponse.mensaje = "Algo salio mal al crear el usuario";
    dataResponse.codigo_de_error = 1;
  }
};

export const createUserStore = async (body: { [index: string]: any }) => {
  try {
    const { User } = models;
    const { email } = body;
    const isUniqueEmail = await User.findOne({ email });
    if (!isUniqueEmail) {
      const encryptData = encryptPassword(body);
      const user = new User<IUser>(encryptData);
      const responseDB = await user.save();
      //generate JWT
      if (responseDB) {
        const { _id: uid, nombre, rol } = responseDB;
        const token = await generateJWT({ uid, nombre, rol });
        const data = returnResponse(isUniqueEmail, responseDB, token);
        return data;
      }
      const data = returnResponse(isUniqueEmail, responseDB);
      return data;
    } else {
      const data = returnResponse(isUniqueEmail);
      return data;
    }
  } catch (error: any) {
    console.error("[createUserStoreFail]: ", error.message);
    return "Algo salio mal al crear el usuario";
  }
};
