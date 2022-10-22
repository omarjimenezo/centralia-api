import bcrypt from "bcryptjs";
import { returnResponse } from "../../helpers/responseManager";
import { buildResp } from "../../interfaces/common-interface";
import { models } from "../../models/user-model";
import { generateJWT } from "../../utils/jwt";
import { number } from "joi";

export const loginUserStore = async (body: { [index: string]: any }) => {
  try {
    const descriptor = "loginUserStore";
    let buildObject: buildResp;
    const { User } = models;
    const { email, password } = body;
    const fieldsToRetrive = [
      "nombre",
      "apellido",
      "email",
      "telefono_personal",
      "rol",
      "avatar",
      "password",
    ];
    const usuario = await User.findOne({ email }, fieldsToRetrive);
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
    const {
      _id: uid,
      nombre,
      rol: usuarioRol,
      avatar,
      telefono_personal,
      apellido,
      email: usuarioEmail,
    } = usuario;
    const token = await generateJWT({ uid, nombre, usuarioRol });
    buildObject = {
      token,
      usuario: {
        nombre,
        apellido,
        usuarioEmail,
        avatar,
        rol: usuarioRol || 0,
        telefono_personal,
      },
    };
    return returnResponse(buildObject, descriptor);
  } catch (error: any) {
    console.error("[loginUserStoreError]: ", error.message);
    return "Hay un error inesperado, intenta de nuevo mas tarde";
  }
};
