const db = require("../models/index");

// {
//     "name": "File 3",
//     "description": "Hello World .com",
//     "projectId":"da60497d-59d1-4b98-93ca-e705dae26f9d"
// }
exports.createProjectFile = async (req, res) => {
  const { name, description, projectId } = req.body;

  try {
    const newProjectFile = await db.ProjectFile.create({
      name,
      description,
      projectId,
    });
    res.status(201).json(newProjectFile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// {
//     "projectId":"da60497d-59d1-4b98-93ca-e705dae26f9d"
// }
exports.getAllProjectFiles = async (req, res) => {
  const { projectId } = req.body;

  try {
    const listOfProjectFiles = await db.ProjectFile.findAll({
      where: {
        projectId,
      },
    });
    res.status(201).json(listOfProjectFiles);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get name and description of a file with fileId
exports.getProjectFileDetail = async (req, res) => {
  const { fileId } = req.params;

  try {
    const fileDetails = await db.ProjectFile.findOne({
      where: {
        id: fileId,
      },
    });
    res.status(201).json(fileDetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update the file detail - name and description
// {
//     "name":"File 3",
//     "description": "Hello World Changed"
// }
exports.updateProjectFile = async (req, res) => {
  const { fileId } = req.params;
  const { name, description } = req.body;

  try {
    const projectFile = await db.ProjectFile.findByPk(fileId);

    projectFile.name = name;
    projectFile.description = description;

    await projectFile.save();
    res.status(200).json(projectFile);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete the file
exports.deleteProjectFile = async (req, res) => {
  const { fileId } = req.params;

  try {
    await db.ProjectFile.destroy({
      where: {
        id: fileId,
      },
    });

    res.status(200).json({ message: "Delete Completed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
