'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sites', 'qtdlinhaprodutos', {
      type: Sequelize.STRING,
    });
    return queryInterface.addColumn('sites', 'qtdlinhadepoimentos', {
      type: Sequelize.INTEGER,
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sites', 'qtdlinhaprodutos');
    return queryInterface.removeColumn('sites', 'qtdlinhadepoimentos');
  },
};
