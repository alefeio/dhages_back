import * as Yup from 'yup';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Contatoforms from '../models/Contatoforms';
import Mail from '../../lib/Mail';

// import ContatoMail from '../jobs/ContatoMail';
// import Queue from '../../lib/Queue';

class ContatoformsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Falha na validação!' });
    }

    const {
      nome,
      email,
      telefone,
      assunto,
      mensagem,
      client
    } = await Contatoforms.create(req.body);

    // await Queue.add(ContatoMail.key, contato);

    // await Mail.sendMail({
    //   to: 'Alexandre Feio <alefeio@gmail.com>',
    //   subject: 'Contato - Brazilian Black Pepper',
    //   template: 'contato',
    //   context: {
    //     nome,
    //     email,
    //     telefone,
    //     assunto,
    //     mensagem,
    //     date: format(new Date(), "'Dia' dd 'de' MMMM', às' H'h'mm", {
    //       locale: pt,
    //     }),
    //   },
    // });

    return res.json({
      nome,
      email,
      telefone,
      assunto,
      mensagem,
      client
    });
  }

  async index(req, res) {
    // if (!req.isAdmin) {
    //   return res.status(401).json({ erro: 'Operação não autorizada!' });
    // }

    const { client } = req.query;

    const contatos = await Contatoforms.findAll({
      where: { client, lida: false },
      order: [['created_at', 'DESC']]
    });

    return res.json(contatos);
  }

  async lidas(req, res) {
    // if (!req.isAdmin) {
    //   return res.status(401).json({ erro: 'Operação não autorizada!' });
    // }
    const { client } = req.query;

    const contatos = await Contatoforms.findAll({
      where: { client, lida: true },
      order: [['created_at', 'DESC']]
    });

    return res.json(contatos);
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const contato = await Contatoforms.findByPk(req.params.id);

    if (!contato) {
      return res.status(400).json({ erro: 'Não encontrado!' });
    }

    contato.lida = true;

    contato.save();

    return res.json(contato);
  }
}

export default new ContatoformsController();
