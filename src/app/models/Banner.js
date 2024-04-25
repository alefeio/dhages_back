import Sequelize, { Model } from 'sequelize';

class Banner extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: Sequelize.STRING,
        ativo: Sequelize.BOOLEAN,
        client: Sequelize.STRING,
        link: Sequelize.BOOLEAN,
        link_tipo: Sequelize.STRING
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

export default Banner;
