import jwt from "jsonwebtoken";
import { argumenstJWT } from "../types/user-types";

export const generateJWT = async ({ uid, nombre, rol }: argumenstJWT) => {
  const payload = { uid, nombre, rol };
  try {
    return await new Promise<string>((resolve, reject) => {
      jwt.sign(
        payload,
        process.env.SECRET_JWT_SEED as string,
        {
          expiresIn: "120",
        },
        (err, token) => {
          if (err) {
            console.error("[errorGenerateJWT]: ", err);
            reject("We can't generate the token");
          }
          resolve(token as string);
        }
      );
    });
  } catch (err) {
    return "Something go wrong trying to genereate the token";
  }
};
