import express from "express";
import {
  createBusiness,
  getAllBusiness,
  getBusinessById,
} from "../controllers/business/business-controller";
import { validationHandler } from "../middlewares/validationHandler";
import { businessSchema, negocioIdSchema } from "../schemas/businessSchema";
import { uploadFilesMiddleware } from "../middlewares/uploadFiles";
import { validateJWT } from "../middlewares/validateJWT";

const routerBusiness = express.Router();
routerBusiness.post(
  "/",
  uploadFilesMiddleware("createBusiness"),
  validationHandler(businessSchema, "body"),
  createBusiness
);

routerBusiness.get("/", getAllBusiness);
routerBusiness.get(
  "/:id",
  validateJWT,
  validationHandler(negocioIdSchema, "params"),
  getBusinessById
);

export default routerBusiness;
