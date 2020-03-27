'use strict';

(function () {

var ESC_KEYCODE = 27;
var body = document.querySelector('body');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.page-header__btn');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var overlay = document.querySelector('.overlay');
var nameField = document.querySelector('.modal [type="text"]');
var btn = document.querySelector('.first-screen__btn');
var scroll = document.querySelector('.first-screen__scroll');
var scrollTarget = document.querySelector('.benefits');
var form = document.querySelector('.form');
var accordions = document.querySelectorAll('.accordion');
var footerButtons = document.querySelectorAll('.page-footer__button');
var footerAccordions = document.querySelectorAll('.page-footer__accordion');
var contactsForm = document.querySelector('.form .form');
var nameFormInput = document.querySelector('#form-user-name');
var phoneFormInput = document.querySelector('#form-phone');
var messageFormInput = document.querySelector('#form-message');
var modalForm = document.querySelector('.modal .form');
var nameModalInput = document.querySelector('#modal-user-name');
var phoneModalInput = document.querySelector('#modal-phone');
var messageModalInput = document.querySelector('#modal-message');


// Модальное  окно
if (closeBtn) {
  closeBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('modal--close')) {
      modal.classList.remove('modal--close');
      overlay.classList.remove('overlay--close');
      body.classList.add('overflow');
      nameField.focus();
    }
  });
}


if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', function () {
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  }
});

if (overlay) {
  overlay.addEventListener('click', function () {
    if (!modal.classList.contains('modal--close')) {
      modal.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}

// Перемещение
if (btn) {
  btn.addEventListener('click', function () {
    window.scrollBy({top: (form.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

if (scroll) {
  scroll.addEventListener('click', function () {
    window.scrollBy({top: (scrollTarget.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}


// Аккордеон
accordions.forEach(function (accordion) {
  var btn = accordion.querySelector('.page-footer__button');
  var accordion = accordion.querySelector('.page-footer__accordion');

  btn.addEventListener('click', function () {
    if (btn.classList.contains('page-footer__button--opened')) {
      btn.classList.remove('page-footer__button--opened');
      year.classList.addClass('relative');
    } else {
      footerButtons.forEach(function (footerButton) {
        footerButton.classList.remove('page-footer__button--opened');
      });
      btn.classList.add('page-footer__button--opened');
    }
    if (accordion.classList.contains('page-footer__accordion--opened')) {
      accordion.classList.remove('page-footer__accordion--opened');
    } else {
      footerAccordions.forEach(function (footerAccordion) {
        footerAccordion.classList.remove('page-footer__accordion--opened');
      });
      accordion.classList.add('page-footer__accordion--opened');
    }
  });
});

// Валидация номера телефона
// import IMask from 'imask'

// IMask(document.querySelector('#form-phone'), {mask: '+{7}(000)000-00-00'});
// IMask(document.querySelector('#modal-phone'), {mask: '+{7}(000)000-00-00'});

// Хранение данных в localStorage
if (contactsForm) {
  contactsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-field', nameFormInput.value);
    localStorage.setItem('phone-field', phoneFormInput.value);
    localStorage.setItem('message-field', messageFormInput.value);
  });
}

if (modalForm) {
  modalForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-modal', nameModalInput.value);
    localStorage.setItem('phone-modal', phoneModalInput.value);
    localStorage.setItem('message-modal', messageModalInput.value);
  });
  }
})();
