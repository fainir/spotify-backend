'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Artists', // table name
      'phone_number', // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Artists', // table name
      'phone_number', // new field name
    )
  }
};
