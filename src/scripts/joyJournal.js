import '../css/joyJournal.css';
import { timeTravelJoy } from './timeMachine.js';
import { createCaptcha } from './captchaV2.js';
import { playHappy, stopHappy } from './audio.js';
import popup from '../img/popup.gif';

let jumpscare = false;

fetch('./ato1-v1.html')
  .then((response) => response.text())
  .then((data) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = data;

    // Extraia o conteúdo do cabeçalho
    const headerContent = tempElement.querySelector('.timeWarp').innerHTML;

    // Substitua o conteúdo do cabeçalho na página alterada
    document.querySelector('.timeWarp').innerHTML = headerContent;
    const url = document.querySelector('.url');

    url.textContent = 'http://www.joyjournal.com/';
    listenYears();
  })
  .catch((error) =>
    console.error('Erro ao carregar a página preservada:', error)
  );

document.addEventListener('DOMContentLoaded', function () {
  addEvent();
  const animatedImage = document.querySelector('.weird');

  function handleScroll() {
    const scrollPosition = window.scrollY;

    // Ativa a animação quando a posição de rolagem atinge 120vh
    if (scrollPosition >= (62 * window.innerHeight) / 100) {
      animatedImage.style.animationPlayState = 'running';
      window.removeEventListener('scroll', handleScroll);
      setTimeout(() => {
        const dialogue = document.querySelector('.dialogue');
        dialogue.style.display = 'flex';
        setTimeout(() => {
          const dialogue = document.querySelector('.dialogue');
          dialogue.style.display = 'none';
        }, 3000);
      }, 5500);
    }
  }

  
  window.addEventListener('scroll', handleScroll);
  
});

function criarDivYear(texto) {
  const divYear = document.createElement('div');
  divYear.classList.add('year');
  divYear.textContent = texto;

  return divYear;
}

function addEvent() {
  const tag = document.querySelector('i');

  function handleClick() {
    const texto = tag.textContent;

    if (verificarDivExistente(texto) === false) {
      const divYear = criarDivYear(texto);
      const timeline = document.querySelector('.timeline');
      timeline.appendChild(divYear);

      // Remover o event listener após o primeiro clique
      tag.removeEventListener('click', handleClick);
      listenYears();
    }
  }

  // Verificar se o evento ainda não foi adicionado
  if (tag) {
    tag.addEventListener('click', handleClick);
  }
}

function verificarDivExistente(texto) {
  const divsExistente = document.querySelectorAll('.timeline .year');

  for (const divExistente of divsExistente) {
    if (divExistente.textContent === texto) {
      return true; // Já existe uma div com o mesmo texto
    }
  }

  return false; // Nenhuma div encontrada com o mesmo texto
}

function listenYears() {
  var yearDivs = document.querySelectorAll('.year');
  yearDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      createCaptcha(div.textContent);
      if(jumpscare === false){
        window.addEventListener('scroll', playPopup);
      }
    });
  });
}

function playPopup() {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= (40 * window.innerHeight) / 100) {
    const content = document.querySelector('.content');
    var popupDiv = document.createElement('div');
    var popupButton = document.createElement('button');

    popupButton.textContent = 'FECHAR';
    
    var img = new Image();
    img.src = popup;

    popupDiv.classList.add('popup');
    img.classList.add('popup-img');
    content.appendChild(popupDiv);
    popupDiv.appendChild(img);
    popupDiv.appendChild(popupButton);
    window.removeEventListener('scroll', playPopup);
    setTimeout(() => {
      playHappy();
      closePopup();
      popupDiv.style.opacity = 1;
    }, 3000);
    jumpscare = true;
    
  }
}

function closePopup() {
  const popup = document.querySelector('.popup');
  const popupButton = document.querySelector('.popup button');

  popupButton.addEventListener('click', function () {
    popup.style.display = 'none';
    stopHappy();
  });
}