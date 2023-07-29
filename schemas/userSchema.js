const Joi = require("joi");
const { Schema } = require("mongoose");
const { handleMongooseError } = require("../helpers");

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

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailFormat,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
      default: "",
    },
  },
  { versionKey: false }
);
userSchema.post("save", handleMongooseError);

module.exports = {
  registerSchema,
  loginSchema,
  userSchema,
  emailSchema,
};
