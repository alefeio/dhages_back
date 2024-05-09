'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('sites', 'tipo_logo', {
      type: Sequelize.STRING,
      default: 'imagem'
    });
    return queryInterface.addColumn('sites', 'logo_texto', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sites', 'tipo_logo');
    return queryInterface.removeColumn('sites', 'logo_texto');
  },
};
