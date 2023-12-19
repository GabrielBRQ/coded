/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/ato1-v1.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/ato1-v1.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Roboto/Roboto-Regular.ttf */ "./src/font/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Old_Standard_TT/OldStandardTT-Bold.ttf */ "./src/font/Old_Standard_TT/OldStandardTT-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/compact/Compact-Regular.ttf */ "./src/font/compact/Compact-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Nova_Round/NovaRound-Regular.ttf */ "./src/font/Nova_Round/NovaRound-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: roboto;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: oldMoodle;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
  font-family: compactz;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
  font-family: novaRound;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  overflow-x: hidden;
}

header {
  height: 16vh;
}

.chapter {
  font-family: oldMoodle;
  height: 100vh;
  width: 30vw;
  color: white;
  font-size: 12vh;
  display: grid;
  align-content: center;
  justify-items: center;
  transition: opacity 2.1s ease-in-out;
}

.chapter span {
  font-size: 5vh;
  opacity: 0.7;
}

.chapter button {
  font-family: roboto;
  background: transparent;
  border: solid .5vh gray;
  color: gray;
  cursor: pointer;
  font-size: 3vh;
  width: 100%;
}

.moodle {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.moodle-title {
  display: flex;
  align-items: center;
  height: 17vh;
  margin-bottom: 5vh;
  font-family: oldMoodle;
}

.moodle-title p {
  font-size: 16vh;
}

input {
  width: 40vw;
  height: 4vh;
}

.search-buttons {
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  margin-top: 1vh;
}

.search-buttons button {
  font-size: 2.1vh;
  background: #eee;
  border: solid .4vh;
  border-color: #ccc #999 #999 #ccc;
  height: 5vh;
  cursor: pointer;
  padding: 0 .8vh 0 .8vh;
}

.privacy {
  color: gray;
  font-family: roboto;
  font-size: 2vh;
  margin-top: 2vh;
}

.timeWarp {
  font-family: oldMoodle;
  width: calc(90vw - 10px);
  height: 16vh;
  background-color: rgb(43, 42, 42);
  color: white;
  border: solid 1vh rgb(85, 85, 85);
  border-top: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top:0;
  left: 0;
}

.tw-center {
  width: 55vw;
}

.tw-year,
.tw-title {
  font-size: 4vh;
}

.url {
  font-family: roboto;
  width: 100%;
  height: 3vh;
  background-color: aliceblue;
  border: solid .3vh black;
  opacity: 0.8;
  color: black;
  font-size: 2.5vh;
}

.timeline {
  width: 100%;
  height: 7vh;
  border: solid .7vh rgb(43, 42, 42);
  display: flex;
}

.year {
  font-family: roboto;
  height: 100%;
  width: 3.5%;
  border: solid .5vh rgb(85, 85, 85);
  font-size: 1.5vh;
  padding: .7vh;
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
}

.year:hover {
  background-color: rgb(70, 68, 68);
}

.container {
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 110vh;
  width: 90vw;
  display: none;
  opacity: 0;
  border: none;

  transition: opacity 4s ease-in-out;
}

.news-title {
  font-size: 4vh;
  margin-bottom: 7vh;
}

.news-title2016 {
  font-family: novaRound;
  font-size: 4vh;
  margin-bottom: 7vh;
  font-weight: bold;
  color: #156aec;
}

.news-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7vh;
}

.news-div {
  display: flex;
  align-items: center;
  gap: 5vh;
}

.img-news {
  height: 12vh;
  width: 16vh;
  object-fit: cover;
  border: solid .5vh gray;
}

.news2014 {
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 2vh;
  cursor: pointer;
}

.news2014 p {
  font-size: 2.4vh;
  width: 40vh;
}

.news2016 {
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 2vh;
  cursor: pointer;
  color: white;
}

.news2016 p {
  font-size: 2.4vh;
  width: 45vh;
}

.dialogue {
  position: fixed;
  bottom: 0;
  display: none;
  width: 100vw;
  height: 10vh;
  background-color: rgb(174, 183, 201);
  margin-bottom: 7vh;
  align-items: center;
  justify-content: center;
  font-size: 2.5vh;
}

.blur {
  position: absolute;
  width: 100vw;
  height: 190vh;
  opacity: 1;
  display: none;
  background-color: black;

  transition: opacity 1.5s ease-in-out;
}

.monkey-type {
  position: fixed;
  display: grid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  grid-template-rows: 1fr 3fr 2fr;
  height: 40vh;
  width: 50vw;
  background-color: rgb(65, 62, 62);
  border-radius: 5px;
  color: black;
  align-items: center;
  justify-items: center;
}

.monkey-title {
  color: rgb(36, 36, 36);
  font-family: roboto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.content .monkey-title p {
  padding: 0;
}

.monkey-title p:first-child { 
  font-size: 4vh;
}

.monkey-title p:last-child {
  font-size: 2.8vh;
}

.letter-div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8vh;
}

.correct {
  color: green;
}

.incorrect {
  color: brown;
}

.progress-bar {
  height: 20px;
  background-color: rgb(18, 197, 18);
  width: 0;
}`, "",{"version":3,"sources":["webpack://./src/css/ato1-v1.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: roboto;\r\n  src: url(../font/Roboto/Roboto-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: oldMoodle;\r\n  src: url(../font/Old_Standard_TT/OldStandardTT-Bold.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: compactz;\r\n  src: url(../font/compact/Compact-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: novaRound;\r\n  src: url(../font/Nova_Round/NovaRound-Regular.ttf);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  height: 16vh;\r\n}\r\n\r\n.chapter {\r\n  font-family: oldMoodle;\r\n  height: 100vh;\r\n  width: 30vw;\r\n  color: white;\r\n  font-size: 12vh;\r\n  display: grid;\r\n  align-content: center;\r\n  justify-items: center;\r\n  transition: opacity 2.1s ease-in-out;\r\n}\r\n\r\n.chapter span {\r\n  font-size: 5vh;\r\n  opacity: 0.7;\r\n}\r\n\r\n.chapter button {\r\n  font-family: roboto;\r\n  background: transparent;\r\n  border: solid .5vh gray;\r\n  color: gray;\r\n  cursor: pointer;\r\n  font-size: 3vh;\r\n  width: 100%;\r\n}\r\n\r\n.moodle {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.moodle-title {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 17vh;\r\n  margin-bottom: 5vh;\r\n  font-family: oldMoodle;\r\n}\r\n\r\n.moodle-title p {\r\n  font-size: 16vh;\r\n}\r\n\r\ninput {\r\n  width: 40vw;\r\n  height: 4vh;\r\n}\r\n\r\n.search-buttons {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: #000;\r\n  margin-top: 1vh;\r\n}\r\n\r\n.search-buttons button {\r\n  font-size: 2.1vh;\r\n  background: #eee;\r\n  border: solid .4vh;\r\n  border-color: #ccc #999 #999 #ccc;\r\n  height: 5vh;\r\n  cursor: pointer;\r\n  padding: 0 .8vh 0 .8vh;\r\n}\r\n\r\n.privacy {\r\n  color: gray;\r\n  font-family: roboto;\r\n  font-size: 2vh;\r\n  margin-top: 2vh;\r\n}\r\n\r\n.timeWarp {\r\n  font-family: oldMoodle;\r\n  width: calc(90vw - 10px);\r\n  height: 16vh;\r\n  background-color: rgb(43, 42, 42);\r\n  color: white;\r\n  border: solid 1vh rgb(85, 85, 85);\r\n  border-top: none;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  position: absolute;\r\n  top:0;\r\n  left: 0;\r\n}\r\n\r\n.tw-center {\r\n  width: 55vw;\r\n}\r\n\r\n.tw-year,\r\n.tw-title {\r\n  font-size: 4vh;\r\n}\r\n\r\n.url {\r\n  font-family: roboto;\r\n  width: 100%;\r\n  height: 3vh;\r\n  background-color: aliceblue;\r\n  border: solid .3vh black;\r\n  opacity: 0.8;\r\n  color: black;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.timeline {\r\n  width: 100%;\r\n  height: 7vh;\r\n  border: solid .7vh rgb(43, 42, 42);\r\n  display: flex;\r\n}\r\n\r\n.year {\r\n  font-family: roboto;\r\n  height: 100%;\r\n  width: 3.5%;\r\n  border: solid .5vh rgb(85, 85, 85);\r\n  font-size: 1.5vh;\r\n  padding: .7vh;\r\n  cursor: pointer;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.year:hover {\r\n  background-color: rgb(70, 68, 68);\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 110vh;\r\n  width: 90vw;\r\n  display: none;\r\n  opacity: 0;\r\n  border: none;\r\n\r\n  transition: opacity 4s ease-in-out;\r\n}\r\n\r\n.news-title {\r\n  font-size: 4vh;\r\n  margin-bottom: 7vh;\r\n}\r\n\r\n.news-title2016 {\r\n  font-family: novaRound;\r\n  font-size: 4vh;\r\n  margin-bottom: 7vh;\r\n  font-weight: bold;\r\n  color: #156aec;\r\n}\r\n\r\n.news-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-bottom: 7vh;\r\n}\r\n\r\n.news-div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 5vh;\r\n}\r\n\r\n.img-news {\r\n  height: 12vh;\r\n  width: 16vh;\r\n  object-fit: cover;\r\n  border: solid .5vh gray;\r\n}\r\n\r\n.news2014 {\r\n  display: flex;\r\n  justify-items: center;\r\n  align-items: center;\r\n  gap: 2vh;\r\n  cursor: pointer;\r\n}\r\n\r\n.news2014 p {\r\n  font-size: 2.4vh;\r\n  width: 40vh;\r\n}\r\n\r\n.news2016 {\r\n  display: flex;\r\n  justify-items: center;\r\n  align-items: center;\r\n  gap: 2vh;\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n\r\n.news2016 p {\r\n  font-size: 2.4vh;\r\n  width: 45vh;\r\n}\r\n\r\n.dialogue {\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: none;\r\n  width: 100vw;\r\n  height: 10vh;\r\n  background-color: rgb(174, 183, 201);\r\n  margin-bottom: 7vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.blur {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 190vh;\r\n  opacity: 1;\r\n  display: none;\r\n  background-color: black;\r\n\r\n  transition: opacity 1.5s ease-in-out;\r\n}\r\n\r\n.monkey-type {\r\n  position: fixed;\r\n  display: grid;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  grid-template-rows: 1fr 3fr 2fr;\r\n  height: 40vh;\r\n  width: 50vw;\r\n  background-color: rgb(65, 62, 62);\r\n  border-radius: 5px;\r\n  color: black;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.monkey-title {\r\n  color: rgb(36, 36, 36);\r\n  font-family: roboto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.content .monkey-title p {\r\n  padding: 0;\r\n}\r\n\r\n.monkey-title p:first-child { \r\n  font-size: 4vh;\r\n}\r\n\r\n.monkey-title p:last-child {\r\n  font-size: 2.8vh;\r\n}\r\n\r\n.letter-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 8vh;\r\n}\r\n\r\n.correct {\r\n  color: green;\r\n}\r\n\r\n.incorrect {\r\n  color: brown;\r\n}\r\n\r\n.progress-bar {\r\n  height: 20px;\r\n  background-color: rgb(18, 197, 18);\r\n  width: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/joyJournal.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/joyJournal.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Roboto/Roboto-Regular.ttf */ "./src/font/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Bebas_Neue/BebasNeue-Regular.ttf */ "./src/font/Bebas_Neue/BebasNeue-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Old_Standard_TT/OldStandardTT-Bold.ttf */ "./src/font/Old_Standard_TT/OldStandardTT-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../font/compact/Compact-Regular.ttf */ "./src/font/compact/Compact-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: roboto;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: bebas;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
  font-family: oldMoodle;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

@font-face {
  font-family: compactz;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

* {
  padding: 0;
  margin: 0;
}

body {
  font-family: roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: auto;
  width: 100vw;
  overflow-x: hidden;
}

header {
  font-family: bebas;
  background-color: #570101;
  width: 100vw;
  height: 18vh;
  color: rgb(175, 175, 175);
  font-weight: bolder;
  display: flex;
  align-items: center;
}

.joy-title {
  border-right: solid 2px gray;
  width: 10vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 5vh;
}

.content {
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 50px 0 50px 0;
  background-color: gray;
}

.content-title {
  background-color: rgb(161, 160, 160);
  font-family: bebas;
  width: calc(100% - 4vh);
  font-size: 7vh;
  padding: 2vh;
  text-align: center;
}

.content-title-2016 {
  font-family: bebas;
  font-size: 6vh;
  padding: 2vh;
  text-align: center;
}

.img-2016 {
  height: 50vh;
  width: auto;
  opacity: 0.7;
  filter: grayscale(65%);
}

.content p {
  font-size: 2.5vh;
  padding: 0 2vh 2vh 2vh;
}

.timeWarp {
  font-family: oldMoodle;
  width: calc(90vw - 10px);
  height: 16vh;
  background-color: rgb(43, 42, 42);
  color: white;
  border: solid 1vh rgb(85, 85, 85);
  border-top: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.tw-center {
  width: 55vw;
}

.tw-year,
.tw-title {
  font-size: 4vh;
}

.url {
  font-family: roboto;
  width: 100%;
  height: 3vh;
  background-color: aliceblue;
  border: solid .3vh black;
  opacity: 0.8;
  color: black;
  font-size: 2.5vh;
}

.timeline {
  width: 100%;
  height: 7vh;
  border: solid .7vh rgb(43, 42, 42);
  display: flex;
}

.year {
  font-family: roboto;
  height: 100%;
  width: 3.5%;
  border: solid .5vh rgb(85, 85, 85);
  font-size: 1.5vh;
  padding: .7vh;
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
}

.year:hover {
  background-color: rgb(70, 68, 68);
}

.dino {
  position: absolute;
  height: 50vh;
}

.left {
  left: -25vh;
  transform: rotate(45deg);
}

.right {
  right: -27vh;
  transform: rotate(320deg) scaleX(-1);
}

.top {
  top: 20vh;
}

.bottom {
  top: 80vh;
}

.weird {
  top: 135vh;
  right: -27vh;
  transform: rotate(320deg) scaleX(-1);
  animation: moveImage 1.2s forwards;
  animation-play-state: paused;
}

p i {
  font-size: 2.7vh;
  cursor: pointer;
  text-decoration: underline;
}

.text-img {
  display: flex;
  gap: 3vh;
  align-items: center;
}

.text-img img {
  height: 20vh;
  border: solid .8vh #570101;
  padding: 5px;
}

.dialogue {
  position: fixed;
  bottom: 0;
  display: none;
  width: 100vw;
  height: 10vh;
  background-color: rgb(111, 118, 133);
  margin-bottom: 7vh;
  align-items: center;
  justify-content: center;
  font-size: 2.5vh;
}

.blur {
  position: absolute;
  width: 100vw;
  height: 190vh;
  opacity: 1;
  display: none;
  background-color: black;

  transition: opacity 1.5s ease-in-out;
}

.monkey-type {
  position: fixed;
  display: grid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  grid-template-rows: 1fr 3fr 2fr;
  height: 40vh;
  width: 50vw;
  background-color: rgb(65, 62, 62);
  border-radius: 5px;
  color: black;
  align-items: center;
  justify-items: center;
}

.monkey-title {
  color: rgb(36, 36, 36);
  font-family: roboto;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.content .monkey-title p {
  padding: 0;
}

.monkey-title p:first-child { 
  font-size: 4vh;
}

.monkey-title p:last-child {
  font-size: 2.8vh;
}

.letter-div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8vh;
}

.correct {
  color: green;
}

.incorrect {
  color: brown;
}

.progress-bar {
  height: 20px;
  background-color: rgb(18, 197, 18);
  width: 0;
}

.popup {
  font-family: roboto;
  height: 70vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(83, 82, 82);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  z-index: 2;
}

.popup-img {
  height: 65vh;
}

.popup button {
  height: 5vh;
  width: 100%;
}

@keyframes moveImage {
  from {
    right: -25vh; /* Posição inicial */
  }
  to {
    right: -55vh; /* Posição final */
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/joyJournal.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: roboto;\r\n  src: url(../font/Roboto/Roboto-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: bebas;\r\n  src: url(../font/Bebas_Neue/BebasNeue-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: oldMoodle;\r\n  src: url(../font/Old_Standard_TT/OldStandardTT-Bold.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: compactz;\r\n  src: url(../font/compact/Compact-Regular.ttf);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: roboto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: black;\r\n  height: auto;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  font-family: bebas;\r\n  background-color: #570101;\r\n  width: 100vw;\r\n  height: 18vh;\r\n  color: rgb(175, 175, 175);\r\n  font-weight: bolder;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.joy-title {\r\n  border-right: solid 2px gray;\r\n  width: 10vw;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 5vh;\r\n}\r\n\r\n.content {\r\n  width: 70vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 25px;\r\n  margin: 50px 0 50px 0;\r\n  background-color: gray;\r\n}\r\n\r\n.content-title {\r\n  background-color: rgb(161, 160, 160);\r\n  font-family: bebas;\r\n  width: calc(100% - 4vh);\r\n  font-size: 7vh;\r\n  padding: 2vh;\r\n  text-align: center;\r\n}\r\n\r\n.content-title-2016 {\r\n  font-family: bebas;\r\n  font-size: 6vh;\r\n  padding: 2vh;\r\n  text-align: center;\r\n}\r\n\r\n.img-2016 {\r\n  height: 50vh;\r\n  width: auto;\r\n  opacity: 0.7;\r\n  filter: grayscale(65%);\r\n}\r\n\r\n.content p {\r\n  font-size: 2.5vh;\r\n  padding: 0 2vh 2vh 2vh;\r\n}\r\n\r\n.timeWarp {\r\n  font-family: oldMoodle;\r\n  width: calc(90vw - 10px);\r\n  height: 16vh;\r\n  background-color: rgb(43, 42, 42);\r\n  color: white;\r\n  border: solid 1vh rgb(85, 85, 85);\r\n  border-top: none;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\n.tw-center {\r\n  width: 55vw;\r\n}\r\n\r\n.tw-year,\r\n.tw-title {\r\n  font-size: 4vh;\r\n}\r\n\r\n.url {\r\n  font-family: roboto;\r\n  width: 100%;\r\n  height: 3vh;\r\n  background-color: aliceblue;\r\n  border: solid .3vh black;\r\n  opacity: 0.8;\r\n  color: black;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.timeline {\r\n  width: 100%;\r\n  height: 7vh;\r\n  border: solid .7vh rgb(43, 42, 42);\r\n  display: flex;\r\n}\r\n\r\n.year {\r\n  font-family: roboto;\r\n  height: 100%;\r\n  width: 3.5%;\r\n  border: solid .5vh rgb(85, 85, 85);\r\n  font-size: 1.5vh;\r\n  padding: .7vh;\r\n  cursor: pointer;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.year:hover {\r\n  background-color: rgb(70, 68, 68);\r\n}\r\n\r\n.dino {\r\n  position: absolute;\r\n  height: 50vh;\r\n}\r\n\r\n.left {\r\n  left: -25vh;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.right {\r\n  right: -27vh;\r\n  transform: rotate(320deg) scaleX(-1);\r\n}\r\n\r\n.top {\r\n  top: 20vh;\r\n}\r\n\r\n.bottom {\r\n  top: 80vh;\r\n}\r\n\r\n.weird {\r\n  top: 135vh;\r\n  right: -27vh;\r\n  transform: rotate(320deg) scaleX(-1);\r\n  animation: moveImage 1.2s forwards;\r\n  animation-play-state: paused;\r\n}\r\n\r\np i {\r\n  font-size: 2.7vh;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.text-img {\r\n  display: flex;\r\n  gap: 3vh;\r\n  align-items: center;\r\n}\r\n\r\n.text-img img {\r\n  height: 20vh;\r\n  border: solid .8vh #570101;\r\n  padding: 5px;\r\n}\r\n\r\n.dialogue {\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: none;\r\n  width: 100vw;\r\n  height: 10vh;\r\n  background-color: rgb(111, 118, 133);\r\n  margin-bottom: 7vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.blur {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 190vh;\r\n  opacity: 1;\r\n  display: none;\r\n  background-color: black;\r\n\r\n  transition: opacity 1.5s ease-in-out;\r\n}\r\n\r\n.monkey-type {\r\n  position: fixed;\r\n  display: grid;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  grid-template-rows: 1fr 3fr 2fr;\r\n  height: 40vh;\r\n  width: 50vw;\r\n  background-color: rgb(65, 62, 62);\r\n  border-radius: 5px;\r\n  color: black;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.monkey-title {\r\n  color: rgb(36, 36, 36);\r\n  font-family: roboto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.content .monkey-title p {\r\n  padding: 0;\r\n}\r\n\r\n.monkey-title p:first-child { \r\n  font-size: 4vh;\r\n}\r\n\r\n.monkey-title p:last-child {\r\n  font-size: 2.8vh;\r\n}\r\n\r\n.letter-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 8vh;\r\n}\r\n\r\n.correct {\r\n  color: green;\r\n}\r\n\r\n.incorrect {\r\n  color: brown;\r\n}\r\n\r\n.progress-bar {\r\n  height: 20px;\r\n  background-color: rgb(18, 197, 18);\r\n  width: 0;\r\n}\r\n\r\n.popup {\r\n  font-family: roboto;\r\n  height: 70vh;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: rgb(83, 82, 82);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  opacity: 0;\r\n  z-index: 2;\r\n}\r\n\r\n.popup-img {\r\n  height: 65vh;\r\n}\r\n\r\n.popup button {\r\n  height: 5vh;\r\n  width: 100%;\r\n}\r\n\r\n@keyframes moveImage {\r\n  from {\r\n    right: -25vh; /* Posição inicial */\r\n  }\r\n  to {\r\n    right: -55vh; /* Posição final */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/ato1-v1.css":
/*!*****************************!*\
  !*** ./src/css/ato1-v1.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ato1_v1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./ato1-v1.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/ato1-v1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ato1_v1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ato1_v1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ato1_v1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ato1_v1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/joyJournal.css":
/*!********************************!*\
  !*** ./src/css/joyJournal.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_joyJournal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./joyJournal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/joyJournal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_joyJournal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_joyJournal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_joyJournal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_joyJournal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/ato1-v1.js":
/*!********************************!*\
  !*** ./src/scripts/ato1-v1.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNews: () => (/* binding */ getNews)
/* harmony export */ });
/* harmony import */ var _css_ato1_v1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/ato1-v1.css */ "./src/css/ato1-v1.css");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");
/* harmony import */ var _captchaV2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captchaV2.js */ "./src/scripts/captchaV2.js");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");





document.addEventListener('DOMContentLoaded', function () {
  (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_3__.timeTravelMoodle)((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__.getYear)());
  const container = document.querySelector('.container');
  if ((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__.checkChapter1)() === false) {
    const startChapter = document.querySelector('.start');

    startChapter.addEventListener('click', function () {
      startChapter.disabled = true;
      history.pushState(null, null, document.URL);
      var chapter = document.querySelector('.chapter');
      chapter.style.opacity = 0;
      (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__.changeChapter1)();
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
  
  setTimeout(() => {
    (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__.createYears)();
  }, 1500);

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

  setTimeout(() => {
    getNews();
    listenYears();
  }, 4000);
  
 
});

function getNews() {
  var twYear = document.querySelector('.tw-year');
  if (twYear.textContent === '2014') {
    var newsDiv = document.querySelector('.news2014');

    newsDiv.addEventListener('click', function () {
      console.log('clicou 2014');
      window.location.href = './joyJournal.html';
    });
  } else {
    var newsDiv = document.querySelector('.news2016');

    newsDiv.addEventListener('click', function () {
      console.log('clicou 2016');
      window.location.href = './byteBuzz.html';
    });
  }
}

function activeContent() {
  const container = document.querySelector('.container');
  container.style.display = 'flex';
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.height = '110vh';
}

function listenYears() {
  var yearDivs = document.querySelectorAll('.year');
  yearDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      const blur = document.querySelector('.blur');
      blur.style.display = 'flex';
      (0,_captchaV2_js__WEBPACK_IMPORTED_MODULE_2__.createCaptcha)(div.textContent);
    });
  });
}



/***/ }),

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

/***/ "./src/scripts/captchaV2.js":
/*!**********************************!*\
  !*** ./src/scripts/captchaV2.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCaptcha: () => (/* binding */ createCaptcha),
/* harmony export */   updateLetter: () => (/* binding */ updateLetter)
/* harmony export */ });
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");
/* harmony import */ var _ato1_v1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ato1-v1.js */ "./src/scripts/ato1-v1.js");





let lastPressedKey = '';
let yearToTravel = '';
let correctCount = 0;
function createCaptcha(divYear) {
  yearToTravel = divYear;
  var yearButton = document.querySelector('.year');
  yearButton.disabled = true;
  disableScroll();
  if (!document.querySelector('.monkey-type')) {
    if (document.title === 'Moodle') {
      var content = document.querySelector('.moodle');
    } else if (document.title === 'darkNetLeaks') {
      var content = document.querySelector('.captcha');
    } else {
      var content = document.querySelector('.content');
    }
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
  correctCount = 0;
  updateLetter();
}

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function updateLetter() {
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

      var yearButton = document.querySelector('.year');
      yearButton.disabled = false;
      if (document.title === 'Moodle') {
        (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_1__.timeTravelMoodle)(yearToTravel);
        setTimeout(() => {
          (0,_ato1_v1_js__WEBPACK_IMPORTED_MODULE_3__.getNews)();
        }, 2000);
      } else if (document.title === 'JOY JOURNAL') {
        (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_1__.timeTravelJoy)(yearToTravel);
      } else if (document.title === 'Byte Buzz'){
        (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_1__.timeTravelBuzz)(yearToTravel);
      } else {
        (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_1__.timeTravelLeak)(yearToTravel);
      }
      (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.changeYear)(yearToTravel);
      enableScroll();
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




/***/ }),

/***/ "./src/scripts/localStorage-control.js":
/*!*********************************************!*\
  !*** ./src/scripts/localStorage-control.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addYear: () => (/* binding */ addYear),
/* harmony export */   changeChapter1: () => (/* binding */ changeChapter1),
/* harmony export */   changeJumpscare: () => (/* binding */ changeJumpscare),
/* harmony export */   changeYear: () => (/* binding */ changeYear),
/* harmony export */   checkChapter1: () => (/* binding */ checkChapter1),
/* harmony export */   checkJumpscare: () => (/* binding */ checkJumpscare),
/* harmony export */   createYears: () => (/* binding */ createYears),
/* harmony export */   getYear: () => (/* binding */ getYear),
/* harmony export */   verifyNewUser: () => (/* binding */ verifyNewUser)
/* harmony export */ });
function saveStatsLocal(jumpscare, chapter1, years, currentYear) {
    const stats = { jumpscare, chapter1, years, currentYear};

    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
    gameStats.push(stats);
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function verifyNewUser() {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
    if (gameStats.length < 1) {
        saveStatsLocal(false, false, [2014], '2014');
    }
}

function changeJumpscare() {
    // Obtém os dados armazenados localmente com a chave 'gameStats'
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

    // Verifica se há pelo menos um conjunto de estatísticas no array
    if (gameStats.length > 0) {
        gameStats[gameStats.length - 1].jumpscare = true;

        localStorage.setItem('gameStats', JSON.stringify(gameStats));
    }
}

function changeChapter1() {
    // Obtém os dados armazenados localmente com a chave 'gameStats'
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

    // Verifica se há pelo menos um conjunto de estatísticas no array
    if (gameStats.length > 0) {
        gameStats[gameStats.length - 1].chapter1 = true;

        localStorage.setItem('gameStats', JSON.stringify(gameStats));
    }
}

function checkJumpscare() {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

    if (gameStats.length > 0) {
        if (gameStats[gameStats.length - 1].jumpscare === true) {
            return true;
        }
    }
    return false;
}

function checkChapter1() {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

    if (gameStats.length > 0) {
        if (gameStats[gameStats.length - 1].chapter1 === true) {
            return true;
        }
    }
    return false;
}

function createYears() {
    const timeLine = document.querySelector('.timeline');
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
    let allYears = gameStats[gameStats.length - 1].years;

    if (timeLine.childElementCount === 0) {
        // Itera sobre cada ano no array allYears
        for (let i = 0; i < allYears.length; i++) {
            // Cria uma div com a classe 'year' e o texto igual ao valor no array
            const yearDiv = document.createElement('div');
            yearDiv.classList.add('year');
            yearDiv.textContent = allYears[i];
    
            // Adiciona a div ao elemento timeLine
            timeLine.appendChild(yearDiv);
        }
    }
}

function addYear(newYear) {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
    gameStats[gameStats.length - 1].years.push(newYear);

    localStorage.setItem('gameStats', JSON.stringify(gameStats));
}


function getYear() {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

    return gameStats[gameStats.length - 1].currentYear;
}

function changeYear(newYear) {
    const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

    gameStats[gameStats.length - 1].currentYear = newYear;
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
}



/***/ }),

/***/ "./src/scripts/timeMachine.js":
/*!************************************!*\
  !*** ./src/scripts/timeMachine.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeTravelBuzz: () => (/* binding */ timeTravelBuzz),
/* harmony export */   timeTravelJoy: () => (/* binding */ timeTravelJoy),
/* harmony export */   timeTravelLeak: () => (/* binding */ timeTravelLeak),
/* harmony export */   timeTravelMoodle: () => (/* binding */ timeTravelMoodle)
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

            const content = tempElement.querySelector(
              `.content-${textContent}`
            ).innerHTML;
            const oldContent = document.querySelector('.content');
            const dinos = document.querySelectorAll('.dino');

            dinos.forEach((dino) => {
              dino.style.display = 'none';
            });

            if (textContent !== '2014') {
              const timeWarp = document.querySelector('.timeWarp');
              timeWarp.style.fontFamily = 'compactz';
              oldContent.style.background = 'transparent';
              oldContent.style.color = 'white';
              oldContent.style.width = '75vw';
              oldContent.innerHTML = content;
            } else {
              const timeWarp = document.querySelector('.timeWarp');
              timeWarp.style.fontFamily = 'oldMoodle';
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

function timeTravelMoodle(textContent) {
  const blur = document.querySelector('.blur');
  blur.style.display = 'block';
  setTimeout(() => {
    blur.style.opacity = 1;
    setTimeout(() => {
      const currentYear = document.querySelector('.tw-year');
      const currentYearText = currentYear.textContent;
      if (currentYearText !== textContent) {
        fetch(`./ato1-${textContent}.html`)
          .then((response) => response.text())
          .then((data) => {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = data;

            const moodle = tempElement.querySelector(
              `.moodle${textContent}`
            ).innerHTML;
            const oldMoodle = document.querySelector('.moodle');
            oldMoodle.innerHTML = moodle;

            const news = tempElement.querySelector(
              `.news${textContent}`
            ).innerHTML;
            const oldNews = document.querySelector('.news-container');
            oldNews.innerHTML = news;

            if (textContent !== '2014') {
              const timeWarp = document.querySelector('.timeWarp');
              const moodleTitle = document.querySelector('.moodle-title');
              const imgNews = document.querySelector('.img-news');
              document.body.style.backgroundColor = '#3c3c3c';
              imgNews.style.border = 'none';
              moodleTitle.style.fontFamily = 'novaRound';
              timeWarp.style.fontFamily = 'compactz';
            } else {
              const timeWarp = document.querySelector('.timeWarp');
              const moodleTitle = document.querySelector('.moodle-title');
              const imgNews = document.querySelector('.img-news');
              document.body.style.backgroundColor = 'white';
              imgNews.style.border = 'solid 0.5vh gray';
              moodleTitle.style.fontFamily = 'oldMoodle';
              timeWarp.style.fontFamily = 'oldMoodle';
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

function timeTravelBuzz(textContent) {
  const blur = document.querySelector('.blur');
  blur.style.display = 'block';

  setTimeout(() => {
    blur.style.opacity = 1;
    setTimeout(() => {
      const currentYear = document.querySelector('.tw-year');
      const currentYearText = currentYear.textContent;
      console.log(currentYearText !== textContent);
      fetch(`./byteBuzz${textContent}.html`)
        .then((response) => response.text())
        .then((data) => {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = data;

          const content = tempElement.querySelector(
            `.content-${textContent}`
          ).innerHTML;

          const oldContent = document.querySelector('.content');
          oldContent.innerHTML = content;
          if (textContent !== '2014') {
            const timeWarp = document.querySelector('.timeWarp');
            timeWarp.style.fontFamily = 'compactz';
            document.body.style.height = 'auto';
            var headerTag = document.querySelector('header');
            headerTag.style.display = 'flex';
          } else {
            const timeWarp = document.querySelector('.timeWarp');
            timeWarp.style.fontFamily = 'oldMoodle';
            oldContent.style.background = 'transparent';
            document.body.style.height = '100vh';
            var headerTag = document.querySelector('header');
            headerTag.style.display = 'none';
          }
          
          currentYear.textContent = textContent;
        });
      blur.style.opacity = 0;
      setTimeout(() => {
        blur.style.display = 'none';
      }, 1500);
    }, 1500);
  }, 300);
}

function timeTravelLeak(textContent) {
  const blur = document.querySelector('.blur');
  blur.style.display = 'block';

  setTimeout(() => {
    blur.style.opacity = 1;
    setTimeout(() => {
      const currentYear = document.querySelector('.tw-year');
      const currentYearText = currentYear.textContent;
      console.log(currentYearText !== textContent);
      fetch(`./dnLeaks${textContent}.html`)
        .then((response) => response.text())
        .then((data) => {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = data;

          const content = tempElement.querySelector(
            `.content${textContent}`
          ).innerHTML;

          const oldContent = document.querySelector('.content');
          oldContent.innerHTML = content;
          if (textContent !== '2014') {
            const timeWarp = document.querySelector('.timeWarp');
            timeWarp.style.fontFamily = 'compactz';
          } else {
            const timeWarp = document.querySelector('.timeWarp');
            timeWarp.style.fontFamily = 'oldMoodle';
          }
          
          currentYear.textContent = textContent;
        });
      blur.style.opacity = 0;
      setTimeout(() => {
        blur.style.display = 'none';
      }, 1500);
    }, 1500);
  }, 300);
}



/***/ }),

/***/ "./src/font/Bebas_Neue/BebasNeue-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/font/Bebas_Neue/BebasNeue-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12e3683f9192436a7be8.ttf";

/***/ }),

/***/ "./src/font/Nova_Round/NovaRound-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/font/Nova_Round/NovaRound-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ab0494f4369c3550251.ttf";

/***/ }),

/***/ "./src/font/Old_Standard_TT/OldStandardTT-Bold.ttf":
/*!*********************************************************!*\
  !*** ./src/font/Old_Standard_TT/OldStandardTT-Bold.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d8bf676686d649be60b.ttf";

/***/ }),

/***/ "./src/font/Roboto/Roboto-Regular.ttf":
/*!********************************************!*\
  !*** ./src/font/Roboto/Roboto-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/font/compact/Compact-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/font/compact/Compact-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf577abc191dd67dd8a6.ttf";

/***/ }),

/***/ "./src/img/popup.gif":
/*!***************************!*\
  !*** ./src/img/popup.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff0aa4deb6ce2178994b.gif";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"joyJournal": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************!*\
  !*** ./src/scripts/joyJournal.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_joyJournal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/joyJournal.css */ "./src/css/joyJournal.css");
/* harmony import */ var _captchaV2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captchaV2.js */ "./src/scripts/captchaV2.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");
/* harmony import */ var _img_popup_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/popup.gif */ "./src/img/popup.gif");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");







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
    (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_3__.createYears)();
    url.textContent = 'http://www.joyjournal.com/';
    listenYears();
  })

document.addEventListener('DOMContentLoaded', function () {
  addEvent();
  (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_5__.timeTravelJoy)((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_3__.getYear)());
  const animatedImage = document.querySelector('.weird');
  function handleScroll() {
    const scrollPosition = window.scrollY;

    // Ativa a animação quando a posição de rolagem atinge 120vh
    if (scrollPosition >= (62 * window.innerHeight) / 100) {
      animatedImage.style.animationPlayState = 'running';
      window.removeEventListener('scroll', handleScroll);
      setTimeout(() => {
        const dialogue = document.querySelector('.dialogue');
        dialogue.style.display = 'flex';
        setTimeout(() => {
          const dialogue = document.querySelector('.dialogue');
          dialogue.style.display = 'none';
        }, 3000);
      }, 5500);
    }
  }

  
  window.addEventListener('scroll', handleScroll);
  
});

function criarDivYear(texto) {
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
      const divYear = criarDivYear(texto);
      const timeline = document.querySelector('.timeline');
      timeline.appendChild(divYear);

      (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_3__.addYear)(texto);
      // Remover o event listener após o primeiro clique
      tag.removeEventListener('click', handleClick);
      listenYears();
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
  var yearDivs = document.querySelectorAll('.year');
  yearDivs.forEach(function (div) {
    div.addEventListener('click', function () {
      const blur = document.querySelector('.blur');
      blur.style.display = 'flex';
      (0,_captchaV2_js__WEBPACK_IMPORTED_MODULE_1__.createCaptcha)(div.textContent);
      if((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_3__.checkJumpscare)() === false){
        window.addEventListener('scroll', playPopup);
      }
    });
  });
}

function playPopup() {
  const scrollPosition = window.scrollY;
  if (scrollPosition >= (2 * window.innerHeight) / 100) {
    const content = document.querySelector('.content');
    var popupDiv = document.createElement('div');
    var popupButton = document.createElement('button');
    popupButton.textContent = 'FECHAR';
    
    var img = new Image();
    img.src = _img_popup_gif__WEBPACK_IMPORTED_MODULE_4__;

    popupDiv.classList.add('popup');
    img.classList.add('popup-img');
    content.appendChild(popupDiv);
    popupDiv.appendChild(img);
    popupDiv.appendChild(popupButton);
    window.removeEventListener('scroll', playPopup);
    setTimeout(() => {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_2__.playHappy)();
      closePopup()
      popupDiv.style.opacity = 1;
    }, 3000);
    (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_3__.changeJumpscare)();
  }
}

function closePopup() {
  const popup = document.querySelector('.popup');
  const popupButton = document.querySelector('.popup button');

  popupButton.addEventListener('click', function () {
    popup.style.display = 'none';
    (0,_audio_js__WEBPACK_IMPORTED_MODULE_2__.stopHappy)();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam95Sm91cm5hbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLHdLQUFpRTtBQUM3Ryw0Q0FBNEMsa0pBQXNEO0FBQ2xHLDRDQUE0Qyw0SkFBMkQ7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxV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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsT0FBTyx5RkFBeUYsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxX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LG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQWE7QUFDbkIsU0FBUyx3RUFBYztBQUN2QjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywyQ0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBUztBQUNmO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSx5RUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFTO0FBQ2IsR0FBRztBQUNILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvYXRvMS12MS5jc3MiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2pveUpvdXJuYWwuY3NzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvYXRvMS12MS5jc3M/YWZmNCIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3Mvam95Sm91cm5hbC5jc3M/Mzk1MiIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvYXRvMS12MS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2F1ZGlvLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvY2FwdGNoYVYyLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy90aW1lTWFjaGluZS5qcyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvam95Sm91cm5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Ob3ZhX1JvdW5kL05vdmFSb3VuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxNnZoO1xyXG59XHJcblxyXG4uY2hhcHRlciB7XHJcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEydmg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMi4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNoYXB0ZXIgc3BhbiB7XHJcbiAgZm9udC1zaXplOiA1dmg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2hhcHRlciBidXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIGdyYXk7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogM3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubW9vZGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vb2RsZS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTd2aDtcclxuICBtYXJnaW4tYm90dG9tOiA1dmg7XHJcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcclxufVxyXG5cclxuLm1vb2RsZS10aXRsZSBwIHtcclxuICBmb250LXNpemU6IDE2dmg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDR2aDtcclxufVxyXG5cclxuLnNlYXJjaC1idXR0b25zIHtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzAwMDtcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9ucyBidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMi4xdmg7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBib3JkZXI6IHNvbGlkIC40dmg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2NjICM5OTkgIzk5OSAjY2NjO1xyXG4gIGhlaWdodDogNXZoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwIC44dmggMCAuOHZoO1xyXG59XHJcblxyXG4ucHJpdmFjeSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBmb250LXNpemU6IDJ2aDtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbn1cclxuXHJcbi50aW1lV2FycCB7XHJcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcclxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XHJcbiAgaGVpZ2h0OiAxNnZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi50dy1jZW50ZXIge1xyXG4gIHdpZHRoOiA1NXZ3O1xyXG59XHJcblxyXG4udHcteWVhcixcclxuLnR3LXRpdGxlIHtcclxuICBmb250LXNpemU6IDR2aDtcclxufVxyXG5cclxuLnVybCB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDN2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyLjV2aDtcclxufVxyXG5cclxuLnRpbWVsaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi55ZWFyIHtcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMy41JTtcclxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xyXG4gIGZvbnQtc2l6ZTogMS41dmg7XHJcbiAgcGFkZGluZzogLjd2aDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnllYXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMTB2aDtcclxuICB3aWR0aDogOTB2dztcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG5cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubmV3cy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xyXG59XHJcblxyXG4ubmV3cy10aXRsZTIwMTYge1xyXG4gIGZvbnQtZmFtaWx5OiBub3ZhUm91bmQ7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMTU2YWVjO1xyXG59XHJcblxyXG4ubmV3cy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcclxufVxyXG5cclxuLm5ld3MtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA1dmg7XHJcbn1cclxuXHJcbi5pbWctbmV3cyB7XHJcbiAgaGVpZ2h0OiAxMnZoO1xyXG4gIHdpZHRoOiAxNnZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xyXG59XHJcblxyXG4ubmV3czIwMTQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAydmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmV3czIwMTQgcCB7XHJcbiAgZm9udC1zaXplOiAyLjR2aDtcclxuICB3aWR0aDogNDB2aDtcclxufVxyXG5cclxuLm5ld3MyMDE2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnZoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uZXdzMjAxNiBwIHtcclxuICBmb250LXNpemU6IDIuNHZoO1xyXG4gIHdpZHRoOiA0NXZoO1xyXG59XHJcblxyXG4uZGlhbG9ndWUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDE4MywgMjAxKTtcclxuICBtYXJnaW4tYm90dG9tOiA3dmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIuNXZoO1xyXG59XHJcblxyXG4uYmx1ciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDE5MHZoO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubW9ua2V5LXR5cGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xyXG4gIGhlaWdodDogNDB2aDtcclxuICB3aWR0aDogNTB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vbmtleS10aXRsZSB7XHJcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbn1cclxuXHJcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcclxuICBmb250LXNpemU6IDIuOHZoO1xyXG59XHJcblxyXG4ubGV0dGVyLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogOHZoO1xyXG59XHJcblxyXG4uY29ycmVjdCB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uaW5jb3JyZWN0IHtcclxuICBjb2xvcjogYnJvd247XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xyXG4gIHdpZHRoOiAwO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2F0bzEtdjEuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQTZDO0FBQy9DOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFrRDtBQUNwRDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixLQUFLO0VBQ0wsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZOztFQUVaLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7O0VBRXZCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBzcmM6IHVybCguLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxyXFxuICBzcmM6IHVybCguLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogY29tcGFjdHo7XFxyXFxuICBzcmM6IHVybCguLi9mb250L2NvbXBhY3QvQ29tcGFjdC1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcXHJcXG4gIHNyYzogdXJsKC4uL2ZvbnQvTm92YV9Sb3VuZC9Ob3ZhUm91bmQtUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IDE2dmg7XFxyXFxufVxcclxcblxcclxcbi5jaGFwdGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDMwdnc7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEydmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyLjFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcHRlciBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXZoO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcHRlciBidXR0b24ge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIGdyYXk7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb29kbGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vZGxlLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxN3ZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xcclxcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb2RsZS10aXRsZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZ2aDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgd2lkdGg6IDQwdnc7XFxyXFxuICBoZWlnaHQ6IDR2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b25zIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxdmg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnV0dG9ucyBidXR0b24ge1xcclxcbiAgZm9udC1zaXplOiAyLjF2aDtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIC40dmg7XFxyXFxuICBib3JkZXItY29sb3I6ICNjY2MgIzk5OSAjOTk5ICNjY2M7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgLjh2aCAwIC44dmg7XFxyXFxufVxcclxcblxcclxcbi5wcml2YWN5IHtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIGZvbnQtc2l6ZTogMnZoO1xcclxcbiAgbWFyZ2luLXRvcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZVdhcnAge1xcclxcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXHJcXG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcXHJcXG4gIGhlaWdodDogMTZ2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcXHJcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDowO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnR3LWNlbnRlciB7XFxyXFxuICB3aWR0aDogNTV2dztcXHJcXG59XFxyXFxuXFxyXFxuLnR3LXllYXIsXFxyXFxuLnR3LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHZoO1xcclxcbn1cXHJcXG5cXHJcXG4udXJsIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogM3ZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAyLjV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVsaW5lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA3dmg7XFxyXFxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLnllYXIge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAzLjUlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxyXFxuICBwYWRkaW5nOiAuN3ZoO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi55ZWFyOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTEwdmg7XFxyXFxuICB3aWR0aDogOTB2dztcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxyXFxufVxcclxcblxcclxcbi5uZXdzLXRpdGxlMjAxNiB7XFxyXFxuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMTU2YWVjO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1uZXdzIHtcXHJcXG4gIGhlaWdodDogMTJ2aDtcXHJcXG4gIHdpZHRoOiAxNnZoO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXI6IHNvbGlkIC41dmggZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MyMDE0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uZXdzMjAxNCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40dmg7XFxyXFxuICB3aWR0aDogNDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MyMDE2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAydmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzMjAxNiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40dmg7XFxyXFxuICB3aWR0aDogNDV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZ3VlIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxODMsIDIwMSk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuNXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDE5MHZoO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmtleS10eXBlIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcXHJcXG4gIGhlaWdodDogNDB2aDtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmtleS10aXRsZSB7XFxyXFxuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcXHJcXG4gIGZvbnQtc2l6ZTogNHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XFxyXFxuICBmb250LXNpemU6IDIuOHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGV0dGVyLWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA4dmg7XFxyXFxufVxcclxcblxcclxcbi5jb3JyZWN0IHtcXHJcXG4gIGNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmluY29ycmVjdCB7XFxyXFxuICBjb2xvcjogYnJvd247XFxyXFxufVxcclxcblxcclxcbi5wcm9ncmVzcy1iYXIge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvQmViYXNfTmV1ZS9CZWJhc05ldWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG59XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBmb250LWZhbWlseTogYmViYXM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3MDEwMTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxOHZoO1xyXG4gIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qb3ktdGl0bGUge1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IGdyYXk7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA1dmg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB3aWR0aDogNzB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDI1cHg7XHJcbiAgbWFyZ2luOiA1MHB4IDAgNTBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5jb250ZW50LXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAxNjAsIDE2MCk7XHJcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0dmgpO1xyXG4gIGZvbnQtc2l6ZTogN3ZoO1xyXG4gIHBhZGRpbmc6IDJ2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50LXRpdGxlLTIwMTYge1xyXG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcclxuICBmb250LXNpemU6IDZ2aDtcclxuICBwYWRkaW5nOiAydmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nLTIwMTYge1xyXG4gIGhlaWdodDogNTB2aDtcclxuICB3aWR0aDogYXV0bztcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjUlKTtcclxufVxyXG5cclxuLmNvbnRlbnQgcCB7XHJcbiAgZm9udC1zaXplOiAyLjV2aDtcclxuICBwYWRkaW5nOiAwIDJ2aCAydmggMnZoO1xyXG59XHJcblxyXG4udGltZVdhcnAge1xyXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XHJcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xyXG4gIGhlaWdodDogMTZ2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50dy1jZW50ZXIge1xyXG4gIHdpZHRoOiA1NXZ3O1xyXG59XHJcblxyXG4udHcteWVhcixcclxuLnR3LXRpdGxlIHtcclxuICBmb250LXNpemU6IDR2aDtcclxufVxyXG5cclxuLnVybCB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDN2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyLjV2aDtcclxufVxyXG5cclxuLnRpbWVsaW5lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi55ZWFyIHtcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMy41JTtcclxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xyXG4gIGZvbnQtc2l6ZTogMS41dmg7XHJcbiAgcGFkZGluZzogLjd2aDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnllYXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcclxufVxyXG5cclxuLmRpbm8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBsZWZ0OiAtMjV2aDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgcmlnaHQ6IC0yN3ZoO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMyMGRlZykgc2NhbGVYKC0xKTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgdG9wOiAyMHZoO1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICB0b3A6IDgwdmg7XHJcbn1cclxuXHJcbi53ZWlyZCB7XHJcbiAgdG9wOiAxMzV2aDtcclxuICByaWdodDogLTI3dmg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKSBzY2FsZVgoLTEpO1xyXG4gIGFuaW1hdGlvbjogbW92ZUltYWdlIDEuMnMgZm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxufVxyXG5cclxucCBpIHtcclxuICBmb250LXNpemU6IDIuN3ZoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnRleHQtaW1nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogM3ZoO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LWltZyBpbWcge1xyXG4gIGhlaWdodDogMjB2aDtcclxuICBib3JkZXI6IHNvbGlkIC44dmggIzU3MDEwMTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5kaWFsb2d1ZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTE4LCAxMzMpO1xyXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi41dmg7XHJcbn1cclxuXHJcbi5ibHVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTkwdmg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5tb25rZXktdHlwZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XHJcbiAgaGVpZ2h0OiA0MHZoO1xyXG4gIHdpZHRoOiA1MHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9ua2V5LXRpdGxlIHtcclxuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcclxuICBmb250LXNpemU6IDR2aDtcclxufVxyXG5cclxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xyXG4gIGZvbnQtc2l6ZTogMi44dmg7XHJcbn1cclxuXHJcbi5sZXR0ZXItZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA4dmg7XHJcbn1cclxuXHJcbi5jb3JyZWN0IHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pbmNvcnJlY3Qge1xyXG4gIGNvbG9yOiBicm93bjtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5wb3B1cCB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDgyLCA4Mik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucG9wdXAtaW1nIHtcclxuICBoZWlnaHQ6IDY1dmg7XHJcbn1cclxuXHJcbi5wb3B1cCBidXR0b24ge1xyXG4gIGhlaWdodDogNXZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVJbWFnZSB7XHJcbiAgZnJvbSB7XHJcbiAgICByaWdodDogLTI1dmg7IC8qIFBvc2nDp8OjbyBpbmljaWFsICovXHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHJpZ2h0OiAtNTV2aDsgLyogUG9zacOnw6NvIGZpbmFsICovXHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9qb3lKb3VybmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usc0JBQXNCO0VB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Q1YsYUFBYTtFQUNiLHVCQUF1Qjs7RUFFdkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxZQUFZLEVBQUUsb0JBQW9CO0VBQ3BDO0VBQ0E7SUFDRSxZQUFZLEVBQUUsa0JBQWtCO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogYmViYXM7XFxyXFxuICBzcmM6IHVybCguLi9mb250L0JlYmFzX05ldWUvQmViYXNOZXVlLVJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3MDEwMTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTh2aDtcXHJcXG4gIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5qb3ktdGl0bGUge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggZ3JheTtcXHJcXG4gIHdpZHRoOiAxMHZ3O1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogNXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogNzB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjVweDtcXHJcXG4gIG1hcmdpbjogNTBweCAwIDUwcHggMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRpdGxlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDE2MCwgMTYwKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcXHJcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0dmgpO1xcclxcbiAgZm9udC1zaXplOiA3dmg7XFxyXFxuICBwYWRkaW5nOiAydmg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LXRpdGxlLTIwMTYge1xcclxcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcclxcbiAgZm9udC1zaXplOiA2dmg7XFxyXFxuICBwYWRkaW5nOiAydmg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbWctMjAxNiB7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDY1JSk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHAge1xcclxcbiAgZm9udC1zaXplOiAyLjV2aDtcXHJcXG4gIHBhZGRpbmc6IDAgMnZoIDJ2aCAydmg7XFxyXFxufVxcclxcblxcclxcbi50aW1lV2FycCB7XFxyXFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcclxcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xcclxcbiAgaGVpZ2h0OiAxNnZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udHctY2VudGVyIHtcXHJcXG4gIHdpZHRoOiA1NXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udHcteWVhcixcXHJcXG4udHctdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxufVxcclxcblxcclxcbi51cmwge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIuNXZoO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDd2aDtcXHJcXG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ueWVhciB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDMuNSU7XFxyXFxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xcclxcbiAgZm9udC1zaXplOiAxLjV2aDtcXHJcXG4gIHBhZGRpbmc6IC43dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnllYXI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlubyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0IHtcXHJcXG4gIGxlZnQ6IC0yNXZoO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQge1xcclxcbiAgcmlnaHQ6IC0yN3ZoO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKSBzY2FsZVgoLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9wIHtcXHJcXG4gIHRvcDogMjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbSB7XFxyXFxuICB0b3A6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbi53ZWlyZCB7XFxyXFxuICB0b3A6IDEzNXZoO1xcclxcbiAgcmlnaHQ6IC0yN3ZoO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzIwZGVnKSBzY2FsZVgoLTEpO1xcclxcbiAgYW5pbWF0aW9uOiBtb3ZlSW1hZ2UgMS4ycyBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxyXFxufVxcclxcblxcclxcbnAgaSB7XFxyXFxuICBmb250LXNpemU6IDIuN3ZoO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWltZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1pbWcgaW1nIHtcXHJcXG4gIGhlaWdodDogMjB2aDtcXHJcXG4gIGJvcmRlcjogc29saWQgLjh2aCAjNTcwMTAxO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9ndWUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExOCwgMTMzKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTkwdmg7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ua2V5LXR5cGUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcclxcbiAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ua2V5LXRpdGxlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44dmg7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXItZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDh2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcnJlY3Qge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5jb3JyZWN0IHtcXHJcXG4gIGNvbG9yOiBicm93bjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzLWJhciB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODIsIDgyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIGhlaWdodDogNjV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIGJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVJbWFnZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgcmlnaHQ6IC0yNXZoOyAvKiBQb3Npw6fDo28gaW5pY2lhbCAqL1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICByaWdodDogLTU1dmg7IC8qIFBvc2nDp8OjbyBmaW5hbCAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXRvMS12MS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0bzEtdjEuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pveUpvdXJuYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9qb3lKb3VybmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9jc3MvYXRvMS12MS5jc3MnO1xyXG5pbXBvcnQge1xyXG4gIGNoZWNrQ2hhcHRlcjEsXHJcbiAgY2hhbmdlQ2hhcHRlcjEsXHJcbiAgY3JlYXRlWWVhcnMsXHJcbiAgZ2V0WWVhcixcclxufSBmcm9tICcuL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSB9IGZyb20gJy4vY2FwdGNoYVYyLmpzJztcclxuaW1wb3J0IHsgdGltZVRyYXZlbE1vb2RsZSB9IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICB0aW1lVHJhdmVsTW9vZGxlKGdldFllYXIoKSk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gIGlmIChjaGVja0NoYXB0ZXIxKCkgPT09IGZhbHNlKSB7XHJcbiAgICBjb25zdCBzdGFydENoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuXHJcbiAgICBzdGFydENoYXB0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHN0YXJ0Q2hhcHRlci5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGRvY3VtZW50LlVSTCk7XHJcbiAgICAgIHZhciBjaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXB0ZXInKTtcclxuICAgICAgY2hhcHRlci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgY2hhbmdlQ2hhcHRlcjEoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY2hhcHRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGFjdGl2ZUNvbnRlbnQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcclxuICAgICAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH0sIDU1MDApO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgY2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFwdGVyJyk7XHJcbiAgICBjaGFwdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBhY3RpdmVDb250ZW50KCk7XHJcbiAgfVxyXG4gIFxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY3JlYXRlWWVhcnMoKTtcclxuICB9LCAxNTAwKTtcclxuXHJcbiAgdmFyIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLWJ1dHRvbnMgYnV0dG9uJyk7XHJcblxyXG4gIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XHJcbiAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gJ07Do28gZnVuY2lvbmEuLi4nO1xyXG4gICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGdldE5ld3MoKTtcclxuICAgIGxpc3RlblllYXJzKCk7XHJcbiAgfSwgNDAwMCk7XHJcbiAgXHJcbiBcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXROZXdzKCkge1xyXG4gIHZhciB0d1llYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHcteWVhcicpO1xyXG4gIGlmICh0d1llYXIudGV4dENvbnRlbnQgPT09ICcyMDE0Jykge1xyXG4gICAgdmFyIG5ld3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3czIwMTQnKTtcclxuXHJcbiAgICBuZXdzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2xpY291IDIwMTQnKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9qb3lKb3VybmFsLmh0bWwnO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZhciBuZXdzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MyMDE2Jyk7XHJcblxyXG4gICAgbmV3c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2NsaWNvdSAyMDE2Jyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vYnl0ZUJ1enouaHRtbCc7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2ZUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmZmYnO1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzExMHZoJztcclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdGVuWWVhcnMoKSB7XHJcbiAgdmFyIHllYXJEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnllYXInKTtcclxuICB5ZWFyRGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChkaXYpIHtcclxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XHJcbiAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgY3JlYXRlQ2FwdGNoYShkaXYudGV4dENvbnRlbnQpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0TmV3c1xyXG59IiwiZnVuY3Rpb24gcGxheVdyb25nKCkge1xyXG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWNsYUVycmFkYScpO1xyXG4gIGF1ZGlvLnZvbHVtZSA9IDAuNztcclxuICBhdWRpby5wbGF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlSaWdodCgpIHtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjbGFDb3JyZXRhJyk7XHJcbiAgYXVkaW8udm9sdW1lID0gMC4yO1xyXG4gIGF1ZGlvLnBsYXkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUVhcnRocXVha2Uodm9sdW1lLCB0eXBlKSB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJyk7XHJcbiAgYXVkaW8udm9sdW1lID0gdm9sdW1lO1xyXG4gIGF1ZGlvLnBsYXkoKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0eXBlKTtcclxuXHJcbiAgaWYgKHR5cGUgIT09ICdiaWctc2hha2UnKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodHlwZSk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5jcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KSB7XHJcbiAgaWYgKGF1ZGlvRWxlbWVudC52b2x1bWUgPj0gMC40NSkge1xyXG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuNDU7XHJcbiAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xyXG4gICAgdGltZVdhcnAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lICs9IDAuMDU7XHJcbiAgICBpbmNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpO1xyXG4gIH0sIDgwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xyXG4gIGlmIChhdWRpb0VsZW1lbnQudm9sdW1lIDw9IDAuMSkge1xyXG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuMDU7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSAtPSAwLjA3O1xyXG4gICAgZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcclxuICB9LCAzMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5SGFwcHkoKSB7XHJcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhcHB5Jyk7XHJcbiAgYXVkaW8udm9sdW1lID0gMTtcclxuICBhdWRpby5wbGF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BIYXBweSgpIHtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFwcHknKTtcclxuICBhdWRpby5wYXVzZSgpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgcGxheVJpZ2h0LCBwbGF5V3JvbmcsIHBsYXlFYXJ0aHF1YWtlLCBkZWNyZWFzZVZvbHVtZSwgaW5jcmVhc2VWb2x1bWUsIHBsYXlIYXBweSwgc3RvcEhhcHB5IH07XHJcbiIsImltcG9ydCB7IHBsYXlSaWdodCwgcGxheVdyb25nIH0gZnJvbSAnLi9hdWRpby5qcyc7XHJcbmltcG9ydCB7XHJcbiAgdGltZVRyYXZlbEpveSxcclxuICB0aW1lVHJhdmVsTW9vZGxlLFxyXG4gIHRpbWVUcmF2ZWxCdXp6LFxyXG4gIHRpbWVUcmF2ZWxMZWFrXHJcbn0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XHJcbmltcG9ydCB7IGNoYW5nZVllYXIgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzJztcclxuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gJy4vYXRvMS12MS5qcyc7XHJcblxyXG5sZXQgbGFzdFByZXNzZWRLZXkgPSAnJztcclxubGV0IHllYXJUb1RyYXZlbCA9ICcnO1xyXG5sZXQgY29ycmVjdENvdW50ID0gMDtcclxuZnVuY3Rpb24gY3JlYXRlQ2FwdGNoYShkaXZZZWFyKSB7XHJcbiAgeWVhclRvVHJhdmVsID0gZGl2WWVhcjtcclxuICB2YXIgeWVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XHJcbiAgeWVhckJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbiAgZGlzYWJsZVNjcm9sbCgpO1xyXG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJykpIHtcclxuICAgIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ01vb2RsZScpIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vZGxlJyk7XHJcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnRpdGxlID09PSAnZGFya05ldExlYWtzJykge1xyXG4gICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0Y2hhJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICB9XHJcbiAgICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10eXBlXCIuXHJcbiAgICB2YXIgbW9ua2V5VHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9ua2V5VHlwZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdHlwZScpO1xyXG5cclxuICAgIC8vIENyaWEgYSBkaXYgY29tIGEgY2xhc3NlIFwibW9ua2V5LXRpdGxlXCIgZSBkZWZpbmUgbyB0ZXh0b1xyXG4gICAgdmFyIG1vbmtleVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb25rZXlUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdGl0bGUnKTtcclxuICAgIHZhciBjYXB0Y2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY2FwdGNoYS50ZXh0Q29udGVudCA9ICdDQVBUQ0hBJztcclxuICAgIHZhciBjYXB0Y2hhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjYXB0Y2hhRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAncHJvdmUgc3VhIGh1bWFuaWRhZGUnO1xyXG4gICAgbW9ua2V5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2FwdGNoYSk7XHJcbiAgICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhRGVzY3JpcHRpb24pO1xyXG5cclxuICAgIC8vIENyaWEgYXMgZGl2cyBpbnRlcm5hcyBjb20gYXMgY2xhc3NlcyBcImxldHRlclwiIGUgXCJwcm9ncmVzcy1iYXJcIlxyXG4gICAgdmFyIGxldHRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2xldHRlci1kaXYnKTtcclxuXHJcbiAgICB2YXIgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgnbGV0dGVyJyk7XHJcbiAgICB2YXIgbnVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBudW1iZXJEaXYuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XHJcblxyXG4gICAgdmFyIHByb2dyZXNzQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9ncmVzc0JhckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcclxuXHJcbiAgICAvLyBBZGljaW9uYSBhcyBkaXZzIGludGVybmFzIMOgIGRpdiBcIm1vbmtleS10eXBlXCJcclxuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobW9ua2V5VGl0bGVEaXYpO1xyXG4gICAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChsZXR0ZXJEaXYpO1xyXG4gICAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChwcm9ncmVzc0JhckRpdik7XHJcbiAgICBsZXR0ZXJEaXYuYXBwZW5kQ2hpbGQobGV0dGVyKTtcclxuICAgIGxldHRlckRpdi5hcHBlbmRDaGlsZChudW1iZXJEaXYpO1xyXG5cclxuICAgIC8vIEFkaWNpb25hIGEgZGl2IFwibW9ua2V5LXR5cGVcIiBhbyBjb250ZW50IGV4aXN0ZW50ZVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb25rZXlUeXBlRGl2KTtcclxuICB9XHJcbiAgY29ycmVjdENvdW50ID0gMDtcclxuICB1cGRhdGVMZXR0ZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKSB7XHJcbiAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxwaGFiZXQubGVuZ3RoKTtcclxuICByZXR1cm4gYWxwaGFiZXRbcmFuZG9tSW5kZXhdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMZXR0ZXIoKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVLZXlQcmVzcyk7XHJcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5sZXR0ZXItZGl2Jyk7XHJcblxyXG4gIGxhc3RQcmVzc2VkS2V5ID0gJyc7XHJcbiAgY29uc3QgcmFuZG9tTGV0dGVyID0gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKTtcclxuICBsZXR0ZXJEaXYudGV4dENvbnRlbnQgPSByYW5kb21MZXR0ZXI7XHJcbiAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcclxuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLmxldHRlci1kaXYnKTtcclxuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAucHJvZ3Jlc3MtYmFyJyk7XHJcbiAgY29uc3QgbW9ua2V5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpO1xyXG5cclxuICBjb25zdCBwcmVzc2VkS2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcclxuICBjb25zdCBjdXJyZW50TGV0dGVyID0gbGV0dGVyRGl2LnRleHRDb250ZW50O1xyXG5cclxuICBpZiAoXHJcbiAgICAocHJlc3NlZEtleS50b1VwcGVyQ2FzZSgpID09PSBjdXJyZW50TGV0dGVyIHx8XHJcbiAgICAgIHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKSA9PT0gY3VycmVudExldHRlcikgJiZcclxuICAgIHByZXNzZWRLZXkgIT09IGxhc3RQcmVzc2VkS2V5XHJcbiAgKSB7XHJcbiAgICBsYXN0UHJlc3NlZEtleSA9IHByZXNzZWRLZXk7XHJcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xyXG4gICAgcGxheVJpZ2h0KCk7XHJcbiAgICBjb3JyZWN0Q291bnQrKztcclxuXHJcbiAgICAvLyBBdHVhbGl6YSBhIGxhcmd1cmEgZGEgYmFycmEgZGUgcHJvZ3Jlc3NvXHJcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGNvcnJlY3RDb3VudCAqIDggKyAnJSc7XHJcblxyXG4gICAgaWYgKGNvcnJlY3RDb3VudCA9PT0gMTIpIHtcclxuICAgICAgbW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgdmFyIHllYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xyXG4gICAgICB5ZWFyQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ01vb2RsZScpIHtcclxuICAgICAgICB0aW1lVHJhdmVsTW9vZGxlKHllYXJUb1RyYXZlbCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBnZXROZXdzKCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdKT1kgSk9VUk5BTCcpIHtcclxuICAgICAgICB0aW1lVHJhdmVsSm95KHllYXJUb1RyYXZlbCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdCeXRlIEJ1enonKXtcclxuICAgICAgICB0aW1lVHJhdmVsQnV6eih5ZWFyVG9UcmF2ZWwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRpbWVUcmF2ZWxMZWFrKHllYXJUb1RyYXZlbCk7XHJcbiAgICAgIH1cclxuICAgICAgY2hhbmdlWWVhcih5ZWFyVG9UcmF2ZWwpO1xyXG4gICAgICBlbmFibGVTY3JvbGwoKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB1cGRhdGVMZXR0ZXIoKTtcclxuICAgIH0sIDI1NSk7XHJcbiAgfSBlbHNlIGlmIChtb25rZXlUeXBlLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xyXG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2luY29ycmVjdCcpO1xyXG4gICAgcGxheVdyb25nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvVG9wKTtcclxufVxyXG5cclxuLy8gRnVuw6fDo28gcGFyYSBoYWJpbGl0YXIgbyBzY3JvbGxcclxuZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xyXG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb1RvcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FwdGNoYSwgdXBkYXRlTGV0dGVyIH07XHJcbiIsImZ1bmN0aW9uIHNhdmVTdGF0c0xvY2FsKGp1bXBzY2FyZSwgY2hhcHRlcjEsIHllYXJzLCBjdXJyZW50WWVhcikge1xyXG4gICAgY29uc3Qgc3RhdHMgPSB7IGp1bXBzY2FyZSwgY2hhcHRlcjEsIHllYXJzLCBjdXJyZW50WWVhcn07XHJcblxyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG4gICAgZ2FtZVN0YXRzLnB1c2goc3RhdHMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJpZnlOZXdVc2VyKCkge1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG4gICAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgc2F2ZVN0YXRzTG9jYWwoZmFsc2UsIGZhbHNlLCBbMjAxNF0sICcyMDE0Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUp1bXBzY2FyZSgpIHtcclxuICAgIC8vIE9idMOpbSBvcyBkYWRvcyBhcm1hemVuYWRvcyBsb2NhbG1lbnRlIGNvbSBhIGNoYXZlICdnYW1lU3RhdHMnXHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcblxyXG4gICAgLy8gVmVyaWZpY2Egc2UgaMOhIHBlbG8gbWVub3MgdW0gY29uanVudG8gZGUgZXN0YXTDrXN0aWNhcyBubyBhcnJheVxyXG4gICAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5qdW1wc2NhcmUgPSB0cnVlO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUNoYXB0ZXIxKCkge1xyXG4gICAgLy8gT2J0w6ltIG9zIGRhZG9zIGFybWF6ZW5hZG9zIGxvY2FsbWVudGUgY29tIGEgY2hhdmUgJ2dhbWVTdGF0cydcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuXHJcbiAgICAvLyBWZXJpZmljYSBzZSBow6EgcGVsbyBtZW5vcyB1bSBjb25qdW50byBkZSBlc3RhdMOtc3RpY2FzIG5vIGFycmF5XHJcbiAgICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNoYXB0ZXIxID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0p1bXBzY2FyZSgpIHtcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuXHJcbiAgICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5qdW1wc2NhcmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0NoYXB0ZXIxKCkge1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG5cclxuICAgIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNoYXB0ZXIxID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlWWVhcnMoKSB7XHJcbiAgICBjb25zdCB0aW1lTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZScpO1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG4gICAgbGV0IGFsbFllYXJzID0gZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS55ZWFycztcclxuXHJcbiAgICBpZiAodGltZUxpbmUuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuICAgICAgICAvLyBJdGVyYSBzb2JyZSBjYWRhIGFubyBubyBhcnJheSBhbGxZZWFyc1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsWWVhcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gQ3JpYSB1bWEgZGl2IGNvbSBhIGNsYXNzZSAneWVhcicgZSBvIHRleHRvIGlndWFsIGFvIHZhbG9yIG5vIGFycmF5XHJcbiAgICAgICAgICAgIGNvbnN0IHllYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgeWVhckRpdi5jbGFzc0xpc3QuYWRkKCd5ZWFyJyk7XHJcbiAgICAgICAgICAgIHllYXJEaXYudGV4dENvbnRlbnQgPSBhbGxZZWFyc1tpXTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBBZGljaW9uYSBhIGRpdiBhbyBlbGVtZW50byB0aW1lTGluZVxyXG4gICAgICAgICAgICB0aW1lTGluZS5hcHBlbmRDaGlsZCh5ZWFyRGl2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFllYXIobmV3WWVhcikge1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG4gICAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS55ZWFycy5wdXNoKG5ld1llYXIpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFllYXIoKSB7XHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcblxyXG4gICAgcmV0dXJuIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY3VycmVudFllYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG5cclxuICAgIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY3VycmVudFllYXIgPSBuZXdZZWFyO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgdmVyaWZ5TmV3VXNlciwgY2hhbmdlSnVtcHNjYXJlLCBjaGFuZ2VDaGFwdGVyMSwgY2hlY2tKdW1wc2NhcmUsIGNoZWNrQ2hhcHRlcjEsIGNyZWF0ZVllYXJzLCBhZGRZZWFyLCBnZXRZZWFyLCBjaGFuZ2VZZWFyXHJcbn0iLCJmdW5jdGlvbiB0aW1lVHJhdmVsSm95KHRleHRDb250ZW50KSB7XHJcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XHJcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHcteWVhcicpO1xyXG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcclxuICAgICAgaWYgKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpIHtcclxuICAgICAgICBmZXRjaChgLi9qb3lKb3VybmFsJHt0ZXh0Q29udGVudH0uaHRtbGApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICBgLmNvbnRlbnQtJHt0ZXh0Q29udGVudH1gXHJcbiAgICAgICAgICAgICkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBjb25zdCBvbGRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgICAgICAgICAgY29uc3QgZGlub3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlubycpO1xyXG5cclxuICAgICAgICAgICAgZGlub3MuZm9yRWFjaCgoZGlubykgPT4ge1xyXG4gICAgICAgICAgICAgIGRpbm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgIT09ICcyMDE0Jykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XHJcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLndpZHRoID0gJzc1dncnO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xyXG4gICAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmF5JztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLndpZHRoID0gJzcwdncnO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSwgMTUwMCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCAzMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aW1lVHJhdmVsTW9vZGxlKHRleHRDb250ZW50KSB7XHJcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XHJcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHcteWVhcicpO1xyXG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcclxuICAgICAgaWYgKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpIHtcclxuICAgICAgICBmZXRjaChgLi9hdG8xLSR7dGV4dENvbnRlbnR9Lmh0bWxgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9vZGxlID0gdGVtcEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgICBgLm1vb2RsZSR7dGV4dENvbnRlbnR9YFxyXG4gICAgICAgICAgICApLmlubmVySFRNTDtcclxuICAgICAgICAgICAgY29uc3Qgb2xkTW9vZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb2RsZScpO1xyXG4gICAgICAgICAgICBvbGRNb29kbGUuaW5uZXJIVE1MID0gbW9vZGxlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3cyA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgYC5uZXdzJHt0ZXh0Q29udGVudH1gXHJcbiAgICAgICAgICAgICkuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBjb25zdCBvbGROZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtY29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgIG9sZE5ld3MuaW5uZXJIVE1MID0gbmV3cztcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0Q29udGVudCAhPT0gJzIwMTQnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgICAgICAgICAgICBjb25zdCBtb29kbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUtdGl0bGUnKTtcclxuICAgICAgICAgICAgICBjb25zdCBpbWdOZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1uZXdzJyk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzNjM2MzYyc7XHJcbiAgICAgICAgICAgICAgaW1nTmV3cy5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgbW9vZGxlVGl0bGUuc3R5bGUuZm9udEZhbWlseSA9ICdub3ZhUm91bmQnO1xyXG4gICAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnY29tcGFjdHonO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgbW9vZGxlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vZGxlLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgaW1nTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctbmV3cycpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICBpbWdOZXdzLnN0eWxlLmJvcmRlciA9ICdzb2xpZCAwLjV2aCBncmF5JztcclxuICAgICAgICAgICAgICBtb29kbGVUaXRsZS5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XHJcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIDMwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpbWVUcmF2ZWxCdXp6KHRleHRDb250ZW50KSB7XHJcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XHJcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcclxuICAgICAgY29uc3QgY3VycmVudFllYXJUZXh0ID0gY3VycmVudFllYXIudGV4dENvbnRlbnQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpO1xyXG4gICAgICBmZXRjaChgLi9ieXRlQnV6eiR7dGV4dENvbnRlbnR9Lmh0bWxgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYC5jb250ZW50LSR7dGV4dENvbnRlbnR9YFxyXG4gICAgICAgICAgKS5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICBpZiAodGV4dENvbnRlbnQgIT09ICcyMDE0Jykge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xyXG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ2NvbXBhY3R6JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXJUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFnLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xyXG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XHJcbiAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcclxuICAgICAgICAgICAgdmFyIGhlYWRlclRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG4gICAgICAgICAgICBoZWFkZXJUYWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgICAgICB9KTtcclxuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9LCAxNTAwKTtcclxuICAgIH0sIDE1MDApO1xyXG4gIH0sIDMwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpbWVUcmF2ZWxMZWFrKHRleHRDb250ZW50KSB7XHJcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XHJcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcclxuICAgICAgY29uc3QgY3VycmVudFllYXJUZXh0ID0gY3VycmVudFllYXIudGV4dENvbnRlbnQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpO1xyXG4gICAgICBmZXRjaChgLi9kbkxlYWtzJHt0ZXh0Q29udGVudH0uaHRtbGApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICBgLmNvbnRlbnQke3RleHRDb250ZW50fWBcclxuICAgICAgICAgICkuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICAgICAgb2xkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgICAgaWYgKHRleHRDb250ZW50ICE9PSAnMjAxNCcpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xyXG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGN1cnJlbnRZZWFyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSwgMTUwMCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCAzMDApO1xyXG59XHJcbmV4cG9ydCB7IHRpbWVUcmF2ZWxKb3ksIHRpbWVUcmF2ZWxNb29kbGUsIHRpbWVUcmF2ZWxCdXp6LCB0aW1lVHJhdmVsTGVhayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJqb3lKb3VybmFsXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vY3NzL2pveUpvdXJuYWwuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSB9IGZyb20gJy4vY2FwdGNoYVYyLmpzJztcclxuaW1wb3J0IHsgcGxheUhhcHB5LCBzdG9wSGFwcHkgfSBmcm9tICcuL2F1ZGlvLmpzJztcclxuaW1wb3J0IHsgY2hlY2tKdW1wc2NhcmUsIGNoYW5nZUp1bXBzY2FyZSwgIGNyZWF0ZVllYXJzLCBhZGRZZWFyLCBnZXRZZWFyfSBmcm9tICcuL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzJztcclxuaW1wb3J0IHBvcHVwIGZyb20gJy4uL2ltZy9wb3B1cC5naWYnO1xyXG5pbXBvcnQgeyB0aW1lVHJhdmVsSm95IH0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XHJcblxyXG5mZXRjaCgnLi9hdG8xLXYxLmh0bWwnKVxyXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcclxuXHJcbiAgICAvLyBFeHRyYWlhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG9cclxuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKS5pbm5lckhUTUw7XHJcblxyXG4gICAgLy8gU3Vic3RpdHVhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG8gbmEgcMOhZ2luYSBhbHRlcmFkYVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJykuaW5uZXJIVE1MID0gaGVhZGVyQ29udGVudDtcclxuICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cmwnKTtcclxuICAgIGNyZWF0ZVllYXJzKCk7XHJcbiAgICB1cmwudGV4dENvbnRlbnQgPSAnaHR0cDovL3d3dy5qb3lqb3VybmFsLmNvbS8nO1xyXG4gICAgbGlzdGVuWWVhcnMoKTtcclxuICB9KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICBhZGRFdmVudCgpO1xyXG4gIHRpbWVUcmF2ZWxKb3koZ2V0WWVhcigpKTtcclxuICBjb25zdCBhbmltYXRlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlaXJkJyk7XHJcbiAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAvLyBBdGl2YSBhIGFuaW1hw6fDo28gcXVhbmRvIGEgcG9zacOnw6NvIGRlIHJvbGFnZW0gYXRpbmdlIDEyMHZoXHJcbiAgICBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gKDYyICogd2luZG93LmlubmVySGVpZ2h0KSAvIDEwMCkge1xyXG4gICAgICBhbmltYXRlZEltYWdlLnN0eWxlLmFuaW1hdGlvblBsYXlTdGF0ZSA9ICdydW5uaW5nJztcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XHJcbiAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XHJcbiAgICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICB9LCA1NTAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gIFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGNyaWFyRGl2WWVhcih0ZXh0bykge1xyXG4gIGNvbnN0IGRpdlllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXZZZWFyLmNsYXNzTGlzdC5hZGQoJ3llYXInKTtcclxuICBkaXZZZWFyLnRleHRDb250ZW50ID0gdGV4dG87XHJcblxyXG4gIHJldHVybiBkaXZZZWFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudCgpIHtcclxuICBjb25zdCB0YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgY29uc3QgdGV4dG8gPSB0YWcudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgaWYgKHZlcmlmaWNhckRpdkV4aXN0ZW50ZSh0ZXh0bykgPT09IGZhbHNlKSB7XHJcbiAgICAgIGNvbnN0IGRpdlllYXIgPSBjcmlhckRpdlllYXIodGV4dG8pO1xyXG4gICAgICBjb25zdCB0aW1lbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZScpO1xyXG4gICAgICB0aW1lbGluZS5hcHBlbmRDaGlsZChkaXZZZWFyKTtcclxuXHJcbiAgICAgIGFkZFllYXIodGV4dG8pO1xyXG4gICAgICAvLyBSZW1vdmVyIG8gZXZlbnQgbGlzdGVuZXIgYXDDs3MgbyBwcmltZWlybyBjbGlxdWVcclxuICAgICAgdGFnLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xyXG4gICAgICBsaXN0ZW5ZZWFycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVmVyaWZpY2FyIHNlIG8gZXZlbnRvIGFpbmRhIG7Do28gZm9pIGFkaWNpb25hZG9cclxuICBpZiAodGFnKSB7XHJcbiAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJpZmljYXJEaXZFeGlzdGVudGUodGV4dG8pIHtcclxuICBjb25zdCBkaXZzRXhpc3RlbnRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVsaW5lIC55ZWFyJyk7XHJcblxyXG4gIGZvciAoY29uc3QgZGl2RXhpc3RlbnRlIG9mIGRpdnNFeGlzdGVudGUpIHtcclxuICAgIGlmIChkaXZFeGlzdGVudGUudGV4dENvbnRlbnQgPT09IHRleHRvKSB7XHJcbiAgICAgIHJldHVybiB0cnVlOyAvLyBKw6EgZXhpc3RlIHVtYSBkaXYgY29tIG8gbWVzbW8gdGV4dG9cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTsgLy8gTmVuaHVtYSBkaXYgZW5jb250cmFkYSBjb20gbyBtZXNtbyB0ZXh0b1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0ZW5ZZWFycygpIHtcclxuICB2YXIgeWVhckRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueWVhcicpO1xyXG4gIHllYXJEaXZzLmZvckVhY2goZnVuY3Rpb24gKGRpdikge1xyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXInKTtcclxuICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICBjcmVhdGVDYXB0Y2hhKGRpdi50ZXh0Q29udGVudCk7XHJcbiAgICAgIGlmKGNoZWNrSnVtcHNjYXJlKCkgPT09IGZhbHNlKXtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcGxheVBvcHVwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlQb3B1cCgpIHtcclxuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gIGlmIChzY3JvbGxQb3NpdGlvbiA+PSAoMiAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyAxMDApIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgdmFyIHBvcHVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2YXIgcG9wdXBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHBvcHVwQnV0dG9uLnRleHRDb250ZW50ID0gJ0ZFQ0hBUic7XHJcbiAgICBcclxuICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBwb3B1cDtcclxuXHJcbiAgICBwb3B1cERpdi5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWltZycpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwb3B1cERpdik7XHJcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocG9wdXBCdXR0b24pO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBsYXlQb3B1cCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcGxheUhhcHB5KCk7XHJcbiAgICAgIGNsb3NlUG9wdXAoKVxyXG4gICAgICBwb3B1cERpdi5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH0sIDMwMDApO1xyXG4gICAgY2hhbmdlSnVtcHNjYXJlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xyXG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwJyk7XHJcbiAgY29uc3QgcG9wdXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAgYnV0dG9uJyk7XHJcblxyXG4gIHBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHN0b3BIYXBweSgpO1xyXG4gIH0pO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9