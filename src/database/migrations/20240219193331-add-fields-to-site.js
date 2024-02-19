'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('sites', 'textonobanner', {
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.addColumn('sites', 'titulobanner', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('sites', 'descricaobanner', {
        type: Sequelize.STRING,
      }),
      queryInterface.addColumn('sites', 'qtdlinhaservicos', {
        type: Sequelize.STRING,
      }),
    ];
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sites', 'title');
  },
};
