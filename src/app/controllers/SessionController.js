import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import Usuario from '../models/Usuario';
import File from '../models/File';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      client: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Falha na validação!' });
    }

    const { email, password, client } = req.body;

    const usuarioClient = await Usuario.findOne({ where: { email } });

    const usuario = await Usuario.findOne({
      where: usuarioClient.client ? { email, client } : { email },
      include: [
        {
          model: File,
          as: 'imagem',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!usuario) {
      return res.status(401).json({ erro: 'Usuário não encontrado!' });
    }

    if (!(await usuario.checarPassword(password))) {
      return res.status(401).json({ erro: 'Senha não confere!' });
    }

    const { id, nome, admin, imagem, codigo, codigo_up } = usuario;

    return res.json({
      usuario: {
        id,
        nome,
        email,
        admin,
        imagem,
        codigo,
        codigo_up
      },
      token: jwt.sign({ id, admin }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
