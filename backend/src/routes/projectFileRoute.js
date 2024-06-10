const express = require("express");
const projectFileContoller = require("../controllers/projectFileContoller");

const router = express.Router();

// Create new project file
router.route("/create").post(projectFileContoller.createProjectFile);

// Get all files list
router.route("/list").post(projectFileContoller.getAllProjectFiles);

// Get file details
router.route("/detail/:fileId").get(projectFileContoller.getProjectFileDetail);

// Update file details
router.route("/update/:fileId").put(projectFileContoller.updateProjectFile);

// Delete file
router.route("/delete/:fileId").delete(projectFileContoller.deleteProjectFile);

module.exports = router;
