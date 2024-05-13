'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sites', 'view_login', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
    return queryInterface.addColumn('sites', 'view_cadastro', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sites', 'view_login');
    return queryInterface.removeColumn('sites', 'view_cadastro');
  },
};
