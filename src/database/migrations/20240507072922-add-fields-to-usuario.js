'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('usuarios', 'codigo', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    return queryInterface.addColumn('usuarios', 'codigo_up', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('usuarios', 'codigo');
    queryInterface.removeColumn('usuarios', 'codigo_up');
  },
};
