const express = require("express");

const router = express.Router();

const controllerPrizes = require("../controller/prize");

router.get("/prizes", controllerPrizes.index);
router.post("/prizes", controllerPrizes.create);

module.exports = router;
