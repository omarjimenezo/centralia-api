import express from "express";
import { createUser, getAllUsers } from "../controllers/users/users-controller";
import { validationHandler } from "../middlewares/validationHandler";
import { userSchema } from "../schemas/userSchema";

const routerUser = express.Router();

routerUser.post("/", validationHandler(userSchema, "body"), createUser);

routerUser.get("/", getAllUsers);

export default routerUser;
