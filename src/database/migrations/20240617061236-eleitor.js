'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('eleitores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      municipio: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nascimento: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      zona: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      local_votacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      municipio_votacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      uf_votacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      rg: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      uf_rg: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco_rua: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco_numero: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      endereco_complemento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco_bairro: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco_referencia: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco_municipio: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco_uf: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      endereco_cep: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tipotrabalho_integral: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      tipotrabalho_meioperiodo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      tipotrabalho_fimdesemana: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      tipotrabalho_digital: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      cargotrabalho_coordenador: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      cargotrabalho_redeapoio: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      cargotrabalho_motorista: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      cargotrabalho_aluguelautomovel: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      possui_carro: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      possui_moto: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      alugar_veiculo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      adesivar_veiculo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero_ligacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numero_parente: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      client: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      titulo_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      cnh_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      renavam_id: {
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
    return queryInterface.dropTable('eleitores');
  },
};
