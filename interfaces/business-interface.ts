import { Schema } from "mongoose";

export interface IBusiness {
    nombre: string;
    categoria_id: Schema.Types.ObjectId;
    direccion: string;
    logo?: string;
    fachada?: string;
    codigo_recomendacion?: string;
    telefono_negocio?: number;
    calificacion?: number;
}

export interface IBusinessCategories {
    nombre: string;
}
