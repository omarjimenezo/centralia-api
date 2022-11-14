import { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/product-interface";

const productSchema = new Schema<IProduct>({
    descripcion: { type: String, required: true },
    categoria_id: { type: Schema.Types.ObjectId, ref: "ProductCategories" },
    codigo: { type: String, required: false },
    sku: { type: String, required: false },
    imagenes: [{ type: String, required: true }],
    etiquetas: [{ type: String, required: true }]
});
const Product = model<IProduct>("Product", productSchema);
export const models = { Product };
