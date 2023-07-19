const express = require("express");
const ctrl = require("../../controllers/authController");
const { validateBody } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../schemas/userSchema");

const router = express.Router();

router.route("/register").post(validateBody(registerSchema), ctrl.register);

router.route("/login").post(validateBody(loginSchema), ctrl.login);

module.exports = router;
