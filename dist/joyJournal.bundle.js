/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  margin-bottom: 40px;
  align-items: center;
  justify-content: center;
  font-size: 2.5vh;
}

.blur {
  position: absolute;
  width: 100vw;
  height: 190vh;
  opacity: 0;
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
`, "",{"version":3,"sources":["webpack://./src/css/joyJournal.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: roboto;\r\n  src: url(../font/Roboto/Roboto-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: bebas;\r\n  src: url(../font/Bebas_Neue/BebasNeue-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: oldMoodle;\r\n  src: url(../font/Old_Standard_TT/OldStandardTT-Bold.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: compactz;\r\n  src: url(../font/compact/Compact-Regular.ttf);\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: roboto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: black;\r\n  height: auto;\r\n  width: 100vw;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  font-family: bebas;\r\n  background-color: #570101;\r\n  width: 100vw;\r\n  height: 18vh;\r\n  color: rgb(175, 175, 175);\r\n  font-weight: bolder;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.joy-title {\r\n  border-right: solid 2px gray;\r\n  width: 10vw;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 5vh;\r\n}\r\n\r\n.content {\r\n  width: 70vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 25px;\r\n  margin: 50px 0 50px 0;\r\n  background-color: gray;\r\n}\r\n\r\n.content-title {\r\n  background-color: rgb(161, 160, 160);\r\n  font-family: bebas;\r\n  width: calc(100% - 4vh);\r\n  font-size: 7vh;\r\n  padding: 2vh;\r\n  text-align: center;\r\n}\r\n\r\n.content-title-2016 {\r\n  font-family: bebas;\r\n  font-size: 6vh;\r\n  padding: 2vh;\r\n  text-align: center;\r\n}\r\n\r\n.img-2016 {\r\n  height: 50vh;\r\n  width: auto;\r\n  opacity: 0.7;\r\n  filter: grayscale(65%);\r\n}\r\n\r\n.content p {\r\n  font-size: 2.5vh;\r\n  padding: 0 2vh 2vh 2vh;\r\n}\r\n\r\n.timeWarp {\r\n  font-family: oldMoodle;\r\n  width: calc(90vw - 10px);\r\n  height: 16vh;\r\n  background-color: rgb(43, 42, 42);\r\n  color: white;\r\n  border: solid 1vh rgb(85, 85, 85);\r\n  border-top: none;\r\n  border-radius: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\n.tw-center {\r\n  width: 55vw;\r\n}\r\n\r\n.tw-year,\r\n.tw-title {\r\n  font-size: 4vh;\r\n}\r\n\r\n.url {\r\n  font-family: roboto;\r\n  width: 100%;\r\n  height: 3vh;\r\n  background-color: aliceblue;\r\n  border: solid .3vh black;\r\n  opacity: 0.8;\r\n  color: black;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.timeline {\r\n  width: 100%;\r\n  height: 7vh;\r\n  border: solid .7vh rgb(43, 42, 42);\r\n  display: flex;\r\n}\r\n\r\n.year {\r\n  font-family: roboto;\r\n  height: 100%;\r\n  width: 3.5%;\r\n  border: solid .5vh rgb(85, 85, 85);\r\n  font-size: 1.5vh;\r\n  padding: .7vh;\r\n  cursor: pointer;\r\n  display: grid;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.year:hover {\r\n  background-color: rgb(70, 68, 68);\r\n}\r\n\r\n.dino {\r\n  position: absolute;\r\n  height: 50vh;\r\n}\r\n\r\n.left {\r\n  left: -25vh;\r\n  transform: rotate(45deg);\r\n}\r\n\r\n.right {\r\n  right: -27vh;\r\n  transform: rotate(320deg) scaleX(-1);\r\n}\r\n\r\n.top {\r\n  top: 20vh;\r\n}\r\n\r\n.bottom {\r\n  top: 80vh;\r\n}\r\n\r\n.weird {\r\n  top: 135vh;\r\n  right: -27vh;\r\n  transform: rotate(320deg) scaleX(-1);\r\n  animation: moveImage 1.2s forwards;\r\n  animation-play-state: paused;\r\n}\r\n\r\np i {\r\n  font-size: 2.7vh;\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n}\r\n\r\n.text-img {\r\n  display: flex;\r\n  gap: 3vh;\r\n  align-items: center;\r\n}\r\n\r\n.text-img img {\r\n  height: 20vh;\r\n  border: solid .8vh #570101;\r\n  padding: 5px;\r\n}\r\n\r\n.dialogue {\r\n  position: fixed;\r\n  bottom: 0;\r\n  display: none;\r\n  width: 100vw;\r\n  height: 10vh;\r\n  background-color: rgb(111, 118, 133);\r\n  margin-bottom: 40px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2.5vh;\r\n}\r\n\r\n.blur {\r\n  position: absolute;\r\n  width: 100vw;\r\n  height: 190vh;\r\n  opacity: 0;\r\n  display: none;\r\n  background-color: black;\r\n\r\n  transition: opacity 1.5s ease-in-out;\r\n}\r\n\r\n.monkey-type {\r\n  position: fixed;\r\n  display: grid;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  grid-template-rows: 1fr 3fr 2fr;\r\n  height: 40vh;\r\n  width: 50vw;\r\n  background-color: rgb(65, 62, 62);\r\n  border-radius: 5px;\r\n  color: black;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.monkey-title {\r\n  color: rgb(36, 36, 36);\r\n  font-family: roboto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n}\r\n\r\n.content .monkey-title p {\r\n  padding: 0;\r\n}\r\n\r\n.monkey-title p:first-child { \r\n  font-size: 4vh;\r\n}\r\n\r\n.monkey-title p:last-child {\r\n  font-size: 2.8vh;\r\n}\r\n\r\n.letter-div {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 8vh;\r\n}\r\n\r\n.correct {\r\n  color: green;\r\n}\r\n\r\n.incorrect {\r\n  color: brown;\r\n}\r\n\r\n.progress-bar {\r\n  height: 20px;\r\n  background-color: rgb(18, 197, 18);\r\n  width: 0;\r\n}\r\n\r\n.popup {\r\n  font-family: roboto;\r\n  height: 70vh;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: rgb(83, 82, 82);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  opacity: 0;\r\n  z-index: 2;\r\n}\r\n\r\n.popup-img {\r\n  height: 65vh;\r\n}\r\n\r\n.popup button {\r\n  height: 5vh;\r\n  width: 100%;\r\n}\r\n\r\n@keyframes moveImage {\r\n  from {\r\n    right: -25vh; /* Posição inicial */\r\n  }\r\n  to {\r\n    right: -55vh; /* Posição final */\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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




/***/ }),

/***/ "./src/font/Bebas_Neue/BebasNeue-Regular.ttf":
/*!***************************************************!*\
  !*** ./src/font/Bebas_Neue/BebasNeue-Regular.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12e3683f9192436a7be8.ttf";

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
/* harmony import */ var _timeMachine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeMachine.js */ "./src/scripts/timeMachine.js");
/* harmony import */ var _captchaV2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captchaV2.js */ "./src/scripts/captchaV2.js");
/* harmony import */ var _audio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio.js */ "./src/scripts/audio.js");
/* harmony import */ var _img_popup_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/popup.gif */ "./src/img/popup.gif");






let jumpscare = false;

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

    url.textContent = 'http://www.joyjournal.com/';
    listenYears();
  })
  .catch((error) =>
    console.error('Erro ao carregar a página preservada:', error)
  );

document.addEventListener('DOMContentLoaded', function () {
  addEvent();
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
      (0,_captchaV2_js__WEBPACK_IMPORTED_MODULE_2__.createCaptcha)(div.textContent);
      if(jumpscare === false){
        window.addEventListener('scroll', playPopup);
      }
    });
  });
}

function playPopup() {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= (40 * window.innerHeight) / 100) {
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
      (0,_audio_js__WEBPACK_IMPORTED_MODULE_3__.playHappy)();
      closePopup();
      popupDiv.style.opacity = 1;
    }, 3000);
    jumpscare = true;
    
  }
}

function closePopup() {
  const popup = document.querySelector('.popup');
  const popupButton = document.querySelector('.popup button');

  popupButton.addEventListener('click', function () {
    popup.style.display = 'none';
    (0,_audio_js__WEBPACK_IMPORTED_MODULE_3__.stopHappy)();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam95Sm91cm5hbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsNENBQTRDLDRKQUEyRDtBQUN2Ryw0Q0FBNEMsd0tBQWlFO0FBQzdHLDRDQUE0QyxrSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLE9BQU8seUZBQXlGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLHNCQUFzQixNQUFNLEtBQUssc0JBQXNCLE1BQU0scUNBQXFDLDBCQUEwQixrREFBa0QsS0FBSyxvQkFBb0IseUJBQXlCLHlEQUF5RCxLQUFLLG9CQUFvQiw2QkFBNkIsK0RBQStELEtBQUssb0JBQW9CLDRCQUE0QixvREFBb0QsS0FBSyxXQUFXLGlCQUFpQixnQkFBZ0IsS0FBSyxjQUFjLDBCQUEwQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsbUJBQW1CLG1CQUFtQix5QkFBeUIsS0FBSyxnQkFBZ0IseUJBQXlCLGdDQUFnQyxtQkFBbUIsbUJBQW1CLGdDQUFnQywwQkFBMEIsb0JBQW9CLDBCQUEwQixLQUFLLG9CQUFvQixtQ0FBbUMsa0JBQWtCLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIscUJBQXFCLEtBQUssa0JBQWtCLGtCQUFrQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsNEJBQTRCLDZCQUE2QixLQUFLLHdCQUF3QiwyQ0FBMkMseUJBQXlCLDhCQUE4QixxQkFBcUIsbUJBQW1CLHlCQUF5QixLQUFLLDZCQUE2Qix5QkFBeUIscUJBQXFCLG1CQUFtQix5QkFBeUIsS0FBSyxtQkFBbUIsbUJBQW1CLGtCQUFrQixtQkFBbUIsNkJBQTZCLEtBQUssb0JBQW9CLHVCQUF1Qiw2QkFBNkIsS0FBSyxtQkFBbUIsNkJBQTZCLCtCQUErQixtQkFBbUIsd0NBQXdDLG1CQUFtQix3Q0FBd0MsdUJBQXVCLDBCQUEwQixvQkFBb0IsMEJBQTBCLG9DQUFvQyx5QkFBeUIsYUFBYSxjQUFjLGVBQWUsbUJBQW1CLEtBQUssb0JBQW9CLGtCQUFrQixLQUFLLGdDQUFnQyxxQkFBcUIsS0FBSyxjQUFjLDBCQUEwQixrQkFBa0Isa0JBQWtCLGtDQUFrQywrQkFBK0IsbUJBQW1CLG1CQUFtQix1QkFBdUIsS0FBSyxtQkFBbUIsa0JBQWtCLGtCQUFrQix5Q0FBeUMsb0JBQW9CLEtBQUssZUFBZSwwQkFBMEIsbUJBQW1CLGtCQUFrQix5Q0FBeUMsdUJBQXVCLG9CQUFvQixzQkFBc0Isb0JBQW9CLDBCQUEwQiw0QkFBNEIsS0FBSyxxQkFBcUIsd0NBQXdDLEtBQUssZUFBZSx5QkFBeUIsbUJBQW1CLEtBQUssZUFBZSxrQkFBa0IsK0JBQStCLEtBQUssZ0JBQWdCLG1CQUFtQiwyQ0FBMkMsS0FBSyxjQUFjLGdCQUFnQixLQUFLLGlCQUFpQixnQkFBZ0IsS0FBSyxnQkFBZ0IsaUJBQWlCLG1CQUFtQiwyQ0FBMkMseUNBQXlDLG1DQUFtQyxLQUFLLGFBQWEsdUJBQXVCLHNCQUFzQixpQ0FBaUMsS0FBSyxtQkFBbUIsb0JBQW9CLGVBQWUsMEJBQTBCLEtBQUssdUJBQXVCLG1CQUFtQixpQ0FBaUMsbUJBQW1CLEtBQUssbUJBQW1CLHNCQUFzQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixtQkFBbUIsMkNBQTJDLDBCQUEwQiwwQkFBMEIsOEJBQThCLHVCQUF1QixLQUFLLGVBQWUseUJBQXlCLG1CQUFtQixvQkFBb0IsaUJBQWlCLG9CQUFvQiw4QkFBOEIsK0NBQStDLEtBQUssc0JBQXNCLHNCQUFzQixvQkFBb0IsZUFBZSxnQkFBZ0IsdUNBQXVDLHNDQUFzQyxtQkFBbUIsa0JBQWtCLHdDQUF3Qyx5QkFBeUIsbUJBQW1CLDBCQUEwQiw0QkFBNEIsS0FBSyx1QkFBdUIsNkJBQTZCLDBCQUEwQixvQkFBb0IsNkJBQTZCLHlCQUF5Qiw4QkFBOEIsS0FBSyxrQ0FBa0MsaUJBQWlCLEtBQUssc0NBQXNDLHFCQUFxQixLQUFLLG9DQUFvQyx1QkFBdUIsS0FBSyxxQkFBcUIsb0JBQW9CLDBCQUEwQiw4QkFBOEIscUJBQXFCLEtBQUssa0JBQWtCLG1CQUFtQixLQUFLLG9CQUFvQixtQkFBbUIsS0FBSyx1QkFBdUIsbUJBQW1CLHlDQUF5QyxlQUFlLEtBQUssZ0JBQWdCLDBCQUEwQixtQkFBbUIsc0JBQXNCLGVBQWUsZ0JBQWdCLHVDQUF1Qyx3Q0FBd0Msb0JBQW9CLDZCQUE2QiwwQkFBMEIsaUJBQWlCLGlCQUFpQixLQUFLLG9CQUFvQixtQkFBbUIsS0FBSyx1QkFBdUIsa0JBQWtCLGtCQUFrQixLQUFLLDhCQUE4QixZQUFZLHNCQUFzQiw0QkFBNEIsVUFBVSxzQkFBc0IsMEJBQTBCLEtBQUssdUJBQXVCO0FBQ2g2UTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2xWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBMkc7QUFDM0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywyRkFBTzs7OztBQUlxRDtBQUM3RSxPQUFPLGlFQUFlLDJGQUFPLElBQUksMkZBQU8sVUFBVSwyRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RHBEO0FBQ0Q7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBLElBQUksb0RBQVM7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VDOzs7Ozs7Ozs7Ozs7Ozs7QUM3SHZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixZQUFZO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxZQUFZO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pEekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ErQjtBQUNrQjtBQUNGO0FBQ0c7QUFDYjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQWE7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMkNBQUs7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQVM7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFTO0FBQ2IsR0FBRztBQUNILEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9jc3Mvam95Sm91cm5hbC5jc3MiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2Nzcy9qb3lKb3VybmFsLmNzcz8zOTUyIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9hdWRpby5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL2NhcHRjaGFWMi5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zY3JpcHRzL3RpbWVNYWNoaW5lLmpzIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvc2NyaXB0cy9qb3lKb3VybmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250L0JlYmFzX05ldWUvQmViYXNOZXVlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vZm9udC9PbGRfU3RhbmRhcmRfVFQvT2xkU3RhbmRhcmRUVC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4uL2ZvbnQvY29tcGFjdC9Db21wYWN0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogYmViYXM7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBjb21wYWN0ejtcclxuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcclxufVxyXG5cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzAxMDE7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTh2aDtcclxuICBjb2xvcjogcmdiKDE3NSwgMTc1LCAxNzUpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uam95LXRpdGxlIHtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBncmF5O1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNXZoO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyNXB4O1xyXG4gIG1hcmdpbjogNTBweCAwIDUwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uY29udGVudC10aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYwLCAxNjApO1xyXG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNHZoKTtcclxuICBmb250LXNpemU6IDd2aDtcclxuICBwYWRkaW5nOiAydmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudC10aXRsZS0yMDE2IHtcclxuICBmb250LWZhbWlseTogYmViYXM7XHJcbiAgZm9udC1zaXplOiA2dmg7XHJcbiAgcGFkZGluZzogMnZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy0yMDE2IHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDY1JSk7XHJcbn1cclxuXHJcbi5jb250ZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMi41dmg7XHJcbiAgcGFkZGluZzogMCAydmggMnZoIDJ2aDtcclxufVxyXG5cclxuLnRpbWVXYXJwIHtcclxuICBmb250LWZhbWlseTogb2xkTW9vZGxlO1xyXG4gIHdpZHRoOiBjYWxjKDkwdncgLSAxMHB4KTtcclxuICBoZWlnaHQ6IDE2dmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQzLCA0MiwgNDIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udHctY2VudGVyIHtcclxuICB3aWR0aDogNTV2dztcclxufVxyXG5cclxuLnR3LXllYXIsXHJcbi50dy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0dmg7XHJcbn1cclxuXHJcbi51cmwge1xyXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMi41dmg7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3dmg7XHJcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ueWVhciB7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDMuNSU7XHJcbiAgYm9yZGVyOiBzb2xpZCAuNXZoIHJnYig4NSwgODUsIDg1KTtcclxuICBmb250LXNpemU6IDEuNXZoO1xyXG4gIHBhZGRpbmc6IC43dmg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi55ZWFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XHJcbn1cclxuXHJcbi5kaW5vIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgbGVmdDogLTI1dmg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIHJpZ2h0OiAtMjd2aDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjBkZWcpIHNjYWxlWCgtMSk7XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIHRvcDogMjB2aDtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgdG9wOiA4MHZoO1xyXG59XHJcblxyXG4ud2VpcmQge1xyXG4gIHRvcDogMTM1dmg7XHJcbiAgcmlnaHQ6IC0yN3ZoO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMyMGRlZykgc2NhbGVYKC0xKTtcclxuICBhbmltYXRpb246IG1vdmVJbWFnZSAxLjJzIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuXHJcbnAgaSB7XHJcbiAgZm9udC1zaXplOiAyLjd2aDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi50ZXh0LWltZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDN2aDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dC1pbWcgaW1nIHtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgYm9yZGVyOiBzb2xpZCAuOHZoICM1NzAxMDE7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZGlhbG9ndWUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDExOCwgMTMzKTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjV2aDtcclxufVxyXG5cclxuLmJsdXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxOTB2aDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm1vbmtleS10eXBlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA2MiwgNjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb25rZXktdGl0bGUge1xyXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XHJcbiAgZm9udC1mYW1pbHk6IHJvYm90bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCAubW9ua2V5LXRpdGxlIHAge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG59XHJcblxyXG4ubW9ua2V5LXRpdGxlIHA6bGFzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAyLjh2aDtcclxufVxyXG5cclxuLmxldHRlci1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDh2aDtcclxufVxyXG5cclxuLmNvcnJlY3Qge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmluY29ycmVjdCB7XHJcbiAgY29sb3I6IGJyb3duO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3MtYmFyIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAxOTcsIDE4KTtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLnBvcHVwIHtcclxuICBmb250LWZhbWlseTogcm9ib3RvO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODIsIDgyKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5wb3B1cC1pbWcge1xyXG4gIGhlaWdodDogNjV2aDtcclxufVxyXG5cclxuLnBvcHVwIGJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA1dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZUltYWdlIHtcclxuICBmcm9tIHtcclxuICAgIHJpZ2h0OiAtMjV2aDsgLyogUG9zacOnw6NvIGluaWNpYWwgKi9cclxuICB9XHJcbiAgdG8ge1xyXG4gICAgcmlnaHQ6IC01NXZoOyAvKiBQb3Npw6fDo28gZmluYWwgKi9cclxuICB9XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2pveUpvdXJuYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDRDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0Q0FBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQXdEO0FBQzFEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUE2QztBQUMvQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7RUFD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QUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFlBQVksRUFBRSxvQkFBb0I7RUFDcEM7RUFDQTtJQUNFLFlBQVksRUFBRSxrQkFBa0I7RUFDbEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBzcmM6IHVybCguLi9mb250L1JvYm90by9Sb2JvdG8tUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBiZWJhcztcXHJcXG4gIHNyYzogdXJsKC4uL2ZvbnQvQmViYXNfTmV1ZS9CZWJhc05ldWUtUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxyXFxuICBzcmM6IHVybCguLi9mb250L09sZF9TdGFuZGFyZF9UVC9PbGRTdGFuZGFyZFRULUJvbGQudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogY29tcGFjdHo7XFxyXFxuICBzcmM6IHVybCguLi9mb250L2NvbXBhY3QvQ29tcGFjdC1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBmb250LWZhbWlseTogYmViYXM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTcwMTAxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxOHZoO1xcclxcbiAgY29sb3I6IHJnYigxNzUsIDE3NSwgMTc1KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmpveS10aXRsZSB7XFxyXFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCBncmF5O1xcclxcbiAgd2lkdGg6IDEwdnc7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiA1dmg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiA3MHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyNXB4O1xcclxcbiAgbWFyZ2luOiA1MHB4IDAgNTBweCAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGl0bGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMTYwLCAxNjApO1xcclxcbiAgZm9udC1mYW1pbHk6IGJlYmFzO1xcclxcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDR2aCk7XFxyXFxuICBmb250LXNpemU6IDd2aDtcXHJcXG4gIHBhZGRpbmc6IDJ2aDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtdGl0bGUtMjAxNiB7XFxyXFxuICBmb250LWZhbWlseTogYmViYXM7XFxyXFxuICBmb250LXNpemU6IDZ2aDtcXHJcXG4gIHBhZGRpbmc6IDJ2aDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy0yMDE2IHtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbiAgZmlsdGVyOiBncmF5c2NhbGUoNjUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgcCB7XFxyXFxuICBmb250LXNpemU6IDIuNXZoO1xcclxcbiAgcGFkZGluZzogMCAydmggMnZoIDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpbWVXYXJwIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBvbGRNb29kbGU7XFxyXFxuICB3aWR0aDogY2FsYyg5MHZ3IC0gMTBweCk7XFxyXFxuICBoZWlnaHQ6IDE2dmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDF2aCByZ2IoODUsIDg1LCA4NSk7XFxyXFxuICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50dy1jZW50ZXIge1xcclxcbiAgd2lkdGg6IDU1dnc7XFxyXFxufVxcclxcblxcclxcbi50dy15ZWFyLFxcclxcbi50dy10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDR2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnVybCB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDN2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXHJcXG4gIGJvcmRlcjogc29saWQgLjN2aCBibGFjaztcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxyXFxufVxcclxcblxcclxcbi50aW1lbGluZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogN3ZoO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuN3ZoIHJnYig0MywgNDIsIDQyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi55ZWFyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiByb2JvdG87XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMy41JTtcXHJcXG4gIGJvcmRlcjogc29saWQgLjV2aCByZ2IoODUsIDg1LCA4NSk7XFxyXFxuICBmb250LXNpemU6IDEuNXZoO1xcclxcbiAgcGFkZGluZzogLjd2aDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ueWVhcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY4LCA2OCk7XFxyXFxufVxcclxcblxcclxcbi5kaW5vIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQge1xcclxcbiAgbGVmdDogLTI1dmg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi5yaWdodCB7XFxyXFxuICByaWdodDogLTI3dmg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjBkZWcpIHNjYWxlWCgtMSk7XFxyXFxufVxcclxcblxcclxcbi50b3Age1xcclxcbiAgdG9wOiAyMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tIHtcXHJcXG4gIHRvcDogODB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLndlaXJkIHtcXHJcXG4gIHRvcDogMTM1dmg7XFxyXFxuICByaWdodDogLTI3dmg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjBkZWcpIHNjYWxlWCgtMSk7XFxyXFxuICBhbmltYXRpb246IG1vdmVJbWFnZSAxLjJzIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXHJcXG59XFxyXFxuXFxyXFxucCBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi43dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtaW1nIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDN2aDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWltZyBpbWcge1xcclxcbiAgaGVpZ2h0OiAyMHZoO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAuOHZoICM1NzAxMDE7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kaWFsb2d1ZSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMSwgMTE4LCAxMzMpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41dmg7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTkwdmg7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ua2V5LXR5cGUge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcclxcbiAgaGVpZ2h0OiA0MHZoO1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDYyLCA2Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9ua2V5LXRpdGxlIHtcXHJcXG4gIGNvbG9yOiByZ2IoMzYsIDM2LCAzNik7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgLm1vbmtleS10aXRsZSBwIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdGl0bGUgcDpmaXJzdC1jaGlsZCB7IFxcclxcbiAgZm9udC1zaXplOiA0dmg7XFxyXFxufVxcclxcblxcclxcbi5tb25rZXktdGl0bGUgcDpsYXN0LWNoaWxkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi44dmg7XFxyXFxufVxcclxcblxcclxcbi5sZXR0ZXItZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDh2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvcnJlY3Qge1xcclxcbiAgY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5jb3JyZWN0IHtcXHJcXG4gIGNvbG9yOiBicm93bjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzLWJhciB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgsIDE5NywgMTgpO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBmb250LWZhbWlseTogcm9ib3RvO1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgODIsIDgyKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1nIHtcXHJcXG4gIGhlaWdodDogNjV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIGJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIG1vdmVJbWFnZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgcmlnaHQ6IC0yNXZoOyAvKiBQb3Npw6fDo28gaW5pY2lhbCAqL1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICByaWdodDogLTU1dmg7IC8qIFBvc2nDp8OjbyBmaW5hbCAqL1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vam95Sm91cm5hbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2pveUpvdXJuYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBwbGF5V3JvbmcoKSB7XHJcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhRXJyYWRhJyk7XHJcbiAgYXVkaW8udm9sdW1lID0gMC43O1xyXG4gIGF1ZGlvLnBsYXkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheVJpZ2h0KCkge1xyXG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWNsYUNvcnJldGEnKTtcclxuICBhdWRpby52b2x1bWUgPSAwLjI7XHJcbiAgYXVkaW8ucGxheSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGF5RWFydGhxdWFrZSh2b2x1bWUsIHR5cGUpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VhcnRocXVha2UnKTtcclxuICBhdWRpby52b2x1bWUgPSB2b2x1bWU7XHJcbiAgYXVkaW8ucGxheSgpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHR5cGUpO1xyXG5cclxuICBpZiAodHlwZSAhPT0gJ2JpZy1zaGFrZScpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSh0eXBlKTtcclxuICAgIH0sIDcwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpIHtcclxuICBpZiAoYXVkaW9FbGVtZW50LnZvbHVtZSA+PSAwLjQ1KSB7XHJcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lID0gMC40NTtcclxuICAgIGNvbnN0IHRpbWVXYXJwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWVXYXJwJyk7XHJcbiAgICB0aW1lV2FycC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGF1ZGlvRWxlbWVudC52b2x1bWUgKz0gMC4wNTtcclxuICAgIGluY3JlYXNlVm9sdW1lKGF1ZGlvRWxlbWVudCk7XHJcbiAgfSwgODAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjcmVhc2VWb2x1bWUoYXVkaW9FbGVtZW50KSB7XHJcbiAgaWYgKGF1ZGlvRWxlbWVudC52b2x1bWUgPD0gMC4xKSB7XHJcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lID0gMC4wNTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lIC09IDAuMDc7XHJcbiAgICBkZWNyZWFzZVZvbHVtZShhdWRpb0VsZW1lbnQpO1xyXG4gIH0sIDMwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlIYXBweSgpIHtcclxuICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFwcHknKTtcclxuICBhdWRpby52b2x1bWUgPSAxO1xyXG4gIGF1ZGlvLnBsYXkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcEhhcHB5KCkge1xyXG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYXBweScpO1xyXG4gIGF1ZGlvLnBhdXNlKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBwbGF5UmlnaHQsIHBsYXlXcm9uZywgcGxheUVhcnRocXVha2UsIGRlY3JlYXNlVm9sdW1lLCBpbmNyZWFzZVZvbHVtZSwgcGxheUhhcHB5LCBzdG9wSGFwcHkgfTtcclxuIiwiaW1wb3J0IHsgcGxheVJpZ2h0LCBwbGF5V3JvbmcgfSBmcm9tICcuL2F1ZGlvLmpzJztcclxuaW1wb3J0IHsgdGltZVRyYXZlbEpveSB9IGZyb20gJy4vdGltZU1hY2hpbmUuanMnO1xyXG5cclxubGV0IGxhc3RQcmVzc2VkS2V5ID0gJyc7XHJcbmxldCBjb3JyZWN0Q291bnQgPSAwO1xyXG5sZXQgeWVhclRvVHJhdmVsID0gJyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXB0Y2hhKGRpdlllYXIpIHtcclxuICB5ZWFyVG9UcmF2ZWwgPSBkaXZZZWFyO1xyXG4gIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcclxuICB5ZWFyQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpKSB7XHJcbiAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcblxyXG4gICAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdHlwZVwiLlxyXG4gICAgdmFyIG1vbmtleVR5cGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vbmtleVR5cGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXR5cGUnKTtcclxuXHJcbiAgICAvLyBDcmlhIGEgZGl2IGNvbSBhIGNsYXNzZSBcIm1vbmtleS10aXRsZVwiIGUgZGVmaW5lIG8gdGV4dG9cclxuICAgIHZhciBtb25rZXlUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9ua2V5VGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnbW9ua2V5LXRpdGxlJyk7XHJcbiAgICB2YXIgY2FwdGNoYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNhcHRjaGEudGV4dENvbnRlbnQgPSAnQ0FQVENIQSc7XHJcbiAgICB2YXIgY2FwdGNoYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY2FwdGNoYURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ3Byb3ZlIHN1YSBodW1hbmlkYWRlJztcclxuICAgIG1vbmtleVRpdGxlRGl2LmFwcGVuZENoaWxkKGNhcHRjaGEpO1xyXG4gICAgbW9ua2V5VGl0bGVEaXYuYXBwZW5kQ2hpbGQoY2FwdGNoYURlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAvLyBDcmlhIGFzIGRpdnMgaW50ZXJuYXMgY29tIGFzIGNsYXNzZXMgXCJsZXR0ZXJcIiBlIFwicHJvZ3Jlc3MtYmFyXCJcclxuICAgIHZhciBsZXR0ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdsZXR0ZXItZGl2Jyk7XHJcblxyXG4gICAgdmFyIGxldHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ2xldHRlcicpO1xyXG4gICAgdmFyIG51bWJlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbnVtYmVyRGl2LmNsYXNzTGlzdC5hZGQoJ251bWJlcicpO1xyXG5cclxuICAgIHZhciBwcm9ncmVzc0JhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvZ3Jlc3NCYXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XHJcblxyXG4gICAgLy8gQWRpY2lvbmEgYXMgZGl2cyBpbnRlcm5hcyDDoCBkaXYgXCJtb25rZXktdHlwZVwiXHJcbiAgICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKG1vbmtleVRpdGxlRGl2KTtcclxuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobGV0dGVyRGl2KTtcclxuICAgIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJEaXYpO1xyXG4gICAgbGV0dGVyRGl2LmFwcGVuZENoaWxkKGxldHRlcik7XHJcbiAgICBsZXR0ZXJEaXYuYXBwZW5kQ2hpbGQobnVtYmVyRGl2KTtcclxuXHJcbiAgICAvLyBBZGljaW9uYSBhIGRpdiBcIm1vbmtleS10eXBlXCIgYW8gY29udGVudCBleGlzdGVudGVcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobW9ua2V5VHlwZURpdik7XHJcbiAgfVxyXG4gIHVwZGF0ZUxldHRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbUxldHRlcigpIHtcclxuICBjb25zdCBhbHBoYWJldCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XHJcbiAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbHBoYWJldC5sZW5ndGgpO1xyXG4gIHJldHVybiBhbHBoYWJldFtyYW5kb21JbmRleF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxldHRlcigpIHtcclxuICBkaXNhYmxlU2Nyb2xsKCk7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVLZXlQcmVzcyk7XHJcbiAgY29uc3QgbGV0dGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbmtleS10eXBlIC5sZXR0ZXItZGl2Jyk7XHJcblxyXG4gIGxhc3RQcmVzc2VkS2V5ID0gJyc7XHJcbiAgY29uc3QgcmFuZG9tTGV0dGVyID0gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKTtcclxuICBsZXR0ZXJEaXYudGV4dENvbnRlbnQgPSByYW5kb21MZXR0ZXI7XHJcbiAgbGV0dGVyRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcclxuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLmxldHRlci1kaXYnKTtcclxuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAucHJvZ3Jlc3MtYmFyJyk7XHJcbiAgY29uc3QgbW9ua2V5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZScpO1xyXG5cclxuICBjb25zdCBwcmVzc2VkS2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcclxuICBjb25zdCBjdXJyZW50TGV0dGVyID0gbGV0dGVyRGl2LnRleHRDb250ZW50O1xyXG5cclxuICBpZiAoXHJcbiAgICAocHJlc3NlZEtleS50b1VwcGVyQ2FzZSgpID09PSBjdXJyZW50TGV0dGVyIHx8XHJcbiAgICAgIHByZXNzZWRLZXkudG9Mb3dlckNhc2UoKSA9PT0gY3VycmVudExldHRlcikgJiZcclxuICAgIHByZXNzZWRLZXkgIT09IGxhc3RQcmVzc2VkS2V5XHJcbiAgKSB7XHJcbiAgICBsYXN0UHJlc3NlZEtleSA9IHByZXNzZWRLZXk7XHJcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xyXG4gICAgcGxheVJpZ2h0KCk7XHJcbiAgICBjb3JyZWN0Q291bnQrKztcclxuXHJcbiAgICAvLyBBdHVhbGl6YSBhIGxhcmd1cmEgZGEgYmFycmEgZGUgcHJvZ3Jlc3NvXHJcbiAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGNvcnJlY3RDb3VudCAqIDggKyAnJSc7XHJcblxyXG4gICAgaWYgKGNvcnJlY3RDb3VudCA9PT0gMTIpIHtcclxuICAgICAgbW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aW1lVHJhdmVsSm95KHllYXJUb1RyYXZlbCk7XHJcbiAgICAgIHZhciB5ZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllYXInKTtcclxuICAgICAgeWVhckJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbmFibGVTY3JvbGwoKTtcclxuICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdXBkYXRlTGV0dGVyKCk7XHJcbiAgICB9LCAyNTUpO1xyXG4gIH0gZWxzZSBpZiAobW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcclxuICAgIHBsYXlXcm9uZygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxldHRlckRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxUb1RvcCk7XHJcbn1cclxuXHJcbi8vIEZ1bsOnw6NvIHBhcmEgaGFiaWxpdGFyIG8gc2Nyb2xsXHJcbmZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcclxuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsVG9Ub3ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcclxuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNhcHRjaGEsIHVwZGF0ZUxldHRlciB9O1xyXG4iLCJmdW5jdGlvbiB0aW1lVHJhdmVsSm95KHRleHRDb250ZW50KSB7XHJcbiAgY29uc3QgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJyk7XHJcbiAgYmx1ci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHcteWVhcicpO1xyXG4gICAgICBjb25zdCBjdXJyZW50WWVhclRleHQgPSBjdXJyZW50WWVhci50ZXh0Q29udGVudDtcclxuICAgICAgaWYgKGN1cnJlbnRZZWFyVGV4dCAhPT0gdGV4dENvbnRlbnQpIHtcclxuICAgICAgICBmZXRjaChgLi9qb3lKb3VybmFsJHt0ZXh0Q29udGVudH0uaHRtbGApXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRlbXBFbGVtZW50LmlubmVySFRNTCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID1cclxuICAgICAgICAgICAgICB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuY29udGVudC0ke3RleHRDb250ZW50fWApLmlubmVySFRNTDtcclxuICAgICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpbm9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpbm8nKTtcclxuXHJcbiAgICAgICAgICAgIGRpbm9zLmZvckVhY2goKGRpbm8pID0+IHtcclxuICAgICAgICAgICAgICBkaW5vLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ICE9PSAnMjAxNCcpIHtcclxuICAgICAgICAgICAgICBjdXJyZW50WWVhci5zdHlsZS5mb250RmFtaWx5ID0gJ2NvbXBhY3R6JztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuc3R5bGUud2lkdGggPSAnNzV2dyc7XHJcbiAgICAgICAgICAgICAgb2xkQ29udGVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRZZWFyLnN0eWxlLmZvbnRGYW1pbHkgPSAnb2xkTW9vZGxlJztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmF5JztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLmNvbG9yID0gJ2JsYWNrJztcclxuICAgICAgICAgICAgICBvbGRDb250ZW50LnN0eWxlLndpZHRoID0gJzcwdncnO1xyXG4gICAgICAgICAgICAgIG9sZENvbnRlbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY3VycmVudFllYXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGJsdXIuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJsdXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgfSwgMTUwMCk7XHJcbiAgICB9LCAxNTAwKTtcclxuICB9LCAzMDApO1xyXG59XHJcblxyXG5leHBvcnQgeyB0aW1lVHJhdmVsSm95IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImpveUpvdXJuYWxcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuLi9jc3Mvam95Sm91cm5hbC5jc3MnO1xyXG5pbXBvcnQgeyB0aW1lVHJhdmVsSm95IH0gZnJvbSAnLi90aW1lTWFjaGluZS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNhcHRjaGEgfSBmcm9tICcuL2NhcHRjaGFWMi5qcyc7XHJcbmltcG9ydCB7IHBsYXlIYXBweSwgc3RvcEhhcHB5IH0gZnJvbSAnLi9hdWRpby5qcyc7XHJcbmltcG9ydCBwb3B1cCBmcm9tICcuLi9pbWcvcG9wdXAuZ2lmJztcclxuXHJcbmxldCBqdW1wc2NhcmUgPSBmYWxzZTtcclxuXHJcbmZldGNoKCcuL2F0bzEtdjEuaHRtbCcpXHJcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHRlbXBFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZW1wRWxlbWVudC5pbm5lckhUTUwgPSBkYXRhO1xyXG5cclxuICAgIC8vIEV4dHJhaWEgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxob1xyXG4gICAgY29uc3QgaGVhZGVyQ29udGVudCA9IHRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lV2FycCcpLmlubmVySFRNTDtcclxuXHJcbiAgICAvLyBTdWJzdGl0dWEgbyBjb250ZcO6ZG8gZG8gY2FiZcOnYWxobyBuYSBww6FnaW5hIGFsdGVyYWRhXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZVdhcnAnKS5pbm5lckhUTUwgPSBoZWFkZXJDb250ZW50O1xyXG4gICAgY29uc3QgdXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVybCcpO1xyXG5cclxuICAgIHVybC50ZXh0Q29udGVudCA9ICdodHRwOi8vd3d3LmpveWpvdXJuYWwuY29tLyc7XHJcbiAgICBsaXN0ZW5ZZWFycygpO1xyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnJvcikgPT5cclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgYSBww6FnaW5hIHByZXNlcnZhZGE6JywgZXJyb3IpXHJcbiAgKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgYWRkRXZlbnQoKTtcclxuICBjb25zdCBhbmltYXRlZEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlaXJkJyk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcclxuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgLy8gQXRpdmEgYSBhbmltYcOnw6NvIHF1YW5kbyBhIHBvc2nDp8OjbyBkZSByb2xhZ2VtIGF0aW5nZSAxMjB2aFxyXG4gICAgaWYgKHNjcm9sbFBvc2l0aW9uID49ICg2MiAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyAxMDApIHtcclxuICAgICAgYW5pbWF0ZWRJbWFnZS5zdHlsZS5hbmltYXRpb25QbGF5U3RhdGUgPSAncnVubmluZyc7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xyXG4gICAgICAgIGRpYWxvZ3VlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZScpO1xyXG4gICAgICAgICAgZGlhbG9ndWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgfSwgNTUwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICBcclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmlhckRpdlllYXIodGV4dG8pIHtcclxuICBjb25zdCBkaXZZZWFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2WWVhci5jbGFzc0xpc3QuYWRkKCd5ZWFyJyk7XHJcbiAgZGl2WWVhci50ZXh0Q29udGVudCA9IHRleHRvO1xyXG5cclxuICByZXR1cm4gZGl2WWVhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnQoKSB7XHJcbiAgY29uc3QgdGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaScpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuICAgIGNvbnN0IHRleHRvID0gdGFnLnRleHRDb250ZW50O1xyXG5cclxuICAgIGlmICh2ZXJpZmljYXJEaXZFeGlzdGVudGUodGV4dG8pID09PSBmYWxzZSkge1xyXG4gICAgICBjb25zdCBkaXZZZWFyID0gY3JpYXJEaXZZZWFyKHRleHRvKTtcclxuICAgICAgY29uc3QgdGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUnKTtcclxuICAgICAgdGltZWxpbmUuYXBwZW5kQ2hpbGQoZGl2WWVhcik7XHJcblxyXG4gICAgICAvLyBSZW1vdmVyIG8gZXZlbnQgbGlzdGVuZXIgYXDDs3MgbyBwcmltZWlybyBjbGlxdWVcclxuICAgICAgdGFnLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xyXG4gICAgICBsaXN0ZW5ZZWFycygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gVmVyaWZpY2FyIHNlIG8gZXZlbnRvIGFpbmRhIG7Do28gZm9pIGFkaWNpb25hZG9cclxuICBpZiAodGFnKSB7XHJcbiAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJpZmljYXJEaXZFeGlzdGVudGUodGV4dG8pIHtcclxuICBjb25zdCBkaXZzRXhpc3RlbnRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVsaW5lIC55ZWFyJyk7XHJcblxyXG4gIGZvciAoY29uc3QgZGl2RXhpc3RlbnRlIG9mIGRpdnNFeGlzdGVudGUpIHtcclxuICAgIGlmIChkaXZFeGlzdGVudGUudGV4dENvbnRlbnQgPT09IHRleHRvKSB7XHJcbiAgICAgIHJldHVybiB0cnVlOyAvLyBKw6EgZXhpc3RlIHVtYSBkaXYgY29tIG8gbWVzbW8gdGV4dG9cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTsgLy8gTmVuaHVtYSBkaXYgZW5jb250cmFkYSBjb20gbyBtZXNtbyB0ZXh0b1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0ZW5ZZWFycygpIHtcclxuICB2YXIgeWVhckRpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcueWVhcicpO1xyXG4gIHllYXJEaXZzLmZvckVhY2goZnVuY3Rpb24gKGRpdikge1xyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjcmVhdGVDYXB0Y2hhKGRpdi50ZXh0Q29udGVudCk7XHJcbiAgICAgIGlmKGp1bXBzY2FyZSA9PT0gZmFsc2Upe1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwbGF5UG9wdXApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxheVBvcHVwKCkge1xyXG4gIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gIGlmIChzY3JvbGxQb3NpdGlvbiA+PSAoNDAgKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMTAwKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIHZhciBwb3B1cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmFyIHBvcHVwQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgcG9wdXBCdXR0b24udGV4dENvbnRlbnQgPSAnRkVDSEFSJztcclxuICAgIFxyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1nLnNyYyA9IHBvcHVwO1xyXG5cclxuICAgIHBvcHVwRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgncG9wdXAtaW1nJyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBvcHVwRGl2KTtcclxuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChwb3B1cEJ1dHRvbik7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcGxheVBvcHVwKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBwbGF5SGFwcHkoKTtcclxuICAgICAgY2xvc2VQb3B1cCgpO1xyXG4gICAgICBwb3B1cERpdi5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH0sIDMwMDApO1xyXG4gICAganVtcHNjYXJlID0gdHJ1ZTtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VQb3B1cCgpIHtcclxuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xyXG4gIGNvbnN0IHBvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwIGJ1dHRvbicpO1xyXG5cclxuICBwb3B1cEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBzdG9wSGFwcHkoKTtcclxuICB9KTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==