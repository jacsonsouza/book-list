'use strict';

let cardsString = localStorage.getItem('1');

(function () {
  let cardString = '';
  let cards = JSON.parse(cardsString);
  cards = cards.slice(0, 4);

  for (let card of cards) {
    cardString += `<div class='card'>
    <a href='${card.page}'>
      <div class='title'>
        <p>${card.title}</p>
      </div>
        <img src='${card.img}' alt='' />
      </a>
  </div>`;
  }

  document.querySelector('#pop-list').innerHTML = cardString;
})();

(function () {
  let cardString = '';
  let cards = JSON.parse(cardsString);
  cards = cards.slice(2, 6);

  for (let card of cards) {
    cardString += `<div class='card'>
    <a href='${card.page}'>
      <div class='title'>
       <p>${card.title}</p>
      </div>
      <img src='${card.img}' alt='' />
    </a>
  </div>`;
  }

  document.querySelector('#rated-list').innerHTML = cardString;
})();
