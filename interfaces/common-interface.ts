import { Schema, Types } from "mongoose";

export type ICommonResponse = {
    code: number;
    message: string;
    data?: any;
}

export type argumenstJWT = {
    nombre: string;
    uid: Types.ObjectId;
    usuarioRol: number | undefined;
};
