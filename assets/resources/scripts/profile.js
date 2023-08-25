'use strict';

import Cookie from 'js-cookie/dist/js.cookie.mjs';

let userName = Cookie.get('user');
let userPic = localStorage.getItem(`${userName}Pic`);

/**
 * Carrega a imagem e o nome do perfil do usuário logado
 */
document.querySelector('#profile-name').innerHTML = `<h2>${userName}</h2>`;

if (!userPic) {
  $('.profile-pic').attr('src', '/assets/resources/images/profile.png');
} else {
  $('.profile-pic').attr('src', userPic);
}

/**
 * Jquery para mudar a imagem de perfil
 */
$(document).ready(function () {
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
        localStorage.setItem(`${userName}Pic`, reader.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $('.file-upload').on('change', function () {
    readURL(this);
  });

  $('.upload-button').on('click', function () {
    $('.file-upload').click();
  });
});

/**
 * Eventos na imagem de perfil
 */
$('#image-profile').on('mouseover', function () {
  $('.profile-pic').css('opacity', '0.5');
});

$('#image-profile').on('mouseout', function () {
  $('.profile-pic').css('opacity', '1');
});

$('#bt-background').on('click', function () {
  $('.profile-div').css(
    'background-image',
    'url(../../../assets/resources/images/background.png)'
  );
  $('h2').addClass('selected');
});

let dataUser = function () {
  $.get('/book-list/profile', function (data) {
    console.log(data);
    $('#data-user').append(
      `<h4>Informações</h4>
      <p>Id: ${data.id}</p>
      <p>E-mail: ${data.email}</p>
      <p>Nome: ${data.name}</p>
      <hr/>`
    );
  });
};

//$('.info-user').fadeOut();

$('#bt-show-data').on('click', function () {
  dataUser();
  //$('.info-user').fadeIn();
  //$('.info-user').fadeIn('slow');
  //$('.info-user').fadeIn(3000);
});

let bookString = localStorage.getItem(`${userName}Books`);
let userBooks = JSON.parse(bookString);
let cardString = '';

if (!userBooks) {
  document.querySelector('.list').innerHTML = 'Nenhum livro na lista!';
} else {
  for (let card of userBooks) {
    cardString += `<div class='card'>
    <a href='${card.page}'>
      <div class='title'>
        <p>${card.title}</p>
      </div>
      <img src='${card.img}' alt='${card.title}' />
    </a>
  </div>`;
  }

  document.querySelector('.list').innerHTML = cardString;
}
