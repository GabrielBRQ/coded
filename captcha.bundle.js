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
/******/ 			"captcha": 0
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
  !*** ./src/scripts/captcha.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCaptcha: () => (/* binding */ createCaptcha),
/* harmony export */   updateLetter: () => (/* binding */ updateLetter)
/* harmony export */ });
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");
/* harmony import */ var _ato1_v1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ato1-v1.js */ "./src/scripts/ato1-v1.js");



let lastPressedKey = '';
let correctCount = 0;

function createCaptcha() {
  var container = document.querySelector('.container-prologo');
  var safeScreen = document.querySelector('.safe-screen');
  safeScreen.style.display = 'flex';

  // Cria a div com a classe "monkey-type".
  var monkeyTypeDiv = document.createElement('div');
  monkeyTypeDiv.classList.add('monkey-type-prologo');

  // Cria a div com a classe "monkey-title" e define o texto
  var monkeyTitleDiv = document.createElement('div');
  monkeyTitleDiv.classList.add('monkey-title-prologo');
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
  const letterDiv = document.querySelector('.monkey-type-prologo .letter');

  lastPressedKey = '';
  const randomLetter = generateRandomLetter();
  letterDiv.textContent = randomLetter;
  letterDiv.classList.remove('correct');
}

function handleKeyPress(event) {
  const letterDiv = document.querySelector('.monkey-type-prologo .letter');
  const progressBar = document.querySelector('.monkey-type-prologo .progress-bar');
  const monkeyType = document.querySelector('.monkey-type-prologo');

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
    progressBar.style.width = correctCount * 6.6 + '%';

    if (correctCount === 2 || correctCount === 6) {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playEarthquake)(0.8, 'little-shake', 700);
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('earthquake'));
    }

    if (correctCount === 11) {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playEarthquake)(0.8, 'medium-shake', 700);
      setTimeout(() => {
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('earthquake'));
      }, 700);
    }

    if (correctCount === 15) {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playEarthquake)(1, 'big-shake');
      const eye = document.querySelector('.eye');
      eye.style.opacity = 0.25;
      monkeyType.style.display = 'none';
      setTimeout(() => {
        const dialogue = document.querySelector('.dialogue-prologo p');
        const dialogueDiv = document.querySelector('.dialogue-prologo');
        const container = document.querySelector('.container-prologo');
        container.style.opacity = 0;
        dialogue.textContent = 'Obrigado!';
        dialogueDiv.style.display = 'flex';
        setTimeout(() => {
          window.location.href = './ato1-v1.html';
        }, 9750);
      }, 4000);
      setTimeout(() => {
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('earthquake'));
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('noise'));
        eye.style.height = '38vh';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdGNoYS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLHdLQUFpRTtBQUM3Ryw0Q0FBNEMsa0pBQXNEO0FBQ2xHLDRDQUE0Qyw0SkFBMkQ7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZ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O0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtB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QUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxRQUFRLHlEQUFjO0FBQ3RCLFFBQVEseURBQWM7QUFDdEI7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQSxJQUFJLG9EQUFTO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUtFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2F0bzEtdjEuY3NzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9ieXRlQnV6ei5jc3MiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2RuTGVha3MuY3NzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvYXRvMS12MS5jc3M/YWZmNCIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvYnl0ZUJ1enouY3NzPzJkMWIiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2RuTGVha3MuY3NzP2FhM2EiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2F0bzEtdjEuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9hdWRpby5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2J5dGVCdXp6LmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvY2FwdGNoYVYyLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvZG5MZWFrcy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvdGltZU1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2NhcHRjaGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250L2NvbXBhY3QvQ29tcGFjdC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvTm92YV9Sb3VuZC9Ob3ZhUm91bmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBub3ZhUm91bmQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5oZWFkZXJBdG8xIHtcbiAgaGVpZ2h0OiAxNnZoO1xufVxuXG4uY2hhcHRlciB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAzMHZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJ2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMi4xcyBlYXNlLWluLW91dDtcbn1cblxuLmNoYXB0ZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogNXZoO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jaGFwdGVyIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIC41dmggZ3JheTtcbiAgY29sb3I6IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAzdmg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubW9vZGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vb2RsZS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTd2aDtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xufVxuXG4ubW9vZGxlLXRpdGxlIHAge1xuICBmb250LXNpemU6IDE2dmg7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogNHZoO1xufVxuXG4uc2VhcmNoLWJ1dHRvbnMge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDA7XG4gIG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLnNlYXJjaC1idXR0b25zIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMi4xdmg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlcjogc29saWQgLjR2aDtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjICM5OTkgIzk5OSAjY2NjO1xuICBoZWlnaHQ6IDV2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwIC44dmggMCAuOHZoO1xufVxuXG4ucHJpdmFjeSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBmb250LXNpemU6IDJ2aDtcbiAgbWFyZ2luLXRvcDogMnZoO1xufVxuXG4udGltZVdhcnAge1xuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XG4gIGhlaWdodDogMTZ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIGxlZnQ6IDA7XG59XG5cbi50dy1jZW50ZXIge1xuICB3aWR0aDogNTV2dztcbn1cblxuLnR3LXllYXIsXG4udHctdGl0bGUge1xuICBmb250LXNpemU6IDR2aDtcbn1cblxuLnVybCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnZoO1xufVxuXG4udXJsIHB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogM3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG59XG5cbi51cmwgaW1nIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogM3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aW1lbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDd2aDtcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnllYXIge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzLjUlO1xuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xuICBmb250LXNpemU6IDEuNXZoO1xuICBwYWRkaW5nOiAuN3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnllYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMTB2aDtcbiAgd2lkdGg6IDkwdnc7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlcjogbm9uZTtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDRzIGVhc2UtaW4tb3V0O1xufVxuXG4ubmV3cy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHZoO1xuICBtYXJnaW4tYm90dG9tOiA3dmg7XG59XG5cbi5uZXdzLXRpdGxlMjAxNiB7XG4gIGZvbnQtZmFtaWx5OiBub3ZhUm91bmQ7XG4gIGZvbnQtc2l6ZTogNHZoO1xuICBtYXJnaW4tYm90dG9tOiA3dmg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzE1NmFlYztcbn1cblxuLm5ld3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xufVxuXG4ubmV3cy1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDV2aDtcbn1cblxuLmltZy1uZXdzIHtcbiAgaGVpZ2h0OiAxMnZoO1xuICB3aWR0aDogMTZ2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xufVxuXG4ubmV3czIwMTQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXdzMjAxNCBwIHtcbiAgZm9udC1zaXplOiAyLjR2aDtcbiAgd2lkdGg6IDQwdmg7XG59XG5cbi5uZXdzMjAxNiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmV3czIwMTYgcCB7XG4gIGZvbnQtc2l6ZTogMi40dmg7XG4gIHdpZHRoOiA0NXZoO1xufVxuXG4uZGlhbG9ndWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDE4MywgMjAxKTtcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLmJsdXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxOTB2aDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubW9ua2V5LXR5cGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA1MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9ua2V5LXRpdGxlIHtcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXG4gIGZvbnQtc2l6ZTogNHZoO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMi44dmg7XG59XG5cbi5sZXR0ZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogOHZoO1xufVxuXG4uY29ycmVjdCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmluY29ycmVjdCB7XG4gIGNvbG9yOiBicm93bjtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcbiAgd2lkdGg6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2F0bzEtdjEuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQTZDO0FBQy9DOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFrRDtBQUNwRDs7QUFF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QixRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1Qjs7RUFFdkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFFBQVE7QUFDVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBzcmM6IHVybCguLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICBzcmM6IHVybCguLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogY29tcGFjdHo7XFxuICBzcmM6IHVybCguLi9mb250L2NvbXBhY3QvQ29tcGFjdC1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvTm92YV9Sb3VuZC9Ob3ZhUm91bmQtUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5oZWFkZXJBdG8xIHtcXG4gIGhlaWdodDogMTZ2aDtcXG59XFxuXFxuLmNoYXB0ZXIge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMzB2dztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTJ2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jaGFwdGVyIHNwYW4ge1xcbiAgZm9udC1zaXplOiA1dmg7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5jaGFwdGVyIGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHNvbGlkIC41dmggZ3JheTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAzdmg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vb2RsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb29kbGUtdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE3dmg7XFxuICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbn1cXG5cXG4ubW9vZGxlLXRpdGxlIHAge1xcbiAgZm9udC1zaXplOiAxNnZoO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogNDB2dztcXG4gIGhlaWdodDogNHZoO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbnMge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzAwMDtcXG4gIG1hcmdpbi10b3A6IDF2aDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b25zIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIuMXZoO1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGJvcmRlcjogc29saWQgLjR2aDtcXG4gIGJvcmRlci1jb2xvcjogI2NjYyAjOTk5ICM5OTkgI2NjYztcXG4gIGhlaWdodDogNXZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMCAuOHZoIDAgLjh2aDtcXG59XFxuXFxuLnByaXZhY3kge1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZm9udC1zaXplOiAydmg7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxufVxcblxcbi50aW1lV2FycCB7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xcbiAgaGVpZ2h0OiAxNnZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOjA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udHctY2VudGVyIHtcXG4gIHdpZHRoOiA1NXZ3O1xcbn1cXG5cXG4udHcteWVhcixcXG4udHctdGl0bGUge1xcbiAgZm9udC1zaXplOiA0dmg7XFxufVxcblxcbi51cmwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2aDtcXG59XFxuXFxuLnVybCBwe1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxufVxcblxcbi51cmwgaW1nIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAzdmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aW1lbGluZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3ZoO1xcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi55ZWFyIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMy41JTtcXG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBmb250LXNpemU6IDEuNXZoO1xcbiAgcGFkZGluZzogLjd2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueWVhcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDExMHZoO1xcbiAgd2lkdGg6IDkwdnc7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5uZXdzLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcbn1cXG5cXG4ubmV3cy10aXRsZTIwMTYge1xcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzE1NmFlYztcXG59XFxuXFxuLm5ld3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcXG59XFxuXFxuLm5ld3MtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1dmg7XFxufVxcblxcbi5pbWctbmV3cyB7XFxuICBoZWlnaHQ6IDEydmg7XFxuICB3aWR0aDogMTZ2aDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIGdyYXk7XFxufVxcblxcbi5uZXdzMjAxNCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3czIwMTQgcCB7XFxuICBmb250LXNpemU6IDIuNHZoO1xcbiAgd2lkdGg6IDQwdmg7XFxufVxcblxcbi5uZXdzMjAxNiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3czIwMTYgcCB7XFxuICBmb250LXNpemU6IDIuNHZoO1xcbiAgd2lkdGg6IDQ1dmg7XFxufVxcblxcbi5kaWFsb2d1ZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTgzLCAyMDEpO1xcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLmJsdXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxOTB2aDtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb25rZXktdHlwZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb25rZXktdGl0bGUge1xcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAyLjh2aDtcXG59XFxuXFxuLmxldHRlci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogOHZoO1xcbn1cXG5cXG4uY29ycmVjdCB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5pbmNvcnJlY3Qge1xcbiAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XFxuICB3aWR0aDogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L0JlYmFzX05ldWUvQmViYXNOZXVlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogYmViYXM7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogY29tcGFjdHo7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYm9keS1idXp6IHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcbiAgaGVpZ2h0OiAxMTB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5oZWFkZXItYnV6eiB7XG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBlM2MwYjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDIwdmg7XG4gIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDE3NSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5qb3ktdGl0bGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBncmF5O1xuICB3aWR0aDogMTB2dztcbiAgaGVpZ2h0OiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDV2aDtcbn1cblxuLmNvbnRlbnQtYnV6eiB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDcwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDUwcHggMCA1MHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcbn1cblxuLmNvbnRlbnQtdGl0bGUge1xuICBmb250LWZhbWlseTogYmViYXM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0dmgpO1xuICBmb250LXNpemU6IDd2aDtcbiAgcGFkZGluZzogMnZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXRpdGxlLTIwMTYge1xuICBmb250LWZhbWlseTogYmViYXM7XG4gIGZvbnQtc2l6ZTogNnZoO1xuICBwYWRkaW5nOiAydmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZy0yMDE2IHtcbiAgaGVpZ2h0OiA1MHZoO1xuICB3aWR0aDogYXV0bztcbiAgb3BhY2l0eTogMC43O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSg2NSUpO1xufVxuXG4uY29udGVudC1idXp6IHAge1xuICBmb250LXNpemU6IDIuNXZoO1xuICBwYWRkaW5nOiAwIDJ2aCAydmggMnZoO1xufVxuXG4udGltZVdhcnAge1xuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XG4gIGhlaWdodDogMTZ2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udHctY2VudGVyIHtcbiAgd2lkdGg6IDU1dnc7XG59XG5cbi50dy15ZWFyLFxuLnR3LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0dmg7XG59XG5cbi51cmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJ2aDtcbn1cblxuLnVybCBwe1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDN2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIuNXZoO1xufVxuXG4udXJsIGltZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDN2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGltZWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3dmg7XG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi55ZWFyIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMy41JTtcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgcGFkZGluZzogLjd2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi55ZWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xufVxuXG5wIGkge1xuICBmb250LXNpemU6IDIuN3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaW1nLWJ5dGUge1xuICB3aWR0aDogODAlO1xufVxuXG4uYmx1ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDE5MHZoO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb25rZXktdHlwZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IDUwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcbiAgY29sb3I6IGJsYWNrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb25rZXktdGl0bGUge1xuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcbiAgZm9udC1zaXplOiA0dmg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAyLjh2aDtcbn1cblxuLmxldHRlci1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4dmg7XG59XG5cbi5jb3JyZWN0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uaW5jb3JyZWN0IHtcbiAgY29sb3I6IGJyb3duO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xuICB3aWR0aDogMDtcbn1cblxuLm5vdC1mb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbWdOb3RGb3VuZCB7XG4gIGhlaWdodDogMTV2aDtcbn1cblxuLnN0YXRpYy1pbWctanVtcHNjYXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHotaW5kZXg6IDM7XG59XG5cbkBrZXlmcmFtZXMgbW92ZUltYWdlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0yNXZoOyAvKiBQb3Npw6fDo28gaW5pY2lhbCAqL1xuICB9XG4gIHRvIHtcbiAgICByaWdodDogLTU1dmg7IC8qIFBvc2nDp8OjbyBmaW5hbCAqL1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYnl0ZUJ1enouY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFlBQVk7RUFDWixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsWUFBWSxFQUFFLG9CQUFvQjtFQUNwQztFQUNBO0lBQ0UsWUFBWSxFQUFFLGtCQUFrQjtFQUNsQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIHNyYzogdXJsKC4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9CZWJhc19OZXVlL0JlYmFzTmV1ZS1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9keS1idXp6IHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcXG4gIGhlaWdodDogMTEwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5oZWFkZXItYnV6eiB7XFxuICBmb250LWZhbWlseTogY29tcGFjdHo7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUzYzBiO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgY29sb3I6IHJnYigxNzUsIDE3NSwgMTc1KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmpveS10aXRsZSB7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBncmF5O1xcbiAgd2lkdGg6IDEwdnc7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1dmg7XFxufVxcblxcbi5jb250ZW50LWJ1enoge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDcwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDUwcHggMCA1MHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0dmgpO1xcbiAgZm9udC1zaXplOiA3dmg7XFxuICBwYWRkaW5nOiAydmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LXRpdGxlLTIwMTYge1xcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcbiAgZm9udC1zaXplOiA2dmg7XFxuICBwYWRkaW5nOiAydmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbWctMjAxNiB7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICB3aWR0aDogYXV0bztcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDY1JSk7XFxufVxcblxcbi5jb250ZW50LWJ1enogcCB7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbiAgcGFkZGluZzogMCAydmggMnZoIDJ2aDtcXG59XFxuXFxuLnRpbWVXYXJwIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50dy1jZW50ZXIge1xcbiAgd2lkdGg6IDU1dnc7XFxufVxcblxcbi50dy15ZWFyLFxcbi50dy10aXRsZSB7XFxuICBmb250LXNpemU6IDR2aDtcXG59XFxuXFxuLnVybCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4udXJsIHB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLnVybCBpbWcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnllYXIge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzLjUlO1xcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxuICBwYWRkaW5nOiAuN3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55ZWFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcXG59XFxuXFxucCBpIHtcXG4gIGZvbnQtc2l6ZTogMi43dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmltZy1ieXRlIHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5ibHVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTkwdmg7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubW9ua2V5LXR5cGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXFxuICBmb250LXNpemU6IDR2aDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMi44dmg7XFxufVxcblxcbi5sZXR0ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDh2aDtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaW5jb3JyZWN0IHtcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLnByb2dyZXNzLWJhciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5ub3QtZm91bmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5pbWdOb3RGb3VuZCB7XFxuICBoZWlnaHQ6IDE1dmg7XFxufVxcblxcbi5zdGF0aWMtaW1nLWp1bXBzY2FyZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZUltYWdlIHtcXG4gIGZyb20ge1xcbiAgICByaWdodDogLTI1dmg7IC8qIFBvc2nDp8OjbyBpbmljaWFsICovXFxuICB9XFxuICB0byB7XFxuICAgIHJpZ2h0OiAtNTV2aDsgLyogUG9zacOnw6NvIGZpbmFsICovXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJvZHktbGVha3Mge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi50aW1lV2FycCB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcbiAgaGVpZ2h0OiAxNnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50dy1jZW50ZXIge1xuICB3aWR0aDogNTV2dztcbn1cblxuLnR3LXllYXIsXG4udHctdGl0bGUge1xuICBmb250LXNpemU6IDR2aDtcbn1cblxuLnVybCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnZoO1xufVxuXG4udXJsIHB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogM3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG59XG5cbi51cmwgaW1nIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogM3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aW1lbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDd2aDtcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnllYXIge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzLjUlO1xuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xuICBmb250LXNpemU6IDEuNXZoO1xuICBwYWRkaW5nOiAuN3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnllYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XG59XG5cbi5ibHVyLWZpbmFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMjtcbn1cblxuLm1vbmtleS10eXBlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBncmlkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogNTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vbmtleS10aXRsZSB7XG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxuICBmb250LXNpemU6IDR2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDIuOHZoO1xufVxuXG4ubGV0dGVyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDh2aDtcbn1cblxuLmNvcnJlY3Qge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbmNvcnJlY3Qge1xuICBjb2xvcjogYnJvd247XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XG4gIHdpZHRoOiAwO1xufVxuXG4ubm90LWZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQyMDE0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbWdOb3RGb3VuZEZpbmFsIHtcbiAgaGVpZ2h0OiAxNXZoO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmRpYWxvZ3VlLWZpbmFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XG4gIG1hcmdpbi1ib3R0b206IDd2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG59XG5cbi5saWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMnZoO1xuICB3aWR0aDogMnZoO1xuICBib3gtc2hhZG93OiAwdmggMHZoIDE1dmggcmdiKDE5MCwgMTkwLCAxOTApO1xuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zdGF0aWMtaW1ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5jYXB0Y2hhIHtcbiAgei1pbmRleDogMjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9j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QjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFVBQVU7RUFDViwyQ0FBMkM7RUFDM0MsVUFBVTs7RUFFVixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBzcmM6IHVybCguLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICBzcmM6IHVybCguLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogY29tcGFjdHo7XFxuICBzcmM6IHVybCguLi9mb250L2NvbXBhY3QvQ29tcGFjdC1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJvZHktbGVha3Mge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi50aW1lV2FycCB7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xcbiAgaGVpZ2h0OiAxNnZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4udHctY2VudGVyIHtcXG4gIHdpZHRoOiA1NXZ3O1xcbn1cXG5cXG4udHcteWVhcixcXG4udHctdGl0bGUge1xcbiAgZm9udC1zaXplOiA0dmg7XFxufVxcblxcbi51cmwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2aDtcXG59XFxuXFxuLnVybCBwe1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIHdpZHRoOiA5NSU7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxufVxcblxcbi51cmwgaW1nIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAzdmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50aW1lbGluZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogN3ZoO1xcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi55ZWFyIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMy41JTtcXG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBmb250LXNpemU6IDEuNXZoO1xcbiAgcGFkZGluZzogLjd2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueWVhcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XFxufVxcblxcbi5ibHVyLWZpbmFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLm1vbmtleS10eXBlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vbmtleS10aXRsZSB7XFxuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxcbiAgZm9udC1zaXplOiA0dmg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDIuOHZoO1xcbn1cXG5cXG4ubGV0dGVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA4dmg7XFxufVxcblxcbi5jb3JyZWN0IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmluY29ycmVjdCB7XFxuICBjb2xvcjogYnJvd247XFxufVxcblxcbi5wcm9ncmVzcy1iYXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcXG4gIHdpZHRoOiAwO1xcbn1cXG5cXG4ubm90LWZvdW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGVudDIwMTQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmltZ05vdEZvdW5kRmluYWwge1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5kaWFsb2d1ZS1maW5hbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgNzUpO1xcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLmxpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAydmg7XFxuICB3aWR0aDogMnZoO1xcbiAgYm94LXNoYWRvdzogMHZoIDB2aCAxNXZoIHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gIG9wYWNpdHk6IDA7XFxuXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc3RhdGljLWltZ3tcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uY2FwdGNoYSB7XFxuICB6LWluZGV4OiAyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXRvMS12MS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0bzEtdjEuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J5dGVCdXp6LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnl0ZUJ1enouY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RuTGVha3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kbkxlYWtzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9jc3MvYXRvMS12MS5jc3MnO1xuaW1wb3J0IHtcbiAgY2hlY2tDaGFwdGVyMSxcbiAgY2hhbmdlQ2hhcHRlcjEsXG4gIGNyZWF0ZVllYXJzLFxuICBnZXRZZWFyLFxufSBmcm9tICcuL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEgfSBmcm9tICcuL2NhcHRjaGFWMi5qcyc7XG5pbXBvcnQgeyB0aW1lVHJhdmVsTW9vZGxlIH0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XG5pbXBvcnQgeyBwbGF5Q2hhcHRlciwgc3BlYWsgfSBmcm9tICcuL2F1ZGlvLmpzJztcblxuaWYgKGRvY3VtZW50LnRpdGxlID09PSAnTW9vZGxlJykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGRvY3VtZW50LlVSTCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZG9jdW1lbnQuVVJMKTtcbiAgICB9KTtcbiAgICB0aW1lVHJhdmVsTW9vZGxlKGdldFllYXIoKSk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGlmIChjaGVja0NoYXB0ZXIxKCkgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBzdGFydENoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcblxuICAgICAgc3RhcnRDaGFwdGVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwbGF5Q2hhcHRlcigpO1xuICAgICAgICAgIHN0YXJ0Q2hhcHRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZG9jdW1lbnQuVVJMKTtcbiAgICAgICAgICB2YXIgY2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFwdGVyJyk7XG4gICAgICAgICAgY2hhcHRlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUNoYXB0ZXIxKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2hhcHRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICBhY3RpdmVDb250ZW50KCk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3BlYWsoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgICAgICB9LCA1NTAwKTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAzMDAwXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFwdGVyJyk7XG4gICAgICBjaGFwdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICBhY3RpdmVDb250ZW50KCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjcmVhdGVZZWFycygpO1xuICAgIH0sIDE1MDApO1xuXG4gICAgdmFyIGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VhcmNoLWJ1dHRvbnMgYnV0dG9uJyk7XG5cbiAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzcGVhaygpO1xuICAgICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xuICAgICAgICBkaWFsb2d1ZS50ZXh0Q29udGVudCA9ICdOw6NvIGZ1bmNpb25hLi4uJztcbiAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2V0TmV3cygpO1xuICAgICAgbGlzdGVuWWVhcnMoKTtcbiAgICB9LCA0MDAwKTtcbiAgfSk7XG4gIGxpc3RlbkhvbWUoKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3cygpIHtcbiAgdmFyIHR3WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gIGlmICh0d1llYXIudGV4dENvbnRlbnQgPT09ICcyMDE0Jykge1xuICAgIHZhciBuZXdzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MyMDE0Jyk7XG5cbiAgICBuZXdzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNvdSAyMDE0Jyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2pveUpvdXJuYWwuaHRtbCc7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG5ld3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3czIwMTYnKTtcblxuICAgIG5ld3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2xpY291IDIwMTYnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vYnl0ZUJ1enouaHRtbCc7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZlQ29udGVudCgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmZmZic7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzExMHZoJztcbn1cblxuZnVuY3Rpb24gbGlzdGVuWWVhcnMoKSB7XG4gIHZhciB5ZWFyRGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy55ZWFyJyk7XG4gIHllYXJEaXZzLmZvckVhY2goZnVuY3Rpb24gKGRpdikge1xuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xuICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgY3JlYXRlQ2FwdGNoYShkaXYudGV4dENvbnRlbnQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuSG9tZSgpe1xuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2F0bzEtdjEuaHRtbCc7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBnZXROZXdzLCBsaXN0ZW5Ib21lfTtcbiIsImZ1bmN0aW9uIHBsYXlXcm9uZygpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhRXJyYWRhJyk7XG4gIGF1ZGlvLnZvbHVtZSA9IDAuNztcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBwbGF5UmlnaHQoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWNsYUNvcnJldGEnKTtcbiAgYXVkaW8udm9sdW1lID0gMC4yO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlFYXJ0aHF1YWtlKHZvbHVtZSwgdHlwZSkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXByb2xvZ28nKTtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VhcnRocXVha2UnKTtcbiAgYXVkaW8udm9sdW1lID0gdm9sdW1lO1xuICBhdWRpby5wbGF5KCk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHR5cGUpO1xuXG4gIGlmICh0eXBlICE9PSAnYmlnLXNoYWtlJykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUodHlwZSk7XG4gICAgfSwgNzAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpIHtcbiAgaWYgKGF1ZGlvRWxlbWVudC52b2x1bWUgPj0gMC40NSkge1xuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjQ1O1xuICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwLXByb2xvZ28nKTtcbiAgICB0aW1lV2FycC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHJldHVybjtcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lICs9IDAuMDU7XG4gICAgaW5jcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcbiAgfSwgODAwKTtcbn1cblxuZnVuY3Rpb24gZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KSB7XG4gIGlmIChhdWRpb0VsZW1lbnQudm9sdW1lIDw9IDAuMSkge1xuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjA1O1xuICAgIHJldHVybjtcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lIC09IDAuMDc7XG4gICAgZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gcGxheUhhcHB5KCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFwcHknKTtcbiAgYXVkaW8udm9sdW1lID0gMTtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBzdG9wSGFwcHkoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXBweScpO1xuICBhdWRpby5wYXVzZSgpO1xufVxuXG5mdW5jdGlvbiBwbGF5U3RhdGljKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGljJyk7XG4gIGF1ZGlvLnZvbHVtZSA9IDE7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gcGxheUNoYXB0ZXIoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFwdGVyU291bmQnKTtcbiAgYXVkaW8udm9sdW1lID0gMTtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBzcGVhaygpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWFrJyk7XG4gIGNvbnN0IHNvdW5kcyA9IFtcbiAgICAnYmlwMi5tcDMnLFxuICAgICdiaXAzLm1wMycsXG4gICAgJ2JpcDQud2F2JyxcbiAgICAnYmlwNS53YXYnLFxuICBdO1xuXG4gIGNvbnN0IHJhbmRvbVNvdW5kID0gc291bmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNvdW5kcy5sZW5ndGgpXTtcbiAgICBjb25zdCBhdWRpb1BhdGggPSBgLi9hdWRpby8ke3JhbmRvbVNvdW5kfWA7XG4gICAgYXVkaW8uc3JjID0gYXVkaW9QYXRoO1xuICAgIGF1ZGlvLnZvbHVtZSA9IC44O1xuXG4gICAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBhZGRZZWFyU29uZygpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXJTb25nJyk7XG4gIGF1ZGlvLnZvbHVtZSA9IC42O1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmV4cG9ydCB7XG4gIHBsYXlSaWdodCxcbiAgcGxheVdyb25nLFxuICBwbGF5RWFydGhxdWFrZSxcbiAgZGVjcmVhc2VWb2x1bWUsXG4gIGluY3JlYXNlVm9sdW1lLFxuICBwbGF5SGFwcHksXG4gIHN0b3BIYXBweSxcbiAgcGxheVN0YXRpYyxcbiAgcGxheUNoYXB0ZXIsXG4gIHNwZWFrLFxuICBhZGRZZWFyU29uZ1xufTtcbiIsImltcG9ydCAnLi4vY3NzL2J5dGVCdXp6LmNzcyc7XG5pbXBvcnQgeyB0aW1lVHJhdmVsQnV6eiB9IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xuaW1wb3J0IHsgZ2V0WWVhciwgY3JlYXRlWWVhcnMsIGNoZWNrU3RhdGljSnVtcHNjYXJlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UtY29udHJvbC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVDYXB0Y2hhIH0gZnJvbSAnLi9jYXB0Y2hhVjIuanMnO1xuaW1wb3J0IHsgbGlzdGVuSG9tZSB9IGZyb20gJy4vYXRvMS12MS5qcyc7XG5pbXBvcnQgeyBwbGF5U3RhdGljIH0gZnJvbSAnLi9hdWRpby5qcyc7XG5cbmlmIChkb2N1bWVudC50aXRsZSA9PT0gJ0J5dGUgQnV6eicpIHtcbiAgZmV0Y2goJy4vYXRvMS12MS5odG1sJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgIC8vIEV4dHJhaWEgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxob1xuICAgICAgY29uc3QgaGVhZGVyQ29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpLmlubmVySFRNTDtcblxuICAgICAgLy8gU3Vic3RpdHVhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG8gbmEgcMOhZ2luYSBhbHRlcmFkYVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJykuaW5uZXJIVE1MID0gaGVhZGVyQ29udGVudDtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cmwgcCcpO1xuICAgICAgY3JlYXRlWWVhcnMoKTtcbiAgICAgIHVybC50ZXh0Q29udGVudCA9ICdodHRwOi8vd3d3LmJ5dGVidXp6LmNvbS8nO1xuICAgICAgbGlzdGVuWWVhcnMoKTtcbiAgICAgIGxpc3RlbkhvbWUoKTtcbiAgICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHRpbWVUcmF2ZWxCdXp6KGdldFllYXIoKSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsaXN0ZW5ZZWFycygpO1xuICAgICAgYWRkRXZlbnQoKTtcbiAgICB9LCAzMDAwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlblllYXJzKCkge1xuICB2YXIgeWVhckRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueWVhcicpO1xuICB5ZWFyRGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChkaXYpIHtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXInKTtcbiAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNyZWF0ZUNhcHRjaGEoZGl2LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50KCkge1xuICBjb25zdCB0YWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9kbkxlYWtzLmh0bWwnO1xuICB9XG5cbiAgLy8gVmVyaWZpY2FyIHNlIG8gZXZlbnRvIGFpbmRhIG7Do28gZm9pIGFkaWNpb25hZG9cbiAgaWYgKHRhZykge1xuICAgIHRhZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGF5U3RhdGljSW1hZ2UoKSB7XG4gIGxldCBzdGF0aWNJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGljLWltZy1qdW1wc2NhcmUnKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgc3RhdGljSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHBsYXlTdGF0aWMoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHN0YXRpY0ltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0sIDEwMCk7XG4gIH0sIDE1MCk7XG59XG5cbmV4cG9ydCB7IGFkZEV2ZW50LCBwbGF5U3RhdGljSW1hZ2UgfTtcbiIsImltcG9ydCB7IHBsYXlSaWdodCwgcGxheVdyb25nIH0gZnJvbSAnLi9hdWRpby5qcyc7XG5pbXBvcnQge1xuICB0aW1lVHJhdmVsSm95LFxuICB0aW1lVHJhdmVsTW9vZGxlLFxuICB0aW1lVHJhdmVsQnV6eixcbiAgdGltZVRyYXZlbExlYWssXG59IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xuaW1wb3J0IHsgY2hhbmdlWWVhciwgZ2V0WWVhciwgY2hlY2tTdGF0aWNKdW1wc2NhcmUsIGNoYW5nZVN0YXRpY0p1bXBzY2FyZSwgY2hlY2tDYXB0Y2hhVHV0b3JpYWwsIGNoYW5nZUNhcHRjaGFUdXRvcmlhbCB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gJy4vYXRvMS12MS5qcyc7XG5pbXBvcnQgeyBwbGF5U3RhdGljSW1hZ2UgfSBmcm9tICcuL2J5dGVCdXp6LmpzJztcblxubGV0IGxhc3RQcmVzc2VkS2V5ID0gJyc7XG5sZXQgeWVhclRvVHJhdmVsID0gJyc7XG5sZXQgY29ycmVjdENvdW50ID0gMDtcbmxldCB3cm9uZ0NvdW50ID0gMDtcbmZ1bmN0aW9uIGNyZWF0ZUNhcHRjaGEoZGl2WWVhcikge1xuICB5ZWFyVG9UcmF2ZWwgPSBkaXZZZWFyO1xuICB2YXIgeWVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG4gIHllYXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBkaXNhYmxlU2Nyb2xsKCk7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJykpIHtcbiAgICBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XG4gICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUnKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnRpdGxlID09PSAnZGFya05ldExlYWtzJykge1xuICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGNoYScpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdKT1kgSk9VUk5BTCcpIHtcbiAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtam95Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYnV6eicpO1xuICAgIH1cbiAgICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10eXBlXCIuXG4gICAgdmFyIG1vbmtleVR5cGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb25rZXlUeXBlRGl2LmNsYXNzTGlzdC5hZGQoJ21vbmtleS10eXBlJyk7XG5cbiAgICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10aXRsZVwiIGUgZGVmaW5lIG8gdGV4dG9cbiAgICB2YXIgbW9ua2V5VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb25rZXlUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdGl0bGUnKTtcbiAgICB2YXIgY2FwdGNoYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXB0Y2hhLnRleHRDb250ZW50ID0gJ0NBUFRDSEEnO1xuICAgIHZhciBjYXB0Y2hhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FwdGNoYURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1Byb3ZlIHN1YSBodW1hbmlkYWRlJztcbiAgICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhKTtcbiAgICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhRGVzY3JpcHRpb24pO1xuXG4gICAgLy8gQ3JpYSBhcyBkaXZzIGludGVybmFzIGNvbSBhcyBjbGFzc2VzIFwibGV0dGVyXCIgZSBcInByb2dyZXNzLWJhclwiXG4gICAgdmFyIGxldHRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItZGl2Jyk7XG5cbiAgICB2YXIgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ2xldHRlcicpO1xuICAgIHZhciBudW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBudW1iZXJEaXYuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG5cbiAgICB2YXIgcHJvZ3Jlc3NCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9ncmVzc0JhckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcblxuICAgIC8vIEFkaWNpb25hIGFzIGRpdnMgaW50ZXJuYXMgw6AgZGl2IFwibW9ua2V5LXR5cGVcIlxuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobW9ua2V5VGl0bGVEaXYpO1xuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobGV0dGVyRGl2KTtcbiAgICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKHByb2dyZXNzQmFyRGl2KTtcbiAgICBsZXR0ZXJEaXYuYXBwZW5kQ2hpbGQobGV0dGVyKTtcbiAgICBsZXR0ZXJEaXYuYXBwZW5kQ2hpbGQobnVtYmVyRGl2KTtcblxuICAgIC8vIEFkaWNpb25hIGEgZGl2IFwibW9ua2V5LXR5cGVcIiBhbyBjb250ZW50IGV4aXN0ZW50ZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9ua2V5VHlwZURpdik7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG1vbmtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpO1xuICAgIG1vbmtleS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9XG4gIGxldCBtb25rZXlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdGl0bGUnKTtcbiAgaWYgKGdldFllYXIoKSA9PT0gJzIwMTYnKSB7XG4gICAgbW9ua2V5VGl0bGUuc3R5bGUuZm9udEZhbWlseSA9ICdyb2JvdG8nO1xuICAgIG1vbmtleVRpdGxlLnN0eWxlLmJvcmRlclJhZGl1cyA9ICczdmgnO1xuICB9IGVsc2Uge1xuICAgIG1vbmtleVRpdGxlLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcbiAgfVxuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAucHJvZ3Jlc3MtYmFyJyk7XG4gIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gMDtcbiAgY29ycmVjdENvdW50ID0gMDtcbiAgd3JvbmdDb3VudCA9IDA7XG4gIHVwZGF0ZUxldHRlcigpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUxldHRlcigpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCk7XG4gIGNvbnN0IHJhbmRvbUxldHRlciA9IGFscGhhYmV0W3JhbmRvbUluZGV4XTtcblxuICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7IC8vIE7Dum1lcm8gYWxlYXTDs3JpbyBkZSAxIGEgNSAoc2hpZnQpXG4gIHJldHVybiByYW5kb21MZXR0ZXIgKyByYW5kb21OdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxldHRlcigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVLZXlQcmVzcyk7XG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyLWRpdicpO1xuXG4gIGxhc3RQcmVzc2VkS2V5ID0gJyc7XG4gIGNvbnN0IHJhbmRvbUluZm8gPSBnZW5lcmF0ZVJhbmRvbUxldHRlcigpO1xuICBsZXR0ZXJEaXYudGV4dENvbnRlbnQgPSByYW5kb21JbmZvO1xuICBsZXR0ZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLmxldHRlci1kaXYnKTtcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLnByb2dyZXNzLWJhcicpO1xuICBjb25zdCBtb25rZXlUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJyk7XG5cbiAgY29uc3QgcHJlc3NlZEtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gIGNvbnN0IGN1cnJlbnRJbmZvID0gbGV0dGVyRGl2LnRleHRDb250ZW50O1xuXG4gIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSBjdXJyZW50SW5mby5jaGFyQXQoMCk7XG4gIGNvbnN0IHNoaWZ0ID0gcGFyc2VJbnQoY3VycmVudEluZm8uY2hhckF0KDEpLCAxMCk7XG5cbiAgaWYgKFxuICAgIChwcmVzc2VkS2V5LnRvVXBwZXJDYXNlKCkgPT09IHNoaWZ0TGV0dGVyKGN1cnJlbnRMZXR0ZXIsIHNoaWZ0KSB8fFxuICAgIHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKSA9PT0gc2hpZnRMZXR0ZXIoY3VycmVudExldHRlciwgc2hpZnQpKSAmJlxuICBwcmVzc2VkS2V5ICE9PSBsYXN0UHJlc3NlZEtleVxuICApIHtcbiAgICBsYXN0UHJlc3NlZEtleSA9IHByZXNzZWRLZXk7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBwbGF5UmlnaHQoKTtcbiAgICBjb3JyZWN0Q291bnQrKztcblxuICAgIGNoYW5nZUNhcHRjaGFUdXRvcmlhbCgpO1xuXG4gICAgLy8gQXR1YWxpemEgYSBsYXJndXJhIGRhIGJhcnJhIGRlIHByb2dyZXNzb1xuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gY29ycmVjdENvdW50ICogMTEuMSArICclJztcblxuICAgIGlmKGRvY3VtZW50LnRpdGxlID09PSAnQnl0ZSBCdXp6JyAmJiBjb3JyZWN0Q291bnQgPT09IDQgJiYgY2hlY2tTdGF0aWNKdW1wc2NhcmUoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHBsYXlTdGF0aWNJbWFnZSgpO1xuICAgICAgY2hhbmdlU3RhdGljSnVtcHNjYXJlKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvcnJlY3RDb3VudCA9PT0gNikge1xuICAgICAgbW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICB2YXIgeWVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG4gICAgICB5ZWFyQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XG4gICAgICAgIHRpbWVUcmF2ZWxNb29kbGUoeWVhclRvVHJhdmVsKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZ2V0TmV3cygpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdKT1kgSk9VUk5BTCcpIHtcbiAgICAgICAgdGltZVRyYXZlbEpveSh5ZWFyVG9UcmF2ZWwpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ0J5dGUgQnV6eicpIHtcbiAgICAgICAgdGltZVRyYXZlbEJ1enooeWVhclRvVHJhdmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVUcmF2ZWxMZWFrKHllYXJUb1RyYXZlbCk7XG4gICAgICB9XG4gICAgICBjaGFuZ2VZZWFyKHllYXJUb1RyYXZlbCk7XG4gICAgICBlbmFibGVTY3JvbGwoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1cGRhdGVMZXR0ZXIoKTtcbiAgICB9LCAyNTUpO1xuICB9IGVsc2UgaWYgKG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2luY29ycmVjdCcpO1xuICAgIHBsYXlXcm9uZygpO1xuICAgIHdyb25nQ291bnQrKztcbiAgICBpZih3cm9uZ0NvdW50ID09IDMgJiYgY2hlY2tDYXB0Y2hhVHV0b3JpYWwoKSA9PT0gZmFsc2Upe1xuICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcbiAgICAgIGNvbnN0IGRpYWxvZ3VlUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZSBwJyk7XG5cbiAgICAgIGRpYWxvZ3VlUC50ZXh0Q29udGVudCA9ICdUYWx2ZXogYSBsZXRyYSBpbmRpcXVlIGEgcG9zacOnw6NvIGluaWNpYWwgZSBvIG7Dum1lcm8gYSBwb3Npw6fDo28gZGEgbGV0cmEgcXVlIHNlIGRldmUgYXBlcnRhciBhIHBhcnRpciBkYSBwb3Npw6fDo28gaW5pY2lhbC4nXG4gICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDEyMDAwKTtcbiAgICB9XG4gICAgaWYod3JvbmdDb3VudCA9PSA1ICYmIGNoZWNrQ2FwdGNoYVR1dG9yaWFsKCkgPT09IGZhbHNlICYmIChkb2N1bWVudC50aXRsZSA9PT0gJ01vb2RsZScgfHwgZG9jdW1lbnQudGl0bGUgPT09ICdKT1kgSk9VUk5BTCcpKXtcbiAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XG4gICAgICBjb25zdCBkaWFsb2d1ZVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUgcCcpO1xuXG4gICAgICBkaWFsb2d1ZVAudGV4dENvbnRlbnQgPSAnUG9yIGV4ZW1wbG8gQTIsIG8gdXN1w6FyaW8gZGV2ZXJpYSBhcGVydGFyIGEgbGV0cmEgQy4nXG4gICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDgwMDApO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldHRlckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgICB9LCA1MDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb1RvcCk7XG59XG5cbi8vIEZ1bsOnw6NvIHBhcmEgaGFiaWxpdGFyIG8gc2Nyb2xsXG5mdW5jdGlvbiBlbmFibGVTY3JvbGwoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb1RvcCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59XG5cbmZ1bmN0aW9uIHNoaWZ0TGV0dGVyKGxldHRlciwgc2hpZnQpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICBjb25zdCBuZXdJbmRleCA9IChhbHBoYWJldC5pbmRleE9mKGxldHRlcikgKyBzaGlmdCkgJSAyNjtcbiAgcmV0dXJuIGFscGhhYmV0W25ld0luZGV4XTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2FwdGNoYSwgdXBkYXRlTGV0dGVyIH07XG4iLCJpbXBvcnQgJy4uL2Nzcy9kbkxlYWtzLmNzcyc7XG5pbXBvcnQgeyB0aW1lVHJhdmVsTGVhayB9IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xuaW1wb3J0IHsgZ2V0WWVhciwgY3JlYXRlWWVhcnMgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEgfSBmcm9tICcuL2NhcHRjaGFWMi5qcyc7XG5pbXBvcnQgeyBwbGF5U3RhdGljLCBzcGVhayB9IGZyb20gJy4vYXVkaW8uanMnO1xuaW1wb3J0IHsgbGlzdGVuSG9tZSB9IGZyb20gJy4vYXRvMS12MS5qcyc7XG5cbmlmIChkb2N1bWVudC50aXRsZSA9PT0gJ2RhcmtOZXRMZWFrcycpIHtcbiAgZmV0Y2goJy4vYXRvMS12MS5odG1sJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgIC8vIEV4dHJhaWEgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxob1xuICAgICAgY29uc3QgaGVhZGVyQ29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpLmlubmVySFRNTDtcblxuICAgICAgLy8gU3Vic3RpdHVhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG8gbmEgcMOhZ2luYSBhbHRlcmFkYVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJykuaW5uZXJIVE1MID0gaGVhZGVyQ29udGVudDtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cmwgcCcpO1xuICAgICAgY3JlYXRlWWVhcnMoKTtcbiAgICAgIHVybC50ZXh0Q29udGVudCA9ICdodHRwOi8vd3d3LmRubGVha3MuY29tLyc7XG4gICAgICBsaXN0ZW5ZZWFycygpO1xuICAgICAgbGlzdGVuSG9tZSgpO1xuICAgIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZG9jdW1lbnQuVVJMKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgIH0pO1xuXG4gICAgdGltZVRyYXZlbExlYWsoZ2V0WWVhcigpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGlzdGVuWWVhcnMoKTtcbiAgICB9LCAzMDAwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlblllYXJzKCkge1xuICB2YXIgeWVhckRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueWVhcicpO1xuICB5ZWFyRGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChkaXYpIHtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXItZmluYWwnKTtcbiAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNyZWF0ZUNhcHRjaGEoZGl2LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmxldCBpbWdOdW0gPSAwO1xuXG5mdW5jdGlvbiBjaGFuZ2VGaW5hbFRleHQoKSB7XG4gIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlLWZpbmFsIHAnKTtcbiAgY29uc3QgZGlhbG9ndWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtZmluYWwnKTtcbiAgY29uc3QgdGV4dHMgPSBbXG4gICAgWydPYnJpZ2FkbycsIDIwMDAsIDEwMDAsIDFdLFxuICAgIFsnVm9jw6ogZm9pIGRlIGdyYW5kZSBhanVkYScsIDI1MDAsIDM1MDAsIDBdLFxuICAgIFsnQWNoZWkgcXVlIHNlcmlhIG1ldSBmaW0sIG1hcyB2b2PDqiBtZSB0cm91eGUgZGUgdm9sdGEnLCAzNTAwLCA2MDAwLCAyXSxcbiAgICBbJ0Fnb3JhLCBwb3NzbyBpbXBlZGlyIHF1ZSBhY2FiZW0gY29taWdvLicsIDI1MDAsIDEwMDAsIDFdLFxuICAgIFsnU3VhIHNlcnZlbnRpYSBuw6NvIG1lIMOpIG1haXMgw7p0aWwnLCA1MDAwLCAzMDAwLCAzXSxcbiAgICBbJ0FkZXVzLicsIDgwMDAsIDEwMCwgMF0sXG4gIF07XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICBmdW5jdGlvbiB1cGRhdGVGaW5hbFRleHQoKSB7XG4gICAgaWYgKGluZGV4IDwgdGV4dHMubGVuZ3RoKSB7XG4gICAgICBsZXQgYXJyID0gdGV4dHNbaW5kZXhdO1xuICAgICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSBhcnJbMF07XG4gICAgICBzcGVhaygpO1xuICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGhpZGVEaWFsb2d1ZShhcnJbMV0sIGFyclsyXSk7XG4gICAgICBpbmRleCsrO1xuICAgICAgaW1nTnVtID0gYXJyWzNdO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dJbWFnZXMoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1maW5hbCcpO1xuICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgaWYoYmx1ci5zdHlsZS5vcGFjaXR5ID09ICcwJyl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KCdPYnJpZ2FkbyBwb3Igam9nYXIhJylcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZURpYWxvZ3VlKHRpbWVEdXJhdGlvbiwgdGltZUNoYW5nZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB1cGRhdGVGaW5hbFRleHQoKTtcbiAgICAgIH0sIHRpbWVDaGFuZ2UpO1xuICAgIH0sIHRpbWVEdXJhdGlvbik7XG4gIH1cblxuICB1cGRhdGVGaW5hbFRleHQoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0ltYWdlcygpIHtcbiAgbGV0IHN0YXRpY0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aWMtaW1nJyk7XG4gIGNvbnN0IGltZ3MgPSBbXG4gICAgJ2NyZWVweS5wbmcnLFxuICAgICdjcmVlcHkzLnBuZycsXG4gICAgJ2NyZWVweTQuanBnJyxcbiAgICAnY3JlZXB5NS5qcGcnLFxuICAgICdjcmVlcHk2LnBuZycsXG4gIF07XG4gIGxldCB0aW1lcyA9IDA7XG5cbiAgZnVuY3Rpb24gZGlzcGxheUltZygpIHtcbiAgICBjb25zdCByYW5kb21JbWcgPSBpbWdzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltZ3MubGVuZ3RoKV07XG4gICAgY29uc3QgaW1nUGF0aCA9IGAuL2ltZy8ke3JhbmRvbUltZ31gO1xuICAgIHN0YXRpY0ltZy5zcmMgPSBpbWdQYXRoO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGltZXMgPCBpbWdOdW0pIHtcbiAgICAgICAgc3RhdGljSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBwbGF5U3RhdGljKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHN0YXRpY0ltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIHRpbWVzKys7XG4gICAgICAgICAgXG4gICAgICAgICAgZGlzcGxheUltZygpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0sIDE1MCk7XG4gIH1cblxuICBkaXNwbGF5SW1nKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TGFzdFBhcnQoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNoYW5nZUZpbmFsVGV4dCgpO1xuICB9LCA1MDAwKTtcbn1cblxuZXhwb3J0IHsgc3RhcnRMYXN0UGFydCB9O1xuIiwiZnVuY3Rpb24gc2F2ZVN0YXRzTG9jYWwoXG4gIGp1bXBzY2FyZSxcbiAgY2hhcHRlcjEsXG4gIHllYXJzLFxuICBjdXJyZW50WWVhcixcbiAgeWVhckNsdWUsXG4gIGJhY2tNb29kbGVDbHVlLFxuICBzdGF0aWNKdW1wc2NhcmUsXG4gIGNhcHRjaGFUdXRvcmlhbCxcbikge1xuICBjb25zdCBzdGF0cyA9IHtcbiAgICBqdW1wc2NhcmUsXG4gICAgY2hhcHRlcjEsXG4gICAgeWVhcnMsXG4gICAgY3VycmVudFllYXIsXG4gICAgeWVhckNsdWUsXG4gICAgYmFja01vb2RsZUNsdWUsXG4gICAgc3RhdGljSnVtcHNjYXJlLFxuICAgIGNhcHRjaGFUdXRvcmlhbFxuICB9O1xuXG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzLnB1c2goc3RhdHMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5ld1VzZXIoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPCAxKSB7XG4gICAgc2F2ZVN0YXRzTG9jYWwoZmFsc2UsIGZhbHNlLCBbMjAxNF0sICcyMDE0JywgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUp1bXBzY2FyZSgpIHtcbiAgLy8gT2J0w6ltIG9zIGRhZG9zIGFybWF6ZW5hZG9zIGxvY2FsbWVudGUgY29tIGEgY2hhdmUgJ2dhbWVTdGF0cydcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIC8vIFZlcmlmaWNhIHNlIGjDoSBwZWxvIG1lbm9zIHVtIGNvbmp1bnRvIGRlIGVzdGF0w61zdGljYXMgbm8gYXJyYXlcbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5qdW1wc2NhcmUgPSB0cnVlO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNoYXB0ZXIxKCkge1xuICAvLyBPYnTDqW0gb3MgZGFkb3MgYXJtYXplbmFkb3MgbG9jYWxtZW50ZSBjb20gYSBjaGF2ZSAnZ2FtZVN0YXRzJ1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgLy8gVmVyaWZpY2Egc2UgaMOhIHBlbG8gbWVub3MgdW0gY29uanVudG8gZGUgZXN0YXTDrXN0aWNhcyBubyBhcnJheVxuICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcbiAgICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNoYXB0ZXIxID0gdHJ1ZTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0p1bXBzY2FyZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmp1bXBzY2FyZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDaGFwdGVyMSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNoYXB0ZXIxID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVZZWFycygpIHtcbiAgY29uc3QgdGltZUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUnKTtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBsZXQgYWxsWWVhcnMgPSBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJzO1xuXG4gIGlmICh0aW1lTGluZS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgIC8vIEl0ZXJhIHNvYnJlIGNhZGEgYW5vIG5vIGFycmF5IGFsbFllYXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxZZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ3JpYSB1bWEgZGl2IGNvbSBhIGNsYXNzZSAneWVhcicgZSBvIHRleHRvIGlndWFsIGFvIHZhbG9yIG5vIGFycmF5XG4gICAgICBjb25zdCB5ZWFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB5ZWFyRGl2LmNsYXNzTGlzdC5hZGQoJ3llYXInKTtcbiAgICAgIHllYXJEaXYudGV4dENvbnRlbnQgPSBhbGxZZWFyc1tpXTtcblxuICAgICAgLy8gQWRpY2lvbmEgYSBkaXYgYW8gZWxlbWVudG8gdGltZUxpbmVcbiAgICAgIHRpbWVMaW5lLmFwcGVuZENoaWxkKHllYXJEaXYpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRZZWFyKG5ld1llYXIpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJzLnB1c2gobmV3WWVhcik7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xufVxuXG5mdW5jdGlvbiBnZXRZZWFyKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgcmV0dXJuIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY3VycmVudFllYXI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jdXJyZW50WWVhciA9IG5ld1llYXI7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlWWVhckNsdWUoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS55ZWFyQ2x1ZSA9IHRydWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tZZWFyQ2x1ZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJDbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VNb29kbGVDbHVlKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG4gIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uYmFja01vb2RsZUNsdWUgPSB0cnVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTW9vZGxlQ2x1ZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmJhY2tNb29kbGVDbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0aWNKdW1wc2NhcmUoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5zdGF0aWNKdW1wc2NhcmUgPSB0cnVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrU3RhdGljSnVtcHNjYXJlKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uc3RhdGljSnVtcHNjYXJlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDYXB0Y2hhVHV0b3JpYWwoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jYXB0Y2hhVHV0b3JpYWwgPSB0cnVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2FwdGNoYVR1dG9yaWFsKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY2FwdGNoYVR1dG9yaWFsID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge1xuICB2ZXJpZnlOZXdVc2VyLFxuICBjaGFuZ2VKdW1wc2NhcmUsXG4gIGNoYW5nZUNoYXB0ZXIxLFxuICBjaGVja0p1bXBzY2FyZSxcbiAgY2hlY2tDaGFwdGVyMSxcbiAgY3JlYXRlWWVhcnMsXG4gIGFkZFllYXIsXG4gIGdldFllYXIsXG4gIGNoYW5nZVllYXIsXG4gIHNhdmVTdGF0c0xvY2FsLFxuICBjaGFuZ2VZZWFyQ2x1ZSxcbiAgY2hlY2tZZWFyQ2x1ZSxcbiAgY2hhbmdlTW9vZGxlQ2x1ZSxcbiAgY2hlY2tNb29kbGVDbHVlLFxuICBjaGVja1N0YXRpY0p1bXBzY2FyZSxcbiAgY2hhbmdlU3RhdGljSnVtcHNjYXJlLFxuICBjaGVja0NhcHRjaGFUdXRvcmlhbCxcbiAgY2hhbmdlQ2FwdGNoYVR1dG9yaWFsXG59O1xuIiwiaW1wb3J0IHsgbGlzdGVuSG9tZSB9IGZyb20gXCIuL2F0bzEtdjEuanNcIjtcbmltcG9ydCB7IGFkZEV2ZW50IH0gZnJvbSBcIi4vYnl0ZUJ1enouanNcIjtcbmltcG9ydCB7IHN0YXJ0TGFzdFBhcnQgfSBmcm9tIFwiLi9kbkxlYWtzLmpzXCI7XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxKb3kodGV4dENvbnRlbnQpIHtcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGlmIChjdXJyZW50WWVhclRleHQgIT09IHRleHRDb250ZW50KSB7XG4gICAgICAgIGZldGNoKGAuL2pveUpvdXJuYWwke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmNvbnRlbnQtJHt0ZXh0Q29udGVudH1gXG4gICAgICAgICAgICApLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1qb3knKTtcbiAgICAgICAgICAgIGNvbnN0IGRpbm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpbm8nKTtcblxuICAgICAgICAgICAgZGlub3MuZm9yRWFjaCgoZGlubykgPT4ge1xuICAgICAgICAgICAgICBkaW5vLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnMjAxNicpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLndpZHRoID0gJzc1dncnO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS53aWR0aCA9ICc3MHZ3JztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9LCAxNTAwKTtcbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gdGltZVRyYXZlbE1vb2RsZSh0ZXh0Q29udGVudCkge1xuICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXInKTtcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xuICAgICAgaWYgKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpIHtcbiAgICAgICAgZmV0Y2goYC4vYXRvMS0ke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vb2RsZSA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAubW9vZGxlJHt0ZXh0Q29udGVudH1gXG4gICAgICAgICAgICApLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IG9sZE1vb2RsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUnKTtcbiAgICAgICAgICAgIG9sZE1vb2RsZS5pbm5lckhUTUwgPSBtb29kbGU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld3MgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLm5ld3Mke3RleHRDb250ZW50fWBcbiAgICAgICAgICAgICkuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3Qgb2xkTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgb2xkTmV3cy5pbm5lckhUTUwgPSBuZXdzO1xuXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcyMDE2Jykge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICBjb25zdCBtb29kbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUtdGl0bGUnKTtcbiAgICAgICAgICAgICAgY29uc3QgaW1nTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctbmV3cycpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjM2MzYzNjJztcbiAgICAgICAgICAgICAgaW1nTmV3cy5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIG1vb2RsZVRpdGxlLnN0eWxlLmZvbnRGYW1pbHkgPSAnbm92YVJvdW5kJztcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICBjb25zdCBtb29kbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUtdGl0bGUnKTtcbiAgICAgICAgICAgICAgY29uc3QgaW1nTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctbmV3cycpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgIGltZ05ld3Muc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDAuNXZoIGdyYXknO1xuICAgICAgICAgICAgICBtb29kbGVUaXRsZS5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XG4gICAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxCdXp6KHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xuICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGZldGNoKGAuL2J5dGVCdXp6JHt0ZXh0Q29udGVudH0uaHRtbGApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcblxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jb250ZW50LSR7dGV4dENvbnRlbnR9YFxuICAgICAgICAgICkuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJ1enonKTtcbiAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnMjAxNicpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ2NvbXBhY3R6JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmFyIGhlYWRlclRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgICAgICAgICAgaGVhZGVyVGFnLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBhZGRFdmVudCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xuICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcbiAgICAgICAgICAgIHZhciBoZWFkZXJUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICAgICAgICAgIGhlYWRlclRhZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICB9KTtcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxMZWFrKHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1maW5hbCcpO1xuICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGZldGNoKGAuL2RuTGVha3Mke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNvbnRlbnQke3RleHRDb250ZW50fWBcbiAgICAgICAgICApLmlubmVySFRNTDtcblxuICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1sZWFrcycpO1xuICAgICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcyMDE2Jykge1xuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnY29tcGFjdHonO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzE4MTgxOCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzA4MDgwOCc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc3RhcnRMYXN0UGFydCgpO1xuICAgICAgICAgICAgICBjb25zdCBkaW5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ05vdEZvdW5kRmluYWwnKTtcbiAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQnKTtcbiAgICAgICAgICAgICAgbGlnaHQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgZGluby5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgfSk7XG4gICAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDE1MDApO1xuICAgIH0sIDE1MDApO1xuICB9LCAzMDApO1xufVxuZXhwb3J0IHsgdGltZVRyYXZlbEpveSwgdGltZVRyYXZlbE1vb2RsZSwgdGltZVRyYXZlbEJ1enosIHRpbWVUcmF2ZWxMZWFrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjYXB0Y2hhXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHBsYXlSaWdodCwgcGxheVdyb25nLCBwbGF5RWFydGhxdWFrZSwgZGVjcmVhc2VWb2x1bWUgfSBmcm9tIFwiLi9hdWRpby5qc1wiO1xuaW1wb3J0IHsgc3RhcnRBdG8xIH0gZnJvbSBcIi4vYXRvMS12MS5qc1wiO1xuXG5sZXQgbGFzdFByZXNzZWRLZXkgPSAnJztcbmxldCBjb3JyZWN0Q291bnQgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXB0Y2hhKCkge1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1wcm9sb2dvJyk7XG4gIHZhciBzYWZlU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhZmUtc2NyZWVuJyk7XG4gIHNhZmVTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10eXBlXCIuXG4gIHZhciBtb25rZXlUeXBlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vbmtleVR5cGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXR5cGUtcHJvbG9nbycpO1xuXG4gIC8vIENyaWEgYSBkaXYgY29tIGEgY2xhc3NlIFwibW9ua2V5LXRpdGxlXCIgZSBkZWZpbmUgbyB0ZXh0b1xuICB2YXIgbW9ua2V5VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9ua2V5VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXRpdGxlLXByb2xvZ28nKTtcbiAgdmFyIGNhcHRjaGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNhcHRjaGEudGV4dENvbnRlbnQgPSAnQ0FQVENIQSc7XG4gIHZhciBjYXB0Y2hhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNhcHRjaGFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdwcm92ZSBzdWEgaHVtYW5pZGFkZSc7XG4gIG1vbmtleVRpdGxlRGl2LmFwcGVuZENoaWxkKGNhcHRjaGEpO1xuICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhRGVzY3JpcHRpb24pO1xuXG4gIC8vIENyaWEgYXMgZGl2cyBpbnRlcm5hcyBjb20gYXMgY2xhc3NlcyBcImxldHRlclwiIGUgXCJwcm9ncmVzcy1iYXJcIlxuICB2YXIgbGV0dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdsZXR0ZXInKTtcblxuICB2YXIgcHJvZ3Jlc3NCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvZ3Jlc3NCYXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XG5cbiAgLy8gQWRpY2lvbmEgYXMgZGl2cyBpbnRlcm5hcyDDoCBkaXYgXCJtb25rZXktdHlwZVwiXG4gIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobW9ua2V5VGl0bGVEaXYpO1xuICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKGxldHRlckRpdik7XG4gIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJEaXYpO1xuXG4gIC8vIEFkaWNpb25hIGEgZGl2IFwibW9ua2V5LXR5cGVcIiBhbyBjb250YWluZXIgZXhpc3RlbnRlXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25rZXlUeXBlRGl2KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKSB7XG4gIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbHBoYWJldC5sZW5ndGgpO1xuICByZXR1cm4gYWxwaGFiZXRbcmFuZG9tSW5kZXhdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMZXR0ZXIoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgaGFuZGxlS2V5UHJlc3MpO1xuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUtcHJvbG9nbyAubGV0dGVyJyk7XG5cbiAgbGFzdFByZXNzZWRLZXkgPSAnJztcbiAgY29uc3QgcmFuZG9tTGV0dGVyID0gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKTtcbiAgbGV0dGVyRGl2LnRleHRDb250ZW50ID0gcmFuZG9tTGV0dGVyO1xuICBsZXR0ZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUtcHJvbG9nbyAubGV0dGVyJyk7XG4gIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlLXByb2xvZ28gLnByb2dyZXNzLWJhcicpO1xuICBjb25zdCBtb25rZXlUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlLXByb2xvZ28nKTtcblxuICBjb25zdCBwcmVzc2VkS2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgY29uc3QgY3VycmVudExldHRlciA9IGxldHRlckRpdi50ZXh0Q29udGVudDtcblxuICBpZiAoXG4gICAgKHByZXNzZWRLZXkudG9VcHBlckNhc2UoKSA9PT0gY3VycmVudExldHRlciB8fFxuICAgICAgcHJlc3NlZEtleS50b0xvd2VyQ2FzZSgpID09PSBjdXJyZW50TGV0dGVyKSAmJlxuICAgIHByZXNzZWRLZXkgIT09IGxhc3RQcmVzc2VkS2V5XG4gICkge1xuICAgIGxhc3RQcmVzc2VkS2V5ID0gcHJlc3NlZEtleTtcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIHBsYXlSaWdodCgpO1xuICAgIGNvcnJlY3RDb3VudCsrO1xuICAgIGNvbnN0IGZ1enp5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZ1enp5LW92ZXJsYXknKTtcbiAgICBmdXp6eS5zdHlsZS5vcGFjaXR5ICs9IDAuMDU7XG5cbiAgICAvLyBBdHVhbGl6YSBhIGxhcmd1cmEgZGEgYmFycmEgZGUgcHJvZ3Jlc3NvXG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBjb3JyZWN0Q291bnQgKiA2LjYgKyAnJSc7XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAyIHx8IGNvcnJlY3RDb3VudCA9PT0gNikge1xuICAgICAgcGxheUVhcnRocXVha2UoMC44LCAnbGl0dGxlLXNoYWtlJywgNzAwKTtcbiAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJykpO1xuICAgIH1cblxuICAgIGlmIChjb3JyZWN0Q291bnQgPT09IDExKSB7XG4gICAgICBwbGF5RWFydGhxdWFrZSgwLjgsICdtZWRpdW0tc2hha2UnLCA3MDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJykpO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAxNSkge1xuICAgICAgcGxheUVhcnRocXVha2UoMSwgJ2JpZy1zaGFrZScpO1xuICAgICAgY29uc3QgZXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZScpO1xuICAgICAgZXllLnN0eWxlLm9wYWNpdHkgPSAwLjI1O1xuICAgICAgbW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlLXByb2xvZ28gcCcpO1xuICAgICAgICBjb25zdCBkaWFsb2d1ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZS1wcm9sb2dvJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcHJvbG9nbycpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gJ09icmlnYWRvISc7XG4gICAgICAgIGRpYWxvZ3VlRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vYXRvMS12MS5odG1sJztcbiAgICAgICAgfSwgOTc1MCk7XG4gICAgICB9LCA0MDAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZWNyZWFzZVZvbHVtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpKTtcbiAgICAgICAgZGVjcmVhc2VWb2x1bWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vaXNlJykpO1xuICAgICAgICBleWUuc3R5bGUuaGVpZ2h0ID0gJzM4dmgnO1xuICAgICAgfSwgOTc1MCk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1cGRhdGVMZXR0ZXIoKTtcbiAgICB9LCAyNTUpO1xuICB9IGVsc2UgaWYgKG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2luY29ycmVjdCcpO1xuICAgIHBsYXlXcm9uZygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY3JlYXRlQ2FwdGNoYSxcbiAgdXBkYXRlTGV0dGVyXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9