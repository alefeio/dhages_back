'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('compraevendas', 'ano', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('compraevendas', 'ano');
  },
};
