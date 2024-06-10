const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Create new user or login existing user
router.route("/getstarted").post(userController.getStarted);

// Update existing user details
router.route("/update/:userId").put(userController.updateUser);

module.exports = router;
