import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
        codigo: Sequelize.STRING,
        codigo_up: Sequelize.STRING,
        client: Sequelize.STRING
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.password) {
        usuario.password_hash = await bcrypt.hash(usuario.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'img_id', as: 'imagem' });
  }

  checarPassword(password) {
    return bcrypt.compare(password, this.password_hash)
  }
}

export default Usuario;
