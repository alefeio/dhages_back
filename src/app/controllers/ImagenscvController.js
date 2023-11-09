import * as Yup from 'yup';
import Compraevenda from '../models/Compraevenda';
import File from '../models/File';
import Imagenscv from '../models/Imagenscv';

class ImagenscvController {
  async store(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const { descricao, cv_id, img_id } = req.body;

    const imagemExiste = await Imagenscv.findOne({ where: { descricao } });

    if (imagemExiste) {
      return res.status(400).json({ erro: 'Imagem já existe!' });
    }

    const usuario_id = req.usuarioId;

    const imagem = await Imagenscv.create({
      descricao,
      cv_id,
      img_id,
      usuario_id,
    });

    return res.json(imagem);
  }
}

export default new ImagenscvController();
