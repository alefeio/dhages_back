import * as Yup from 'yup';
import Compraevenda from '../models/Compraevenda';
import File from '../models/File';
import Detalhecv from '../models/Detalhecv';
import Imagenscv from '../models/Imagenscv';

class CompraevendaController {
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

    const { nome, modelo, descricao, valor, img_id, ano } = req.body;

    const produtoExiste = await Compraevenda.findOne({ where: { nome } });

    if (produtoExiste) {
      return res.status(400).json({ erro: 'Produto já existe!' });
    }

    const usuario_id = req.usuarioId;

    const produto = await Compraevenda.create({
      nome,
      modelo,
      descricao,
      valor,
      img_id,
      usuario_id,
      ano,
    });

    return res.json(produto);
  }

  async storeDetalhescv(req, res) {
    const { titulo, descricao } = req.body;

    const cv_id = req.params.id;

    const usuario_id = req.usuarioId;

    const detalhe = await Detalhecv.create({
      titulo,
      descricao,
      cv_id,
      usuario_id,
    });

    return res.json(detalhe);
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const produtos = await Compraevenda.findAll({
      where: { ativo: true },
      order: ['created_at'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(produtos);
  }

  async detalhescv(req, res) {
    const busca = req.params.id;

    const produtos = await Detalhecv.findAll({
      where: { cv_id: busca, ativo: true },
      order: ['id'],
    });

    return res.json(produtos);
  }

  async detalhesimagenscv(req, res) {
    const busca = req.params.id;

    const produtos = await Imagenscv.findAll({
      where: { cv_id: busca, ativo: true },
      order: ['id'],
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(produtos);
  }

  async detail(req, res) {
    const busca = req.params.id;

    const produtos = await Compraevenda.findOne({
      where: { id: busca, ativo: true },
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(produtos);
  }

  async update(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const produto = await Compraevenda.findByPk(req.params.id);

    if (!produto) {
      return res.status(400).json({ erro: 'Não encontrado!' });
    }

    await produto.update(req.body);

    return res.json(produto);
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const produto = await Compraevenda.findByPk(req.params.id);

    if (!produto) {
      return res.status(400).json({ erro: 'Não encontrado!' });
    }

    produto.ativo = false;

    produto.save();

    return res.json(produto);
  }
}

export default new CompraevendaController();
