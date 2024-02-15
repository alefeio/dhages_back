'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sites', 'title', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sites', 'title');
  },
};
