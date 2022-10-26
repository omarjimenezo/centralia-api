import express from "express";
import { createBusiness, getAllBusiness } from "../controllers/business/business-controller";
import { validationHandler } from "../middlewares/validationHandler";
import { businessSchema } from "../schemas/businessSchema";

const routerBusiness = express.Router();

routerBusiness.post("/", validationHandler(businessSchema, "body"), createBusiness);

routerBusiness.get("/", getAllBusiness);

export default routerBusiness;
