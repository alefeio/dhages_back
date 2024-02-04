import * as Yup from 'yup';
import File from '../models/File';
import { Op } from 'sequelize';
import Servicos from '../models/Servico';
// const { Op } = require('sequelize')

class ServicosController {
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
      img_id,
      client
    } = req.body;

    const pacoteExiste = await Servicos.findOne({ where: { nome, client } });

    if (pacoteExiste) {
      return res.status(400).json({ erro: 'Serviço já existe!' });
    }

    const usuario_id = req.usuarioId;

    const pacote = await Servicos.create({
      nome,
      descricao,
      usuario_id,
      img_id,
      client
    });

    return res.json(pacote);
  }

  async index(req, res) {
    const { page = 1, client } = req.query;

    const hoje = new Date();

    const total = await Servicos.count({
      where: { ativo: true, client },
    });

    const pacotes = await Servicos.findAll({
      where: { ativo: true, client },
      order: ['saida'],
      limit: 12,
      offset: (page - 1) * 12,
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json({ pacotes, total });
  }

  async detail(req, res) {
    const busca = req.params.id;

    const pacote = await Servicos.findOne({
      where: { id: busca, ativo: true },
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(pacote);
  }

  async update(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const pacote = await Servicos.findByPk(req.params.id);

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

    const pacote = await Servicos.findByPk(req.params.id);

    if (!pacote) {
      return res.status(400).json({ erro: 'Não encontrado!' });
    }

    pacote.ativo = false;

    pacote.save();

    return res.json(pacote);
  }
}

export default new ServicosController();
