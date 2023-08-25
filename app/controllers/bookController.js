'use strict';

import Book from '../model/Book.js';
import { resolve } from 'path';

class BookController {
  static render(req, res) {
    res.sendFile(resolve('app/view/book-list.html'));
  }

  static async getBooks(req, res) {
    const books = await Book.findAll();
    res.json(books);
  }

  static async addBook(req, res) {
    const book = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      author: req.body.author,
    };

    await Book.create(book)
      .then(() => {
        res.redirect('/livros/cadastro');
      })
      .catch((err) => console.log(err));
  }

  static getBook(req, res) {}
}

export default BookController;
