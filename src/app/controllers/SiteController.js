import * as Yup from 'yup';
import File from '../models/File';
import { Op } from 'sequelize';
import Site from '../models/Site';
// const { Op } = require('sequelize')

class SiteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Falha na validação!' });
    }

    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const {
      nome,
      descricao,
      title,
      img_id,
      logo_id,
      client,
      banner,
      banner_h,
      produtos,
      servicos,
      blog,
      pacotes,
      depoimentos,
      mapa,
      rodape_titulo,
      rodape_texto,
      whatsapp,
      instagram,
      facebook,
      bg_fundo,
      primary_color,
      second_color,
      textbutton_color,
      textonobanner,
      titulobanner,
      descricaobanner,
      qtdlinhaservicos,
      qtd_linhablog,
      qtd_linhapacotes,
      altura_menu,
      bg_titulobanner,
      bg_descricaobanner,
      cor_titulobanner,
      cor_descricaobanner,
      cor_titulosite,
      cor_textosite,
      qtdlinhaprodutos,
      qtdlinhadepoimentos,
      font_serifa,
      border_radius,
      sombra,
      altura_foto,
      viewdescricao,
      tipo_logo,
      logo_texto,
      cor_link,
      view_login,
      view_cadastro
    } = req.body;

    const pacoteExiste = await Site.findOne({ where: { nome, client } });

    if (pacoteExiste) {
      return res.status(400).json({ erro: 'Serviço já existe!' });
    }

    const usuario_id = req.usuarioId;

    const pacote = await Site.create({
      nome,
      descricao,
      title,
      usuario_id,
      img_id,
      logo_id,
      client,
      banner,
      banner_h,
      produtos,
      servicos,
      blog,
      pacotes,
      depoimentos,
      mapa,
      rodape_titulo,
      rodape_texto,
      whatsapp,
      instagram,
      facebook,
      bg_fundo,
      primary_color,
      second_color,
      textbutton_color,
      textonobanner,
      titulobanner,
      descricaobanner,
      qtdlinhaservicos,
      qtd_linhablog,
      qtd_linhapacotes,
      altura_menu,
      bg_titulobanner,
      bg_descricaobanner,
      cor_titulobanner,
      cor_descricaobanner,
      cor_titulosite,
      cor_textosite,
      qtdlinhaprodutos,
      qtdlinhadepoimentos,
      font_serifa,
      border_radius,
      sombra,
      altura_foto,
      viewdescricao,
      tipo_logo,
      logo_texto,
      cor_link,
      view_login,
      view_cadastro
    });

    return res.json(pacote);
  }

  async index(req, res) {
    const { client } = req.query;

    const record = await Site.findOne({
      where: { ativo: true, client },
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: File,
          as: 'logo',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: File,
          as: 'favicon',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(record);
  }

  async update(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const pacote = await Site.findByPk(req.params.id);

    if (!pacote) {
      return res.status(400).json({ erro: 'Não encontrado!' });
    }

    await pacote.update(req.body);

    return res.json(pacote);
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const pacote = await Site.findByPk(req.params.id);

    if (!pacote) {
      return res.status(400).json({ erro: 'Não encontrado!' });
    }

    pacote.ativo = false;

    pacote.save();

    return res.json(pacote);
  }
}

export default new SiteController();
