import Joi from "joi";

const avatar = Joi.string().allow("");
const telefono_negocio = Joi.number().min(10);
const password = Joi.string().min(8).max(10).alphanum();
const apellido = Joi.string();
const nombre = Joi.string();
const telefono_personal = Joi.number().min(10);
const rol = Joi.string().not("");
const email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ["com", "net"] },
});

export const userSchema = Joi.object({
  avatar: avatar.required(),
  telefono_negocio: telefono_negocio,
  password: password.required(),
  confirmPassword: Joi.ref("password"),
  apellido: apellido.required(),
  nombre: nombre.required(),
  telefono_personal: telefono_personal.required(),
  rol: rol.required(),
  email: email.required(),
});
