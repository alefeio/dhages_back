'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('blogs', 'client', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('blogs', 'client');
  },
};
