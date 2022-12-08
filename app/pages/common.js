'use strict';

/**
 * Imports
 */
import Cookie from '../../node_modules/js-cookie/dist/js.cookie.mjs';

/**
 * Declarações
 */
let userName = Cookie.get('user');
let userPic = localStorage.getItem(`${userName}Pic`);
let logged = Cookie.get('logged');
let menu = '';

/**
 * Verifica se há usuário logado
 */
if (logged === 'true') {
  menu = '/menu-sign.html';
} else {
  menu = '/menu.html';
}

/**
 * Carrega o menu e o footer usando jquery
 */
$('#menu').load(menu, function () {
  $('#img-profile').attr('src', userPic);

  $('#bt-exit').on('click', function () {
    Cookie.remove('user');
    Cookie.remove('logged');
    window.location = '/book-list';
    console.log('teste');
  });
});
$('#footer').load('/footer.html');

/**
 * Inicialização do nav responsive com jquery
 */
setTimeout(function () {
  $('.sidenav').sidenav();
  $('.dropdown-trigger').dropdown({
    alignment: 'left',
    hover: false,
    coverTrigger: false,
  });
}, 1000);
