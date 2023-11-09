import Sequelize, { Model } from 'sequelize';

class Imagenscv extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        ativo: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario' });
    this.belongsTo(models.Compraevenda, { foreignKey: 'cv_id', as: 'cv' });
    this.belongsTo(models.File, { foreignKey: 'img_id', as: 'imagem' });
  }
}

export default Imagenscv;
