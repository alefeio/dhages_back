import Sequelize, { Model } from 'sequelize';

class Eleitores extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        municipio: Sequelize.STRING,
        uf: Sequelize.STRING,
        nascimento: Sequelize.DATE,
        titulo: Sequelize.STRING,
        zona: Sequelize.STRING,
        local_votacao: Sequelize.STRING,
        municipio_votacao: Sequelize.STRING,
        uf_votacao: Sequelize.STRING,
        rg: Sequelize.STRING,
        uf_rg: Sequelize.STRING,
        cpf: Sequelize.STRING,
        endereco_rua: Sequelize.STRING,
        endereco_numero: Sequelize.INTEGER,
        endereco_complemento: Sequelize.STRING,
        endereco_bairro: Sequelize.STRING,
        endereco_referencia: Sequelize.STRING,
        endereco_municipio: Sequelize.STRING,
        endereco_uf: Sequelize.STRING,
        endereco_cep: Sequelize.STRING,
        tipotrabalho_integral: Sequelize.BOOLEAN,
        tipotrabalho_meioperiodo: Sequelize.BOOLEAN,
        tipotrabalho_fimdesemana: Sequelize.BOOLEAN,
        tipotrabalho_digital: Sequelize.BOOLEAN,
        cargotrabalho_coordenador: Sequelize.BOOLEAN,
        cargotrabalho_redeapoio: Sequelize.BOOLEAN,
        cargotrabalho_motorista: Sequelize.BOOLEAN,
        cargotrabalho_aluguelautomovel: Sequelize.BOOLEAN,
        possui_carro: Sequelize.BOOLEAN,
        possui_moto: Sequelize.BOOLEAN,
        alugar_veiculo: Sequelize.BOOLEAN,
        adesivar_veiculo: Sequelize.BOOLEAN,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        numero_ligacao: Sequelize.STRING,
        numero_parente: Sequelize.STRING,
        client: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    this.belongsTo(models.File, { foreignKey: 'titulo_id', as: 'titulo' });
    this.belongsTo(models.File, { foreignKey: 'cnh_id', as: 'cnh' });
    this.belongsTo(models.File, { foreignKey: 'renavam_id', as: 'renavam' });
  }
}

export default Eleitores;
