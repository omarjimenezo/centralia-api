import Joi from "joi";

const nombre = Joi.string();
const categoria_id = Joi.number();
const direccion = Joi.string().not().allow("");
const logo = Joi.any().allow("");
const fachada = Joi.any().allow("");
const codigo_recomendacion = Joi.string();
const telefono_negocio = Joi.number();
const calificacion = Joi.number();

export const businessSchema = Joi.object({
  nombre: nombre.required(),
  categoria_id: categoria_id.required(),
  direccion: direccion.required(),
  logo: logo,
  fachada: fachada,
  codigo_recomendacion: codigo_recomendacion.required(),
  telefono_negocio: telefono_negocio.required(),
  calificacion: calificacion.required(),
});
