import { Types } from "mongoose";

export type argumenstJWT = {
    nombre: string;
    uid: Types.ObjectId;
    rol: string;
};

export const fieldsToRetrive: Array<string> = [
    "nombre",
    "apellido",
    "email",
    "telefono_personal",
    "rol",
    "avatar",
    "password",
    "negocio_id",
];
