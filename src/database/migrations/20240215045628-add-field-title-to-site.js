'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sites', 'title', {
      type: Sequelize.TEXT,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sites', 'title');
  },
};
