import * as Yup from 'yup';
import Pacotes from '../models/Pacote';
import File from '../models/File';

class PacotesController {
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
      codigo,
      saida,
      retorno,
      valoravista,
      valoraprazo,
      parcelas,
      img_id,
    } = req.body;

    const pacoteExiste = await Pacotes.findOne({ where: { nome, saida, retorno } });

    if (pacoteExiste) {
      return res.status(400).json({ erro: 'Pacote já existe!' });
    }

    const usuario_id = req.usuarioId;

    const pacote = await Pacotes.create({
      nome,
      descricao,
      codigo,
      saida,
      retorno,
      valoravista,
      valoraprazo,
      parcelas,
      usuario_id,
      img_id,
    });

    return res.json(pacote);
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const pacotes = await Pacotes.findAll({
      where: { ativo: true },
      order: ['saida'],
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

    return res.json(pacotes);
  }

  async detail(req, res) {
    const busca = req.params.id;

    const pacote = await Pacotes.findOne({
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

    const pacote = await Pacotes.findByPk(req.params.id);

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

    const pacote = await Pacotes.findByPk(req.params.id);

    if (!pacote) {
      return res.status(400).json({ erro: 'Não encontrado!' });
    }

    pacote.ativo = false;

    pacote.save();

    return res.json(pacote);
  }
}

export default new PacotesController();
