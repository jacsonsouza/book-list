'use strict';

let logged = false;

let menu = '';

if (logged === 'true') {
  menu = '/menu-sign.html';
} else {
  menu = '/menu.html';
}

console.log(menu);

function deleteCookies() {
  Cookie.remove('user');
  Cookie.remove('logged');
  window.location = '/book-list';
  console.log('teste');
}

/**
 * Carrega o menu e o footer usando jquery
 */
$('#menu').load(menu, function () {
  if (!userPic) {
    $('#img-profile').attr('src', '/assets/resources/images/profile.png');
  } else {
    $('#img-profile').attr('src', userPic);
  }
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

  $('#bt-exit').on('click', function () {
    deleteCookies();
  });

  $('#bt-exit-sidenav').on('click', function () {
    deleteCookies();
  });
}, 1000);
