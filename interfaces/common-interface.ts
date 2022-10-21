import { Types } from "mongoose";
import { IUser } from "./user-interface";

export type messageDB = {
  mensaje: string;
  nombre?: string;
  rol?: string;
  token?: string | undefined;
  codigo_de_error?: number;
};

export type argumenstJWT = {
  nombre: string;
  uid: Types.ObjectId;
  rol: number | undefined;
};

export type buildResp = {
  token?: string;
  isUniqueEmail?: any;
  responseDB?: any;
  usuario?: any;
  validPassword?: boolean;
};
