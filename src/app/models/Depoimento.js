import Sequelize, { Model } from 'sequelize';

class Depoimento extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        texto: Sequelize.STRING,
        tipo: Sequelize.STRING,
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
    this.belongsTo(models.File, { foreignKey: 'img_id', as: 'imagem' });
  }
}

export default Depoimento;
