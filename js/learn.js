'use strict';

const learnIcons = document.querySelector('.learnIcons');
let indice = 0;

const selLearn = e => {
  const icon = e.target.closest('.testimonial__icon');
  if (!icon) return;
  for (let i = 0; i < 2; i++) {
    const iconLearn = document.querySelector(`.testimonial__icon--zoom[data-index="${indice}"]`);
    const textLearn = document.querySelector(`.testimonial__text[data-index="${indice}"]`);
    if (iconLearn) iconLearn.classList.toggle('testimonial__icon--zoom-active');
    if (textLearn) textLearn.classList.toggle('testimonial__text--not-display');
    indice = icon.dataset.index;
  }
};

const inicializarLearn = () => {
  learnIcons.addEventListener('click', selLearn);
};

export default inicializarLearn;
