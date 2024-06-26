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
        cor_titulobanner: Sequelize.STRING,
        cor_descricaobanner: Sequelize.STRING,
        cor_titulosite: Sequelize.STRING,
        cor_textosite: Sequelize.STRING,
        qtdlinhaprodutos: Sequelize.INTEGER,
        qtdlinhadepoimentos: Sequelize.INTEGER,
        font_serifa: Sequelize.BOOLEAN,
        border_radius: Sequelize.INTEGER,
        sombra: Sequelize.BOOLEAN,
        altura_foto: Sequelize.INTEGER,
        viewdescricao: Sequelize.BOOLEAN,
        tipo_logo: Sequelize.STRING,
        logo_texto: Sequelize.STRING,
        cor_link: Sequelize.STRING,
        view_login: Sequelize.BOOLEAN,
        view_cadastro: Sequelize.BOOLEAN
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
    this.belongsTo(models.File, { foreignKey: 'favicon_id', as: 'favicon' });
  }
}

export default Sites;
