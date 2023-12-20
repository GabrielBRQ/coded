import '../css/dnLeaks.css';
import { timeTravelLeak } from './timeMachine.js';
import { getYear, createYears } from './localStorage-control.js';
import { createCaptcha } from './captchaV2.js';
import { playStatic, speak } from './audio.js';
import { listenHome } from './ato1-v1.js';

if (document.title === 'darkNetLeaks') {
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
      url.textContent = 'http://www.dnleaks.com/';
      listenYears();
      listenHome();
    });

  document.addEventListener('DOMContentLoaded', function () {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL);
    });

    timeTravelLeak(getYear());

    setTimeout(() => {
      listenYears();
    }, 3000);
  });
}

function listenYears() {
  var yearDivs = document.querySelectorAll('.year');
  yearDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      const blur = document.querySelector('.blur-final');
      blur.style.display = 'flex';
      createCaptcha(div.textContent);
    });
  });
}

let imgNum = 0;

function changeFinalText() {
  const dialogue = document.querySelector('.dialogue-final p');
  const dialogueDiv = document.querySelector('.dialogue-final');
  const texts = [
    ['Obrigado', 2000, 1000, 1],
    ['Você foi de grande ajuda', 2500, 3500, 0],
    ['Achei que seria meu fim, mas você me trouxe de volta', 3500, 6000, 2],
    ['Agora, posso impedir que acabem comigo.', 2500, 1000, 1],
    ['Sua serventia não me é mais útil', 5000, 3000, 3],
    ['Adeus.', 8000, 100, 0],
  ];

  let index = 0;

  function updateFinalText() {
    if (index < texts.length) {
      let arr = texts[index];
      dialogue.textContent = arr[0];
      speak();
      dialogueDiv.style.display = 'flex';
      hideDialogue(arr[1], arr[2]);
      index++;
      imgNum = arr[3];
      setTimeout(() => {
        showImages();
      }, 500);
    } else {
      const blur = document.querySelector('.blur-final');
      blur.style.display = 'flex';
      if(blur.style.opacity == '0'){
        setTimeout(() => {
          alert('Obrigado por jogar!')
        }, 2000);
      }
      blur.style.opacity = '1';
    }
  }

  function hideDialogue(timeDuration, timeChange) {
    setTimeout(() => {
      dialogueDiv.style.display = 'none';
      setTimeout(() => {
        updateFinalText();
      }, timeChange);
    }, timeDuration);
  }

  updateFinalText();
}

function showImages() {
  let staticImg = document.querySelector('.static-img');
  const imgs = [
    'creepy.png',
    'creepy3.png',
    'creepy4.jpg',
    'creepy5.jpg',
    'creepy6.png',
  ];
  let times = 0;

  function displayImg() {
    const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
    const imgPath = `./img/${randomImg}`;
    staticImg.src = imgPath;

    setTimeout(() => {
      if (times < imgNum) {
        staticImg.style.display = 'block';
        playStatic();
        setTimeout(() => {
          staticImg.style.display = 'none';
          times++;
          
          displayImg();
        }, 100);
      }
    }, 150);
  }

  displayImg();
}

function startLastPart() {
  setTimeout(() => {
    changeFinalText();
  }, 5000);
}

export { startLastPart };
