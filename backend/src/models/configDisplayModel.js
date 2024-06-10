const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ConfigDisplay extends Model {}

  ConfigDisplay.init(
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
      primaryColor: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "#000000",
        field: "primary_color",
      },
      fontColor: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "#FFFFFF",
        field: "font_color",
      },
      fontSize: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 14,
        field: "font_size",
      },
      chatHeight: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 80,
        field: "chat_height",
      },
      showSources: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
        field: "show_sources",
      },
      chatIconSize: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "medium",
        field: "chat_icon_size",
      },
      positionOnScreen: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "bottom-right",
        field: "position_on_screen",
      },
      distanceFromBottom: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 20,
        field: "distance_from_bottom",
      },
      horizontalDistance: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 20,
        field: "horizontal_distance",
      },
      botIconPath: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "",
        field: "bot_icon_path",
      },
    },
    {
      sequelize,
      modelName: "ConfigDisplay",
      tableName: "config_display",
      timestamps: false,
    }
  );

  return ConfigDisplay;
};
