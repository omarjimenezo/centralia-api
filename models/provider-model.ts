import { model, Schema } from "mongoose";
import { IProvider } from "../interfaces/provider-interface";

const providerSchema = new Schema<IProvider>({
    nombre: { type: String, requiered: true },
    categoria_id: { type: Number, requiered: true },
    calle: { type: String, requiered: true },
    numero_ext: { type: Number, requiered: true },
    numero_int: { type: String, requiered: false },
    codigo_postal: { type: Number, requiered: true },
    colonia: { type: String, requiered: true },
    logo: { type: String, requiered: false },
    fachada: { type: String, requiered: false },
    codigo_recomendacion: { type: String, requiered: false },
    telefono_negocio: { type: Number, requiered: false },
    calificacion: { type: Number, requiered: false },
});
const Provider = model<IProvider>("Provider", providerSchema);
export const models = { Provider };
