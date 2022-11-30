import Joi from "joi";

const nombre = Joi.string();
const categoria_id = Joi.string();
const direccion = Joi.string().not().allow("");
const logo = Joi.any().allow("");
const fachada = Joi.any().allow("");
const codigo_recomendacion = Joi.string();
const telefono_negocio = Joi.number().allow(null);
const calificacion = Joi.number().allow(null);

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
const negocioId = Joi.string().not().allow("");

export const negocioIdSchema = Joi.object({
    id: negocioId.required(),
});

export const businessCategoriesSchema = Joi.object({
    nombre: nombre.required(),
});
