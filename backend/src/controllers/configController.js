const db = require("../models/index");

// Update Config Details
// {
//   "chatbotName": "New CHAT Bot",
//   "welcomeMessage": "Welcome",
//   "inputPlaceholder": "Type Here..."
// }
exports.updateConfigGeneral = async (req, res) => {
  const { chatbotName, welcomeMessage, inputPlaceholder } = req.body;
  const { projectId } = req.params;

  try {
    const configGeneral = await db.ConfigGeneral.findOne({
      where: { projectId },
    });

    configGeneral.chatbotName = chatbotName ?? configGeneral.chatbotName;
    configGeneral.welcomeMessage =
      welcomeMessage ?? configGeneral.welcomeMessage;
    configGeneral.inputPlaceholder =
      inputPlaceholder ?? configGeneral.inputPlaceholder;

    await configGeneral.save();
    res.status(200).json(configGeneral);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// {
//   "primaryColor": "#ff5733",
//   "fontColor": "#333333",
//   "fontSize": 16,
//   "chatHeight": 100,
//   "showSources": false,
//   "chatIconSize": "large",
//   "positionOnScreen": "top-left",
//   "distanceFromBottom": 10,
//   "horizontalDistance": 30
// }
exports.updateConfigDisplay = async (req, res) => {
  const {
    primaryColor,
    fontColor,
    fontSize,
    chatHeight,
    showSources,
    chatIconSize,
    positionOnScreen,
    distanceFromBottom,
    horizontalDistance,
    botIconPath,
  } = req.body;
  const { projectId } = req.params;

  try {
    const configDisplay = await db.ConfigDisplay.findOne({
      where: { projectId },
    });

    if (!configDisplay) {
      return res.status(404).json({ message: "ConfigDisplay not found" });
    }

    configDisplay.primaryColor = primaryColor ?? configDisplay.primaryColor;
    configDisplay.fontColor = fontColor ?? configDisplay.fontColor;
    configDisplay.fontSize = fontSize ?? configDisplay.fontSize;
    configDisplay.chatHeight = chatHeight ?? configDisplay.chatHeight;
    configDisplay.showSources = showSources ?? configDisplay.showSources;
    configDisplay.chatIconSize = chatIconSize ?? configDisplay.chatIconSize;
    configDisplay.positionOnScreen =
      positionOnScreen ?? configDisplay.positionOnScreen;
    configDisplay.distanceFromBottom =
      distanceFromBottom ?? configDisplay.distanceFromBottom;
    configDisplay.horizontalDistance =
      horizontalDistance ?? configDisplay.horizontalDistance;
    configDisplay.botIconPath = botIconPath ?? configDisplay.botIconPath;

    await configDisplay.save();
    res.status(200).json(configDisplay);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET Config Details
exports.getConfigGeneral = async (req, res) => {
  const { projectId } = req.params;

  try {
    const configGeneral = await db.ConfigGeneral.findOne({
      where: { projectId },
    });

    res.status(200).json(configGeneral);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getConfigDisplay = async (req, res) => {
  const { projectId } = req.params;

  try {
    const configDisplay = await db.ConfigDisplay.findOne({
      where: { projectId },
    });

    res.status(200).json(configDisplay);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
