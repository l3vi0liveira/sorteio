const express = require("express");

const router = express.Router();

const controllerSort = require("../controller/sort");

router.post("/sort", controllerSort.create);
router.get("/sort", controllerSort.index);

module.exports = router;
