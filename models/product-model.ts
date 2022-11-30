import { model, Schema } from "mongoose";
import { IProduct } from "../interfaces/product-interface";

const productSchema = new Schema<IProduct>({
    descripcion: { type: String, required: true },
    categoria_id: { type: Schema.Types.ObjectId, ref: "ProductCategories", alias: "categoria" },
    codigo: { type: String, required: false },
    sku: { type: String, required: false },
    imagenes: [
        { type: String, required: true },
        { type: Boolean, required: true },
    ],
    etiquetas: [{ type: String, required: true }]
});

productSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id; delete ret.categoria_id }
});

const Product = model<IProduct>("Product", productSchema);
export const models = { Product };
