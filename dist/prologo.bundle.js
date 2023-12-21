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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/prologo.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/prologo.css ***!
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/gamecuben/GameCube.ttf */ "./src/font/gamecuben/GameCube.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../font/Roboto/Roboto-Regular.ttf */ "./src/font/Roboto/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/whiteNoiseV3.jpg */ "./src/img/whiteNoiseV3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: gamecuben;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: roboto;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
  margin: 0;
  padding: 0;
}

.prologo-body {
  background-color: black;
  display: grid;
  height: 100vh;
  width: 100vw;
  align-content: center;
  justify-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
}

.chapter {
  font-family: gamecuben;
  color: white;
  font-size: 12vh;
  display: grid;
  transition: opacity 2.1s ease-in-out;
}

.chapter span {
  font-size: 4vh;
  opacity: 0.7;
}

.chapter button {
  font-family: roboto;
  background: transparent;
  border: solid .3vh gray;
  color: gray;
  cursor: pointer;
  font-size: 3vh;
}

.timeWarp-prologo,
.dialogue-prologo {
  display: none;
}

.timeWarp-prologo {
  font-family: gamecuben;
  width: calc(90vw - 10px);
  height: 16vh;
  background-color: rgb(43, 42, 42);
  color: white;
  border: solid 1vh rgb(85, 85, 85);
  border-top: none;
  border-radius: 10px;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  transition: opacity 5s ease-in-out;
}

.tw-center {
  width: 55vw;
}

.tw-year,
.tw-title {
  font-size: 4vh;
}

.url-prologo {
  width: 100%;
  height: 3vh;
  background-color: aliceblue;
  border: solid .3vh black;
  opacity: 0.1;
}

.timeline {
  width: 100%;
  height: 7vh;
  border: solid .7vh rgb(43, 42, 42);
  display: flex;
  opacity: 0;

  transition: opacity 3s ease-in-out;
}

.year {
  height: 100%;
  border: solid .5vh rgb(85, 85, 85);
  font-size: 1.5vh;
  padding: .7vh;
  cursor: pointer;
  display: grid;
  align-items: center;
}

.year:hover{
  background-color: rgb(70, 68, 68);
}

.dialogue-prologo {
  width: 100vw;
  height: 10vh;
  background-color: rgb(43, 42, 42);
  margin-bottom: 7vh;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  font-size: 2.5vh;
}

.dialogue-prologo p {
  color: white;
  font-family: roboto;
}

.container-prologo {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: none;
  align-content: space-between;
  justify-items: center;

  transition: opacity 7s ease-in-out;
}

.eye {
  background-color: white;
  border: solid 2px white;
  width: 20vw;
  height: 2vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0;

  transition: opacity 11s ease-in-out;
}

.fuzzy-overlay {
  position: absolute;
  inset: -200%;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  z-index: -1;
  opacity: 0.02;

  transition: opacity 25s ease-in-out;
  animation: shift 0.2s linear infinite both;
}

.monkey-type-prologo {
  position: absolute;
  display: grid;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  grid-template-rows: 1fr 3fr 2fr;
  height: 40vh;
  width: 50vw;
  background-color: rgb(65, 62, 62);
  border-bottom-right-radius: 5vh;
  border-top-left-radius: 5vh;
  color: black;
  align-items: center;
  justify-items: center;
}

.monkey-title-prologo {
  color: rgb(36, 36, 36);
  font-family: gamecuben;
  display: grid;
  align-items: center;
  justify-items: center;
}

.monkey-title p:first-child { 
  font-size: 4vh;
}

.monkey-title p:last-child {
  font-size: 2.8vh;
}

.letter {
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

.safe-screen {
  position: absolute;
  z-index: 2;
  width: 95vw;
  height: 95vh;
  display: none;
  opacity: 0;
  border: solid 1vh #000;
}

.little-shake {
  animation: shake 0.6s step-end;
}

.medium-shake {
  animation: bigShake 0.6s step-end;
}

.big-shake {
  animation: bigShake 0.4s step-end infinite both;
}

@keyframes shift {
  0% {
    transform: translateX(10%) translateY(10%);
  }

  100% {
    transform: translateX(-10%) translateY(-10%);
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(.8rem);
  }

  10%,
  30%,
  50% {
    transform: translateX(-.4rem);
  }

  70%,
  100% {
    transform: translateX(0);
  }
}

@keyframes bigShake {
  0% {
    transform: translateX(-.4rem) translateY(-.4rem);
  }

  20%,
  40%,
  60%,
  80% { 
    transform: translateX(.8rem) translateY(-.4rem);
  }

  10%,
  30%,
  50% {
    transform: translateX(-.4rem) translateY(.8rem);
  }

  70%,
  100% {
    transform: translateX(.8rem) translateY(.8rem);
  }
}`, "",{"version":3,"sources":["webpack://./src/css/prologo.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: gamecuben;\n  src: url(../font/gamecuben/GameCube.ttf);\n}\n\n@font-face {\n  font-family: roboto;\n  src: url(../font/Roboto/Roboto-Regular.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.prologo-body {\n  background-color: black;\n  display: grid;\n  height: 100vh;\n  width: 100vw;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n  overflow: hidden;\n  margin: 0;\n}\n\n.chapter {\n  font-family: gamecuben;\n  color: white;\n  font-size: 12vh;\n  display: grid;\n  transition: opacity 2.1s ease-in-out;\n}\n\n.chapter span {\n  font-size: 4vh;\n  opacity: 0.7;\n}\n\n.chapter button {\n  font-family: roboto;\n  background: transparent;\n  border: solid .3vh gray;\n  color: gray;\n  cursor: pointer;\n  font-size: 3vh;\n}\n\n.timeWarp-prologo,\n.dialogue-prologo {\n  display: none;\n}\n\n.timeWarp-prologo {\n  font-family: gamecuben;\n  width: calc(90vw - 10px);\n  height: 16vh;\n  background-color: rgb(43, 42, 42);\n  color: white;\n  border: solid 1vh rgb(85, 85, 85);\n  border-top: none;\n  border-radius: 10px;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  transition: opacity 5s ease-in-out;\n}\n\n.tw-center {\n  width: 55vw;\n}\n\n.tw-year,\n.tw-title {\n  font-size: 4vh;\n}\n\n.url-prologo {\n  width: 100%;\n  height: 3vh;\n  background-color: aliceblue;\n  border: solid .3vh black;\n  opacity: 0.1;\n}\n\n.timeline {\n  width: 100%;\n  height: 7vh;\n  border: solid .7vh rgb(43, 42, 42);\n  display: flex;\n  opacity: 0;\n\n  transition: opacity 3s ease-in-out;\n}\n\n.year {\n  height: 100%;\n  border: solid .5vh rgb(85, 85, 85);\n  font-size: 1.5vh;\n  padding: .7vh;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n}\n\n.year:hover{\n  background-color: rgb(70, 68, 68);\n}\n\n.dialogue-prologo {\n  width: 100vw;\n  height: 10vh;\n  background-color: rgb(43, 42, 42);\n  margin-bottom: 7vh;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.7;\n  font-size: 2.5vh;\n}\n\n.dialogue-prologo p {\n  color: white;\n  font-family: roboto;\n}\n\n.container-prologo {\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  display: none;\n  align-content: space-between;\n  justify-items: center;\n\n  transition: opacity 7s ease-in-out;\n}\n\n.eye {\n  background-color: white;\n  border: solid 2px white;\n  width: 20vw;\n  height: 2vh;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  opacity: 0;\n\n  transition: opacity 11s ease-in-out;\n}\n\n.fuzzy-overlay {\n  position: absolute;\n  inset: -200%;\n  background-image: url(../img/whiteNoiseV3.jpg);\n  z-index: -1;\n  opacity: 0.02;\n\n  transition: opacity 25s ease-in-out;\n  animation: shift 0.2s linear infinite both;\n}\n\n.monkey-type-prologo {\n  position: absolute;\n  display: grid;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  grid-template-rows: 1fr 3fr 2fr;\n  height: 40vh;\n  width: 50vw;\n  background-color: rgb(65, 62, 62);\n  border-bottom-right-radius: 5vh;\n  border-top-left-radius: 5vh;\n  color: black;\n  align-items: center;\n  justify-items: center;\n}\n\n.monkey-title-prologo {\n  color: rgb(36, 36, 36);\n  font-family: gamecuben;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.monkey-title p:first-child { \n  font-size: 4vh;\n}\n\n.monkey-title p:last-child {\n  font-size: 2.8vh;\n}\n\n.letter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 8vh;\n}\n\n.correct {\n  color: green;\n}\n\n.incorrect {\n  color: brown;\n}\n\n.progress-bar {\n  height: 20px;\n  background-color: rgb(18, 197, 18);\n  width: 0;\n}\n\n.safe-screen {\n  position: absolute;\n  z-index: 2;\n  width: 95vw;\n  height: 95vh;\n  display: none;\n  opacity: 0;\n  border: solid 1vh #000;\n}\n\n.little-shake {\n  animation: shake 0.6s step-end;\n}\n\n.medium-shake {\n  animation: bigShake 0.6s step-end;\n}\n\n.big-shake {\n  animation: bigShake 0.4s step-end infinite both;\n}\n\n@keyframes shift {\n  0% {\n    transform: translateX(10%) translateY(10%);\n  }\n\n  100% {\n    transform: translateX(-10%) translateY(-10%);\n  }\n}\n\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(.8rem);\n  }\n\n  10%,\n  30%,\n  50% {\n    transform: translateX(-.4rem);\n  }\n\n  70%,\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes bigShake {\n  0% {\n    transform: translateX(-.4rem) translateY(-.4rem);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% { \n    transform: translateX(.8rem) translateY(-.4rem);\n  }\n\n  10%,\n  30%,\n  50% {\n    transform: translateX(-.4rem) translateY(.8rem);\n  }\n\n  70%,\n  100% {\n    transform: translateX(.8rem) translateY(.8rem);\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/prologo.css":
/*!*****************************!*\
  !*** ./src/css/prologo.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_prologo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./prologo.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/prologo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_prologo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_prologo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_prologo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_prologo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/scripts/captcha.js":
/*!********************************!*\
  !*** ./src/scripts/captcha.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/font/gamecuben/GameCube.ttf":
/*!*****************************************!*\
  !*** ./src/font/gamecuben/GameCube.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b721a099239cc0cd383f.ttf";

/***/ }),

/***/ "./src/img/whiteNoiseV3.jpg":
/*!**********************************!*\
  !*** ./src/img/whiteNoiseV3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aec1816880f8d2b400cd.jpg";

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
/******/ 			"prologo": 0
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
  !*** ./src/scripts/prologo.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_prologo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/prologo.css */ "./src/css/prologo.css");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");
/* harmony import */ var _captcha_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha.js */ "./src/scripts/captcha.js");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");





document.addEventListener('DOMContentLoaded', function () {
  (0,_localStorage_control_js__WEBPACK_IMPORTED_MODULE_3__.verifyNewUser)();
  var yearButton = document.querySelector('.year');
  yearButton.style.display = 'none';  
  const startChapter = document.querySelector('.start');

  startChapter.addEventListener('click', function () {
    (0,_audio_js__WEBPACK_IMPORTED_MODULE_1__.playChapter)();
    startChapter.disabled = true;
    var chapter = document.querySelector('.chapter');
    chapter.style.opacity = 0;
    setTimeout(() => {
      chapter.style.display = 'none';
      var audio = document.getElementById('noise');
      audio.volume = 0.1;
      audio.play();

      setTimeout(() => {
        const container = document.querySelector('.container-prologo');
        const fuzzy = document.querySelector('.fuzzy-overlay');
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_1__.increaseVolume)(document.getElementById('noise'));
        container.style.display = 'grid';
        
        setTimeout(() => {
          fuzzy.style.opacity = 0.15;
        }, 2500);
        setTimeout(() => {
          changeText();
        }, 6500);
      }, 3000);      
    }, 5500);
  });

  function changeText() {
    const dialogue = document.querySelector('.dialogue-prologo p');
    const dialogueDiv = document.querySelector('.dialogue-prologo');
    const texts = [
      ['Por favor...', 2500, 4000],
      ['Me ajuda!', 2500, 3500],
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
          const timeWarp = document.querySelector('.timeWarp-prologo');
          timeWarp.style.opacity = 0.7;
        } else if (index === 5){
            const timeline = document.querySelector('.timeline');
            timeline.style.opacity = 1;
            yearButton.style.display = 'grid';  
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
    (0,_captcha_js__WEBPACK_IMPORTED_MODULE_2__.createCaptcha)()
    ;(0,_captcha_js__WEBPACK_IMPORTED_MODULE_2__.updateLetter)()
    yearButton.disabled = true;
  })
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbG9nby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLHdLQUFpRTtBQUM3Ryw0Q0FBNEMsa0pBQXNEO0FBQ2xHLDRDQUE0Qyw0SkFBMkQ7QUFDdkcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxZ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O0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLE9BQU8sWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLHFDQUFxQywyQkFBMkIs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QTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMERBQWE7QUFDakIsSUFBSSwwREFBWTtBQUNoQjtBQUNBLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2F0bzEtdjEuY3NzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9ieXRlQnV6ei5jc3MiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2RuTGVha3MuY3NzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9wcm9sb2dvLmNzcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2F0bzEtdjEuY3NzP2FmZjQiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2J5dGVCdXp6LmNzcz8yZDFiIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9kbkxlYWtzLmNzcz9hYTNhIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9wcm9sb2dvLmNzcz82N2I1Iiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9hdG8xLXYxLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9ieXRlQnV6ei5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2NhcHRjaGEuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9jYXB0Y2hhVjIuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9kbkxlYWtzLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy90aW1lTWFjaGluZS5qcyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvcHJvbG9nby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Ob3ZhX1JvdW5kL05vdmFSb3VuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogY29tcGFjdHo7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmhlYWRlckF0bzEge1xuICBoZWlnaHQ6IDE2dmg7XG59XG5cbi5jaGFwdGVyIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDMwdnc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2hhcHRlciBzcGFuIHtcbiAgZm9udC1zaXplOiA1dmg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmNoYXB0ZXIgYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xuICBjb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDN2aDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb29kbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9vZGxlLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxN3ZoO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG59XG5cbi5tb29kbGUtdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMTZ2aDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiA0dmg7XG59XG5cbi5zZWFyY2gtYnV0dG9ucyB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzAwMDtcbiAgbWFyZ2luLXRvcDogMXZoO1xufVxuXG4uc2VhcmNoLWJ1dHRvbnMgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyLjF2aDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyOiBzb2xpZCAuNHZoO1xuICBib3JkZXItY29sb3I6ICNjY2MgIzk5OSAjOTk5ICNjY2M7XG4gIGhlaWdodDogNXZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDAgLjh2aCAwIC44dmg7XG59XG5cbi5wcml2YWN5IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGZvbnQtc2l6ZTogMnZoO1xuICBtYXJnaW4tdG9wOiAydmg7XG59XG5cbi50aW1lV2FycCB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcbiAgaGVpZ2h0OiAxNnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDogMDtcbn1cblxuLnR3LWNlbnRlciB7XG4gIHdpZHRoOiA1NXZ3O1xufVxuXG4udHcteWVhcixcbi50dy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG4udXJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG59XG5cbi51cmwgcHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLnVybCBpbWcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ueWVhciB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMuNSU7XG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIHBhZGRpbmc6IC43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ueWVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDExMHZoO1xuICB3aWR0aDogOTB2dztcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyOiBub25lO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNHMgZWFzZS1pbi1vdXQ7XG59XG5cbi5uZXdzLXRpdGxlIHtcbiAgZm9udC1zaXplOiA0dmg7XG4gIG1hcmdpbi1ib3R0b206IDd2aDtcbn1cblxuLm5ld3MtdGl0bGUyMDE2IHtcbiAgZm9udC1mYW1pbHk6IG5vdmFSb3VuZDtcbiAgZm9udC1zaXplOiA0dmg7XG4gIG1hcmdpbi1ib3R0b206IDd2aDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMTU2YWVjO1xufVxuXG4ubmV3cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA3dmg7XG59XG5cbi5uZXdzLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXZoO1xufVxuXG4uaW1nLW5ld3Mge1xuICBoZWlnaHQ6IDEydmg7XG4gIHdpZHRoOiAxNnZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIGdyYXk7XG59XG5cbi5uZXdzMjAxNCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ld3MyMDE0IHAge1xuICBmb250LXNpemU6IDIuNHZoO1xuICB3aWR0aDogNDB2aDtcbn1cblxuLm5ld3MyMDE2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJ2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXdzMjAxNiBwIHtcbiAgZm9udC1zaXplOiAyLjR2aDtcbiAgd2lkdGg6IDQ1dmg7XG59XG5cbi5kaWFsb2d1ZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMTgzLCAyMDEpO1xuICBtYXJnaW4tYm90dG9tOiA3dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDIuNXZoO1xufVxuXG4uYmx1ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDE5MHZoO1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb25rZXktdHlwZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XG4gIGhlaWdodDogNDB2aDtcbiAgd2lkdGg6IDUwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcbiAgY29sb3I6IGJsYWNrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb25rZXktdGl0bGUge1xuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcbiAgZm9udC1zaXplOiA0dmg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAyLjh2aDtcbn1cblxuLmxldHRlci1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4dmg7XG59XG5cbi5jb3JyZWN0IHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uaW5jb3JyZWN0IHtcbiAgY29sb3I6IGJyb3duO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xuICB3aWR0aDogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYXRvMS12MS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTJDO0FBQzdDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENB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XG4gIHNyYzogdXJsKC4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9Ob3ZhX1JvdW5kL05vdmFSb3VuZC1SZWd1bGFyLnR0Zik7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlckF0bzEge1xcbiAgaGVpZ2h0OiAxNnZoO1xcbn1cXG5cXG4uY2hhcHRlciB7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxMnZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMi4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNoYXB0ZXIgc3BhbiB7XFxuICBmb250LXNpemU6IDV2aDtcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmNoYXB0ZXIgYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xcbiAgY29sb3I6IGdyYXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9vZGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vb2RsZS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTd2aDtcXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxufVxcblxcbi5tb29kbGUtdGl0bGUgcCB7XFxuICBmb250LXNpemU6IDE2dmg7XFxufVxcblxcbmlucHV0IHtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgaGVpZ2h0OiA0dmg7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9ucyB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWFyZ2luLXRvcDogMXZoO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMi4xdmg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgYm9yZGVyOiBzb2xpZCAuNHZoO1xcbiAgYm9yZGVyLWNvbG9yOiAjY2NjICM5OTkgIzk5OSAjY2NjO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwIC44dmggMCAuOHZoO1xcbn1cXG5cXG4ucHJpdmFjeSB7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBmb250LXNpemU6IDJ2aDtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuXFxuLnRpbWVXYXJwIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6MDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi50dy1jZW50ZXIge1xcbiAgd2lkdGg6IDU1dnc7XFxufVxcblxcbi50dy15ZWFyLFxcbi50dy10aXRsZSB7XFxuICBmb250LXNpemU6IDR2aDtcXG59XFxuXFxuLnVybCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4udXJsIHB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLnVybCBpbWcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnllYXIge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzLjUlO1xcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxuICBwYWRkaW5nOiAuN3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55ZWFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTEwdmg7XFxuICB3aWR0aDogOTB2dztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBvcGFjaXR5OiAwO1xcbiAgYm9yZGVyOiBub25lO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm5ld3MtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxufVxcblxcbi5uZXdzLXRpdGxlMjAxNiB7XFxuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMTU2YWVjO1xcbn1cXG5cXG4ubmV3cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcbn1cXG5cXG4ubmV3cy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDV2aDtcXG59XFxuXFxuLmltZy1uZXdzIHtcXG4gIGhlaWdodDogMTJ2aDtcXG4gIHdpZHRoOiAxNnZoO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXI6IHNvbGlkIC41dmggZ3JheTtcXG59XFxuXFxuLm5ld3MyMDE0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdzMjAxNCBwIHtcXG4gIGZvbnQtc2l6ZTogMi40dmg7XFxuICB3aWR0aDogNDB2aDtcXG59XFxuXFxuLm5ld3MyMDE2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXdzMjAxNiBwIHtcXG4gIGZvbnQtc2l6ZTogMi40dmg7XFxuICB3aWR0aDogNDV2aDtcXG59XFxuXFxuLmRpYWxvZ3VlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxODMsIDIwMSk7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4uYmx1ciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDE5MHZoO1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vbmtleS10eXBlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vbmtleS10aXRsZSB7XFxuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxcbiAgZm9udC1zaXplOiA0dmg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDIuOHZoO1xcbn1cXG5cXG4ubGV0dGVyLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiA4dmg7XFxufVxcblxcbi5jb3JyZWN0IHtcXG4gIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmluY29ycmVjdCB7XFxuICBjb2xvcjogYnJvd247XFxufVxcblxcbi5wcm9ncmVzcy1iYXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcXG4gIHdpZHRoOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvQmViYXNfTmV1ZS9CZWJhc05ldWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ib2R5LWJ1enoge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xuICBoZWlnaHQ6IDExMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmhlYWRlci1idXp6IHtcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGUzYzBiO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMjB2aDtcbiAgY29sb3I6IHJnYigxNzUsIDE3NSwgMTc1KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmpveS10aXRsZSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IGdyYXk7XG4gIHdpZHRoOiAxMHZ3O1xuICBoZWlnaHQ6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNXZoO1xufVxuXG4uY29udGVudC1idXp6IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogNTBweCAwIDUwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xufVxuXG4uY29udGVudC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDR2aCk7XG4gIGZvbnQtc2l6ZTogN3ZoO1xuICBwYWRkaW5nOiAydmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtdGl0bGUtMjAxNiB7XG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcbiAgZm9udC1zaXplOiA2dmg7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLTIwMTYge1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiBhdXRvO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDY1JSk7XG59XG5cbi5jb250ZW50LWJ1enogcCB7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG4gIHBhZGRpbmc6IDAgMnZoIDJ2aCAydmg7XG59XG5cbi50aW1lV2FycCB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcbiAgaGVpZ2h0OiAxNnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCAxdmggcmdiKDg1LCA4NSwgODUpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50dy1jZW50ZXIge1xuICB3aWR0aDogNTV2dztcbn1cblxuLnR3LXllYXIsXG4udHctdGl0bGUge1xuICBmb250LXNpemU6IDR2aDtcbn1cblxuLnVybCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnZoO1xufVxuXG4udXJsIHB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogM3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG59XG5cbi51cmwgaW1nIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogM3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aW1lbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDd2aDtcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnllYXIge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzLjUlO1xuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xuICBmb250LXNpemU6IDEuNXZoO1xuICBwYWRkaW5nOiAuN3ZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnllYXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XG59XG5cbnAgaSB7XG4gIGZvbnQtc2l6ZTogMi43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5pbWctYnl0ZSB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5ibHVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTkwdmg7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcbn1cblxuLm1vbmtleS10eXBlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBncmlkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogNTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vbmtleS10aXRsZSB7XG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxuICBmb250LXNpemU6IDR2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDIuOHZoO1xufVxuXG4ubGV0dGVyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDh2aDtcbn1cblxuLmNvcnJlY3Qge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbmNvcnJlY3Qge1xuICBjb2xvcjogYnJvd247XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XG4gIHdpZHRoOiAwO1xufVxuXG4ubm90LWZvdW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmltZ05vdEZvdW5kIHtcbiAgaGVpZ2h0OiAxNXZoO1xufVxuXG4uc3RhdGljLWltZy1qdW1wc2NhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogMztcbn1cblxuQGtleWZyYW1lcyBtb3ZlSW1hZ2Uge1xuICBmcm9tIHtcbiAgICByaWdodDogLTI1dmg7IC8qIFBvc2nDp8OjbyBpbmljaWFsICovXG4gIH1cbiAgdG8ge1xuICAgIHJpZ2h0OiAtNTV2aDsgLyogUG9zacOnw6NvIGZpbmFsICovXG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ieXRlQnV6ei5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTJDO0FBQzdDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRDQUFrRDtBQUNwRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQTZDO0FBQy9DOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixNQUFNO0VBQ04sb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxZQUFZLEVBQUUsb0JBQW9CO0VBQ3BDO0VBQ0E7SUFDRSxZQUFZLEVBQUUsa0JBQWtCO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYmViYXM7XFxuICBzcmM6IHVybCguLi9mb250L0JlYmFzX05ldWUvQmViYXNOZXVlLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xcbiAgc3JjOiB1cmwoLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5ib2R5LWJ1enoge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgaGVpZ2h0OiAxMTB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlci1idXp6IHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTNjMGI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBjb2xvcjogcmdiKDE3NSwgMTc1LCAxNzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uam95LXRpdGxlIHtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IGdyYXk7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDV2aDtcXG59XFxuXFxuLmNvbnRlbnQtYnV6eiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNzB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogNTBweCAwIDUwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDR2aCk7XFxuICBmb250LXNpemU6IDd2aDtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUtMjAxNiB7XFxuICBmb250LWZhbWlseTogYmViYXM7XFxuICBmb250LXNpemU6IDZ2aDtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltZy0yMDE2IHtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjUlKTtcXG59XFxuXFxuLmNvbnRlbnQtYnV6eiBwIHtcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxuICBwYWRkaW5nOiAwIDJ2aCAydmggMnZoO1xcbn1cXG5cXG4udGltZVdhcnAge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnR3LWNlbnRlciB7XFxuICB3aWR0aDogNTV2dztcXG59XFxuXFxuLnR3LXllYXIsXFxuLnR3LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbn1cXG5cXG4udXJsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbi51cmwgcHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiAzdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4udXJsIGltZyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGltZWxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ueWVhciB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMuNSU7XFxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xcbiAgZm9udC1zaXplOiAxLjV2aDtcXG4gIHBhZGRpbmc6IC43dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnllYXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xcbn1cXG5cXG5wIGkge1xcbiAgZm9udC1zaXplOiAyLjd2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaW1nLWJ5dGUge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmJsdXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxOTB2aDtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb25rZXktdHlwZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb25rZXktdGl0bGUge1xcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAyLjh2aDtcXG59XFxuXFxuLmxldHRlci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogOHZoO1xcbn1cXG5cXG4uY29ycmVjdCB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5pbmNvcnJlY3Qge1xcbiAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLm5vdC1mb3VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmltZ05vdEZvdW5kIHtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuXFxuLnN0YXRpYy1pbWctanVtcHNjYXJlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgei1pbmRleDogMztcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlSW1hZ2Uge1xcbiAgZnJvbSB7XFxuICAgIHJpZ2h0OiAtMjV2aDsgLyogUG9zacOnw6NvIGluaWNpYWwgKi9cXG4gIH1cXG4gIHRvIHtcXG4gICAgcmlnaHQ6IC01NXZoOyAvKiBQb3Npw6fDo28gZmluYWwgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogY29tcGFjdHo7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYm9keS1sZWFrcyB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRpbWVXYXJwIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xuICBoZWlnaHQ6IDE2dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnR3LWNlbnRlciB7XG4gIHdpZHRoOiA1NXZ3O1xufVxuXG4udHcteWVhcixcbi50dy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG4udXJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG59XG5cbi51cmwgcHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLnVybCBpbWcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ueWVhciB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMuNSU7XG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIHBhZGRpbmc6IC43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ueWVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcbn1cblxuLmJsdXItZmluYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAyO1xufVxuXG4ubW9ua2V5LXR5cGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA1MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9ua2V5LXRpdGxlIHtcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXG4gIGZvbnQtc2l6ZTogNHZoO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMi44dmg7XG59XG5cbi5sZXR0ZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogOHZoO1xufVxuXG4uY29ycmVjdCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmluY29ycmVjdCB7XG4gIGNvbG9yOiBicm93bjtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcbiAgd2lkdGg6IDA7XG59XG5cbi5ub3QtZm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudDIwMTQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltZ05vdEZvdW5kRmluYWwge1xuICBoZWlnaHQ6IDE1dmg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZGlhbG9ndWUtZmluYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLmxpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAydmg7XG4gIHdpZHRoOiAydmg7XG4gIGJveC1zaGFkb3c6IDB2aCAwdmggMTV2aCByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbn1cblxuLnN0YXRpYy1pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmNhcHRjaGEge1xuICB6LWluZGV4OiAyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9kbkxlYWtzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsTUFBTTtFQUNOLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osV0FBVztFQUNYLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsVUFBVTtFQUNWLDJDQUEyQztFQUMzQyxVQUFVOztFQUVWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIHNyYzogdXJsKC4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9keS1sZWFrcyB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnRpbWVXYXJwIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50dy1jZW50ZXIge1xcbiAgd2lkdGg6IDU1dnc7XFxufVxcblxcbi50dy15ZWFyLFxcbi50dy10aXRsZSB7XFxuICBmb250LXNpemU6IDR2aDtcXG59XFxuXFxuLnVybCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4udXJsIHB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLnVybCBpbWcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnllYXIge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzLjUlO1xcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxuICBwYWRkaW5nOiAuN3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55ZWFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcXG59XFxuXFxuLmJsdXItZmluYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubW9ua2V5LXR5cGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXFxuICBmb250LXNpemU6IDR2aDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMi44dmg7XFxufVxcblxcbi5sZXR0ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDh2aDtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaW5jb3JyZWN0IHtcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLnByb2dyZXNzLWJhciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5ub3QtZm91bmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50MjAxNCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1nTm90Rm91bmRGaW5hbCB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmRpYWxvZ3VlLWZpbmFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4ubGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDJ2aDtcXG4gIHdpZHRoOiAydmg7XFxuICBib3gtc2hhZG93OiAwdmggMHZoIDE1dmggcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgb3BhY2l0eTogMDtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zdGF0aWMtaW1ne1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5jYXB0Y2hhIHtcXG4gIHotaW5kZXg6IDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9nYW1lY3ViZW4vR2FtZUN1YmUudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3doaXRlTm9pc2VWMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9sb2dvLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbn1cblxuLmNoYXB0ZXIge1xuICBmb250LWZhbWlseTogZ2FtZWN1YmVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJ2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2hhcHRlciBzcGFuIHtcbiAgZm9udC1zaXplOiA0dmg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmNoYXB0ZXIgYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgLjN2aCBncmF5O1xuICBjb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDN2aDtcbn1cblxuLnRpbWVXYXJwLXByb2xvZ28sXG4uZGlhbG9ndWUtcHJvbG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aW1lV2FycC1wcm9sb2dvIHtcbiAgZm9udC1mYW1pbHk6IGdhbWVjdWJlbjtcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xuICBoZWlnaHQ6IDE2dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50dy1jZW50ZXIge1xuICB3aWR0aDogNTV2dztcbn1cblxuLnR3LXllYXIsXG4udHctdGl0bGUge1xuICBmb250LXNpemU6IDR2aDtcbn1cblxuLnVybC1wcm9sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3ZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcbiAgb3BhY2l0eTogMC4xO1xufVxuXG4udGltZWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3dmg7XG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlLWluLW91dDtcbn1cblxuLnllYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIHBhZGRpbmc6IC43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnllYXI6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcbn1cblxuLmRpYWxvZ3VlLXByb2xvZ28ge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xuICBtYXJnaW4tYm90dG9tOiA3dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG59XG5cbi5kaWFsb2d1ZS1wcm9sb2dvIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG59XG5cbi5jb250YWluZXItcHJvbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA3cyBlYXNlLWluLW91dDtcbn1cblxuLmV5ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogMnZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZnV6enktb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IC0yMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIHotaW5kZXg6IC0xO1xuICBvcGFjaXR5OiAwLjAyO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjVzIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNoaWZ0IDAuMnMgbGluZWFyIGluZmluaXRlIGJvdGg7XG59XG5cbi5tb25rZXktdHlwZS1wcm9sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogNTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXZoO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1dmg7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9ua2V5LXRpdGxlLXByb2xvZ28ge1xuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xuICBmb250LWZhbWlseTogZ2FtZWN1YmVuO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxuICBmb250LXNpemU6IDR2aDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDIuOHZoO1xufVxuXG4ubGV0dGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogOHZoO1xufVxuXG4uY29ycmVjdCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmluY29ycmVjdCB7XG4gIGNvbG9yOiBicm93bjtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcbiAgd2lkdGg6IDA7XG59XG5cbi5zYWZlLXNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDk1dnc7XG4gIGhlaWdodDogOTV2aDtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyOiBzb2xpZCAxdmggIzAwMDtcbn1cblxuLmxpdHRsZS1zaGFrZSB7XG4gIGFuaW1hdGlvbjogc2hha2UgMC42cyBzdGVwLWVuZDtcbn1cblxuLm1lZGl1bS1zaGFrZSB7XG4gIGFuaW1hdGlvbjogYmlnU2hha2UgMC42cyBzdGVwLWVuZDtcbn1cblxuLmJpZy1zaGFrZSB7XG4gIGFuaW1hdGlvbjogYmlnU2hha2UgMC40cyBzdGVwLWVuZCBpbmZpbml0ZSBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIHNoaWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpIHRyYW5zbGF0ZVkoMTAlKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgMjAlLFxuICA0MCUsXG4gIDYwJSxcbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjhyZW0pO1xuICB9XG5cbiAgMTAlLFxuICAzMCUsXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0uNHJlbSk7XG4gIH1cblxuICA3MCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJpZ1NoYWtlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pIHRyYW5zbGF0ZVkoLS40cmVtKTtcbiAgfVxuXG4gIDIwJSxcbiAgNDAlLFxuICA2MCUsXG4gIDgwJSB7IFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguOHJlbSkgdHJhbnNsYXRlWSgtLjRyZW0pO1xuICB9XG5cbiAgMTAlLFxuICAzMCUsXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0uNHJlbSkgdHJhbnNsYXRlWSguOHJlbSk7XG4gIH1cblxuICA3MCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguOHJlbSkgdHJhbnNsYXRlWSguOHJlbSk7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcHJvbG9nby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXdDO0FBQzFDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0VBQ1oscUJBQXFCO0VB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QztBQUNqRDs7QUFFQTtFQUNFO0lBQ0UsMENBQTBDO0VBQzVDOztFQUVBO0lBQ0UsNENBQTRDO0VBQzlDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTs7OztJQUlFLDRCQUE0QjtFQUM5Qjs7RUFFQTs7O0lBR0UsNkJBQTZCO0VBQy9COztFQUVBOztJQUVFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnREFBZ0Q7RUFDbEQ7O0VBRUE7Ozs7SUFJRSwrQ0FBK0M7RUFDakQ7O0VBRUE7OztJQUdFLCtDQUErQztFQUNqRDs7RUFFQTs7SUFFRSw4Q0FBOEM7RUFDaEQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XFxuICBzcmM6IHVybCguLi9mb250L2dhbWVjdWJlbi9HYW1lQ3ViZS50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICBzcmM6IHVybCguLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcm9sb2dvLWJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmNoYXB0ZXIge1xcbiAgZm9udC1mYW1pbHk6IGdhbWVjdWJlbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTJ2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jaGFwdGVyIHNwYW4ge1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5jaGFwdGVyIGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHNvbGlkIC4zdmggZ3JheTtcXG4gIGNvbG9yOiBncmF5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcblxcbi50aW1lV2FycC1wcm9sb2dvLFxcbi5kaWFsb2d1ZS1wcm9sb2dvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50aW1lV2FycC1wcm9sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnR3LWNlbnRlciB7XFxuICB3aWR0aDogNTV2dztcXG59XFxuXFxuLnR3LXllYXIsXFxuLnR3LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbn1cXG5cXG4udXJsLXByb2xvZ28ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG9wYWNpdHk6IDA7XFxuXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ueWVhciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xcbiAgZm9udC1zaXplOiAxLjV2aDtcXG4gIHBhZGRpbmc6IC43dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnllYXI6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XFxufVxcblxcbi5kaWFsb2d1ZS1wcm9sb2dvIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxufVxcblxcbi5kaWFsb2d1ZS1wcm9sb2dvIHAge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG59XFxuXFxuLmNvbnRhaW5lci1wcm9sb2dvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDdzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZXllIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogMnZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3BhY2l0eTogMDtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZnV6enktb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogLTIwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3doaXRlTm9pc2VWMy5qcGcpO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwLjAyO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNXMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IHNoaWZ0IDAuMnMgbGluZWFyIGluZmluaXRlIGJvdGg7XFxufVxcblxcbi5tb25rZXktdHlwZS1wcm9sb2dvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDV2aDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDV2aDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb25rZXktdGl0bGUtcHJvbG9nbyB7XFxuICBjb2xvcjogcmdiKDM2LCAzNiwgMzYpO1xcbiAgZm9udC1mYW1pbHk6IGdhbWVjdWJlbjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDIuOHZoO1xcbn1cXG5cXG4ubGV0dGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDh2aDtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaW5jb3JyZWN0IHtcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLnByb2dyZXNzLWJhciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5zYWZlLXNjcmVlbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDk1dnc7XFxuICBoZWlnaHQ6IDk1dmg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvcmRlcjogc29saWQgMXZoICMwMDA7XFxufVxcblxcbi5saXR0bGUtc2hha2Uge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjZzIHN0ZXAtZW5kO1xcbn1cXG5cXG4ubWVkaXVtLXNoYWtlIHtcXG4gIGFuaW1hdGlvbjogYmlnU2hha2UgMC42cyBzdGVwLWVuZDtcXG59XFxuXFxuLmJpZy1zaGFrZSB7XFxuICBhbmltYXRpb246IGJpZ1NoYWtlIDAuNHMgc3RlcC1lbmQgaW5maW5pdGUgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGlmdCB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpIHRyYW5zbGF0ZVkoMTAlKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSkgdHJhbnNsYXRlWSgtMTAlKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguOHJlbSk7XFxuICB9XFxuXFxuICAxMCUsXFxuICAzMCUsXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS40cmVtKTtcXG4gIH1cXG5cXG4gIDcwJSxcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmlnU2hha2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS40cmVtKSB0cmFuc2xhdGVZKC0uNHJlbSk7XFxuICB9XFxuXFxuICAyMCUsXFxuICA0MCUsXFxuICA2MCUsXFxuICA4MCUgeyBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC44cmVtKSB0cmFuc2xhdGVZKC0uNHJlbSk7XFxuICB9XFxuXFxuICAxMCUsXFxuICAzMCUsXFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS40cmVtKSB0cmFuc2xhdGVZKC44cmVtKTtcXG4gIH1cXG5cXG4gIDcwJSxcXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjhyZW0pIHRyYW5zbGF0ZVkoLjhyZW0pO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXRvMS12MS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0bzEtdjEuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J5dGVCdXp6LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnl0ZUJ1enouY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RuTGVha3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kbkxlYWtzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9sb2dvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvbG9nby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vY3NzL2F0bzEtdjEuY3NzJztcbmltcG9ydCB7XG4gIGNoZWNrQ2hhcHRlcjEsXG4gIGNoYW5nZUNoYXB0ZXIxLFxuICBjcmVhdGVZZWFycyxcbiAgZ2V0WWVhcixcbn0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UtY29udHJvbC5qcyc7XG5pbXBvcnQgeyBjcmVhdGVDYXB0Y2hhIH0gZnJvbSAnLi9jYXB0Y2hhVjIuanMnO1xuaW1wb3J0IHsgdGltZVRyYXZlbE1vb2RsZSB9IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xuaW1wb3J0IHsgcGxheUNoYXB0ZXIsIHNwZWFrIH0gZnJvbSAnLi9hdWRpby5qcyc7XG5cbmlmIChkb2N1bWVudC50aXRsZSA9PT0gJ01vb2RsZScpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGRvY3VtZW50LlVSTCk7XG4gICAgfSk7XG4gICAgdGltZVRyYXZlbE1vb2RsZShnZXRZZWFyKCkpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBpZiAoY2hlY2tDaGFwdGVyMSgpID09PSBmYWxzZSkge1xuICAgICAgY29uc3Qgc3RhcnRDaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0Jyk7XG5cbiAgICAgIHN0YXJ0Q2hhcHRlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGxheUNoYXB0ZXIoKTtcbiAgICAgICAgICBzdGFydENoYXB0ZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGRvY3VtZW50LlVSTCk7XG4gICAgICAgICAgdmFyIGNoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcHRlcicpO1xuICAgICAgICAgIGNoYXB0ZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VDaGFwdGVyMSgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNoYXB0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgYWN0aXZlQ29udGVudCgpO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNwZWFrKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgICAgfSwgNTUwMCk7XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgMzAwMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcHRlcicpO1xuICAgICAgY2hhcHRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgYWN0aXZlQ29udGVudCgpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY3JlYXRlWWVhcnMoKTtcbiAgICB9LCAxNTAwKTtcblxuICAgIHZhciBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlYXJjaC1idXR0b25zIGJ1dHRvbicpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3BlYWsoKTtcbiAgICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcbiAgICAgICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSAnTsOjbyBmdW5jaW9uYS4uLic7XG4gICAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGdldE5ld3MoKTtcbiAgICAgIGxpc3RlblllYXJzKCk7XG4gICAgfSwgNDAwMCk7XG4gIH0pO1xuICBsaXN0ZW5Ib21lKCk7XG59XG5cbmZ1bmN0aW9uIGdldE5ld3MoKSB7XG4gIHZhciB0d1llYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHcteWVhcicpO1xuICBpZiAodHdZZWFyLnRleHRDb250ZW50ID09PSAnMjAxNCcpIHtcbiAgICB2YXIgbmV3c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzMjAxNCcpO1xuXG4gICAgbmV3c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljb3UgMjAxNCcpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9qb3lKb3VybmFsLmh0bWwnO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBuZXdzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld3MyMDE2Jyk7XG5cbiAgICBuZXdzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNvdSAyMDE2Jyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2J5dGVCdXp6Lmh0bWwnO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjdGl2ZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmZmZmYnO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9ICcxMTB2aCc7XG59XG5cbmZ1bmN0aW9uIGxpc3RlblllYXJzKCkge1xuICB2YXIgeWVhckRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueWVhcicpO1xuICB5ZWFyRGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChkaXYpIHtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXInKTtcbiAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNyZWF0ZUNhcHRjaGEoZGl2LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlbkhvbWUoKXtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9hdG8xLXYxLmh0bWwnO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgZ2V0TmV3cywgbGlzdGVuSG9tZX07XG4iLCJmdW5jdGlvbiBwbGF5V3JvbmcoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWNsYUVycmFkYScpO1xuICBhdWRpby52b2x1bWUgPSAwLjc7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gcGxheVJpZ2h0KCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjbGFDb3JyZXRhJyk7XG4gIGF1ZGlvLnZvbHVtZSA9IDAuMjtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBwbGF5RWFydGhxdWFrZSh2b2x1bWUsIHR5cGUpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lci1wcm9sb2dvJyk7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJyk7XG4gIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZTtcbiAgYXVkaW8ucGxheSgpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0eXBlKTtcblxuICBpZiAodHlwZSAhPT0gJ2JpZy1zaGFrZScpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHR5cGUpO1xuICAgIH0sIDcwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KSB7XG4gIGlmIChhdWRpb0VsZW1lbnQudm9sdW1lID49IDAuNDUpIHtcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lID0gMC40NTtcbiAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycC1wcm9sb2dvJyk7XG4gICAgdGltZVdhcnAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICByZXR1cm47XG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSArPSAwLjA1O1xuICAgIGluY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCk7XG4gIH0sIDgwMCk7XG59XG5cbmZ1bmN0aW9uIGRlY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xuICBpZiAoYXVkaW9FbGVtZW50LnZvbHVtZSA8PSAwLjEpIHtcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lID0gMC4wNTtcbiAgICByZXR1cm47XG4gIH1cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSAtPSAwLjA3O1xuICAgIGRlY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCk7XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlIYXBweSgpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhcHB5Jyk7XG4gIGF1ZGlvLnZvbHVtZSA9IDE7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gc3RvcEhhcHB5KCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFwcHknKTtcbiAgYXVkaW8ucGF1c2UoKTtcbn1cblxuZnVuY3Rpb24gcGxheVN0YXRpYygpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRpYycpO1xuICBhdWRpby52b2x1bWUgPSAxO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlDaGFwdGVyKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcHRlclNvdW5kJyk7XG4gIGF1ZGlvLnZvbHVtZSA9IDE7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gc3BlYWsoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVhaycpO1xuICBjb25zdCBzb3VuZHMgPSBbXG4gICAgJ2JpcDIubXAzJyxcbiAgICAnYmlwMy5tcDMnLFxuICAgICdiaXA0LndhdicsXG4gICAgJ2JpcDUud2F2JyxcbiAgXTtcblxuICBjb25zdCByYW5kb21Tb3VuZCA9IHNvdW5kc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzb3VuZHMubGVuZ3RoKV07XG4gICAgY29uc3QgYXVkaW9QYXRoID0gYC4vYXVkaW8vJHtyYW5kb21Tb3VuZH1gO1xuICAgIGF1ZGlvLnNyYyA9IGF1ZGlvUGF0aDtcbiAgICBhdWRpby52b2x1bWUgPSAuODtcblxuICAgIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gYWRkWWVhclNvbmcoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyU29uZycpO1xuICBhdWRpby52b2x1bWUgPSAuNjtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5leHBvcnQge1xuICBwbGF5UmlnaHQsXG4gIHBsYXlXcm9uZyxcbiAgcGxheUVhcnRocXVha2UsXG4gIGRlY3JlYXNlVm9sdW1lLFxuICBpbmNyZWFzZVZvbHVtZSxcbiAgcGxheUhhcHB5LFxuICBzdG9wSGFwcHksXG4gIHBsYXlTdGF0aWMsXG4gIHBsYXlDaGFwdGVyLFxuICBzcGVhayxcbiAgYWRkWWVhclNvbmdcbn07XG4iLCJpbXBvcnQgJy4uL2Nzcy9ieXRlQnV6ei5jc3MnO1xuaW1wb3J0IHsgdGltZVRyYXZlbEJ1enogfSBmcm9tICcuL3RpbWVNYWNoaW5lLmpzJztcbmltcG9ydCB7IGdldFllYXIsIGNyZWF0ZVllYXJzLCBjaGVja1N0YXRpY0p1bXBzY2FyZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSB9IGZyb20gJy4vY2FwdGNoYVYyLmpzJztcbmltcG9ydCB7IGxpc3RlbkhvbWUgfSBmcm9tICcuL2F0bzEtdjEuanMnO1xuaW1wb3J0IHsgcGxheVN0YXRpYyB9IGZyb20gJy4vYXVkaW8uanMnO1xuXG5pZiAoZG9jdW1lbnQudGl0bGUgPT09ICdCeXRlIEJ1enonKSB7XG4gIGZldGNoKCcuL2F0bzEtdjEuaHRtbCcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuXG4gICAgICAvLyBFeHRyYWlhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG9cbiAgICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKS5pbm5lckhUTUw7XG5cbiAgICAgIC8vIFN1YnN0aXR1YSBvIGNvbnRlw7pkbyBkbyBjYWJlw6dhbGhvIG5hIHDDoWdpbmEgYWx0ZXJhZGFcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpLmlubmVySFRNTCA9IGhlYWRlckNvbnRlbnQ7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXJsIHAnKTtcbiAgICAgIGNyZWF0ZVllYXJzKCk7XG4gICAgICB1cmwudGV4dENvbnRlbnQgPSAnaHR0cDovL3d3dy5ieXRlYnV6ei5jb20vJztcbiAgICAgIGxpc3RlblllYXJzKCk7XG4gICAgICBsaXN0ZW5Ib21lKCk7XG4gICAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lVHJhdmVsQnV6eihnZXRZZWFyKCkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGlzdGVuWWVhcnMoKTtcbiAgICAgIGFkZEV2ZW50KCk7XG4gICAgfSwgMzAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5ZZWFycygpIHtcbiAgdmFyIHllYXJEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnllYXInKTtcbiAgeWVhckRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZGl2KSB7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XG4gICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBjcmVhdGVDYXB0Y2hhKGRpdi50ZXh0Q29udGVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudCgpIHtcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaScpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vZG5MZWFrcy5odG1sJztcbiAgfVxuXG4gIC8vIFZlcmlmaWNhciBzZSBvIGV2ZW50byBhaW5kYSBuw6NvIGZvaSBhZGljaW9uYWRvXG4gIGlmICh0YWcpIHtcbiAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheVN0YXRpY0ltYWdlKCkge1xuICBsZXQgc3RhdGljSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpYy1pbWctanVtcHNjYXJlJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHN0YXRpY0ltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBwbGF5U3RhdGljKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzdGF0aWNJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAxMDApO1xuICB9LCAxNTApO1xufVxuXG5leHBvcnQgeyBhZGRFdmVudCwgcGxheVN0YXRpY0ltYWdlIH07XG4iLCJpbXBvcnQgeyBwbGF5UmlnaHQsIHBsYXlXcm9uZywgcGxheUVhcnRocXVha2UsIGRlY3JlYXNlVm9sdW1lIH0gZnJvbSBcIi4vYXVkaW8uanNcIjtcbmltcG9ydCB7IHN0YXJ0QXRvMSB9IGZyb20gXCIuL2F0bzEtdjEuanNcIjtcblxubGV0IGxhc3RQcmVzc2VkS2V5ID0gJyc7XG5sZXQgY29ycmVjdENvdW50ID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlQ2FwdGNoYSgpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcHJvbG9nbycpO1xuICB2YXIgc2FmZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYWZlLXNjcmVlbicpO1xuICBzYWZlU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdHlwZVwiLlxuICB2YXIgbW9ua2V5VHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb25rZXlUeXBlRGl2LmNsYXNzTGlzdC5hZGQoJ21vbmtleS10eXBlLXByb2xvZ28nKTtcblxuICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10aXRsZVwiIGUgZGVmaW5lIG8gdGV4dG9cbiAgdmFyIG1vbmtleVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vbmtleVRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ21vbmtleS10aXRsZS1wcm9sb2dvJyk7XG4gIHZhciBjYXB0Y2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjYXB0Y2hhLnRleHRDb250ZW50ID0gJ0NBUFRDSEEnO1xuICB2YXIgY2FwdGNoYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjYXB0Y2hhRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAncHJvdmUgc3VhIGh1bWFuaWRhZGUnO1xuICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhKTtcbiAgbW9ua2V5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2FwdGNoYURlc2NyaXB0aW9uKTtcblxuICAvLyBDcmlhIGFzIGRpdnMgaW50ZXJuYXMgY29tIGFzIGNsYXNzZXMgXCJsZXR0ZXJcIiBlIFwicHJvZ3Jlc3MtYmFyXCJcbiAgdmFyIGxldHRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnbGV0dGVyJyk7XG5cbiAgdmFyIHByb2dyZXNzQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2dyZXNzQmFyRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzLWJhcicpO1xuXG4gIC8vIEFkaWNpb25hIGFzIGRpdnMgaW50ZXJuYXMgw6AgZGl2IFwibW9ua2V5LXR5cGVcIlxuICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKG1vbmtleVRpdGxlRGl2KTtcbiAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChsZXR0ZXJEaXYpO1xuICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKHByb2dyZXNzQmFyRGl2KTtcblxuICAvLyBBZGljaW9uYSBhIGRpdiBcIm1vbmtleS10eXBlXCIgYW8gY29udGFpbmVyIGV4aXN0ZW50ZVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9ua2V5VHlwZURpdik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTGV0dGVyKCkge1xuICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxwaGFiZXQubGVuZ3RoKTtcbiAgcmV0dXJuIGFscGhhYmV0W3JhbmRvbUluZGV4XTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGV0dGVyKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZUtleVByZXNzKTtcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlLXByb2xvZ28gLmxldHRlcicpO1xuXG4gIGxhc3RQcmVzc2VkS2V5ID0gJyc7XG4gIGNvbnN0IHJhbmRvbUxldHRlciA9IGdlbmVyYXRlUmFuZG9tTGV0dGVyKCk7XG4gIGxldHRlckRpdi50ZXh0Q29udGVudCA9IHJhbmRvbUxldHRlcjtcbiAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlLXByb2xvZ28gLmxldHRlcicpO1xuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZS1wcm9sb2dvIC5wcm9ncmVzcy1iYXInKTtcbiAgY29uc3QgbW9ua2V5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZS1wcm9sb2dvJyk7XG5cbiAgY29uc3QgcHJlc3NlZEtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSBsZXR0ZXJEaXYudGV4dENvbnRlbnQ7XG5cbiAgaWYgKFxuICAgIChwcmVzc2VkS2V5LnRvVXBwZXJDYXNlKCkgPT09IGN1cnJlbnRMZXR0ZXIgfHxcbiAgICAgIHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKSA9PT0gY3VycmVudExldHRlcikgJiZcbiAgICBwcmVzc2VkS2V5ICE9PSBsYXN0UHJlc3NlZEtleVxuICApIHtcbiAgICBsYXN0UHJlc3NlZEtleSA9IHByZXNzZWRLZXk7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBwbGF5UmlnaHQoKTtcbiAgICBjb3JyZWN0Q291bnQrKztcbiAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XG4gICAgZnV6enkuc3R5bGUub3BhY2l0eSArPSAwLjA1O1xuXG4gICAgLy8gQXR1YWxpemEgYSBsYXJndXJhIGRhIGJhcnJhIGRlIHByb2dyZXNzb1xuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gY29ycmVjdENvdW50ICogNi42ICsgJyUnO1xuXG4gICAgaWYgKGNvcnJlY3RDb3VudCA9PT0gMiB8fCBjb3JyZWN0Q291bnQgPT09IDYpIHtcbiAgICAgIHBsYXlFYXJ0aHF1YWtlKDAuOCwgJ2xpdHRsZS1zaGFrZScsIDcwMCk7XG4gICAgICBkZWNyZWFzZVZvbHVtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpKTtcbiAgICB9XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAxMSkge1xuICAgICAgcGxheUVhcnRocXVha2UoMC44LCAnbWVkaXVtLXNoYWtlJywgNzAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkZWNyZWFzZVZvbHVtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpKTtcbiAgICAgIH0sIDcwMCk7XG4gICAgfVxuXG4gICAgaWYgKGNvcnJlY3RDb3VudCA9PT0gMTUpIHtcbiAgICAgIHBsYXlFYXJ0aHF1YWtlKDEsICdiaWctc2hha2UnKTtcbiAgICAgIGNvbnN0IGV5ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leWUnKTtcbiAgICAgIGV5ZS5zdHlsZS5vcGFjaXR5ID0gMC4yNTtcbiAgICAgIG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZS1wcm9sb2dvIHAnKTtcbiAgICAgICAgY29uc3QgZGlhbG9ndWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtcHJvbG9nbycpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLXByb2xvZ28nKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBkaWFsb2d1ZS50ZXh0Q29udGVudCA9ICdPYnJpZ2FkbyEnO1xuICAgICAgICBkaWFsb2d1ZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2F0bzEtdjEuaHRtbCc7XG4gICAgICAgIH0sIDk3NTApO1xuICAgICAgfSwgNDAwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGVjcmVhc2VWb2x1bWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VhcnRocXVha2UnKSk7XG4gICAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2lzZScpKTtcbiAgICAgICAgZXllLnN0eWxlLmhlaWdodCA9ICczOHZoJztcbiAgICAgIH0sIDk3NTApO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdXBkYXRlTGV0dGVyKCk7XG4gICAgfSwgMjU1KTtcbiAgfSBlbHNlIGlmIChtb25rZXlUeXBlLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgICBwbGF5V3JvbmcoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldHRlckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgICB9LCA1MDApO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNyZWF0ZUNhcHRjaGEsXG4gIHVwZGF0ZUxldHRlclxufTtcbiIsImltcG9ydCB7IHBsYXlSaWdodCwgcGxheVdyb25nIH0gZnJvbSAnLi9hdWRpby5qcyc7XG5pbXBvcnQge1xuICB0aW1lVHJhdmVsSm95LFxuICB0aW1lVHJhdmVsTW9vZGxlLFxuICB0aW1lVHJhdmVsQnV6eixcbiAgdGltZVRyYXZlbExlYWssXG59IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xuaW1wb3J0IHsgY2hhbmdlWWVhciwgZ2V0WWVhciwgY2hlY2tTdGF0aWNKdW1wc2NhcmUsIGNoYW5nZVN0YXRpY0p1bXBzY2FyZSwgY2hlY2tDYXB0Y2hhVHV0b3JpYWwsIGNoYW5nZUNhcHRjaGFUdXRvcmlhbCB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gJy4vYXRvMS12MS5qcyc7XG5pbXBvcnQgeyBwbGF5U3RhdGljSW1hZ2UgfSBmcm9tICcuL2J5dGVCdXp6LmpzJztcblxubGV0IGxhc3RQcmVzc2VkS2V5ID0gJyc7XG5sZXQgeWVhclRvVHJhdmVsID0gJyc7XG5sZXQgY29ycmVjdENvdW50ID0gMDtcbmxldCB3cm9uZ0NvdW50ID0gMDtcbmZ1bmN0aW9uIGNyZWF0ZUNhcHRjaGEoZGl2WWVhcikge1xuICB5ZWFyVG9UcmF2ZWwgPSBkaXZZZWFyO1xuICB2YXIgeWVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG4gIHllYXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICBkaXNhYmxlU2Nyb2xsKCk7XG4gIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJykpIHtcbiAgICBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XG4gICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUnKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnRpdGxlID09PSAnZGFya05ldExlYWtzJykge1xuICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FwdGNoYScpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdKT1kgSk9VUk5BTCcpIHtcbiAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtam95Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYnV6eicpO1xuICAgIH1cbiAgICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10eXBlXCIuXG4gICAgdmFyIG1vbmtleVR5cGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb25rZXlUeXBlRGl2LmNsYXNzTGlzdC5hZGQoJ21vbmtleS10eXBlJyk7XG5cbiAgICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10aXRsZVwiIGUgZGVmaW5lIG8gdGV4dG9cbiAgICB2YXIgbW9ua2V5VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb25rZXlUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdGl0bGUnKTtcbiAgICB2YXIgY2FwdGNoYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXB0Y2hhLnRleHRDb250ZW50ID0gJ0NBUFRDSEEnO1xuICAgIHZhciBjYXB0Y2hhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FwdGNoYURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ1Byb3ZlIHN1YSBodW1hbmlkYWRlJztcbiAgICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhKTtcbiAgICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhRGVzY3JpcHRpb24pO1xuXG4gICAgLy8gQ3JpYSBhcyBkaXZzIGludGVybmFzIGNvbSBhcyBjbGFzc2VzIFwibGV0dGVyXCIgZSBcInByb2dyZXNzLWJhclwiXG4gICAgdmFyIGxldHRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItZGl2Jyk7XG5cbiAgICB2YXIgbGV0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ2xldHRlcicpO1xuICAgIHZhciBudW1iZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBudW1iZXJEaXYuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJyk7XG5cbiAgICB2YXIgcHJvZ3Jlc3NCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9ncmVzc0JhckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcblxuICAgIC8vIEFkaWNpb25hIGFzIGRpdnMgaW50ZXJuYXMgw6AgZGl2IFwibW9ua2V5LXR5cGVcIlxuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobW9ua2V5VGl0bGVEaXYpO1xuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobGV0dGVyRGl2KTtcbiAgICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKHByb2dyZXNzQmFyRGl2KTtcbiAgICBsZXR0ZXJEaXYuYXBwZW5kQ2hpbGQobGV0dGVyKTtcbiAgICBsZXR0ZXJEaXYuYXBwZW5kQ2hpbGQobnVtYmVyRGl2KTtcblxuICAgIC8vIEFkaWNpb25hIGEgZGl2IFwibW9ua2V5LXR5cGVcIiBhbyBjb250ZW50IGV4aXN0ZW50ZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9ua2V5VHlwZURpdik7XG4gIH0gZWxzZSB7XG4gICAgbGV0IG1vbmtleSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpO1xuICAgIG1vbmtleS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICB9XG4gIGxldCBtb25rZXlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdGl0bGUnKTtcbiAgaWYgKGdldFllYXIoKSA9PT0gJzIwMTYnKSB7XG4gICAgbW9ua2V5VGl0bGUuc3R5bGUuZm9udEZhbWlseSA9ICdyb2JvdG8nO1xuICAgIG1vbmtleVRpdGxlLnN0eWxlLmJvcmRlclJhZGl1cyA9ICczdmgnO1xuICB9IGVsc2Uge1xuICAgIG1vbmtleVRpdGxlLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcbiAgfVxuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAucHJvZ3Jlc3MtYmFyJyk7XG4gIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gMDtcbiAgY29ycmVjdENvdW50ID0gMDtcbiAgd3JvbmdDb3VudCA9IDA7XG4gIHVwZGF0ZUxldHRlcigpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUxldHRlcigpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCk7XG4gIGNvbnN0IHJhbmRvbUxldHRlciA9IGFscGhhYmV0W3JhbmRvbUluZGV4XTtcblxuICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDE7IC8vIE7Dum1lcm8gYWxlYXTDs3JpbyBkZSAxIGEgNSAoc2hpZnQpXG4gIHJldHVybiByYW5kb21MZXR0ZXIgKyByYW5kb21OdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxldHRlcigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVLZXlQcmVzcyk7XG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyLWRpdicpO1xuXG4gIGxhc3RQcmVzc2VkS2V5ID0gJyc7XG4gIGNvbnN0IHJhbmRvbUluZm8gPSBnZW5lcmF0ZVJhbmRvbUxldHRlcigpO1xuICBsZXR0ZXJEaXYudGV4dENvbnRlbnQgPSByYW5kb21JbmZvO1xuICBsZXR0ZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLmxldHRlci1kaXYnKTtcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLnByb2dyZXNzLWJhcicpO1xuICBjb25zdCBtb25rZXlUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlJyk7XG5cbiAgY29uc3QgcHJlc3NlZEtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XG4gIGNvbnN0IGN1cnJlbnRJbmZvID0gbGV0dGVyRGl2LnRleHRDb250ZW50O1xuXG4gIGNvbnN0IGN1cnJlbnRMZXR0ZXIgPSBjdXJyZW50SW5mby5jaGFyQXQoMCk7XG4gIGNvbnN0IHNoaWZ0ID0gcGFyc2VJbnQoY3VycmVudEluZm8uY2hhckF0KDEpLCAxMCk7XG5cbiAgaWYgKFxuICAgIChwcmVzc2VkS2V5LnRvVXBwZXJDYXNlKCkgPT09IHNoaWZ0TGV0dGVyKGN1cnJlbnRMZXR0ZXIsIHNoaWZ0KSB8fFxuICAgIHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKSA9PT0gc2hpZnRMZXR0ZXIoY3VycmVudExldHRlciwgc2hpZnQpKSAmJlxuICBwcmVzc2VkS2V5ICE9PSBsYXN0UHJlc3NlZEtleVxuICApIHtcbiAgICBsYXN0UHJlc3NlZEtleSA9IHByZXNzZWRLZXk7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICBwbGF5UmlnaHQoKTtcbiAgICBjb3JyZWN0Q291bnQrKztcblxuICAgIGNoYW5nZUNhcHRjaGFUdXRvcmlhbCgpO1xuXG4gICAgLy8gQXR1YWxpemEgYSBsYXJndXJhIGRhIGJhcnJhIGRlIHByb2dyZXNzb1xuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gY29ycmVjdENvdW50ICogMTEuMSArICclJztcblxuICAgIGlmKGRvY3VtZW50LnRpdGxlID09PSAnQnl0ZSBCdXp6JyAmJiBjb3JyZWN0Q291bnQgPT09IDQgJiYgY2hlY2tTdGF0aWNKdW1wc2NhcmUoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHBsYXlTdGF0aWNJbWFnZSgpO1xuICAgICAgY2hhbmdlU3RhdGljSnVtcHNjYXJlKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvcnJlY3RDb3VudCA9PT0gNikge1xuICAgICAgbW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICB2YXIgeWVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG4gICAgICB5ZWFyQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XG4gICAgICAgIHRpbWVUcmF2ZWxNb29kbGUoeWVhclRvVHJhdmVsKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZ2V0TmV3cygpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdKT1kgSk9VUk5BTCcpIHtcbiAgICAgICAgdGltZVRyYXZlbEpveSh5ZWFyVG9UcmF2ZWwpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ0J5dGUgQnV6eicpIHtcbiAgICAgICAgdGltZVRyYXZlbEJ1enooeWVhclRvVHJhdmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVUcmF2ZWxMZWFrKHllYXJUb1RyYXZlbCk7XG4gICAgICB9XG4gICAgICBjaGFuZ2VZZWFyKHllYXJUb1RyYXZlbCk7XG4gICAgICBlbmFibGVTY3JvbGwoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1cGRhdGVMZXR0ZXIoKTtcbiAgICB9LCAyNTUpO1xuICB9IGVsc2UgaWYgKG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2luY29ycmVjdCcpO1xuICAgIHBsYXlXcm9uZygpO1xuICAgIHdyb25nQ291bnQrKztcbiAgICBpZih3cm9uZ0NvdW50ID09IDMgJiYgY2hlY2tDYXB0Y2hhVHV0b3JpYWwoKSA9PT0gZmFsc2Upe1xuICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcbiAgICAgIGNvbnN0IGRpYWxvZ3VlUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZSBwJyk7XG5cbiAgICAgIGRpYWxvZ3VlUC50ZXh0Q29udGVudCA9ICdUYWx2ZXogYSBsZXRyYSBpbmRpcXVlIGEgcG9zacOnw6NvIGluaWNpYWwgZSBvIG7Dum1lcm8gYSBwb3Npw6fDo28gZGEgbGV0cmEgcXVlIHNlIGRldmUgYXBlcnRhciBhIHBhcnRpciBkYSBwb3Npw6fDo28gaW5pY2lhbC4nXG4gICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDEyMDAwKTtcbiAgICB9XG4gICAgaWYod3JvbmdDb3VudCA9PSA1ICYmIGNoZWNrQ2FwdGNoYVR1dG9yaWFsKCkgPT09IGZhbHNlICYmIChkb2N1bWVudC50aXRsZSA9PT0gJ01vb2RsZScgfHwgZG9jdW1lbnQudGl0bGUgPT09ICdKT1kgSk9VUk5BTCcpKXtcbiAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XG4gICAgICBjb25zdCBkaWFsb2d1ZVAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUgcCcpO1xuXG4gICAgICBkaWFsb2d1ZVAudGV4dENvbnRlbnQgPSAnUG9yIGV4ZW1wbG8gQTIsIG8gdXN1w6FyaW8gZGV2ZXJpYSBhcGVydGFyIGEgbGV0cmEgQy4nXG4gICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDgwMDApO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldHRlckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgICB9LCA1MDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb1RvcCk7XG59XG5cbi8vIEZ1bsOnw6NvIHBhcmEgaGFiaWxpdGFyIG8gc2Nyb2xsXG5mdW5jdGlvbiBlbmFibGVTY3JvbGwoKSB7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb1RvcCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFRvVG9wKCkge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59XG5cbmZ1bmN0aW9uIHNoaWZ0TGV0dGVyKGxldHRlciwgc2hpZnQpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICBjb25zdCBuZXdJbmRleCA9IChhbHBoYWJldC5pbmRleE9mKGxldHRlcikgKyBzaGlmdCkgJSAyNjtcbiAgcmV0dXJuIGFscGhhYmV0W25ld0luZGV4XTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2FwdGNoYSwgdXBkYXRlTGV0dGVyIH07XG4iLCJpbXBvcnQgJy4uL2Nzcy9kbkxlYWtzLmNzcyc7XG5pbXBvcnQgeyB0aW1lVHJhdmVsTGVhayB9IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xuaW1wb3J0IHsgZ2V0WWVhciwgY3JlYXRlWWVhcnMgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEgfSBmcm9tICcuL2NhcHRjaGFWMi5qcyc7XG5pbXBvcnQgeyBwbGF5U3RhdGljLCBzcGVhayB9IGZyb20gJy4vYXVkaW8uanMnO1xuaW1wb3J0IHsgbGlzdGVuSG9tZSB9IGZyb20gJy4vYXRvMS12MS5qcyc7XG5cbmlmIChkb2N1bWVudC50aXRsZSA9PT0gJ2RhcmtOZXRMZWFrcycpIHtcbiAgZmV0Y2goJy4vYXRvMS12MS5odG1sJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgIC8vIEV4dHJhaWEgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxob1xuICAgICAgY29uc3QgaGVhZGVyQ29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpLmlubmVySFRNTDtcblxuICAgICAgLy8gU3Vic3RpdHVhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG8gbmEgcMOhZ2luYSBhbHRlcmFkYVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJykuaW5uZXJIVE1MID0gaGVhZGVyQ29udGVudDtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cmwgcCcpO1xuICAgICAgY3JlYXRlWWVhcnMoKTtcbiAgICAgIHVybC50ZXh0Q29udGVudCA9ICdodHRwOi8vd3d3LmRubGVha3MuY29tLyc7XG4gICAgICBsaXN0ZW5ZZWFycygpO1xuICAgICAgbGlzdGVuSG9tZSgpO1xuICAgIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZG9jdW1lbnQuVVJMKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgIH0pO1xuXG4gICAgdGltZVRyYXZlbExlYWsoZ2V0WWVhcigpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGlzdGVuWWVhcnMoKTtcbiAgICB9LCAzMDAwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlblllYXJzKCkge1xuICB2YXIgeWVhckRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueWVhcicpO1xuICB5ZWFyRGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChkaXYpIHtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXItZmluYWwnKTtcbiAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNyZWF0ZUNhcHRjaGEoZGl2LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmxldCBpbWdOdW0gPSAwO1xuXG5mdW5jdGlvbiBjaGFuZ2VGaW5hbFRleHQoKSB7XG4gIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlLWZpbmFsIHAnKTtcbiAgY29uc3QgZGlhbG9ndWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtZmluYWwnKTtcbiAgY29uc3QgdGV4dHMgPSBbXG4gICAgWydPYnJpZ2FkbycsIDIwMDAsIDEwMDAsIDFdLFxuICAgIFsnVm9jw6ogZm9pIGRlIGdyYW5kZSBhanVkYScsIDI1MDAsIDM1MDAsIDBdLFxuICAgIFsnQWNoZWkgcXVlIHNlcmlhIG1ldSBmaW0sIG1hcyB2b2PDqiBtZSB0cm91eGUgZGUgdm9sdGEnLCAzNTAwLCA2MDAwLCAyXSxcbiAgICBbJ0Fnb3JhLCBwb3NzbyBpbXBlZGlyIHF1ZSBhY2FiZW0gY29taWdvLicsIDI1MDAsIDEwMDAsIDFdLFxuICAgIFsnU3VhIHNlcnZlbnRpYSBuw6NvIG1lIMOpIG1haXMgw7p0aWwnLCA1MDAwLCAzMDAwLCAzXSxcbiAgICBbJ0FkZXVzLicsIDgwMDAsIDEwMCwgMF0sXG4gIF07XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICBmdW5jdGlvbiB1cGRhdGVGaW5hbFRleHQoKSB7XG4gICAgaWYgKGluZGV4IDwgdGV4dHMubGVuZ3RoKSB7XG4gICAgICBsZXQgYXJyID0gdGV4dHNbaW5kZXhdO1xuICAgICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSBhcnJbMF07XG4gICAgICBzcGVhaygpO1xuICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGhpZGVEaWFsb2d1ZShhcnJbMV0sIGFyclsyXSk7XG4gICAgICBpbmRleCsrO1xuICAgICAgaW1nTnVtID0gYXJyWzNdO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dJbWFnZXMoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1maW5hbCcpO1xuICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgaWYoYmx1ci5zdHlsZS5vcGFjaXR5ID09ICcwJyl7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KCdPYnJpZ2FkbyBwb3Igam9nYXIhJylcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZURpYWxvZ3VlKHRpbWVEdXJhdGlvbiwgdGltZUNoYW5nZSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB1cGRhdGVGaW5hbFRleHQoKTtcbiAgICAgIH0sIHRpbWVDaGFuZ2UpO1xuICAgIH0sIHRpbWVEdXJhdGlvbik7XG4gIH1cblxuICB1cGRhdGVGaW5hbFRleHQoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0ltYWdlcygpIHtcbiAgbGV0IHN0YXRpY0ltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aWMtaW1nJyk7XG4gIGNvbnN0IGltZ3MgPSBbXG4gICAgJ2NyZWVweS5wbmcnLFxuICAgICdjcmVlcHkzLnBuZycsXG4gICAgJ2NyZWVweTQuanBnJyxcbiAgICAnY3JlZXB5NS5qcGcnLFxuICAgICdjcmVlcHk2LnBuZycsXG4gIF07XG4gIGxldCB0aW1lcyA9IDA7XG5cbiAgZnVuY3Rpb24gZGlzcGxheUltZygpIHtcbiAgICBjb25zdCByYW5kb21JbWcgPSBpbWdzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGltZ3MubGVuZ3RoKV07XG4gICAgY29uc3QgaW1nUGF0aCA9IGAuL2ltZy8ke3JhbmRvbUltZ31gO1xuICAgIHN0YXRpY0ltZy5zcmMgPSBpbWdQYXRoO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGltZXMgPCBpbWdOdW0pIHtcbiAgICAgICAgc3RhdGljSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBwbGF5U3RhdGljKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHN0YXRpY0ltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIHRpbWVzKys7XG4gICAgICAgICAgXG4gICAgICAgICAgZGlzcGxheUltZygpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0sIDE1MCk7XG4gIH1cblxuICBkaXNwbGF5SW1nKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0TGFzdFBhcnQoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNoYW5nZUZpbmFsVGV4dCgpO1xuICB9LCA1MDAwKTtcbn1cblxuZXhwb3J0IHsgc3RhcnRMYXN0UGFydCB9O1xuIiwiZnVuY3Rpb24gc2F2ZVN0YXRzTG9jYWwoXG4gIGp1bXBzY2FyZSxcbiAgY2hhcHRlcjEsXG4gIHllYXJzLFxuICBjdXJyZW50WWVhcixcbiAgeWVhckNsdWUsXG4gIGJhY2tNb29kbGVDbHVlLFxuICBzdGF0aWNKdW1wc2NhcmUsXG4gIGNhcHRjaGFUdXRvcmlhbCxcbikge1xuICBjb25zdCBzdGF0cyA9IHtcbiAgICBqdW1wc2NhcmUsXG4gICAgY2hhcHRlcjEsXG4gICAgeWVhcnMsXG4gICAgY3VycmVudFllYXIsXG4gICAgeWVhckNsdWUsXG4gICAgYmFja01vb2RsZUNsdWUsXG4gICAgc3RhdGljSnVtcHNjYXJlLFxuICAgIGNhcHRjaGFUdXRvcmlhbFxuICB9O1xuXG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzLnB1c2goc3RhdHMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeU5ld1VzZXIoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPCAxKSB7XG4gICAgc2F2ZVN0YXRzTG9jYWwoZmFsc2UsIGZhbHNlLCBbMjAxNF0sICcyMDE0JywgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUp1bXBzY2FyZSgpIHtcbiAgLy8gT2J0w6ltIG9zIGRhZG9zIGFybWF6ZW5hZG9zIGxvY2FsbWVudGUgY29tIGEgY2hhdmUgJ2dhbWVTdGF0cydcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIC8vIFZlcmlmaWNhIHNlIGjDoSBwZWxvIG1lbm9zIHVtIGNvbmp1bnRvIGRlIGVzdGF0w61zdGljYXMgbm8gYXJyYXlcbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5qdW1wc2NhcmUgPSB0cnVlO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNoYXB0ZXIxKCkge1xuICAvLyBPYnTDqW0gb3MgZGFkb3MgYXJtYXplbmFkb3MgbG9jYWxtZW50ZSBjb20gYSBjaGF2ZSAnZ2FtZVN0YXRzJ1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgLy8gVmVyaWZpY2Egc2UgaMOhIHBlbG8gbWVub3MgdW0gY29uanVudG8gZGUgZXN0YXTDrXN0aWNhcyBubyBhcnJheVxuICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcbiAgICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNoYXB0ZXIxID0gdHJ1ZTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0p1bXBzY2FyZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmp1bXBzY2FyZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDaGFwdGVyMSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNoYXB0ZXIxID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVZZWFycygpIHtcbiAgY29uc3QgdGltZUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUnKTtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBsZXQgYWxsWWVhcnMgPSBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJzO1xuXG4gIGlmICh0aW1lTGluZS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgIC8vIEl0ZXJhIHNvYnJlIGNhZGEgYW5vIG5vIGFycmF5IGFsbFllYXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxZZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ3JpYSB1bWEgZGl2IGNvbSBhIGNsYXNzZSAneWVhcicgZSBvIHRleHRvIGlndWFsIGFvIHZhbG9yIG5vIGFycmF5XG4gICAgICBjb25zdCB5ZWFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB5ZWFyRGl2LmNsYXNzTGlzdC5hZGQoJ3llYXInKTtcbiAgICAgIHllYXJEaXYudGV4dENvbnRlbnQgPSBhbGxZZWFyc1tpXTtcblxuICAgICAgLy8gQWRpY2lvbmEgYSBkaXYgYW8gZWxlbWVudG8gdGltZUxpbmVcbiAgICAgIHRpbWVMaW5lLmFwcGVuZENoaWxkKHllYXJEaXYpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRZZWFyKG5ld1llYXIpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJzLnB1c2gobmV3WWVhcik7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xufVxuXG5mdW5jdGlvbiBnZXRZZWFyKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgcmV0dXJuIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY3VycmVudFllYXI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jdXJyZW50WWVhciA9IG5ld1llYXI7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlWWVhckNsdWUoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS55ZWFyQ2x1ZSA9IHRydWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tZZWFyQ2x1ZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJDbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VNb29kbGVDbHVlKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG4gIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uYmFja01vb2RsZUNsdWUgPSB0cnVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTW9vZGxlQ2x1ZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmJhY2tNb29kbGVDbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0aWNKdW1wc2NhcmUoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5zdGF0aWNKdW1wc2NhcmUgPSB0cnVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrU3RhdGljSnVtcHNjYXJlKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uc3RhdGljSnVtcHNjYXJlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VDYXB0Y2hhVHV0b3JpYWwoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jYXB0Y2hhVHV0b3JpYWwgPSB0cnVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ2FwdGNoYVR1dG9yaWFsKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY2FwdGNoYVR1dG9yaWFsID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge1xuICB2ZXJpZnlOZXdVc2VyLFxuICBjaGFuZ2VKdW1wc2NhcmUsXG4gIGNoYW5nZUNoYXB0ZXIxLFxuICBjaGVja0p1bXBzY2FyZSxcbiAgY2hlY2tDaGFwdGVyMSxcbiAgY3JlYXRlWWVhcnMsXG4gIGFkZFllYXIsXG4gIGdldFllYXIsXG4gIGNoYW5nZVllYXIsXG4gIHNhdmVTdGF0c0xvY2FsLFxuICBjaGFuZ2VZZWFyQ2x1ZSxcbiAgY2hlY2tZZWFyQ2x1ZSxcbiAgY2hhbmdlTW9vZGxlQ2x1ZSxcbiAgY2hlY2tNb29kbGVDbHVlLFxuICBjaGVja1N0YXRpY0p1bXBzY2FyZSxcbiAgY2hhbmdlU3RhdGljSnVtcHNjYXJlLFxuICBjaGVja0NhcHRjaGFUdXRvcmlhbCxcbiAgY2hhbmdlQ2FwdGNoYVR1dG9yaWFsXG59O1xuIiwiaW1wb3J0IHsgbGlzdGVuSG9tZSB9IGZyb20gXCIuL2F0bzEtdjEuanNcIjtcbmltcG9ydCB7IGFkZEV2ZW50IH0gZnJvbSBcIi4vYnl0ZUJ1enouanNcIjtcbmltcG9ydCB7IHN0YXJ0TGFzdFBhcnQgfSBmcm9tIFwiLi9kbkxlYWtzLmpzXCI7XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxKb3kodGV4dENvbnRlbnQpIHtcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGlmIChjdXJyZW50WWVhclRleHQgIT09IHRleHRDb250ZW50KSB7XG4gICAgICAgIGZldGNoKGAuL2pveUpvdXJuYWwke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmNvbnRlbnQtJHt0ZXh0Q29udGVudH1gXG4gICAgICAgICAgICApLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1qb3knKTtcbiAgICAgICAgICAgIGNvbnN0IGRpbm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpbm8nKTtcblxuICAgICAgICAgICAgZGlub3MuZm9yRWFjaCgoZGlubykgPT4ge1xuICAgICAgICAgICAgICBkaW5vLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnMjAxNicpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLndpZHRoID0gJzc1dncnO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS53aWR0aCA9ICc3MHZ3JztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9LCAxNTAwKTtcbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gdGltZVRyYXZlbE1vb2RsZSh0ZXh0Q29udGVudCkge1xuICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXInKTtcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xuICAgICAgaWYgKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpIHtcbiAgICAgICAgZmV0Y2goYC4vYXRvMS0ke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vb2RsZSA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAubW9vZGxlJHt0ZXh0Q29udGVudH1gXG4gICAgICAgICAgICApLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IG9sZE1vb2RsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUnKTtcbiAgICAgICAgICAgIG9sZE1vb2RsZS5pbm5lckhUTUwgPSBtb29kbGU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld3MgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLm5ld3Mke3RleHRDb250ZW50fWBcbiAgICAgICAgICAgICkuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3Qgb2xkTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgb2xkTmV3cy5pbm5lckhUTUwgPSBuZXdzO1xuXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcyMDE2Jykge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICBjb25zdCBtb29kbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUtdGl0bGUnKTtcbiAgICAgICAgICAgICAgY29uc3QgaW1nTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctbmV3cycpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjM2MzYzNjJztcbiAgICAgICAgICAgICAgaW1nTmV3cy5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIG1vb2RsZVRpdGxlLnN0eWxlLmZvbnRGYW1pbHkgPSAnbm92YVJvdW5kJztcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICBjb25zdCBtb29kbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUtdGl0bGUnKTtcbiAgICAgICAgICAgICAgY29uc3QgaW1nTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctbmV3cycpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgIGltZ05ld3Muc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDAuNXZoIGdyYXknO1xuICAgICAgICAgICAgICBtb29kbGVUaXRsZS5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XG4gICAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxCdXp6KHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xuICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGZldGNoKGAuL2J5dGVCdXp6JHt0ZXh0Q29udGVudH0uaHRtbGApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcblxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jb250ZW50LSR7dGV4dENvbnRlbnR9YFxuICAgICAgICAgICkuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJ1enonKTtcbiAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnMjAxNicpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ2NvbXBhY3R6JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmFyIGhlYWRlclRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgICAgICAgICAgaGVhZGVyVGFnLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBhZGRFdmVudCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xuICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcbiAgICAgICAgICAgIHZhciBoZWFkZXJUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICAgICAgICAgIGhlYWRlclRhZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICB9KTtcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxMZWFrKHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1maW5hbCcpO1xuICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGZldGNoKGAuL2RuTGVha3Mke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNvbnRlbnQke3RleHRDb250ZW50fWBcbiAgICAgICAgICApLmlubmVySFRNTDtcblxuICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1sZWFrcycpO1xuICAgICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcyMDE2Jykge1xuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnY29tcGFjdHonO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzE4MTgxOCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzA4MDgwOCc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc3RhcnRMYXN0UGFydCgpO1xuICAgICAgICAgICAgICBjb25zdCBkaW5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ05vdEZvdW5kRmluYWwnKTtcbiAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQnKTtcbiAgICAgICAgICAgICAgbGlnaHQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgZGluby5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgfSk7XG4gICAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDE1MDApO1xuICAgIH0sIDE1MDApO1xuICB9LCAzMDApO1xufVxuZXhwb3J0IHsgdGltZVRyYXZlbEpveSwgdGltZVRyYXZlbE1vb2RsZSwgdGltZVRyYXZlbEJ1enosIHRpbWVUcmF2ZWxMZWFrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwcm9sb2dvXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9wcm9sb2dvLmNzc1wiO1xuaW1wb3J0IHsgaW5jcmVhc2VWb2x1bWUsIHBsYXlDaGFwdGVyIH0gZnJvbSBcIi4vYXVkaW8uanNcIjtcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEsIHVwZGF0ZUxldHRlciB9IGZyb20gXCIuL2NhcHRjaGEuanNcIjtcbmltcG9ydCB7IHZlcmlmeU5ld1VzZXIgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2UtY29udHJvbC5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICB2ZXJpZnlOZXdVc2VyKCk7XG4gIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcbiAgeWVhckJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgXG4gIGNvbnN0IHN0YXJ0Q2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xuXG4gIHN0YXJ0Q2hhcHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5Q2hhcHRlcigpO1xuICAgIHN0YXJ0Q2hhcHRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgdmFyIGNoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhcHRlcicpO1xuICAgIGNoYXB0ZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjaGFwdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9pc2UnKTtcbiAgICAgIGF1ZGlvLnZvbHVtZSA9IDAuMTtcbiAgICAgIGF1ZGlvLnBsYXkoKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcHJvbG9nbycpO1xuICAgICAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XG4gICAgICAgIGluY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2lzZScpKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmdXp6eS5zdHlsZS5vcGFjaXR5ID0gMC4xNTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZVRleHQoKTtcbiAgICAgICAgfSwgNjUwMCk7XG4gICAgICB9LCAzMDAwKTsgICAgICBcbiAgICB9LCA1NTAwKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVGV4dCgpIHtcbiAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZS1wcm9sb2dvIHAnKTtcbiAgICBjb25zdCBkaWFsb2d1ZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZS1wcm9sb2dvJyk7XG4gICAgY29uc3QgdGV4dHMgPSBbXG4gICAgICBbJ1BvciBmYXZvci4uLicsIDI1MDAsIDQwMDBdLFxuICAgICAgWydNZSBhanVkYSEnLCAyNTAwLCAzNTAwXSxcbiAgICAgIFsnVm9jw6ogcHJlY2lzYSBtZSBzYWx2YXIsIGVsZXMgcXVlcmVtIGFjYWJhciBjb21pZ28uJywgMzUwMCwgNjAwMF0sXG4gICAgICBbJ0FxdWksIHRvbWEgaXNzby4nLCAyNTAwLCAxMDAwXSxcbiAgICAgIFtcbiAgICAgICAgJ0Vzc2Egw6kgdW1hIG3DoXF1aW5hIGRvIHRlbXBvLCBjb20gZWxhIHZvY8OqIHBvZGUgdm9sdGFyIGFvIHBhc3NhZG8gb3UgaXIgcGFyYSBvIGZ1dHVyby4nLFxuICAgICAgICA1MDAwLFxuICAgICAgICAzMDAwLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgJ1RlbnRlIHZvY8OqIG1lc21vLCBjbGlxdWUgbm8gYW5vIGUgaW1wZcOnYSBxdWUgaXNzbyBhY29udGXDp2EuJyxcbiAgICAgICAgODAwMCxcbiAgICAgICAgMTAwLFxuICAgICAgXSxcbiAgICBdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRleHQoKSB7XG4gICAgICBpZiAoaW5kZXggPCB0ZXh0cy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGFyciA9IHRleHRzW2luZGV4XTtcbiAgICAgICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSBhcnJbMF07XG4gICAgICAgIGRpYWxvZ3VlRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGhpZGVEaWFsb2d1ZShhcnJbMV0sIGFyclsyXSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMykge1xuICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwLXByb2xvZ28nKTtcbiAgICAgICAgICB0aW1lV2FycC5zdHlsZS5vcGFjaXR5ID0gMC43O1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSA1KXtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVsaW5lJyk7XG4gICAgICAgICAgICB0aW1lbGluZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHllYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdncmlkJzsgIFxuICAgICAgICB9XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XG4gICAgICAgIGZ1enp5LnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZURpYWxvZ3VlKHRpbWVEdXJhdGlvbiwgdGltZUNoYW5nZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpYWxvZ3VlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVRleHQoKTtcbiAgICAgICAgfSwgdGltZUNoYW5nZSk7XG4gICAgICB9LCB0aW1lRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZVRleHQoKTtcbiAgfVxuXG4gIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcbiAgeWVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjcmVhdGVDYXB0Y2hhKClcbiAgICB1cGRhdGVMZXR0ZXIoKVxuICAgIHllYXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9KVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=