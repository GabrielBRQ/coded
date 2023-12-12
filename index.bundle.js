/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! font/aldo_the_apache/AldotheApache.ttf */ "./src/font/aldo_the_apache/AldotheApache.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: aldoApache;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: black;
  display: grid;
  grid-template-rows: 3fr 2fr 2fr;
  height: 100vh;
  align-items: center;
  justify-items: center;
  position: relative;
  overflow: hidden;
}

.title {
  margin-left: 5px;
  font-family: aldoApache;
  font-size: 7rem;
  color: #525252;
  position: relative;

  text-shadow: 0.05em 0 0 rgb(134, 134, 134),
    -0.025em 0 0 rgb(32, 175, 32) 0.025em 0 0 rgb(119, 8, 8);

  animation: glitch 450ms infinite;
  opacity: 0.85;
}

.title span {
  position: absolute;
  top: 0;
  left: 0;
}

.title span:first-child {
  animation: glitch 650ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.05rem, -0.025rem);
  opacity: 0.6;
}

.title span:last-child {
  animation: glitch 389ms infinite;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
  transform: translate(0.05rem, 0.025rem);
  opacity: 0.6;
}

.dino {
  height: 10vh;
}

.cactus {
  height: 13vh;
}

.floor-obj {
  align-self: end;
  display: flex;
  align-items: end;
  justify-content: space-around;
  width: 100vw;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: solid 5px #a0a0a0;
  background: transparent;
  cursor: pointer;
}

.play-button img {
  height: 50px;
  margin: 2px 0 0 5px;
}

.play-button img:hover {
  height: 55px;
  margin: 2px 0 0 5px;
}

.floor {
  background: black;
  border-top: solid 3px #525252;
  width: 100%;
  align-self: self-start;
}

.background-wrap {
  height: 50vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.background-wrap,
.cactus,
.title,
.floor {
  transition: opacity 1.1s ease;
}

@keyframes animateCloud {
  0% {
    margin-left: -700px;
  }
  100% {
    margin-left: 100%;
  }
}

@keyframes glitch {
  0% {
    text-shadow: 0.05rem 0 0 rgb(134, 134, 134), -0.025rem 0 0 rgb(32, 175, 32),
      0.025rem 0 0 rgb(119, 8, 8);
  }

  14% {
    text-shadow: 0.05rem 0 0 rgb(134, 134, 134), -0.025rem 0 0 rgb(32, 175, 32),
      0.025rem 0 0 rgb(119, 8, 8);
  }

  15% {
    text-shadow: -0.05rem -0.25rem 0 rgb(134, 134, 134),
      0.025rem 0.025rem 0 rgb(32, 175, 32), -0.05rem -0.05rem 0 rgb(119, 8, 8);
  }

  49% {
    text-shadow: -0.05rem -0.25rem 0 rgb(134, 134, 134),
      0.025rem 0.025rem 0 rgb(32, 175, 32), -0.05rem -0.05rem 0 rgb(119, 8, 8);
  }

  50% {
    text-shadow: 0.025rem 0.05rem 0 rgb(134, 134, 134),
      0.05rem 0 0 rgb(32, 175, 32), 0 -0.05rem 0 rgb(119, 8, 8);
  }

  99% {
    text-shadow: 0.025rem 0.05rem 0 rgb(134, 134, 134),
      0.05rem 0 0 rgb(32, 175, 32), 0 -0.05rem 0 rgb(119, 8, 8);
  }

  100% {
    text-shadow: -0.025rem 0 0 rgb(134, 134, 134),
      -0.025rem -0.025rem 0 rgb(32, 175, 32),
      -0.025rem -0.05rem 0 rgb(119, 8, 8);
  }
}

.x1 {
  animation: animateCloud 45s linear infinite;
  transform: scale(0.65);
}

.x2 {
  animation: animateCloud 35s linear infinite;
  transform: scale(0.3);
}

.x3 {
  animation: animateCloud 41s linear infinite;
  transform: scale(0.5);
}

.x4 {
  animation: animateCloud 55s linear infinite;
  transform: scale(0.7);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAAgD;AAClD;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,+BAA+B;EAC/B,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,eAAe;EACf,cAAc;EACd,kBAAkB;;EAElB;4DAC0D;;EAE1D,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;;AAEA;EACE,gCAAgC;EAChC,gDAAgD;EAChD,yCAAyC;EACzC,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,sDAAsD;EACtD,uCAAuC;EACvC,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;AACb;;AAEA;;;;EAIE,6BAA6B;AAC/B;;AAEA;EACE;IACE,mBAAmB;EACrB;EACA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE;iCAC6B;EAC/B;;EAEA;IACE;iCAC6B;EAC/B;;EAEA;IACE;8EAC0E;EAC5E;;EAEA;IACE;8EAC0E;EAC5E;;EAEA;IACE;+DAC2D;EAC7D;;EAEA;IACE;+DAC2D;EAC7D;;EAEA;IACE;;yCAEqC;EACvC;AACF;;AAEA;EACE,2CAA2C;EAC3C,sBAAsB;AACxB;;AAEA;EACE,2CAA2C;EAC3C,qBAAqB;AACvB;;AAEA;EACE,2CAA2C;EAC3C,qBAAqB;AACvB;;AAEA;EACE,2CAA2C;EAC3C,qBAAqB;AACvB","sourcesContent":["@font-face {\n  font-family: aldoApache;\n  src: url(font/aldo_the_apache/AldotheApache.ttf);\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: black;\n  display: grid;\n  grid-template-rows: 3fr 2fr 2fr;\n  height: 100vh;\n  align-items: center;\n  justify-items: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.title {\n  margin-left: 5px;\n  font-family: aldoApache;\n  font-size: 7rem;\n  color: #525252;\n  position: relative;\n\n  text-shadow: 0.05em 0 0 rgb(134, 134, 134),\n    -0.025em 0 0 rgb(32, 175, 32) 0.025em 0 0 rgb(119, 8, 8);\n\n  animation: glitch 450ms infinite;\n  opacity: 0.85;\n}\n\n.title span {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.title span:first-child {\n  animation: glitch 650ms infinite;\n  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);\n  transform: translate(-0.05rem, -0.025rem);\n  opacity: 0.6;\n}\n\n.title span:last-child {\n  animation: glitch 389ms infinite;\n  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);\n  transform: translate(0.05rem, 0.025rem);\n  opacity: 0.6;\n}\n\n.dino {\n  height: 10vh;\n}\n\n.cactus {\n  height: 13vh;\n}\n\n.floor-obj {\n  align-self: end;\n  display: flex;\n  align-items: end;\n  justify-content: space-around;\n  width: 100vw;\n}\n\n.play-button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  border: solid 5px #a0a0a0;\n  background: transparent;\n  cursor: pointer;\n}\n\n.play-button img {\n  height: 50px;\n  margin: 2px 0 0 5px;\n}\n\n.play-button img:hover {\n  height: 55px;\n  margin: 2px 0 0 5px;\n}\n\n.floor {\n  background: black;\n  border-top: solid 3px #525252;\n  width: 100%;\n  align-self: self-start;\n}\n\n.background-wrap {\n  height: 50vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.background-wrap,\n.cactus,\n.title,\n.floor {\n  transition: opacity 1.1s ease;\n}\n\n@keyframes animateCloud {\n  0% {\n    margin-left: -700px;\n  }\n  100% {\n    margin-left: 100%;\n  }\n}\n\n@keyframes glitch {\n  0% {\n    text-shadow: 0.05rem 0 0 rgb(134, 134, 134), -0.025rem 0 0 rgb(32, 175, 32),\n      0.025rem 0 0 rgb(119, 8, 8);\n  }\n\n  14% {\n    text-shadow: 0.05rem 0 0 rgb(134, 134, 134), -0.025rem 0 0 rgb(32, 175, 32),\n      0.025rem 0 0 rgb(119, 8, 8);\n  }\n\n  15% {\n    text-shadow: -0.05rem -0.25rem 0 rgb(134, 134, 134),\n      0.025rem 0.025rem 0 rgb(32, 175, 32), -0.05rem -0.05rem 0 rgb(119, 8, 8);\n  }\n\n  49% {\n    text-shadow: -0.05rem -0.25rem 0 rgb(134, 134, 134),\n      0.025rem 0.025rem 0 rgb(32, 175, 32), -0.05rem -0.05rem 0 rgb(119, 8, 8);\n  }\n\n  50% {\n    text-shadow: 0.025rem 0.05rem 0 rgb(134, 134, 134),\n      0.05rem 0 0 rgb(32, 175, 32), 0 -0.05rem 0 rgb(119, 8, 8);\n  }\n\n  99% {\n    text-shadow: 0.025rem 0.05rem 0 rgb(134, 134, 134),\n      0.05rem 0 0 rgb(32, 175, 32), 0 -0.05rem 0 rgb(119, 8, 8);\n  }\n\n  100% {\n    text-shadow: -0.025rem 0 0 rgb(134, 134, 134),\n      -0.025rem -0.025rem 0 rgb(32, 175, 32),\n      -0.025rem -0.05rem 0 rgb(119, 8, 8);\n  }\n}\n\n.x1 {\n  animation: animateCloud 45s linear infinite;\n  transform: scale(0.65);\n}\n\n.x2 {\n  animation: animateCloud 35s linear infinite;\n  transform: scale(0.3);\n}\n\n.x3 {\n  animation: animateCloud 41s linear infinite;\n  transform: scale(0.5);\n}\n\n.x4 {\n  animation: animateCloud 55s linear infinite;\n  transform: scale(0.7);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/captcha.js":
/*!************************!*\
  !*** ./src/captcha.js ***!
  \************************/
/***/ (() => {

let lastPressedKey = '';
let correctCount = 0;
var button = document.querySelector('.year');
function createCaptcha() {
  button.removeAttribute('onclick');
  var container = document.querySelector('.container');

  // Cria a div com a classe "monkey-type"
  var monkeyTypeDiv = document.createElement('div');
  monkeyTypeDiv.classList.add('monkey-type');

  // Cria a div com a classe "monkey-title" e define o texto
  var monkeyTitleDiv = document.createElement('div');
  monkeyTitleDiv.classList.add('monkey-title');
  monkeyTitleDiv.textContent = 'APENAS HUMANOS';

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

  updateLetter();
}

function generateRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
}

function updateLetter() {
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
    playRight();
    correctCount++;

    // Atualiza a largura da barra de progresso
    progressBar.style.width = correctCount * 10 + '%';

    if (correctCount === 2 || correctCount === 6) {
      var audio = document.getElementById('earthquake');
      audio.volume = 1;
      audio.play();
      const container = document.querySelector('.container');
      container.classList.add('little-shake');
      diminuirVolumeGradualmente(audio);
      setTimeout(() => {
        container.classList.remove('little-shake');
      }, 700);
    }

    if (correctCount === 8) {
      var audio = document.getElementById('earthquake');
      audio.volume = 1;
      audio.play();
      const container = document.querySelector('.container');
      container.classList.add('medium-shake');
      setTimeout(() => {
        container.classList.remove('medium-shake');
        diminuirVolumeGradualmente(audio);
        setTimeout(() => {
          container.classList.remove('medium-shake');
        }, 700);
      }, 700);
    }

    if (correctCount === 10) {
      var audio = document.getElementById('earthquake');
      audio.volume = 1;
      audio.play();
      const container = document.querySelector('.container');
      container.classList.add('big-shake');
      const eye = document.querySelector('.eye');
      eye.style.opacity = 0.3;
      monkeyType.style.display = 'none';
      setTimeout(() => {
        const dialogue = document.querySelector('.dialogue p');
        const dialogueDiv = document.querySelector('.dialogue');
        const container = document.querySelector('.container');
        container.style.opacity = 0;
        dialogue.textContent = 'Obrigado!';
        dialogueDiv.style.display = 'flex';
      }, 4000);
      setTimeout(() => {
        eye.style.height = '20vw';
      }, 10000);
    }

    setTimeout(() => {
      updateLetter();
    }, 255);
  } else if (monkeyType.style.display !== 'none') {
    letterDiv.classList.add('incorrect');
    playWrong();
    setTimeout(() => {
      letterDiv.classList.remove('incorrect');
    }, 500);
  }
}

function playWrong() {
  var audio = document.getElementById('teclaErrada');
  audio.volume = 0.7;
  audio.play();
}

function playRight() {
  const fuzzy = document.querySelector('.fuzzy-overlay');
  fuzzy.style.opacity += 0.05;
  var audio = document.getElementById('teclaCorreta');
  audio.volume = 0.2;
  audio.play();
}

function diminuirVolumeGradualmente(audio) {
  var intervalo = setInterval(function () {
    // Aumente o volume em incrementos pequenos
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
    } else {
      audio.volume = 0.0; // Defina o volume para 0% se for menor que 0
      audio.pause();
      clearInterval(intervalo);
    }
  }, 200);

  setTimeout(diminuirVolumeGradualmente, 350);
}


// Adiciona o listener para eventos de teclado
document.addEventListener('keypress', handleKeyPress);


/***/ }),

/***/ "./src/titleScreen.js":
/*!****************************!*\
  !*** ./src/titleScreen.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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




/***/ }),

/***/ "./src/font/aldo_the_apache/AldotheApache.ttf":
/*!****************************************************!*\
  !*** ./src/font/aldo_the_apache/AldotheApache.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "96b6ca13f61531070eab.ttf";

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
/******/ 			"index": 0
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _captcha_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./captcha.js */ "./src/captcha.js");
/* harmony import */ var _captcha_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_captcha_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _titleScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titleScreen.js */ "./src/titleScreen.js");




(0,_titleScreen_js__WEBPACK_IMPORTED_MODULE_2__.playGame)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0I7QUFDRDs7QUFFNUMseURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY29kZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NvZGVkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NvZGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY29kZWQvLi9zcmMvY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly9jb2RlZC8uL3NyYy90aXRsZVNjcmVlbi5qcyIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jb2RlZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvZGVkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29kZWQvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvZGVkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250L2FsZG9fdGhlX2FwYWNoZS9BbGRvdGhlQXBhY2hlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBhbGRvQXBhY2hlO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAyZnIgMmZyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1mYW1pbHk6IGFsZG9BcGFjaGU7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbiAgY29sb3I6ICM1MjUyNTI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB0ZXh0LXNoYWRvdzogMC4wNWVtIDAgMCByZ2IoMTM0LCAxMzQsIDEzNCksXG4gICAgLTAuMDI1ZW0gMCAwIHJnYigzMiwgMTc1LCAzMikgMC4wMjVlbSAwIDAgcmdiKDExOSwgOCwgOCk7XG5cbiAgYW5pbWF0aW9uOiBnbGl0Y2ggNDUwbXMgaW5maW5pdGU7XG4gIG9wYWNpdHk6IDAuODU7XG59XG5cbi50aXRsZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi50aXRsZSBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgYW5pbWF0aW9uOiBnbGl0Y2ggNjUwbXMgaW5maW5pdGU7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSA0NSUsIDAgNDUlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuMDVyZW0sIC0wLjAyNXJlbSk7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnRpdGxlIHNwYW46bGFzdC1jaGlsZCB7XG4gIGFuaW1hdGlvbjogZ2xpdGNoIDM4OW1zIGluZmluaXRlO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oMCA2MCUsIDEwMCUgNjAlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMDVyZW0sIDAuMDI1cmVtKTtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uZGlubyB7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuLmNhY3R1cyB7XG4gIGhlaWdodDogMTN2aDtcbn1cblxuLmZsb29yLW9iaiB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLnBsYXktYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogc29saWQgNXB4ICNhMGEwYTA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wbGF5LWJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMnB4IDAgMCA1cHg7XG59XG5cbi5wbGF5LWJ1dHRvbiBpbWc6aG92ZXIge1xuICBoZWlnaHQ6IDU1cHg7XG4gIG1hcmdpbjogMnB4IDAgMCA1cHg7XG59XG5cbi5mbG9vciB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItdG9wOiBzb2xpZCAzcHggIzUyNTI1MjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XG59XG5cbi5iYWNrZ3JvdW5kLXdyYXAge1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYmFja2dyb3VuZC13cmFwLFxuLmNhY3R1cyxcbi50aXRsZSxcbi5mbG9vciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS4xcyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVDbG91ZCB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogLTcwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZ2xpdGNoIHtcbiAgMCUge1xuICAgIHRleHQtc2hhZG93OiAwLjA1cmVtIDAgMCByZ2IoMTM0LCAxMzQsIDEzNCksIC0wLjAyNXJlbSAwIDAgcmdiKDMyLCAxNzUsIDMyKSxcbiAgICAgIDAuMDI1cmVtIDAgMCByZ2IoMTE5LCA4LCA4KTtcbiAgfVxuXG4gIDE0JSB7XG4gICAgdGV4dC1zaGFkb3c6IDAuMDVyZW0gMCAwIHJnYigxMzQsIDEzNCwgMTM0KSwgLTAuMDI1cmVtIDAgMCByZ2IoMzIsIDE3NSwgMzIpLFxuICAgICAgMC4wMjVyZW0gMCAwIHJnYigxMTksIDgsIDgpO1xuICB9XG5cbiAgMTUlIHtcbiAgICB0ZXh0LXNoYWRvdzogLTAuMDVyZW0gLTAuMjVyZW0gMCByZ2IoMTM0LCAxMzQsIDEzNCksXG4gICAgICAwLjAyNXJlbSAwLjAyNXJlbSAwIHJnYigzMiwgMTc1LCAzMiksIC0wLjA1cmVtIC0wLjA1cmVtIDAgcmdiKDExOSwgOCwgOCk7XG4gIH1cblxuICA0OSUge1xuICAgIHRleHQtc2hhZG93OiAtMC4wNXJlbSAtMC4yNXJlbSAwIHJnYigxMzQsIDEzNCwgMTM0KSxcbiAgICAgIDAuMDI1cmVtIDAuMDI1cmVtIDAgcmdiKDMyLCAxNzUsIDMyKSwgLTAuMDVyZW0gLTAuMDVyZW0gMCByZ2IoMTE5LCA4LCA4KTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdGV4dC1zaGFkb3c6IDAuMDI1cmVtIDAuMDVyZW0gMCByZ2IoMTM0LCAxMzQsIDEzNCksXG4gICAgICAwLjA1cmVtIDAgMCByZ2IoMzIsIDE3NSwgMzIpLCAwIC0wLjA1cmVtIDAgcmdiKDExOSwgOCwgOCk7XG4gIH1cblxuICA5OSUge1xuICAgIHRleHQtc2hhZG93OiAwLjAyNXJlbSAwLjA1cmVtIDAgcmdiKDEzNCwgMTM0LCAxMzQpLFxuICAgICAgMC4wNXJlbSAwIDAgcmdiKDMyLCAxNzUsIDMyKSwgMCAtMC4wNXJlbSAwIHJnYigxMTksIDgsIDgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdGV4dC1zaGFkb3c6IC0wLjAyNXJlbSAwIDAgcmdiKDEzNCwgMTM0LCAxMzQpLFxuICAgICAgLTAuMDI1cmVtIC0wLjAyNXJlbSAwIHJnYigzMiwgMTc1LCAzMiksXG4gICAgICAtMC4wMjVyZW0gLTAuMDVyZW0gMCByZ2IoMTE5LCA4LCA4KTtcbiAgfVxufVxuXG4ueDEge1xuICBhbmltYXRpb246IGFuaW1hdGVDbG91ZCA0NXMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjUpO1xufVxuXG4ueDIge1xuICBhbmltYXRpb246IGFuaW1hdGVDbG91ZCAzNXMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG59XG5cbi54MyB7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZUNsb3VkIDQxcyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbn1cblxuLng0IHtcbiAgYW5pbWF0aW9uOiBhbmltYXRlQ2xvdWQgNTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjs7RUFFbEI7NERBQzBEOztFQUUxRCxnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0RBQWdEO0VBQ2hELHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsc0RBQXNEO0VBQ3RELHVDQUF1QztFQUN2QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0FBQ2I7O0FBRUE7Ozs7RUFJRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO2lDQUM2QjtFQUMvQjs7RUFFQTtJQUNFO2lDQUM2QjtFQUMvQjs7RUFFQTtJQUNFOzhFQUMwRTtFQUM1RTs7RUFFQTtJQUNFOzhFQUMwRTtFQUM1RTs7RUFFQTtJQUNFOytEQUMyRDtFQUM3RDs7RUFFQTtJQUNFOytEQUMyRDtFQUM3RDs7RUFFQTtJQUNFOzt5Q0FFcUM7RUFDdkM7QUFDRjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYWxkb0FwYWNoZTtcXG4gIHNyYzogdXJsKGZvbnQvYWxkb190aGVfYXBhY2hlL0FsZG90aGVBcGFjaGUudHRmKTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDJmciAyZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgZm9udC1mYW1pbHk6IGFsZG9BcGFjaGU7XFxuICBmb250LXNpemU6IDdyZW07XFxuICBjb2xvcjogIzUyNTI1MjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIHRleHQtc2hhZG93OiAwLjA1ZW0gMCAwIHJnYigxMzQsIDEzNCwgMTM0KSxcXG4gICAgLTAuMDI1ZW0gMCAwIHJnYigzMiwgMTc1LCAzMikgMC4wMjVlbSAwIDAgcmdiKDExOSwgOCwgOCk7XFxuXFxuICBhbmltYXRpb246IGdsaXRjaCA0NTBtcyBpbmZpbml0ZTtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbi50aXRsZSBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi50aXRsZSBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gIGFuaW1hdGlvbjogZ2xpdGNoIDY1MG1zIGluZmluaXRlO1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDQ1JSwgMCA0NSUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuMDVyZW0sIC0wLjAyNXJlbSk7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi50aXRsZSBzcGFuOmxhc3QtY2hpbGQge1xcbiAgYW5pbWF0aW9uOiBnbGl0Y2ggMzg5bXMgaW5maW5pdGU7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCA2MCUsIDEwMCUgNjAlLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjA1cmVtLCAwLjAyNXJlbSk7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5kaW5vIHtcXG4gIGhlaWdodDogMTB2aDtcXG59XFxuXFxuLmNhY3R1cyB7XFxuICBoZWlnaHQ6IDEzdmg7XFxufVxcblxcbi5mbG9vci1vYmoge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLnBsYXktYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2EwYTBhMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxheS1idXR0b24gaW1nIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbjogMnB4IDAgMCA1cHg7XFxufVxcblxcbi5wbGF5LWJ1dHRvbiBpbWc6aG92ZXIge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgbWFyZ2luOiAycHggMCAwIDVweDtcXG59XFxuXFxuLmZsb29yIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogc29saWQgM3B4ICM1MjUyNTI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IHNlbGYtc3RhcnQ7XFxufVxcblxcbi5iYWNrZ3JvdW5kLXdyYXAge1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uYmFja2dyb3VuZC13cmFwLFxcbi5jYWN0dXMsXFxuLnRpdGxlLFxcbi5mbG9vciB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuMXMgZWFzZTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlQ2xvdWQge1xcbiAgMCUge1xcbiAgICBtYXJnaW4tbGVmdDogLTcwMHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdsaXRjaCB7XFxuICAwJSB7XFxuICAgIHRleHQtc2hhZG93OiAwLjA1cmVtIDAgMCByZ2IoMTM0LCAxMzQsIDEzNCksIC0wLjAyNXJlbSAwIDAgcmdiKDMyLCAxNzUsIDMyKSxcXG4gICAgICAwLjAyNXJlbSAwIDAgcmdiKDExOSwgOCwgOCk7XFxuICB9XFxuXFxuICAxNCUge1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wNXJlbSAwIDAgcmdiKDEzNCwgMTM0LCAxMzQpLCAtMC4wMjVyZW0gMCAwIHJnYigzMiwgMTc1LCAzMiksXFxuICAgICAgMC4wMjVyZW0gMCAwIHJnYigxMTksIDgsIDgpO1xcbiAgfVxcblxcbiAgMTUlIHtcXG4gICAgdGV4dC1zaGFkb3c6IC0wLjA1cmVtIC0wLjI1cmVtIDAgcmdiKDEzNCwgMTM0LCAxMzQpLFxcbiAgICAgIDAuMDI1cmVtIDAuMDI1cmVtIDAgcmdiKDMyLCAxNzUsIDMyKSwgLTAuMDVyZW0gLTAuMDVyZW0gMCByZ2IoMTE5LCA4LCA4KTtcXG4gIH1cXG5cXG4gIDQ5JSB7XFxuICAgIHRleHQtc2hhZG93OiAtMC4wNXJlbSAtMC4yNXJlbSAwIHJnYigxMzQsIDEzNCwgMTM0KSxcXG4gICAgICAwLjAyNXJlbSAwLjAyNXJlbSAwIHJnYigzMiwgMTc1LCAzMiksIC0wLjA1cmVtIC0wLjA1cmVtIDAgcmdiKDExOSwgOCwgOCk7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wMjVyZW0gMC4wNXJlbSAwIHJnYigxMzQsIDEzNCwgMTM0KSxcXG4gICAgICAwLjA1cmVtIDAgMCByZ2IoMzIsIDE3NSwgMzIpLCAwIC0wLjA1cmVtIDAgcmdiKDExOSwgOCwgOCk7XFxuICB9XFxuXFxuICA5OSUge1xcbiAgICB0ZXh0LXNoYWRvdzogMC4wMjVyZW0gMC4wNXJlbSAwIHJnYigxMzQsIDEzNCwgMTM0KSxcXG4gICAgICAwLjA1cmVtIDAgMCByZ2IoMzIsIDE3NSwgMzIpLCAwIC0wLjA1cmVtIDAgcmdiKDExOSwgOCwgOCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdGV4dC1zaGFkb3c6IC0wLjAyNXJlbSAwIDAgcmdiKDEzNCwgMTM0LCAxMzQpLFxcbiAgICAgIC0wLjAyNXJlbSAtMC4wMjVyZW0gMCByZ2IoMzIsIDE3NSwgMzIpLFxcbiAgICAgIC0wLjAyNXJlbSAtMC4wNXJlbSAwIHJnYigxMTksIDgsIDgpO1xcbiAgfVxcbn1cXG5cXG4ueDEge1xcbiAgYW5pbWF0aW9uOiBhbmltYXRlQ2xvdWQgNDVzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC42NSk7XFxufVxcblxcbi54MiB7XFxuICBhbmltYXRpb246IGFuaW1hdGVDbG91ZCAzNXMgbGluZWFyIGluZmluaXRlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xcbn1cXG5cXG4ueDMge1xcbiAgYW5pbWF0aW9uOiBhbmltYXRlQ2xvdWQgNDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG59XFxuXFxuLng0IHtcXG4gIGFuaW1hdGlvbjogYW5pbWF0ZUNsb3VkIDU1cyBsaW5lYXIgaW5maW5pdGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IGxhc3RQcmVzc2VkS2V5ID0gJyc7XG5sZXQgY29ycmVjdENvdW50ID0gMDtcbnZhciBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhcicpO1xuZnVuY3Rpb24gY3JlYXRlQ2FwdGNoYSgpIHtcbiAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnb25jbGljaycpO1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gIC8vIENyaWEgYSBkaXYgY29tIGEgY2xhc3NlIFwibW9ua2V5LXR5cGVcIlxuICB2YXIgbW9ua2V5VHlwZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb25rZXlUeXBlRGl2LmNsYXNzTGlzdC5hZGQoJ21vbmtleS10eXBlJyk7XG5cbiAgLy8gQ3JpYSBhIGRpdiBjb20gYSBjbGFzc2UgXCJtb25rZXktdGl0bGVcIiBlIGRlZmluZSBvIHRleHRvXG4gIHZhciBtb25rZXlUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb25rZXlUaXRsZURpdi5jbGFzc0xpc3QuYWRkKCdtb25rZXktdGl0bGUnKTtcbiAgbW9ua2V5VGl0bGVEaXYudGV4dENvbnRlbnQgPSAnQVBFTkFTIEhVTUFOT1MnO1xuXG4gIC8vIENyaWEgYXMgZGl2cyBpbnRlcm5hcyBjb20gYXMgY2xhc3NlcyBcImxldHRlclwiIGUgXCJwcm9ncmVzcy1iYXJcIlxuICB2YXIgbGV0dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldHRlckRpdi5jbGFzc0xpc3QuYWRkKCdsZXR0ZXInKTtcblxuICB2YXIgcHJvZ3Jlc3NCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvZ3Jlc3NCYXJEaXYuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XG5cbiAgLy8gQWRpY2lvbmEgYXMgZGl2cyBpbnRlcm5hcyDDoCBkaXYgXCJtb25rZXktdHlwZVwiXG4gIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQobW9ua2V5VGl0bGVEaXYpO1xuICBtb25rZXlUeXBlRGl2LmFwcGVuZENoaWxkKGxldHRlckRpdik7XG4gIG1vbmtleVR5cGVEaXYuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJEaXYpO1xuXG4gIC8vIEFkaWNpb25hIGEgZGl2IFwibW9ua2V5LXR5cGVcIiBhbyBjb250YWluZXIgZXhpc3RlbnRlXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb25rZXlUeXBlRGl2KTtcblxuICB1cGRhdGVMZXR0ZXIoKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKSB7XG4gIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbHBoYWJldC5sZW5ndGgpO1xuICByZXR1cm4gYWxwaGFiZXRbcmFuZG9tSW5kZXhdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMZXR0ZXIoKSB7XG4gIGNvbnN0IGxldHRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAubGV0dGVyJyk7XG5cbiAgbGFzdFByZXNzZWRLZXkgPSAnJztcbiAgY29uc3QgcmFuZG9tTGV0dGVyID0gZ2VuZXJhdGVSYW5kb21MZXR0ZXIoKTtcbiAgbGV0dGVyRGl2LnRleHRDb250ZW50ID0gcmFuZG9tTGV0dGVyO1xuICBsZXR0ZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICBjb25zdCBsZXR0ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUgLmxldHRlcicpO1xuICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb25rZXktdHlwZSAucHJvZ3Jlc3MtYmFyJyk7XG4gIGNvbnN0IG1vbmtleVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9ua2V5LXR5cGUnKTtcblxuICBjb25zdCBwcmVzc2VkS2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgY29uc3QgY3VycmVudExldHRlciA9IGxldHRlckRpdi50ZXh0Q29udGVudDtcblxuICBpZiAoXG4gICAgKHByZXNzZWRLZXkudG9VcHBlckNhc2UoKSA9PT0gY3VycmVudExldHRlciB8fFxuICAgICAgcHJlc3NlZEtleS50b0xvd2VyQ2FzZSgpID09PSBjdXJyZW50TGV0dGVyKSAmJlxuICAgIHByZXNzZWRLZXkgIT09IGxhc3RQcmVzc2VkS2V5XG4gICkge1xuICAgIGxhc3RQcmVzc2VkS2V5ID0gcHJlc3NlZEtleTtcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIHBsYXlSaWdodCgpO1xuICAgIGNvcnJlY3RDb3VudCsrO1xuXG4gICAgLy8gQXR1YWxpemEgYSBsYXJndXJhIGRhIGJhcnJhIGRlIHByb2dyZXNzb1xuICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gY29ycmVjdENvdW50ICogMTAgKyAnJSc7XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAyIHx8IGNvcnJlY3RDb3VudCA9PT0gNikge1xuICAgICAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VhcnRocXVha2UnKTtcbiAgICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGl0dGxlLXNoYWtlJyk7XG4gICAgICBkaW1pbnVpclZvbHVtZUdyYWR1YWxtZW50ZShhdWRpbyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xpdHRsZS1zaGFrZScpO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSA4KSB7XG4gICAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWFydGhxdWFrZScpO1xuICAgICAgYXVkaW8udm9sdW1lID0gMTtcbiAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tc2hha2UnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtLXNoYWtlJyk7XG4gICAgICAgIGRpbWludWlyVm9sdW1lR3JhZHVhbG1lbnRlKGF1ZGlvKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bS1zaGFrZScpO1xuICAgICAgICB9LCA3MDApO1xuICAgICAgfSwgNzAwKTtcbiAgICB9XG5cbiAgICBpZiAoY29ycmVjdENvdW50ID09PSAxMCkge1xuICAgICAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VhcnRocXVha2UnKTtcbiAgICAgIGF1ZGlvLnZvbHVtZSA9IDE7XG4gICAgICBhdWRpby5wbGF5KCk7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmlnLXNoYWtlJyk7XG4gICAgICBjb25zdCBleWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXllJyk7XG4gICAgICBleWUuc3R5bGUub3BhY2l0eSA9IDAuMztcbiAgICAgIG1vbmtleVR5cGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2d1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2d1ZSBwJyk7XG4gICAgICAgIGNvbnN0IGRpYWxvZ3VlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZ3VlJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBkaWFsb2d1ZS50ZXh0Q29udGVudCA9ICdPYnJpZ2FkbyEnO1xuICAgICAgICBkaWFsb2d1ZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSwgNDAwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXllLnN0eWxlLmhlaWdodCA9ICcyMHZ3JztcbiAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVwZGF0ZUxldHRlcigpO1xuICAgIH0sIDI1NSk7XG4gIH0gZWxzZSBpZiAobW9ua2V5VHlwZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgcGxheVdyb25nKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXR0ZXJEaXYuY2xhc3NMaXN0LnJlbW92ZSgnaW5jb3JyZWN0Jyk7XG4gICAgfSwgNTAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGF5V3JvbmcoKSB7XG4gIHZhciBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWNsYUVycmFkYScpO1xuICBhdWRpby52b2x1bWUgPSAwLjc7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gcGxheVJpZ2h0KCkge1xuICBjb25zdCBmdXp6eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdXp6eS1vdmVybGF5Jyk7XG4gIGZ1enp5LnN0eWxlLm9wYWNpdHkgKz0gMC4wNTtcbiAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlY2xhQ29ycmV0YScpO1xuICBhdWRpby52b2x1bWUgPSAwLjI7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gZGltaW51aXJWb2x1bWVHcmFkdWFsbWVudGUoYXVkaW8pIHtcbiAgdmFyIGludGVydmFsbyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBBdW1lbnRlIG8gdm9sdW1lIGVtIGluY3JlbWVudG9zIHBlcXVlbm9zXG4gICAgaWYgKGF1ZGlvLnZvbHVtZSA+IDAuMSkge1xuICAgICAgYXVkaW8udm9sdW1lIC09IDAuMTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW8udm9sdW1lID0gMC4wOyAvLyBEZWZpbmEgbyB2b2x1bWUgcGFyYSAwJSBzZSBmb3IgbWVub3IgcXVlIDBcbiAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsbyk7XG4gICAgfVxuICB9LCAyMDApO1xuXG4gIHNldFRpbWVvdXQoZGltaW51aXJWb2x1bWVHcmFkdWFsbWVudGUsIDM1MCk7XG59XG5cblxuLy8gQWRpY2lvbmEgbyBsaXN0ZW5lciBwYXJhIGV2ZW50b3MgZGUgdGVjbGFkb1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBoYW5kbGVLZXlQcmVzcyk7XG4iLCJmdW5jdGlvbiBwbGF5R2FtZSgpIHtcbiAgY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWJ1dHRvbicpO1xuICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtd3JhcCcpO1xuICBjb25zdCBjYWN0dXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhY3R1cycpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xuICBjb25zdCBkaW5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpbm8nKTtcbiAgY29uc3QgZmxvb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxvb3InKTtcblxuICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIC8vIERlZmluZSBvcGFjaXR5IHRvIDBcbiAgICBjb25zdCB0YXJnZXRPcGFjaXR5ID0gMC4wMDg7XG5cbiAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG93ZXJPZmYnKTtcbiAgICBhdWRpby52b2x1bWUgPSAwLjY7XG4gICAgYXVkaW8ucGxheSgpO1xuXG4gICAgcGxheUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHBsYXlCdXR0b24uc3R5bGUub3BhY2l0eSA9IHRhcmdldE9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSB0YXJnZXRPcGFjaXR5O1xuICAgICAgdGl0bGUuc3R5bGUub3BhY2l0eSA9IHRhcmdldE9wYWNpdHk7XG4gICAgICBmbG9vci5zdHlsZS5vcGFjaXR5ID0gdGFyZ2V0T3BhY2l0eTtcbiAgICB9LCAxMDApO1xuXG4gICAgY2FjdHVzTGlzdC5mb3JFYWNoKChjYWN0dXMpID0+IHtcbiAgICAgIGNhY3R1cy5zdHlsZS5vcGFjaXR5ID0gdGFyZ2V0T3BhY2l0eTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFyIGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZGUnKTtcbiAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaW5vLnN0eWxlLm9wYWNpdHkgPSB0YXJnZXRPcGFjaXR5O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi9zcmMvcHJvbG9nby5odG1sJztcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9LCAxMDApO1xuICAgIH0sIDI3NTApO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcGxheUdhbWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVDYXB0Y2hhIH0gZnJvbSBcIi4vY2FwdGNoYS5qc1wiO1xuaW1wb3J0IHsgcGxheUdhbWUgfSBmcm9tIFwiLi90aXRsZVNjcmVlbi5qc1wiO1xuXG5wbGF5R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9