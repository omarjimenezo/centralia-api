import bcrypt from "bcryptjs";
import { buildFields } from "../../helpers/buildFields";
import { fieldsToRetrive } from "../../interfaces/auth-interface";
import { ICommonResponse } from "../../interfaces/common-interface";
import { models } from "../../models/user-model";
import { generateJWT } from "../../utils/jwt";

export const authStore = async (body: any) => {
    try {
        const { User } = models;
        const { email, password } = body;

        let response: ICommonResponse | undefined;
        const fields = buildFields(fieldsToRetrive);
        const usuario = await User.findOne({ email }, fields);

        if (!usuario) {
            return (response = {
                code: 1,
                message: "Usuario/Contraseña no validos",
            });
        }

        const validPassword = bcrypt.compareSync(
            password,
            usuario.password as string
        );

        if (!validPassword) {
            return (response = {
                code: 1,
                message: "Usuario/Contraseña no validos",
            });
        }

        const {
            _id: uid,
            nombre,
            rol: usuarioRol,
            avatar,
            telefono_personal,
            apellido,
            email: usuarioEmail,
            negocio_id,
        } = usuario;

        const token = await generateJWT({ uid, nombre, usuarioRol });

        return (response = {
            code: 0,
            message: "Usuario autenticado",
            data: {
                token,
                usuario: {
                    nombre,
                    apellido,
                    usuarioEmail,
                    avatar,
                    rol: usuarioRol || 2,
                    telefono_personal,
                    negocio_id,
                },
            },
        });
    } catch (error: any) {
        console.error("[loginUserStoreError]: ", error.message);
        const response = {
            code: 2,
            message: "Hay un error inesperado, intenta de nuevo mas tarde",
        };
        return response;
    }
};
