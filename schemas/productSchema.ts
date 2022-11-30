import Joi from "joi";

const negocio_id = Joi.string().not().allow("");
const productos = Joi.array();

export const productSchema = Joi.object({
    negocio_id: negocio_id.required(),
    productos: productos,
});
