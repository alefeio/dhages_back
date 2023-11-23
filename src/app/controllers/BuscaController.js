import Produto from '../models/Produto';
import File from '../models/File';
import { Op } from 'sequelize';
import Pacotes from '../models/Pacote';

class BuscaController {
  async index(req, res) {
    const { page = 1, busca } = req.query;

    const produtos = await Pacotes.findAll({
      where: { ativo: true, nome: { [Op.iLike]: `%${busca}%` } },
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

    console.log(produtos);

    return res.json(produtos);
  }
}

export default new BuscaController();
