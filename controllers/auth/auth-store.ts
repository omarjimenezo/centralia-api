import bcrypt from "bcryptjs";
import { returnResponse } from "../../helpers/responseManager";
import { buildResp } from "../../interfaces/common-interface";
import { models } from "../../models/user-model";
import { generateJWT } from "../../utils/jwt";

export const loginUserStore = async (body: { [index: string]: any }) => {
  try {
    const descriptor = "loginUserStore";
    let buildObject: buildResp;
    const { User } = models;
    const { email, password } = body;
    const usuario = await User.findOne({ email });
    if (!usuario) {
      buildObject = {
        usuario,
      };
      return returnResponse(buildObject, descriptor);
    }
    const validPassword = bcrypt.compareSync(
      password,
      usuario.password as string
    );
    if (!validPassword) {
      buildObject = {
        validPassword,
      };
      return returnResponse(buildObject, descriptor);
    }
    const { _id: uid, nombre, rol } = usuario;
    const token = await generateJWT({ uid, nombre, rol });
    return { token, usuario };
  } catch (error: any) {
    console.error("[loginUserStoreError]: ", error.message);
    return "Hay un error inesperado, intenta de nuevo mas tarde";
  }
};
