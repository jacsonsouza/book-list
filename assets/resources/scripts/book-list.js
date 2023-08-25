'use strict';

import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

axios
  .get('/livros/todos')
  .then((res) => {
    render(res.data);
  })
  .catch((error) => {
    console.log(error);
  });

function render(books) {
  let cardString = '';
  for (let book of books) {
    cardString += `<div class='card'>
    <a href='/livro/${book.id}'>
      <div class='title'>
        <p>${book.title}</p>
      </div>
      <img src='${book.image}' alt='${book.title}' />
    </a>
  </div>`;
  }

  document.querySelector('.list').innerHTML = cardString;
}

/*
 * Uso de onmouseover e onmouseout para mostrar ou esconder o nome dos livros
 */

function show(card) {
  card.querySelector('.title').style.display = 'block';
}

let hide = function (card) {
  card.querySelector('.title').style.display = 'none';
};

(function () {
  const allCards = document.getElementsByClassName('card');

  for (let card of allCards) {
    card.onmouseover = function () {
      show(card);
    };

    card.onmouseout = function () {
      hide(card);
    };
  }
})();
