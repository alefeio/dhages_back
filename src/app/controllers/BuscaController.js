import Produto from '../models/Produto';
import File from '../models/File';
import { Op } from 'sequelize';
import Pacotes from '../models/Pacote';

class BuscaController {
  async index(req, res) {
    const { page = 1, busca } = req.query;

    const hoje = new Date();

    const total = await Pacotes.count({
      where: { ativo: true, nome: { [Op.iLike]: `%${busca}%` } },
    });

    const produtos = await Pacotes.findAll({
      where: { ativo: true, nome: { [Op.iLike]: `%${busca}%` }, saida: { [Op.gte]: hoje } },
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

    console.log(produtos);

    return res.json({ produtos, total });
  }
}

export default new BuscaController();
