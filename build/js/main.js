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

  if (scrollForm) {
    scrollForm.addEventListener('click', function () {
      window.scrollBy({top: (form.offsetTop - window.pageYOffset), left: 0, behavior: 'smooth'});
    });
  }

  if (scrollBenefits) {
    scrollBenefits.addEventListener('click', function () {
      window.scrollBy({top: (benefits.offsetTop - window.pageYOffset), left: 0, behavior: 'smooth'});
    });
  }

  // Аккордеон

  var acc = document.querySelectorAll('.page-footer__acc');

  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle('active');

      this.nextElementSibling.classList.toggle('show');
    };
  }

  // Хранение данных в localStorage

  var isStorageSupport = true;
  try {
    localStorage.getItem('nameModalInput');
    localStorage.getItem('phoneModalInput');
    localStorage.getItem('messageModalInput');
    localStorage.getItem('nameFormInput');
    localStorage.getItem('phoneFormInput');
    localStorage.getItem('messageFormInput');
  } catch (err) {
    isStorageSupport = false;
  }

  modalForm.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('name-modal', nameModalInput.value);
      localStorage.setItem('phone-modal', phoneModalInput.value);
      localStorage.setItem('message-modal', messageModalInput.value);
    }
  });

  var getItemModal = function () {
    if (isStorageSupport) {
      nameModalInput.value = localStorage.getItem('name-modal');
      phoneModalInput.value = localStorage.getItem('phone-modal');
      messageModalInput.value = localStorage.getItem('message-modal');
    }
  };

  modalOpenBtn.addEventListener('click', function () {
    getItemModal();
  });

  contactsForm.addEventListener('submit', function () {
    if (isStorageSupport) {
      localStorage.setItem('name-field', nameFormInput.value);
      localStorage.setItem('phone-field', phoneFormInput.value);
      localStorage.setItem('message-field', messageFormInput.value);
    }
  });

  var getItemForm = function () {
    if (isStorageSupport) {
      nameFormInput.value = localStorage.getItem('name-field');
      phoneFormInput.value = localStorage.getItem('phone-field');
      messageFormInput.value = localStorage.getItem('message-field');
    }
  };

  nameFormInput.addEventListener('click', function () {
    getItemForm();
  });

  //  Маска номера телефона

  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  /* eslint-disable */

  var maskModal = IMask(phoneModalInput, maskOptions);
  var maskForm = IMask(phoneFormInput, maskOptions);

})();
