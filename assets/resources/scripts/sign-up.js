'use strict';

/**
 * Declarações
 */
let email = '';
let userName = '';
let passWord = '';
let passConfirm = '';

/** 
 * Funcão para validar as senhas
 * @returns true/false

 */

let validate = function () {
  passWord = document.forms[0].elements[2].value;
  passConfirm = document.forms[0].elements[3].value;

  if (passWord !== passConfirm) {
    window.alert('Opa! Senhas diferentes');
    return false;
  }

  return true;
};

/**
 * Evento onsubmit que validará os dados recebidos
 * @returns true/false
 */

document.forms[0].onsubmit = function () {
  email = document.forms[0].email.value;
  userName = document.forms[0].user.value;
  passWord = document.forms[0].password.value;
  passConfirm = document.forms[0].confirmation.value;

  return validate();
};

/**
 * Evento para mudança dos balões de erro
 */

let inputEmail = document.querySelector('#email');

inputEmail.addEventListener('invalid', function () {
  if (inputEmail.validity.typeMismatch) {
    inputEmail.setCustomValidity('Opa! E-mail inválido.');
  } else {
    inputEmail.setCustomValidity('');
  }
});

/**
 * Evento para mudança dos balões de erro
 */
let inputPass = document.querySelector('#password');

inputPass.addEventListener('invalid', function () {
  if (inputPass.validity.patternMismatch) {
    inputPass.setCustomValidity(
      `Opa! A senha deve conter:
      -Letra maiúscula;
      -Letra minúscula;
      -Números
      -Caracteres especiais.`
    );
  } else {
    inputPass.setCustomValidity('');
  }
});

/**
 * Eventos no input (onfocus e onblur)
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
