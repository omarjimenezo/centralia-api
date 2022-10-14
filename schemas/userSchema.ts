import Joi from "joi";

const avatar = Joi.string().allow("");
const businessPhone = Joi.number().min(10);
const password = Joi.string().min(8).max(10).alphanum();
const lastName = Joi.string();
const name = Joi.string();
const personalPhone = Joi.number().min(10);
const rol = Joi.number();
const email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ["com", "net"] },
});

export const userSchema = Joi.object({
  avatar: avatar.required(),
  businessPhone: businessPhone,
  password: password.required(),
  confirmPassword: Joi.ref("password"),
  lastName: lastName.required(),
  name: name.required(),
  personalPhone: personalPhone.required(),
  rol: rol.required(),
  email: email.required(),
});
