'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Grats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_created: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Grats');
  }
};
