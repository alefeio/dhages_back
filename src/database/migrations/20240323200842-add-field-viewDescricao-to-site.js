'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sites', 'viewDescricao', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sites', 'viewDescricao');
  },
};
