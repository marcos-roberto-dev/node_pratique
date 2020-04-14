'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('testes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("testes")
  }
};
