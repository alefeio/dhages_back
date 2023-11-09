import Sequelize, { Model } from 'sequelize';

class Compraevenda extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        modelo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        valor: Sequelize.STRING,
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
    this.belongsTo(models.File, { foreignKey: 'img_id', as: 'imagem' });
  }
}

export default Compraevenda;
