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

.headerAto1 {
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
  display: flex;
  align-items: center;
  gap: 2vh;
}

.url p{
  font-family: roboto;
  width: 95%;
  height: 3vh;
  background-color: aliceblue;
  border: solid .3vh black;
  opacity: 0.8;
  color: black;
  font-size: 2.5vh;
}

.url img {
  background: transparent;
  height: 3vh;
  cursor: pointer;
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
  color: black;
  align-items: center;
  justify-items: center;
}

.monkey-title {
  color: rgb(36, 36, 36);
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
  padding: 0;
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
}`, "",{"version":3,"sources":["webpack://./src/css/ato1-v1.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: roboto;\n  src: url(../font/Roboto/Roboto-Regular.ttf);\n}\n\n@font-face {\n  font-family: oldMoodle;\n  src: url(../font/Old_Standard_TT/OldStandardTT-Bold.ttf);\n}\n\n@font-face {\n  font-family: compactz;\n  src: url(../font/compact/Compact-Regular.ttf);\n}\n\n@font-face {\n  font-family: novaRound;\n  src: url(../font/Nova_Round/NovaRound-Regular.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n.headerAto1 {\n  height: 16vh;\n}\n\n.chapter {\n  font-family: oldMoodle;\n  height: 100vh;\n  width: 30vw;\n  color: white;\n  font-size: 12vh;\n  display: grid;\n  align-content: center;\n  justify-items: center;\n  transition: opacity 2.1s ease-in-out;\n}\n\n.chapter span {\n  font-size: 5vh;\n  opacity: 0.7;\n}\n\n.chapter button {\n  font-family: roboto;\n  background: transparent;\n  border: solid .5vh gray;\n  color: gray;\n  cursor: pointer;\n  font-size: 3vh;\n  width: 100%;\n}\n\n.moodle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.moodle-title {\n  display: flex;\n  align-items: center;\n  height: 17vh;\n  margin-bottom: 5vh;\n  font-family: oldMoodle;\n}\n\n.moodle-title p {\n  font-size: 16vh;\n}\n\ninput {\n  width: 40vw;\n  height: 4vh;\n}\n\n.search-buttons {\n  font-family: Arial, Helvetica, sans-serif;\n  color: #000;\n  margin-top: 1vh;\n}\n\n.search-buttons button {\n  font-size: 2.1vh;\n  background: #eee;\n  border: solid .4vh;\n  border-color: #ccc #999 #999 #ccc;\n  height: 5vh;\n  cursor: pointer;\n  padding: 0 .8vh 0 .8vh;\n}\n\n.privacy {\n  color: gray;\n  font-family: roboto;\n  font-size: 2vh;\n  margin-top: 2vh;\n}\n\n.timeWarp {\n  font-family: oldMoodle;\n  width: calc(90vw - 10px);\n  height: 16vh;\n  background-color: rgb(43, 42, 42);\n  color: white;\n  border: solid 1vh rgb(85, 85, 85);\n  border-top: none;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: absolute;\n  top:0;\n  left: 0;\n}\n\n.tw-center {\n  width: 55vw;\n}\n\n.tw-year,\n.tw-title {\n  font-size: 4vh;\n}\n\n.url {\n  display: flex;\n  align-items: center;\n  gap: 2vh;\n}\n\n.url p{\n  font-family: roboto;\n  width: 95%;\n  height: 3vh;\n  background-color: aliceblue;\n  border: solid .3vh black;\n  opacity: 0.8;\n  color: black;\n  font-size: 2.5vh;\n}\n\n.url img {\n  background: transparent;\n  height: 3vh;\n  cursor: pointer;\n}\n\n.timeline {\n  width: 100%;\n  height: 7vh;\n  border: solid .7vh rgb(43, 42, 42);\n  display: flex;\n}\n\n.year {\n  font-family: roboto;\n  height: 100%;\n  width: 3.5%;\n  border: solid .5vh rgb(85, 85, 85);\n  font-size: 1.5vh;\n  padding: .7vh;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.year:hover {\n  background-color: rgb(70, 68, 68);\n}\n\n.container {\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  height: 110vh;\n  width: 90vw;\n  display: none;\n  opacity: 0;\n  border: none;\n\n  transition: opacity 4s ease-in-out;\n}\n\n.news-title {\n  font-size: 4vh;\n  margin-bottom: 7vh;\n}\n\n.news-title2016 {\n  font-family: novaRound;\n  font-size: 4vh;\n  margin-bottom: 7vh;\n  font-weight: bold;\n  color: #156aec;\n}\n\n.news-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 7vh;\n}\n\n.news-div {\n  display: flex;\n  align-items: center;\n  gap: 5vh;\n}\n\n.img-news {\n  height: 12vh;\n  width: 16vh;\n  object-fit: cover;\n  border: solid .5vh gray;\n}\n\n.news2014 {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  gap: 2vh;\n  cursor: pointer;\n}\n\n.news2014 p {\n  font-size: 2.4vh;\n  width: 40vh;\n}\n\n.news2016 {\n  display: flex;\n  justify-items: center;\n  align-items: center;\n  gap: 2vh;\n  cursor: pointer;\n  color: white;\n}\n\n.news2016 p {\n  font-size: 2.4vh;\n  width: 45vh;\n}\n\n.dialogue {\n  position: fixed;\n  bottom: 0;\n  display: none;\n  width: 100vw;\n  height: 10vh;\n  background-color: rgb(174, 183, 201);\n  margin-bottom: 7vh;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5vh;\n}\n\n.blur {\n  position: absolute;\n  width: 100vw;\n  height: 190vh;\n  opacity: 1;\n  display: none;\n  background-color: black;\n\n  transition: opacity 1.5s ease-in-out;\n}\n\n.monkey-type {\n  position: fixed;\n  display: grid;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  grid-template-rows: 1fr 3fr 2fr;\n  height: 40vh;\n  width: 50vw;\n  background-color: rgb(65, 62, 62);\n  color: black;\n  align-items: center;\n  justify-items: center;\n}\n\n.monkey-title {\n  color: rgb(36, 36, 36);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.content .monkey-title p {\n  padding: 0;\n}\n\n.monkey-title p:first-child { \n  font-size: 4vh;\n  padding: 0;\n}\n\n.monkey-title p:last-child {\n  font-size: 2.8vh;\n}\n\n.letter-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 8vh;\n}\n\n.correct {\n  color: green;\n}\n\n.incorrect {\n  color: brown;\n}\n\n.progress-bar {\n  height: 20px;\n  background-color: rgb(18, 197, 18);\n  width: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/byteBuzz.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/byteBuzz.css ***!
  \********************************************************************/
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
  margin: 0;
  padding: 0;
}

.body-buzz {
  font-family: roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(24, 24, 24);
  height: 110vh;
  width: 100vw;
  overflow-x: hidden;
}

.header-buzz {
  font-family: compactz;
  background-color: #0e3c0b;
  width: 100vw;
  height: 20vh;
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

.content-buzz {
  height: auto;
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  color: white;
  margin: 50px 0 50px 0;
  background-color: rgb(0, 0, 0);
}

.content-title {
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

.content-buzz p {
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
  display: flex;
  align-items: center;
  gap: 2vh;
}

.url p{
  font-family: roboto;
  width: 95%;
  height: 3vh;
  background-color: aliceblue;
  border: solid .3vh black;
  opacity: 0.8;
  color: black;
  font-size: 2.5vh;
}

.url img {
  background: transparent;
  height: 3vh;
  cursor: pointer;
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

p i {
  font-size: 2.7vh;
  cursor: pointer;
  text-decoration: underline;
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
  color: black;
  align-items: center;
  justify-items: center;
}

.monkey-title {
  color: rgb(36, 36, 36);
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
  padding: 0;
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
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

.imgNotFound {
  height: 15vh;
}

.static-img-jumpscare {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  z-index: 3;
}

@keyframes moveImage {
  from {
    right: -25vh; /* Posição inicial */
  }
  to {
    right: -55vh; /* Posição final */
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/byteBuzz.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: roboto;\n  src: url(../font/Roboto/Roboto-Regular.ttf);\n}\n\n@font-face {\n  font-family: bebas;\n  src: url(../font/Bebas_Neue/BebasNeue-Regular.ttf);\n}\n\n@font-face {\n  font-family: oldMoodle;\n  src: url(../font/Old_Standard_TT/OldStandardTT-Bold.ttf);\n}\n\n@font-face {\n  font-family: compactz;\n  src: url(../font/compact/Compact-Regular.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.body-buzz {\n  font-family: roboto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(24, 24, 24);\n  height: 110vh;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n.header-buzz {\n  font-family: compactz;\n  background-color: #0e3c0b;\n  width: 100vw;\n  height: 20vh;\n  color: rgb(175, 175, 175);\n  font-weight: bolder;\n  display: flex;\n  align-items: center;\n}\n\n.joy-title {\n  border-right: solid 2px gray;\n  width: 10vw;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 5vh;\n}\n\n.content-buzz {\n  height: auto;\n  width: 70vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 25px;\n  color: white;\n  margin: 50px 0 50px 0;\n  background-color: rgb(0, 0, 0);\n}\n\n.content-title {\n  font-family: bebas;\n  width: calc(100% - 4vh);\n  font-size: 7vh;\n  padding: 2vh;\n  text-align: center;\n}\n\n.content-title-2016 {\n  font-family: bebas;\n  font-size: 6vh;\n  padding: 2vh;\n  text-align: center;\n}\n\n.img-2016 {\n  height: 50vh;\n  width: auto;\n  opacity: 0.7;\n  filter: grayscale(65%);\n}\n\n.content-buzz p {\n  font-size: 2.5vh;\n  padding: 0 2vh 2vh 2vh;\n}\n\n.timeWarp {\n  font-family: oldMoodle;\n  width: calc(90vw - 10px);\n  height: 16vh;\n  background-color: rgb(43, 42, 42);\n  color: white;\n  border: solid 1vh rgb(85, 85, 85);\n  border-top: none;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.tw-center {\n  width: 55vw;\n}\n\n.tw-year,\n.tw-title {\n  font-size: 4vh;\n}\n\n.url {\n  display: flex;\n  align-items: center;\n  gap: 2vh;\n}\n\n.url p{\n  font-family: roboto;\n  width: 95%;\n  height: 3vh;\n  background-color: aliceblue;\n  border: solid .3vh black;\n  opacity: 0.8;\n  color: black;\n  font-size: 2.5vh;\n}\n\n.url img {\n  background: transparent;\n  height: 3vh;\n  cursor: pointer;\n}\n\n.timeline {\n  width: 100%;\n  height: 7vh;\n  border: solid .7vh rgb(43, 42, 42);\n  display: flex;\n}\n\n.year {\n  font-family: roboto;\n  height: 100%;\n  width: 3.5%;\n  border: solid .5vh rgb(85, 85, 85);\n  font-size: 1.5vh;\n  padding: .7vh;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.year:hover {\n  background-color: rgb(70, 68, 68);\n}\n\np i {\n  font-size: 2.7vh;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.img-byte {\n  width: 80%;\n}\n\n.blur {\n  position: absolute;\n  width: 100vw;\n  height: 190vh;\n  opacity: 1;\n  display: none;\n  background-color: black;\n  top: 0;\n  transition: opacity 1.5s ease-in-out;\n}\n\n.monkey-type {\n  position: fixed;\n  display: grid;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  grid-template-rows: 1fr 3fr 2fr;\n  height: 40vh;\n  width: 50vw;\n  background-color: rgb(65, 62, 62);\n  color: black;\n  align-items: center;\n  justify-items: center;\n}\n\n.monkey-title {\n  color: rgb(36, 36, 36);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.content .monkey-title p {\n  padding: 0;\n}\n\n.monkey-title p:first-child { \n  font-size: 4vh;\n  padding: 0;\n}\n\n.monkey-title p:last-child {\n  font-size: 2.8vh;\n}\n\n.letter-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 8vh;\n}\n\n.correct {\n  color: green;\n}\n\n.incorrect {\n  color: brown;\n}\n\n.progress-bar {\n  height: 20px;\n  background-color: rgb(18, 197, 18);\n  width: 0;\n}\n\n.not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.imgNotFound {\n  height: 15vh;\n}\n\n.static-img-jumpscare {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover;\n  z-index: 3;\n}\n\n@keyframes moveImage {\n  from {\n    right: -25vh; /* Posição inicial */\n  }\n  to {\n    right: -55vh; /* Posição final */\n  }\n}\n"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Old_Standard_TT/OldStandardTT-Bold.ttf */ "./src/font/Old_Standard_TT/OldStandardTT-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../font/compact/Compact-Regular.ttf */ "./src/font/compact/Compact-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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

* {
  margin: 0;
  padding: 0;
}

.body-leaks {
  font-family: roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #181818;
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
  display: flex;
  align-items: center;
  gap: 2vh;
}

.url p{
  font-family: roboto;
  width: 95%;
  height: 3vh;
  background-color: aliceblue;
  border: solid .3vh black;
  opacity: 0.8;
  color: black;
  font-size: 2.5vh;
}

.url img {
  background: transparent;
  height: 3vh;
  cursor: pointer;
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

.blur-final {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  display: none;
  background-color: black;
  top: 0;
  transition: opacity 1.5s ease-in-out;
  z-index: 2;
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
  color: black;
  align-items: center;
  justify-items: center;
}

.monkey-title {
  color: rgb(36, 36, 36);
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
  padding: 0;
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
  align-items: center;
}

.imgNotFoundFinal {
  height: 15vh;
  z-index: -1;
}

.dialogue-final {
  position: fixed;
  bottom: 0;
  display: none;
  width: 100vw;
  height: 10vh;
  background-color: rgb(75, 75, 75);
  margin-bottom: 7vh;
  align-items: center;
  justify-content: center;
  font-size: 2.5vh;
}

.light {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: transparent;
  height: 2vh;
  width: 2vh;
  box-shadow: 0vh 0vh 15vh rgb(190, 190, 190);
  opacity: 0;

  transition: opacity 1s ease-in-out;
}

.static-img{
  position: absolute;
  display: none;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  z-index: 3;
}

.captcha {
  z-index: 2;
}`, "",{"version":3,"sources":["webpack://./src/css/dnLeaks.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: roboto;\n  src: url(../font/Roboto/Roboto-Regular.ttf);\n}\n\n@font-face {\n  font-family: oldMoodle;\n  src: url(../font/Old_Standard_TT/OldStandardTT-Bold.ttf);\n}\n\n@font-face {\n  font-family: compactz;\n  src: url(../font/compact/Compact-Regular.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.body-leaks {\n  font-family: roboto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #181818;\n  height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n.timeWarp {\n  font-family: oldMoodle;\n  width: calc(90vw - 10px);\n  height: 16vh;\n  background-color: rgb(43, 42, 42);\n  color: white;\n  border: solid 1vh rgb(85, 85, 85);\n  border-top: none;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.tw-center {\n  width: 55vw;\n}\n\n.tw-year,\n.tw-title {\n  font-size: 4vh;\n}\n\n.url {\n  display: flex;\n  align-items: center;\n  gap: 2vh;\n}\n\n.url p{\n  font-family: roboto;\n  width: 95%;\n  height: 3vh;\n  background-color: aliceblue;\n  border: solid .3vh black;\n  opacity: 0.8;\n  color: black;\n  font-size: 2.5vh;\n}\n\n.url img {\n  background: transparent;\n  height: 3vh;\n  cursor: pointer;\n}\n\n.timeline {\n  width: 100%;\n  height: 7vh;\n  border: solid .7vh rgb(43, 42, 42);\n  display: flex;\n}\n\n.year {\n  font-family: roboto;\n  height: 100%;\n  width: 3.5%;\n  border: solid .5vh rgb(85, 85, 85);\n  font-size: 1.5vh;\n  padding: .7vh;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.year:hover {\n  background-color: rgb(70, 68, 68);\n}\n\n.blur-final {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  opacity: 1;\n  display: none;\n  background-color: black;\n  top: 0;\n  transition: opacity 1.5s ease-in-out;\n  z-index: 2;\n}\n\n.monkey-type {\n  position: fixed;\n  display: grid;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  grid-template-rows: 1fr 3fr 2fr;\n  height: 40vh;\n  width: 50vw;\n  background-color: rgb(65, 62, 62);\n  color: black;\n  align-items: center;\n  justify-items: center;\n}\n\n.monkey-title {\n  color: rgb(36, 36, 36);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.content .monkey-title p {\n  padding: 0;\n}\n\n.monkey-title p:first-child { \n  font-size: 4vh;\n  padding: 0;\n}\n\n.monkey-title p:last-child {\n  font-size: 2.8vh;\n}\n\n.letter-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 8vh;\n}\n\n.correct {\n  color: green;\n}\n\n.incorrect {\n  color: brown;\n}\n\n.progress-bar {\n  height: 20px;\n  background-color: rgb(18, 197, 18);\n  width: 0;\n}\n\n.not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n}\n\n.content2014 {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.content {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.imgNotFoundFinal {\n  height: 15vh;\n  z-index: -1;\n}\n\n.dialogue-final {\n  position: fixed;\n  bottom: 0;\n  display: none;\n  width: 100vw;\n  height: 10vh;\n  background-color: rgb(75, 75, 75);\n  margin-bottom: 7vh;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5vh;\n}\n\n.light {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: transparent;\n  height: 2vh;\n  width: 2vh;\n  box-shadow: 0vh 0vh 15vh rgb(190, 190, 190);\n  opacity: 0;\n\n  transition: opacity 1s ease-in-out;\n}\n\n.static-img{\n  position: absolute;\n  display: none;\n  height: 100vh;\n  width: 100vw;\n  object-fit: cover;\n  z-index: 3;\n}\n\n.captcha {\n  z-index: 2;\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/byteBuzz.css":
/*!******************************!*\
  !*** ./src/css/byteBuzz.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_byteBuzz_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./byteBuzz.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/byteBuzz.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_byteBuzz_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_byteBuzz_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_byteBuzz_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_byteBuzz_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   getNews: () => (/* binding */ getNews),
/* harmony export */   listenHome: () => (/* binding */ listenHome)
/* harmony export */ });
/* harmony import */ var _css_ato1_v1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/ato1-v1.css */ "./src/css/ato1-v1.css");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");
/* harmony import */ var _captchaV2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captchaV2.js */ "./src/scripts/captchaV2.js");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");






if (document.title === 'Moodle') {
  document.addEventListener('DOMContentLoaded', function () {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL);
    });
    (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_3__.timeTravelMoodle)((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__.getYear)());
    const container = document.querySelector('.container');
    if ((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__.checkChapter1)() === false) {
      const startChapter = document.querySelector('.start');

      startChapter.addEventListener(
        'click',
        function () {
          (0,_audio_js__WEBPACK_IMPORTED_MODULE_4__.playChapter)();
          startChapter.disabled = true;
          history.pushState(null, null, document.URL);
          var chapter = document.querySelector('.chapter');
          chapter.style.opacity = 0;
          setTimeout(() => {
            (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_1__.changeChapter1)();
            setTimeout(() => {
              chapter.style.display = 'none';
              activeContent();
              setTimeout(() => {
                container.style.opacity = 1;
              }, 500);
              setTimeout(() => {
                (0,_audio_js__WEBPACK_IMPORTED_MODULE_4__.speak)();
                const dialogue = document.querySelector('.dialogue');
                dialogue.style.display = 'flex';
                setTimeout(() => {
                  dialogue.style.display = 'none';
                }, 3000);
              }, 5500);
            }, 3000);
          });
        },
        3000
      );
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
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_4__.speak)();
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
  listenHome();
}

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

function listenHome(){
  const home = document.querySelector('.home');
  home.addEventListener('click', function () {
    window.location.href = './ato1-v1.html';
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
/* harmony export */   addYearSong: () => (/* binding */ addYearSong),
/* harmony export */   decreaseVolume: () => (/* binding */ decreaseVolume),
/* harmony export */   increaseVolume: () => (/* binding */ increaseVolume),
/* harmony export */   playChapter: () => (/* binding */ playChapter),
/* harmony export */   playEarthquake: () => (/* binding */ playEarthquake),
/* harmony export */   playHappy: () => (/* binding */ playHappy),
/* harmony export */   playRight: () => (/* binding */ playRight),
/* harmony export */   playStatic: () => (/* binding */ playStatic),
/* harmony export */   playWrong: () => (/* binding */ playWrong),
/* harmony export */   speak: () => (/* binding */ speak),
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
  const container = document.querySelector('.container-prologo');
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
    const timeWarp = document.querySelector('.timeWarp-prologo');
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

function playStatic() {
  var audio = document.getElementById('static');
  audio.volume = 1;
  audio.play();
}

function playChapter() {
  var audio = document.getElementById('chapterSound');
  audio.volume = 1;
  audio.play();
}

function speak() {
  var audio = document.getElementById('speak');
  const sounds = [
    'bip2.mp3',
    'bip3.mp3',
    'bip4.wav',
    'bip5.wav',
  ];

  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audioPath = `./audio/${randomSound}`;
    audio.src = audioPath;
    audio.volume = .8;

    audio.play();
}

function addYearSong() {
  var audio = document.getElementById('yearSong');
  audio.volume = .6;
  audio.play();
}




/***/ }),

/***/ "./src/scripts/byteBuzz.js":
/*!*********************************!*\
  !*** ./src/scripts/byteBuzz.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEvent: () => (/* binding */ addEvent),
/* harmony export */   playStaticImage: () => (/* binding */ playStaticImage)
/* harmony export */ });
/* harmony import */ var _css_byteBuzz_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/byteBuzz.css */ "./src/css/byteBuzz.css");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");
/* harmony import */ var _captchaV2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captchaV2.js */ "./src/scripts/captchaV2.js");
/* harmony import */ var _ato1_v1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ato1-v1.js */ "./src/scripts/ato1-v1.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");







if (document.title === 'Byte Buzz') {
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
      (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.createYears)();
      url.textContent = 'http://www.bytebuzz.com/';
      listenYears();
      (0,_ato1_v1_js__WEBPACK_IMPORTED_MODULE_4__.listenHome)();
    });

  document.addEventListener('DOMContentLoaded', function () {
    (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_1__.timeTravelBuzz)((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.getYear)());
    setTimeout(() => {
      listenYears();
      addEvent();
    }, 3000);
  });
}

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

function addEvent() {
  const tag = document.querySelector('i');

  function handleClick() {
    window.location.href = './dnLeaks.html';
  }

  // Verificar se o evento ainda não foi adicionado
  if (tag) {
    tag.addEventListener('click', handleClick);
  }
}

function playStaticImage() {
  let staticImg = document.querySelector('.static-img-jumpscare');
  setTimeout(() => {
    staticImg.style.display = 'block';
    (0,_audio_js__WEBPACK_IMPORTED_MODULE_5__.playStatic)();
    setTimeout(() => {
      staticImg.style.display = 'none';
    }, 100);
  }, 150);
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
/* harmony import */ var _byteBuzz_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./byteBuzz.js */ "./src/scripts/byteBuzz.js");






let lastPressedKey = '';
let yearToTravel = '';
let correctCount = 0;
let wrongCount = 0;
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
    } else if (document.title === 'JOY JOURNAL') {
      var content = document.querySelector('.content-joy');
    } else {
      var content = document.querySelector('.content-buzz');
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
    captchaDescription.textContent = 'Prove sua humanidade';
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
  } else {
    let monkey = document.querySelector('.monkey-type');
    monkey.style.display = 'grid';
  }
  let monkeyTitle = document.querySelector('.monkey-title');
  if ((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.getYear)() === '2016') {
    monkeyTitle.style.fontFamily = 'roboto';
    monkeyTitle.style.borderRadius = '3vh';
  } else {
    monkeyTitle.style.fontFamily = 'oldMoodle';
  }
  const progressBar = document.querySelector('.monkey-type .progress-bar');
  progressBar.style.width = 0;
  correctCount = 0;
  wrongCount = 0;
  updateLetter();
}

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  const randomLetter = alphabet[randomIndex];

  const randomNumber = Math.floor(Math.random() * 3) + 1; // Número aleatório de 1 a 5 (shift)
  return randomLetter + randomNumber;
}

function updateLetter() {
  document.addEventListener('keypress', handleKeyPress);
  const letterDiv = document.querySelector('.monkey-type .letter-div');

  lastPressedKey = '';
  const randomInfo = generateRandomLetter();
  letterDiv.textContent = randomInfo;
  letterDiv.classList.remove('correct');
}

function handleKeyPress(event) {
  const letterDiv = document.querySelector('.monkey-type .letter-div');
  const progressBar = document.querySelector('.monkey-type .progress-bar');
  const monkeyType = document.querySelector('.monkey-type');

  const pressedKey = String.fromCharCode(event.keyCode);
  const currentInfo = letterDiv.textContent;

  const currentLetter = currentInfo.charAt(0);
  const shift = parseInt(currentInfo.charAt(1), 10);

  if (
    (pressedKey.toUpperCase() === shiftLetter(currentLetter, shift) ||
    pressedKey.toLowerCase() === shiftLetter(currentLetter, shift)) &&
  pressedKey !== lastPressedKey
  ) {
    lastPressedKey = pressedKey;
    letterDiv.classList.add('correct');
    (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playRight)();
    correctCount++;

    (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.changeCaptchaTutorial)();

    // Atualiza a largura da barra de progresso
    progressBar.style.width = correctCount * 11.1 + '%';

    if(document.title === 'Byte Buzz' && correctCount === 4 && (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.checkStaticJumpscare)() === false) {
      (0,_byteBuzz_js__WEBPACK_IMPORTED_MODULE_4__.playStaticImage)();
      (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.changeStaticJumpscare)();
    }

    if (correctCount === 6) {
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
      } else if (document.title === 'Byte Buzz') {
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
    wrongCount++;
    if(wrongCount == 3 && (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.checkCaptchaTutorial)() === false){
      const dialogue = document.querySelector('.dialogue');
      const dialogueP = document.querySelector('.dialogue p');

      dialogueP.textContent = 'Talvez a letra indique a posição inicial e o número a posição da letra que se deve apertar a partir da posição inicial.'
      dialogue.style.display = 'flex';

      setTimeout(() => {
        dialogue.style.display = 'none';
      }, 12000);
    }
    if(wrongCount == 5 && (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.checkCaptchaTutorial)() === false && (document.title === 'Moodle' || document.title === 'JOY JOURNAL')){
      const dialogue = document.querySelector('.dialogue');
      const dialogueP = document.querySelector('.dialogue p');

      dialogueP.textContent = 'Por exemplo A2, o usuário deveria apertar a letra C.'
      dialogue.style.display = 'flex';

      setTimeout(() => {
        dialogue.style.display = 'none';
      }, 8000);
    }
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

function shiftLetter(letter, shift) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const newIndex = (alphabet.indexOf(letter) + shift) % 26;
  return alphabet[newIndex];
}




/***/ }),

/***/ "./src/scripts/dnLeaks.js":
/*!********************************!*\
  !*** ./src/scripts/dnLeaks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startLastPart: () => (/* binding */ startLastPart)
/* harmony export */ });
/* harmony import */ var _css_dnLeaks_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/dnLeaks.css */ "./src/css/dnLeaks.css");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");
/* harmony import */ var _captchaV2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captchaV2.js */ "./src/scripts/captchaV2.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");
/* harmony import */ var _ato1_v1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ato1-v1.js */ "./src/scripts/ato1-v1.js");







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
      (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.createYears)();
      url.textContent = 'http://www.dnleaks.com/';
      listenYears();
      (0,_ato1_v1_js__WEBPACK_IMPORTED_MODULE_5__.listenHome)();
    });

  document.addEventListener('DOMContentLoaded', function () {
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
      history.pushState(null, null, document.URL);
    });

    (0,_timeMachine_js__WEBPACK_IMPORTED_MODULE_1__.timeTravelLeak)((0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__.getYear)());

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
      (0,_captchaV2_js__WEBPACK_IMPORTED_MODULE_3__.createCaptcha)(div.textContent);
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
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_4__.speak)();
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
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_4__.playStatic)();
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




/***/ }),

/***/ "./src/scripts/localStorage-control.js":
/*!*********************************************!*\
  !*** ./src/scripts/localStorage-control.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addYear: () => (/* binding */ addYear),
/* harmony export */   changeCaptchaTutorial: () => (/* binding */ changeCaptchaTutorial),
/* harmony export */   changeChapter1: () => (/* binding */ changeChapter1),
/* harmony export */   changeJumpscare: () => (/* binding */ changeJumpscare),
/* harmony export */   changeMoodleClue: () => (/* binding */ changeMoodleClue),
/* harmony export */   changeStaticJumpscare: () => (/* binding */ changeStaticJumpscare),
/* harmony export */   changeYear: () => (/* binding */ changeYear),
/* harmony export */   changeYearClue: () => (/* binding */ changeYearClue),
/* harmony export */   checkCaptchaTutorial: () => (/* binding */ checkCaptchaTutorial),
/* harmony export */   checkChapter1: () => (/* binding */ checkChapter1),
/* harmony export */   checkJumpscare: () => (/* binding */ checkJumpscare),
/* harmony export */   checkMoodleClue: () => (/* binding */ checkMoodleClue),
/* harmony export */   checkStaticJumpscare: () => (/* binding */ checkStaticJumpscare),
/* harmony export */   checkYearClue: () => (/* binding */ checkYearClue),
/* harmony export */   createYears: () => (/* binding */ createYears),
/* harmony export */   getYear: () => (/* binding */ getYear),
/* harmony export */   saveStatsLocal: () => (/* binding */ saveStatsLocal),
/* harmony export */   verifyNewUser: () => (/* binding */ verifyNewUser)
/* harmony export */ });
function saveStatsLocal(
  jumpscare,
  chapter1,
  years,
  currentYear,
  yearClue,
  backMoodleClue,
  staticJumpscare,
  captchaTutorial,
) {
  const stats = {
    jumpscare,
    chapter1,
    years,
    currentYear,
    yearClue,
    backMoodleClue,
    staticJumpscare,
    captchaTutorial
  };

  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats.push(stats);
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function verifyNewUser() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  if (gameStats.length < 1) {
    saveStatsLocal(false, false, [2014], '2014', false, false, false, false);
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

function changeYearClue() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats[gameStats.length - 1].yearClue = true;
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function checkYearClue() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  if (gameStats.length > 0) {
    if (gameStats[gameStats.length - 1].yearClue === true) {
      return true;
    }
  }
  return false;
}

function changeMoodleClue() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats[gameStats.length - 1].backMoodleClue = true;
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function checkMoodleClue() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  if (gameStats.length > 0) {
    if (gameStats[gameStats.length - 1].backMoodleClue === true) {
      return true;
    }
  }
  return false;
}

function changeStaticJumpscare() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats[gameStats.length - 1].staticJumpscare = true;
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function checkStaticJumpscare() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  if (gameStats.length > 0) {
    if (gameStats[gameStats.length - 1].staticJumpscare === true) {
      return true;
    }
  }
  return false;
}

function changeCaptchaTutorial() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats[gameStats.length - 1].captchaTutorial = true;
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function checkCaptchaTutorial() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];

  if (gameStats.length > 0) {
    if (gameStats[gameStats.length - 1].captchaTutorial === true) {
      return true;
    }
  }
  return false;
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
/* harmony import */ var _ato1_v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ato1-v1.js */ "./src/scripts/ato1-v1.js");
/* harmony import */ var _byteBuzz_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./byteBuzz.js */ "./src/scripts/byteBuzz.js");
/* harmony import */ var _dnLeaks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dnLeaks.js */ "./src/scripts/dnLeaks.js");




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
            const oldContent = document.querySelector('.content-joy');
            const dinos = document.querySelectorAll('.dino');

            dinos.forEach((dino) => {
              dino.style.display = 'none';
            });

            if (textContent === '2016') {
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

            if (textContent === '2016') {
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
      fetch(`./byteBuzz${textContent}.html`)
        .then((response) => response.text())
        .then((data) => {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = data;

          const content = tempElement.querySelector(
            `.content-${textContent}`
          ).innerHTML;

          const oldContent = document.querySelector('.content-buzz');
          oldContent.innerHTML = content;
          if (textContent === '2016') {
            const timeWarp = document.querySelector('.timeWarp');
            timeWarp.style.fontFamily = 'compactz';
            document.body.style.height = 'auto';
            var headerTag = document.querySelector('header');
            headerTag.style.display = 'flex';
            (0,_byteBuzz_js__WEBPACK_IMPORTED_MODULE_1__.addEvent)();
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
  const blur = document.querySelector('.blur-final');
  blur.style.display = 'block';

  setTimeout(() => {
    blur.style.opacity = 1;
    setTimeout(() => {
      const currentYear = document.querySelector('.tw-year');
      const currentYearText = currentYear.textContent;
      fetch(`./dnLeaks${textContent}.html`)
        .then((response) => response.text())
        .then((data) => {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = data;

          const content = tempElement.querySelector(
            `.content${textContent}`
          ).innerHTML;

          const body = document.querySelector('.body-leaks');
          const oldContent = document.querySelector('.content');
          oldContent.innerHTML = content;
          if (textContent === '2016') {
            const timeWarp = document.querySelector('.timeWarp');
            timeWarp.style.fontFamily = 'compactz';
            body.style.backgroundColor = '#181818';
          } else {
            const timeWarp = document.querySelector('.timeWarp');
            timeWarp.style.display = 'none';
            body.style.backgroundColor = '#080808';
            setTimeout(() => {
              (0,_dnLeaks_js__WEBPACK_IMPORTED_MODULE_2__.startLastPart)();
              const dino = document.querySelector('.imgNotFoundFinal');
              const light = document.querySelector('.light');
              light.style.opacity = '1';
              dino.style.zIndex = '1';
            }, 1500);
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
/******/ 			"ato1v1": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/ato1-v1.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvMXYxLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhJQUFvRDtBQUNoRyw0Q0FBNEMsd0tBQWlFO0FBQzdHLDRDQUE0QyxrSkFBc0Q7QUFDbEcsNENBQTRDLDRKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxzRkFBc0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFlB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QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FB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QTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvYXRvMS12MS5jc3MiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2J5dGVCdXp6LmNzcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvZG5MZWFrcy5jc3MiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9hdG8xLXYxLmNzcz9hZmY0Iiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9ieXRlQnV6ei5jc3M/MmQxYiIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvZG5MZWFrcy5jc3M/YWEzYSIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvYXRvMS12MS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2F1ZGlvLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvYnl0ZUJ1enouanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9jYXB0Y2hhVjIuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9kbkxlYWtzLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy90aW1lTWFjaGluZS5qcyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Ob3ZhX1JvdW5kL05vdmFSb3VuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogY29tcGFjdHo7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmhlYWRlckF0bzEge1xuICBoZWlnaHQ6IDE2dmg7XG59XG5cbi5jaGFwdGVyIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDMwdnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2hhcHRlciBzcGFuIHtcbiAgZm9udC1zaXplOiA1dmg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmNoYXB0ZXIgYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xuICBjb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDN2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb29kbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9vZGxlLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxN3ZoO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG59XG5cbi5tb29kbGUtdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMTZ2aDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiA0dmg7XG59XG5cbi5zZWFyY2gtYnV0dG9ucyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogMXZoO1xufVxuXG4uc2VhcmNoLWJ1dHRvbnMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyLjF2aDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyOiBzb2xpZCAuNHZoO1xuICBib3JkZXItY29sb3I6ICNjY2MgIzk5OSAjOTk5ICNjY2M7XG4gIGhlaWdodDogNXZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgLjh2aCAwIC44dmg7XG59XG5cbi5wcml2YWN5IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc2l6ZTogMnZoO1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi50aW1lV2FycCB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcbiAgaGVpZ2h0OiAxNnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDogMDtcbn1cblxuLnR3LWNlbnRlciB7XG4gIHdpZHRoOiA1NXZ3O1xufVxuXG4udHcteWVhcixcbi50dy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG4udXJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG59XG5cbi51cmwgcHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLnVybCBpbWcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ueWVhciB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMuNSU7XG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIHBhZGRpbmc6IC43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ueWVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDExMHZoO1xuICB3aWR0aDogOTB2dztcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyOiBub25lO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgZm9udC1zaXplOiA0dmg7XG4gIG1hcmdpbi1ib3R0b206IDd2aDtcbn1cblxuLm5ld3MtdGl0bGUyMDE2IHtcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcbiAgZm9udC1zaXplOiA0dmg7XG4gIG1hcmdpbi1ib3R0b206IDd2aDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMTU2YWVjO1xufVxuXG4ubmV3cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA3dmg7XG59XG5cbi5uZXdzLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXZoO1xufVxuXG4uaW1nLW5ld3Mge1xuICBoZWlnaHQ6IDEydmg7XG4gIHdpZHRoOiAxNnZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIGdyYXk7XG59XG5cbi5uZXdzMjAxNCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ld3MyMDE0IHAge1xuICBmb250LXNpemU6IDIuNHZoO1xuICB3aWR0aDogNDB2aDtcbn1cblxuLm5ld3MyMDE2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJ2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXdzMjAxNiBwIHtcbiAgZm9udC1zaXplOiAyLjR2aDtcbiAgd2lkdGg6IDQ1dmg7XG59XG5cbi5kaWFsb2d1ZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTgzLCAyMDEpO1xuICBtYXJnaW4tYm90dG9tOiA3dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXZoO1xufVxuXG4uYmx1ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDE5MHZoO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb25rZXktdHlwZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IDUwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcbiAgY29sb3I6IGJsYWNrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb25rZXktdGl0bGUge1xuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcbiAgZm9udC1zaXplOiA0dmg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAyLjh2aDtcbn1cblxuLmxldHRlci1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4dmg7XG59XG5cbi5jb3JyZWN0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uaW5jb3JyZWN0IHtcbiAgY29sb3I6IGJyb3duO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xuICB3aWR0aDogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYXRvMS12MS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTJDO0FBQzdDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtF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O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsUUFBUTtBQUNWXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIHNyYzogdXJsKC4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9Ob3ZhX1JvdW5kL05vdmFSb3VuZC1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlckF0bzEge1xcbiAgaGVpZ2h0OiAxNnZoO1xcbn1cXG5cXG4uY2hhcHRlciB7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxMnZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMi4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNoYXB0ZXIgc3BhbiB7XFxuICBmb250LXNpemU6IDV2aDtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmNoYXB0ZXIgYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xcbiAgY29sb3I6IGdyYXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9vZGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vb2RsZS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTd2aDtcXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxufVxcblxcbi5tb29kbGUtdGl0bGUgcCB7XFxuICBmb250LXNpemU6IDE2dmg7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgaGVpZ2h0OiA0dmg7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9ucyB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWFyZ2luLXRvcDogMXZoO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMi4xdmg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyOiBzb2xpZCAuNHZoO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjICM5OTkgIzk5OSAjY2NjO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwIC44dmggMCAuOHZoO1xcbn1cXG5cXG4ucHJpdmFjeSB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBmb250LXNpemU6IDJ2aDtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuXFxuLnRpbWVXYXJwIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6MDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi50dy1jZW50ZXIge1xcbiAgd2lkdGg6IDU1dnc7XFxufVxcblxcbi50dy15ZWFyLFxcbi50dy10aXRsZSB7XFxuICBmb250LXNpemU6IDR2aDtcXG59XFxuXFxuLnVybCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4udXJsIHB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLnVybCBpbWcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnllYXIge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzLjUlO1xcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxuICBwYWRkaW5nOiAuN3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55ZWFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTEwdmg7XFxuICB3aWR0aDogOTB2dztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5ld3MtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxufVxcblxcbi5uZXdzLXRpdGxlMjAxNiB7XFxuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMTU2YWVjO1xcbn1cXG5cXG4ubmV3cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcbn1cXG5cXG4ubmV3cy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDV2aDtcXG59XFxuXFxuLmltZy1uZXdzIHtcXG4gIGhlaWdodDogMTJ2aDtcXG4gIHdpZHRoOiAxNnZoO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXI6IHNvbGlkIC41dmggZ3JheTtcXG59XFxuXFxuLm5ld3MyMDE0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdzMjAxNCBwIHtcXG4gIGZvbnQtc2l6ZTogMi40dmg7XFxuICB3aWR0aDogNDB2aDtcXG59XFxuXFxuLm5ld3MyMDE2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXdzMjAxNiBwIHtcXG4gIGZvbnQtc2l6ZTogMi40dmg7XFxuICB3aWR0aDogNDV2aDtcXG59XFxuXFxuLmRpYWxvZ3VlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxODMsIDIwMSk7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDE5MHZoO1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vbmtleS10eXBlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vbmtleS10aXRsZSB7XFxuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxcbiAgZm9udC1zaXplOiA0dmg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDIuOHZoO1xcbn1cXG5cXG4ubGV0dGVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA4dmg7XFxufVxcblxcbi5jb3JyZWN0IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmluY29ycmVjdCB7XFxuICBjb2xvcjogYnJvd247XFxufVxcblxcbi5wcm9ncmVzcy1iYXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcXG4gIHdpZHRoOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvQmViYXNfTmV1ZS9CZWJhc05ldWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ib2R5LWJ1enoge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xuICBoZWlnaHQ6IDExMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmhlYWRlci1idXp6IHtcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUzYzBiO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMjB2aDtcbiAgY29sb3I6IHJnYigxNzUsIDE3NSwgMTc1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmpveS10aXRsZSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IGdyYXk7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNXZoO1xufVxuXG4uY29udGVudC1idXp6IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNTBweCAwIDUwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG4uY29udGVudC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDR2aCk7XG4gIGZvbnQtc2l6ZTogN3ZoO1xuICBwYWRkaW5nOiAydmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtdGl0bGUtMjAxNiB7XG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcbiAgZm9udC1zaXplOiA2dmg7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLTIwMTYge1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiBhdXRvO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDY1JSk7XG59XG5cbi5jb250ZW50LWJ1enogcCB7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG4gIHBhZGRpbmc6IDAgMnZoIDJ2aCAydmg7XG59XG5cbi50aW1lV2FycCB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcbiAgaGVpZ2h0OiAxNnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50dy1jZW50ZXIge1xuICB3aWR0aDogNTV2dztcbn1cblxuLnR3LXllYXIsXG4udHctdGl0bGUge1xuICBmb250LXNpemU6IDR2aDtcbn1cblxuLnVybCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnZoO1xufVxuXG4udXJsIHB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogM3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG59XG5cbi51cmwgaW1nIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogM3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aW1lbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDd2aDtcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnllYXIge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzLjUlO1xuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xuICBmb250LXNpemU6IDEuNXZoO1xuICBwYWRkaW5nOiAuN3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnllYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XG59XG5cbnAgaSB7XG4gIGZvbnQtc2l6ZTogMi43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5pbWctYnl0ZSB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5ibHVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTkwdmg7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcbn1cblxuLm1vbmtleS10eXBlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBncmlkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogNTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vbmtleS10aXRsZSB7XG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxuICBmb250LXNpemU6IDR2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDIuOHZoO1xufVxuXG4ubGV0dGVyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDh2aDtcbn1cblxuLmNvcnJlY3Qge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbmNvcnJlY3Qge1xuICBjb2xvcjogYnJvd247XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XG4gIHdpZHRoOiAwO1xufVxuXG4ubm90LWZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmltZ05vdEZvdW5kIHtcbiAgaGVpZ2h0OiAxNXZoO1xufVxuXG4uc3RhdGljLWltZy1qdW1wc2NhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogMztcbn1cblxuQGtleWZyYW1lcyBtb3ZlSW1hZ2Uge1xuICBmcm9tIHtcbiAgICByaWdodDogLTI1dmg7IC8qIFBvc2nDp8OjbyBpbmljaWFsICovXG4gIH1cbiAgdG8ge1xuICAgIHJpZ2h0OiAtNTV2aDsgLyogUG9zacOnw6NvIGZpbmFsICovXG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ieXRlQnV6ei5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUFrRDtBQUNwRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQTZDO0FBQy9DOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFB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QUFZLEVBQUUsb0JBQW9CO0VBQ3BDO0VBQ0E7SUFDRSxZQUFZLEVBQUUsa0JBQWtCO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYmViYXM7XFxuICBzcmM6IHVybCguLi9mb250L0JlYmFzX05ldWUvQmViYXNOZXVlLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xcbiAgc3JjOiB1cmwoLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5ib2R5LWJ1enoge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgaGVpZ2h0OiAxMTB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlci1idXp6IHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTNjMGI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBjb2xvcjogcmdiKDE3NSwgMTc1LCAxNzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uam95LXRpdGxlIHtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IGdyYXk7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDV2aDtcXG59XFxuXFxuLmNvbnRlbnQtYnV6eiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNzB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogNTBweCAwIDUwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDR2aCk7XFxuICBmb250LXNpemU6IDd2aDtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUtMjAxNiB7XFxuICBmb250LWZhbWlseTogYmViYXM7XFxuICBmb250LXNpemU6IDZ2aDtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltZy0yMDE2IHtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjUlKTtcXG59XFxuXFxuLmNvbnRlbnQtYnV6eiBwIHtcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxuICBwYWRkaW5nOiAwIDJ2aCAydmggMnZoO1xcbn1cXG5cXG4udGltZVdhcnAge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnR3LWNlbnRlciB7XFxuICB3aWR0aDogNTV2dztcXG59XFxuXFxuLnR3LXllYXIsXFxuLnR3LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbn1cXG5cXG4udXJsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbi51cmwgcHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiAzdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4udXJsIGltZyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGltZWxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ueWVhciB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMuNSU7XFxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xcbiAgZm9udC1zaXplOiAxLjV2aDtcXG4gIHBhZGRpbmc6IC43dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnllYXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xcbn1cXG5cXG5wIGkge1xcbiAgZm9udC1zaXplOiAyLjd2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaW1nLWJ5dGUge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmJsdXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxOTB2aDtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb25rZXktdHlwZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb25rZXktdGl0bGUge1xcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAyLjh2aDtcXG59XFxuXFxuLmxldHRlci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogOHZoO1xcbn1cXG5cXG4uY29ycmVjdCB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5pbmNvcnJlY3Qge1xcbiAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLm5vdC1mb3VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmltZ05vdEZvdW5kIHtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuXFxuLnN0YXRpYy1pbWctanVtcHNjYXJlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlSW1hZ2Uge1xcbiAgZnJvbSB7XFxuICAgIHJpZ2h0OiAtMjV2aDsgLyogUG9zacOnw6NvIGluaWNpYWwgKi9cXG4gIH1cXG4gIHRvIHtcXG4gICAgcmlnaHQ6IC01NXZoOyAvKiBQb3Npw6fDo28gZmluYWwgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogY29tcGFjdHo7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYm9keS1sZWFrcyB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRpbWVXYXJwIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xuICBoZWlnaHQ6IDE2dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnR3LWNlbnRlciB7XG4gIHdpZHRoOiA1NXZ3O1xufVxuXG4udHcteWVhcixcbi50dy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG4udXJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG59XG5cbi51cmwgcHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLnVybCBpbWcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ueWVhciB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMuNSU7XG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIHBhZGRpbmc6IC43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ueWVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcbn1cblxuLmJsdXItZmluYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAyO1xufVxuXG4ubW9ua2V5LXR5cGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA1MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9ua2V5LXRpdGxlIHtcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXG4gIGZvbnQtc2l6ZTogNHZoO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMi44dmg7XG59XG5cbi5sZXR0ZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogOHZoO1xufVxuXG4uY29ycmVjdCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmluY29ycmVjdCB7XG4gIGNvbG9yOiBicm93bjtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcbiAgd2lkdGg6IDA7XG59XG5cbi5ub3QtZm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudDIwMTQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltZ05vdEZvdW5kRmluYWwge1xuICBoZWlnaHQ6IDE1dmg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZGlhbG9ndWUtZmluYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLmxpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAydmg7XG4gIHdpZHRoOiAydmg7XG4gIGJveC1zaGFkb3c6IDB2aCAwdmggMTV2aCByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbn1cblxuLnN0YXRpYy1pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmNhcHRjaGEge1xuICB6LWluZGV4OiAyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9kbkxlYWtzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsVUFBVTtFQUNWLDJDQUEyQztFQUMzQyxVQUFVOztFQUVWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIHNyYzogdXJsKC4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9keS1sZWFrcyB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnRpbWVXYXJwIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50dy1jZW50ZXIge1xcbiAgd2lkdGg6IDU1dnc7XFxufVxcblxcbi50dy15ZWFyLFxcbi50dy10aXRsZSB7XFxuICBmb250LXNpemU6IDR2aDtcXG59XFxuXFxuLnVybCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4udXJsIHB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLnVybCBpbWcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnllYXIge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzLjUlO1xcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxuICBwYWRkaW5nOiAuN3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55ZWFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcXG59XFxuXFxuLmJsdXItZmluYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubW9ua2V5LXR5cGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXFxuICBmb250LXNpemU6IDR2aDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMi44dmg7XFxufVxcblxcbi5sZXR0ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDh2aDtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaW5jb3JyZWN0IHtcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLnByb2dyZXNzLWJhciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5ub3QtZm91bmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50MjAxNCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1nTm90Rm91bmRGaW5hbCB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmRpYWxvZ3VlLWZpbmFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4ubGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDJ2aDtcXG4gIHdpZHRoOiAydmg7XFxuICBib3gtc2hhZG93OiAwdmggMHZoIDE1dmggcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgb3BhY2l0eTogMDtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zdGF0aWMtaW1ne1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5jYXB0Y2hhIHtcXG4gIHotaW5kZXg6IDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdG8xLXYxLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXRvMS12MS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnl0ZUJ1enouY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ieXRlQnV6ei5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZG5MZWFrcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RuTGVha3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL2Nzcy9hdG8xLXYxLmNzcyc7XG5pbXBvcnQge1xuICBjaGVja0NoYXB0ZXIxLFxuICBjaGFuZ2VDaGFwdGVyMSxcbiAgY3JlYXRlWWVhcnMsXG4gIGdldFllYXIsXG59IGZyb20gJy4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSB9IGZyb20gJy4vY2FwdGNoYVYyLmpzJztcbmltcG9ydCB7IHRpbWVUcmF2ZWxNb29kbGUgfSBmcm9tICcuL3RpbWVNYWNoaW5lLmpzJztcbmltcG9ydCB7IHBsYXlDaGFwdGVyLCBzcGVhayB9IGZyb20gJy4vYXVkaW8uanMnO1xuXG5pZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZG9jdW1lbnQuVVJMKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgIH0pO1xuICAgIHRpbWVUcmF2ZWxNb29kbGUoZ2V0WWVhcigpKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgaWYgKGNoZWNrQ2hhcHRlcjEoKSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHN0YXJ0Q2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xuXG4gICAgICBzdGFydENoYXB0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBsYXlDaGFwdGVyKCk7XG4gICAgICAgICAgc3RhcnRDaGFwdGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgICAgICAgIHZhciBjaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXB0ZXInKTtcbiAgICAgICAgICBjaGFwdGVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQ2hhcHRlcjEoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjaGFwdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzcGVhaygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XG4gICAgICAgICAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAgIH0sIDU1MDApO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIDMwMDBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXB0ZXInKTtcbiAgICAgIGNoYXB0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIGFjdGl2ZUNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNyZWF0ZVllYXJzKCk7XG4gICAgfSwgMTUwMCk7XG5cbiAgICB2YXIgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtYnV0dG9ucyBidXR0b24nKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNwZWFrKCk7XG4gICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XG4gICAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gJ07Do28gZnVuY2lvbmEuLi4nO1xuICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnZXROZXdzKCk7XG4gICAgICBsaXN0ZW5ZZWFycygpO1xuICAgIH0sIDQwMDApO1xuICB9KTtcbiAgbGlzdGVuSG9tZSgpO1xufVxuXG5mdW5jdGlvbiBnZXROZXdzKCkge1xuICB2YXIgdHdZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcbiAgaWYgKHR3WWVhci50ZXh0Q29udGVudCA9PT0gJzIwMTQnKSB7XG4gICAgdmFyIG5ld3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3czIwMTQnKTtcblxuICAgIG5ld3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2xpY291IDIwMTQnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vam95Sm91cm5hbC5odG1sJztcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzMjAxNicpO1xuXG4gICAgbmV3c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljb3UgMjAxNicpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9ieXRlQnV6ei5odG1sJztcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmVDb250ZW50KCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJztcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSAnMTEwdmgnO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5ZZWFycygpIHtcbiAgdmFyIHllYXJEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnllYXInKTtcbiAgeWVhckRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZGl2KSB7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XG4gICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBjcmVhdGVDYXB0Y2hhKGRpdi50ZXh0Q29udGVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Ib21lKCl7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vYXRvMS12MS5odG1sJztcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGdldE5ld3MsIGxpc3RlbkhvbWV9O1xuIiwiZnVuY3Rpb24gcGxheVdyb25nKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjbGFFcnJhZGEnKTtcbiAgYXVkaW8udm9sdW1lID0gMC43O1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlSaWdodCgpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhQ29ycmV0YScpO1xuICBhdWRpby52b2x1bWUgPSAwLjI7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gcGxheUVhcnRocXVha2Uodm9sdW1lLCB0eXBlKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcHJvbG9nbycpO1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpO1xuICBhdWRpby52b2x1bWUgPSB2b2x1bWU7XG4gIGF1ZGlvLnBsYXkoKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodHlwZSk7XG5cbiAgaWYgKHR5cGUgIT09ICdiaWctc2hha2UnKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0eXBlKTtcbiAgICB9LCA3MDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xuICBpZiAoYXVkaW9FbGVtZW50LnZvbHVtZSA+PSAwLjQ1KSB7XG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuNDU7XG4gICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAtcHJvbG9nbycpO1xuICAgIHRpbWVXYXJwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgKz0gMC4wNTtcbiAgICBpbmNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpO1xuICB9LCA4MDApO1xufVxuXG5mdW5jdGlvbiBkZWNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpIHtcbiAgaWYgKGF1ZGlvRWxlbWVudC52b2x1bWUgPD0gMC4xKSB7XG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuMDU7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgLT0gMC4wNztcbiAgICBkZWNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpO1xuICB9LCAzMDApO1xufVxuXG5mdW5jdGlvbiBwbGF5SGFwcHkoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXBweScpO1xuICBhdWRpby52b2x1bWUgPSAxO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHN0b3BIYXBweSgpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhcHB5Jyk7XG4gIGF1ZGlvLnBhdXNlKCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlTdGF0aWMoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0aWMnKTtcbiAgYXVkaW8udm9sdW1lID0gMTtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBwbGF5Q2hhcHRlcigpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXB0ZXJTb3VuZCcpO1xuICBhdWRpby52b2x1bWUgPSAxO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHNwZWFrKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlYWsnKTtcbiAgY29uc3Qgc291bmRzID0gW1xuICAgICdiaXAyLm1wMycsXG4gICAgJ2JpcDMubXAzJyxcbiAgICAnYmlwNC53YXYnLFxuICAgICdiaXA1LndhdicsXG4gIF07XG5cbiAgY29uc3QgcmFuZG9tU291bmQgPSBzb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc291bmRzLmxlbmd0aCldO1xuICAgIGNvbnN0IGF1ZGlvUGF0aCA9IGAuL2F1ZGlvLyR7cmFuZG9tU291bmR9YDtcbiAgICBhdWRpby5zcmMgPSBhdWRpb1BhdGg7XG4gICAgYXVkaW8udm9sdW1lID0gLjg7XG5cbiAgICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGFkZFllYXJTb25nKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhclNvbmcnKTtcbiAgYXVkaW8udm9sdW1lID0gLjY7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZXhwb3J0IHtcbiAgcGxheVJpZ2h0LFxuICBwbGF5V3JvbmcsXG4gIHBsYXlFYXJ0aHF1YWtlLFxuICBkZWNyZWFzZVZvbHVtZSxcbiAgaW5jcmVhc2VWb2x1bWUsXG4gIHBsYXlIYXBweSxcbiAgc3RvcEhhcHB5LFxuICBwbGF5U3RhdGljLFxuICBwbGF5Q2hhcHRlcixcbiAgc3BlYWssXG4gIGFkZFllYXJTb25nXG59O1xuIiwiaW1wb3J0ICcuLi9jc3MvYnl0ZUJ1enouY3NzJztcbmltcG9ydCB7IHRpbWVUcmF2ZWxCdXp6IH0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XG5pbXBvcnQgeyBnZXRZZWFyLCBjcmVhdGVZZWFycywgY2hlY2tTdGF0aWNKdW1wc2NhcmUgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEgfSBmcm9tICcuL2NhcHRjaGFWMi5qcyc7XG5pbXBvcnQgeyBsaXN0ZW5Ib21lIH0gZnJvbSAnLi9hdG8xLXYxLmpzJztcbmltcG9ydCB7IHBsYXlTdGF0aWMgfSBmcm9tICcuL2F1ZGlvLmpzJztcblxuaWYgKGRvY3VtZW50LnRpdGxlID09PSAnQnl0ZSBCdXp6Jykge1xuICBmZXRjaCgnLi9hdG8xLXYxLmh0bWwnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcblxuICAgICAgLy8gRXh0cmFpYSBvIGNvbnRlw7pkbyBkbyBjYWJlw6dhbGhvXG4gICAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gdGVtcEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJykuaW5uZXJIVE1MO1xuXG4gICAgICAvLyBTdWJzdGl0dWEgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxobyBuYSBww6FnaW5hIGFsdGVyYWRhXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKS5pbm5lckhUTUwgPSBoZWFkZXJDb250ZW50O1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVybCBwJyk7XG4gICAgICBjcmVhdGVZZWFycygpO1xuICAgICAgdXJsLnRleHRDb250ZW50ID0gJ2h0dHA6Ly93d3cuYnl0ZWJ1enouY29tLyc7XG4gICAgICBsaXN0ZW5ZZWFycygpO1xuICAgICAgbGlzdGVuSG9tZSgpO1xuICAgIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdGltZVRyYXZlbEJ1enooZ2V0WWVhcigpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxpc3RlblllYXJzKCk7XG4gICAgICBhZGRFdmVudCgpO1xuICAgIH0sIDMwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuWWVhcnMoKSB7XG4gIHZhciB5ZWFyRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55ZWFyJyk7XG4gIHllYXJEaXZzLmZvckVhY2goZnVuY3Rpb24gKGRpdikge1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xuICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgY3JlYXRlQ2FwdGNoYShkaXYudGV4dENvbnRlbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnQoKSB7XG4gIGNvbnN0IHRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2knKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2RuTGVha3MuaHRtbCc7XG4gIH1cblxuICAvLyBWZXJpZmljYXIgc2UgbyBldmVudG8gYWluZGEgbsOjbyBmb2kgYWRpY2lvbmFkb1xuICBpZiAodGFnKSB7XG4gICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBsYXlTdGF0aWNJbWFnZSgpIHtcbiAgbGV0IHN0YXRpY0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aWMtaW1nLWp1bXBzY2FyZScpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBzdGF0aWNJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcGxheVN0YXRpYygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc3RhdGljSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSwgMTAwKTtcbiAgfSwgMTUwKTtcbn1cblxuZXhwb3J0IHsgYWRkRXZlbnQsIHBsYXlTdGF0aWNJbWFnZSB9O1xuIiwiaW1wb3J0IHsgcGxheVJpZ2h0LCBwbGF5V3JvbmcgfSBmcm9tICcuL2F1ZGlvLmpzJztcbmltcG9ydCB7XG4gIHRpbWVUcmF2ZWxKb3ksXG4gIHRpbWVUcmF2ZWxNb29kbGUsXG4gIHRpbWVUcmF2ZWxCdXp6LFxuICB0aW1lVHJhdmVsTGVhayxcbn0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VZZWFyLCBnZXRZZWFyLCBjaGVja1N0YXRpY0p1bXBzY2FyZSwgY2hhbmdlU3RhdGljSnVtcHNjYXJlLCBjaGVja0NhcHRjaGFUdXRvcmlhbCwgY2hhbmdlQ2FwdGNoYVR1dG9yaWFsIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UtY29udHJvbC5qcyc7XG5pbXBvcnQgeyBnZXROZXdzIH0gZnJvbSAnLi9hdG8xLXYxLmpzJztcbmltcG9ydCB7IHBsYXlTdGF0aWNJbWFnZSB9IGZyb20gJy4vYnl0ZUJ1enouanMnO1xuXG5sZXQgbGFzdFByZXNzZWRLZXkgPSAnJztcbmxldCB5ZWFyVG9UcmF2ZWwgPSAnJztcbmxldCBjb3JyZWN0Q291bnQgPSAwO1xubGV0IHdyb25nQ291bnQgPSAwO1xuZnVuY3Rpb24gY3JlYXRlQ2FwdGNoYShkaXZZZWFyKSB7XG4gIHllYXJUb1RyYXZlbCA9IGRpdlllYXI7XG4gIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcbiAgeWVhckJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGRpc2FibGVTY3JvbGwoKTtcbiAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUnKSkge1xuICAgIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ01vb2RsZScpIHtcbiAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb2RsZScpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdkYXJrTmV0TGVha3MnKSB7XG4gICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXB0Y2hhJyk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ0pPWSBKT1VSTkFMJykge1xuICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1qb3knKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1idXp6Jyk7XG4gICAgfVxuICAgIC8vIENyaWEgYSBkaXYgY29tIGEgY2xhc3NlIFwibW9ua2V5LXR5cGVcIi5cbiAgICB2YXIgbW9ua2V5VHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vbmtleVR5cGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXR5cGUnKTtcblxuICAgIC8vIENyaWEgYSBkaXYgY29tIGEgY2xhc3NlIFwibW9ua2V5LXRpdGxlXCIgZSBkZWZpbmUgbyB0ZXh0b1xuICAgIHZhciBtb25rZXlUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vbmtleVRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ21vbmtleS10aXRsZScpO1xuICAgIHZhciBjYXB0Y2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhcHRjaGEudGV4dENvbnRlbnQgPSAnQ0FQVENIQSc7XG4gICAgdmFyIGNhcHRjaGFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXB0Y2hhRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnUHJvdmUgc3VhIGh1bWFuaWRhZGUnO1xuICAgIG1vbmtleVRpdGxlRGl2LmFwcGVuZENoaWxkKGNhcHRjaGEpO1xuICAgIG1vbmtleVRpdGxlRGl2LmFwcGVuZENoaWxkKGNhcHRjaGFEZXNjcmlwdGlvbik7XG5cbiAgICAvLyBDcmlhIGFzIGRpdnMgaW50ZXJuYXMgY29tIGFzIGNsYXNzZXMgXCJsZXR0ZXJcIiBlIFwicHJvZ3Jlc3MtYmFyXCJcbiAgICB2YXIgbGV0dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2xldHRlci1kaXYnKTtcblxuICAgIHZhciBsZXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXR0ZXIuY2xhc3NMaXN0LmFkZCgnbGV0dGVyJyk7XG4gICAgdmFyIG51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG51bWJlckRpdi5jbGFzc0xpc3QuYWRkKCdudW1iZXInKTtcblxuICAgIHZhciBwcm9ncmVzc0JhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2dyZXNzQmFyRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzLWJhcicpO1xuXG4gICAgLy8gQWRpY2lvbmEgYXMgZGl2cyBpbnRlcm5hcyDDoCBkaXYgXCJtb25rZXktdHlwZVwiXG4gICAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChtb25rZXlUaXRsZURpdik7XG4gICAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChsZXR0ZXJEaXYpO1xuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJEaXYpO1xuICAgIGxldHRlckRpdi5hcHBlbmRDaGlsZChsZXR0ZXIpO1xuICAgIGxldHRlckRpdi5hcHBlbmRDaGlsZChudW1iZXJEaXYpO1xuXG4gICAgLy8gQWRpY2lvbmEgYSBkaXYgXCJtb25rZXktdHlwZVwiIGFvIGNvbnRlbnQgZXhpc3RlbnRlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtb25rZXlUeXBlRGl2KTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgbW9ua2V5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJyk7XG4gICAgbW9ua2V5LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gIH1cbiAgbGV0IG1vbmtleVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10aXRsZScpO1xuICBpZiAoZ2V0WWVhcigpID09PSAnMjAxNicpIHtcbiAgICBtb25rZXlUaXRsZS5zdHlsZS5mb250RmFtaWx5ID0gJ3JvYm90byc7XG4gICAgbW9ua2V5VGl0bGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzN2aCc7XG4gIH0gZWxzZSB7XG4gICAgbW9ua2V5VGl0bGUuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xuICB9XG4gIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5wcm9ncmVzcy1iYXInKTtcbiAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAwO1xuICBjb3JyZWN0Q291bnQgPSAwO1xuICB3cm9uZ0NvdW50ID0gMDtcbiAgdXBkYXRlTGV0dGVyKCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTGV0dGVyKCkge1xuICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxwaGFiZXQubGVuZ3RoKTtcbiAgY29uc3QgcmFuZG9tTGV0dGVyID0gYWxwaGFiZXRbcmFuZG9tSW5kZXhdO1xuXG4gIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMTsgLy8gTsO6bWVybyBhbGVhdMOzcmlvIGRlIDEgYSA1IChzaGlmdClcbiAgcmV0dXJuIHJhbmRvbUxldHRlciArIHJhbmRvbU51bWJlcjtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGV0dGVyKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZUtleVByZXNzKTtcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5sZXR0ZXItZGl2Jyk7XG5cbiAgbGFzdFByZXNzZWRLZXkgPSAnJztcbiAgY29uc3QgcmFuZG9tSW5mbyA9IGdlbmVyYXRlUmFuZG9tTGV0dGVyKCk7XG4gIGxldHRlckRpdi50ZXh0Q29udGVudCA9IHJhbmRvbUluZm87XG4gIGxldHRlckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0Jyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyLWRpdicpO1xuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAucHJvZ3Jlc3MtYmFyJyk7XG4gIGNvbnN0IG1vbmtleVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUnKTtcblxuICBjb25zdCBwcmVzc2VkS2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgY29uc3QgY3VycmVudEluZm8gPSBsZXR0ZXJEaXYudGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgY3VycmVudExldHRlciA9IGN1cnJlbnRJbmZvLmNoYXJBdCgwKTtcbiAgY29uc3Qgc2hpZnQgPSBwYXJzZUludChjdXJyZW50SW5mby5jaGFyQXQoMSksIDEwKTtcblxuICBpZiAoXG4gICAgKHByZXNzZWRLZXkudG9VcHBlckNhc2UoKSA9PT0gc2hpZnRMZXR0ZXIoY3VycmVudExldHRlciwgc2hpZnQpIHx8XG4gICAgcHJlc3NlZEtleS50b0xvd2VyQ2FzZSgpID09PSBzaGlmdExldHRlcihjdXJyZW50TGV0dGVyLCBzaGlmdCkpICYmXG4gIHByZXNzZWRLZXkgIT09IGxhc3RQcmVzc2VkS2V5XG4gICkge1xuICAgIGxhc3RQcmVzc2VkS2V5ID0gcHJlc3NlZEtleTtcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIHBsYXlSaWdodCgpO1xuICAgIGNvcnJlY3RDb3VudCsrO1xuXG4gICAgY2hhbmdlQ2FwdGNoYVR1dG9yaWFsKCk7XG5cbiAgICAvLyBBdHVhbGl6YSBhIGxhcmd1cmEgZGEgYmFycmEgZGUgcHJvZ3Jlc3NvXG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBjb3JyZWN0Q291bnQgKiAxMS4xICsgJyUnO1xuXG4gICAgaWYoZG9jdW1lbnQudGl0bGUgPT09ICdCeXRlIEJ1enonICYmIGNvcnJlY3RDb3VudCA9PT0gNCAmJiBjaGVja1N0YXRpY0p1bXBzY2FyZSgpID09PSBmYWxzZSkge1xuICAgICAgcGxheVN0YXRpY0ltYWdlKCk7XG4gICAgICBjaGFuZ2VTdGF0aWNKdW1wc2NhcmUoKTtcbiAgICB9XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSA2KSB7XG4gICAgICBtb25rZXlUeXBlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcbiAgICAgIHllYXJCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ01vb2RsZScpIHtcbiAgICAgICAgdGltZVRyYXZlbE1vb2RsZSh5ZWFyVG9UcmF2ZWwpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBnZXROZXdzKCk7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ0pPWSBKT1VSTkFMJykge1xuICAgICAgICB0aW1lVHJhdmVsSm95KHllYXJUb1RyYXZlbCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnRpdGxlID09PSAnQnl0ZSBCdXp6Jykge1xuICAgICAgICB0aW1lVHJhdmVsQnV6eih5ZWFyVG9UcmF2ZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZVRyYXZlbExlYWsoeWVhclRvVHJhdmVsKTtcbiAgICAgIH1cbiAgICAgIGNoYW5nZVllYXIoeWVhclRvVHJhdmVsKTtcbiAgICAgIGVuYWJsZVNjcm9sbCgpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUxldHRlcigpO1xuICAgIH0sIDI1NSk7XG4gIH0gZWxzZSBpZiAobW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgcGxheVdyb25nKCk7XG4gICAgd3JvbmdDb3VudCsrO1xuICAgIGlmKHdyb25nQ291bnQgPT0gMyAmJiBjaGVja0NhcHRjaGFUdXRvcmlhbCgpID09PSBmYWxzZSl7XG4gICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xuICAgICAgY29uc3QgZGlhbG9ndWVQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlIHAnKTtcblxuICAgICAgZGlhbG9ndWVQLnRleHRDb250ZW50ID0gJ1RhbHZleiBhIGxldHJhIGluZGlxdWUgYSBwb3Npw6fDo28gaW5pY2lhbCBlIG8gbsO6bWVybyBhIHBvc2nDp8OjbyBkYSBsZXRyYSBxdWUgc2UgZGV2ZSBhcGVydGFyIGEgcGFydGlyIGRhIHBvc2nDp8OjbyBpbmljaWFsLidcbiAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTIwMDApO1xuICAgIH1cbiAgICBpZih3cm9uZ0NvdW50ID09IDUgJiYgY2hlY2tDYXB0Y2hhVHV0b3JpYWwoKSA9PT0gZmFsc2UgJiYgKGRvY3VtZW50LnRpdGxlID09PSAnTW9vZGxlJyB8fCBkb2N1bWVudC50aXRsZSA9PT0gJ0pPWSBKT1VSTkFMJykpe1xuICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcbiAgICAgIGNvbnN0IGRpYWxvZ3VlUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZSBwJyk7XG5cbiAgICAgIGRpYWxvZ3VlUC50ZXh0Q29udGVudCA9ICdQb3IgZXhlbXBsbyBBMiwgbyB1c3XDoXJpbyBkZXZlcmlhIGFwZXJ0YXIgYSBsZXRyYSBDLidcbiAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgODAwMCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvVG9wKTtcbn1cblxuLy8gRnVuw6fDo28gcGFyYSBoYWJpbGl0YXIgbyBzY3JvbGxcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvVG9wKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn1cblxuZnVuY3Rpb24gc2hpZnRMZXR0ZXIobGV0dGVyLCBzaGlmdCkge1xuICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gIGNvbnN0IG5ld0luZGV4ID0gKGFscGhhYmV0LmluZGV4T2YobGV0dGVyKSArIHNoaWZ0KSAlIDI2O1xuICByZXR1cm4gYWxwaGFiZXRbbmV3SW5kZXhdO1xufVxuXG5leHBvcnQgeyBjcmVhdGVDYXB0Y2hhLCB1cGRhdGVMZXR0ZXIgfTtcbiIsImltcG9ydCAnLi4vY3NzL2RuTGVha3MuY3NzJztcbmltcG9ydCB7IHRpbWVUcmF2ZWxMZWFrIH0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XG5pbXBvcnQgeyBnZXRZZWFyLCBjcmVhdGVZZWFycyB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSB9IGZyb20gJy4vY2FwdGNoYVYyLmpzJztcbmltcG9ydCB7IHBsYXlTdGF0aWMsIHNwZWFrIH0gZnJvbSAnLi9hdWRpby5qcyc7XG5pbXBvcnQgeyBsaXN0ZW5Ib21lIH0gZnJvbSAnLi9hdG8xLXYxLmpzJztcblxuaWYgKGRvY3VtZW50LnRpdGxlID09PSAnZGFya05ldExlYWtzJykge1xuICBmZXRjaCgnLi9hdG8xLXYxLmh0bWwnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcblxuICAgICAgLy8gRXh0cmFpYSBvIGNvbnRlw7pkbyBkbyBjYWJlw6dhbGhvXG4gICAgICBjb25zdCBoZWFkZXJDb250ZW50ID0gdGVtcEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJykuaW5uZXJIVE1MO1xuXG4gICAgICAvLyBTdWJzdGl0dWEgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxobyBuYSBww6FnaW5hIGFsdGVyYWRhXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKS5pbm5lckhUTUwgPSBoZWFkZXJDb250ZW50O1xuICAgICAgY29uc3QgdXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVybCBwJyk7XG4gICAgICBjcmVhdGVZZWFycygpO1xuICAgICAgdXJsLnRleHRDb250ZW50ID0gJ2h0dHA6Ly93d3cuZG5sZWFrcy5jb20vJztcbiAgICAgIGxpc3RlblllYXJzKCk7XG4gICAgICBsaXN0ZW5Ib21lKCk7XG4gICAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGRvY3VtZW50LlVSTCk7XG4gICAgfSk7XG5cbiAgICB0aW1lVHJhdmVsTGVhayhnZXRZZWFyKCkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsaXN0ZW5ZZWFycygpO1xuICAgIH0sIDMwMDApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuWWVhcnMoKSB7XG4gIHZhciB5ZWFyRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55ZWFyJyk7XG4gIHllYXJEaXZzLmZvckVhY2goZnVuY3Rpb24gKGRpdikge1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1maW5hbCcpO1xuICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgY3JlYXRlQ2FwdGNoYShkaXYudGV4dENvbnRlbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxubGV0IGltZ051bSA9IDA7XG5cbmZ1bmN0aW9uIGNoYW5nZUZpbmFsVGV4dCgpIHtcbiAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtZmluYWwgcCcpO1xuICBjb25zdCBkaWFsb2d1ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZS1maW5hbCcpO1xuICBjb25zdCB0ZXh0cyA9IFtcbiAgICBbJ09icmlnYWRvJywgMjAwMCwgMTAwMCwgMV0sXG4gICAgWydWb2PDqiBmb2kgZGUgZ3JhbmRlIGFqdWRhJywgMjUwMCwgMzUwMCwgMF0sXG4gICAgWydBY2hlaSBxdWUgc2VyaWEgbWV1IGZpbSwgbWFzIHZvY8OqIG1lIHRyb3V4ZSBkZSB2b2x0YScsIDM1MDAsIDYwMDAsIDJdLFxuICAgIFsnQWdvcmEsIHBvc3NvIGltcGVkaXIgcXVlIGFjYWJlbSBjb21pZ28uJywgMjUwMCwgMTAwMCwgMV0sXG4gICAgWydTdWEgc2VydmVudGlhIG7Do28gbWUgw6kgbWFpcyDDunRpbCcsIDUwMDAsIDMwMDAsIDNdLFxuICAgIFsnQWRldXMuJywgODAwMCwgMTAwLCAwXSxcbiAgXTtcblxuICBsZXQgaW5kZXggPSAwO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUZpbmFsVGV4dCgpIHtcbiAgICBpZiAoaW5kZXggPCB0ZXh0cy5sZW5ndGgpIHtcbiAgICAgIGxldCBhcnIgPSB0ZXh0c1tpbmRleF07XG4gICAgICBkaWFsb2d1ZS50ZXh0Q29udGVudCA9IGFyclswXTtcbiAgICAgIHNwZWFrKCk7XG4gICAgICBkaWFsb2d1ZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgaGlkZURpYWxvZ3VlKGFyclsxXSwgYXJyWzJdKTtcbiAgICAgIGluZGV4Kys7XG4gICAgICBpbWdOdW0gPSBhcnJbM107XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd0ltYWdlcygpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyLWZpbmFsJyk7XG4gICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBpZihibHVyLnN0eWxlLm9wYWNpdHkgPT0gJzAnKXtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoJ09icmlnYWRvIHBvciBqb2dhciEnKVxuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlRGlhbG9ndWUodGltZUR1cmF0aW9uLCB0aW1lQ2hhbmdlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaWFsb2d1ZURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUZpbmFsVGV4dCgpO1xuICAgICAgfSwgdGltZUNoYW5nZSk7XG4gICAgfSwgdGltZUR1cmF0aW9uKTtcbiAgfVxuXG4gIHVwZGF0ZUZpbmFsVGV4dCgpO1xufVxuXG5mdW5jdGlvbiBzaG93SW1hZ2VzKCkge1xuICBsZXQgc3RhdGljSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpYy1pbWcnKTtcbiAgY29uc3QgaW1ncyA9IFtcbiAgICAnY3JlZXB5LnBuZycsXG4gICAgJ2NyZWVweTMucG5nJyxcbiAgICAnY3JlZXB5NC5qcGcnLFxuICAgICdjcmVlcHk1LmpwZycsXG4gICAgJ2NyZWVweTYucG5nJyxcbiAgXTtcbiAgbGV0IHRpbWVzID0gMDtcblxuICBmdW5jdGlvbiBkaXNwbGF5SW1nKCkge1xuICAgIGNvbnN0IHJhbmRvbUltZyA9IGltZ3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1ncy5sZW5ndGgpXTtcbiAgICBjb25zdCBpbWdQYXRoID0gYC4vaW1nLyR7cmFuZG9tSW1nfWA7XG4gICAgc3RhdGljSW1nLnNyYyA9IGltZ1BhdGg7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aW1lcyA8IGltZ051bSkge1xuICAgICAgICBzdGF0aWNJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHBsYXlTdGF0aWMoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc3RhdGljSW1nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgdGltZXMrKztcbiAgICAgICAgICBcbiAgICAgICAgICBkaXNwbGF5SW1nKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSwgMTUwKTtcbiAgfVxuXG4gIGRpc3BsYXlJbWcoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRMYXN0UGFydCgpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY2hhbmdlRmluYWxUZXh0KCk7XG4gIH0sIDUwMDApO1xufVxuXG5leHBvcnQgeyBzdGFydExhc3RQYXJ0IH07XG4iLCJmdW5jdGlvbiBzYXZlU3RhdHNMb2NhbChcbiAganVtcHNjYXJlLFxuICBjaGFwdGVyMSxcbiAgeWVhcnMsXG4gIGN1cnJlbnRZZWFyLFxuICB5ZWFyQ2x1ZSxcbiAgYmFja01vb2RsZUNsdWUsXG4gIHN0YXRpY0p1bXBzY2FyZSxcbiAgY2FwdGNoYVR1dG9yaWFsLFxuKSB7XG4gIGNvbnN0IHN0YXRzID0ge1xuICAgIGp1bXBzY2FyZSxcbiAgICBjaGFwdGVyMSxcbiAgICB5ZWFycyxcbiAgICBjdXJyZW50WWVhcixcbiAgICB5ZWFyQ2x1ZSxcbiAgICBiYWNrTW9vZGxlQ2x1ZSxcbiAgICBzdGF0aWNKdW1wc2NhcmUsXG4gICAgY2FwdGNoYVR1dG9yaWFsXG4gIH07XG5cbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBnYW1lU3RhdHMucHVzaChzdGF0cyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TmV3VXNlcigpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA8IDEpIHtcbiAgICBzYXZlU3RhdHNMb2NhbChmYWxzZSwgZmFsc2UsIFsyMDE0XSwgJzIwMTQnLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlSnVtcHNjYXJlKCkge1xuICAvLyBPYnTDqW0gb3MgZGFkb3MgYXJtYXplbmFkb3MgbG9jYWxtZW50ZSBjb20gYSBjaGF2ZSAnZ2FtZVN0YXRzJ1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgLy8gVmVyaWZpY2Egc2UgaMOhIHBlbG8gbWVub3MgdW0gY29uanVudG8gZGUgZXN0YXTDrXN0aWNhcyBubyBhcnJheVxuICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcbiAgICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmp1bXBzY2FyZSA9IHRydWU7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlQ2hhcHRlcjEoKSB7XG4gIC8vIE9idMOpbSBvcyBkYWRvcyBhcm1hemVuYWRvcyBsb2NhbG1lbnRlIGNvbSBhIGNoYXZlICdnYW1lU3RhdHMnXG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcblxuICAvLyBWZXJpZmljYSBzZSBow6EgcGVsbyBtZW5vcyB1bSBjb25qdW50byBkZSBlc3RhdMOtc3RpY2FzIG5vIGFycmF5XG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY2hhcHRlcjEgPSB0cnVlO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrSnVtcHNjYXJlKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uanVtcHNjYXJlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja0NoYXB0ZXIxKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY2hhcHRlcjEgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVllYXJzKCkge1xuICBjb25zdCB0aW1lTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lbGluZScpO1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG4gIGxldCBhbGxZZWFycyA9IGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0ueWVhcnM7XG5cbiAgaWYgKHRpbWVMaW5lLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgLy8gSXRlcmEgc29icmUgY2FkYSBhbm8gbm8gYXJyYXkgYWxsWWVhcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFllYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBDcmlhIHVtYSBkaXYgY29tIGEgY2xhc3NlICd5ZWFyJyBlIG8gdGV4dG8gaWd1YWwgYW8gdmFsb3Igbm8gYXJyYXlcbiAgICAgIGNvbnN0IHllYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHllYXJEaXYuY2xhc3NMaXN0LmFkZCgneWVhcicpO1xuICAgICAgeWVhckRpdi50ZXh0Q29udGVudCA9IGFsbFllYXJzW2ldO1xuXG4gICAgICAvLyBBZGljaW9uYSBhIGRpdiBhbyBlbGVtZW50byB0aW1lTGluZVxuICAgICAgdGltZUxpbmUuYXBwZW5kQ2hpbGQoeWVhckRpdik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFllYXIobmV3WWVhcikge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG4gIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0ueWVhcnMucHVzaChuZXdZZWFyKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFllYXIoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcblxuICByZXR1cm4gZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jdXJyZW50WWVhcjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlWWVhcihuZXdZZWFyKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcblxuICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmN1cnJlbnRZZWFyID0gbmV3WWVhcjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VZZWFyQ2x1ZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJDbHVlID0gdHJ1ZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xufVxuXG5mdW5jdGlvbiBjaGVja1llYXJDbHVlKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0ueWVhckNsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU1vb2RsZUNsdWUoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5iYWNrTW9vZGxlQ2x1ZSA9IHRydWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tNb29kbGVDbHVlKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uYmFja01vb2RsZUNsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVN0YXRpY0p1bXBzY2FyZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnN0YXRpY0p1bXBzY2FyZSA9IHRydWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tTdGF0aWNKdW1wc2NhcmUoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcblxuICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5zdGF0aWNKdW1wc2NhcmUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNhcHRjaGFUdXRvcmlhbCgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNhcHRjaGFUdXRvcmlhbCA9IHRydWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDYXB0Y2hhVHV0b3JpYWwoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcblxuICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jYXB0Y2hhVHV0b3JpYWwgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7XG4gIHZlcmlmeU5ld1VzZXIsXG4gIGNoYW5nZUp1bXBzY2FyZSxcbiAgY2hhbmdlQ2hhcHRlcjEsXG4gIGNoZWNrSnVtcHNjYXJlLFxuICBjaGVja0NoYXB0ZXIxLFxuICBjcmVhdGVZZWFycyxcbiAgYWRkWWVhcixcbiAgZ2V0WWVhcixcbiAgY2hhbmdlWWVhcixcbiAgc2F2ZVN0YXRzTG9jYWwsXG4gIGNoYW5nZVllYXJDbHVlLFxuICBjaGVja1llYXJDbHVlLFxuICBjaGFuZ2VNb29kbGVDbHVlLFxuICBjaGVja01vb2RsZUNsdWUsXG4gIGNoZWNrU3RhdGljSnVtcHNjYXJlLFxuICBjaGFuZ2VTdGF0aWNKdW1wc2NhcmUsXG4gIGNoZWNrQ2FwdGNoYVR1dG9yaWFsLFxuICBjaGFuZ2VDYXB0Y2hhVHV0b3JpYWxcbn07XG4iLCJpbXBvcnQgeyBsaXN0ZW5Ib21lIH0gZnJvbSBcIi4vYXRvMS12MS5qc1wiO1xuaW1wb3J0IHsgYWRkRXZlbnQgfSBmcm9tIFwiLi9ieXRlQnV6ei5qc1wiO1xuaW1wb3J0IHsgc3RhcnRMYXN0UGFydCB9IGZyb20gXCIuL2RuTGVha3MuanNcIjtcblxuZnVuY3Rpb24gdGltZVRyYXZlbEpveSh0ZXh0Q29udGVudCkge1xuICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXInKTtcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xuICAgICAgaWYgKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpIHtcbiAgICAgICAgZmV0Y2goYC4vam95Sm91cm5hbCR7dGV4dENvbnRlbnR9Lmh0bWxgKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAuY29udGVudC0ke3RleHRDb250ZW50fWBcbiAgICAgICAgICAgICkuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWpveScpO1xuICAgICAgICAgICAgY29uc3QgZGlub3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlubycpO1xuXG4gICAgICAgICAgICBkaW5vcy5mb3JFYWNoKChkaW5vKSA9PiB7XG4gICAgICAgICAgICAgIGRpbm8uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcyMDE2Jykge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ2NvbXBhY3R6JztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUud2lkdGggPSAnNzV2dyc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JheSc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLndpZHRoID0gJzcwdncnO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRZZWFyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDE1MDApO1xuICAgIH0sIDE1MDApO1xuICB9LCAzMDApO1xufVxuXG5mdW5jdGlvbiB0aW1lVHJhdmVsTW9vZGxlKHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xuICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHcteWVhcicpO1xuICAgICAgY29uc3QgY3VycmVudFllYXJUZXh0ID0gY3VycmVudFllYXIudGV4dENvbnRlbnQ7XG4gICAgICBpZiAoY3VycmVudFllYXJUZXh0ICE9PSB0ZXh0Q29udGVudCkge1xuICAgICAgICBmZXRjaChgLi9hdG8xLSR7dGV4dENvbnRlbnR9Lmh0bWxgKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcblxuICAgICAgICAgICAgY29uc3QgbW9vZGxlID0gdGVtcEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYC5tb29kbGUke3RleHRDb250ZW50fWBcbiAgICAgICAgICAgICkuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3Qgb2xkTW9vZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb2RsZScpO1xuICAgICAgICAgICAgb2xkTW9vZGxlLmlubmVySFRNTCA9IG1vb2RsZTtcblxuICAgICAgICAgICAgY29uc3QgbmV3cyA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAubmV3cyR7dGV4dENvbnRlbnR9YFxuICAgICAgICAgICAgKS5pbm5lckhUTUw7XG4gICAgICAgICAgICBjb25zdCBvbGROZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MtY29udGFpbmVyJyk7XG4gICAgICAgICAgICBvbGROZXdzLmlubmVySFRNTCA9IG5ld3M7XG5cbiAgICAgICAgICAgIGlmICh0ZXh0Q29udGVudCA9PT0gJzIwMTYnKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICAgIGNvbnN0IG1vb2RsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb2RsZS10aXRsZScpO1xuICAgICAgICAgICAgICBjb25zdCBpbWdOZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1uZXdzJyk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzYzNjM2MnO1xuICAgICAgICAgICAgICBpbWdOZXdzLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgbW9vZGxlVGl0bGUuc3R5bGUuZm9udEZhbWlseSA9ICdub3ZhUm91bmQnO1xuICAgICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ2NvbXBhY3R6JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICAgIGNvbnN0IG1vb2RsZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vb2RsZS10aXRsZScpO1xuICAgICAgICAgICAgICBjb25zdCBpbWdOZXdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1uZXdzJyk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgaW1nTmV3cy5zdHlsZS5ib3JkZXIgPSAnc29saWQgMC41dmggZ3JheSc7XG4gICAgICAgICAgICAgIG1vb2RsZVRpdGxlLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9LCAxNTAwKTtcbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gdGltZVRyYXZlbEJ1enoodGV4dENvbnRlbnQpIHtcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xuICAgICAgZmV0Y2goYC4vYnl0ZUJ1enoke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNvbnRlbnQtJHt0ZXh0Q29udGVudH1gXG4gICAgICAgICAgKS5pbm5lckhUTUw7XG5cbiAgICAgICAgICBjb25zdCBvbGRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYnV6eicpO1xuICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcyMDE2Jykge1xuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnY29tcGFjdHonO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICAgICAgICAgICB2YXIgaGVhZGVyVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG4gICAgICAgICAgICBoZWFkZXJUYWcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGFkZEV2ZW50KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XG4gICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSAnMTAwdmgnO1xuICAgICAgICAgICAgdmFyIGhlYWRlclRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgICAgICAgICAgaGVhZGVyVGFnLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGN1cnJlbnRZZWFyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgICAgIH0pO1xuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9LCAxNTAwKTtcbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gdGltZVRyYXZlbExlYWsodGV4dENvbnRlbnQpIHtcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyLWZpbmFsJyk7XG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xuICAgICAgZmV0Y2goYC4vZG5MZWFrcyR7dGV4dENvbnRlbnR9Lmh0bWxgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuY29udGVudCR7dGV4dENvbnRlbnR9YFxuICAgICAgICAgICkuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LWxlYWtzJyk7XG4gICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgICAgb2xkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgIGlmICh0ZXh0Q29udGVudCA9PT0gJzIwMTYnKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMTgxODE4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDgwODA4JztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBzdGFydExhc3RQYXJ0KCk7XG4gICAgICAgICAgICAgIGNvbnN0IGRpbm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nTm90Rm91bmRGaW5hbCcpO1xuICAgICAgICAgICAgICBjb25zdCBsaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodCcpO1xuICAgICAgICAgICAgICBsaWdodC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICBkaW5vLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICB9KTtcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIDMwMCk7XG59XG5leHBvcnQgeyB0aW1lVHJhdmVsSm95LCB0aW1lVHJhdmVsTW9vZGxlLCB0aW1lVHJhdmVsQnV6eiwgdGltZVRyYXZlbExlYWsgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImF0bzF2MVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2F0bzEtdjEuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=