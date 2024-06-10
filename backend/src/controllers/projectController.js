const db = require("../models/index");

// {
//     "name":"New Project 2",
//     "userId": "f34c5346-7cda-4c5f-908a-9820fc706ae1"
// }
exports.createProject = async (req, res) => {
  const { name, userId } = req.body;

  try {
    const newProject = await db.Project.create({
      name,
      userId,
    });

    await db.ConfigGeneral.create({ projectId: newProject.id });
    await db.ConfigDisplay.create({ projectId: newProject.id });

    res.status(201).json(newProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// {
//     "userId": "f34c5346-7cda-4c5f-908a-9820fc706ae1"
// }
exports.listAllProjects = async (req, res) => {
  const { userId } = req.body;

  try {
    const listOfProjects = await db.Project.findAll({
      where: {
        userId,
      },
    });
    res.status(201).json(listOfProjects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
