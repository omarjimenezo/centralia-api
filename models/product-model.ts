import { model, Schema } from "mongoose";
import { IProductCatalog } from "../interfaces/product-interface";

const productSchema = new Schema<IProductCatalog>({
    producto_id: { type: Number, requiered: true },
    proveedor_id: { type: Number, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    presentacion: { type: String, required: true },
    categoria_id: { type: Number, required: true },
});
const Product = model<IProductCatalog>("Product", productSchema);
export const models = { Product };
