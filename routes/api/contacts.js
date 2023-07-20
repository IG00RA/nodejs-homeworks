const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/contactsController");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const schemas = require("../../schemas/contactSchema");

router
  .route("/")
  .get(authenticate, ctrl.listContacts)
  .post(authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router
  .route("/:contactId")
  .get(authenticate, isValidId, ctrl.getContactById)
  .put(
    authenticate,
    isValidId,
    validateBody(schemas.addSchema),
    ctrl.updateContact
  )
  .delete(authenticate, isValidId, ctrl.removeContact);

router
  .route("/:contactId/favorite")
  .patch(
    authenticate,
    isValidId,
    validateBody(schemas.updateFavoriteSchema),
    ctrl.updateStatusContact
  );
module.exports = router;
