'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sites', 'cor_titulobanner', {
      type: Sequelize.STRING,
    });
    queryInterface.addColumn('sites', 'cor_descricaobanner', {
      type: Sequelize.STRING,
    });
    queryInterface.addColumn('sites', 'cor_titulosite', {
      type: Sequelize.STRING,
    });
    return queryInterface.addColumn('sites', 'cor_textosite', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sites', 'cor_titulobanner');
    queryInterface.removeColumn('sites', 'cor_descricaobanner');
    queryInterface.removeColumn('sites', 'cor_titulosite');
    return queryInterface.removeColumn('sites', 'cor_textosite');
  },
};
