/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

body {
  background-color: black;
  display: grid;
  height: 100vh;
  width: 100vw;
  align-content: center;
  justify-items: center;
  overflow: hidden;
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

.timeWarp,
.dialogue {
  display: none;
}

.timeWarp {
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

.url {
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

.dialogue {
  width: 100vw;
  height: 10vh;
  background-color: rgb(43, 42, 42);
  margin-bottom: 7vh;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  font-size: 2.5vh;
}

.dialogue p {
  color: white;
  font-family: roboto;
}

.container {
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

.monkey-type {
  position: absolute;
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
}`, "",{"version":3,"sources":["webpack://./src/css/prologo.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: gamecuben;\r\n  src: url(../font/gamecuben/GameCube.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: roboto;\r\n  src: url(../font/Roboto/Roboto-Regular.ttf);\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  display: grid;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  align-content: center;\r\n  justify-items: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.chapter {\r\n  font-family: gamecuben;\r\n  color: white;\r\n  font-size: 12vh;\r\n  display: grid;\r\n  transition: opacity 2.1s ease-in-out;\r\n}\r\n\r\n.chapter span {\r\n  font-size: 4vh;\r\n  opacity: 0.7;\r\n}\r\n\r\n.chapter button {\r\n  font-family: roboto;\r\n  background: transparent;\r\n  border: solid .3vh gray;\r\n  color: gray;\r\n  cursor: pointer;\r\n  font-size: 3vh;\r\n}\r\n\r\n.timeWarp,\r\n.dialogue {\r\n  display: none;\r\n}\r\n\r\n.timeWarp {\r\n  font-family: gamecuben;\r\n  width: calc(90vw - 10px);\r\n  height: 16vh;\r\n  background-color: rgb(43, 42, 42);\r\n  color: white;\r\n  border: solid 1vh rgb(85, 85, 85);\r\n  border-top: none;\r\n  border-radius: 10px;\r\n  opacity: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n\r\n  transition: opacity 5s ease-in-out;\r\n}\r\n\r\n.tw-center {\r\n  width: 55vw;\r\n}\r\n\r\n.tw-year,\r\n.tw-title {\r\n  font-size: 4vh;\r\n}\r\n\r\n.url {\r\n  width: 100%;\r\n  height: 3vh;\r\n  background-color: aliceblue;\r\n  border: solid .3vh black;\r\n  opacity: 0.1;\r\n}\r\n\r\n.timeline {\r\n  width: 100%;\r\n  height: 7vh;\r\n  border: solid .7vh rgb(43, 42, 42);\r\n  display: flex;\r\n  opacity: 0;\r\n\r\n  transition: opacity 3s ease-in-out;\r\n}\r\n\r\n.year {\r\n  height: 100%;\r\n  border: solid .5vh rgb(85, 85, 85);\r\n  font-size: 1.5vh;\r\n  padding: .7vh;\r\n  cursor: pointer;\r\n  display: grid;\r\n  align-items: center;\r\n}\r\n\r\n.year:hover{\r\n  background-color: rgb(70, 68, 68);\r\n}\r\n\r\n.dialogue {\r\n  width: 100vw;\r\n  height: 10vh;\r\n  background-color: rgb(43, 42, 42);\r\n  margin-bottom: 7vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  opacity: 0.7;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.dialogue p {\r\n  color: white;\r\n  font-family: roboto;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n  display: none;\r\n  align-content: space-between;\r\n  justify-items: center;\r\n\r\n  transition: opacity 7s ease-in-out;\r\n}\r\n\r\n.eye {\r\n  background-color: white;\r\n  border: solid 2px white;\r\n  width: 20vw;\r\n  height: 2vh;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n  opacity: 0;\r\n\r\n  transition: opacity 11s ease-in-out;\r\n}\r\n\r\n.fuzzy-overlay {\r\n  position: absolute;\r\n  inset: -200%;\r\n  background-image: url(../img/whiteNoiseV3.jpg);\r\n  z-index: -1;\r\n  opacity: 0.02;\r\n\r\n  transition: opacity 25s ease-in-out;\r\n  animation: shift 0.2s linear infinite both;\r\n}\r\n\r\n.monkey-type {\r\n  position: absolute;\r\n  display: grid;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  grid-template-rows: 1fr 3fr 2fr;\r\n  height: 40vh;\r\n  width: 50vw;\r\n  background-color: rgb(65, 62, 62);\r\n  border-radius: 5px;\r\n  color: black;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.monkey-title {\r\n  color: rgb(36, 36, 36);\r\n  font-family: gamecuben;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.monkey-title p:first-child { \r\n  font-size: 4vh;\r\n}\r\n\r\n.monkey-title p:last-child {\r\n  font-size: 2.8vh;\r\n}\r\n\r\n.letter {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 8vh;\r\n}\r\n\r\n.correct {\r\n  color: green;\r\n}\r\n\r\n.incorrect {\r\n  color: brown;\r\n}\r\n\r\n.progress-bar {\r\n  height: 20px;\r\n  background-color: rgb(18, 197, 18);\r\n  width: 0;\r\n}\r\n\r\n.safe-screen {\r\n  position: absolute;\r\n  z-index: 2;\r\n  width: 95vw;\r\n  height: 95vh;\r\n  display: none;\r\n  opacity: 0;\r\n  border: solid 1vh #000;\r\n}\r\n\r\n.little-shake {\r\n  animation: shake 0.6s step-end;\r\n}\r\n\r\n.medium-shake {\r\n  animation: bigShake 0.6s step-end;\r\n}\r\n\r\n.big-shake {\r\n  animation: bigShake 0.4s step-end infinite both;\r\n}\r\n\r\n@keyframes shift {\r\n  0% {\r\n    transform: translateX(10%) translateY(10%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(-10%) translateY(-10%);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: translateX(0);\r\n  }\r\n\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    transform: translateX(.8rem);\r\n  }\r\n\r\n  10%,\r\n  30%,\r\n  50% {\r\n    transform: translateX(-.4rem);\r\n  }\r\n\r\n  70%,\r\n  100% {\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes bigShake {\r\n  0% {\r\n    transform: translateX(-.4rem) translateY(-.4rem);\r\n  }\r\n\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% { \r\n    transform: translateX(.8rem) translateY(-.4rem);\r\n  }\r\n\r\n  10%,\r\n  30%,\r\n  50% {\r\n    transform: translateX(-.4rem) translateY(.8rem);\r\n  }\r\n\r\n  70%,\r\n  100% {\r\n    transform: translateX(.8rem) translateY(.8rem);\r\n  }\r\n}"],"sourceRoot":""}]);
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


let lastPressedKey = '';
let correctCount = 0;

function createCaptcha() {
  var container = document.querySelector('.container');
  var safeScreen = document.querySelector('.safe-screen');
  safeScreen.style.display = 'flex';

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
    progressBar.style.width = correctCount * 5 + '%';

    if (correctCount === 2 || correctCount === 6) {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playEarthquake)(0.8, 'little-shake', 700);
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('earthquake'));
    }

    if (correctCount === 15) {
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.playEarthquake)(0.8, 'medium-shake', 700);
      setTimeout(() => {
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('earthquake'));
      }, 700);
    }

    if (correctCount === 20) {
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
          window.location.href = './ato1-v1.html';
        }, 9750);

      }, 4000);
      setTimeout(() => {
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('earthquake'));
        (0,_audio_js__WEBPACK_IMPORTED_MODULE_0__.decreaseVolume)(document.getElementById('noise'));
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

/***/ "./src/font/Roboto/Roboto-Regular.ttf":
/*!********************************************!*\
  !*** ./src/font/Roboto/Roboto-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

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
    startChapter.disabled = true;
    var chapter = document.querySelector('.chapter');
    chapter.style.opacity = 0;
    setTimeout(() => {
      chapter.style.display = 'none';
      var audio = document.getElementById('noise');
      audio.volume = 0.1;
      audio.play();

      
      

      setTimeout(() => {
        const container = document.querySelector('.container');
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
    }, 3000);
  });

  function changeText() {
    const dialogue = document.querySelector('.dialogue p');
    const dialogueDiv = document.querySelector('.dialogue');
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
          const timeWarp = document.querySelector('.timeWarp');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbG9nby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SUFBaUQ7QUFDN0YsNENBQTRDLDhJQUFvRDtBQUNoRyw0Q0FBNEMsMEhBQTBDO0FBQ3RGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcs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Iiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3MvcHJvbG9nby5jc3M/NjdiNSIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvYXVkaW8uanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9jYXB0Y2hhLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvbG9jYWxTdG9yYWdlLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL3Byb2xvZ28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvZ2FtZWN1YmVuL0dhbWVDdWJlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy93aGl0ZU5vaXNlVjMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNoYXB0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJ2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMi4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNoYXB0ZXIgc3BhbiB7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uY2hhcHRlciBidXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBzb2xpZCAuM3ZoIGdyYXk7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogM3ZoO1xyXG59XHJcblxyXG4udGltZVdhcnAsXHJcbi5kaWFsb2d1ZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRpbWVXYXJwIHtcclxuICBmb250LWZhbWlseTogZ2FtZWN1YmVuO1xyXG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcclxuICBoZWlnaHQ6IDE2dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udHctY2VudGVyIHtcclxuICB3aWR0aDogNTV2dztcclxufVxyXG5cclxuLnR3LXllYXIsXHJcbi50dy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbn1cclxuXHJcbi51cmwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcblxyXG4udGltZWxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIGJvcmRlcjogc29saWQgLjd2aCByZ2IoNDMsIDQyLCA0Mik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvcGFjaXR5OiAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ueWVhciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XHJcbiAgZm9udC1zaXplOiAxLjV2aDtcclxuICBwYWRkaW5nOiAuN3ZoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi55ZWFyOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MCwgNjgsIDY4KTtcclxufVxyXG5cclxuLmRpYWxvZ3VlIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcclxuICBtYXJnaW4tYm90dG9tOiA3dmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgZm9udC1zaXplOiAyLjV2aDtcclxufVxyXG5cclxuLmRpYWxvZ3VlIHAge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDdzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZXllIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDJ2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBvcGFjaXR5OiAwO1xyXG5cclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDExcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmZ1enp5LW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBpbnNldDogLTIwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIG9wYWNpdHk6IDAuMDI7XHJcblxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjVzIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogc2hpZnQgMC4ycyBsaW5lYXIgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuLm1vbmtleS10eXBlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb25rZXktdGl0bGUge1xyXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XHJcbiAgZm9udC1mYW1pbHk6IGdhbWVjdWJlbjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9ua2V5LXRpdGxlIHA6Zmlyc3QtY2hpbGQgeyBcclxuICBmb250LXNpemU6IDR2aDtcclxufVxyXG5cclxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xyXG4gIGZvbnQtc2l6ZTogMi44dmg7XHJcbn1cclxuXHJcbi5sZXR0ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDh2aDtcclxufVxyXG5cclxuLmNvcnJlY3Qge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmluY29ycmVjdCB7XHJcbiAgY29sb3I6IGJyb3duO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLnNhZmUtc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMjtcclxuICB3aWR0aDogOTV2dztcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJvcmRlcjogc29saWQgMXZoICMwMDA7XHJcbn1cclxuXHJcbi5saXR0bGUtc2hha2Uge1xyXG4gIGFuaW1hdGlvbjogc2hha2UgMC42cyBzdGVwLWVuZDtcclxufVxyXG5cclxuLm1lZGl1bS1zaGFrZSB7XHJcbiAgYW5pbWF0aW9uOiBiaWdTaGFrZSAwLjZzIHN0ZXAtZW5kO1xyXG59XHJcblxyXG4uYmlnLXNoYWtlIHtcclxuICBhbmltYXRpb246IGJpZ1NoYWtlIDAuNHMgc3RlcC1lbmQgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGlmdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSkgdHJhbnNsYXRlWSgxMCUpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSkgdHJhbnNsYXRlWSgtMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIDIwJSxcclxuICA0MCUsXHJcbiAgNjAlLFxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjhyZW0pO1xyXG4gIH1cclxuXHJcbiAgMTAlLFxyXG4gIDMwJSxcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0uNHJlbSk7XHJcbiAgfVxyXG5cclxuICA3MCUsXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJpZ1NoYWtlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS40cmVtKSB0cmFuc2xhdGVZKC0uNHJlbSk7XHJcbiAgfVxyXG5cclxuICAyMCUsXHJcbiAgNDAlLFxyXG4gIDYwJSxcclxuICA4MCUgeyBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguOHJlbSkgdHJhbnNsYXRlWSgtLjRyZW0pO1xyXG4gIH1cclxuXHJcbiAgMTAlLFxyXG4gIDMwJSxcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0uNHJlbSkgdHJhbnNsYXRlWSguOHJlbSk7XHJcbiAgfVxyXG5cclxuICA3MCUsXHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjhyZW0pIHRyYW5zbGF0ZVkoLjhyZW0pO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9wcm9sb2dvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw0Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQTJDO0FBQzdDOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZ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OztFQUVBOzs7O0lBSUUsNEJBQTRCO0VBQzlCOztFQUVBOzs7SUFHRSw2QkFBNkI7RUFDL0I7O0VBRUE7O0lBRUUsd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdEQUFnRDtFQUNsRDs7RUFFQTs7OztJQUlFLCtDQUErQztFQUNqRDs7RUFFQTs7O0lBR0UsK0NBQStDO0VBQ2pEOztFQUVBOztJQUVFLDhDQUE4QztFQUNoRDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IGdhbWVjdWJlbjtcXHJcXG4gIHNyYzogdXJsKC4uL2ZvbnQvZ2FtZWN1YmVuL0dhbWVDdWJlLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG4gIHNyYzogdXJsKC4uL2ZvbnQvUm9ib3RvL1JvYm90by1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXB0ZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IGdhbWVjdWJlbjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJ2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIuMXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jaGFwdGVyIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi5jaGFwdGVyIGJ1dHRvbiB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IHNvbGlkIC4zdmggZ3JheTtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAzdmg7XFxyXFxufVxcclxcblxcclxcbi50aW1lV2FycCxcXHJcXG4uZGlhbG9ndWUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVXYXJwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XFxyXFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxyXFxuICBoZWlnaHQ6IDE2dmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnR3LWNlbnRlciB7XFxyXFxuICB3aWR0aDogNTV2dztcXHJcXG59XFxyXFxuXFxyXFxuLnR3LXllYXIsXFxyXFxuLnR3LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNHZoO1xcclxcbn1cXHJcXG5cXHJcXG4udXJsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxyXFxuICBib3JkZXI6IHNvbGlkIC4zdmggYmxhY2s7XFxyXFxuICBvcGFjaXR5OiAwLjE7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogN3ZoO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnllYXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41dmg7XFxyXFxuICBwYWRkaW5nOiAuN3ZoO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi55ZWFyOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcwLCA2OCwgNjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlhbG9ndWUge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogN3ZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZm9udC1zaXplOiAyLjV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWxvZ3VlIHAge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA3cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmV5ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xcclxcbiAgd2lkdGg6IDIwdnc7XFxyXFxuICBoZWlnaHQ6IDJ2aDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDExcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1enp5LW92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaW5zZXQ6IC0yMDAlO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy93aGl0ZU5vaXNlVjMuanBnKTtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgb3BhY2l0eTogMC4wMjtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgYW5pbWF0aW9uOiBzaGlmdCAwLjJzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ua2V5LXR5cGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcclxcbiAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ua2V5LXRpdGxlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxyXFxuICBmb250LWZhbWlseTogZ2FtZWN1YmVuO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44dmg7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogOHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29ycmVjdCB7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5pbmNvcnJlY3Qge1xcclxcbiAgY29sb3I6IGJyb3duO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZ3Jlc3MtYmFyIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XFxyXFxuICB3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNhZmUtc2NyZWVuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICB3aWR0aDogOTV2dztcXHJcXG4gIGhlaWdodDogOTV2aDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxdmggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpdHRsZS1zaGFrZSB7XFxyXFxuICBhbmltYXRpb246IHNoYWtlIDAuNnMgc3RlcC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0tc2hha2Uge1xcclxcbiAgYW5pbWF0aW9uOiBiaWdTaGFrZSAwLjZzIHN0ZXAtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYmlnLXNoYWtlIHtcXHJcXG4gIGFuaW1hdGlvbjogYmlnU2hha2UgMC40cyBzdGVwLWVuZCBpbmZpbml0ZSBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoaWZ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSkgdHJhbnNsYXRlWSgxMCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMjAlLFxcclxcbiAgNDAlLFxcclxcbiAgNjAlLFxcclxcbiAgODAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC44cmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwJSxcXHJcXG4gIDMwJSxcXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgNzAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBiaWdTaGFrZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pIHRyYW5zbGF0ZVkoLS40cmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDIwJSxcXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSxcXHJcXG4gIDgwJSB7IFxcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjhyZW0pIHRyYW5zbGF0ZVkoLS40cmVtKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwJSxcXHJcXG4gIDMwJSxcXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pIHRyYW5zbGF0ZVkoLjhyZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgNzAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguOHJlbSkgdHJhbnNsYXRlWSguOHJlbSk7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9sb2dvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvbG9nby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHBsYXlXcm9uZygpIHtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVjbGFFcnJhZGEnKTtcclxuICBhdWRpby52b2x1bWUgPSAwLjc7XHJcbiAgYXVkaW8ucGxheSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5UmlnaHQoKSB7XHJcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhQ29ycmV0YScpO1xyXG4gIGF1ZGlvLnZvbHVtZSA9IDAuMjtcclxuICBhdWRpby5wbGF5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlFYXJ0aHF1YWtlKHZvbHVtZSwgdHlwZSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpO1xyXG4gIGF1ZGlvLnZvbHVtZSA9IHZvbHVtZTtcclxuICBhdWRpby5wbGF5KCk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodHlwZSk7XHJcblxyXG4gIGlmICh0eXBlICE9PSAnYmlnLXNoYWtlJykge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKHR5cGUpO1xyXG4gICAgfSwgNzAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xyXG4gIGlmIChhdWRpb0VsZW1lbnQudm9sdW1lID49IDAuNDUpIHtcclxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjQ1O1xyXG4gICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgIHRpbWVXYXJwLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSArPSAwLjA1O1xyXG4gICAgaW5jcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcclxuICB9LCA4MDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpIHtcclxuICBpZiAoYXVkaW9FbGVtZW50LnZvbHVtZSA8PSAwLjEpIHtcclxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjA1O1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgLT0gMC4wNztcclxuICAgIGRlY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCk7XHJcbiAgfSwgMzAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheUhhcHB5KCkge1xyXG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXBweScpO1xyXG4gIGF1ZGlvLnZvbHVtZSA9IDE7XHJcbiAgYXVkaW8ucGxheSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wSGFwcHkoKSB7XHJcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhcHB5Jyk7XHJcbiAgYXVkaW8ucGF1c2UoKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHBsYXlSaWdodCwgcGxheVdyb25nLCBwbGF5RWFydGhxdWFrZSwgZGVjcmVhc2VWb2x1bWUsIGluY3JlYXNlVm9sdW1lLCBwbGF5SGFwcHksIHN0b3BIYXBweSB9O1xyXG4iLCJpbXBvcnQgeyBwbGF5UmlnaHQsIHBsYXlXcm9uZywgcGxheUVhcnRocXVha2UsIGRlY3JlYXNlVm9sdW1lIH0gZnJvbSBcIi4vYXVkaW8uanNcIjtcclxuXHJcbmxldCBsYXN0UHJlc3NlZEtleSA9ICcnO1xyXG5sZXQgY29ycmVjdENvdW50ID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcHRjaGEoKSB7XHJcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICB2YXIgc2FmZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYWZlLXNjcmVlbicpO1xyXG4gIHNhZmVTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHJcbiAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdHlwZVwiLlxyXG4gIHZhciBtb25rZXlUeXBlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbW9ua2V5VHlwZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdHlwZScpO1xyXG5cclxuICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10aXRsZVwiIGUgZGVmaW5lIG8gdGV4dG9cclxuICB2YXIgbW9ua2V5VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBtb25rZXlUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdGl0bGUnKTtcclxuICB2YXIgY2FwdGNoYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjYXB0Y2hhLnRleHRDb250ZW50ID0gJ0NBUFRDSEEnO1xyXG4gIHZhciBjYXB0Y2hhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY2FwdGNoYURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ3Byb3ZlIHN1YSBodW1hbmlkYWRlJztcclxuICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhKTtcclxuICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhRGVzY3JpcHRpb24pO1xyXG5cclxuICAvLyBDcmlhIGFzIGRpdnMgaW50ZXJuYXMgY29tIGFzIGNsYXNzZXMgXCJsZXR0ZXJcIiBlIFwicHJvZ3Jlc3MtYmFyXCJcclxuICB2YXIgbGV0dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2xldHRlcicpO1xyXG5cclxuICB2YXIgcHJvZ3Jlc3NCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBwcm9ncmVzc0JhckRpdi5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcclxuXHJcbiAgLy8gQWRpY2lvbmEgYXMgZGl2cyBpbnRlcm5hcyDDoCBkaXYgXCJtb25rZXktdHlwZVwiXHJcbiAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChtb25rZXlUaXRsZURpdik7XHJcbiAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChsZXR0ZXJEaXYpO1xyXG4gIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJEaXYpO1xyXG5cclxuICAvLyBBZGljaW9uYSBhIGRpdiBcIm1vbmtleS10eXBlXCIgYW8gY29udGFpbmVyIGV4aXN0ZW50ZVxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25rZXlUeXBlRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKSB7XHJcbiAgY29uc3QgYWxwaGFiZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xyXG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxwaGFiZXQubGVuZ3RoKTtcclxuICByZXR1cm4gYWxwaGFiZXRbcmFuZG9tSW5kZXhdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVMZXR0ZXIoKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVLZXlQcmVzcyk7XHJcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5sZXR0ZXInKTtcclxuXHJcbiAgbGFzdFByZXNzZWRLZXkgPSAnJztcclxuICBjb25zdCByYW5kb21MZXR0ZXIgPSBnZW5lcmF0ZVJhbmRvbUxldHRlcigpO1xyXG4gIGxldHRlckRpdi50ZXh0Q29udGVudCA9IHJhbmRvbUxldHRlcjtcclxuICBsZXR0ZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xyXG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyJyk7XHJcbiAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLnByb2dyZXNzLWJhcicpO1xyXG4gIGNvbnN0IG1vbmtleVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUnKTtcclxuXHJcbiAgY29uc3QgcHJlc3NlZEtleSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZXZlbnQua2V5Q29kZSk7XHJcbiAgY29uc3QgY3VycmVudExldHRlciA9IGxldHRlckRpdi50ZXh0Q29udGVudDtcclxuXHJcbiAgaWYgKFxyXG4gICAgKHByZXNzZWRLZXkudG9VcHBlckNhc2UoKSA9PT0gY3VycmVudExldHRlciB8fFxyXG4gICAgICBwcmVzc2VkS2V5LnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRMZXR0ZXIpICYmXHJcbiAgICBwcmVzc2VkS2V5ICE9PSBsYXN0UHJlc3NlZEtleVxyXG4gICkge1xyXG4gICAgbGFzdFByZXNzZWRLZXkgPSBwcmVzc2VkS2V5O1xyXG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcclxuICAgIHBsYXlSaWdodCgpO1xyXG4gICAgY29ycmVjdENvdW50Kys7XHJcbiAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XHJcbiAgICBmdXp6eS5zdHlsZS5vcGFjaXR5ICs9IDAuMDU7XHJcblxyXG4gICAgLy8gQXR1YWxpemEgYSBsYXJndXJhIGRhIGJhcnJhIGRlIHByb2dyZXNzb1xyXG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBjb3JyZWN0Q291bnQgKiA1ICsgJyUnO1xyXG5cclxuICAgIGlmIChjb3JyZWN0Q291bnQgPT09IDIgfHwgY29ycmVjdENvdW50ID09PSA2KSB7XHJcbiAgICAgIHBsYXlFYXJ0aHF1YWtlKDAuOCwgJ2xpdHRsZS1zaGFrZScsIDcwMCk7XHJcbiAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb3JyZWN0Q291bnQgPT09IDE1KSB7XHJcbiAgICAgIHBsYXlFYXJ0aHF1YWtlKDAuOCwgJ21lZGl1bS1zaGFrZScsIDcwMCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJykpO1xyXG4gICAgICB9LCA3MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb3JyZWN0Q291bnQgPT09IDIwKSB7XHJcbiAgICAgIHBsYXlFYXJ0aHF1YWtlKDEsICdiaWctc2hha2UnKTtcclxuICAgICAgY29uc3QgZXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZScpO1xyXG4gICAgICBleWUuc3R5bGUub3BhY2l0eSA9IDAuMjU7XHJcbiAgICAgIG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUgcCcpO1xyXG4gICAgICAgIGNvbnN0IGRpYWxvZ3VlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBkaWFsb2d1ZS50ZXh0Q29udGVudCA9ICdPYnJpZ2FkbyEnO1xyXG4gICAgICAgIGRpYWxvZ3VlRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuL2F0bzEtdjEuaHRtbCc7XHJcbiAgICAgICAgfSwgOTc1MCk7XHJcblxyXG4gICAgICB9LCA0MDAwKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZGVjcmVhc2VWb2x1bWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VhcnRocXVha2UnKSk7XHJcbiAgICAgICAgZGVjcmVhc2VWb2x1bWUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vaXNlJykpO1xyXG4gICAgICAgIGV5ZS5zdHlsZS5oZWlnaHQgPSAnMjB2dyc7XHJcbiAgICAgIH0sIDk3NTApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB1cGRhdGVMZXR0ZXIoKTtcclxuICAgIH0sIDI1NSk7XHJcbiAgfSBlbHNlIGlmIChtb25rZXlUeXBlLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xyXG4gICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2luY29ycmVjdCcpO1xyXG4gICAgcGxheVdyb25nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQ2FwdGNoYSxcclxuICB1cGRhdGVMZXR0ZXJcclxufTtcclxuIiwiZnVuY3Rpb24gc2F2ZVN0YXRzTG9jYWwoanVtcHNjYXJlLCBjaGFwdGVyMSwgeWVhcnMsIGN1cnJlbnRZZWFyKSB7XHJcbiAgICBjb25zdCBzdGF0cyA9IHsganVtcHNjYXJlLCBjaGFwdGVyMSwgeWVhcnMsIGN1cnJlbnRZZWFyfTtcclxuXHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcbiAgICBnYW1lU3RhdHMucHVzaChzdGF0cyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZlcmlmeU5ld1VzZXIoKSB7XHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcbiAgICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICBzYXZlU3RhdHNMb2NhbChmYWxzZSwgZmFsc2UsIFsyMDE0XSwgJzIwMTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlSnVtcHNjYXJlKCkge1xyXG4gICAgLy8gT2J0w6ltIG9zIGRhZG9zIGFybWF6ZW5hZG9zIGxvY2FsbWVudGUgY29tIGEgY2hhdmUgJ2dhbWVTdGF0cydcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuXHJcbiAgICAvLyBWZXJpZmljYSBzZSBow6EgcGVsbyBtZW5vcyB1bSBjb25qdW50byBkZSBlc3RhdMOtc3RpY2FzIG5vIGFycmF5XHJcbiAgICBpZiAoZ2FtZVN0YXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmp1bXBzY2FyZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnYW1lU3RhdHMnLCBKU09OLnN0cmluZ2lmeShnYW1lU3RhdHMpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlQ2hhcHRlcjEoKSB7XHJcbiAgICAvLyBPYnTDqW0gb3MgZGFkb3MgYXJtYXplbmFkb3MgbG9jYWxtZW50ZSBjb20gYSBjaGF2ZSAnZ2FtZVN0YXRzJ1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG5cclxuICAgIC8vIFZlcmlmaWNhIHNlIGjDoSBwZWxvIG1lbm9zIHVtIGNvbmp1bnRvIGRlIGVzdGF0w61zdGljYXMgbm8gYXJyYXlcclxuICAgIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY2hhcHRlcjEgPSB0cnVlO1xyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSnVtcHNjYXJlKCkge1xyXG4gICAgY29uc3QgZ2FtZVN0YXRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2FtZVN0YXRzJykpIHx8IFtdO1xyXG5cclxuICAgIGlmIChnYW1lU3RhdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLmp1bXBzY2FyZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ2hhcHRlcjEoKSB7XHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcblxyXG4gICAgaWYgKGdhbWVTdGF0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKGdhbWVTdGF0c1tnYW1lU3RhdHMubGVuZ3RoIC0gMV0uY2hhcHRlcjEgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVZZWFycygpIHtcclxuICAgIGNvbnN0IHRpbWVMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVsaW5lJyk7XHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcbiAgICBsZXQgYWxsWWVhcnMgPSBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJzO1xyXG5cclxuICAgIGlmICh0aW1lTGluZS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xyXG4gICAgICAgIC8vIEl0ZXJhIHNvYnJlIGNhZGEgYW5vIG5vIGFycmF5IGFsbFllYXJzXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxZZWFycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBDcmlhIHVtYSBkaXYgY29tIGEgY2xhc3NlICd5ZWFyJyBlIG8gdGV4dG8gaWd1YWwgYW8gdmFsb3Igbm8gYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgeWVhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB5ZWFyRGl2LmNsYXNzTGlzdC5hZGQoJ3llYXInKTtcclxuICAgICAgICAgICAgeWVhckRpdi50ZXh0Q29udGVudCA9IGFsbFllYXJzW2ldO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIEFkaWNpb25hIGEgZGl2IGFvIGVsZW1lbnRvIHRpbWVMaW5lXHJcbiAgICAgICAgICAgIHRpbWVMaW5lLmFwcGVuZENoaWxkKHllYXJEaXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkWWVhcihuZXdZZWFyKSB7XHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcbiAgICBnYW1lU3RhdHNbZ2FtZVN0YXRzLmxlbmd0aCAtIDFdLnllYXJzLnB1c2gobmV3WWVhcik7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dhbWVTdGF0cycsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0cykpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0WWVhcigpIHtcclxuICAgIGNvbnN0IGdhbWVTdGF0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWVTdGF0cycpKSB8fCBbXTtcclxuXHJcbiAgICByZXR1cm4gZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jdXJyZW50WWVhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlWWVhcihuZXdZZWFyKSB7XHJcbiAgICBjb25zdCBnYW1lU3RhdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnYW1lU3RhdHMnKSkgfHwgW107XHJcblxyXG4gICAgZ2FtZVN0YXRzW2dhbWVTdGF0cy5sZW5ndGggLSAxXS5jdXJyZW50WWVhciA9IG5ld1llYXI7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2FtZVN0YXRzJywgSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRzKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICB2ZXJpZnlOZXdVc2VyLCBjaGFuZ2VKdW1wc2NhcmUsIGNoYW5nZUNoYXB0ZXIxLCBjaGVja0p1bXBzY2FyZSwgY2hlY2tDaGFwdGVyMSwgY3JlYXRlWWVhcnMsIGFkZFllYXIsIGdldFllYXIsIGNoYW5nZVllYXJcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInByb2xvZ29cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL3Byb2xvZ28uY3NzXCI7XHJcbmltcG9ydCB7IGluY3JlYXNlVm9sdW1lIH0gZnJvbSBcIi4vYXVkaW8uanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSwgdXBkYXRlTGV0dGVyIH0gZnJvbSBcIi4vY2FwdGNoYS5qc1wiO1xyXG5pbXBvcnQgeyB2ZXJpZnlOZXdVc2VyIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLWNvbnRyb2wuanNcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmVyaWZ5TmV3VXNlcigpO1xyXG4gIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcclxuICB5ZWFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICBcclxuICBjb25zdCBzdGFydENoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcclxuXHJcbiAgc3RhcnRDaGFwdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgc3RhcnRDaGFwdGVyLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIHZhciBjaGFwdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYXB0ZXInKTtcclxuICAgIGNoYXB0ZXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY2hhcHRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9pc2UnKTtcclxuICAgICAgYXVkaW8udm9sdW1lID0gMC4xO1xyXG4gICAgICBhdWRpby5wbGF5KCk7XHJcblxyXG4gICAgICBcclxuICAgICAgXHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgZnV6enkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnV6enktb3ZlcmxheScpO1xyXG4gICAgICAgIGluY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2lzZScpKTtcclxuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGZ1enp5LnN0eWxlLm9wYWNpdHkgPSAwLjE1O1xyXG4gICAgICAgIH0sIDI1MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgY2hhbmdlVGV4dCgpO1xyXG4gICAgICAgIH0sIDY1MDApO1xyXG4gICAgICB9LCAzMDAwKTsgICAgICBcclxuICAgIH0sIDMwMDApO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBjaGFuZ2VUZXh0KCkge1xyXG4gICAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUgcCcpO1xyXG4gICAgY29uc3QgZGlhbG9ndWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcclxuICAgIGNvbnN0IHRleHRzID0gW1xyXG4gICAgICBbJ1BvciBmYXZvci4uLicsIDI1MDAsIDQwMDBdLFxyXG4gICAgICBbJ01lIGFqdWRhIScsIDI1MDAsIDM1MDBdLFxyXG4gICAgICBbJ1ZvY8OqIHByZWNpc2EgbWUgc2FsdmFyLCBlbGVzIHF1ZXJlbSBhY2FiYXIgY29taWdvLicsIDM1MDAsIDYwMDBdLFxyXG4gICAgICBbJ0FxdWksIHRvbWEgaXNzby4nLCAyNTAwLCAxMDAwXSxcclxuICAgICAgW1xyXG4gICAgICAgICdFc3NhIMOpIHVtYSBtw6FxdWluYSBkbyB0ZW1wbywgY29tIGVsYSB2b2PDqiBwb2RlIHZvbHRhciBhbyBwYXNzYWRvIG91IGlyIHBhcmEgbyBmdXR1cm8uJyxcclxuICAgICAgICA1MDAwLFxyXG4gICAgICAgIDMwMDAsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnVGVudGUgdm9jw6ogbWVzbW8sIGNsaXF1ZSBubyBhbm8gZSBpbXBlw6dhIHF1ZSBpc3NvIGFjb250ZcOnYS4nLFxyXG4gICAgICAgIDgwMDAsXHJcbiAgICAgICAgMTAwLFxyXG4gICAgICBdLFxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRleHQoKSB7XHJcbiAgICAgIGlmIChpbmRleCA8IHRleHRzLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0ZXh0c1tpbmRleF07XHJcbiAgICAgICAgZGlhbG9ndWUudGV4dENvbnRlbnQgPSBhcnJbMF07XHJcbiAgICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBoaWRlRGlhbG9ndWUoYXJyWzFdLCBhcnJbMl0pO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMykge1xyXG4gICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcclxuICAgICAgICAgIHRpbWVXYXJwLnN0eWxlLm9wYWNpdHkgPSAwLjc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gNSl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVsaW5lJyk7XHJcbiAgICAgICAgICAgIHRpbWVsaW5lLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICB5ZWFyQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XHJcbiAgICAgICAgZnV6enkuc3R5bGUub3BhY2l0eSA9IDAuNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVEaWFsb2d1ZSh0aW1lRHVyYXRpb24sIHRpbWVDaGFuZ2UpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHVwZGF0ZVRleHQoKTtcclxuICAgICAgICB9LCB0aW1lQ2hhbmdlKTtcclxuICAgICAgfSwgdGltZUR1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUZXh0KCk7XHJcbiAgfVxyXG5cclxuICB2YXIgeWVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XHJcbiAgeWVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNyZWF0ZUNhcHRjaGEoKVxyXG4gICAgdXBkYXRlTGV0dGVyKClcclxuICAgIHllYXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH0pXHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=