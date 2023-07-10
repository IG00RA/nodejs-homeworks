const { model } = require("mongoose");
const { contactSchema } = require("../schemas/contactsSchema");

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
};
