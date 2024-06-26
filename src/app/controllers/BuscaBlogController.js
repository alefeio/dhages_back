import File from '../models/File';
import { Op } from 'sequelize';
import Blog from '../models/Blog';

class BuscaBlogController {
  async index(req, res) {
    const { page = 1, client, busca, pageSize } = req.query;

    const total = await Blog.count({
      where: { ativo: true, client, titulo: { [Op.iLike]: `%${busca}%` }, texto: { [Op.iLike]: `%${busca}%` } },
    });

    const blog = await Blog.findAll({
      where: { ativo: true, client, titulo: { [Op.iLike]: `%${busca}%` }, texto: { [Op.iLike]: `%${busca}%` } },
      order: [['id', 'DESC']],
      limit: pageSize,
      offset: (page - 1) * pageSize,
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    console.log(blog);

    return res.json({ blog, total });
  }
}

export default new BuscaBlogController();
