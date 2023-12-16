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
/* harmony export */   playHappy: () => (/* binding */ playHappy),
/* harmony export */   playRight: () => (/* binding */ playRight),
/* harmony export */   playWrong: () => (/* binding */ playWrong),
/* harmony export */   stopHappy: () => (/* binding */ stopHappy)
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

function playEarthquake(volume, type) {
  const container = document.querySelector('.container');
  var audio = document.getElementById('earthquake');
  audio.volume = volume;
  audio.play();
  container.classList.add(type);

  if (type !== 'big-shake') {
    setTimeout(() => {
      container.classList.remove(type);
    }, 700);
  }
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
    audioElement.volume -= 0.07;
    decreaseVolume(audioElement);
  }, 300);
}

function playHappy() {
  var audio = document.getElementById('happy');
  audio.volume = 1;
  audio.play();
}

function stopHappy() {
  var audio = document.getElementById('happy');
  audio.pause();
}





/***/ }),

/***/ "./src/scripts/timeMachine.js":
/*!************************************!*\
  !*** ./src/scripts/timeMachine.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeTravelJoy: () => (/* binding */ timeTravelJoy)
/* harmony export */ });
function timeTravelJoy(textContent) {
  const blur = document.querySelector('.blur');
  blur.style.display = 'block';
  setTimeout(() => {
    blur.style.opacity = 1;
    setTimeout(() => {
      const currentYear = document.querySelector('.tw-year');
      const currentYearText = currentYear.textContent;
      if (currentYearText !== textContent) {
        fetch(`./joyJournal${textContent}.html`)
          .then((response) => response.text())
          .then((data) => {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = data;

            const content =
              tempElement.querySelector(`.content-${textContent}`).innerHTML;
            const oldContent = document.querySelector('.content');
            const dinos = document.querySelectorAll('.dino');

            dinos.forEach((dino) => {
              dino.style.display = 'none';
            });

            if (textContent !== '2014') {
              currentYear.style.fontFamily = 'compactz';
              oldContent.style.background = 'transparent';
              oldContent.style.color = 'white';
              oldContent.style.width = '75vw';
              oldContent.innerHTML = content;
            } else {
              currentYear.style.fontFamily = 'oldMoodle';
              oldContent.style.backgroundColor = 'gray';
              oldContent.style.color = 'black';
              oldContent.style.width = '70vw';
              oldContent.innerHTML = content;
            }

            currentYear.textContent = textContent;
          });
      }
      blur.style.opacity = 0;
      setTimeout(() => {
        blur.style.display = 'none';
      }, 1500);
    }, 1500);
  }, 300);
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
/*!**********************************!*\
  !*** ./src/scripts/captchaV2.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCaptcha: () => (/* binding */ createCaptcha),
/* harmony export */   updateLetter: () => (/* binding */ updateLetter)
/* harmony export */ });
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");



let lastPressedKey = '';
let correctCount = 0;
let yearToTravel = '';

function createCaptcha(divYear) {
  yearToTravel = divYear;
  var yearButton = document.querySelector('.year');
  yearButton.disabled = true;
  if (!document.querySelector('.monkey-type')) {
    var content = document.querySelector('.content');

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
    letterDiv.classList.add('letter-div');

    var letter = document.createElement('div');
    letter.classList.add('letter');
    var numberDiv = document.createElement('div');
    numberDiv.classList.add('number');

    var progressBarDiv = document.createElement('div');
    progressBarDiv.classList.add('progress-bar');

    // Adiciona as divs internas à div "monkey-type"
    monkeyTypeDiv.appendChild(monkeyTitleDiv);
    monkeyTypeDiv.appendChild(letterDiv);
    monkeyTypeDiv.appendChild(progressBarDiv);
    letterDiv.appendChild(letter);
    letterDiv.appendChild(numberDiv);

    // Adiciona a div "monkey-type" ao content existente
    content.appendChild(monkeyTypeDiv);
  }
  updateLetter();
}

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function updateLetter() {
  disableScroll();
  document.addEventListener('keypress', handleKeyPress);
  const letterDiv = document.querySelector('.monkey-type .letter-div');

  lastPressedKey = '';
  const randomLetter = generateRandomLetter();
  letterDiv.textContent = randomLetter;
  letterDiv.classList.remove('correct');
}

function handleKeyPress(event) {
  const letterDiv = document.querySelector('.monkey-type .letter-div');
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

    // Atualiza a largura da barra de progresso
    progressBar.style.width = correctCount * 8 + '%';

    if (correctCount === 12) {
      monkeyType.style.display = 'none';
      (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_1__.timeTravelJoy)(yearToTravel);
      var yearButton = document.querySelector('.year');
      yearButton.disabled = false;
      setTimeout(() => {
        enableScroll();
      }, 2000);
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

function disableScroll() {
  window.addEventListener('scroll', scrollToTop);
}

// Função para habilitar o scroll
function enableScroll() {
  window.removeEventListener('scroll', scrollToTop);
}

function scrollToTop() {
  window.scrollTo(0, 0);
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYVYyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0c7Ozs7Ozs7Ozs7Ozs7OztBQzlEdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUN5Qjs7Ozs7OztVQ2pEekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ0Q7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9hdWRpby5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL3RpbWVNYWNoaW5lLmpzIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9jYXB0Y2hhVjIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcGxheVdyb25nKCkge1xyXG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWNsYUVycmFkYScpO1xyXG4gIGF1ZGlvLnZvbHVtZSA9IDAuNztcclxuICBhdWRpby5wbGF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlSaWdodCgpIHtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjbGFDb3JyZXRhJyk7XHJcbiAgYXVkaW8udm9sdW1lID0gMC4yO1xyXG4gIGF1ZGlvLnBsYXkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUVhcnRocXVha2Uodm9sdW1lLCB0eXBlKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJyk7XHJcbiAgYXVkaW8udm9sdW1lID0gdm9sdW1lO1xyXG4gIGF1ZGlvLnBsYXkoKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0eXBlKTtcclxuXHJcbiAgaWYgKHR5cGUgIT09ICdiaWctc2hha2UnKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodHlwZSk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5jcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KSB7XHJcbiAgaWYgKGF1ZGlvRWxlbWVudC52b2x1bWUgPj0gMC40NSkge1xyXG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuNDU7XHJcbiAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xyXG4gICAgdGltZVdhcnAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lICs9IDAuMDU7XHJcbiAgICBpbmNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpO1xyXG4gIH0sIDgwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xyXG4gIGlmIChhdWRpb0VsZW1lbnQudm9sdW1lIDw9IDAuMSkge1xyXG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuMDU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSAtPSAwLjA3O1xyXG4gICAgZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcclxuICB9LCAzMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5SGFwcHkoKSB7XHJcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhcHB5Jyk7XHJcbiAgYXVkaW8udm9sdW1lID0gMTtcclxuICBhdWRpby5wbGF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BIYXBweSgpIHtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFwcHknKTtcclxuICBhdWRpby5wYXVzZSgpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgcGxheVJpZ2h0LCBwbGF5V3JvbmcsIHBsYXlFYXJ0aHF1YWtlLCBkZWNyZWFzZVZvbHVtZSwgaW5jcmVhc2VWb2x1bWUsIHBsYXlIYXBweSwgc3RvcEhhcHB5IH07XHJcbiIsImZ1bmN0aW9uIHRpbWVUcmF2ZWxKb3kodGV4dENvbnRlbnQpIHtcclxuICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXInKTtcclxuICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xyXG4gICAgICBpZiAoY3VycmVudFllYXJUZXh0ICE9PSB0ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGZldGNoKGAuL2pveUpvdXJuYWwke3RleHRDb250ZW50fS5odG1sYClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPVxyXG4gICAgICAgICAgICAgIHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb250ZW50LSR7dGV4dENvbnRlbnR9YCkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBjb25zdCBvbGRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgICAgICAgICAgY29uc3QgZGlub3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlubycpO1xyXG5cclxuICAgICAgICAgICAgZGlub3MuZm9yRWFjaCgoZGlubykgPT4ge1xyXG4gICAgICAgICAgICAgIGRpbm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgIT09ICcyMDE0Jykge1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRZZWFyLnN0eWxlLmZvbnRGYW1pbHkgPSAnY29tcGFjdHonO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS53aWR0aCA9ICc3NXZ3JztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY3VycmVudFllYXIuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUud2lkdGggPSAnNzB2dyc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIDMwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHRpbWVUcmF2ZWxKb3kgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwbGF5UmlnaHQsIHBsYXlXcm9uZyB9IGZyb20gJy4vYXVkaW8uanMnO1xyXG5pbXBvcnQgeyB0aW1lVHJhdmVsSm95IH0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XHJcblxyXG5sZXQgbGFzdFByZXNzZWRLZXkgPSAnJztcclxubGV0IGNvcnJlY3RDb3VudCA9IDA7XHJcbmxldCB5ZWFyVG9UcmF2ZWwgPSAnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcHRjaGEoZGl2WWVhcikge1xyXG4gIHllYXJUb1RyYXZlbCA9IGRpdlllYXI7XHJcbiAgdmFyIHllYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xyXG4gIHllYXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJykpIHtcclxuICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuXHJcbiAgICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10eXBlXCIuXHJcbiAgICB2YXIgbW9ua2V5VHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9ua2V5VHlwZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdHlwZScpO1xyXG5cclxuICAgIC8vIENyaWEgYSBkaXYgY29tIGEgY2xhc3NlIFwibW9ua2V5LXRpdGxlXCIgZSBkZWZpbmUgbyB0ZXh0b1xyXG4gICAgdmFyIG1vbmtleVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb25rZXlUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdGl0bGUnKTtcclxuICAgIHZhciBjYXB0Y2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY2FwdGNoYS50ZXh0Q29udGVudCA9ICdDQVBUQ0hBJztcclxuICAgIHZhciBjYXB0Y2hhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjYXB0Y2hhRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAncHJvdmUgc3VhIGh1bWFuaWRhZGUnO1xyXG4gICAgbW9ua2V5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2FwdGNoYSk7XHJcbiAgICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhRGVzY3JpcHRpb24pO1xyXG5cclxuICAgIC8vIENyaWEgYXMgZGl2cyBpbnRlcm5hcyBjb20gYXMgY2xhc3NlcyBcImxldHRlclwiIGUgXCJwcm9ncmVzcy1iYXJcIlxyXG4gICAgdmFyIGxldHRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2xldHRlci1kaXYnKTtcclxuXHJcbiAgICB2YXIgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgnbGV0dGVyJyk7XHJcbiAgICB2YXIgbnVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBudW1iZXJEaXYuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XHJcblxyXG4gICAgdmFyIHByb2dyZXNzQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9ncmVzc0JhckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcclxuXHJcbiAgICAvLyBBZGljaW9uYSBhcyBkaXZzIGludGVybmFzIMOgIGRpdiBcIm1vbmtleS10eXBlXCJcclxuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobW9ua2V5VGl0bGVEaXYpO1xyXG4gICAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChsZXR0ZXJEaXYpO1xyXG4gICAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChwcm9ncmVzc0JhckRpdik7XHJcbiAgICBsZXR0ZXJEaXYuYXBwZW5kQ2hpbGQobGV0dGVyKTtcclxuICAgIGxldHRlckRpdi5hcHBlbmRDaGlsZChudW1iZXJEaXYpO1xyXG5cclxuICAgIC8vIEFkaWNpb25hIGEgZGl2IFwibW9ua2V5LXR5cGVcIiBhbyBjb250ZW50IGV4aXN0ZW50ZVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb25rZXlUeXBlRGl2KTtcclxuICB9XHJcbiAgdXBkYXRlTGV0dGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTGV0dGVyKCkge1xyXG4gIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCk7XHJcbiAgcmV0dXJuIGFscGhhYmV0W3JhbmRvbUluZGV4XTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGV0dGVyKCkge1xyXG4gIGRpc2FibGVTY3JvbGwoKTtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZUtleVByZXNzKTtcclxuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLmxldHRlci1kaXYnKTtcclxuXHJcbiAgbGFzdFByZXNzZWRLZXkgPSAnJztcclxuICBjb25zdCByYW5kb21MZXR0ZXIgPSBnZW5lcmF0ZVJhbmRvbUxldHRlcigpO1xyXG4gIGxldHRlckRpdi50ZXh0Q29udGVudCA9IHJhbmRvbUxldHRlcjtcclxuICBsZXR0ZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xyXG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyLWRpdicpO1xyXG4gIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5wcm9ncmVzcy1iYXInKTtcclxuICBjb25zdCBtb25rZXlUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJyk7XHJcblxyXG4gIGNvbnN0IHByZXNzZWRLZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xyXG4gIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSBsZXR0ZXJEaXYudGV4dENvbnRlbnQ7XHJcblxyXG4gIGlmIChcclxuICAgIChwcmVzc2VkS2V5LnRvVXBwZXJDYXNlKCkgPT09IGN1cnJlbnRMZXR0ZXIgfHxcclxuICAgICAgcHJlc3NlZEtleS50b0xvd2VyQ2FzZSgpID09PSBjdXJyZW50TGV0dGVyKSAmJlxyXG4gICAgcHJlc3NlZEtleSAhPT0gbGFzdFByZXNzZWRLZXlcclxuICApIHtcclxuICAgIGxhc3RQcmVzc2VkS2V5ID0gcHJlc3NlZEtleTtcclxuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XHJcbiAgICBwbGF5UmlnaHQoKTtcclxuICAgIGNvcnJlY3RDb3VudCsrO1xyXG5cclxuICAgIC8vIEF0dWFsaXphIGEgbGFyZ3VyYSBkYSBiYXJyYSBkZSBwcm9ncmVzc29cclxuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gY29ycmVjdENvdW50ICogOCArICclJztcclxuXHJcbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAxMikge1xyXG4gICAgICBtb25rZXlUeXBlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHRpbWVUcmF2ZWxKb3koeWVhclRvVHJhdmVsKTtcclxuICAgICAgdmFyIHllYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xyXG4gICAgICB5ZWFyQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVuYWJsZVNjcm9sbCgpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB1cGRhdGVMZXR0ZXIoKTtcclxuICAgIH0sIDI1NSk7XHJcbiAgfSBlbHNlIGlmIChtb25rZXlUeXBlLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xyXG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2luY29ycmVjdCcpO1xyXG4gICAgcGxheVdyb25nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvVG9wKTtcclxufVxyXG5cclxuLy8gRnVuw6fDo28gcGFyYSBoYWJpbGl0YXIgbyBzY3JvbGxcclxuZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb1RvcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FwdGNoYSwgdXBkYXRlTGV0dGVyIH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==