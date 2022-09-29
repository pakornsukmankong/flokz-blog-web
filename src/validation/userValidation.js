import Joi from 'joi';

const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: ['com', 'net'] })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,16}$')).required(),
  confirmPassword: Joi.ref('password'),
}).with('password', 'confirmPassword');

export const validateRegister = (input) =>
  registerSchema.validate(input, { abortEarly: false });
