import express from "express";
import { createUser, loginUser } from "../controllers/users/users-controller";
import { userSchema, loginUserSchema } from "../schemas/userSchema";
import { validationHandler } from "../middlewares/validationHandler";

const routerUser = express.Router();

routerUser.post(
  "/create-user",
  validationHandler(userSchema, "body"),
  createUser
);

routerUser.post(
  "/AuthReq",
  validationHandler(loginUserSchema, "body"),
  loginUser
);

export default routerUser;
