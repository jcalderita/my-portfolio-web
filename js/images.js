'use strict';

const images = document.querySelectorAll('img[data-src]');

const changeImg = (entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;
    entry.target.removeAttribute('data-src');
    entry.target.addEventListener('load', () => entry.target.classList.remove('features__img--blur'));
    observer.unobserve(entry.target);
  }
};

const observerImg = new IntersectionObserver(changeImg, { threshold: 0.15 });

const inicializarImages = () => images.forEach(img => observerImg.observe(img));

export default inicializarImages;
