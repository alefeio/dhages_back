'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sites', 'bg_titulobanner', {
      type: Sequelize.STRING,
    });
    return queryInterface.addColumn('sites', 'bg_descricaobanner', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sites', 'bg_titulobanner');
    return queryInterface.removeColumn('sites', 'bg_descricaobanner');
  },
};
