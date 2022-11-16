import { model, Schema } from "mongoose";
import { IBusiness, IBusinessCategories } from "../interfaces/business-interface";

const businessSchema = new Schema<IBusiness>({
    nombre: { type: String, requiered: true },
    categoria_id: { type: Schema.Types.ObjectId, ref: "BusinessCategories", alias: "categoria" },
    direccion: { type: String, requiered: true },
    logo: { type: String, requiered: false },
    fachada: { type: String, requiered: false },
    codigo_recomendacion: { type: String, requiered: false },
    telefono_negocio: { type: Number, requiered: false },
    calificacion: { type: Number, requiered: false },
});

const businessCategoriesSchema = new Schema<IBusinessCategories>({
    nombre: { type: String, requiered: true },
});

businessSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id; delete ret.categoria_id }
});

businessCategoriesSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) { delete ret._id }
});

const Business = model<IBusiness>("Business", businessSchema);
const BusinessCategories = model<IBusinessCategories>("BusinessCategories", businessCategoriesSchema);

export const models = { Business, BusinessCategories };
