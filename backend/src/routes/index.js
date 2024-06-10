const Router = require("express").Router();

const User = require("./userRoute");
const Project = require("./projectRoute");
const ProjectFile = require("./projectFileRoute");
const Config = require("./configRoute");

// simple test route
Router.get("/", (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

Router.use("/user", User);
Router.use("/project", Project);
Router.use("/project/files", ProjectFile);
Router.use("/project/config", Config);

module.exports = Router;
