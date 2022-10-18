import { Types } from "mongoose";

enum rolUser {
  Provider = "provider",
  Business = "business",
  Agent = "agent",
}

export interface IUser {
  avatar: string;
  name: string;
  lastName: string;
  rol: rolUser;
  email: string;
  businessPhone?: number;
  personalPhone: number;
  password: string;
  confirmPassword: string;
}

export type messageDB = {
  message?: string;
};

export type argumenstJWT = {
  name: string;
  uid: Types.ObjectId;
  rol: string;
};
