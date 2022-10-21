import express from "express";
import { auth } from "../controllers/auth/auth-controller";
import { validationHandler } from "../middlewares/validationHandler";
import { authSchema } from "../schemas/authSchema";

const routerAuth = express.Router();

routerAuth.post(
  "/",
  validationHandler(authSchema, "body"),
  auth
);

export default routerAuth;
