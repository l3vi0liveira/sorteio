const express = require("express");

const router = express.Router();

const controllerSort = require("../controller/webhook");

router.post("/sort/create", controllerSort.create);
router.get("/sort/show", controllerSort.show);
router.put("/sort/update/:sortId", controllerSort.update);
router.delete("/sort/delete/:sortId", controllerSort.delete);

module.exports = router;
