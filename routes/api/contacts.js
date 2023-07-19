const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contactsController");
const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contactSchema");

router
  .route("/")
  .get(ctrl.listContacts)
  .post(validateBody(schemas.addSchema), ctrl.addContact);

router
  .route("/:contactId")
  .get(isValidId, ctrl.getContactById)
  .put(isValidId, validateBody(schemas.addSchema), ctrl.updateContact)
  .delete(isValidId, ctrl.removeContact);

router
  .route("/:contactId/favorite")
  .patch(
    isValidId,
    validateBody(schemas.updateFavoriteSchema),
    ctrl.updateStatusContact
  );
module.exports = router;
