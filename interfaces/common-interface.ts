import { Types } from "mongoose";
import { Request } from "express";

export type ICommonResponse = {
  code: number;
  message: string;
  data?: any;
};

export type argumenstJWT = {
  nombre: string;
  uid: Types.ObjectId;
  usuarioRol: number | undefined;
};

export type JwtPayload = {
  uid: string;
  nombre: string;
  usuarioRol: number;
  fechaExpiracion: number;
  emitido: number;
};
