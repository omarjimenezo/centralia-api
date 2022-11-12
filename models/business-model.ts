import { model, Schema } from "mongoose";
import { IBusiness } from "../interfaces/business-interface";

const businessSchema = new Schema<IBusiness>({
    nombre: { type: String, requiered: true },
    categoria_id: { type: Number, requiered: true },
    direccion: { type: String, requiered: true },
    logo: { type: String, requiered: false },
    fachada: { type: String, requiered: false },
    codigo_recomendacion: { type: String, requiered: false },
    telefono_negocio: { type: Number, requiered: false },
    calificacion: { type: Number, requiered: false },
});
const Business = model<IBusiness>("Business", businessSchema);
export const models = { Business };
