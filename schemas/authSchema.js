const Joi = require("joi");

const emailFormat = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const registerSchema = Joi.object({
  subscription: Joi.string(),
  password: Joi.string().required(),
  email: Joi.string().pattern(emailFormat).required(),
});

const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().pattern(emailFormat).required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailFormat).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  emailSchema,
};
