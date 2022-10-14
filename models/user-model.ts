import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user-interface";

const userSchema = new Schema<IUser>({
  avatar: { type: String, requiered: true },
  businessPhone: Number,
  confirmPassword: { type: String, required: true },
  lastName: { type: String, required: true },
  name: { type: String, required: true },
  personalPhone: { type: Number, required: true },
  password: { type: String, required: true },
  rol: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
});
const User = model<IUser>("User", userSchema);
export const models = { User };
