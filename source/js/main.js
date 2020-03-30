'use strict';

(function() {

var ESC_KEYCODE = 27;
var body = document.querySelector('body');
var modal = document.querySelector('.modal');
var modalOpenBtn = document.querySelector('.page-header__btn');
var modalCloseBtn = modal.querySelector('.modal__close-btn');
var nameModalInput = modal.querySelector('[name=name-modal]');
var overlay = document.querySelector('.overlay');
var scrollForm = document.querySelector('.first-screen__btn');
var scrollBenefits = document.querySelector('.first-screen__scroll');
var benefits = document.querySelector('.benefits');
var form = document.querySelector('.contacts-us');
var accordions = document.querySelectorAll('.accordion');
var accordionButtons = document.querySelectorAll('.page-footer__button');
var footerAccordions = document.querySelectorAll('.page-footer__accordion');
var contactsForm = document.querySelector('.contacts-us form');
var nameFormInput = document.querySelector('#contacts-us-user-name');
var phoneFormInput = document.querySelector('#contacts-us-phone');
var messageFormInput = document.querySelector('#contacts-us-message');
var modalForm = document.querySelector('.modal form');
var nameModalInput = document.querySelector('#modal-user-name');
var phoneModalInput = document.querySelector('#modal-phone');
var messageModalInput = document.querySelector('#modal-message');

var onModalEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeModal();
  }
};

var onOverlayClick = function () {
  closeModal();
};

var openModal = function () {
  modal.classList.add('modal--open');
  overlay.classList.add('overlay--show');
  body.classList.add('overflow');
};

var closeModal = function () {
  modal.classList.remove('modal--open');
  overlay.classList.remove('overlay--show');
  document.addEventListener('keydown', onModalEscPress);
  overlay.addEventListener('click', onOverlayClick);
  body.classList.remove('overflow');
};

modal.addEventListener('click', function (evt) {
  evt.stopPropagation();
});

modalOpenBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  openModal();
  nameModalInput.focus();
});

modalCloseBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeModal();
});

// Перемещение
if (scrollForm) {
  scrollForm.addEventListener('click', function () {
    window.scrollBy({top: (form.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

if (scrollBenefits) {
  scrollBenefits.addEventListener('click', function () {
    window.scrollBy({top: (benefits.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

// Аккордеон

accordions.forEach(function (accordion) {
  var btn = accordion.querySelector('.page-footer__button');
  var accordion = accordion.querySelector('.page-footer__accordion');

  btn.addEventListener('click', function () {
    if (btn.classList.contains('page-footer__button--opened')) {
      btn.classList.remove('page-footer__button--opened');
    } else {
      accordionButtons.forEach(function (footerButton) {
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

// Хранение данных в localStorage

if (contactsForm) {
  contactsForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    localStorage.setItem('name-field', nameFormInput.value);
    localStorage.setItem('phone-field', phoneFormInput.value);
    localStorage.setItem('message-field', messageFormInput.value);
  });
}

if (modalForm) {
  modalForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    localStorage.setItem('name-modal', nameModalInput.value);
    localStorage.setItem('phone-modal', phoneModalInput.value);
    localStorage.setItem('message-modal', messageModalInput.value);
  });
}

//  Маска номера телефона

var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(phoneModalInput, maskOptions);
var mask = IMask(phoneFormInput, maskOptions);

})();
