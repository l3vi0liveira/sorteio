const { response } = require("express");

module.exports = (sequelize, DataTypes) => {
  const Webhook = sequelize.define(
    "Webhook",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
       },
       serviceId: DataTypes.STRING,
       url: DataTypes.STRING,
       createdAt: DataTypes.DATE,
       updatedAt: DataTypes.DATE,
    },
    {
      tableName: "webhooks",
    }
  );
  Webhook.associate = (models) => {};
  return Webhook;
};
