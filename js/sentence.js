'use strict';

const section_sentence = document.querySelector('.section__sentence');

function indexFraseRandom(max) {
  return Math.floor(Math.random() * max);
}

const limpiarFraseAutor = () => {
  let h = section_sentence.querySelector('h1');
  h.remove();
  h = section_sentence.querySelector('h4');
  h.remove();
};

const puntearFrase = (frase, p1, p2) => {
  let textoADevolver = '';
  frase.forEach((val, ind) => {
    if (ind === p1 - 1 || ind === p2 - 1) textoADevolver += `<span class="highlight">${val}</span>`.concat(' ');
    else textoADevolver += val.concat(' ');
  });

  return textoADevolver.trim();
};

const frase = async () => {
  try {
    const res = await fetch('./json/frases.json');
    if (!res.ok) throw new error('Resultado incorrecto');
    const data = await res.json();
    return data[indexFraseRandom(data.length)];
  } catch (err) {
    console.log(err);
  }
};

const inicializarSentence = async () => {
  const texto = await frase();
  const h4 = document.createElement('h4');
  h4.classList.add('section__subtitle');
  h4.textContent = texto.autor;
  const h1 = document.createElement('h1');
  h1.classList.add('section__title');
  h1.innerHTML = puntearFrase(texto.frase.split(' '), texto.hl1, texto.hl2);
  limpiarFraseAutor();
  section_sentence.prepend(h4);
  section_sentence.prepend(h1);
};

export default inicializarSentence;
