import Sequelize from 'sequelize';

import Usuario from '../app/models/Usuario';
import File from '../app/models/File';
import Banner from '../app/models/Banner';
import Blog from '../app/models/Blog';
import Produto from '../app/models/Produto';
import Contatoforms from '../app/models/Contatoforms';
import Ondeestamos from '../app/models/Ondeestamos';
import Compraevenda from '../app/models/Compraevenda';
import Detalhescv from '../app/models/Detalhecv';
import Imagenscv from '../app/models/Imagenscv';

import databaseConfig from '../config/database';
import Pacotes from '../app/models/Pacote';

const models = [
  Usuario,
  File,
  Blog,
  Banner,
  Produto,
  Contatoforms,
  Ondeestamos,
  Compraevenda,
  Detalhescv,
  Imagenscv,
  Pacotes
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
