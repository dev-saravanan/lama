const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ConfigGeneral extends Model {}

  ConfigGeneral.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      projectId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "projects",
          key: "id",
        },
        onDelete: "CASCADE",
        field: "project_id",
      },
      chatbotName: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "",
        field: "chatbot_name",
      },
      welcomeMessage: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "",
        field: "welcome_message",
      },
      inputPlaceholder: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "",
        field: "input_placeholder",
      },
    },
    {
      sequelize,
      modelName: "ConfigGeneral",
      tableName: "config_general",
      timestamps: false,
    }
  );

  return ConfigGeneral;
};
