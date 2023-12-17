import '../css/ato1-v1.css';
import { checkChapter1, changeChapter1, createYears } from './localStorage-control.js';
import { createCaptcha } from './captchaV2.js';

document.addEventListener('DOMContentLoaded', function () {
  const startChapter = document.querySelector('.start');
  const container = document.querySelector('.container');
  history.pushState(null, null, document.URL);
  if (checkChapter1() === false) {
    startChapter.addEventListener('click', function () {
      startChapter.disabled = true;
      history.pushState(null, null, document.URL);
      var chapter = document.querySelector('.chapter');
      chapter.style.opacity = 0;
      changeChapter1();
      setTimeout(() => {
        chapter.style.display = 'none';
        activeContent();
        setTimeout(() => {
          container.style.opacity = 1;
        }, 500);
        setTimeout(() => {
          const dialogue = document.querySelector('.dialogue');
          dialogue.style.display = 'flex';
          setTimeout(() => {
            dialogue.style.display = 'none';
          }, 3000);
        }, 5500);
      }, 3000);
    });
  } else {
    var chapter = document.querySelector('.chapter');
    chapter.style.display = 'none';
    container.style.opacity = 1;
    activeContent();
  }

  createYears();
  var buttons = document.querySelectorAll('.search-buttons button');

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const dialogue = document.querySelector('.dialogue');
      dialogue.textContent = 'Não funciona...';
      dialogue.style.display = 'flex';
      setTimeout(() => {
        dialogue.style.display = 'none';
      }, 2000);
    });
  });

  var newsDiv = document.querySelector('.news');

  newsDiv.addEventListener('click', function () {
    window.location.href = './joyJournal.html';
  });

});

function activeContent() {
  const container = document.querySelector('.container');
  container.style.display = 'flex';
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.height = "110vh";
}