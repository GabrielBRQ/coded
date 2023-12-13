/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/audio.js":
/*!******************************!*\
  !*** ./src/scripts/audio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decreaseVolume: () => (/* binding */ decreaseVolume),
/* harmony export */   increaseVolume: () => (/* binding */ increaseVolume),
/* harmony export */   playEarthquake: () => (/* binding */ playEarthquake),
/* harmony export */   playRight: () => (/* binding */ playRight),
/* harmony export */   playWrong: () => (/* binding */ playWrong)
/* harmony export */ });
function playWrong() {
  var audio = document.getElementById('teclaErrada');
  audio.volume = 0.7;
  audio.play();
}

function playRight() {
  var audio = document.getElementById('teclaCorreta');
  audio.volume = 0.2;
  audio.play();
}

function playEarthquake(volume, type, duration) {
  const container = document.querySelector('.container');
  var audio = document.getElementById('earthquake');
  audio.volume = volume;
  audio.play();
  container.classList.add(type);

  setTimeout(() => {
    container.classList.remove('medium-shake');
  }, 700);
}

function increaseVolume(audioElement) {
  if (audioElement.volume >= 0.45) {
    audioElement.volume = 0.45;
    const timeWarp = document.querySelector('.timeWarp');
    timeWarp.style.display = 'flex';
    return;
  }
  setTimeout(() => {
    audioElement.volume += 0.05;
    increaseVolume(audioElement);
  }, 800);
}

function decreaseVolume(audioElement) {
  if (audioElement.volume <= 0.1) {
    audioElement.volume = 0.05;
    return;
  }
  setTimeout(() => {
    audioElement.volume -= 0.05;
    decreaseVolume(audioElement);
  }, 400);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/scripts/captcha.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCaptcha: () => (/* binding */ createCaptcha),
/* harmony export */   updateLetter: () => (/* binding */ updateLetter)
/* harmony export */ });
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");


let lastPressedKey = '';
let correctCount = 0;

function createCaptcha() {
  var container = document.querySelector('.container');

  // Cria a div com a classe "monkey-type".
  var monkeyTypeDiv = document.createElement('div');
  monkeyTypeDiv.classList.add('monkey-type');

  // Cria a div com a classe "monkey-title" e define o texto
  var monkeyTitleDiv = document.createElement('div');
  monkeyTitleDiv.classList.add('monkey-title');
  var captcha = document.createElement('p');
  captcha.textContent = 'CAPTCHA';
  var captchaDescription = document.createElement('p');
  captchaDescription.textContent = 'prove sua humanidade';
  monkeyTitleDiv.appendChild(captcha);
  monkeyTitleDiv.appendChild(captchaDescription);

  // Cria as divs internas com as classes "letter" e "progress-bar"
  var letterDiv = document.createElement('div');
  letterDiv.classList.add('letter');

  var progressBarDiv = document.createElement('div');
  progressBarDiv.classList.add('progress-bar');

  // Adiciona as divs internas à div "monkey-type"
  monkeyTypeDiv.appendChild(monkeyTitleDiv);
  monkeyTypeDiv.appendChild(letterDiv);
  monkeyTypeDiv.appendChild(progressBarDiv);

  // Adiciona a div "monkey-type" ao container existente
  container.appendChild(monkeyTypeDiv);
}

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function updateLetter() {
  document.addEventListener('keypress', handleKeyPress);
  const letterDiv = document.querySelector('.monkey-type .letter');

  lastPressedKey = '';
  const randomLetter = generateRandomLetter();
  letterDiv.textContent = randomLetter;
  letterDiv.classList.remove('correct');
}

function handleKeyPress(event) {
  const letterDiv = document.querySelector('.monkey-type .letter');
  const progressBar = document.querySelector('.monkey-type .progress-bar');
  const monkeyType = document.querySelector('.monkey-type');

  const pressedKey = String.fromCharCode(event.keyCode);
  const currentLetter = letterDiv.textContent;

  if (
    (pressedKey.toUpperCase() === currentLetter ||
      pressedKey.toLowerCase() === currentLetter) &&
    pressedKey !== lastPressedKey
  ) {
    lastPressedKey = pressedKey;
    letterDiv.classList.add('correct');
    (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playRight)();
    correctCount++;
    const fuzzy = document.querySelector('.fuzzy-overlay');
    fuzzy.style.opacity += 0.05;

    // Atualiza a largura da barra de progresso
    progressBar.style.width = correctCount * 10 + '%';

    if (correctCount === 2 || correctCount === 6) {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playEarthquake)(0.8, 'little-shake', 700);
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('earthquake'));
    }

    if (correctCount === 8) {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playEarthquake)(0.8, 'medium-shake', 700);
      setTimeout(() => {
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('earthquake'));
      }, 700);
    }

    if (correctCount === 10) {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playEarthquake)(1, 'big-shake');
      const eye = document.querySelector('.eye');
      eye.style.opacity = 0.25;
      monkeyType.style.display = 'none';
      setTimeout(() => {
        const dialogue = document.querySelector('.dialogue p');
        const dialogueDiv = document.querySelector('.dialogue');
        const container = document.querySelector('.container');
        container.style.opacity = 0;
        dialogue.textContent = 'Obrigado!';
        dialogueDiv.style.display = 'flex';
        setTimeout(() => {
          window.location.href = '../ato1-v1.html';
        }, 7000);
      }, 4000);
      setTimeout(() => {
        eye.style.height = '20vw';
      }, 9750);
    }

    setTimeout(() => {
      updateLetter();
    }, 255);
  } else if (monkeyType.style.display !== 'none') {
    letterDiv.classList.add('incorrect');
    (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playWrong)();
    setTimeout(() => {
      letterDiv.classList.remove('incorrect');
    }, 500);
  }
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWdGOzs7Ozs7O1VDaERoRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05rRjs7QUFFbEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQU0seURBQWM7QUFDcEIsTUFBTSx5REFBYztBQUNwQjs7QUFFQTtBQUNBLE1BQU0seURBQWM7QUFDcEI7QUFDQSxRQUFRLHlEQUFjO0FBQ3RCLE9BQU87QUFDUDs7QUFFQTtBQUNBLE1BQU0seURBQWM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0EsSUFBSSxvREFBUztBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFLRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2NhcHRjaGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcGxheVdyb25nKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjbGFFcnJhZGEnKTtcbiAgYXVkaW8udm9sdW1lID0gMC43O1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlSaWdodCgpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhQ29ycmV0YScpO1xuICBhdWRpby52b2x1bWUgPSAwLjI7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gcGxheUVhcnRocXVha2Uodm9sdW1lLCB0eXBlLCBkdXJhdGlvbikge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJyk7XG4gIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZTtcbiAgYXVkaW8ucGxheSgpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0eXBlKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXNoYWtlJyk7XG4gIH0sIDcwMCk7XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xuICBpZiAoYXVkaW9FbGVtZW50LnZvbHVtZSA+PSAwLjQ1KSB7XG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuNDU7XG4gICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICB0aW1lV2FycC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHJldHVybjtcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lICs9IDAuMDU7XG4gICAgaW5jcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcbiAgfSwgODAwKTtcbn1cblxuZnVuY3Rpb24gZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KSB7XG4gIGlmIChhdWRpb0VsZW1lbnQudm9sdW1lIDw9IDAuMSkge1xuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjA1O1xuICAgIHJldHVybjtcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lIC09IDAuMDU7XG4gICAgZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcbiAgfSwgNDAwKTtcbn1cblxuZXhwb3J0IHsgcGxheVJpZ2h0LCBwbGF5V3JvbmcsIHBsYXlFYXJ0aHF1YWtlLCBkZWNyZWFzZVZvbHVtZSwgaW5jcmVhc2VWb2x1bWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcGxheVJpZ2h0LCBwbGF5V3JvbmcsIHBsYXlFYXJ0aHF1YWtlLCBkZWNyZWFzZVZvbHVtZSB9IGZyb20gXCIuL2F1ZGlvLmpzXCI7XG5cbmxldCBsYXN0UHJlc3NlZEtleSA9ICcnO1xubGV0IGNvcnJlY3RDb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcHRjaGEoKSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbiAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdHlwZVwiLlxuICB2YXIgbW9ua2V5VHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb25rZXlUeXBlRGl2LmNsYXNzTGlzdC5hZGQoJ21vbmtleS10eXBlJyk7XG5cbiAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdGl0bGVcIiBlIGRlZmluZSBvIHRleHRvXG4gIHZhciBtb25rZXlUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb25rZXlUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdGl0bGUnKTtcbiAgdmFyIGNhcHRjaGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNhcHRjaGEudGV4dENvbnRlbnQgPSAnQ0FQVENIQSc7XG4gIHZhciBjYXB0Y2hhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNhcHRjaGFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdwcm92ZSBzdWEgaHVtYW5pZGFkZSc7XG4gIG1vbmtleVRpdGxlRGl2LmFwcGVuZENoaWxkKGNhcHRjaGEpO1xuICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhRGVzY3JpcHRpb24pO1xuXG4gIC8vIENyaWEgYXMgZGl2cyBpbnRlcm5hcyBjb20gYXMgY2xhc3NlcyBcImxldHRlclwiIGUgXCJwcm9ncmVzcy1iYXJcIlxuICB2YXIgbGV0dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdsZXR0ZXInKTtcblxuICB2YXIgcHJvZ3Jlc3NCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvZ3Jlc3NCYXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XG5cbiAgLy8gQWRpY2lvbmEgYXMgZGl2cyBpbnRlcm5hcyDDoCBkaXYgXCJtb25rZXktdHlwZVwiXG4gIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobW9ua2V5VGl0bGVEaXYpO1xuICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKGxldHRlckRpdik7XG4gIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJEaXYpO1xuXG4gIC8vIEFkaWNpb25hIGEgZGl2IFwibW9ua2V5LXR5cGVcIiBhbyBjb250YWluZXIgZXhpc3RlbnRlXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25rZXlUeXBlRGl2KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKSB7XG4gIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbHBoYWJldC5sZW5ndGgpO1xuICByZXR1cm4gYWxwaGFiZXRbcmFuZG9tSW5kZXhdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMZXR0ZXIoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlS2V5UHJlc3MpO1xuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLmxldHRlcicpO1xuXG4gIGxhc3RQcmVzc2VkS2V5ID0gJyc7XG4gIGNvbnN0IHJhbmRvbUxldHRlciA9IGdlbmVyYXRlUmFuZG9tTGV0dGVyKCk7XG4gIGxldHRlckRpdi50ZXh0Q29udGVudCA9IHJhbmRvbUxldHRlcjtcbiAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5sZXR0ZXInKTtcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLnByb2dyZXNzLWJhcicpO1xuICBjb25zdCBtb25rZXlUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJyk7XG5cbiAgY29uc3QgcHJlc3NlZEtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSBsZXR0ZXJEaXYudGV4dENvbnRlbnQ7XG5cbiAgaWYgKFxuICAgIChwcmVzc2VkS2V5LnRvVXBwZXJDYXNlKCkgPT09IGN1cnJlbnRMZXR0ZXIgfHxcbiAgICAgIHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKSA9PT0gY3VycmVudExldHRlcikgJiZcbiAgICBwcmVzc2VkS2V5ICE9PSBsYXN0UHJlc3NlZEtleVxuICApIHtcbiAgICBsYXN0UHJlc3NlZEtleSA9IHByZXNzZWRLZXk7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBwbGF5UmlnaHQoKTtcbiAgICBjb3JyZWN0Q291bnQrKztcbiAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XG4gICAgZnV6enkuc3R5bGUub3BhY2l0eSArPSAwLjA1O1xuXG4gICAgLy8gQXR1YWxpemEgYSBsYXJndXJhIGRhIGJhcnJhIGRlIHByb2dyZXNzb1xuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gY29ycmVjdENvdW50ICogMTAgKyAnJSc7XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAyIHx8IGNvcnJlY3RDb3VudCA9PT0gNikge1xuICAgICAgcGxheUVhcnRocXVha2UoMC44LCAnbGl0dGxlLXNoYWtlJywgNzAwKTtcbiAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJykpO1xuICAgIH1cblxuICAgIGlmIChjb3JyZWN0Q291bnQgPT09IDgpIHtcbiAgICAgIHBsYXlFYXJ0aHF1YWtlKDAuOCwgJ21lZGl1bS1zaGFrZScsIDcwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGVjcmVhc2VWb2x1bWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VhcnRocXVha2UnKSk7XG4gICAgICB9LCA3MDApO1xuICAgIH1cblxuICAgIGlmIChjb3JyZWN0Q291bnQgPT09IDEwKSB7XG4gICAgICBwbGF5RWFydGhxdWFrZSgxLCAnYmlnLXNoYWtlJyk7XG4gICAgICBjb25zdCBleWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllJyk7XG4gICAgICBleWUuc3R5bGUub3BhY2l0eSA9IDAuMjU7XG4gICAgICBtb25rZXlUeXBlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUgcCcpO1xuICAgICAgICBjb25zdCBkaWFsb2d1ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSAnT2JyaWdhZG8hJztcbiAgICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi4vYXRvMS12MS5odG1sJztcbiAgICAgICAgfSwgNzAwMCk7XG4gICAgICB9LCA0MDAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBleWUuc3R5bGUuaGVpZ2h0ID0gJzIwdncnO1xuICAgICAgfSwgOTc1MCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1cGRhdGVMZXR0ZXIoKTtcbiAgICB9LCAyNTUpO1xuICB9IGVsc2UgaWYgKG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2luY29ycmVjdCcpO1xuICAgIHBsYXlXcm9uZygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlQ2FwdGNoYSxcbiAgdXBkYXRlTGV0dGVyXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9