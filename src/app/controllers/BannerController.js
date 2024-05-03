import Banner from '../models/Banner';
import File from '../models/File';

class BannerController {
  async store(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const {
      titulo,
      img_id,
      client,
      link,
      link_tipo,
      tipo_link,
      url
    } = req.body;

    const banner = await Banner.create({
      titulo,
      img_id,
      client,
      link,
      link_tipo,
      tipo_link,
      url
    });

    return res.json(banner);
  }

  async index(req, res) {
    const { client } = req.query;

    const banner = await Banner.findAll({
      where: { client, ativo: true },
      attributes: [
        'id',
        'titulo',
      ],
      limit: 20,
      order: [['id', 'DESC']],
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(banner);
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const banner = await Banner.findByPk(req.params.id);

    if (!banner) {
      return res.status(400).json({ erro: 'Não encontrado!' });
    }

    banner.ativo = false;

    banner.save();

    return res.json(banner);
  }
}

export default new BannerController();
