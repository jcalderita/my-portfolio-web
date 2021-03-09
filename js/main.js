'use strict';

import inicializarImages from './images.js';
import inicializarNavegador from './navigator.js';
import inicializarSecciones from './sections.js';
import inicializarSentence from './sentence.js';
import inicializarSlide from './slider.js';

inicializarNavegador();
inicializarSentence();
inicializarSecciones();
inicializarImages();
inicializarSlide();

const prueba = document.querySelector('.slide--1');
console.log(prueba.height);
