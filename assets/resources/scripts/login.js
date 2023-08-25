'use strict';
/*
const btSubmit = document.getElementById('login-form');

btSubmit.addEventListener('submit', function () {
  $.get('/book-list/login', function (data) {

  });
});
*/

let inputTag = document.getElementsByTagName('input');

for (let inputField of inputTag) {
  inputField.onfocus = function () {
    inputField.style.color = 'white';
    inputField.style.transition = '2s';
    inputField.style.scale = '1.05';
  };

  inputField.onblur = function () {
    inputField.style.scale = '1';
  };
}
