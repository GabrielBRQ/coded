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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/dnLeaks.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/dnLeaks.css ***!
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
  justify-content: center;
  background-color: rgb(24, 24, 24);
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
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

.img-byte {
  width: 80%;
}

.blur {
  position: absolute;
  width: 100vw;
  height: 190vh;
  opacity: 1;
  display: none;
  background-color: black;
  top: 0;
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

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.content2014 {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imgNotFound {
  height: 15vh;
}

@keyframes moveImage {
  from {
    right: -25vh; /* Posição inicial */
  }
  to {
    right: -55vh; /* Posição final */
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/dnLeaks.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,4CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,4CAAkD;AACpD;;AAEA;EACE,sBAAsB;EACtB,4CAAwD;AAC1D;;AAEA;EACE,qBAAqB;EACrB,4CAA6C;AAC/C;;AAEA;EACE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,iCAAiC;EACjC,aAAa;EACb,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,YAAY;EACZ,iCAAiC;EACjC,YAAY;EACZ,iCAAiC;EACjC,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,2BAA2B;EAC3B,wBAAwB;EACxB,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,kCAAkC;EAClC,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,MAAM;EACN,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,+BAA+B;EAC/B,YAAY;EACZ,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,YAAY,EAAE,oBAAoB;EACpC;EACA;IACE,YAAY,EAAE,kBAAkB;EAClC;AACF","sourcesContent":["@font-face {\r\n  font-family: roboto;\r\n  src: url(../font/Roboto/Roboto-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: bebas;\r\n  src: url(../font/Bebas_Neue/BebasNeue-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: oldMoodle;\r\n  src: url(../font/Old_Standard_TT/OldStandardTT-Bold.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: compactz;\r\n  src: url(../font/compact/Compact-Regular.ttf);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: roboto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgb(24, 24, 24);\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.timeWarp {\r\n  font-family: oldMoodle;\r\n  width: calc(90vw - 10px);\r\n  height: 16vh;\r\n  background-color: rgb(43, 42, 42);\r\n  color: white;\r\n  border: solid 1vh rgb(85, 85, 85);\r\n  border-top: none;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\n.tw-center {\r\n  width: 55vw;\r\n}\r\n\r\n.tw-year,\r\n.tw-title {\r\n  font-size: 4vh;\r\n}\r\n\r\n.url {\r\n  font-family: roboto;\r\n  width: 100%;\r\n  height: 3vh;\r\n  background-color: aliceblue;\r\n  border: solid .3vh black;\r\n  opacity: 0.8;\r\n  color: black;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.timeline {\r\n  width: 100%;\r\n  height: 7vh;\r\n  border: solid .7vh rgb(43, 42, 42);\r\n  display: flex;\r\n}\r\n\r\n.year {\r\n  font-family: roboto;\r\n  height: 100%;\r\n  width: 3.5%;\r\n  border: solid .5vh rgb(85, 85, 85);\r\n  font-size: 1.5vh;\r\n  padding: .7vh;\r\n  cursor: pointer;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.year:hover {\r\n  background-color: rgb(70, 68, 68);\r\n}\r\n\r\n.img-byte {\r\n  width: 80%;\r\n}\r\n\r\n.blur {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 190vh;\r\n  opacity: 1;\r\n  display: none;\r\n  background-color: black;\r\n  top: 0;\r\n  transition: opacity 1.5s ease-in-out;\r\n}\r\n\r\n.monkey-type {\r\n  position: fixed;\r\n  display: grid;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  grid-template-rows: 1fr 3fr 2fr;\r\n  height: 40vh;\r\n  width: 50vw;\r\n  background-color: rgb(65, 62, 62);\r\n  border-radius: 5px;\r\n  color: black;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.monkey-title {\r\n  color: rgb(36, 36, 36);\r\n  font-family: roboto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.content .monkey-title p {\r\n  padding: 0;\r\n}\r\n\r\n.monkey-title p:first-child { \r\n  font-size: 4vh;\r\n}\r\n\r\n.monkey-title p:last-child {\r\n  font-size: 2.8vh;\r\n}\r\n\r\n.letter-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 8vh;\r\n}\r\n\r\n.correct {\r\n  color: green;\r\n}\r\n\r\n.incorrect {\r\n  color: brown;\r\n}\r\n\r\n.progress-bar {\r\n  height: 20px;\r\n  background-color: rgb(18, 197, 18);\r\n  width: 0;\r\n}\r\n\r\n.not-found {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n}\r\n\r\n.content2014 {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.content {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.imgNotFound {\r\n  height: 15vh;\r\n}\r\n\r\n@keyframes moveImage {\r\n  from {\r\n    right: -25vh; /* Posição inicial */\r\n  }\r\n  to {\r\n    right: -55vh; /* Posição final */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/css/dnLeaks.css":
/*!*****************************!*\
  !*** ./src/css/dnLeaks.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dnLeaks_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dnLeaks.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/dnLeaks.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dnLeaks_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dnLeaks_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dnLeaks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dnLeaks_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"dnLeaks": 0
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
/*!********************************!*\
  !*** ./src/scripts/dnLeaks.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_dnLeaks_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/dnLeaks.css */ "./src/css/dnLeaks.css");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");
/* harmony import */ var _captchaV2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captchaV2.js */ "./src/scripts/captchaV2.js");





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
    (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.createYears)();
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
      (0,_captchaV2_js__WEBPACK_IMPORTED_MODULE_3__.createCaptcha)(div.textContent);
    });
  });
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5MZWFrcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLHdLQUFpRTtBQUM3Ryw0Q0FBNEMsa0pBQXNEO0FBQ2xHLDRDQUE0Qyw0SkFBMkQ7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFV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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZ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Q3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ3NCO0FBQ2U7QUFDbEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFXO0FBQ2Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDREQUFhO0FBQ25CLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2F0bzEtdjEuY3NzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9kbkxlYWtzLmNzcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2F0bzEtdjEuY3NzP2FmZjQiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2RuTGVha3MuY3NzP2FhM2EiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2F0bzEtdjEuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9hdWRpby5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2NhcHRjaGFWMi5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvdGltZU1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2RuTGVha3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250L2NvbXBhY3QvQ29tcGFjdC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvTm92YV9Sb3VuZC9Ob3ZhUm91bmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGhlaWdodDogMTZ2aDtcclxufVxyXG5cclxuLmNoYXB0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMzB2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jaGFwdGVyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogNXZoO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmNoYXB0ZXIgYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDN2aDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vb2RsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb29kbGUtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE3dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XHJcbn1cclxuXHJcbi5tb29kbGUtdGl0bGUgcCB7XHJcbiAgZm9udC1zaXplOiAxNnZoO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiA0dmg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9ucyB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbnMgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDIuMXZoO1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgYm9yZGVyOiBzb2xpZCAuNHZoO1xyXG4gIGJvcmRlci1jb2xvcjogI2NjYyAjOTk5ICM5OTkgI2NjYztcclxuICBoZWlnaHQ6IDV2aDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMCAuOHZoIDAgLjh2aDtcclxufVxyXG5cclxuLnByaXZhY3kge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgZm9udC1zaXplOiAydmg7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG59XHJcblxyXG4udGltZVdhcnAge1xyXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XHJcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xyXG4gIGhlaWdodDogMTZ2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4udHctY2VudGVyIHtcclxuICB3aWR0aDogNTV2dztcclxufVxyXG5cclxuLnR3LXllYXIsXHJcbi50dy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbn1cclxuXHJcbi51cmwge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMi41dmg7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ueWVhciB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDMuNSU7XHJcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcclxuICBmb250LXNpemU6IDEuNXZoO1xyXG4gIHBhZGRpbmc6IC43dmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi55ZWFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTEwdmg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm5ld3MtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcclxufVxyXG5cclxuLm5ld3MtdGl0bGUyMDE2IHtcclxuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzE1NmFlYztcclxufVxyXG5cclxuLm5ld3MtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA3dmg7XHJcbn1cclxuXHJcbi5uZXdzLWRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXZoO1xyXG59XHJcblxyXG4uaW1nLW5ld3Mge1xyXG4gIGhlaWdodDogMTJ2aDtcclxuICB3aWR0aDogMTZ2aDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXI6IHNvbGlkIC41dmggZ3JheTtcclxufVxyXG5cclxuLm5ld3MyMDE0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnZoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5ld3MyMDE0IHAge1xyXG4gIGZvbnQtc2l6ZTogMi40dmg7XHJcbiAgd2lkdGg6IDQwdmg7XHJcbn1cclxuXHJcbi5uZXdzMjAxNiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDJ2aDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmV3czIwMTYgcCB7XHJcbiAgZm9udC1zaXplOiAyLjR2aDtcclxuICB3aWR0aDogNDV2aDtcclxufVxyXG5cclxuLmRpYWxvZ3VlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxODMsIDIwMSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjV2aDtcclxufVxyXG5cclxuLmJsdXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxOTB2aDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vbmtleS10eXBlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb25rZXktdGl0bGUge1xyXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG59XHJcblxyXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAyLjh2aDtcclxufVxyXG5cclxuLmxldHRlci1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDh2aDtcclxufVxyXG5cclxuLmNvcnJlY3Qge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmluY29ycmVjdCB7XHJcbiAgY29sb3I6IGJyb3duO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcclxuICB3aWR0aDogMDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9hdG8xLXYxLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUE2QztBQUMvQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIs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QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCOztFQUV2QixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBub3ZhUm91bmQ7XFxyXFxuICBzcmM6IHVybCguLi9mb250L05vdmFfUm91bmQvTm92YVJvdW5kLVJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgaGVpZ2h0OiAxNnZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hhcHRlciB7XFxyXFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAzMHZ3O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxMnZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMi4xcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXB0ZXIgc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDV2aDtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXB0ZXIgYnV0dG9uIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDN2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9vZGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vb2RsZS10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTd2aDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxyXFxufVxcclxcblxcclxcbi5tb29kbGUtdGl0bGUgcCB7XFxyXFxuICBmb250LXNpemU6IDE2dmg7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIHdpZHRoOiA0MHZ3O1xcclxcbiAgaGVpZ2h0OiA0dmg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnV0dG9ucyB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgbWFyZ2luLXRvcDogMXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi4xdmg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuNHZoO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjY2NjICM5OTkgIzk5OSAjY2NjO1xcclxcbiAgaGVpZ2h0OiA1dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIC44dmggMCAuOHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpdmFjeSB7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBmb250LXNpemU6IDJ2aDtcXHJcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVXYXJwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxyXFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxyXFxuICBoZWlnaHQ6IDE2dmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6MDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi50dy1jZW50ZXIge1xcclxcbiAgd2lkdGg6IDU1dnc7XFxyXFxufVxcclxcblxcclxcbi50dy15ZWFyLFxcclxcbi50dy10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDR2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnVybCB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDN2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogN3ZoO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi55ZWFyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMy41JTtcXHJcXG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XFxyXFxuICBmb250LXNpemU6IDEuNXZoO1xcclxcbiAgcGFkZGluZzogLjd2aDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ueWVhcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDExMHZoO1xcclxcbiAgd2lkdGg6IDkwdnc7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uZXdzLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cy10aXRsZTIwMTYge1xcclxcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcXHJcXG4gIGZvbnQtc2l6ZTogNHZoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzE1NmFlYztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3MtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1dmg7XFxyXFxufVxcclxcblxcclxcbi5pbWctbmV3cyB7XFxyXFxuICBoZWlnaHQ6IDEydmg7XFxyXFxuICB3aWR0aDogMTZ2aDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5uZXdzMjAxNCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnZoO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3czIwMTQgcCB7XFxyXFxuICBmb250LXNpemU6IDIuNHZoO1xcclxcbiAgd2lkdGg6IDQwdmg7XFxyXFxufVxcclxcblxcclxcbi5uZXdzMjAxNiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnZoO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3czIwMTYgcCB7XFxyXFxuICBmb250LXNpemU6IDIuNHZoO1xcclxcbiAgd2lkdGg6IDQ1dmg7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2d1ZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTgzLCAyMDEpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxOTB2aDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdHlwZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxyXFxuICBoZWlnaHQ6IDQwdmg7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdGl0bGUge1xcclxcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXFxyXFxuICBmb250LXNpemU6IDR2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xcclxcbiAgZm9udC1zaXplOiAyLjh2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlci1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogOHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ycmVjdCB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5pbmNvcnJlY3Qge1xcclxcbiAgY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZ3Jlc3MtYmFyIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XFxyXFxuICB3aWR0aDogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L0JlYmFzX05ldWUvQmViYXNOZXVlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogYmViYXM7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnRpbWVXYXJwIHtcclxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xyXG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcclxuICBoZWlnaHQ6IDE2dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udHctY2VudGVyIHtcclxuICB3aWR0aDogNTV2dztcclxufVxyXG5cclxuLnR3LXllYXIsXHJcbi50dy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbn1cclxuXHJcbi51cmwge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMi41dmg7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ueWVhciB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDMuNSU7XHJcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcclxuICBmb250LXNpemU6IDEuNXZoO1xyXG4gIHBhZGRpbmc6IC43dmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi55ZWFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XHJcbn1cclxuXHJcbi5pbWctYnl0ZSB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmJsdXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxOTB2aDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vbmtleS10eXBlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb25rZXktdGl0bGUge1xyXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG59XHJcblxyXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAyLjh2aDtcclxufVxyXG5cclxuLmxldHRlci1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDh2aDtcclxufVxyXG5cclxuLmNvcnJlY3Qge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmluY29ycmVjdCB7XHJcbiAgY29sb3I6IGJyb3duO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLm5vdC1mb3VuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGVudDIwMTQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWdOb3RGb3VuZCB7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmVJbWFnZSB7XHJcbiAgZnJvbSB7XHJcbiAgICByaWdodDogLTI1dmg7IC8qIFBvc2nDp8OjbyBpbmljaWFsICovXHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHJpZ2h0OiAtNTV2aDsgLyogUG9zacOnw6NvIGZpbmFsICovXHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9kbkxlYWtzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNENBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixNQUFNO0VBQ04sb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsWUFBWSxFQUFFLG9CQUFvQjtFQUNwQztFQUNBO0lBQ0UsWUFBWSxFQUFFLGtCQUFrQjtFQUNsQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIHNyYzogdXJsKC4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcclxcbiAgc3JjOiB1cmwoLi4vZm9udC9CZWJhc19OZXVlL0JlYmFzTmV1ZS1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXHJcXG4gIHNyYzogdXJsKC4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXHJcXG4gIHNyYzogdXJsKC4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50aW1lV2FycCB7XFxyXFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcclxcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xcclxcbiAgaGVpZ2h0OiAxNnZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xcclxcbiAgYm9yZGVyLXRvcDogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udHctY2VudGVyIHtcXHJcXG4gIHdpZHRoOiA1NXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4udHcteWVhcixcXHJcXG4udHctdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxufVxcclxcblxcclxcbi51cmwge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDIuNXZoO1xcclxcbn1cXHJcXG5cXHJcXG4udGltZWxpbmUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDd2aDtcXHJcXG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ueWVhciB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDMuNSU7XFxyXFxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xcclxcbiAgZm9udC1zaXplOiAxLjV2aDtcXHJcXG4gIHBhZGRpbmc6IC43dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnllYXI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWJ5dGUge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsdXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxOTB2aDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdHlwZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxyXFxuICBoZWlnaHQ6IDQwdmg7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdGl0bGUge1xcclxcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXFxyXFxuICBmb250LXNpemU6IDR2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xcclxcbiAgZm9udC1zaXplOiAyLjh2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmxldHRlci1kaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogOHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ycmVjdCB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5pbmNvcnJlY3Qge1xcclxcbiAgY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZ3Jlc3MtYmFyIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XFxyXFxuICB3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1mb3VuZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQyMDE0IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZ05vdEZvdW5kIHtcXHJcXG4gIGhlaWdodDogMTV2aDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBtb3ZlSW1hZ2Uge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHJpZ2h0OiAtMjV2aDsgLyogUG9zacOnw6NvIGluaWNpYWwgKi9cXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgcmlnaHQ6IC01NXZoOyAvKiBQb3Npw6fDo28gZmluYWwgKi9cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0bzEtdjEuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdG8xLXYxLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kbkxlYWtzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZG5MZWFrcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vY3NzL2F0bzEtdjEuY3NzJztcclxuaW1wb3J0IHtcclxuICBjaGVja0NoYXB0ZXIxLFxyXG4gIGNoYW5nZUNoYXB0ZXIxLFxyXG4gIGNyZWF0ZVllYXJzLFxyXG4gIGdldFllYXIsXHJcbn0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UtY29udHJvbC5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEgfSBmcm9tICcuL2NhcHRjaGFWMi5qcyc7XHJcbmltcG9ydCB7IHRpbWVUcmF2ZWxNb29kbGUgfSBmcm9tICcuL3RpbWVNYWNoaW5lLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdGltZVRyYXZlbE1vb2RsZShnZXRZZWFyKCkpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICBpZiAoY2hlY2tDaGFwdGVyMSgpID09PSBmYWxzZSkge1xyXG4gICAgY29uc3Qgc3RhcnRDaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XHJcblxyXG4gICAgc3RhcnRDaGFwdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBzdGFydENoYXB0ZXIuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xyXG4gICAgICB2YXIgY2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFwdGVyJyk7XHJcbiAgICAgIGNoYXB0ZXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIGNoYW5nZUNoYXB0ZXIxKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNoYXB0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBhY3RpdmVDb250ZW50KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XHJcbiAgICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9LCA1NTAwKTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgdmFyIGNoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcHRlcicpO1xyXG4gICAgY2hhcHRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgYWN0aXZlQ29udGVudCgpO1xyXG4gIH1cclxuICBcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGNyZWF0ZVllYXJzKCk7XHJcbiAgfSwgMTUwMCk7XHJcblxyXG4gIHZhciBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1idXR0b25zIGJ1dHRvbicpO1xyXG5cclxuICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xyXG4gICAgICBkaWFsb2d1ZS50ZXh0Q29udGVudCA9ICdOw6NvIGZ1bmNpb25hLi4uJztcclxuICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBnZXROZXdzKCk7XHJcbiAgICBsaXN0ZW5ZZWFycygpO1xyXG4gIH0sIDQwMDApO1xyXG4gIFxyXG4gXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0TmV3cygpIHtcclxuICB2YXIgdHdZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcclxuICBpZiAodHdZZWFyLnRleHRDb250ZW50ID09PSAnMjAxNCcpIHtcclxuICAgIHZhciBuZXdzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MyMDE0Jyk7XHJcblxyXG4gICAgbmV3c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2NsaWNvdSAyMDE0Jyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vam95Sm91cm5hbC5odG1sJztcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2YXIgbmV3c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzMjAxNicpO1xyXG5cclxuICAgIG5ld3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljb3UgMjAxNicpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2J5dGVCdXp6Lmh0bWwnO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmVDb250ZW50KCkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJztcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMTB2aCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RlblllYXJzKCkge1xyXG4gIHZhciB5ZWFyRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55ZWFyJyk7XHJcbiAgeWVhckRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZGl2KSB7XHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xyXG4gICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIGNyZWF0ZUNhcHRjaGEoZGl2LnRleHRDb250ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGdldE5ld3NcclxufSIsImZ1bmN0aW9uIHBsYXlXcm9uZygpIHtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjbGFFcnJhZGEnKTtcclxuICBhdWRpby52b2x1bWUgPSAwLjc7XHJcbiAgYXVkaW8ucGxheSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5UmlnaHQoKSB7XHJcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhQ29ycmV0YScpO1xyXG4gIGF1ZGlvLnZvbHVtZSA9IDAuMjtcclxuICBhdWRpby5wbGF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlFYXJ0aHF1YWtlKHZvbHVtZSwgdHlwZSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpO1xyXG4gIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZTtcclxuICBhdWRpby5wbGF5KCk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodHlwZSk7XHJcblxyXG4gIGlmICh0eXBlICE9PSAnYmlnLXNoYWtlJykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHR5cGUpO1xyXG4gICAgfSwgNzAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xyXG4gIGlmIChhdWRpb0VsZW1lbnQudm9sdW1lID49IDAuNDUpIHtcclxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjQ1O1xyXG4gICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgIHRpbWVXYXJwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSArPSAwLjA1O1xyXG4gICAgaW5jcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcclxuICB9LCA4MDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpIHtcclxuICBpZiAoYXVkaW9FbGVtZW50LnZvbHVtZSA8PSAwLjEpIHtcclxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjA1O1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgLT0gMC4wNztcclxuICAgIGRlY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCk7XHJcbiAgfSwgMzAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUhhcHB5KCkge1xyXG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXBweScpO1xyXG4gIGF1ZGlvLnZvbHVtZSA9IDE7XHJcbiAgYXVkaW8ucGxheSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wSGFwcHkoKSB7XHJcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhcHB5Jyk7XHJcbiAgYXVkaW8ucGF1c2UoKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHBsYXlSaWdodCwgcGxheVdyb25nLCBwbGF5RWFydGhxdWFrZSwgZGVjcmVhc2VWb2x1bWUsIGluY3JlYXNlVm9sdW1lLCBwbGF5SGFwcHksIHN0b3BIYXBweSB9O1xyXG4iLCJpbXBvcnQgeyBwbGF5UmlnaHQsIHBsYXlXcm9uZyB9IGZyb20gJy4vYXVkaW8uanMnO1xyXG5pbXBvcnQge1xyXG4gIHRpbWVUcmF2ZWxKb3ksXHJcbiAgdGltZVRyYXZlbE1vb2RsZSxcclxuICB0aW1lVHJhdmVsQnV6eixcclxuICB0aW1lVHJhdmVsTGVha1xyXG59IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xyXG5pbXBvcnQgeyBjaGFuZ2VZZWFyIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UtY29udHJvbC5qcyc7XHJcbmltcG9ydCB7IGdldE5ld3MgfSBmcm9tICcuL2F0bzEtdjEuanMnO1xyXG5cclxubGV0IGxhc3RQcmVzc2VkS2V5ID0gJyc7XHJcbmxldCB5ZWFyVG9UcmF2ZWwgPSAnJztcclxubGV0IGNvcnJlY3RDb3VudCA9IDA7XHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcHRjaGEoZGl2WWVhcikge1xyXG4gIHllYXJUb1RyYXZlbCA9IGRpdlllYXI7XHJcbiAgdmFyIHllYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xyXG4gIHllYXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIGRpc2FibGVTY3JvbGwoKTtcclxuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb2RsZScpO1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ2RhcmtOZXRMZWFrcycpIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGNoYScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgfVxyXG4gICAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdHlwZVwiLlxyXG4gICAgdmFyIG1vbmtleVR5cGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vbmtleVR5cGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXR5cGUnKTtcclxuXHJcbiAgICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10aXRsZVwiIGUgZGVmaW5lIG8gdGV4dG9cclxuICAgIHZhciBtb25rZXlUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9ua2V5VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXRpdGxlJyk7XHJcbiAgICB2YXIgY2FwdGNoYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNhcHRjaGEudGV4dENvbnRlbnQgPSAnQ0FQVENIQSc7XHJcbiAgICB2YXIgY2FwdGNoYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY2FwdGNoYURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ3Byb3ZlIHN1YSBodW1hbmlkYWRlJztcclxuICAgIG1vbmtleVRpdGxlRGl2LmFwcGVuZENoaWxkKGNhcHRjaGEpO1xyXG4gICAgbW9ua2V5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2FwdGNoYURlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAvLyBDcmlhIGFzIGRpdnMgaW50ZXJuYXMgY29tIGFzIGNsYXNzZXMgXCJsZXR0ZXJcIiBlIFwicHJvZ3Jlc3MtYmFyXCJcclxuICAgIHZhciBsZXR0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItZGl2Jyk7XHJcblxyXG4gICAgdmFyIGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ2xldHRlcicpO1xyXG4gICAgdmFyIG51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbnVtYmVyRGl2LmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xyXG5cclxuICAgIHZhciBwcm9ncmVzc0JhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvZ3Jlc3NCYXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XHJcblxyXG4gICAgLy8gQWRpY2lvbmEgYXMgZGl2cyBpbnRlcm5hcyDDoCBkaXYgXCJtb25rZXktdHlwZVwiXHJcbiAgICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKG1vbmtleVRpdGxlRGl2KTtcclxuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobGV0dGVyRGl2KTtcclxuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJEaXYpO1xyXG4gICAgbGV0dGVyRGl2LmFwcGVuZENoaWxkKGxldHRlcik7XHJcbiAgICBsZXR0ZXJEaXYuYXBwZW5kQ2hpbGQobnVtYmVyRGl2KTtcclxuXHJcbiAgICAvLyBBZGljaW9uYSBhIGRpdiBcIm1vbmtleS10eXBlXCIgYW8gY29udGVudCBleGlzdGVudGVcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9ua2V5VHlwZURpdik7XHJcbiAgfVxyXG4gIGNvcnJlY3RDb3VudCA9IDA7XHJcbiAgdXBkYXRlTGV0dGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTGV0dGVyKCkge1xyXG4gIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCk7XHJcbiAgcmV0dXJuIGFscGhhYmV0W3JhbmRvbUluZGV4XTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGV0dGVyKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlS2V5UHJlc3MpO1xyXG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyLWRpdicpO1xyXG5cclxuICBsYXN0UHJlc3NlZEtleSA9ICcnO1xyXG4gIGNvbnN0IHJhbmRvbUxldHRlciA9IGdlbmVyYXRlUmFuZG9tTGV0dGVyKCk7XHJcbiAgbGV0dGVyRGl2LnRleHRDb250ZW50ID0gcmFuZG9tTGV0dGVyO1xyXG4gIGxldHRlckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XHJcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5sZXR0ZXItZGl2Jyk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLnByb2dyZXNzLWJhcicpO1xyXG4gIGNvbnN0IG1vbmtleVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUnKTtcclxuXHJcbiAgY29uc3QgcHJlc3NlZEtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XHJcbiAgY29uc3QgY3VycmVudExldHRlciA9IGxldHRlckRpdi50ZXh0Q29udGVudDtcclxuXHJcbiAgaWYgKFxyXG4gICAgKHByZXNzZWRLZXkudG9VcHBlckNhc2UoKSA9PT0gY3VycmVudExldHRlciB8fFxyXG4gICAgICBwcmVzc2VkS2V5LnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRMZXR0ZXIpICYmXHJcbiAgICBwcmVzc2VkS2V5ICE9PSBsYXN0UHJlc3NlZEtleVxyXG4gICkge1xyXG4gICAgbGFzdFByZXNzZWRLZXkgPSBwcmVzc2VkS2V5O1xyXG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcclxuICAgIHBsYXlSaWdodCgpO1xyXG4gICAgY29ycmVjdENvdW50Kys7XHJcblxyXG4gICAgLy8gQXR1YWxpemEgYSBsYXJndXJhIGRhIGJhcnJhIGRlIHByb2dyZXNzb1xyXG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBjb3JyZWN0Q291bnQgKiA4ICsgJyUnO1xyXG5cclxuICAgIGlmIChjb3JyZWN0Q291bnQgPT09IDEyKSB7XHJcbiAgICAgIG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcclxuICAgICAgeWVhckJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XHJcbiAgICAgICAgdGltZVRyYXZlbE1vb2RsZSh5ZWFyVG9UcmF2ZWwpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgZ2V0TmV3cygpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnRpdGxlID09PSAnSk9ZIEpPVVJOQUwnKSB7XHJcbiAgICAgICAgdGltZVRyYXZlbEpveSh5ZWFyVG9UcmF2ZWwpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnRpdGxlID09PSAnQnl0ZSBCdXp6Jyl7XHJcbiAgICAgICAgdGltZVRyYXZlbEJ1enooeWVhclRvVHJhdmVsKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aW1lVHJhdmVsTGVhayh5ZWFyVG9UcmF2ZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNoYW5nZVllYXIoeWVhclRvVHJhdmVsKTtcclxuICAgICAgZW5hYmxlU2Nyb2xsKCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdXBkYXRlTGV0dGVyKCk7XHJcbiAgICB9LCAyNTUpO1xyXG4gIH0gZWxzZSBpZiAobW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcclxuICAgIHBsYXlXcm9uZygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldHRlckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb1RvcCk7XHJcbn1cclxuXHJcbi8vIEZ1bsOnw6NvIHBhcmEgaGFiaWxpdGFyIG8gc2Nyb2xsXHJcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcclxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9Ub3ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcclxuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNhcHRjaGEsIHVwZGF0ZUxldHRlciB9O1xyXG4iLCJmdW5jdGlvbiBzYXZlU3RhdHNMb2NhbChqdW1wc2NhcmUsIGNoYXB0ZXIxLCB5ZWFycywgY3VycmVudFllYXIpIHtcclxuICAgIGNvbnN0IHN0YXRzID0geyBqdW1wc2NhcmUsIGNoYXB0ZXIxLCB5ZWFycywgY3VycmVudFllYXJ9O1xyXG5cclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuICAgIGdhbWVTdGF0cy5wdXNoKHN0YXRzKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmVyaWZ5TmV3VXNlcigpIHtcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuICAgIGlmIChnYW1lU3RhdHMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgIHNhdmVTdGF0c0xvY2FsKGZhbHNlLCBmYWxzZSwgWzIwMTRdLCAnMjAxNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VKdW1wc2NhcmUoKSB7XHJcbiAgICAvLyBPYnTDqW0gb3MgZGFkb3MgYXJtYXplbmFkb3MgbG9jYWxtZW50ZSBjb20gYSBjaGF2ZSAnZ2FtZVN0YXRzJ1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG5cclxuICAgIC8vIFZlcmlmaWNhIHNlIGjDoSBwZWxvIG1lbm9zIHVtIGNvbmp1bnRvIGRlIGVzdGF0w61zdGljYXMgbm8gYXJyYXlcclxuICAgIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uanVtcHNjYXJlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VDaGFwdGVyMSgpIHtcclxuICAgIC8vIE9idMOpbSBvcyBkYWRvcyBhcm1hemVuYWRvcyBsb2NhbG1lbnRlIGNvbSBhIGNoYXZlICdnYW1lU3RhdHMnXHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcblxyXG4gICAgLy8gVmVyaWZpY2Egc2UgaMOhIHBlbG8gbWVub3MgdW0gY29uanVudG8gZGUgZXN0YXTDrXN0aWNhcyBubyBhcnJheVxyXG4gICAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jaGFwdGVyMSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tKdW1wc2NhcmUoKSB7XHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcblxyXG4gICAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uanVtcHNjYXJlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDaGFwdGVyMSgpIHtcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuXHJcbiAgICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAoZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jaGFwdGVyMSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVllYXJzKCkge1xyXG4gICAgY29uc3QgdGltZUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUnKTtcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuICAgIGxldCBhbGxZZWFycyA9IGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0ueWVhcnM7XHJcblxyXG4gICAgaWYgKHRpbWVMaW5lLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgLy8gSXRlcmEgc29icmUgY2FkYSBhbm8gbm8gYXJyYXkgYWxsWWVhcnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFllYXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIENyaWEgdW1hIGRpdiBjb20gYSBjbGFzc2UgJ3llYXInIGUgbyB0ZXh0byBpZ3VhbCBhbyB2YWxvciBubyBhcnJheVxyXG4gICAgICAgICAgICBjb25zdCB5ZWFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHllYXJEaXYuY2xhc3NMaXN0LmFkZCgneWVhcicpO1xyXG4gICAgICAgICAgICB5ZWFyRGl2LnRleHRDb250ZW50ID0gYWxsWWVhcnNbaV07XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQWRpY2lvbmEgYSBkaXYgYW8gZWxlbWVudG8gdGltZUxpbmVcclxuICAgICAgICAgICAgdGltZUxpbmUuYXBwZW5kQ2hpbGQoeWVhckRpdik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRZZWFyKG5ld1llYXIpIHtcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuICAgIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0ueWVhcnMucHVzaChuZXdZZWFyKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRZZWFyKCkge1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG5cclxuICAgIHJldHVybiBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmN1cnJlbnRZZWFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VZZWFyKG5ld1llYXIpIHtcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuXHJcbiAgICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmN1cnJlbnRZZWFyID0gbmV3WWVhcjtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHZlcmlmeU5ld1VzZXIsIGNoYW5nZUp1bXBzY2FyZSwgY2hhbmdlQ2hhcHRlcjEsIGNoZWNrSnVtcHNjYXJlLCBjaGVja0NoYXB0ZXIxLCBjcmVhdGVZZWFycywgYWRkWWVhciwgZ2V0WWVhciwgY2hhbmdlWWVhclxyXG59IiwiZnVuY3Rpb24gdGltZVRyYXZlbEpveSh0ZXh0Q29udGVudCkge1xyXG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xyXG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcclxuICAgICAgY29uc3QgY3VycmVudFllYXJUZXh0ID0gY3VycmVudFllYXIudGV4dENvbnRlbnQ7XHJcbiAgICAgIGlmIChjdXJyZW50WWVhclRleHQgIT09IHRleHRDb250ZW50KSB7XHJcbiAgICAgICAgZmV0Y2goYC4vam95Sm91cm5hbCR7dGV4dENvbnRlbnR9Lmh0bWxgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgYC5jb250ZW50LSR7dGV4dENvbnRlbnR9YFxyXG4gICAgICAgICAgICApLmlubmVySFRNTDtcclxuICAgICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpbm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpbm8nKTtcclxuXHJcbiAgICAgICAgICAgIGRpbm9zLmZvckVhY2goKGRpbm8pID0+IHtcclxuICAgICAgICAgICAgICBkaW5vLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ICE9PSAnMjAxNCcpIHtcclxuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xyXG4gICAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnY29tcGFjdHonO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS53aWR0aCA9ICc3NXZ3JztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JheSc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5jb2xvciA9ICdibGFjayc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS53aWR0aCA9ICc3MHZ3JztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRZZWFyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfSwgMzAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGltZVRyYXZlbE1vb2RsZSh0ZXh0Q29udGVudCkge1xyXG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xyXG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcclxuICAgICAgY29uc3QgY3VycmVudFllYXJUZXh0ID0gY3VycmVudFllYXIudGV4dENvbnRlbnQ7XHJcbiAgICAgIGlmIChjdXJyZW50WWVhclRleHQgIT09IHRleHRDb250ZW50KSB7XHJcbiAgICAgICAgZmV0Y2goYC4vYXRvMS0ke3RleHRDb250ZW50fS5odG1sYClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1vb2RsZSA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgYC5tb29kbGUke3RleHRDb250ZW50fWBcclxuICAgICAgICAgICAgKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZE1vb2RsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUnKTtcclxuICAgICAgICAgICAgb2xkTW9vZGxlLmlubmVySFRNTCA9IG1vb2RsZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3MgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgICAgICAgIGAubmV3cyR7dGV4dENvbnRlbnR9YFxyXG4gICAgICAgICAgICApLmlubmVySFRNTDtcclxuICAgICAgICAgICAgY29uc3Qgb2xkTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBvbGROZXdzLmlubmVySFRNTCA9IG5ld3M7XHJcblxyXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgIT09ICcyMDE0Jykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgbW9vZGxlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vZGxlLXRpdGxlJyk7XHJcbiAgICAgICAgICAgICAgY29uc3QgaW1nTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctbmV3cycpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzYzNjM2MnO1xyXG4gICAgICAgICAgICAgIGltZ05ld3Muc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgIG1vb2RsZVRpdGxlLnN0eWxlLmZvbnRGYW1pbHkgPSAnbm92YVJvdW5kJztcclxuICAgICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ2NvbXBhY3R6JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG1vb2RsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb2RsZS10aXRsZScpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGltZ05ld3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLW5ld3MnKTtcclxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgaW1nTmV3cy5zdHlsZS5ib3JkZXIgPSAnc29saWQgMC41dmggZ3JheSc7XHJcbiAgICAgICAgICAgICAgbW9vZGxlVGl0bGUuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xyXG4gICAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSwgMTUwMCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCAzMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aW1lVHJhdmVsQnV6eih0ZXh0Q29udGVudCkge1xyXG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xyXG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50WWVhclRleHQgIT09IHRleHRDb250ZW50KTtcclxuICAgICAgZmV0Y2goYC4vYnl0ZUJ1enoke3RleHRDb250ZW50fS5odG1sYClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgIGAuY29udGVudC0ke3RleHRDb250ZW50fWBcclxuICAgICAgICAgICkuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgICAgICAgb2xkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgICAgaWYgKHRleHRDb250ZW50ICE9PSAnMjAxNCcpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB2YXIgaGVhZGVyVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcbiAgICAgICAgICAgIGhlYWRlclRhZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xyXG4gICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMDB2aCc7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXJUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuICAgICAgICAgICAgaGVhZGVyVGFnLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGN1cnJlbnRZZWFyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSwgMTUwMCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCAzMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0aW1lVHJhdmVsTGVhayh0ZXh0Q29udGVudCkge1xyXG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xyXG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50WWVhclRleHQgIT09IHRleHRDb250ZW50KTtcclxuICAgICAgZmV0Y2goYC4vZG5MZWFrcyR7dGV4dENvbnRlbnR9Lmh0bWxgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYC5jb250ZW50JHt0ZXh0Q29udGVudH1gXHJcbiAgICAgICAgICApLmlubmVySFRNTDtcclxuXHJcbiAgICAgICAgICBjb25zdCBvbGRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgIGlmICh0ZXh0Q29udGVudCAhPT0gJzIwMTQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XHJcbiAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnY29tcGFjdHonO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0sIDE1MDApO1xyXG4gICAgfSwgMTUwMCk7XHJcbiAgfSwgMzAwKTtcclxufVxyXG5leHBvcnQgeyB0aW1lVHJhdmVsSm95LCB0aW1lVHJhdmVsTW9vZGxlLCB0aW1lVHJhdmVsQnV6eiwgdGltZVRyYXZlbExlYWsgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZG5MZWFrc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Nzcy9kbkxlYWtzLmNzcyc7XHJcbmltcG9ydCB7IHRpbWVUcmF2ZWxCdXp6IH0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XHJcbmltcG9ydCB7IGdldFllYXIsIGNyZWF0ZVllYXJzIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UtY29udHJvbC5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEgfSBmcm9tICcuL2NhcHRjaGFWMi5qcyc7XHJcblxyXG5mZXRjaCgnLi9hdG8xLXYxLmh0bWwnKVxyXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcclxuXHJcbiAgICAvLyBFeHRyYWlhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG9cclxuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKS5pbm5lckhUTUw7XHJcblxyXG4gICAgLy8gU3Vic3RpdHVhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG8gbmEgcMOhZ2luYSBhbHRlcmFkYVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJykuaW5uZXJIVE1MID0gaGVhZGVyQ29udGVudDtcclxuICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cmwnKTtcclxuICAgIGNyZWF0ZVllYXJzKCk7XHJcbiAgICB1cmwudGV4dENvbnRlbnQgPSAnaHR0cDovL3d3dy5kbmxlYWtzLmNvbS8nO1xyXG4gICAgbGlzdGVuWWVhcnMoKTtcclxuICB9KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBsaXN0ZW5ZZWFycygpO1xyXG4gIH0sIDMwMDApO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGxpc3RlblllYXJzKCkge1xyXG4gIHZhciB5ZWFyRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55ZWFyJyk7XHJcbiAgeWVhckRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZGl2KSB7XHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xyXG4gICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIGNyZWF0ZUNhcHRjaGEoZGl2LnRleHRDb250ZW50KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9