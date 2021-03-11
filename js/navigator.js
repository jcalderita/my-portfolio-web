'use strict';
const toogle_button = document.querySelector('.toggle-button');
const mobile_nav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const main_nav__items = document.querySelector('.main-nav__items');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('a.btn-green');
const seguirLeyendo = document.querySelector('.section__btn-reading');
const section1 = document.querySelector('#section--1');

const items__links = document.querySelectorAll('.main-nav__items, .mobile-nav__items');

const scroolTo = function (e) {
  e.preventDefault();
  const lnk = e.target.closest('.link:not(.btn-green)');
  if (!lnk) return;
  const lnkParent = e.target.closest('.mobile-nav__item');
  lnkParent && removeOpen();
  const el = document.querySelector(lnk.getAttribute('href'));
  el && el.scrollIntoView({ behavior: 'smooth' });
};

const removeOpenZindex = () => {
  setTimeout(() => {
    backdrop.classList.remove('open--add-zindex');
  }, 600);
};

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  mobile_nav.classList.remove('open');
  backdrop.classList.add('open', 'open--add-zindex');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  backdrop.classList.remove('open');
  removeOpenZindex();
};

const addOpen = () => {
  mobile_nav.classList.add('open');
  backdrop.classList.add('open', 'open--add-zindex');
};

const removeOpen = () => {
  mobile_nav.classList.remove('open');
  backdrop.classList.remove('open');
  removeOpenZindex();
  modal.classList.add('hidden');
};

const handleHover = function (e) {
  if (!e.target.href) return;
  const link = e.target;
  const links = main_nav__items.querySelectorAll('a');
  links.forEach(el => {
    if (el !== link) el.style.opacity = this;
  });
};

const inicializarNavegador = () => {
  toogle_button.addEventListener('click', addOpen);
  backdrop.addEventListener('click', removeOpen);
  main_nav__items.addEventListener('mouseover', handleHover.bind(0.5));
  main_nav__items.addEventListener('mouseout', handleHover.bind(1));
  main_nav__items.addEventListener('click', handleHover.bind(1));
  btnsOpenModal.forEach(e => e.addEventListener('click', openModal));
  btnsCloseModal.forEach(e => e.addEventListener('click', closeModal));
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
  seguirLeyendo.addEventListener('click', e => {
    e.preventDefault();
    section1.scrollIntoView({ behavior: 'smooth' });
  });
  items__links.forEach(e => e.addEventListener('click', scroolTo));
};

export default inicializarNavegador;
