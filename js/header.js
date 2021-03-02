'use strict';

const header = document.querySelector('.main-header');
const toogle_button = document.querySelector('.toggle-button');
const mobile_nav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const addOpen = () => {
  mobile_nav.classList.add('open');
  backdrop.classList.add('open');
};

const removeOpen = () => {
  mobile_nav.classList.remove('open');
  backdrop.classList.remove('open');
  modal.classList.add('hidden');
};

const inicializarHeader = () => {
  toogle_button.addEventListener('click', addOpen);
  backdrop.addEventListener('click', removeOpen);
};

export default inicializarHeader;
