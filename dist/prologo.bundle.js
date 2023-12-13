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
  font-size: 5rem;
  display: grid;
  transition: opacity 2.1s ease-in-out;
}

.chapter span {
  font-size: 2rem;
  opacity: 0.7;
}

.chapter button {
  font-family: roboto;
  background: transparent;
  border: solid 2px gray;
  color: gray;
  cursor: pointer;
  font-size: 1rem;
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
  border: solid 5px rgb(85, 85, 85);
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
  font-size: 1.5rem;
}

.url {
  width: 100%;
  height: 3vh;
  background-color: aliceblue;
  border: solid 2px black;
  opacity: 0.1;
}

.timeline {
  width: 100%;
  height: 7vh;
  border: solid 2px rgb(43, 42, 42);
  display: flex;
  opacity: 0;

  transition: opacity 3s ease-in-out;
}

.year {
  height: 100%;
  border: solid 2px rgb(85, 85, 85);
  font-size: .5rem;
  padding: 2px;
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
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
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

.monkey-title p:last-child {
  font-size: .6rem;
}

.letter {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
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
}`, "",{"version":3,"sources":["webpack://./src/css/prologo.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAAwC;AAC1C;;AAEA;EACE,mBAAmB;EACnB,4CAA2C;AAC7C;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,eAAe;AACjB;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,YAAY;EACZ,iCAAiC;EACjC,YAAY;EACZ,iCAAiC;EACjC,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,6BAA6B;;EAE7B,kCAAkC;AACpC;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,2BAA2B;EAC3B,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iCAAiC;EACjC,aAAa;EACb,UAAU;;EAEV,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,iCAAiC;EACjC,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,4BAA4B;EAC5B,qBAAqB;;EAErB,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,UAAU;;EAEV,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,yDAA8C;EAC9C,WAAW;EACX,aAAa;;EAEb,mCAAmC;EACnC,0CAA0C;AAC5C;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,+BAA+B;EAC/B,YAAY;EACZ,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;EACtB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,QAAQ;AACV;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE;IACE,0CAA0C;EAC5C;;EAEA;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE;IACE,wBAAwB;EAC1B;;EAEA;;;;IAIE,4BAA4B;EAC9B;;EAEA;;;IAGE,6BAA6B;EAC/B;;EAEA;;IAEE,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,gDAAgD;EAClD;;EAEA;;;;IAIE,+CAA+C;EACjD;;EAEA;;;IAGE,+CAA+C;EACjD;;EAEA;;IAEE,8CAA8C;EAChD;AACF","sourcesContent":["@font-face {\n  font-family: gamecuben;\n  src: url(../font/gamecuben/GameCube.ttf);\n}\n\n@font-face {\n  font-family: roboto;\n  src: url(../font/Roboto/Roboto-Regular.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: black;\n  display: grid;\n  height: 100vh;\n  width: 100vw;\n  align-content: center;\n  justify-items: center;\n  overflow: hidden;\n}\n\n.chapter {\n  font-family: gamecuben;\n  color: white;\n  font-size: 5rem;\n  display: grid;\n  transition: opacity 2.1s ease-in-out;\n}\n\n.chapter span {\n  font-size: 2rem;\n  opacity: 0.7;\n}\n\n.chapter button {\n  font-family: roboto;\n  background: transparent;\n  border: solid 2px gray;\n  color: gray;\n  cursor: pointer;\n  font-size: 1rem;\n}\n\n.timeWarp,\n.dialogue {\n  display: none;\n}\n\n.timeWarp {\n  font-family: gamecuben;\n  width: calc(90vw - 10px);\n  height: 16vh;\n  background-color: rgb(43, 42, 42);\n  color: white;\n  border: solid 5px rgb(85, 85, 85);\n  border-top: none;\n  border-radius: 10px;\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n\n  transition: opacity 5s ease-in-out;\n}\n\n.tw-center {\n  width: 55vw;\n}\n\n.tw-year,\n.tw-title {\n  font-size: 1.5rem;\n}\n\n.url {\n  width: 100%;\n  height: 3vh;\n  background-color: aliceblue;\n  border: solid 2px black;\n  opacity: 0.1;\n}\n\n.timeline {\n  width: 100%;\n  height: 7vh;\n  border: solid 2px rgb(43, 42, 42);\n  display: flex;\n  opacity: 0;\n\n  transition: opacity 3s ease-in-out;\n}\n\n.year {\n  height: 100%;\n  border: solid 2px rgb(85, 85, 85);\n  font-size: .5rem;\n  padding: 2px;\n  cursor: pointer;\n  display: grid;\n  align-items: center;\n}\n\n.year:hover{\n  background-color: rgb(70, 68, 68);\n}\n\n.dialogue {\n  width: 100vw;\n  height: 10vh;\n  background-color: rgb(43, 42, 42);\n  margin-bottom: 40px;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.7;\n}\n\n.dialogue p {\n  color: white;\n  font-family: roboto;\n}\n\n.container {\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  display: none;\n  align-content: space-between;\n  justify-items: center;\n\n  transition: opacity 7s ease-in-out;\n}\n\n.eye {\n  background-color: white;\n  border: solid 2px white;\n  width: 20vw;\n  height: 2vh;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  opacity: 0;\n\n  transition: opacity 11s ease-in-out;\n}\n\n.fuzzy-overlay {\n  position: absolute;\n  inset: -200%;\n  background-image: url(../img/whiteNoiseV3.jpg);\n  z-index: -1;\n  opacity: 0.02;\n\n  transition: opacity 25s ease-in-out;\n  animation: shift 0.2s linear infinite both;\n}\n\n.monkey-type {\n  position: absolute;\n  display: grid;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  grid-template-rows: 1fr 3fr 2fr;\n  height: 40vh;\n  width: 50vw;\n  background-color: rgb(65, 62, 62);\n  border-radius: 5px;\n  color: black;\n  align-items: center;\n  justify-items: center;\n}\n\n.monkey-title {\n  color: rgb(36, 36, 36);\n  font-family: gamecuben;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n\n.monkey-title p:last-child {\n  font-size: .6rem;\n}\n\n.letter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n}\n\n.correct {\n  color: green;\n}\n\n.incorrect {\n  color: brown;\n}\n\n.progress-bar {\n  height: 20px;\n  background-color: rgb(18, 197, 18);\n  width: 0;\n}\n\n.little-shake {\n  animation: shake 0.6s step-end;\n}\n\n.medium-shake {\n  animation: bigShake 0.6s step-end;\n}\n\n.big-shake {\n  animation: bigShake 0.4s step-end infinite both;\n}\n\n@keyframes shift {\n  0% {\n    transform: translateX(10%) translateY(10%);\n  }\n\n  100% {\n    transform: translateX(-10%) translateY(-10%);\n  }\n}\n\n@keyframes shake {\n  0% {\n    transform: translateX(0);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(.8rem);\n  }\n\n  10%,\n  30%,\n  50% {\n    transform: translateX(-.4rem);\n  }\n\n  70%,\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes bigShake {\n  0% {\n    transform: translateX(-.4rem) translateY(-.4rem);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% { \n    transform: translateX(.8rem) translateY(-.4rem);\n  }\n\n  10%,\n  30%,\n  50% {\n    transform: translateX(-.4rem) translateY(.8rem);\n  }\n\n  70%,\n  100% {\n    transform: translateX(.8rem) translateY(.8rem);\n  }\n}"],"sourceRoot":""}]);
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
          window.location.href = '../dist/ato1-v1.html';
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




document.addEventListener('DOMContentLoaded', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCLElBQUksMERBQVk7QUFDaEI7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9wcm9sb2dvLmNzcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY3NzL3Byb2xvZ28uY3NzPzY3YjUiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2F1ZGlvLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3NjcmlwdHMvcHJvbG9nby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9nYW1lY3ViZW4vR2FtZUN1YmUudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL3doaXRlTm9pc2VWMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNoYXB0ZXIge1xuICBmb250LWZhbWlseTogZ2FtZWN1YmVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2hhcHRlciBzcGFuIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5jaGFwdGVyIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDJweCBncmF5O1xuICBjb2xvcjogZ3JheTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi50aW1lV2FycCxcbi5kaWFsb2d1ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aW1lV2FycCB7XG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcbiAgaGVpZ2h0OiAxNnZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBzb2xpZCA1cHggcmdiKDg1LCA4NSwgODUpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDVzIGVhc2UtaW4tb3V0O1xufVxuXG4udHctY2VudGVyIHtcbiAgd2lkdGg6IDU1dnc7XG59XG5cbi50dy15ZWFyLFxuLnR3LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi51cmwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogN3ZoO1xuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNDMsIDQyLCA0Mik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzcyBlYXNlLWluLW91dDtcbn1cblxuLnllYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMnB4IHJnYig4NSwgODUsIDg1KTtcbiAgZm9udC1zaXplOiAuNXJlbTtcbiAgcGFkZGluZzogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi55ZWFyOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XG59XG5cbi5kaWFsb2d1ZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5kaWFsb2d1ZSBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDdzIGVhc2UtaW4tb3V0O1xufVxuXG4uZXllIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAydmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG9wYWNpdHk6IDA7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mdXp6eS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogLTIwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgei1pbmRleDogLTE7XG4gIG9wYWNpdHk6IDAuMDI7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNXMgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2hpZnQgMC4ycyBsaW5lYXIgaW5maW5pdGUgYm90aDtcbn1cblxuLm1vbmtleS10eXBlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBncmlkO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogNTB2dztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9ua2V5LXRpdGxlIHtcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcbiAgZm9udC1mYW1pbHk6IGdhbWVjdWJlbjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogLjZyZW07XG59XG5cbi5sZXR0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uY29ycmVjdCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmluY29ycmVjdCB7XG4gIGNvbG9yOiBicm93bjtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcbiAgd2lkdGg6IDA7XG59XG5cbi5saXR0bGUtc2hha2Uge1xuICBhbmltYXRpb246IHNoYWtlIDAuNnMgc3RlcC1lbmQ7XG59XG5cbi5tZWRpdW0tc2hha2Uge1xuICBhbmltYXRpb246IGJpZ1NoYWtlIDAuNnMgc3RlcC1lbmQ7XG59XG5cbi5iaWctc2hha2Uge1xuICBhbmltYXRpb246IGJpZ1NoYWtlIDAuNHMgc3RlcC1lbmQgaW5maW5pdGUgYm90aDtcbn1cblxuQGtleWZyYW1lcyBzaGlmdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKSB0cmFuc2xhdGVZKDEwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSkgdHJhbnNsYXRlWSgtMTAlKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuXG4gIDIwJSxcbiAgNDAlLFxuICA2MCUsXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC44cmVtKTtcbiAgfVxuXG4gIDEwJSxcbiAgMzAlLFxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pO1xuICB9XG5cbiAgNzAlLFxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBiaWdTaGFrZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLS40cmVtKSB0cmFuc2xhdGVZKC0uNHJlbSk7XG4gIH1cblxuICAyMCUsXG4gIDQwJSxcbiAgNjAlLFxuICA4MCUgeyBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjhyZW0pIHRyYW5zbGF0ZVkoLS40cmVtKTtcbiAgfVxuXG4gIDEwJSxcbiAgMzAlLFxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pIHRyYW5zbGF0ZVkoLjhyZW0pO1xuICB9XG5cbiAgNzAlLFxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjhyZW0pIHRyYW5zbGF0ZVkoLjhyZW0pO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2xvZ28uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUF3QztBQUMxQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7O0VBRTdCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLFVBQVU7O0VBRVYsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHFCQUFxQjs7RUFFckIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFVBQVU7O0VBRVYsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5REFBOEM7RUFDOUMsV0FBVztFQUNYLGFBQWE7O0VBRWIsbUNBQW1DO0VBQ25DLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRTtJQUNFLDBDQUEwQztFQUM1Qzs7RUFFQTtJQUNFLDRDQUE0QztFQUM5QztBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7Ozs7SUFJRSw0QkFBNEI7RUFDOUI7O0VBRUE7OztJQUdFLDZCQUE2QjtFQUMvQjs7RUFFQTs7SUFFRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0RBQWdEO0VBQ2xEOztFQUVBOzs7O0lBSUUsK0NBQStDO0VBQ2pEOztFQUVBOzs7SUFHRSwrQ0FBK0M7RUFDakQ7O0VBRUE7O0lBRUUsOENBQThDO0VBQ2hEO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogZ2FtZWN1YmVuO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9nYW1lY3ViZW4vR2FtZUN1YmUudHRmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgc3JjOiB1cmwoLi4vZm9udC9Sb2JvdG8vUm9ib3RvLVJlZ3VsYXIudHRmKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uY2hhcHRlciB7XFxuICBmb250LWZhbWlseTogZ2FtZWN1YmVuO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMi4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNoYXB0ZXIgc3BhbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5jaGFwdGVyIGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IHNvbGlkIDJweCBncmF5O1xcbiAgY29sb3I6IGdyYXk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50aW1lV2FycCxcXG4uZGlhbG9ndWUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRpbWVXYXJwIHtcXG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkIDVweCByZ2IoODUsIDg1LCA4NSk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnR3LWNlbnRlciB7XFxuICB3aWR0aDogNTV2dztcXG59XFxuXFxuLnR3LXllYXIsXFxuLnR3LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udXJsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLnRpbWVsaW5lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBib3JkZXI6IHNvbGlkIDJweCByZ2IoNDMsIDQyLCA0Mik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMDtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi55ZWFyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYig4NSwgODUsIDg1KTtcXG4gIGZvbnQtc2l6ZTogLjVyZW07XFxuICBwYWRkaW5nOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnllYXI6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XFxufVxcblxcbi5kaWFsb2d1ZSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uZGlhbG9ndWUgcCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDdzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZXllIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogMnZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3BhY2l0eTogMDtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZnV6enktb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogLTIwMCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL3doaXRlTm9pc2VWMy5qcGcpO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwLjAyO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNXMgZWFzZS1pbi1vdXQ7XFxuICBhbmltYXRpb246IHNoaWZ0IDAuMnMgbGluZWFyIGluZmluaXRlIGJvdGg7XFxufVxcblxcbi5tb25rZXktdHlwZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjIsIDYyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb25rZXktdGl0bGUge1xcbiAgY29sb3I6IHJnYigzNiwgMzYsIDM2KTtcXG4gIGZvbnQtZmFtaWx5OiBnYW1lY3ViZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vbmtleS10aXRsZSBwOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAuNnJlbTtcXG59XFxuXFxuLmxldHRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uY29ycmVjdCB7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5pbmNvcnJlY3Qge1xcbiAgY29sb3I6IGJyb3duO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOCwgMTk3LCAxOCk7XFxuICB3aWR0aDogMDtcXG59XFxuXFxuLmxpdHRsZS1zaGFrZSB7XFxuICBhbmltYXRpb246IHNoYWtlIDAuNnMgc3RlcC1lbmQ7XFxufVxcblxcbi5tZWRpdW0tc2hha2Uge1xcbiAgYW5pbWF0aW9uOiBiaWdTaGFrZSAwLjZzIHN0ZXAtZW5kO1xcbn1cXG5cXG4uYmlnLXNoYWtlIHtcXG4gIGFuaW1hdGlvbjogYmlnU2hha2UgMC40cyBzdGVwLWVuZCBpbmZpbml0ZSBib3RoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoaWZ0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSkgdHJhbnNsYXRlWSgxMCUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAlKSB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcblxcbiAgMjAlLFxcbiAgNDAlLFxcbiAgNjAlLFxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC44cmVtKTtcXG4gIH1cXG5cXG4gIDEwJSxcXG4gIDMwJSxcXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pO1xcbiAgfVxcblxcbiAgNzAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBiaWdTaGFrZSB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pIHRyYW5zbGF0ZVkoLS40cmVtKTtcXG4gIH1cXG5cXG4gIDIwJSxcXG4gIDQwJSxcXG4gIDYwJSxcXG4gIDgwJSB7IFxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLjhyZW0pIHRyYW5zbGF0ZVkoLS40cmVtKTtcXG4gIH1cXG5cXG4gIDEwJSxcXG4gIDMwJSxcXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtLjRyZW0pIHRyYW5zbGF0ZVkoLjhyZW0pO1xcbiAgfVxcblxcbiAgNzAlLFxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCguOHJlbSkgdHJhbnNsYXRlWSguOHJlbSk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9sb2dvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvbG9nby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHBsYXlXcm9uZygpIHtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhRXJyYWRhJyk7XG4gIGF1ZGlvLnZvbHVtZSA9IDAuNztcbiAgYXVkaW8ucGxheSgpO1xufVxuXG5mdW5jdGlvbiBwbGF5UmlnaHQoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWNsYUNvcnJldGEnKTtcbiAgYXVkaW8udm9sdW1lID0gMC4yO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlFYXJ0aHF1YWtlKHZvbHVtZSwgdHlwZSwgZHVyYXRpb24pIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpO1xuICBhdWRpby52b2x1bWUgPSB2b2x1bWU7XG4gIGF1ZGlvLnBsYXkoKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodHlwZSk7XG5cbiAgaWYgKHR5cGUgIT09ICdiaWctc2hha2UnKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0eXBlKTtcbiAgICB9LCA3MDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCkge1xuICBpZiAoYXVkaW9FbGVtZW50LnZvbHVtZSA+PSAwLjQ1KSB7XG4gICAgYXVkaW9FbGVtZW50LnZvbHVtZSA9IDAuNDU7XG4gICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICB0aW1lV2FycC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHJldHVybjtcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lICs9IDAuMDU7XG4gICAgaW5jcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcbiAgfSwgODAwKTtcbn1cblxuZnVuY3Rpb24gZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KSB7XG4gIGlmIChhdWRpb0VsZW1lbnQudm9sdW1lIDw9IDAuMSkge1xuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgPSAwLjA1O1xuICAgIHJldHVybjtcbiAgfVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lIC09IDAuMDc7XG4gICAgZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KTtcbiAgfSwgMzAwKTtcbn1cblxuZXhwb3J0IHsgcGxheVJpZ2h0LCBwbGF5V3JvbmcsIHBsYXlFYXJ0aHF1YWtlLCBkZWNyZWFzZVZvbHVtZSwgaW5jcmVhc2VWb2x1bWUgfTtcbiIsImltcG9ydCB7IHBsYXlSaWdodCwgcGxheVdyb25nLCBwbGF5RWFydGhxdWFrZSwgZGVjcmVhc2VWb2x1bWUgfSBmcm9tIFwiLi9hdWRpby5qc1wiO1xuXG5sZXQgbGFzdFByZXNzZWRLZXkgPSAnJztcbmxldCBjb3JyZWN0Q291bnQgPSAwO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXB0Y2hhKCkge1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gIC8vIENyaWEgYSBkaXYgY29tIGEgY2xhc3NlIFwibW9ua2V5LXR5cGVcIi5cbiAgdmFyIG1vbmtleVR5cGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9ua2V5VHlwZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdHlwZScpO1xuXG4gIC8vIENyaWEgYSBkaXYgY29tIGEgY2xhc3NlIFwibW9ua2V5LXRpdGxlXCIgZSBkZWZpbmUgbyB0ZXh0b1xuICB2YXIgbW9ua2V5VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9ua2V5VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXRpdGxlJyk7XG4gIHZhciBjYXB0Y2hhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjYXB0Y2hhLnRleHRDb250ZW50ID0gJ0NBUFRDSEEnO1xuICB2YXIgY2FwdGNoYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjYXB0Y2hhRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAncHJvdmUgc3VhIGh1bWFuaWRhZGUnO1xuICBtb25rZXlUaXRsZURpdi5hcHBlbmRDaGlsZChjYXB0Y2hhKTtcbiAgbW9ua2V5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2FwdGNoYURlc2NyaXB0aW9uKTtcblxuICAvLyBDcmlhIGFzIGRpdnMgaW50ZXJuYXMgY29tIGFzIGNsYXNzZXMgXCJsZXR0ZXJcIiBlIFwicHJvZ3Jlc3MtYmFyXCJcbiAgdmFyIGxldHRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnbGV0dGVyJyk7XG5cbiAgdmFyIHByb2dyZXNzQmFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByb2dyZXNzQmFyRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzLWJhcicpO1xuXG4gIC8vIEFkaWNpb25hIGFzIGRpdnMgaW50ZXJuYXMgw6AgZGl2IFwibW9ua2V5LXR5cGVcIlxuICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKG1vbmtleVRpdGxlRGl2KTtcbiAgbW9ua2V5VHlwZURpdi5hcHBlbmRDaGlsZChsZXR0ZXJEaXYpO1xuICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKHByb2dyZXNzQmFyRGl2KTtcblxuICAvLyBBZGljaW9uYSBhIGRpdiBcIm1vbmtleS10eXBlXCIgYW8gY29udGFpbmVyIGV4aXN0ZW50ZVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9ua2V5VHlwZURpdik7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTGV0dGVyKCkge1xuICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWxwaGFiZXQubGVuZ3RoKTtcbiAgcmV0dXJuIGFscGhhYmV0W3JhbmRvbUluZGV4XTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGV0dGVyKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGhhbmRsZUtleVByZXNzKTtcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5sZXR0ZXInKTtcblxuICBsYXN0UHJlc3NlZEtleSA9ICcnO1xuICBjb25zdCByYW5kb21MZXR0ZXIgPSBnZW5lcmF0ZVJhbmRvbUxldHRlcigpO1xuICBsZXR0ZXJEaXYudGV4dENvbnRlbnQgPSByYW5kb21MZXR0ZXI7XG4gIGxldHRlckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdjb3JyZWN0Jyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyJyk7XG4gIGNvbnN0IHByb2dyZXNzQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5wcm9ncmVzcy1iYXInKTtcbiAgY29uc3QgbW9ua2V5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpO1xuXG4gIGNvbnN0IHByZXNzZWRLZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleUNvZGUpO1xuICBjb25zdCBjdXJyZW50TGV0dGVyID0gbGV0dGVyRGl2LnRleHRDb250ZW50O1xuXG4gIGlmIChcbiAgICAocHJlc3NlZEtleS50b1VwcGVyQ2FzZSgpID09PSBjdXJyZW50TGV0dGVyIHx8XG4gICAgICBwcmVzc2VkS2V5LnRvTG93ZXJDYXNlKCkgPT09IGN1cnJlbnRMZXR0ZXIpICYmXG4gICAgcHJlc3NlZEtleSAhPT0gbGFzdFByZXNzZWRLZXlcbiAgKSB7XG4gICAgbGFzdFByZXNzZWRLZXkgPSBwcmVzc2VkS2V5O1xuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgcGxheVJpZ2h0KCk7XG4gICAgY29ycmVjdENvdW50Kys7XG4gICAgY29uc3QgZnV6enkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZnV6enktb3ZlcmxheScpO1xuICAgIGZ1enp5LnN0eWxlLm9wYWNpdHkgKz0gMC4wNTtcblxuICAgIC8vIEF0dWFsaXphIGEgbGFyZ3VyYSBkYSBiYXJyYSBkZSBwcm9ncmVzc29cbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGNvcnJlY3RDb3VudCAqIDUgKyAnJSc7XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAyIHx8IGNvcnJlY3RDb3VudCA9PT0gNikge1xuICAgICAgcGxheUVhcnRocXVha2UoMC44LCAnbGl0dGxlLXNoYWtlJywgNzAwKTtcbiAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJykpO1xuICAgIH1cblxuICAgIGlmIChjb3JyZWN0Q291bnQgPT09IDE1KSB7XG4gICAgICBwbGF5RWFydGhxdWFrZSgwLjgsICdtZWRpdW0tc2hha2UnLCA3MDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJykpO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAyMCkge1xuICAgICAgcGxheUVhcnRocXVha2UoMSwgJ2JpZy1zaGFrZScpO1xuICAgICAgY29uc3QgZXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV5ZScpO1xuICAgICAgZXllLnN0eWxlLm9wYWNpdHkgPSAwLjI1O1xuICAgICAgbW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ3VlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlIHAnKTtcbiAgICAgICAgY29uc3QgZGlhbG9ndWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIGRpYWxvZ3VlLnRleHRDb250ZW50ID0gJ09icmlnYWRvISc7XG4gICAgICAgIGRpYWxvZ3VlRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7ICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi4vZGlzdC9hdG8xLXYxLmh0bWwnO1xuICAgICAgICB9LCA5NzUwKTtcbiAgICAgIH0sIDQwMDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRlY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlYXJ0aHF1YWtlJykpO1xuICAgICAgICBkZWNyZWFzZVZvbHVtZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9pc2UnKSk7XG4gICAgICAgIGV5ZS5zdHlsZS5oZWlnaHQgPSAnMjB2dyc7XG4gICAgICB9LCA5NzUwKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUxldHRlcigpO1xuICAgIH0sIDI1NSk7XG4gIH0gZWxzZSBpZiAobW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgcGxheVdyb25nKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaW5jb3JyZWN0Jyk7XG4gICAgfSwgNTAwKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjcmVhdGVDYXB0Y2hhLFxuICB1cGRhdGVMZXR0ZXJcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJwcm9sb2dvXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL2Nzcy9wcm9sb2dvLmNzc1wiO1xuaW1wb3J0IHsgaW5jcmVhc2VWb2x1bWUgfSBmcm9tIFwiLi9hdWRpby5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2FwdGNoYSwgdXBkYXRlTGV0dGVyIH0gZnJvbSBcIi4vY2FwdGNoYS5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICB2YXIgeWVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55ZWFyJyk7XG4gIHllYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJzsgIFxuICBjb25zdCBzdGFydENoYXB0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKTtcblxuICBzdGFydENoYXB0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgc3RhcnRDaGFwdGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB2YXIgY2hhcHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFwdGVyJyk7XG4gICAgY2hhcHRlci5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNoYXB0ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2lzZScpO1xuICAgICAgYXVkaW8udm9sdW1lID0gMC4xO1xuICAgICAgYXVkaW8ucGxheSgpO1xuXG4gICAgICBcbiAgICAgIFxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XG4gICAgICAgIGluY3JlYXNlVm9sdW1lKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub2lzZScpKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmdXp6eS5zdHlsZS5vcGFjaXR5ID0gMC4xNTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZVRleHQoKTtcbiAgICAgICAgfSwgNjUwMCk7XG4gICAgICB9LCAzMDAwKTsgICAgICBcbiAgICB9LCAzMDAwKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlVGV4dCgpIHtcbiAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZSBwJyk7XG4gICAgY29uc3QgZGlhbG9ndWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9ndWUnKTtcbiAgICBjb25zdCB0ZXh0cyA9IFtcbiAgICAgIFsnUG9yIGZhdm9yLi4uJywgMjUwMCwgNDAwMF0sXG4gICAgICBbJ01lIGFqdWRhIScsIDI1MDAsIDM1MDBdLFxuICAgICAgWydWb2PDqiBwcmVjaXNhIG1lIHNhbHZhciwgZWxlcyBxdWVyZW0gYWNhYmFyIGNvbWlnby4nLCAzNTAwLCA2MDAwXSxcbiAgICAgIFsnQXF1aSwgdG9tYSBpc3NvLicsIDI1MDAsIDEwMDBdLFxuICAgICAgW1xuICAgICAgICAnRXNzYSDDqSB1bWEgbcOhcXVpbmEgZG8gdGVtcG8sIGNvbSBlbGEgdm9jw6ogcG9kZSB2b2x0YXIgYW8gcGFzc2FkbyBvdSBpciBwYXJhIG8gZnV0dXJvLicsXG4gICAgICAgIDUwMDAsXG4gICAgICAgIDMwMDAsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnVGVudGUgdm9jw6ogbWVzbW8sIGNsaXF1ZSBubyBhbm8gZSBpbXBlw6dhIHF1ZSBpc3NvIGFjb250ZcOnYS4nLFxuICAgICAgICA4MDAwLFxuICAgICAgICAxMDAsXG4gICAgICBdLFxuICAgIF07XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlVGV4dCgpIHtcbiAgICAgIGlmIChpbmRleCA8IHRleHRzLmxlbmd0aCkge1xuICAgICAgICBsZXQgYXJyID0gdGV4dHNbaW5kZXhdO1xuICAgICAgICBkaWFsb2d1ZS50ZXh0Q29udGVudCA9IGFyclswXTtcbiAgICAgICAgZGlhbG9ndWVEaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgaGlkZURpYWxvZ3VlKGFyclsxXSwgYXJyWzJdKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAzKSB7XG4gICAgICAgICAgY29uc3QgdGltZVdhcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKTtcbiAgICAgICAgICB0aW1lV2FycC5zdHlsZS5vcGFjaXR5ID0gMC43O1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSA1KXtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVsaW5lJyk7XG4gICAgICAgICAgICB0aW1lbGluZS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHllYXJCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdncmlkJzsgIFxuICAgICAgICB9XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XG4gICAgICAgIGZ1enp5LnN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZURpYWxvZ3VlKHRpbWVEdXJhdGlvbiwgdGltZUNoYW5nZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpYWxvZ3VlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVRleHQoKTtcbiAgICAgICAgfSwgdGltZUNoYW5nZSk7XG4gICAgICB9LCB0aW1lRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHVwZGF0ZVRleHQoKTtcbiAgfVxuXG4gIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcbiAgeWVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjcmVhdGVDYXB0Y2hhKClcbiAgICB1cGRhdGVMZXR0ZXIoKVxuICAgIHllYXJCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICB9KVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=