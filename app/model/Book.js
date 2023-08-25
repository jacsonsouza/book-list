import { DataTypes } from 'sequelize';

import db from '../util/db.js';

const Book = db.define('book', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
});

export default Book;
