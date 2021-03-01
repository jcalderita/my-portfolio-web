'use strict';

const main_nav__items = document.querySelector('.main-nav__items');

const handleHover = function (e) {
  if (!e.target.href) return;
  const link = e.target;
  const links = main_nav__items.querySelectorAll('a');
  links.forEach(el => {
    if (el !== link) el.style.opacity = this;
  });
};

const inicializarNavegador = () => {
  main_nav__items.addEventListener('mouseover', handleHover.bind(0.5));
  main_nav__items.addEventListener('mouseout', handleHover.bind(1));
};

export default inicializarNavegador;
