const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers/HttpError");
require("dotenv").config();
const { SECRET_KEY } = process.env;
const { User } = require("../models/userModel");

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(HttpError(401));
  }

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      next(HttpError(401));
    }
    next();
  } catch (error) {
    next(HttpError(401));
  }
};

module.exports = authenticate;