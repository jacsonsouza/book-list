'use strict';

import { Router } from 'express';

const router = Router();

import BookController from '../controllers/bookController.js';
import UserController from '../controllers/userController.js';
import SignUpController from '../controllers/SignUpController.js';

import { resolve } from 'path';

router.get('/livros', BookController.render);

router.get('/livros/todos', BookController.getBooks);

router.get('/livros/cadastro', BookController.render);

router.post('/livros/cadastro', BookController.addBook);

router.get('/livro/:id', BookController.getBooks);

router.get('/login', (req, res) => {
  res.sendFile(resolve('app/view/login.html'));
});

router.post('/login', UserController.userLogin);

router.get('/cadastro', SignUpController.renderView);

router.post('/cadastro', SignUpController.createUser);

export default router;
