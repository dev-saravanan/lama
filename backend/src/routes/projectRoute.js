const express = require("express");
const projectController = require("../controllers/projectController");

const router = express.Router();

// Create new user or login existing user
router.route("/create").post(projectController.createProject);

// Update existing user details
router.route("/list").post(projectController.listAllProjects);

module.exports = router;
