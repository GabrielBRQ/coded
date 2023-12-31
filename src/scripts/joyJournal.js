import '../css/joyJournal.css';
import { createCaptcha } from './captchaV2.js';
import { addYearSong, playHappy, speak, stopHappy } from './audio.js';
import {
  checkStats,
  changeStats,
  createYears,
  addYear,
  getYear,
} from './localStorage-control.js';
import popup from '../img/popup.gif';
import { timeTravelJoy } from './timeMachine.js';
import { listenHome } from './ato1-v1.js';

if (document.title === 'JOY JOURNAL') {
  fetch('./ato1-v1.html')
    .then((response) => response.text())
    .then((data) => {
      const tempElement = document.createElement('div');
      tempElement.innerHTML = data;

      // Extraia o conteúdo do cabeçalho
      const headerContent = tempElement.querySelector('.timeWarp').innerHTML;

      // Substitua o conteúdo do cabeçalho na página alterada
      document.querySelector('.timeWarp').innerHTML = headerContent;
      const url = document.querySelector('.url p');
      createYears();
      url.textContent = 'http://www.joyjournal.com/';
      listenYears();
      listenHome();
    });

  document.addEventListener('DOMContentLoaded', function () {
    listenYears();
    addEvent();
    timeTravelJoy(getYear());
    const animatedImage = document.querySelector('.weird');
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (checkStats('yearClue') === false) {
        // Ativa a animação e fala
        if (scrollPosition >= (62 * window.innerHeight) / 100) {
          animatedImage.style.animationPlayState = 'running';
          window.removeEventListener('scroll', handleScroll);
          setTimeout(() => {
            speak();
            const dialogue = document.querySelector('.dialogue');
            dialogue.style.display = 'flex';
            setTimeout(() => {
              const dialogue = document.querySelector('.dialogue');
              dialogue.style.display = 'none';
              changeStats('yearClue');
            }, 3000);
          }, 5500);
        }
      } else {
        animatedImage.style.display = 'none';
      }
    }

    window.addEventListener('scroll', handleScroll);
  });
}

function createDivYear(texto) {
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
      const divYear = createDivYear(texto);
      const timeline = document.querySelector('.timeline');
      timeline.appendChild(divYear);

      addYear(texto);
      // Remover o event listener após o primeiro clique
      tag.removeEventListener('click', handleClick);
      listenYears();
      addYearSong();
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
  console.log('listenYears foi chamado')
  var yearDivs = document.querySelectorAll('.year');
  yearDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      const blur = document.querySelector('.blur');
      blur.style.display = 'flex';
      createCaptcha(div.textContent);
      if (checkStats('jumpscare') === false) {
        window.addEventListener('scroll', playPopup);
      }
    });
  });
}

function playPopup() {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= (5 * window.innerHeight) / 100) {
    const content = document.querySelector('.content-joy ');
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
    }, 5500);
    changeStats('jumpscare');
  }
}

function closePopup() {
  const popup = document.querySelector('.popup');
  const popupButton = document.querySelector('.popup button');
  const dialogue = document.querySelector('.dialogue');
  const dialogueText = document.querySelector('.dialogue p');

  popupButton.addEventListener('click', function () {
    popup.style.display = 'none';
    stopHappy();
    setTimeout(() => {
      if (checkStats('backMoodleClue') === false) {
        changeStats('backMoodleClue');
        speak();
        dialogueText.textContent =
          'Será que a página do Moodle está diferente?';
        dialogue.style.display = 'flex';
        setTimeout(() => {
          dialogue.style.display = 'none';
        }, 3500);
      }
    }, 6500);
  });
}

export { listenYears };
