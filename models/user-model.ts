import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user-interface";

const userSchema = new Schema<IUser>({
  avatar: { type: String, requiered: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  rol: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  personalPhone: { type: Number, required: true },
  businessPhone: Number,
  password: { type: String, required: true },
  confirmPassword: String,
});
const User = model<IUser>("User", userSchema);
export const models = { User };
