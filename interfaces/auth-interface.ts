import { Types } from "mongoose";

export type argumenstJWT = {
    nombre: string;
    uid: Types.ObjectId;
    rol: string;
};
