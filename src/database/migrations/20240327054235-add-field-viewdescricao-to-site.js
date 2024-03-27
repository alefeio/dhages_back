'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('sites', 'viewdescricao', {
      type: Sequelize.BOOLEAN,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('sites', 'viewdescricao');
  },
};
