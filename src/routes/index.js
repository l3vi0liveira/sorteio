const express = require("express");

const contactsRoutes = require('./contacts')
const prizeRoutes = require('./prizes')
const sortRoutes = require('./sort')
const webhookRoutes = require('./webhook')

const router = express.Router();

router.use(contactsRoutes)
router.use(prizeRoutes)
router.use(sortRoutes)
router.use(webhookRoutes)

module.exports = router;