const express = require("express");

const router = express.Router();

const controllerPrizes = require("../controller/prize");

router.post("/prizes/create", controllerPrizes.create);
router.get("/prizes/show", controllerPrizes.show);
router.put("/prizes/update/:prizeId", controllerPrizes.update);
router.delete("/prizes/delete/:prizeid", controllerPrizes.delete);

module.exports = router;
