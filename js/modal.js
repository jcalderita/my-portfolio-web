'use strict';
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const mobile_nav = document.querySelector('.mobile-nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  mobile_nav.classList.remove('open');
  backdrop.classList.add('open');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  backdrop.classList.remove('open');
};

const inicializarModal = () => {
  btnsOpenModal.forEach(e => e.addEventListener('click', openModal));
  btnsCloseModal.forEach(e => e.addEventListener('click', closeModal));

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
};

export default inicializarModal;
