'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('usuarios', 'client', {
      type: Sequelize.STRING,
      defaultValue: '',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('usuarios', 'client');
  },
};
