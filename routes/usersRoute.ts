import express from "express";
import { createUser } from "../controllers/users/users-controller";

const routerUser = express.Router();

routerUser.post("/create-user", createUser);

export default routerUser;
