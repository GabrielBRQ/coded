import '../css/dnLeaks.css';
import { timeTravelBuzz } from './timeMachine.js';
import { getYear, createYears } from './localStorage-control.js';
import { createCaptcha } from './captchaV2.js';

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
    createYears();
    url.textContent = 'http://www.dnleaks.com/';
    listenYears();
  });

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    listenYears();
  }, 3000);
});

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


