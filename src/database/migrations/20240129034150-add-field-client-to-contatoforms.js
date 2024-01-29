'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('contatoforms', 'client', {
      type: Sequelize.STRING,
      defaultValue: 'dhagesturismo',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('contatoforms', 'client');
  },
};
