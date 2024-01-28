'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('pacotes', 'client', {
      type: Sequelize.STRING,
      defaultValue: 'dhagesturismo',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('pacotes', 'client');
  },
};
