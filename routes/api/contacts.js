const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contactsController");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contactsSchema");

router
  .route("/")
  .get(ctrl.listContacts)
  .post(validateBody(schemas.addSchema), ctrl.addContact);

router
  .route("/:contactId")
  .get(ctrl.getContactById)
  .delete(ctrl.removeContact)
  .put(validateBody(schemas.addSchema), ctrl.updateContact);

module.exports = router;
