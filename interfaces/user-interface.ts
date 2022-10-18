import { Types } from "mongoose";

enum rolUser {
  Proveedor = "proveedor",
  Vendedor = "vendedor",
  Agente = "agente",
}

export interface IUser {
  avatar: string;
  nombre: string;
  apellido: string;
  rol: rolUser;
  email: string;
  telefono_negocio?: number;
  telefono_personal: number;
  password: string;
  confirmPassword: string;
}

export type messageDB = {
  mensaje?: string;
};

export type argumenstJWT = {
  nombre: string;
  uid: Types.ObjectId;
  rol: string;
};
