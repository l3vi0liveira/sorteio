const express = require("express");

const router = express.Router();

const controllerContacts = require("../controller/contacts");

router.get("/contacts", controllerContacts.index);
router.get("/contacts/:id", controllerContacts.show);
router.post("/contacts", controllerContacts.create);
router.put("/contacts/:id", controllerContacts.update);

module.exports = router;
