'use strict';

const header = document.querySelector('.main-header');
const toogle_button = document.querySelector('.toggle-button');
const mobile_nav = document.querySelector('.mobile-nav');
const backdrop = document.querySelector('.backdrop');

const addRemoveOpen = () => {
  mobile_nav.classList.toggle('open');
  backdrop.classList.toggle('open');
};

const inicializarHeader = () => {
  toogle_button.addEventListener('click', addRemoveOpen);
  backdrop.addEventListener('click', addRemoveOpen);
};

export default inicializarHeader;
