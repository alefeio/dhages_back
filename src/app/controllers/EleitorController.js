import * as Yup from 'yup';
import File from '../models/File';
import { Op } from 'sequelize';
import Eleitores from '../models/Eleitor';
// const { Op } = require('sequelize')

class EleitorController {
    async store(req, res) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ erro: 'Falha na validação!' });
        }

        const {
            nome,
            municipio,
            uf,
            nascimento,
            titulo,
            zona,
            secao,
            local_votacao,
            municipio_votacao,
            uf_votacao,
            rg,
            uf_rg,
            cpf,
            endereco_rua,
            endereco_numero,
            endereco_complemento,
            endereco_bairro,
            endereco_referencia,
            endereco_municipio,
            endereco_uf,
            endereco_cep,
            tipotrabalho_integral,
            tipotrabalho_meioperiodo,
            tipotrabalho_fimdesemana,
            tipotrabalho_digital,
            cargotrabalho_coordenador,
            cargotrabalho_redeapoio,
            cargotrabalho_motorista,
            cargotrabalho_aluguelautomovel,
            possui_carro,
            possui_moto,
            alugar_veiculo,
            adesivar_veiculo,
            email,
            whatsapp,
            numero_ligacao,
            numero_parente,
            titulo_id,
            cnh_id,
            renavam_id,
            client
        } = req.body;

        const pacoteExiste = await Eleitores.findOne({ where: { cpf, client } });

        if (pacoteExiste) {
            return res.status(400).json({ erro: 'O registro já existe!' });
        }

        const usuario_id = req.usuarioId;

        const pacote = await Eleitores.create({
            nome,
            municipio,
            uf,
            nascimento,
            titulo,
            zona,
            secao,
            local_votacao,
            municipio_votacao,
            uf_votacao,
            rg,
            uf_rg,
            cpf,
            endereco_rua,
            endereco_numero,
            endereco_complemento,
            endereco_bairro,
            endereco_referencia,
            endereco_municipio,
            endereco_uf,
            endereco_cep,
            tipotrabalho_integral,
            tipotrabalho_meioperiodo,
            tipotrabalho_fimdesemana,
            tipotrabalho_digital,
            cargotrabalho_coordenador,
            cargotrabalho_redeapoio,
            cargotrabalho_motorista,
            cargotrabalho_aluguelautomovel,
            possui_carro,
            possui_moto,
            alugar_veiculo,
            adesivar_veiculo,
            email,
            whatsapp,
            numero_ligacao,
            numero_parente,
            titulo_id,
            cnh_id,
            renavam_id,
            client,
            usuario_id
        });

        return res.json(pacote);
    }

    async index(req, res) {
        const { client } = req.query;

        const usuario_id = req.usuarioId;

        const record = await Eleitores.findOne({
            where: { ativo: true, usuario_id },
            include: [
                {
                    model: File,
                    as: 'titulo',
                    attributes: ['id', 'path', 'url'],
                },
                {
                    model: File,
                    as: 'cnh',
                    attributes: ['id', 'path', 'url'],
                },
                {
                    model: File,
                    as: 'renavam',
                    attributes: ['id', 'path', 'url'],
                },
            ],
        });

        return res.json(record);
    }

    async update(req, res) {
        if (!req.usuarioAdmin) {
            return res.status(401).json({ erro: 'Operação não autorizada!' });
        }

        const pacote = await Eleitores.findByPk(req.params.id);

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

        const pacote = await Eleitores.findByPk(req.params.id);

        if (!pacote) {
            return res.status(400).json({ erro: 'Não encontrado!' });
        }

        pacote.ativo = false;

        pacote.save();

        return res.json(pacote);
    }
}

export default new EleitorController();
