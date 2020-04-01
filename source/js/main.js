'use strict';

(function () {

  var ESC_KEYCODE = 27;
  var body = document.querySelector('body');
  var modal = document.querySelector('.modal');
  var modalOpenBtn = document.querySelector('.page-header__btn');
  var modalCloseBtn = modal.querySelector('.modal__close-btn');
  var overlay = document.querySelector('.overlay');
  var scrollForm = document.querySelector('.first-screen__btn');
  var scrollBenefits = document.querySelector('.first-screen__scroll');
  var benefits = document.querySelector('.benefits');
  var form = document.querySelector('.contacts-us');
  var accButtons = document.querySelectorAll('.page-footer__acc-button');
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
    document.addEventListener('keydown', onModalEscPress);
    overlay.classList.add('overlay--show');
    body.classList.add('overflow');
    overlay.addEventListener('click', onOverlayClick);
  };

  var closeModal = function () {
    modal.classList.remove('modal--open');
    overlay.classList.remove('overlay--show');
    document.removeEventListener('keydown', onModalEscPress);
    overlay.removeEventListener('click', onOverlayClick);
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
  window.__forceSmoothScrollPolyfill__ = true;

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

  for (var i = 0; i < accButtons.length; i++) {
    accButtons[i].addEventListener('click', function () {
      if (!(this.classList.contains('active'))) {
        for (var i = 0; i < accButtons.length; i++) {
          accButtons[i].classList.remove('active');
        }
        this.classList.add('active');
      }
    });
  }

  // Хранение данных в localStorage

  contactsForm.addEventListener('submit', function () {
    localStorage.setItem('name-field', nameFormInput.value);
    localStorage.setItem('phone-field', phoneFormInput.value);
    localStorage.setItem('message-field', messageFormInput.value);
  });

  modalForm.addEventListener('submit', function () {
    localStorage.setItem('name-modal', nameModalInput.value);
    localStorage.setItem('phone-modal', phoneModalInput.value);
    localStorage.setItem('message-modal', messageModalInput.value);
  });

  //  Маска номера телефона

  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  var mask = IMask(phoneModalInput, maskOptions);
  var mask = IMask(phoneFormInput, maskOptions);

})();
