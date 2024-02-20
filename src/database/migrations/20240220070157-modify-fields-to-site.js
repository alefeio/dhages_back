'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('sites', 'bgtitulobanner', {
      type: Sequelize.STRING,
    });
    return queryInterface.changeColumn('sites', 'bgdescricaobanner', {
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface) => {
    queryInterface.removeColumn('sites', 'bgtitulobanner');
    return queryInterface.removeColumn('sites', 'bgdescricaobanner');
  },
};
