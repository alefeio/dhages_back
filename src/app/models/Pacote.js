import Sequelize, { Model } from 'sequelize';

class Pacotes extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
        codigo: Sequelize.STRING,
        saida: Sequelize.DATE,
        retorno: Sequelize.DATE,
        valoravista: Sequelize.INTEGER,
        valoraprazo: Sequelize.INTEGER,
        parcelas: Sequelize.INTEGER,
        ativo: Sequelize.BOOLEAN,
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
    this.belongsTo(models.File, { foreignKey: 'img_id', as: 'imagem' });
  }
}

export default Pacotes;
