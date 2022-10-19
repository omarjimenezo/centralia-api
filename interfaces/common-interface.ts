import { Types } from "mongoose";

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
