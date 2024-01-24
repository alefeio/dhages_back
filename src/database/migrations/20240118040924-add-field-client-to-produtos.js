'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('produtos', 'client', {
      type: Sequelize.STRING,
      defaultValue: 'dhagesturismo',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('produtos', 'client');
  },
};
