/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!****************************!*\
  !*** ./src/titleScreen.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playGame: () => (/* binding */ playGame)
/* harmony export */ });
function playGame() {
  const playButton = document.querySelector('.play-button');
  const background = document.querySelector('.background-wrap');
  const cactusList = document.querySelectorAll('.cactus');
  const title = document.querySelector('.title');
  const dino = document.querySelector('.dino');
  const floor = document.querySelector('.floor');

  playButton.addEventListener('click', function () {
    // Define opacity to 0
    const targetOpacity = 0.008;

    var audio = document.getElementById('powerOff');
    audio.volume = 0.6;
    audio.play();

    playButton.disabled = true;

    setTimeout(() => {
      playButton.style.opacity = targetOpacity;
      background.style.opacity = targetOpacity;
      title.style.opacity = targetOpacity;
      floor.style.opacity = targetOpacity;
    }, 100);

    cactusList.forEach((cactus) => {
      cactus.style.opacity = targetOpacity;
    });

    setTimeout(() => {
      var audio = document.getElementById('hide');
      audio.play();
      setTimeout(() => {
        dino.style.opacity = targetOpacity;
        setTimeout(() => {
          window.location.href = '../src/prologo.html';
        }, 1000);
      }, 100);
    }, 2750);
  });
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVTY3JlZW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGVkLy4vc3JjL3RpdGxlU2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gcGxheUdhbWUoKSB7XG4gIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idXR0b24nKTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLXdyYXAnKTtcbiAgY29uc3QgY2FjdHVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWN0dXMnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbiAgY29uc3QgZGlubyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaW5vJyk7XG4gIGNvbnN0IGZsb29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsb29yJyk7XG5cbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEZWZpbmUgb3BhY2l0eSB0byAwXG4gICAgY29uc3QgdGFyZ2V0T3BhY2l0eSA9IDAuMDA4O1xuXG4gICAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvd2VyT2ZmJyk7XG4gICAgYXVkaW8udm9sdW1lID0gMC42O1xuICAgIGF1ZGlvLnBsYXkoKTtcblxuICAgIHBsYXlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwbGF5QnV0dG9uLnN0eWxlLm9wYWNpdHkgPSB0YXJnZXRPcGFjaXR5O1xuICAgICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gdGFyZ2V0T3BhY2l0eTtcbiAgICAgIHRpdGxlLnN0eWxlLm9wYWNpdHkgPSB0YXJnZXRPcGFjaXR5O1xuICAgICAgZmxvb3Iuc3R5bGUub3BhY2l0eSA9IHRhcmdldE9wYWNpdHk7XG4gICAgfSwgMTAwKTtcblxuICAgIGNhY3R1c0xpc3QuZm9yRWFjaCgoY2FjdHVzKSA9PiB7XG4gICAgICBjYWN0dXMuc3R5bGUub3BhY2l0eSA9IHRhcmdldE9wYWNpdHk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaWRlJyk7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGluby5zdHlsZS5vcGFjaXR5ID0gdGFyZ2V0T3BhY2l0eTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi4vc3JjL3Byb2xvZ28uaHRtbCc7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSwgMTAwKTtcbiAgICB9LCAyNzUwKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHBsYXlHYW1lIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=