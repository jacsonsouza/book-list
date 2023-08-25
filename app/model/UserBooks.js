import { DataTypes } from 'sequelize';
import db from '../util/db.js';

const UserBooks = db.define('user_books', {
  id_user_book: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  id_user: {
    foreignKey: 'id_user',
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  id_book: {
    foreignKey: 'id_book',
    allowNull: false,
    type: DataTypes.INTEGER.UNSIGNED,
  },
});

export default UserBooks;
