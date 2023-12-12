import "../css/prologo.css";
import { createCaptcha, updateLetter } from "./captcha.js";

document.addEventListener('DOMContentLoaded', function () {
  const startChapter = document.querySelector('.start');

  startChapter.addEventListener('click', function () {
    startChapter.disabled = true;
    var chapter = document.querySelector('.chapter');
    chapter.style.opacity = 0;
    setTimeout(() => {
      chapter.style.display = 'none';
      var audio = document.getElementById('noise');
      audio.volume = 0.1;
      audio.play();

      function aumentarVolumeGradualmente() {
        var intervalo = setInterval(function () {
          // Aumente o volume em incrementos pequenos
          if (audio.volume < 0.45) {
            audio.volume += 0.05;
          } else {
            audio.volume = 0.45;
            const timeWarp = document.querySelector('.timeWarp');
            timeWarp.style.display = 'flex';
            changeText();
            clearInterval(intervalo);
          }
        }, 1250);
      }

      setTimeout(() => {
        const container = document.querySelector('.container');
        const fuzzy = document.querySelector('.fuzzy-overlay');

        container.style.display = 'grid';
        setTimeout(() => {
          fuzzy.style.opacity = 0.15;
        }, 2500);
      }, 2500);
      // Chame a função para aumentar o volume gradualmente após um atraso (por exemplo, 2 segundos)
      setTimeout(aumentarVolumeGradualmente, 2000);
    }, 3000);
  });

  function changeText() {
    const dialogue = document.querySelector('.dialogue p');
    const dialogueDiv = document.querySelector('.dialogue');
    const texts = [
      ['Por favor...', 2000, 2000],
      ['Me ajuda!', 2000, 3500],
      ['Você precisa me salvar, eles querem acabar comigo.', 3500, 6000],
      ['Aqui, toma isso.', 2500, 1000],
      [
        'Essa é uma máquina do tempo, com ela você pode voltar ao passado ou ir para o futuro.',
        5000,
        3000,
      ],
      [
        'Tente você mesmo, clique no ano e impeça que isso aconteça.',
        8000,
        100,
      ],
    ];

    let index = 0;

    function updateText() {
      if (index < texts.length) {
        let arr = texts[index];
        dialogue.textContent = arr[0];
        dialogueDiv.style.display = 'flex';
        hideDialogue(arr[1], arr[2]);
        if (index === 3) {
          const timeWarp = document.querySelector('.timeWarp');
          timeWarp.style.opacity = 0.7;
        } else if (index === 5){
            const timeline = document.querySelector('.timeline');
            timeline.style.opacity = 1;
        }
        index++;
      } else {
        const fuzzy = document.querySelector('.fuzzy-overlay');
        fuzzy.style.opacity = 0.4;
      }
    }

    function hideDialogue(timeDuration, timeChange) {
      setTimeout(() => {
        dialogueDiv.style.display = 'none';
        setTimeout(() => {
          updateText();
        }, timeChange);
      }, timeDuration);
    }

    updateText();
  }

  var yearButton = document.querySelector('.year');
  yearButton.addEventListener('click', function () {
    createCaptcha()
    updateLetter()
    yearButton.disabled = true;
  })
});
