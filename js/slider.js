'use strict';
// Slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

const createDots = () => slides.forEach((_, i) => dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`));
const desactivarDot = () => document.querySelector(`button[data-slide="${curSlide}"]`).classList.remove('dots__dot--active');
const activarDot = () => document.querySelector(`button[data-slide="${curSlide}"]`).classList.add('dots__dot--active');

let curSlide = 0;

const goToSlide = () => {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));
  activarDot();
};

const prevSlide = () => {
  desactivarDot();
  curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
  goToSlide();
};

const nextSlide = () => {
  desactivarDot();
  curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
  goToSlide();
};

const inicializarSlide = () => {
  dotContainer.addEventListener('click', function (e) {
    if (e.target.dataset.slide) {
      desactivarDot();
      curSlide = e.target.dataset.slide;
      goToSlide();
    }
  });

  createDots();
  goToSlide();

  btnLeft.addEventListener('click', prevSlide);
  btnRight.addEventListener('click', nextSlide);

  document.addEventListener('keydown', e => {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};

export default inicializarSlide;
