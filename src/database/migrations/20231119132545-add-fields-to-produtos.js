'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('saida', 'produtos', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    queryInterface.addColumn('retorno', 'produtos', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    queryInterface.addColumn('valoravista', 'produtos', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    queryInterface.addColumn('valoraprazo', 'produtos', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    queryInterface.addColumn('parcelas', 'produtos', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
    queryInterface.removeColumn('marca', 'produtos');
    queryInterface.removeColumn('embalagem', 'produtos');
    queryInterface.removeColumn('peso', 'produtos');
    queryInterface.removeColumn('informacaoalergica', 'produtos');
    queryInterface.removeColumn('garantia', 'produtos');
    return queryInterface.removeColumn('paisorigem', 'produtos');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produtos');
  }
};
