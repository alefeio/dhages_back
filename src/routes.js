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

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/usuarios', UsuarioController.store);
routes.post('/sessions', SessionController.store);

routes.get('/banners', BannerController.index);

routes.get('/blog', BlogController.index);
routes.get('/blog/:id', BlogController.detail);

routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.detail);

routes.get('/compraevenda/', CompraevendaController.index);
routes.get('/compraevenda/:id', CompraevendaController.detail);
routes.get('/detalhescv/:id', CompraevendaController.detalhescv);
routes.get('/detalhesimagenscv/:id', CompraevendaController.detalhesimagenscv);

routes.get('/busca', BuscaController.index);

routes.post('/contato', ContatoformsController.store);

routes.get('/ondeestamos', OndeestamosController.index);
routes.get('/ondeestamos/:id', OndeestamosController.detail);

routes.get('/', (req, res) => res.send('ok'));

routes.use(authMiddleware);

routes.get('/contato', ContatoformsController.index);

routes.get('/usuarios', UsuarioController.index);
routes.put('/usuarios', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

routes.post('/banner', BannerController.store);
routes.delete('/banner/:id', BannerController.delete);

routes.post('/blog', BlogController.store);
routes.put('/blog/:id', BlogController.update);
routes.delete('/blog/:id', BlogController.delete);

routes.post('/produtos', ProdutoController.store);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

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
