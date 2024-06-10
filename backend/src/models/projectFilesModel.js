const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ProjectFile extends Model {}

  ProjectFile.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
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
    },
    {
      sequelize,
      modelName: "ProjectFile",
      tableName: "project_files",
    }
  );

  return ProjectFile;
};
