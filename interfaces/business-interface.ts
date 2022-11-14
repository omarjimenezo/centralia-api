import { Schema } from "mongoose";

export interface IBusiness {
  nombre: string;
  categoria_id: Schema.Types.ObjectId | null;
  direccion: string;
  logo?: string;
  fachada?: string;
  codigo_recomendacion?: string;
  telefono_negocio?: number | null;
  calificacion?: number | null;
}

export interface IBusinessCategories {
  nombre: string;
}
