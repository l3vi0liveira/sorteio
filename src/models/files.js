const { response } = require("express");

module.exports = (sequelize, DataTypes) => {
  const Files = sequelize.define(
    "Files",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      tableName: "files",
    }
  );
  Files.associate = (models) => {};
  return Files;
};
