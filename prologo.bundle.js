/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/prologo.js ***!
  \************************/
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    var chapter = document.querySelector('.chapter');
    chapter.style.opacity = 1;
  }, 1000);
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
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbG9nby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGVkLy4vc3JjL3Byb2xvZ28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdmFyIGNoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcHRlcicpO1xuICAgIGNoYXB0ZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gIH0sIDEwMDApO1xuICBjb25zdCBzdGFydENoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcblxuICBzdGFydENoYXB0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgc3RhcnRDaGFwdGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB2YXIgY2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFwdGVyJyk7XG4gICAgY2hhcHRlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNoYXB0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2lzZScpO1xuICAgICAgYXVkaW8udm9sdW1lID0gMC4xO1xuICAgICAgYXVkaW8ucGxheSgpO1xuXG4gICAgICBmdW5jdGlvbiBhdW1lbnRhclZvbHVtZUdyYWR1YWxtZW50ZSgpIHtcbiAgICAgICAgdmFyIGludGVydmFsbyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBBdW1lbnRlIG8gdm9sdW1lIGVtIGluY3JlbWVudG9zIHBlcXVlbm9zXG4gICAgICAgICAgaWYgKGF1ZGlvLnZvbHVtZSA8IDAuNDUpIHtcbiAgICAgICAgICAgIGF1ZGlvLnZvbHVtZSArPSAwLjA1O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdWRpby52b2x1bWUgPSAwLjQ1O1xuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBjaGFuZ2VUZXh0KCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMjUwKTtcbiAgICAgIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgZnV6enkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnV6enktb3ZlcmxheScpO1xuXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmdXp6eS5zdHlsZS5vcGFjaXR5ID0gMC4xNTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgICB9LCAyNTAwKTtcbiAgICAgIC8vIENoYW1lIGEgZnVuw6fDo28gcGFyYSBhdW1lbnRhciBvIHZvbHVtZSBncmFkdWFsbWVudGUgYXDDs3MgdW0gYXRyYXNvIChwb3IgZXhlbXBsbywgMiBzZWd1bmRvcylcbiAgICAgIHNldFRpbWVvdXQoYXVtZW50YXJWb2x1bWVHcmFkdWFsbWVudGUsIDIwMDApO1xuICAgIH0sIDMwMDApO1xuICB9KTtcblxuICBmdW5jdGlvbiBjaGFuZ2VUZXh0KCkge1xuICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlIHAnKTtcbiAgICBjb25zdCBkaWFsb2d1ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xuICAgIGNvbnN0IHRleHRzID0gW1xuICAgICAgWydQb3IgZmF2b3IuLi4nLCAyMDAwLCAyMDAwXSxcbiAgICAgIFsnTWUgYWp1ZGEhJywgMjAwMCwgMzUwMF0sXG4gICAgICBbJ1ZvY8OqIHByZWNpc2EgbWUgc2FsdmFyLCBlbGVzIHF1ZXJlbSBhY2FiYXIgY29taWdvLicsIDM1MDAsIDYwMDBdLFxuICAgICAgWydBcXVpLCB0b21hIGlzc28uJywgMjUwMCwgMTAwMF0sXG4gICAgICBbXG4gICAgICAgICdFc3NhIMOpIHVtYSBtw6FxdWluYSBkbyB0ZW1wbywgY29tIGVsYSB2b2PDqiBwb2RlIHZvbHRhciBhbyBwYXNzYWRvIG91IGlyIHBhcmEgbyBmdXR1cm8uJyxcbiAgICAgICAgNTAwMCxcbiAgICAgICAgMzAwMCxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgICdUZW50ZSB2b2PDqiBtZXNtbywgY2xpcXVlIG5vIGFubyBlIGltcGXDp2EgcXVlIGlzc28gYWNvbnRlw6dhLicsXG4gICAgICAgIDgwMDAsXG4gICAgICAgIDEwMCxcbiAgICAgIF0sXG4gICAgXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUZXh0KCkge1xuICAgICAgaWYgKGluZGV4IDwgdGV4dHMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBhcnIgPSB0ZXh0c1tpbmRleF07XG4gICAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gYXJyWzBdO1xuICAgICAgICBkaWFsb2d1ZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBoaWRlRGlhbG9ndWUoYXJyWzFdLCBhcnJbMl0pO1xuICAgICAgICBpZiAoaW5kZXggPT09IDMpIHtcbiAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLm9wYWNpdHkgPSAwLjc7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDUpe1xuICAgICAgICAgICAgY29uc3QgdGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUnKTtcbiAgICAgICAgICAgIHRpbWVsaW5lLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XG4gICAgICAgIGZ1enp5LnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZURpYWxvZ3VlKHRpbWVEdXJhdGlvbiwgdGltZUNoYW5nZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpYWxvZ3VlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVRleHQoKTtcbiAgICAgICAgfSwgdGltZUNoYW5nZSk7XG4gICAgICB9LCB0aW1lRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZVRleHQoKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=