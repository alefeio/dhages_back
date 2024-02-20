'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sites', 'qtdlinhablog', {
      type: Sequelize.INTEGER,
    });
    queryInterface.addColumn('sites', 'qtdlinhapacotes', {
      type: Sequelize.INTEGER,
    });
    queryInterface.addColumn('sites', 'bgtitulobanner', {
      type: Sequelize.INTEGER,
    });
    queryInterface.addColumn('sites', 'alturamenu', {
      type: Sequelize.INTEGER,
    });
    return queryInterface.addColumn('sites', 'bgdescricaobanner', {
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
