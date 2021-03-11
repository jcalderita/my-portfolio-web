'use strict';

const sections = document.querySelectorAll('.section');

const revelarSections = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
    const up = entry.target.querySelector('.section__study-up');
    if (!up) return;
    up.classList.add('section__study-up--animation');
    const down = entry.target.querySelector('.section__study-down');
    down.classList.add('section__study-down--animation');
  }
};

const observer = new IntersectionObserver(revelarSections, { threshold: [0.15, 0.25, 0.5, 0.75, 1] });

const inicializarSecciones = () => sections.forEach(section => observer.observe(section));

export default inicializarSecciones;
