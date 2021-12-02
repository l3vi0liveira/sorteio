const express = require("express");
const multer = require("multer");

const router = express.Router();

const multerConfig = require("../middleware/multer");

const controllerPrizes = require("../controller/prize");

router.get("/prizes", controllerPrizes.index);
router.post(
  "/prizes",
  multer(multerConfig).single("file"),
  controllerPrizes.create
);

module.exports = router;
