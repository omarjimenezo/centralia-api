import { number } from "joi";
import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user-interface";

const userSchema = new Schema<IUser>({
  avatar: { type: String, requiered: true },
  confirmPassword: { type: String, required: true },
  apellido: { type: String, required: true },
  nombre: { type: String, required: true },
  telefono_personal: { type: Number, required: true },
  password: { type: String, required: true },
  rol: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
});
const User = model<IUser>("User", userSchema);
export const models = { User };
