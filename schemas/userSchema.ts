import Joi from "joi";

const avatar = Joi.string().allow("");
const password = Joi.string().min(8).max(10).alphanum();
const apellido = Joi.string();
const nombre = Joi.string();
const telefono_personal = Joi.number().min(10);
const rol = Joi.number();
const email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ["com", "net"] },
});

export const userSchema = Joi.object({
  avatar: avatar.required(),
  password: password.required(),
  confirmPassword: Joi.ref("password"),
  apellido: apellido.required(),
  nombre: nombre.required(),
  telefono_personal: telefono_personal.required(),
  rol: rol.required(),
  email: email.required(),
});

export const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});
