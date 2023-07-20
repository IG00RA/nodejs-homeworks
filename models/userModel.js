const { model } = require("mongoose");
const { userSchema } = require("../schemas/userSchema");

const User = model("user", userSchema);

module.exports = {
  User,
};
