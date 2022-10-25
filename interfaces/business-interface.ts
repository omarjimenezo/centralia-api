export interface IBusiness {
  nombre: string;
  categoria_id: number;
  calle: string;
  numero_ext: number;
  numero_int?: string;
  codigo_postal: number;
  colonia: string;
  logo?: string;
  fachada?: string;
  codigo_recomendacion?: string;
  telefono_negocio?: number;
  calificacion?: number;
}
