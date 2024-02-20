import Sequelize, { Model } from 'sequelize';

class Sites extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
        title: Sequelize.STRING,
        ativo: Sequelize.BOOLEAN,
        client: Sequelize.STRING,
        banner: Sequelize.BOOLEAN,
        banner_h: Sequelize.INTEGER,
        produtos: Sequelize.STRING,
        servicos: Sequelize.STRING,
        blog: Sequelize.STRING,
        pacotes: Sequelize.STRING,
        depoimentos: Sequelize.STRING,
        mapa: Sequelize.STRING,
        rodape_titulo: Sequelize.STRING,
        rodape_texto: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        instagram: Sequelize.STRING,
        facebook: Sequelize.STRING,
        bg_fundo: Sequelize.STRING,
        primary_color: Sequelize.STRING,
        second_color: Sequelize.STRING,
        textbutton_color: Sequelize.STRING,
        textonobanner: Sequelize.BOOLEAN,
        titulobanner: Sequelize.STRING,
        descricaobanner: Sequelize.STRING,
        qtdlinhaservicos: Sequelize.INTEGER,
        qtd_linhablog: Sequelize.INTEGER,
        qtd_linhapacotes: Sequelize.INTEGER,
        altura_menu: Sequelize.INTEGER,
        bg_titulobanner: Sequelize.STRING,
        bg_descricaobanner: Sequelize.STRING,
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
    this.belongsTo(models.File, { foreignKey: 'logo_id', as: 'logo' });
  }
}

export default Sites;
