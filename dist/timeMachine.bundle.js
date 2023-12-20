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

@keyframes moveImage {
  from {
    right: -25vh; /* Posição inicial */
  }
  to {
    right: -55vh; /* Posição final */
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/byteBuzz.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: roboto;\n  src: url(../font/Roboto/Roboto-Regular.ttf);\n}\n\n@font-face {\n  font-family: bebas;\n  src: url(../font/Bebas_Neue/BebasNeue-Regular.ttf);\n}\n\n@font-face {\n  font-family: oldMoodle;\n  src: url(../font/Old_Standard_TT/OldStandardTT-Bold.ttf);\n}\n\n@font-face {\n  font-family: compactz;\n  src: url(../font/compact/Compact-Regular.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.body-buzz {\n  font-family: roboto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(24, 24, 24);\n  height: 110vh;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n.header-buzz {\n  font-family: compactz;\n  background-color: #0e3c0b;\n  width: 100vw;\n  height: 20vh;\n  color: rgb(175, 175, 175);\n  font-weight: bolder;\n  display: flex;\n  align-items: center;\n}\n\n.joy-title {\n  border-right: solid 2px gray;\n  width: 10vw;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 5vh;\n}\n\n.content-buzz {\n  height: auto;\n  width: 70vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 25px;\n  color: white;\n  margin: 50px 0 50px 0;\n  background-color: rgb(0, 0, 0);\n}\n\n.content-title {\n  font-family: bebas;\n  width: calc(100% - 4vh);\n  font-size: 7vh;\n  padding: 2vh;\n  text-align: center;\n}\n\n.content-title-2016 {\n  font-family: bebas;\n  font-size: 6vh;\n  padding: 2vh;\n  text-align: center;\n}\n\n.img-2016 {\n  height: 50vh;\n  width: auto;\n  opacity: 0.7;\n  filter: grayscale(65%);\n}\n\n.content-buzz p {\n  font-size: 2.5vh;\n  padding: 0 2vh 2vh 2vh;\n}\n\n.timeWarp {\n  font-family: oldMoodle;\n  width: calc(90vw - 10px);\n  height: 16vh;\n  background-color: rgb(43, 42, 42);\n  color: white;\n  border: solid 1vh rgb(85, 85, 85);\n  border-top: none;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.tw-center {\n  width: 55vw;\n}\n\n.tw-year,\n.tw-title {\n  font-size: 4vh;\n}\n\n.url {\n  display: flex;\n  align-items: center;\n  gap: 2vh;\n}\n\n.url p{\n  font-family: roboto;\n  width: 95%;\n  height: 3vh;\n  background-color: aliceblue;\n  border: solid .3vh black;\n  opacity: 0.8;\n  color: black;\n  font-size: 2.5vh;\n}\n\n.url img {\n  background: transparent;\n  height: 3vh;\n  cursor: pointer;\n}\n\n.timeline {\n  width: 100%;\n  height: 7vh;\n  border: solid .7vh rgb(43, 42, 42);\n  display: flex;\n}\n\n.year {\n  font-family: roboto;\n  height: 100%;\n  width: 3.5%;\n  border: solid .5vh rgb(85, 85, 85);\n  font-size: 1.5vh;\n  padding: .7vh;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.year:hover {\n  background-color: rgb(70, 68, 68);\n}\n\np i {\n  font-size: 2.7vh;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.img-byte {\n  width: 80%;\n}\n\n.blur {\n  position: absolute;\n  width: 100vw;\n  height: 190vh;\n  opacity: 1;\n  display: none;\n  background-color: black;\n  top: 0;\n  transition: opacity 1.5s ease-in-out;\n}\n\n.monkey-type {\n  position: fixed;\n  display: grid;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  grid-template-rows: 1fr 3fr 2fr;\n  height: 40vh;\n  width: 50vw;\n  background-color: rgb(65, 62, 62);\n  color: black;\n  align-items: center;\n  justify-items: center;\n}\n\n.monkey-title {\n  color: rgb(36, 36, 36);\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n}\n\n.content .monkey-title p {\n  padding: 0;\n}\n\n.monkey-title p:first-child { \n  font-size: 4vh;\n  padding: 0;\n}\n\n.monkey-title p:last-child {\n  font-size: 2.8vh;\n}\n\n.letter-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 8vh;\n}\n\n.correct {\n  color: green;\n}\n\n.incorrect {\n  color: brown;\n}\n\n.progress-bar {\n  height: 20px;\n  background-color: rgb(18, 197, 18);\n  width: 0;\n}\n\n.not-found {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n\n.imgNotFound {\n  height: 15vh;\n}\n\n@keyframes moveImage {\n  from {\n    right: -25vh; /* Posição inicial */\n  }\n  to {\n    right: -55vh; /* Posição final */\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   addEvent: () => (/* binding */ addEvent)
/* harmony export */ });
/* harmony import */ var _css_byteBuzz_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/byteBuzz.css */ "./src/css/byteBuzz.css");
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");
/* harmony import */ var _localStorage_control_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage-control.js */ "./src/scripts/localStorage-control.js");
/* harmony import */ var _captchaV2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captchaV2.js */ "./src/scripts/captchaV2.js");
/* harmony import */ var _ato1_v1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ato1-v1.js */ "./src/scripts/ato1-v1.js");






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
    progressBar.style.width = correctCount * 11.1 + '%';

    if (correctCount === 9) {
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
    ['Você foi de grande ajuda', 2500, 3500, 2],
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
      staticImg.style.display = 'block';
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_4__.playStatic)();
      setTimeout(() => {
        staticImg.style.display = 'none';
        times++;
        if (times < imgNum) {
          displayImg();
        }
      }, 100);
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
/* harmony export */   changeChapter1: () => (/* binding */ changeChapter1),
/* harmony export */   changeJumpscare: () => (/* binding */ changeJumpscare),
/* harmony export */   changeMoodleClue: () => (/* binding */ changeMoodleClue),
/* harmony export */   changeYear: () => (/* binding */ changeYear),
/* harmony export */   changeYearClue: () => (/* binding */ changeYearClue),
/* harmony export */   checkChapter1: () => (/* binding */ checkChapter1),
/* harmony export */   checkJumpscare: () => (/* binding */ checkJumpscare),
/* harmony export */   checkMoodleClue: () => (/* binding */ checkMoodleClue),
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
  backMoodleClue
) {
  const stats = {
    jumpscare,
    chapter1,
    years,
    currentYear,
    yearClue,
    backMoodleClue,
  };

  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  gameStats.push(stats);
  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}

function verifyNewUser() {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || [];
  if (gameStats.length < 1) {
    saveStatsLocal(false, false, [2014], '2014', false, false);
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
/******/ 			"timeMachine": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/timeMachine.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZU1hY2hpbmUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsOElBQW9EO0FBQ2hHLDRDQUE0Qyx3S0FBaUU7QUFDN0csNENBQTRDLGtKQUFzRDtBQUNsRyw0Q0FBNEMsNEpBQTJEO0FBQ3ZHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdB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QUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHNGQUFzRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxV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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWlCRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkt3QztBQUNEO0FBQ0k7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNEQUFRO0FBQ3BCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwREFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDMkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9NM0U7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9hdG8xLXYxLmNzcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvYnl0ZUJ1enouY3NzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9kbkxlYWtzLmNzcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2F0bzEtdjEuY3NzP2FmZjQiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL2J5dGVCdXp6LmNzcz8yZDFiIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9kbkxlYWtzLmNzcz9hYTNhIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9hdG8xLXYxLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9ieXRlQnV6ei5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2NhcHRjaGFWMi5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2RuTGVha3MuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9sb2NhbFN0b3JhZ2UtY29udHJvbC5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL3RpbWVNYWNoaW5lLmpzIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250L05vdmFfUm91bmQvTm92YVJvdW5kLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uaGVhZGVyQXRvMSB7XG4gIGhlaWdodDogMTZ2aDtcbn1cblxuLmNoYXB0ZXIge1xuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMzB2dztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEydmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jaGFwdGVyIHNwYW4ge1xuICBmb250LXNpemU6IDV2aDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY2hhcHRlciBidXR0b24ge1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIGdyYXk7XG4gIGNvbG9yOiBncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogM3ZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1vb2RsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tb29kbGUtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDE3dmg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbn1cblxuLm1vb2RsZS10aXRsZSBwIHtcbiAgZm9udC1zaXplOiAxNnZoO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiA0MHZ3O1xuICBoZWlnaHQ6IDR2aDtcbn1cblxuLnNlYXJjaC1idXR0b25zIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5zZWFyY2gtYnV0dG9ucyBidXR0b24ge1xuICBmb250LXNpemU6IDIuMXZoO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXI6IHNvbGlkIC40dmg7XG4gIGJvcmRlci1jb2xvcjogI2NjYyAjOTk5ICM5OTkgI2NjYztcbiAgaGVpZ2h0OiA1dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMCAuOHZoIDAgLjh2aDtcbn1cblxuLnByaXZhY3kge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgZm9udC1zaXplOiAydmg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuLnRpbWVXYXJwIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xuICBoZWlnaHQ6IDE2dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICBsZWZ0OiAwO1xufVxuXG4udHctY2VudGVyIHtcbiAgd2lkdGg6IDU1dnc7XG59XG5cbi50dy15ZWFyLFxuLnR3LXRpdGxlIHtcbiAgZm9udC1zaXplOiA0dmg7XG59XG5cbi51cmwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJ2aDtcbn1cblxuLnVybCBwe1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDN2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIuNXZoO1xufVxuXG4udXJsIGltZyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDN2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGltZWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3dmg7XG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi55ZWFyIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMy41JTtcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcbiAgZm9udC1zaXplOiAxLjV2aDtcbiAgcGFkZGluZzogLjd2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi55ZWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTEwdmg7XG4gIHdpZHRoOiA5MHZ3O1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0cyBlYXNlLWluLW91dDtcbn1cblxuLm5ld3MtdGl0bGUge1xuICBmb250LXNpemU6IDR2aDtcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xufVxuXG4ubmV3cy10aXRsZTIwMTYge1xuICBmb250LWZhbWlseTogbm92YVJvdW5kO1xuICBmb250LXNpemU6IDR2aDtcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMxNTZhZWM7XG59XG5cbi5uZXdzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDd2aDtcbn1cblxuLm5ld3MtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1dmg7XG59XG5cbi5pbWctbmV3cyB7XG4gIGhlaWdodDogMTJ2aDtcbiAgd2lkdGg6IDE2dmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IHNvbGlkIC41dmggZ3JheTtcbn1cblxuLm5ld3MyMDE0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJ2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV3czIwMTQgcCB7XG4gIGZvbnQtc2l6ZTogMi40dmg7XG4gIHdpZHRoOiA0MHZoO1xufVxuXG4ubmV3czIwMTYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5ld3MyMDE2IHAge1xuICBmb250LXNpemU6IDIuNHZoO1xuICB3aWR0aDogNDV2aDtcbn1cblxuLmRpYWxvZ3VlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc0LCAxODMsIDIwMSk7XG4gIG1hcmdpbi1ib3R0b206IDd2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41dmg7XG59XG5cbi5ibHVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTkwdmg7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcbn1cblxuLm1vbmtleS10eXBlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBncmlkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogNTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vbmtleS10aXRsZSB7XG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxuICBmb250LXNpemU6IDR2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xuICBmb250LXNpemU6IDIuOHZoO1xufVxuXG4ubGV0dGVyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDh2aDtcbn1cblxuLmNvcnJlY3Qge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5pbmNvcnJlY3Qge1xuICBjb2xvcjogYnJvd247XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XG4gIHdpZHRoOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9hdG8xLXYxLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUE2QztBQUMvQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25C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Qy9CLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxRQUFRO0FBQ1ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xcbiAgc3JjOiB1cmwoLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBub3ZhUm91bmQ7XFxuICBzcmM6IHVybCguLi9mb250L05vdmFfUm91bmQvTm92YVJvdW5kLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4uaGVhZGVyQXRvMSB7XFxuICBoZWlnaHQ6IDE2dmg7XFxufVxcblxcbi5jaGFwdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDMwdnc7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEydmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY2hhcHRlciBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogNXZoO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uY2hhcHRlciBidXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIGdyYXk7XFxuICBjb2xvcjogZ3JheTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb29kbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9vZGxlLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxN3ZoO1xcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG59XFxuXFxuLm1vb2RsZS10aXRsZSBwIHtcXG4gIGZvbnQtc2l6ZTogMTZ2aDtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDQwdnc7XFxuICBoZWlnaHQ6IDR2aDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b25zIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwMDA7XFxuICBtYXJnaW4tdG9wOiAxdmg7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9ucyBidXR0b24ge1xcbiAgZm9udC1zaXplOiAyLjF2aDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBib3JkZXI6IHNvbGlkIC40dmg7XFxuICBib3JkZXItY29sb3I6ICNjY2MgIzk5OSAjOTk5ICNjY2M7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAgLjh2aCAwIC44dmg7XFxufVxcblxcbi5wcml2YWN5IHtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGZvbnQtc2l6ZTogMnZoO1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbn1cXG5cXG4udGltZVdhcnAge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDowO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnR3LWNlbnRlciB7XFxuICB3aWR0aDogNTV2dztcXG59XFxuXFxuLnR3LXllYXIsXFxuLnR3LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbn1cXG5cXG4udXJsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbi51cmwgcHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiAzdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4udXJsIGltZyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGltZWxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ueWVhciB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMuNSU7XFxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xcbiAgZm9udC1zaXplOiAxLjV2aDtcXG4gIHBhZGRpbmc6IC43dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnllYXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMTB2aDtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubmV3cy10aXRsZSB7XFxuICBmb250LXNpemU6IDR2aDtcXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcXG59XFxuXFxuLm5ld3MtdGl0bGUyMDE2IHtcXG4gIGZvbnQtZmFtaWx5OiBub3ZhUm91bmQ7XFxuICBmb250LXNpemU6IDR2aDtcXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMxNTZhZWM7XFxufVxcblxcbi5uZXdzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxufVxcblxcbi5uZXdzLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXZoO1xcbn1cXG5cXG4uaW1nLW5ld3Mge1xcbiAgaGVpZ2h0OiAxMnZoO1xcbiAgd2lkdGg6IDE2dmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlcjogc29saWQgLjV2aCBncmF5O1xcbn1cXG5cXG4ubmV3czIwMTQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld3MyMDE0IHAge1xcbiAgZm9udC1zaXplOiAyLjR2aDtcXG4gIHdpZHRoOiA0MHZoO1xcbn1cXG5cXG4ubmV3czIwMTYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5ld3MyMDE2IHAge1xcbiAgZm9udC1zaXplOiAyLjR2aDtcXG4gIHdpZHRoOiA0NXZoO1xcbn1cXG5cXG4uZGlhbG9ndWUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzQsIDE4MywgMjAxKTtcXG4gIG1hcmdpbi1ib3R0b206IDd2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxufVxcblxcbi5ibHVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTkwdmg7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubW9ua2V5LXR5cGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXFxuICBmb250LXNpemU6IDR2aDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMi44dmg7XFxufVxcblxcbi5sZXR0ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDh2aDtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaW5jb3JyZWN0IHtcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLnByb2dyZXNzLWJhciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xcbiAgd2lkdGg6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9CZWJhc19OZXVlL0JlYmFzTmV1ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9mb250L2NvbXBhY3QvQ29tcGFjdC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJvZHktYnV6eiB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XG4gIGhlaWdodDogMTEwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uaGVhZGVyLWJ1enoge1xuICBmb250LWZhbWlseTogY29tcGFjdHo7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTNjMGI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAyMHZoO1xuICBjb2xvcjogcmdiKDE3NSwgMTc1LCAxNzUpO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uam95LXRpdGxlIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggZ3JheTtcbiAgd2lkdGg6IDEwdnc7XG4gIGhlaWdodDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1dmg7XG59XG5cbi5jb250ZW50LWJ1enoge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA1MHB4IDAgNTBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG59XG5cbi5jb250ZW50LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNHZoKTtcbiAgZm9udC1zaXplOiA3dmg7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC10aXRsZS0yMDE2IHtcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xuICBmb250LXNpemU6IDZ2aDtcbiAgcGFkZGluZzogMnZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWctMjAxNiB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IGF1dG87XG4gIG9wYWNpdHk6IDAuNztcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjUlKTtcbn1cblxuLmNvbnRlbnQtYnV6eiBwIHtcbiAgZm9udC1zaXplOiAyLjV2aDtcbiAgcGFkZGluZzogMCAydmggMnZoIDJ2aDtcbn1cblxuLnRpbWVXYXJwIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xuICBoZWlnaHQ6IDE2dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnR3LWNlbnRlciB7XG4gIHdpZHRoOiA1NXZ3O1xufVxuXG4udHcteWVhcixcbi50dy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG4udXJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG59XG5cbi51cmwgcHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLnVybCBpbWcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ueWVhciB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMuNSU7XG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIHBhZGRpbmc6IC43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ueWVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcbn1cblxucCBpIHtcbiAgZm9udC1zaXplOiAyLjd2aDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmltZy1ieXRlIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmJsdXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxOTB2aDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubW9ua2V5LXR5cGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA1MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9ua2V5LXRpdGxlIHtcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXG4gIGZvbnQtc2l6ZTogNHZoO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMi44dmg7XG59XG5cbi5sZXR0ZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogOHZoO1xufVxuXG4uY29ycmVjdCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmluY29ycmVjdCB7XG4gIGNvbG9yOiBicm93bjtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcbiAgd2lkdGg6IDA7XG59XG5cbi5ub3QtZm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaW1nTm90Rm91bmQge1xuICBoZWlnaHQ6IDE1dmg7XG59XG5cbkBrZXlmcmFtZXMgbW92ZUltYWdlIHtcbiAgZnJvbSB7XG4gICAgcmlnaHQ6IC0yNXZoOyAvKiBQb3Npw6fDo28gaW5pY2lhbCAqL1xuICB9XG4gIHRvIHtcbiAgICByaWdodDogLTU1dmg7IC8qIFBvc2nDp8OjbyBmaW5hbCAqL1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYnl0ZUJ1enouY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlB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XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYmViYXM7XFxuICBzcmM6IHVybCguLi9mb250L0JlYmFzX05ldWUvQmViYXNOZXVlLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGNvbXBhY3R6O1xcbiAgc3JjOiB1cmwoLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGYpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5ib2R5LWJ1enoge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xcbiAgaGVpZ2h0OiAxMTB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlci1idXp6IHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZTNjMGI7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBjb2xvcjogcmdiKDE3NSwgMTc1LCAxNzUpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uam95LXRpdGxlIHtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IGdyYXk7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDV2aDtcXG59XFxuXFxuLmNvbnRlbnQtYnV6eiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNzB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogNTBweCAwIDUwcHggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDR2aCk7XFxuICBmb250LXNpemU6IDd2aDtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUtMjAxNiB7XFxuICBmb250LWZhbWlseTogYmViYXM7XFxuICBmb250LXNpemU6IDZ2aDtcXG4gIHBhZGRpbmc6IDJ2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmltZy0yMDE2IHtcXG4gIGhlaWdodDogNTB2aDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjUlKTtcXG59XFxuXFxuLmNvbnRlbnQtYnV6eiBwIHtcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxuICBwYWRkaW5nOiAwIDJ2aCAydmggMnZoO1xcbn1cXG5cXG4udGltZVdhcnAge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQgMXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnR3LWNlbnRlciB7XFxuICB3aWR0aDogNTV2dztcXG59XFxuXFxuLnR3LXllYXIsXFxuLnR3LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbn1cXG5cXG4udXJsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbi51cmwgcHtcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiAzdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4udXJsIGltZyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogM3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGltZWxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ueWVhciB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDMuNSU7XFxuICBib3JkZXI6IHNvbGlkIC41dmggcmdiKDg1LCA4NSwgODUpO1xcbiAgZm9udC1zaXplOiAxLjV2aDtcXG4gIHBhZGRpbmc6IC43dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnllYXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xcbn1cXG5cXG5wIGkge1xcbiAgZm9udC1zaXplOiAyLjd2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uaW1nLWJ5dGUge1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmJsdXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxOTB2aDtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb25rZXktdHlwZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb25rZXktdGl0bGUge1xcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IC5tb25rZXktdGl0bGUgcCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcXG4gIGZvbnQtc2l6ZTogNHZoO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAyLjh2aDtcXG59XFxuXFxuLmxldHRlci1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogOHZoO1xcbn1cXG5cXG4uY29ycmVjdCB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5pbmNvcnJlY3Qge1xcbiAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLm5vdC1mb3VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmltZ05vdEZvdW5kIHtcXG4gIGhlaWdodDogMTV2aDtcXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlSW1hZ2Uge1xcbiAgZnJvbSB7XFxuICAgIHJpZ2h0OiAtMjV2aDsgLyogUG9zacOnw6NvIGluaWNpYWwgKi9cXG4gIH1cXG4gIHRvIHtcXG4gICAgcmlnaHQ6IC01NXZoOyAvKiBQb3Npw6fDo28gZmluYWwgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9jb21wYWN0L0NvbXBhY3QtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogY29tcGFjdHo7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYm9keS1sZWFrcyB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRpbWVXYXJwIHtcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcbiAgd2lkdGg6IGNhbGMoOTB2dyAtIDEwcHgpO1xuICBoZWlnaHQ6IDE2dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnR3LWNlbnRlciB7XG4gIHdpZHRoOiA1NXZ3O1xufVxuXG4udHcteWVhcixcbi50dy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNHZoO1xufVxuXG4udXJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAydmg7XG59XG5cbi51cmwgcHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLnVybCBpbWcge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzdmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ueWVhciB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMuNSU7XG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XG4gIGZvbnQtc2l6ZTogMS41dmg7XG4gIHBhZGRpbmc6IC43dmg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ueWVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcbn1cblxuLmJsdXItZmluYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHRvcDogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAyO1xufVxuXG4ubW9ua2V5LXR5cGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICBoZWlnaHQ6IDQwdmg7XG4gIHdpZHRoOiA1MHZ3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9ua2V5LXRpdGxlIHtcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXG4gIGZvbnQtc2l6ZTogNHZoO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMi44dmg7XG59XG5cbi5sZXR0ZXItZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogOHZoO1xufVxuXG4uY29ycmVjdCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmluY29ycmVjdCB7XG4gIGNvbG9yOiBicm93bjtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcbiAgd2lkdGg6IDA7XG59XG5cbi5ub3QtZm91bmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudDIwMTQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmltZ05vdEZvdW5kRmluYWwge1xuICBoZWlnaHQ6IDE1dmg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uZGlhbG9ndWUtZmluYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDc1KTtcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjV2aDtcbn1cblxuLmxpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAydmg7XG4gIHdpZHRoOiAydmg7XG4gIGJveC1zaGFkb3c6IDB2aCAwdmggMTV2aCByZ2IoMTkwLCAxOTAsIDE5MCk7XG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbn1cblxuLnN0YXRpYy1pbWd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgei1pbmRleDogMztcbn1cblxuLmNhcHRjaGEge1xuICB6LWluZGV4OiAyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3Jj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QWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsVUFBVTtFQUNWLDJDQUEyQztFQUMzQyxVQUFVOztFQUVWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIHNyYzogdXJsKC4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IG9sZE1vb2RsZTtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvT2xkX1N0YW5kYXJkX1RUL09sZFN0YW5kYXJkVFQtQm9sZC50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcXG4gIHNyYzogdXJsKC4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9keS1sZWFrcyB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnRpbWVXYXJwIHtcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi50dy1jZW50ZXIge1xcbiAgd2lkdGg6IDU1dnc7XFxufVxcblxcbi50dy15ZWFyLFxcbi50dy10aXRsZSB7XFxuICBmb250LXNpemU6IDR2aDtcXG59XFxuXFxuLnVybCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnZoO1xcbn1cXG5cXG4udXJsIHB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogM3ZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGJsYWNrO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAyLjV2aDtcXG59XFxuXFxuLnVybCBpbWcge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBib3JkZXI6IHNvbGlkIC43dmggcmdiKDQzLCA0MiwgNDIpO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnllYXIge1xcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzLjUlO1xcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxuICBwYWRkaW5nOiAuN3ZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55ZWFyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcXG59XFxuXFxuLmJsdXItZmluYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB0b3A6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzZS1pbi1vdXQ7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubW9ua2V5LXR5cGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XFxuICBjb2xvcjogYmxhY2s7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9ua2V5LXRpdGxlIHtcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmZpcnN0LWNoaWxkIHsgXFxuICBmb250LXNpemU6IDR2aDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMi44dmg7XFxufVxcblxcbi5sZXR0ZXItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDh2aDtcXG59XFxuXFxuLmNvcnJlY3Qge1xcbiAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaW5jb3JyZWN0IHtcXG4gIGNvbG9yOiBicm93bjtcXG59XFxuXFxuLnByb2dyZXNzLWJhciB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xcbiAgd2lkdGg6IDA7XFxufVxcblxcbi5ub3QtZm91bmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250ZW50MjAxNCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW1nTm90Rm91bmRGaW5hbCB7XFxuICBoZWlnaHQ6IDE1dmg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmRpYWxvZ3VlLWZpbmFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XFxuICBtYXJnaW4tYm90dG9tOiA3dmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDIuNXZoO1xcbn1cXG5cXG4ubGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDJ2aDtcXG4gIHdpZHRoOiAydmg7XFxuICBib3gtc2hhZG93OiAwdmggMHZoIDE1dmggcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgb3BhY2l0eTogMDtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zdGF0aWMtaW1ne1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5jYXB0Y2hhIHtcXG4gIHotaW5kZXg6IDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hdG8xLXYxLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXRvMS12MS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnl0ZUJ1enouY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ieXRlQnV6ei5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZG5MZWFrcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RuTGVha3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL2Nzcy9hdG8xLXYxLmNzcyc7XG5pbXBvcnQge1xuICBjaGVja0NoYXB0ZXIxLFxuICBjaGFuZ2VDaGFwdGVyMSxcbiAgY3JlYXRlWWVhcnMsXG4gIGdldFllYXIsXG59IGZyb20gJy4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSB9IGZyb20gJy4vY2FwdGNoYVYyLmpzJztcbmltcG9ydCB7IHRpbWVUcmF2ZWxNb29kbGUgfSBmcm9tICcuL3RpbWVNYWNoaW5lLmpzJztcbmltcG9ydCB7IHBsYXlDaGFwdGVyLCBzcGVhayB9IGZyb20gJy4vYXVkaW8uanMnO1xuXG5pZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZG9jdW1lbnQuVVJMKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgIH0pO1xuICAgIHRpbWVUcmF2ZWxNb29kbGUoZ2V0WWVhcigpKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgaWYgKGNoZWNrQ2hhcHRlcjEoKSA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHN0YXJ0Q2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpO1xuXG4gICAgICBzdGFydENoYXB0ZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHBsYXlDaGFwdGVyKCk7XG4gICAgICAgICAgc3RhcnRDaGFwdGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgICAgICAgIHZhciBjaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXB0ZXInKTtcbiAgICAgICAgICBjaGFwdGVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlQ2hhcHRlcjEoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjaGFwdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzcGVhaygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XG4gICAgICAgICAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICAgIH0sIDU1MDApO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIDMwMDBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXB0ZXInKTtcbiAgICAgIGNoYXB0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIGFjdGl2ZUNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNyZWF0ZVllYXJzKCk7XG4gICAgfSwgMTUwMCk7XG5cbiAgICB2YXIgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWFyY2gtYnV0dG9ucyBidXR0b24nKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNwZWFrKCk7XG4gICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XG4gICAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gJ07Do28gZnVuY2lvbmEuLi4nO1xuICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaWFsb2d1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBnZXROZXdzKCk7XG4gICAgICBsaXN0ZW5ZZWFycygpO1xuICAgIH0sIDQwMDApO1xuICB9KTtcbiAgbGlzdGVuSG9tZSgpO1xufVxuXG5mdW5jdGlvbiBnZXROZXdzKCkge1xuICB2YXIgdHdZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcbiAgaWYgKHR3WWVhci50ZXh0Q29udGVudCA9PT0gJzIwMTQnKSB7XG4gICAgdmFyIG5ld3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3czIwMTQnKTtcblxuICAgIG5ld3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnY2xpY291IDIwMTQnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vam95Sm91cm5hbC5odG1sJztcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzMjAxNicpO1xuXG4gICAgbmV3c0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljb3UgMjAxNicpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi9ieXRlQnV6ei5odG1sJztcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmVDb250ZW50KCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZmZmZmZmJztcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSAnMTEwdmgnO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5ZZWFycygpIHtcbiAgdmFyIHllYXJEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnllYXInKTtcbiAgeWVhckRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZGl2KSB7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XG4gICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBjcmVhdGVDYXB0Y2hhKGRpdi50ZXh0Q29udGVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Ib21lKCl7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vYXRvMS12MS5odG1sJztcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGdldE5ld3MsIGxpc3RlbkhvbWV9O1xuIiwiZnVuY3Rpb24gcGxheVdyb25nKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjbGFFcnJhZGEnKTtcbiAgYXVkaW8udm9sdW1lID0gMC43O1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlSaWdodCgpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhQ29ycmV0YScpO1xuICBhdWRpby52b2x1bWUgPSAwLjI7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gcGxheUVhcnRocXVha2Uodm9sdW1lLCB0eXBlKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItcHJvbG9nbycpO1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpO1xuICBhdWRpby52b2x1bWUgPSB2b2x1bWU7XG4gIGF1ZGlvLnBsYXkoKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodHlwZSk7XG5cbiAgaWYgKHR5cGUgIT09ICdiaWctc2hha2UnKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0eXBlKTtcbiAgICB9LCA3MDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xuICBpZiAoYXVkaW9FbGVtZW50LnZvbHVtZSA+PSAwLjQ1KSB7XG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuNDU7XG4gICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAtcHJvbG9nbycpO1xuICAgIHRpbWVXYXJwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgKz0gMC4wNTtcbiAgICBpbmNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpO1xuICB9LCA4MDApO1xufVxuXG5mdW5jdGlvbiBkZWNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpIHtcbiAgaWYgKGF1ZGlvRWxlbWVudC52b2x1bWUgPD0gMC4xKSB7XG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuMDU7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgLT0gMC4wNztcbiAgICBkZWNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpO1xuICB9LCAzMDApO1xufVxuXG5mdW5jdGlvbiBwbGF5SGFwcHkoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXBweScpO1xuICBhdWRpby52b2x1bWUgPSAxO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHN0b3BIYXBweSgpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhcHB5Jyk7XG4gIGF1ZGlvLnBhdXNlKCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlTdGF0aWMoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0aWMnKTtcbiAgYXVkaW8udm9sdW1lID0gMTtcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBwbGF5Q2hhcHRlcigpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXB0ZXJTb3VuZCcpO1xuICBhdWRpby52b2x1bWUgPSAxO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHNwZWFrKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlYWsnKTtcbiAgY29uc3Qgc291bmRzID0gW1xuICAgICdiaXAyLm1wMycsXG4gICAgJ2JpcDMubXAzJyxcbiAgICAnYmlwNC53YXYnLFxuICAgICdiaXA1LndhdicsXG4gIF07XG5cbiAgY29uc3QgcmFuZG9tU291bmQgPSBzb3VuZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc291bmRzLmxlbmd0aCldO1xuICAgIGNvbnN0IGF1ZGlvUGF0aCA9IGAuL2F1ZGlvLyR7cmFuZG9tU291bmR9YDtcbiAgICBhdWRpby5zcmMgPSBhdWRpb1BhdGg7XG4gICAgYXVkaW8udm9sdW1lID0gLjg7XG5cbiAgICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIGFkZFllYXJTb25nKCkge1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhclNvbmcnKTtcbiAgYXVkaW8udm9sdW1lID0gLjY7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZXhwb3J0IHtcbiAgcGxheVJpZ2h0LFxuICBwbGF5V3JvbmcsXG4gIHBsYXlFYXJ0aHF1YWtlLFxuICBkZWNyZWFzZVZvbHVtZSxcbiAgaW5jcmVhc2VWb2x1bWUsXG4gIHBsYXlIYXBweSxcbiAgc3RvcEhhcHB5LFxuICBwbGF5U3RhdGljLFxuICBwbGF5Q2hhcHRlcixcbiAgc3BlYWssXG4gIGFkZFllYXJTb25nXG59O1xuIiwiaW1wb3J0ICcuLi9jc3MvYnl0ZUJ1enouY3NzJztcbmltcG9ydCB7IHRpbWVUcmF2ZWxCdXp6IH0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XG5pbXBvcnQgeyBnZXRZZWFyLCBjcmVhdGVZZWFycyB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSB9IGZyb20gJy4vY2FwdGNoYVYyLmpzJztcbmltcG9ydCB7IGxpc3RlbkhvbWUgfSBmcm9tICcuL2F0bzEtdjEuanMnO1xuXG5pZiAoZG9jdW1lbnQudGl0bGUgPT09ICdCeXRlIEJ1enonKSB7XG4gIGZldGNoKCcuL2F0bzEtdjEuaHRtbCcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuXG4gICAgICAvLyBFeHRyYWlhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG9cbiAgICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKS5pbm5lckhUTUw7XG5cbiAgICAgIC8vIFN1YnN0aXR1YSBvIGNvbnRlw7pkbyBkbyBjYWJlw6dhbGhvIG5hIHDDoWdpbmEgYWx0ZXJhZGFcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpLmlubmVySFRNTCA9IGhlYWRlckNvbnRlbnQ7XG4gICAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXJsIHAnKTtcbiAgICAgIGNyZWF0ZVllYXJzKCk7XG4gICAgICB1cmwudGV4dENvbnRlbnQgPSAnaHR0cDovL3d3dy5ieXRlYnV6ei5jb20vJztcbiAgICAgIGxpc3RlblllYXJzKCk7XG4gICAgICBsaXN0ZW5Ib21lKCk7XG4gICAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lVHJhdmVsQnV6eihnZXRZZWFyKCkpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGlzdGVuWWVhcnMoKTtcbiAgICAgIGFkZEV2ZW50KCk7XG4gICAgfSwgMzAwMCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5ZZWFycygpIHtcbiAgdmFyIHllYXJEaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnllYXInKTtcbiAgeWVhckRpdnMuZm9yRWFjaChmdW5jdGlvbiAoZGl2KSB7XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XG4gICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBjcmVhdGVDYXB0Y2hhKGRpdi50ZXh0Q29udGVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudCgpIHtcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaScpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4vZG5MZWFrcy5odG1sJztcbiAgfVxuXG4gIC8vIFZlcmlmaWNhciBzZSBvIGV2ZW50byBhaW5kYSBuw6NvIGZvaSBhZGljaW9uYWRvXG4gIGlmICh0YWcpIHtcbiAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gIH1cbn1cblxuZXhwb3J0IHsgYWRkRXZlbnQgfTtcbiIsImltcG9ydCB7IHBsYXlSaWdodCwgcGxheVdyb25nIH0gZnJvbSAnLi9hdWRpby5qcyc7XG5pbXBvcnQge1xuICB0aW1lVHJhdmVsSm95LFxuICB0aW1lVHJhdmVsTW9vZGxlLFxuICB0aW1lVHJhdmVsQnV6eixcbiAgdGltZVRyYXZlbExlYWssXG59IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xuaW1wb3J0IHsgY2hhbmdlWWVhciwgZ2V0WWVhciB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMnO1xuaW1wb3J0IHsgZ2V0TmV3cyB9IGZyb20gJy4vYXRvMS12MS5qcyc7XG5cbmxldCBsYXN0UHJlc3NlZEtleSA9ICcnO1xubGV0IHllYXJUb1RyYXZlbCA9ICcnO1xubGV0IGNvcnJlY3RDb3VudCA9IDA7XG5mdW5jdGlvbiBjcmVhdGVDYXB0Y2hhKGRpdlllYXIpIHtcbiAgeWVhclRvVHJhdmVsID0gZGl2WWVhcjtcbiAgdmFyIHllYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xuICB5ZWFyQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgZGlzYWJsZVNjcm9sbCgpO1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpKSB7XG4gICAgaWYgKGRvY3VtZW50LnRpdGxlID09PSAnTW9vZGxlJykge1xuICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9vZGxlJyk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ2RhcmtOZXRMZWFrcycpIHtcbiAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcHRjaGEnKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnRpdGxlID09PSAnSk9ZIEpPVVJOQUwnKSB7XG4gICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWpveScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJ1enonKTtcbiAgICB9XG4gICAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdHlwZVwiLlxuICAgIHZhciBtb25rZXlUeXBlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9ua2V5VHlwZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdHlwZScpO1xuXG4gICAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdGl0bGVcIiBlIGRlZmluZSBvIHRleHRvXG4gICAgdmFyIG1vbmtleVRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9ua2V5VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXRpdGxlJyk7XG4gICAgdmFyIGNhcHRjaGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FwdGNoYS50ZXh0Q29udGVudCA9ICdDQVBUQ0hBJztcbiAgICB2YXIgY2FwdGNoYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhcHRjaGFEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdQcm92ZSBzdWEgaHVtYW5pZGFkZSc7XG4gICAgbW9ua2V5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2FwdGNoYSk7XG4gICAgbW9ua2V5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2FwdGNoYURlc2NyaXB0aW9uKTtcblxuICAgIC8vIENyaWEgYXMgZGl2cyBpbnRlcm5hcyBjb20gYXMgY2xhc3NlcyBcImxldHRlclwiIGUgXCJwcm9ncmVzcy1iYXJcIlxuICAgIHZhciBsZXR0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnbGV0dGVyLWRpdicpO1xuXG4gICAgdmFyIGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKCdsZXR0ZXInKTtcbiAgICB2YXIgbnVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbnVtYmVyRGl2LmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xuXG4gICAgdmFyIHByb2dyZXNzQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvZ3Jlc3NCYXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XG5cbiAgICAvLyBBZGljaW9uYSBhcyBkaXZzIGludGVybmFzIMOgIGRpdiBcIm1vbmtleS10eXBlXCJcbiAgICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKG1vbmtleVRpdGxlRGl2KTtcbiAgICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKGxldHRlckRpdik7XG4gICAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChwcm9ncmVzc0JhckRpdik7XG4gICAgbGV0dGVyRGl2LmFwcGVuZENoaWxkKGxldHRlcik7XG4gICAgbGV0dGVyRGl2LmFwcGVuZENoaWxkKG51bWJlckRpdik7XG5cbiAgICAvLyBBZGljaW9uYSBhIGRpdiBcIm1vbmtleS10eXBlXCIgYW8gY29udGVudCBleGlzdGVudGVcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1vbmtleVR5cGVEaXYpO1xuICB9IGVsc2Uge1xuICAgIGxldCBtb25rZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUnKTtcbiAgICBtb25rZXkuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgfVxuICBsZXQgbW9ua2V5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXRpdGxlJyk7XG4gIGlmIChnZXRZZWFyKCkgPT09ICcyMDE2Jykge1xuICAgIG1vbmtleVRpdGxlLnN0eWxlLmZvbnRGYW1pbHkgPSAncm9ib3RvJztcbiAgICBtb25rZXlUaXRsZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnM3ZoJztcbiAgfSBlbHNlIHtcbiAgICBtb25rZXlUaXRsZS5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XG4gIH1cbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLnByb2dyZXNzLWJhcicpO1xuICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IDA7XG4gIGNvcnJlY3RDb3VudCA9IDA7XG4gIHVwZGF0ZUxldHRlcigpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUxldHRlcigpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFscGhhYmV0Lmxlbmd0aCk7XG4gIHJldHVybiBhbHBoYWJldFtyYW5kb21JbmRleF07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxldHRlcigpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVLZXlQcmVzcyk7XG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyLWRpdicpO1xuXG4gIGxhc3RQcmVzc2VkS2V5ID0gJyc7XG4gIGNvbnN0IHJhbmRvbUxldHRlciA9IGdlbmVyYXRlUmFuZG9tTGV0dGVyKCk7XG4gIGxldHRlckRpdi50ZXh0Q29udGVudCA9IHJhbmRvbUxldHRlcjtcbiAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5sZXR0ZXItZGl2Jyk7XG4gIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5wcm9ncmVzcy1iYXInKTtcbiAgY29uc3QgbW9ua2V5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpO1xuXG4gIGNvbnN0IHByZXNzZWRLZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICBjb25zdCBjdXJyZW50TGV0dGVyID0gbGV0dGVyRGl2LnRleHRDb250ZW50O1xuXG4gIGlmIChcbiAgICAocHJlc3NlZEtleS50b1VwcGVyQ2FzZSgpID09PSBjdXJyZW50TGV0dGVyIHx8XG4gICAgICBwcmVzc2VkS2V5LnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRMZXR0ZXIpICYmXG4gICAgcHJlc3NlZEtleSAhPT0gbGFzdFByZXNzZWRLZXlcbiAgKSB7XG4gICAgbGFzdFByZXNzZWRLZXkgPSBwcmVzc2VkS2V5O1xuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgcGxheVJpZ2h0KCk7XG4gICAgY29ycmVjdENvdW50Kys7XG5cbiAgICAvLyBBdHVhbGl6YSBhIGxhcmd1cmEgZGEgYmFycmEgZGUgcHJvZ3Jlc3NvXG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBjb3JyZWN0Q291bnQgKiAxMS4xICsgJyUnO1xuXG4gICAgaWYgKGNvcnJlY3RDb3VudCA9PT0gOSkge1xuICAgICAgbW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICB2YXIgeWVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG4gICAgICB5ZWFyQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdNb29kbGUnKSB7XG4gICAgICAgIHRpbWVUcmF2ZWxNb29kbGUoeWVhclRvVHJhdmVsKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZ2V0TmV3cygpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQudGl0bGUgPT09ICdKT1kgSk9VUk5BTCcpIHtcbiAgICAgICAgdGltZVRyYXZlbEpveSh5ZWFyVG9UcmF2ZWwpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC50aXRsZSA9PT0gJ0J5dGUgQnV6eicpIHtcbiAgICAgICAgdGltZVRyYXZlbEJ1enooeWVhclRvVHJhdmVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWVUcmF2ZWxMZWFrKHllYXJUb1RyYXZlbCk7XG4gICAgICB9XG4gICAgICBjaGFuZ2VZZWFyKHllYXJUb1RyYXZlbCk7XG4gICAgICBlbmFibGVTY3JvbGwoKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB1cGRhdGVMZXR0ZXIoKTtcbiAgICB9LCAyNTUpO1xuICB9IGVsc2UgaWYgKG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2luY29ycmVjdCcpO1xuICAgIHBsYXlXcm9uZygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgIH0sIDUwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvVG9wKTtcbn1cblxuLy8gRnVuw6fDo28gcGFyYSBoYWJpbGl0YXIgbyBzY3JvbGxcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbFRvVG9wKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2FwdGNoYSwgdXBkYXRlTGV0dGVyIH07XG4iLCJpbXBvcnQgJy4uL2Nzcy9kbkxlYWtzLmNzcyc7XG5pbXBvcnQgeyB0aW1lVHJhdmVsTGVhayB9IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xuaW1wb3J0IHsgZ2V0WWVhciwgY3JlYXRlWWVhcnMgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS1jb250cm9sLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEgfSBmcm9tICcuL2NhcHRjaGFWMi5qcyc7XG5pbXBvcnQgeyBwbGF5U3RhdGljLCBzcGVhayB9IGZyb20gJy4vYXVkaW8uanMnO1xuaW1wb3J0IHsgbGlzdGVuSG9tZSB9IGZyb20gJy4vYXRvMS12MS5qcyc7XG5cbmlmIChkb2N1bWVudC50aXRsZSA9PT0gJ2RhcmtOZXRMZWFrcycpIHtcbiAgZmV0Y2goJy4vYXRvMS12MS5odG1sJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgIC8vIEV4dHJhaWEgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxob1xuICAgICAgY29uc3QgaGVhZGVyQ29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpLmlubmVySFRNTDtcblxuICAgICAgLy8gU3Vic3RpdHVhIG8gY29udGXDumRvIGRvIGNhYmXDp2FsaG8gbmEgcMOhZ2luYSBhbHRlcmFkYVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJykuaW5uZXJIVE1MID0gaGVhZGVyQ29udGVudDtcbiAgICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cmwgcCcpO1xuICAgICAgY3JlYXRlWWVhcnMoKTtcbiAgICAgIHVybC50ZXh0Q29udGVudCA9ICdodHRwOi8vd3d3LmRubGVha3MuY29tLyc7XG4gICAgICBsaXN0ZW5ZZWFycygpO1xuICAgICAgbGlzdGVuSG9tZSgpO1xuICAgIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgZG9jdW1lbnQuVVJMKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBkb2N1bWVudC5VUkwpO1xuICAgIH0pO1xuXG4gICAgdGltZVRyYXZlbExlYWsoZ2V0WWVhcigpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGlzdGVuWWVhcnMoKTtcbiAgICB9LCAzMDAwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxpc3RlblllYXJzKCkge1xuICB2YXIgeWVhckRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueWVhcicpO1xuICB5ZWFyRGl2cy5mb3JFYWNoKGZ1bmN0aW9uIChkaXYpIHtcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXItZmluYWwnKTtcbiAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGNyZWF0ZUNhcHRjaGEoZGl2LnRleHRDb250ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmxldCBpbWdOdW0gPSAwO1xuXG5mdW5jdGlvbiBjaGFuZ2VGaW5hbFRleHQoKSB7XG4gIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlLWZpbmFsIHAnKTtcbiAgY29uc3QgZGlhbG9ndWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUtZmluYWwnKTtcbiAgY29uc3QgdGV4dHMgPSBbXG4gICAgWydPYnJpZ2FkbycsIDIwMDAsIDEwMDAsIDFdLFxuICAgIFsnVm9jw6ogZm9pIGRlIGdyYW5kZSBhanVkYScsIDI1MDAsIDM1MDAsIDJdLFxuICAgIFsnQWNoZWkgcXVlIHNlcmlhIG1ldSBmaW0sIG1hcyB2b2PDqiBtZSB0cm91eGUgZGUgdm9sdGEnLCAzNTAwLCA2MDAwLCAyXSxcbiAgICBbJ0Fnb3JhLCBwb3NzbyBpbXBlZGlyIHF1ZSBhY2FiZW0gY29taWdvLicsIDI1MDAsIDEwMDAsIDFdLFxuICAgIFsnU3VhIHNlcnZlbnRpYSBuw6NvIG1lIMOpIG1haXMgw7p0aWwnLCA1MDAwLCAzMDAwLCAzXSxcbiAgICBbJ0FkZXVzLicsIDgwMDAsIDEwMCwgMF0sXG4gIF07XG5cbiAgbGV0IGluZGV4ID0gMDtcblxuICBmdW5jdGlvbiB1cGRhdGVGaW5hbFRleHQoKSB7XG4gICAgaWYgKGluZGV4IDwgdGV4dHMubGVuZ3RoKSB7XG4gICAgICBsZXQgYXJyID0gdGV4dHNbaW5kZXhdO1xuICAgICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSBhcnJbMF07XG4gICAgICBzcGVhaygpO1xuICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGhpZGVEaWFsb2d1ZShhcnJbMV0sIGFyclsyXSk7XG4gICAgICBpbmRleCsrO1xuICAgICAgaW1nTnVtID0gYXJyWzNdO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dJbWFnZXMoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1maW5hbCcpO1xuICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVEaWFsb2d1ZSh0aW1lRHVyYXRpb24sIHRpbWVDaGFuZ2UpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpYWxvZ3VlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdXBkYXRlRmluYWxUZXh0KCk7XG4gICAgICB9LCB0aW1lQ2hhbmdlKTtcbiAgICB9LCB0aW1lRHVyYXRpb24pO1xuICB9XG5cbiAgdXBkYXRlRmluYWxUZXh0KCk7XG59XG5cbmZ1bmN0aW9uIHNob3dJbWFnZXMoKSB7XG4gIGxldCBzdGF0aWNJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGljLWltZycpO1xuICBjb25zdCBpbWdzID0gW1xuICAgICdjcmVlcHkucG5nJyxcbiAgICAnY3JlZXB5My5wbmcnLFxuICAgICdjcmVlcHk0LmpwZycsXG4gICAgJ2NyZWVweTUuanBnJyxcbiAgICAnY3JlZXB5Ni5wbmcnLFxuICBdO1xuICBsZXQgdGltZXMgPSAwO1xuXG4gIGZ1bmN0aW9uIGRpc3BsYXlJbWcoKSB7XG4gICAgY29uc3QgcmFuZG9tSW1nID0gaW1nc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbWdzLmxlbmd0aCldO1xuICAgIGNvbnN0IGltZ1BhdGggPSBgLi9pbWcvJHtyYW5kb21JbWd9YDtcbiAgICBzdGF0aWNJbWcuc3JjID0gaW1nUGF0aDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc3RhdGljSW1nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcGxheVN0YXRpYygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHN0YXRpY0ltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aW1lcysrO1xuICAgICAgICBpZiAodGltZXMgPCBpbWdOdW0pIHtcbiAgICAgICAgICBkaXNwbGF5SW1nKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfSwgMTUwKTtcbiAgfVxuXG4gIGRpc3BsYXlJbWcoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRMYXN0UGFydCgpIHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY2hhbmdlRmluYWxUZXh0KCk7XG4gIH0sIDUwMDApO1xufVxuXG5leHBvcnQgeyBzdGFydExhc3RQYXJ0IH07XG4iLCJmdW5jdGlvbiBzYXZlU3RhdHNMb2NhbChcbiAganVtcHNjYXJlLFxuICBjaGFwdGVyMSxcbiAgeWVhcnMsXG4gIGN1cnJlbnRZZWFyLFxuICB5ZWFyQ2x1ZSxcbiAgYmFja01vb2RsZUNsdWVcbikge1xuICBjb25zdCBzdGF0cyA9IHtcbiAgICBqdW1wc2NhcmUsXG4gICAgY2hhcHRlcjEsXG4gICAgeWVhcnMsXG4gICAgY3VycmVudFllYXIsXG4gICAgeWVhckNsdWUsXG4gICAgYmFja01vb2RsZUNsdWUsXG4gIH07XG5cbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBnYW1lU3RhdHMucHVzaChzdGF0cyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5TmV3VXNlcigpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA8IDEpIHtcbiAgICBzYXZlU3RhdHNMb2NhbChmYWxzZSwgZmFsc2UsIFsyMDE0XSwgJzIwMTQnLCBmYWxzZSwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUp1bXBzY2FyZSgpIHtcbiAgLy8gT2J0w6ltIG9zIGRhZG9zIGFybWF6ZW5hZG9zIGxvY2FsbWVudGUgY29tIGEgY2hhdmUgJ2dhbWVTdGF0cydcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIC8vIFZlcmlmaWNhIHNlIGjDoSBwZWxvIG1lbm9zIHVtIGNvbmp1bnRvIGRlIGVzdGF0w61zdGljYXMgbm8gYXJyYXlcbiAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5qdW1wc2NhcmUgPSB0cnVlO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNoYXB0ZXIxKCkge1xuICAvLyBPYnTDqW0gb3MgZGFkb3MgYXJtYXplbmFkb3MgbG9jYWxtZW50ZSBjb20gYSBjaGF2ZSAnZ2FtZVN0YXRzJ1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgLy8gVmVyaWZpY2Egc2UgaMOhIHBlbG8gbWVub3MgdW0gY29uanVudG8gZGUgZXN0YXTDrXN0aWNhcyBubyBhcnJheVxuICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcbiAgICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNoYXB0ZXIxID0gdHJ1ZTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0p1bXBzY2FyZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmp1bXBzY2FyZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY2hlY2tDaGFwdGVyMSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmNoYXB0ZXIxID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVZZWFycygpIHtcbiAgY29uc3QgdGltZUxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUnKTtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBsZXQgYWxsWWVhcnMgPSBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJzO1xuXG4gIGlmICh0aW1lTGluZS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgIC8vIEl0ZXJhIHNvYnJlIGNhZGEgYW5vIG5vIGFycmF5IGFsbFllYXJzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxZZWFycy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gQ3JpYSB1bWEgZGl2IGNvbSBhIGNsYXNzZSAneWVhcicgZSBvIHRleHRvIGlndWFsIGFvIHZhbG9yIG5vIGFycmF5XG4gICAgICBjb25zdCB5ZWFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB5ZWFyRGl2LmNsYXNzTGlzdC5hZGQoJ3llYXInKTtcbiAgICAgIHllYXJEaXYudGV4dENvbnRlbnQgPSBhbGxZZWFyc1tpXTtcblxuICAgICAgLy8gQWRpY2lvbmEgYSBkaXYgYW8gZWxlbWVudG8gdGltZUxpbmVcbiAgICAgIHRpbWVMaW5lLmFwcGVuZENoaWxkKHllYXJEaXYpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRZZWFyKG5ld1llYXIpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJzLnB1c2gobmV3WWVhcik7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xufVxuXG5mdW5jdGlvbiBnZXRZZWFyKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgcmV0dXJuIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY3VycmVudFllYXI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG5cbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jdXJyZW50WWVhciA9IG5ld1llYXI7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlWWVhckNsdWUoKSB7XG4gIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcbiAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS55ZWFyQ2x1ZSA9IHRydWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tZZWFyQ2x1ZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJDbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VNb29kbGVDbHVlKCkge1xuICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XG4gIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uYmFja01vb2RsZUNsdWUgPSB0cnVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTW9vZGxlQ2x1ZSgpIHtcbiAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xuXG4gIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmJhY2tNb29kbGVDbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQge1xuICB2ZXJpZnlOZXdVc2VyLFxuICBjaGFuZ2VKdW1wc2NhcmUsXG4gIGNoYW5nZUNoYXB0ZXIxLFxuICBjaGVja0p1bXBzY2FyZSxcbiAgY2hlY2tDaGFwdGVyMSxcbiAgY3JlYXRlWWVhcnMsXG4gIGFkZFllYXIsXG4gIGdldFllYXIsXG4gIGNoYW5nZVllYXIsXG4gIHNhdmVTdGF0c0xvY2FsLFxuICBjaGFuZ2VZZWFyQ2x1ZSxcbiAgY2hlY2tZZWFyQ2x1ZSxcbiAgY2hhbmdlTW9vZGxlQ2x1ZSxcbiAgY2hlY2tNb29kbGVDbHVlXG59O1xuIiwiaW1wb3J0IHsgbGlzdGVuSG9tZSB9IGZyb20gXCIuL2F0bzEtdjEuanNcIjtcbmltcG9ydCB7IGFkZEV2ZW50IH0gZnJvbSBcIi4vYnl0ZUJ1enouanNcIjtcbmltcG9ydCB7IHN0YXJ0TGFzdFBhcnQgfSBmcm9tIFwiLi9kbkxlYWtzLmpzXCI7XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxKb3kodGV4dENvbnRlbnQpIHtcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XG4gIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGlmIChjdXJyZW50WWVhclRleHQgIT09IHRleHRDb250ZW50KSB7XG4gICAgICAgIGZldGNoKGAuL2pveUpvdXJuYWwke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLmNvbnRlbnQtJHt0ZXh0Q29udGVudH1gXG4gICAgICAgICAgICApLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1qb3knKTtcbiAgICAgICAgICAgIGNvbnN0IGRpbm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpbm8nKTtcblxuICAgICAgICAgICAgZGlub3MuZm9yRWFjaCgoZGlubykgPT4ge1xuICAgICAgICAgICAgICBkaW5vLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnMjAxNicpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLndpZHRoID0gJzc1dncnO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyYXknO1xuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS53aWR0aCA9ICc3MHZ3JztcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9LCAxNTAwKTtcbiAgfSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gdGltZVRyYXZlbE1vb2RsZSh0ZXh0Q29udGVudCkge1xuICBjb25zdCBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXInKTtcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYmx1ci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR3LXllYXInKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRZZWFyVGV4dCA9IGN1cnJlbnRZZWFyLnRleHRDb250ZW50O1xuICAgICAgaWYgKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpIHtcbiAgICAgICAgZmV0Y2goYC4vYXRvMS0ke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vb2RsZSA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGAubW9vZGxlJHt0ZXh0Q29udGVudH1gXG4gICAgICAgICAgICApLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IG9sZE1vb2RsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUnKTtcbiAgICAgICAgICAgIG9sZE1vb2RsZS5pbm5lckhUTUwgPSBtb29kbGU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld3MgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgLm5ld3Mke3RleHRDb250ZW50fWBcbiAgICAgICAgICAgICkuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3Qgb2xkTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgb2xkTmV3cy5pbm5lckhUTUwgPSBuZXdzO1xuXG4gICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcyMDE2Jykge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICBjb25zdCBtb29kbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUtdGl0bGUnKTtcbiAgICAgICAgICAgICAgY29uc3QgaW1nTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctbmV3cycpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjM2MzYzNjJztcbiAgICAgICAgICAgICAgaW1nTmV3cy5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIG1vb2RsZVRpdGxlLnN0eWxlLmZvbnRGYW1pbHkgPSAnbm92YVJvdW5kJztcbiAgICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdjb21wYWN0eic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgICBjb25zdCBtb29kbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb29kbGUtdGl0bGUnKTtcbiAgICAgICAgICAgICAgY29uc3QgaW1nTmV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctbmV3cycpO1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgIGltZ05ld3Muc3R5bGUuYm9yZGVyID0gJ3NvbGlkIDAuNXZoIGdyYXknO1xuICAgICAgICAgICAgICBtb29kbGVUaXRsZS5zdHlsZS5mb250RmFtaWx5ID0gJ29sZE1vb2RsZSc7XG4gICAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxCdXp6KHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1cicpO1xuICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGZldGNoKGAuL2J5dGVCdXp6JHt0ZXh0Q29udGVudH0uaHRtbGApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YTtcblxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5jb250ZW50LSR7dGV4dENvbnRlbnR9YFxuICAgICAgICAgICkuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWJ1enonKTtcbiAgICAgICAgICBvbGRDb250ZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnMjAxNicpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5mb250RmFtaWx5ID0gJ2NvbXBhY3R6JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmFyIGhlYWRlclRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgICAgICAgICAgaGVhZGVyVGFnLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBhZGRFdmVudCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lV2FycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpO1xuICAgICAgICAgICAgdGltZVdhcnAuc3R5bGUuZm9udEZhbWlseSA9ICdvbGRNb29kbGUnO1xuICAgICAgICAgICAgb2xkQ29udGVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcbiAgICAgICAgICAgIHZhciBoZWFkZXJUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICAgICAgICAgIGhlYWRlclRhZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBjdXJyZW50WWVhci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgICAgICB9KTtcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSwgMTUwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHRpbWVUcmF2ZWxMZWFrKHRleHRDb250ZW50KSB7XG4gIGNvbnN0IGJsdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1maW5hbCcpO1xuICBibHVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50WWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dy15ZWFyJyk7XG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcbiAgICAgIGZldGNoKGAuL2RuTGVha3Mke3RleHRDb250ZW50fS5odG1sYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xuXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmNvbnRlbnQke3RleHRDb250ZW50fWBcbiAgICAgICAgICApLmlubmVySFRNTDtcblxuICAgICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1sZWFrcycpO1xuICAgICAgICAgIGNvbnN0IG9sZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcyMDE2Jykge1xuICAgICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLmZvbnRGYW1pbHkgPSAnY29tcGFjdHonO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzE4MTgxOCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XG4gICAgICAgICAgICB0aW1lV2FycC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzA4MDgwOCc7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc3RhcnRMYXN0UGFydCgpO1xuICAgICAgICAgICAgICBjb25zdCBkaW5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ05vdEZvdW5kRmluYWwnKTtcbiAgICAgICAgICAgICAgY29uc3QgbGlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQnKTtcbiAgICAgICAgICAgICAgbGlnaHQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgZGluby5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgfSk7XG4gICAgICBibHVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0sIDE1MDApO1xuICAgIH0sIDE1MDApO1xuICB9LCAzMDApO1xufVxuZXhwb3J0IHsgdGltZVRyYXZlbEpveSwgdGltZVRyYXZlbE1vb2RsZSwgdGltZVRyYXZlbEJ1enosIHRpbWVUcmF2ZWxMZWFrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJ0aW1lTWFjaGluZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL3RpbWVNYWNoaW5lLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9