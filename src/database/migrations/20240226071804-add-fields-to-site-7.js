'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sites', 'font_serifa', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    queryInterface.addColumn('sites', 'border_radius', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
    queryInterface.addColumn('sites', 'sombra', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    return queryInterface.addColumn('sites', 'altura_foto', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sites', 'font_serifa');
    queryInterface.removeColumn('sites', 'border_radius');
    queryInterface.removeColumn('sites', 'sombra');
    return queryInterface.removeColumn('sites', 'altura_foto');
  },
};
