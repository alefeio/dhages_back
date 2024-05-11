'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sites', 'cor_link', {
      type: Sequelize.STRING,
      defaultValue: '000000',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sites', 'cor_link');
  },
};
