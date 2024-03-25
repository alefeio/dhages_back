'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('banners', 'link', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('banners', 'link');
  },
};
