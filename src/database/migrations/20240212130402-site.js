'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('site', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      client: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
      },
      banner: {
        type: Sequelize.BOOLEAN,
      },
      banner_h: {
        type: Sequelize.INTEGER,
      },
      produtos: {
        type: Sequelize.STRING,
      },
      servicos: {
        type: Sequelize.STRING,
      },
      blog: {
        type: Sequelize.STRING,
      },
      pacotes: {
        type: Sequelize.STRING,
      },
      mapa: {
        type: Sequelize.STRING,
      },
      rodape_titulo: {
        type: Sequelize.STRING,
      },
      rodape_texto: {
        type: Sequelize.TEXT,
      },
      whatsapp: {
        type: Sequelize.STRING,
      },
      instagram: {
        type: Sequelize.STRING,
      },
      facebook: {
        type: Sequelize.STRING,
      },
      bg_fundo: {
        type: Sequelize.STRING,
      },
      primary_color: {
        type: Sequelize.STRING,
      },
      second_color: {
        type: Sequelize.STRING,
      },
      textbutton_color: {
        type: Sequelize.STRING,
      },
      logo_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      img_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('site');
  },
};
