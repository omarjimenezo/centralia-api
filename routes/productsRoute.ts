import express from "express";
import {
    getProductssByBusinessId
} from "../controllers/products/products-controller";
import { validationHandler } from "../middlewares/validationHandler";
import { productSchema } from "../schemas/productSchema";

const routerProduct = express.Router();

routerProduct.get(
    "negocio/:id",
    validationHandler(productSchema, "params"),
    getProductssByBusinessId
);

export default routerProduct;
