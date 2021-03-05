'use strict';

const sections = document.querySelectorAll('.section');

const revelarSections = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
};

const observer = new IntersectionObserver(revelarSections, { threshold: 0.15 });

const inicializarSecciones = () => sections.forEach(section => observer.observe(section));

export default inicializarSecciones;
