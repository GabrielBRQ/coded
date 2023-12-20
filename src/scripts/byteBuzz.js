import '../css/byteBuzz.css';
import { timeTravelBuzz } from './timeMachine.js';
import { getYear, createYears } from './localStorage-control.js';
import { createCaptcha } from './captchaV2.js';
import { listenHome } from './ato1-v1.js';

if (document.title === 'Byte Buzz') {
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
      url.textContent = 'http://www.bytebuzz.com/';
      listenYears();
      listenHome();
    });

  document.addEventListener('DOMContentLoaded', function () {
    timeTravelBuzz(getYear());
    setTimeout(() => {
      listenYears();
      addEvent();
    }, 3000);
  });
}

function listenYears() {
  var yearDivs = document.querySelectorAll('.year');
  yearDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      const blur = document.querySelector('.blur');
      blur.style.display = 'flex';
      createCaptcha(div.textContent);
    });
  });
}

function addEvent() {
  const tag = document.querySelector('i');

  function handleClick() {
    window.location.href = './dnLeaks.html';
  }

  // Verificar se o evento ainda não foi adicionado
  if (tag) {
    tag.addEventListener('click', handleClick);
  }
}

export { addEvent };
