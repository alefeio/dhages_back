import Depoimento from '../models/Depoimento';
import File from '../models/File';

class DepoimentoController {
    async store(req, res) {
        if (!req.usuarioAdmin) {
            return res.status(401).json({ erro: 'Operação não autorizada!' });
        }

        const {
            nome,
            texto,
            tipo,
            img_id,
            client
        } = req.body;

        const depoimento = await Depoimento.create({
            nome,
            texto,
            tipo,
            img_id,
            client
        });

        return res.json(depoimento);
    }

    async index(req, res) {
        const { client } = req.query;
        
        const depoimento = await Depoimento.findAll({
            where: { client, ativo: true },
            attributes: [
                'id',
                'nome',
                'texto',
                'tipo',
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

        return res.json(depoimento);
    }

    async delete(req, res) {
        if (!req.usuarioAdmin) {
            return res.status(401).json({ erro: 'Operação não autorizada!' });
        }

        const depoimento = await Depoimento.findByPk(req.params.id);

        if (!depoimento) {
            return res.status(400).json({ erro: 'Não encontrado!' });
        }

        depoimento.ativo = false;

        depoimento.save();

        return res.json(depoimento);
    }
}

export default new DepoimentoController();
