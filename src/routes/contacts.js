const express = require ("express");

const router = express.Router()

const controllerContacts = require("../controller/contacts")

router.get("/contacts/mycontacts", controllerContacts.mycontacts);

module.exports = router ;