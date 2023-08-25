'use strict';
import express from 'express';
import exphbs from 'express-handlebars';
import bodyparser from 'body-parser';

import db from './app/util/db.js';
import userRoutes from './app/util/routes.js';

const app = express();

app.use(
  express.static('/home/jacson/Documentos/My-projects/book-list/book-list')
);
app.use(bodyparser.urlencoded({ extended: true }));
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use('/', userRoutes);

db.sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
