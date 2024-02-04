import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UsuarioController from './app/controllers/UsuarioController';
import SessionController from './app/controllers/SessionController';
import BlogController from './app/controllers/BlogController';
import FileController from './app/controllers/FileController';
import ProdutoController from './app/controllers/ProdutoController';
import ContatoformsController from './app/controllers/ContatoformsController';
import OndeestamosController from './app/controllers/OndeestamosController';
import BuscaController from './app/controllers/BuscaController';
import CompraevendaController from './app/controllers/CompraevendaController';
import ImagenscvController from './app/controllers/ImagenscvController';

import authMiddleware from './app/middlewares/auth';
import BannerController from './app/controllers/BannerController';
import PacoteController from './app/controllers/PacoteController';
import ServicosController from './app/controllers/ServicoController';
import DepoimentoController from './app/controllers/DepoimentoController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/usuarios', UsuarioController.store);
routes.post('/sessions', SessionController.store);

routes.get('/banners', BannerController.index);

routes.get('/depoimentos', DepoimentoController.index);

routes.get('/blog', BlogController.index);
routes.get('/blog/:id', BlogController.detail);

routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.detail);

routes.get('/pacotes', PacoteController.index);
routes.get('/pacotes/:nome/:id', PacoteController.detail);

routes.get('/servicos', ServicosController.index);
routes.get('/servicos/:nome/:id', ServicosController.detail);

routes.get('/compraevenda/', CompraevendaController.index);
routes.get('/compraevenda/:id', CompraevendaController.detail);
routes.get('/detalhescv/:id', CompraevendaController.detalhescv);
routes.get('/detalhesimagenscv/:id', CompraevendaController.detalhesimagenscv);

routes.get('/busca', BuscaController.index);

routes.get('/ondeestamos', OndeestamosController.index);
routes.get('/ondeestamos/:id', OndeestamosController.detail);

routes.get('/', (req, res) => res.send('ok'));

routes.post('/contato', ContatoformsController.store);

routes.use(authMiddleware);

routes.get('/contato', ContatoformsController.index);
routes.get('/contatolidas', ContatoformsController.lidas);
routes.delete('/contato/:id', ContatoformsController.delete);

routes.get('/usuarios', UsuarioController.index);
routes.put('/usuarios', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

routes.post('/banner', BannerController.store);
routes.delete('/banner/:id', BannerController.delete);

routes.post('/depoimento', DepoimentoController.store);
routes.delete('/depoimento/:id', DepoimentoController.delete);

routes.post('/blog', BlogController.store);
routes.put('/blog/:id', BlogController.update);
routes.delete('/blog/:id', BlogController.delete);

routes.post('/produtos', ProdutoController.store);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

routes.post('/pacotes', PacoteController.store);
routes.put('/pacotes/:id', PacoteController.update);
routes.delete('/pacotes/:id', PacoteController.delete);
routes.get('/todas', PacoteController.todas);

routes.post('/servicos', ServicosController.store);
routes.put('/servicos/:id', ServicosController.update);
routes.delete('/servicos/:id', ServicosController.delete);

routes.post('/compraevenda', CompraevendaController.store);
routes.put('/compraevenda/:id', CompraevendaController.update);
routes.delete('/compraevenda/:id', CompraevendaController.delete);
routes.post('/detalhescv/:id', CompraevendaController.storeDetalhescv);
routes.post('/detalhesimagenscv', ImagenscvController.store);

routes.post('/ondeestamos', OndeestamosController.store);
routes.put('/ondeestamos/:id', OndeestamosController.update);
routes.delete('/ondeestamos/:id', OndeestamosController.delete);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
