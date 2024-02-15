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
      textbutton_color
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
      textbutton_color
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
