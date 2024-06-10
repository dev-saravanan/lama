const db = require("../models/index");

// {
//     "name":"Saravanan",
//     "email": "test@gmail.com"
// }
exports.getStarted = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await db.User.findOne({ where: { email } });

    if (user === null) {
      const newUser = await db.User.create({
        name,
        email,
      });
      res.status(201).json(newUser);
    } else {
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// {
//     "name":"New Name"
// }
exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const { name } = req.body;

  try {
    const user = await db.User.findByPk(userId);
    if (user) {
      user.name = name;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
