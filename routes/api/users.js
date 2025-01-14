const express = require("express");
const ctrl = require("../../controllers/authController");
const { validateBody, authenticate, upload } = require("../../middlewares");
const {
  registerSchema,
  loginSchema,
  emailSchema,
} = require("../../schemas/authSchema");

const router = express.Router();

router.route("/register").post(validateBody(registerSchema), ctrl.register);

router.route("/login").post(validateBody(loginSchema), ctrl.login);

router.route("/current").get(authenticate, ctrl.getCurrent);

router.route("/logout").post(authenticate, ctrl.logout);

router.route("/verify/:verificationToken").get(ctrl.verifyEmail);

router.route("/verify").post(validateBody(emailSchema), ctrl.resendVerifyEmail);

router
  .route("/avatars")
  .patch(authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;
