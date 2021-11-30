const express = require("express");

const router = express.Router();

const controllerWebhook = require("../controller/webhook");

router.post("/webhook-digisac", controllerWebhook.webhookDigisac);

module.exports = router;
