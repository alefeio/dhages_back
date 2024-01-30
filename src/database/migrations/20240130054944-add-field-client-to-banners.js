'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('banners', 'client', {
      type: Sequelize.STRING,
      defaultValue: 'dhagesturismo',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('banners', 'client');
  },
};
