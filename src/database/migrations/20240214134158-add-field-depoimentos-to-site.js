'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sites', 'depoimentos', {
      type: Sequelize.STRING,
      defaultValue: 'dhagesturismo',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sites', 'depoimentos');
  },
};
