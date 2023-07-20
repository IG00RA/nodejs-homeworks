const { model } = require("mongoose");
const { contactSchema } = require("../schemas/contactSchema");

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
};
