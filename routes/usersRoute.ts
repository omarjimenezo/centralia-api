import express from "express";
import { createUser } from "../controllers/users/users-controller";
import { userSchema } from "../schemas/userSchema";
import { validationHandler } from "../middlewares/validationHandler";

const routerUser = express.Router();

routerUser.post(
  "/create-user",
  validationHandler(userSchema, "body"),
  createUser
);

export default routerUser;
