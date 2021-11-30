const express = require ("express");

const router = express.Router()

const controllerWebhook = require("../controller/sort")

router.post("/message/sendMessage/:chatId",controllerWebhook.sendMessage);
router.get("/message/showMessage/:chatId",controllerWebhook.showMessage);

module.exports = router ;