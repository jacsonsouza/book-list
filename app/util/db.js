'use strict';

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('book_list', 'root', 'book-list', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Conectado com o sequilize');
} catch (error) {
  console.log('Não foi possível conectar: ', error);
}

export default sequelize;
