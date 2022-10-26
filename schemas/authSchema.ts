import Joi from "joi";

const password = Joi.string().min(8).max(12).alphanum();

const email = Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "app"] },
});

export const authSchema = Joi.object({
    email: email.required(),
    password: password.required(),
});
