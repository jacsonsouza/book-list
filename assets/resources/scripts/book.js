'use strict';

import Cookie from '../../../node_modules/js-cookie/dist/js.cookie.mjs';

const user = Cookie.get('user');
const bookTitle = document.getElementById('book-title').innerText;
let bookString = localStorage.getItem(`${user}Books`);
let userBooks = JSON.parse(bookString);
let book = {};

/**
 * Função vai verificar se o livro, que se relaciona com a página atual, está disponível
 * @returns boolean
 */
function searchBookSite() {
  let cardsString = localStorage.getItem('1');
  let cards = JSON.parse(cardsString);

  for (let item of cards) {
    if (item.title === bookTitle) {
      Object.setPrototypeOf(book, item);
      book.title = item.title;
      book.page = item.page;
      book.img = item.img;

      return true;
    }
  }

  return false;
}

/**
 * Função vai verificar se o livro da página atual já está na lista do usuário
 * @returns boolean
 */
function searchBookUser() {
  for (let item of userBooks) {
    if (item.title === bookTitle) {
      book = item;
      return true;
    }
  }

  return false;
}

/**
 * Função para definir as ações do usuário em relação ao select
 * @param {*} optionSelected
 */
function startRead(optionSelected) {
  let selecionado = optionSelected.options[optionSelected.selectedIndex].value;
  let date = new Date();
  let keyEnd = '';
  let i = 0;

  if (selecionado === '1') {
    const score = window.prompt('Sua avaliação: 0-10');

    let dateE = date.toLocaleDateString();
    document.getElementById('time-end').innerHTML = `Fim da leitura: ${dateE}`;

    book.dateEnd = dateE;
    book.status = selecionado;
    book.score = score;

    if (!searchBookUser()) {
      userBooks.push(book);
    }
    localStorage.setItem(`${user}Books`, JSON.stringify(userBooks));
  }

  if (selecionado === '2') {
    window.alert('Boa leitura');

    keyEnd = setInterval(() => {
      document.getElementById('duration').innerHTML = `Duração: ${i}`;
      i++;
    }, 1000);

    let dateS = date.toLocaleDateString();
    document.getElementById(
      'time-start'
    ).innerHTML = `Início da leitura: ${dateS}`;

    book.dateStart = dateS;
    book.dateEnd = '--/--/----';
    book.status = selecionado;

    if (!searchBookUser()) {
      userBooks.push(book);
    }

    localStorage.setItem(`${user}Books`, JSON.stringify(userBooks));
  }

  if (selecionado === '3') {
    book.status = selecionado;

    if (!searchBookUser()) {
      book.dateStart = '--/--/----';
      book.dateEnd = '--/--/----';
      userBooks.push(book);
    }

    localStorage.setItem(`${user}Books`, JSON.stringify(userBooks));
  }

  if (selecionado === '4') {
    book.status = selecionado;

    if (!searchBookUser()) {
      book.dateStart = '--/--/----';
      book.dateEnd = '--/--/----';
      userBooks.push(book);
    }

    localStorage.setItem(`${user}Books`, JSON.stringify(userBooks));
  }
}

/**
 * Verificações iniciais:
 * * Se já existe alguma lista do usuário;
 * * * Caso não exista uma lista, então uma nova é criada e o livro relacionado à página
 * * * é buscado na lista do site.
 */
let select = document.querySelector('.form-select');

if (!userBooks) {
  searchBookSite();
  userBooks = [];
} else {
  if (searchBookUser()) {
    select.selectedIndex = book.status;
  } else {
    searchBookSite();
  }
}

/**
 * Verificações iniciais:
 * * Se o select está marcado;
 * * * Caso esteja, Alguns dados iniciais de leitura são escritos.
 */
if (select.selectedIndex) {
  document.getElementById(
    'time-start'
  ).innerHTML = `Início da leitura: ${book.dateStart}`;
  document.getElementById(
    'time-end'
  ).innerHTML = `Fim da leitura: ${book.dateEnd}`;
}

/**
 * Evento que faz as mudanças do select
 */
select.addEventListener('change', function () {
  if (!user) {
    let confirmSign = window.confirm('Junte-se a nós, cadastre-se agora!!!');
    if (confirmSign) {
      window.location = '/app/pages/cadastro/cadastro.html';
    }
  } else {
    startRead(this);
  }
});
