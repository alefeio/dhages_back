'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sites', 'textonobanner', {
      type: Sequelize.BOOLEAN,
    });

    queryInterface.addColumn('sites', 'titulobanner', {
      type: Sequelize.STRING,
    });
    queryInterface.addColumn('sites', 'descricaobanner', {
      type: Sequelize.STRING,
    });
    return queryInterface.addColumn('sites', 'qtdlinhaservicos', {
      type: Sequelize.INTEGER,
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sites', 'textonobanner');
    queryInterface.removeColumn('sites', 'titulobanner');
    queryInterface.removeColumn('sites', 'descricaobanner');
    return queryInterface.removeColumn('sites', 'qtdlinhaservicos');
  },
};
