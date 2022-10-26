import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controllers/users/users-controller";
import { validationHandler } from "../middlewares/validationHandler";
import { validateJWT } from "../middlewares/validateJWT";
import { userSchema, userIdSchema } from "../schemas/userSchema";

const routerUser = express.Router();

routerUser.post("/", validationHandler(userSchema, "body"), createUser);

routerUser.get("/", validateJWT, getAllUsers);

routerUser.get(
  "/:id",
  validateJWT,
  validationHandler(userIdSchema, "params"),
  getUserById
);

export default routerUser;
