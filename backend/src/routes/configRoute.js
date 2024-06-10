const express = require("express");
const configController = require("../controllers/configController");

const router = express.Router();

// Update config general
router.route("/general/:projectId").put(configController.updateConfigGeneral);

// Update config general
router.route("/general/:projectId").get(configController.getConfigGeneral);

// Update config Display
router.route("/display/:projectId").put(configController.updateConfigDisplay);

// Update config Display
router.route("/display/:projectId").get(configController.getConfigDisplay);

module.exports = router;
