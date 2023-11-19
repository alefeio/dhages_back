'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn('saida', 'produtos', {
        type: Sequelize.DATE,
        allowNull: true,
      }),
      queryInterface.addColumn('retorno', 'produtos', {
        type: Sequelize.DATE,
        allowNull: true,
      }),
      queryInterface.addColumn('valoravista', 'produtos', {
        type: Sequelize.DATE,
        allowNull: true,
      }),
      queryInterface.addColumn('valoraprazo', 'produtos', {
        type: Sequelize.DATE,
        allowNull: true,
      }),
      queryInterface.addColumn('parcelas', 'produtos', {
        type: Sequelize.INTEGER,
        allowNull: true,
      }),
      queryInterface.dropColumn('marca', 'produtos'),
      queryInterface.dropColumn('embalagem', 'produtos'),
      queryInterface.dropColumn('peso', 'produtos'),
      queryInterface.dropColumn('informacaoalergica', 'produtos'),
      queryInterface.dropColumn('garantia', 'produtos'),
      queryInterface.dropColumn('paisorigem', 'produtos'),
    ];
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produtos');
  }
};
