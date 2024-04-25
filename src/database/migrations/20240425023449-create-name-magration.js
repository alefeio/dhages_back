'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('banners', 'link_tipo', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('banners', 'link_tipo');
  },
};
