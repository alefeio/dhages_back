import * as Yup from 'yup';
import Usuario from '../models/Usuario';
import { removerEspacosEAcentos } from '../../lib/removerEspacosEAcentos';

class UsuarioController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      admin: Yup.boolean().required(),
      codigo_up: Yup.string(),
      client: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Falha na validação!' });
    }

    const { nome, email, password, admin, codigo_up, client } = req.body;

    const codigo = email;

    const usuarioExiste = await Usuario.findOne({ where: { email, client } });

    if (usuarioExiste) {
      return res.status(400).json({ erro: 'Usuário já existe!' });
    }

    const { id } = await Usuario.create({
      nome,
      email,
      password,
      admin,
      codigo,
      codigo_up,
      client
    });

    return res.json({
      id,
      nome,
      email,
      admin,
      codigo,
      codigo_up,
      client
    });
  }

  async index(req, res) {
    const usuarios = await Usuario.findAll({
      where: { admin: true },
      attributes: ['id', 'nome', 'email'],
    });

    return res.json(usuarios);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Falha na validação!' });
    }

    const { email, oldPassword } = req.body;

    const usuario = await Usuario.findByPk(req.usuarioId);

    if (email && email !== usuario.email) {
      const usuarioExiste = await Usuario.findOne({ where: { email } });

      if (usuarioExiste) {
        return res.status(400).json({ erro: 'Usuário já existe!' });
      }
    }

    if (oldPassword && !(await usuario.checarPassword(oldPassword))) {
      return res.status(401).json({ erro: 'Senha não confere!' });
    }

    await usuario.update(req.body);

    return res.json(usuario);
  }

  async delete(req, res) {
    if (!req.usuarioAdmin) {
      return res.status(401).json({ erro: 'Operação não autorizada!' });
    }

    const usuarioExiste = await Usuario.findOne({
      where: { id: req.params.id },
    });

    if (usuarioExiste) {
      await Usuario.destroy({ where: { id: usuarioExiste.id } });

      return res.json({ msg: 'Operação realizada com sucesso!' });
    }

    return res.json();
  }
}

export default new UsuarioController();
