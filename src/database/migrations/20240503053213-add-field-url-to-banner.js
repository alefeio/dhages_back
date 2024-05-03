'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('banners', 'tipo_link', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    return queryInterface.addColumn('banners', 'url', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('banners', 'tipo_link');
    queryInterface.removeColumn('banners', 'url');
  },
};
