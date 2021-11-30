"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("webhook", { 
      id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true,
      },
      serviceId: Sequelize.STRING,
      url: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("webhook");
  },
};
