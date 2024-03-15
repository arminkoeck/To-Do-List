/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Poppins/Poppins-SemiBold.ttf */ "./src/Poppins/Poppins-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Poppins/Poppins-Light.ttf */ "./src/Poppins/Poppins-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Poppins/Poppins-Regular.ttf */ "./src/Poppins/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
    --primary-color: #72729a;
    --secondary-color: #b2b2c3;
    --tertiary-color: #edebf0;
}

@font-face {
    font-family: 'Poppins Semibold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  }

@font-face {
font-family: 'Poppins Light';
src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@font-face {
    font-family: 'Poppins Regular';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  }


body {
    margin: 0;
    border: 0;
    font-family: "Poppins Light";
}


.screen-container {
    display: grid;
    grid-template: 120px 1fr / 350px 1fr;
    height: 100vh
}

.nav {
    background-color: white;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    padding-top: 20px;
    z-index: 2;
    border-bottom: 3px solid var(--primary-color)
}

.sidebar {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background-color: white;
    box-shadow: 8px 0px 15px -10px rgb(0, 0, 0, 0.3);
    z-index: 1;
    font-size: 10px;
}

.folder-container {
    padding-bottom: 20px;
}

.task-container {
    background-color: var(--tertiary-color);
    grid-row: 2 / 3;
    grid-column: 2 / 3;
}

ul {
    list-style: none;
    font-size: 18px;
    font-weight: 400;
    padding: 0;
    margin: 0;
}

li {
    padding: 8px 30px;
}

.sidebar .open-task-modal, .sidebar .open-folder-modal {
    margin-left: 30px;
    margin-top: 20px;
}

.open-task-modal, .open-folder-modal {
    border: none;
    border-radius: 3px;
    background-color: var(--secondary-color);
    color: white;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 15px;
}

.open-task-modal:hover, .open-folder-modal:hover {
    background-color: var(--primary-color);
}

.time-period-container {
    padding-bottom: 20px;
}

.sidebar-heading {
    margin: 0;
    padding: 12px 30px;
    font-size: 22px;
    background-color: var(--primary-color);
    margin-bottom: 10px;
    letter-spacing: 1px;
    color: white;
    font-family: "Poppins Semibold";
}

li span {
    margin: 0 30px 0 0;
}

.task-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px 50px;
    padding: 30px;
}

.task-background {
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 12px 20px -10px rgb(0, 0, 0, 0.3);
    border-radius: 5px;
    max-height: 400px;
}

.task-content {
    padding: 20px;
}

.task-priority {
    padding: 10px 20px;
    color: white;
    border-radius: 5px 5px 0px 0px;
    display: grid;
    grid-template: 1fr / 1fr 30px;
    grid-gap: 20px;
    align-items: center;
}

.high-priority {
    background-color: rgb(255, 96, 96);
}

.medium-priority {
    background-color: rgb(241, 132, 72);
}

.low-priority {
    background-color: rgb(97, 185, 93);
}

.task-delete-button{
    font-family: Poppins Semibold;
    color: var(--primary-color);
    background-color: white;
    aspect-ratio: 1 / 1;
    outline: none;
    border: 2px solid var(--primary-color);
    border-radius: 3px;
}

.sidebar-list-item {
    display: flex;
    justify-content: space-between;
}

.sidebar-list-item:hover {
    background-color: var(--tertiary-color);
    color: var(--primary-color);
}

.active-sidebar-item {
    background-color: var(--tertiary-color);
    color: (var(--primary-color));
    color: var(--primary-color);
}

h3 {
    font-family: "Poppins Semibold";
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;AAC7B;;AAEA;IACI,+BAA+B;IAC/B,4CAA0C;EAC5C;;AAEF;AACA,4BAA4B;AAC5B,4CAAuC;AACvC;;AAEA;IACI,8BAA8B;IAC9B,4CAAyC;EAC3C;;;AAGF;IACI,SAAS;IACT,SAAS;IACT,4BAA4B;AAChC;;;AAGA;IACI,aAAa;IACb,oCAAoC;IACpC;AACJ;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,UAAU;IACV;AACJ;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,gDAAgD;IAChD,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,uCAAuC;IACvC,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,wCAAwC;IACxC,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,sCAAsC;IACtC,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iDAAiD;IACjD,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,6BAA6B;IAC7B,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,6BAA6B;IAC7B,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,uCAAuC;IACvC,2BAA2B;AAC/B;;AAEA;IACI,uCAAuC;IACvC,6BAA6B;IAC7B,2BAA2B;AAC/B;;AAEA;IACI,+BAA+B;AACnC","sourcesContent":["\n:root {\n    --primary-color: #72729a;\n    --secondary-color: #b2b2c3;\n    --tertiary-color: #edebf0;\n}\n\n@font-face {\n    font-family: 'Poppins Semibold';\n    src: url('./Poppins/Poppins-SemiBold.ttf');\n  }\n\n@font-face {\nfont-family: 'Poppins Light';\nsrc: url('./Poppins/Poppins-Light.ttf');\n}\n\n@font-face {\n    font-family: 'Poppins Regular';\n    src: url('./Poppins/Poppins-Regular.ttf');\n  }\n\n\nbody {\n    margin: 0;\n    border: 0;\n    font-family: \"Poppins Light\";\n}\n\n\n.screen-container {\n    display: grid;\n    grid-template: 120px 1fr / 350px 1fr;\n    height: 100vh\n}\n\n.nav {\n    background-color: white;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    padding-top: 20px;\n    z-index: 2;\n    border-bottom: 3px solid var(--primary-color)\n}\n\n.sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    background-color: white;\n    box-shadow: 8px 0px 15px -10px rgb(0, 0, 0, 0.3);\n    z-index: 1;\n    font-size: 10px;\n}\n\n.folder-container {\n    padding-bottom: 20px;\n}\n\n.task-container {\n    background-color: var(--tertiary-color);\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\nul {\n    list-style: none;\n    font-size: 18px;\n    font-weight: 400;\n    padding: 0;\n    margin: 0;\n}\n\nli {\n    padding: 8px 30px;\n}\n\n.sidebar .open-task-modal, .sidebar .open-folder-modal {\n    margin-left: 30px;\n    margin-top: 20px;\n}\n\n.open-task-modal, .open-folder-modal {\n    border: none;\n    border-radius: 3px;\n    background-color: var(--secondary-color);\n    color: white;\n    font-size: 18px;\n    font-weight: 600;\n    padding: 10px 15px;\n}\n\n.open-task-modal:hover, .open-folder-modal:hover {\n    background-color: var(--primary-color);\n}\n\n.time-period-container {\n    padding-bottom: 20px;\n}\n\n.sidebar-heading {\n    margin: 0;\n    padding: 12px 30px;\n    font-size: 22px;\n    background-color: var(--primary-color);\n    margin-bottom: 10px;\n    letter-spacing: 1px;\n    color: white;\n    font-family: \"Poppins Semibold\";\n}\n\nli span {\n    margin: 0 30px 0 0;\n}\n\n.task-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px 50px;\n    padding: 30px;\n}\n\n.task-background {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    box-shadow: 0px 12px 20px -10px rgb(0, 0, 0, 0.3);\n    border-radius: 5px;\n    max-height: 400px;\n}\n\n.task-content {\n    padding: 20px;\n}\n\n.task-priority {\n    padding: 10px 20px;\n    color: white;\n    border-radius: 5px 5px 0px 0px;\n    display: grid;\n    grid-template: 1fr / 1fr 30px;\n    grid-gap: 20px;\n    align-items: center;\n}\n\n.high-priority {\n    background-color: rgb(255, 96, 96);\n}\n\n.medium-priority {\n    background-color: rgb(241, 132, 72);\n}\n\n.low-priority {\n    background-color: rgb(97, 185, 93);\n}\n\n.task-delete-button{\n    font-family: Poppins Semibold;\n    color: var(--primary-color);\n    background-color: white;\n    aspect-ratio: 1 / 1;\n    outline: none;\n    border: 2px solid var(--primary-color);\n    border-radius: 3px;\n}\n\n.sidebar-list-item {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sidebar-list-item:hover {\n    background-color: var(--tertiary-color);\n    color: var(--primary-color);\n}\n\n.active-sidebar-item {\n    background-color: var(--tertiary-color);\n    color: (var(--primary-color));\n    color: var(--primary-color);\n}\n\nh3 {\n    font-family: \"Poppins Semibold\";\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/domFunctions.js":
/*!*****************************!*\
  !*** ./src/domFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateAllTaskFolder: () => (/* binding */ activateAllTaskFolder),
/* harmony export */   clearFolders: () => (/* binding */ clearFolders),
/* harmony export */   clearTasks: () => (/* binding */ clearTasks),
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   closeModalByClick: () => (/* binding */ closeModalByClick),
/* harmony export */   displayFolders: () => (/* binding */ displayFolders),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   getDateValues: () => (/* binding */ getDateValues),
/* harmony export */   getDateValuesInNumbers: () => (/* binding */ getDateValuesInNumbers),
/* harmony export */   getSidebarEffects: () => (/* binding */ getSidebarEffects),
/* harmony export */   getWeek: () => (/* binding */ getWeek),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   resetModal: () => (/* binding */ resetModal)
/* harmony export */ });

function displayFolders (array) {
    const container = document.querySelector("#folder-sidebar-container")
    const folderContainer = document.querySelector(".folder-array-container");
    array.forEach((folder) => {
        const listItem = document.createElement("li");
        listItem.classList.add("folder-item")
        listItem.classList.add("sidebar-list-item")
        listItem.setAttribute('data-folder-id', folder.id);
        
        const span = document.createElement("span");
        span.textContent = folder.name;

        const folderDeleteButton = document.createElement("button");
        folderDeleteButton.textContent = "x";
        folderDeleteButton.classList.add("folder-delete-button");
        folderDeleteButton.setAttribute('data-folder-id', folder.id);
        folderDeleteButton.addEventListener("click", function () {
            const folderId = this.dataset.folderId;
            const deleteEvent = new CustomEvent("folderDelete", {detail: {folderId}})
            document.dispatchEvent(deleteEvent);
        });

        container.appendChild(folderContainer);
        folderContainer.appendChild(listItem);
        listItem.appendChild(span);
        listItem.appendChild(folderDeleteButton);
    });
};

// Need to add a button and a form in the Dom.
// When the button is clicked, the form opens.
// Here you can choose one of the folders (They need to be generated dynamically like in the add Task form)
// Once a folder is chosen and confirmed the task gets reassigned to a new folder
// Refresh all needed display Functions so the Task is shown in the right folder

function displayTasks (array) {
    const container = document.querySelector(".task-container")
    array.forEach((task) => {
        const background = document.createElement("div");
        background.classList.add("task-background")

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        const priority = document.createElement("div");
        priority.classList.add("task-priority");
        if (task.priority === "low") {
            priority.classList.add("low-priority")
        } else if (task.priority === "medium") {
            priority.classList.add("medium-priority")
        } else if (task.priority === "high") {
            priority.classList.add("high-priority");
        };

        const taskName = document.createElement("h3");
        taskName.textContent = task.name;

        const taskDeleteButton = document.createElement("button");
        taskDeleteButton.textContent = "x";
        taskDeleteButton.classList.add("task-delete-button");
        taskDeleteButton.setAttribute('data-task-id', task.id);
        taskDeleteButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const deleteEvent = new CustomEvent("taskDelete", {detail: {taskId}})
            document.dispatchEvent(deleteEvent);
        });

        const description = document.createElement("p")
        description.textContent = task.description;

        const deadlineContainer = document.createElement("div");
        deadlineContainer.classList.add("deadline-container");


        const deadlineDateContainer = document.createElement("span");
        const deadlineDate = getDateValues(task.deadline);
        deadlineDateContainer.textContent = "Deadline: " + deadlineDate[0] + ". " + deadlineDate[1] + ", " + deadlineDate[2] + " | ";

        const weekNumber = document.createElement("span");
        weekNumber.textContent = "CW: " + getWeek(task.deadline);
        weekNumber.classList.add("week-number");

        const changeFolderButton = document.createElement("button");
        changeFolderButton.textContent = "Change Folder";
        changeFolderButton.classList.add("change-folder-button");
        changeFolderButton.setAttribute('data-task-id', task.id);
        changeFolderButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const changeFolderEvent = new CustomEvent("changeFolder", {detail: {taskId}})
            document.dispatchEvent(changeFolderEvent);
        });

        const changeDeadlineButton = document.createElement("button");
        changeDeadlineButton.textContent = "Change Deadline";
        changeDeadlineButton.classList.add("change-deadline-button");
        changeDeadlineButton.setAttribute('data-task-id', task.id);
        changeDeadlineButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const changeDeadlineButton = new CustomEvent("changeDeadline", {detail: {taskId}})
            document.dispatchEvent(changeDeadlineButton);
        });



        container.appendChild(background);
        background.appendChild(priority);
        background.appendChild(taskContent);
        priority.appendChild(taskName);
        priority.appendChild(taskDeleteButton);
        deadlineContainer.appendChild(deadlineDateContainer);
        deadlineContainer.appendChild(weekNumber);
        taskContent.appendChild(description);
        taskContent.appendChild(deadlineContainer);
        taskContent.appendChild(changeFolderButton);
        taskContent.appendChild(changeDeadlineButton);
    });
};

// shouldnt be here?
function getDateValues (date) {
    const day = date.getDate();
    const month = date.toLocaleString('de-DE', { month: 'long' });
    const year = date.getFullYear();
    return [day, month, year];
}

function getDateValuesInNumbers (date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return [day, month, year];
}

function getSidebarEffects () {
    const sidebarItems = document.querySelectorAll(".sidebar-list-item");
    sidebarItems.forEach((item) => {
        item.addEventListener("click", () => {
        sidebarItems.forEach((item) => item.classList.remove("active-sidebar-item"))
        item.classList.add("active-sidebar-item");
        });
    });
}


function clearTasks () {
    document.querySelector(".task-container").textContent = "";
}

function clearFolders () {
    document.querySelector(".folder-array-container").textContent = "";
};


function openModal (openButtonClass, modalClass) {
    const modalOpenButton = document.querySelector(openButtonClass)
    const modal = document.querySelector(modalClass);
    modalOpenButton.addEventListener("click", () => modal.showModal())
};


function closeModalByClick (closeButtonClass, modalClass, formClass) {
    const modalCloseButton = document.querySelector(closeButtonClass)
    const modal = document.querySelector(modalClass);
    modalCloseButton.addEventListener("click", () => {
        modal.close();
        resetModal(formClass);
    });
};

function closeModal (modalClass) {
    document.querySelector(modalClass).close();
}

function resetModal (formClass) {
    const form = document.querySelector(formClass);
    form.reset();
}

function activateAllTaskFolder () {
    const allTasksFolder = document.querySelector("#all-task-folder");
    allTasksFolder.classList.add("active-sidebar-item");
}

function getWeek(date) {
    const tempDate = new Date(date.getTime());
    const januaryFourth = new Date(tempDate.getFullYear(), 0, 4);
    const januaryFourthDay = januaryFourth.getDay();
    januaryFourth.setDate(januaryFourth.getDate() - (januaryFourthDay > 0 ? januaryFourthDay - 1 : 6));
    const weekNumber = Math.ceil((((tempDate - januaryFourth) / 86400000) + januaryFourth.getDay() + 1) / 7);
    return weekNumber;
}


/***/ }),

/***/ "./src/folderManager.js":
/*!******************************!*\
  !*** ./src/folderManager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFolder: () => (/* binding */ createFolder),
/* harmony export */   createFolderFormOptions: () => (/* binding */ createFolderFormOptions),
/* harmony export */   "default": () => (/* binding */ addNewFolder),
/* harmony export */   getFolders: () => (/* binding */ getFolders),
/* harmony export */   getTimeFolders: () => (/* binding */ getTimeFolders),
/* harmony export */   removeFolderFromArray: () => (/* binding */ removeFolderFromArray)
/* harmony export */ });


let folderArray = [];
let timeFolderArray = [{name: "My Day", id: 1}, {name: "My Week", id: 2}, {name: "My Month", id: 3}, {name: "Next Month", id: 4}, {name: "Longterm", id: 5}, {name: "Longterm", id: 6}];

function addFolderToArray (folder) {
    folderArray.push(folder);
};

function getFolders () {
    return folderArray;
}

function getTimeFolders () {
    return timeFolderArray;
}


function removeFolderFromArray (folderId) {
    folderArray = folderArray.filter((folder) => folder.id !== parseInt(folderId))
}


let nextFolderId = 7;

function createFolder (name) {
    const newFolder = { name, id: nextFolderId++ }
    addFolderToArray(newFolder);
};

function addNewFolder (e) {
    e.preventDefault();
    const name = document.querySelector("#folder-name").value;
    createFolder(name);
};


function getFolderFormOptions (formId) {
    const optionContainer = document.querySelector(formId);
    folderArray.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option.name;
        optionElement.value = option.id;
        optionContainer.appendChild(optionElement);
    });
}

function clearFolderFormOptions (formId) {
    const optionContainer = document.querySelector(formId);
    optionContainer.textContent = "";
    const noneOption = document.createElement("option");
    noneOption.textContent = "None";
    noneOption.value = "None";
    optionContainer.appendChild(noneOption);
}


function createFolderFormOptions (formId) {
    clearFolderFormOptions(formId);
    getFolderFormOptions(formId);
};





/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToFolder: () => (/* binding */ addTaskToFolder),
/* harmony export */   changeFolder: () => (/* binding */ changeFolder),
/* harmony export */   changePriority: () => (/* binding */ changePriority),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   "default": () => (/* binding */ addNewTask),
/* harmony export */   getFolderTasks: () => (/* binding */ getFolderTasks),
/* harmony export */   getMap: () => (/* binding */ getMap),
/* harmony export */   getTaskFolder: () => (/* binding */ getTaskFolder),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   removeTaskFromArray: () => (/* binding */ removeTaskFromArray),
/* harmony export */   removeTaskFromFolder: () => (/* binding */ removeTaskFromFolder)
/* harmony export */ });


let taskArray = [];
const taskFolderMap = new Map();

function getMap () {
    return taskFolderMap;
}

function addTaskToArray (task) {
    taskArray.unshift(task);
};

function getTasks () {
    return taskArray;
}

function removeTaskFromArray (taskId) {
    taskArray = taskArray.filter((task) => task.id !== parseInt(taskId));
}

let nextTaskId = 1;

// can also be used to change the folder
function addTaskToFolder (taskId, folderId) {
    taskFolderMap.set(taskId, folderId)
}

function removeTaskFromFolder (taskId) {
    taskFolderMap.delete(taskId)
}



function createTask (name, description, priority, deadline, folderId) {
    const newTask = { name, description, priority, deadline, id: nextTaskId++};
    addTaskToArray(newTask);
    addTaskToFolder(newTask.id, folderId)
};

function addNewTask(e) {
    e.preventDefault();
    const name = document.querySelector("#task-name").value;
    const description = document.querySelector("#task-description").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const folderId = document.querySelector("#form-folders").value;
    const deadline = new Date(document.querySelector("#task-deadline").value);
    createTask(name, description, priority, deadline, folderId);
};

function changeFolder(e) {
    e.preventDefault();
    const folderId = document.querySelector("#change-folder").value;
    return folderId;
}



function getFolderTasks(allTasksArray, folderId) {
    return allTasksArray.filter(task => parseInt(taskFolderMap.get(task.id)) === parseInt(folderId));
};

function getTaskFolder (taskId) {
    return taskFolderMap.get(taskId);
}


function changePriority (task, priority) {
    task.priority = priority;
}


// function sortTasksByDate () {
    // array.sort(function(a,b){
    //     // Turn your strings into dates, and then subtract them
    //     // to get a value that is either negative, positive, or zero.
    //     return new Date(b.date) - new Date(a.date);
    //   });
// }

// function sortTasksByPriority () {
    
// }



/***/ }),

/***/ "./src/Poppins/Poppins-Light.ttf":
/*!***************************************!*\
  !*** ./src/Poppins/Poppins-Light.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7641a0f76ca9ef6c252c.ttf";

/***/ }),

/***/ "./src/Poppins/Poppins-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/Poppins/Poppins-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ }),

/***/ "./src/Poppins/Poppins-SemiBold.ttf":
/*!******************************************!*\
  !*** ./src/Poppins/Poppins-SemiBold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ac8d04b620e54be9b0f0.ttf";

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
/******/ 			"main": 0
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLongtermTasks: () => (/* binding */ getLongtermTasks),
/* harmony export */   getMyDayTasks: () => (/* binding */ getMyDayTasks),
/* harmony export */   getMyMonthTasks: () => (/* binding */ getMyMonthTasks),
/* harmony export */   getMyWeekTasks: () => (/* binding */ getMyWeekTasks),
/* harmony export */   getNextMonthTasks: () => (/* binding */ getNextMonthTasks),
/* harmony export */   getOverdueTasks: () => (/* binding */ getOverdueTasks)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager.js */ "./src/taskManager.js");
/* harmony import */ var _folderManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folderManager.js */ "./src/folderManager.js");
/* harmony import */ var _domFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domFunctions.js */ "./src/domFunctions.js");










(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("DayTest", "Do a workout", "high", new Date ("March 8, 2024"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(1, 7)
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("WeekTest", "Do a workout", "high", new Date ("March 12, 2024"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(2, 7)
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("MonthTest", "Do a workout", "high", new Date ("March 24, 2024"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(3, 7)
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("NextMonthTest", "Do a workout", "high", new Date ("April 30, 2024"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(4, 7)
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("LongtermTest", "Do a workout", "high", new Date ("May 1, 2024"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(5, 7)
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("OverdueTest", "Do a workout", "high", new Date ("May 2, 2022"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(6, 7)
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("Fitness", "Meditate for 30 min", "low", new Date ("February 2, 2025"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(7, 8)
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("Meditation", "Meditate for 30 min", "low", new Date ("January 31, 2025"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(8, 9)
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("Programming", "Finish the programming project", "medium", new Date ("March 3, 2026"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(9, 9)

;(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolder)("Time Tests");
(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolder)("Fitness");
(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolder)("Meditation");


(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFolders)((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
console.log((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
console.log((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".open-task-modal").addEventListener("click", () => {
        (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolderFormOptions)("#form-folders");
    });
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(".open-task-modal", ".task-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(".open-folder-modal", ".folder-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModalByClick)(".close-task-modal", ".task-modal", ".task-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModalByClick)(".close-folder-modal", ".folder-modal", ".folder-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getSidebarEffects)();
    addSidebarFolderLogic();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.activateAllTaskFolder)();
});


taskForm.onsubmit = (e) => {
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(".task-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)(".task-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    displayCurrentFolder();
    console.log((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
};

folderForm.onsubmit = (e) => {
    (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(".folder-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)(".folder-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearFolders)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFolders)((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getSidebarEffects) ();
    addSidebarFolderLogic();
    console.log((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
};


document.addEventListener("changeFolder", function(event) {
    const taskId = event.detail.taskId;
    const oldFolder = (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)().filter((folder) => (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTaskFolder)(parseInt(taskId)) === folder.id)
    let folderName = "";
    if (Array.isArray(oldFolder) && oldFolder.length > 0 && typeof oldFolder[0] === 'object') {
        folderName = oldFolder[0].name
    } else {
        folderName = "None"
    };
    (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolderFormOptions)("#change-folder");
    const modal = document.querySelector(".change-folder-modal");
    const currentFolder = document.querySelector("#current-folder");
    currentFolder.textContent = "Current Folder: " + folderName;
    modal.showModal();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModalByClick) (".close-change-folder-modal", ".change-folder-modal", ".change-folder-form")
    const closeButton = document.querySelector(".close-change-folder-modal")
    closeButton.addEventListener("click", () => currentFolder.textContent = "");
    changeFolderForm.onsubmit = (e) => {
        const folderId = (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.changeFolder)(e);
        console.log((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTaskFolder)(parseInt(taskId)))
        ;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder) (parseInt(taskId), parseInt(folderId));
        console.log((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTaskFolder)(parseInt(taskId)))
        modal.close();
        currentFolder.textContent = "";
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)(".change-folder-form");
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
        displayCurrentFolder();
    };
});


document.addEventListener("changeDeadline", function(event) {
    const taskId = event.detail.taskId;
    const currentTask = (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)().filter((task) => parseInt(taskId) === parseInt(task.id));
    const currentDeadlineDateValues = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValues)(currentTask[0].deadline);
    const modal = document.querySelector(".change-deadline-modal");
    const currentDeadlineContainer = document.querySelector("#current-deadline");
    currentDeadlineContainer.textContent = "Current Deadline: " + currentDeadlineDateValues[0] + ". " + currentDeadlineDateValues[1] + ", " + currentDeadlineDateValues[2];
    modal.showModal();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModalByClick) (".close-change-deadline-modal", ".change-deadline-modal", ".change-deadline-form")
    const closeButton = document.querySelector(".close-change-deadline-modal")
    closeButton.addEventListener("click", () => currentDeadlineContainer.textContent = "");
    changeDeadlineForm.onsubmit = (e) => {
        e.preventDefault();
        const newDeadline = new Date(document.querySelector("#change-deadline").value);
        currentTask[0].deadline = newDeadline;
        modal.close();
        currentDeadlineContainer.textContent = "";
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)(".change-deadline-form");
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
        displayCurrentFolder();
    };
});


document.addEventListener("taskDelete", function(event) {
    const taskId = event.detail.taskId;
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromArray)(taskId);
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    displayCurrentFolder();
    console.log((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
    console.log((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
})

function displayCurrentFolder () {
    const activeTask = document.querySelector(".active-sidebar-item")
    const activeTaskId = activeTask.dataset.folderId;
    if (parseInt(activeTaskId) !== parseInt(0)) {
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getFolderTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)(), activeTaskId));
    } else {
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
    };
}


document.addEventListener("folderDelete", function(event) {
    const confirmed = confirm("Are you sure you want to delete this folder?");
    if (confirmed) {
        const folderId = event.detail.folderId
        ;(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.removeFolderFromArray)(folderId);
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearFolders)();
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFolders)((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getSidebarEffects)();
        addSidebarFolderLogic();
        (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.activateAllTaskFolder)();
    } else {
        return;
    };
});

function addSidebarFolderLogic () {
    const folders = document.querySelectorAll(".folder-item");
    folders.forEach((folder) => {
        folder.addEventListener("click", () => {
            const folderId = folder.dataset.folderId;
            (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
            (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getFolderTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)(), folderId));
        });
    });
}


const allTasksFolder = document.querySelector("#all-task-folder");
allTasksFolder.addEventListener("click", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
});


const myDayFolder = document.querySelector("#my-day-folder");
myDayFolder.addEventListener("click", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    getMyDayTasks((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
});

const myWeekFolder = document.querySelector("#my-week-folder");
myWeekFolder.addEventListener("click", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    getMyWeekTasks((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
});

const myMonthFolder = document.querySelector("#my-month-folder");
myMonthFolder.addEventListener("click", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    getMyMonthTasks((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
});

const nextMonthFolder = document.querySelector("#next-month-folder");
nextMonthFolder.addEventListener("click", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    getNextMonthTasks((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
});

const longtermFolder = document.querySelector("#longterm-folder");
longtermFolder.addEventListener("click", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    getLongtermTasks((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
});

const overdueFolder = document.querySelector("#overdue-folder");
overdueFolder.addEventListener("click", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    getOverdueTasks((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
});


function getMyDayTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        return JSON.stringify((0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValuesInNumbers)(task.deadline)) === JSON.stringify((0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValuesInNumbers)(new Date()));
    })
    ;(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(filteredTasks);
};


function getMyWeekTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        return (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getWeek)(task.deadline) == (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getWeek)(new Date());
    })
    ;(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(filteredTasks);  
};


function getMyMonthTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        return (JSON.stringify((0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValues)(task.deadline)[1]) === JSON.stringify((0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValues)(new Date())[1]) &&
                JSON.stringify((0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValues)(task.deadline)[2]) === JSON.stringify((0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValues)(new Date())[2]));
    })
    ;(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(filteredTasks);
};


function getNextMonthTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        const [deadlineDay, deadlineMonth, deadlineYear] = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValuesInNumbers)(task.deadline);
        const [currentDay, currentMonth, currentYear] = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValuesInNumbers)(new Date());
        return  (deadlineMonth === currentMonth + 1 && deadlineYear === currentYear) ||
                (deadlineMonth === currentMonth - 11 && deadlineYear === currentYear + 1);
    });
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(filteredTasks);
};


function getLongtermTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        const [deadlineDay, deadlineMonth, deadlineYear] = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValuesInNumbers)(task.deadline);
        const [currentDay, currentMonth, currentYear] = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValuesInNumbers)(new Date());
        return  (deadlineYear > currentYear + 1) ||
                (deadlineYear > currentYear && !(deadlineMonth == 0 && currentMonth == 11)) ||
                (deadlineYear == currentYear && deadlineMonth > currentMonth + 1 )
    });
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(filteredTasks);
};


function getOverdueTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        const [deadlineDay, deadlineMonth, deadlineYear] = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValuesInNumbers)(task.deadline);
        const [currentDay, currentMonth, currentYear] = (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getDateValuesInNumbers)(new Date());
        return  (deadlineYear < currentYear) ||
                (deadlineYear == currentYear && deadlineMonth < currentMonth) ||
                (deadlineYear == currentYear && deadlineMonth == currentMonth && deadlineDay < currentDay)
    });
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(filteredTasks);
};



// add design
// add local storage
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlJQUFpRDtBQUM3Riw0Q0FBNEMsbUlBQThDO0FBQzFGLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLDRFQUE0RSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVks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dUNBQXVDLCtEQUFhO0FBQ2hHLEtBQUs7QUFDTCxJQUFJLCtEQUFZO0FBQ2hCOzs7QUFHTztBQUNQO0FBQ0EsMkRBQTJELHdFQUFzQjtBQUNqRix3REFBd0Qsd0VBQXNCO0FBQzlFO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7O0FBR087QUFDUDtBQUNBLDJEQUEyRCx3RUFBc0I7QUFDakYsd0RBQXdELHdFQUFzQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7O0FBR087QUFDUDtBQUNBLDJEQUEyRCx3RUFBc0I7QUFDakYsd0RBQXdELHdFQUFzQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7OztBQUlBO0FBQ0Esb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9sZGVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Qb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Qb3BwaW5zL1BvcHBpbnMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNzI3MjlhO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYjJiMmMzO1xuICAgIC0tdGVydGlhcnktY29sb3I6ICNlZGViZjA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyBTZW1pYm9sZCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIH1cblxuQGZvbnQtZmFjZSB7XG5mb250LWZhbWlseTogJ1BvcHBpbnMgTGlnaHQnO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyBSZWd1bGFyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgfVxuXG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBMaWdodFwiO1xufVxuXG5cbi5zY3JlZW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDEyMHB4IDFmciAvIDM1MHB4IDFmcjtcbiAgICBoZWlnaHQ6IDEwMHZoXG59XG5cbi5uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcilcbn1cblxuLnNpZGViYXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogOHB4IDBweCAxNXB4IC0xMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZm9sZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5saSB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG59XG5cbi5zaWRlYmFyIC5vcGVuLXRhc2stbW9kYWwsIC5zaWRlYmFyIC5vcGVuLWZvbGRlci1tb2RhbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm9wZW4tdGFzay1tb2RhbCwgLm9wZW4tZm9sZGVyLW1vZGFsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuLm9wZW4tdGFzay1tb2RhbDpob3ZlciwgLm9wZW4tZm9sZGVyLW1vZGFsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLnRpbWUtcGVyaW9kLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBTZW1pYm9sZFwiO1xufVxuXG5saSBzcGFuIHtcbiAgICBtYXJnaW46IDAgMzBweCAwIDA7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDMwcHggNTBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4udGFzay1iYWNrZ3JvdW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCAtMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YXNrLXByaW9yaXR5IHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAzMHB4O1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oaWdoLXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA5NiwgOTYpO1xufVxuXG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxMzIsIDcyKTtcbn1cblxuLmxvdy1wcmlvcml0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCAxODUsIDkzKTtcbn1cblxuLnRhc2stZGVsZXRlLWJ1dHRvbntcbiAgICBmb250LWZhbWlseTogUG9wcGlucyBTZW1pYm9sZDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnNpZGViYXItbGlzdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNpZGViYXItbGlzdC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uYWN0aXZlLXNpZGViYXItaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAgIGNvbG9yOiAodmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgU2VtaWJvbGRcIjtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRDQUEwQztFQUM1Qzs7QUFFRjtBQUNBLDRCQUE0QjtBQUM1Qiw0Q0FBdUM7QUFDdkM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNENBQXlDO0VBQzNDOzs7QUFHRjtJQUNJLFNBQVM7SUFDVCxTQUFTO0lBQ1QsNEJBQTRCO0FBQ2hDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGdEQUFnRDtJQUNoRCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktY29sb3I6ICM3MjcyOWE7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYjJiMmMzO1xcbiAgICAtLXRlcnRpYXJ5LWNvbG9yOiAjZWRlYmYwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zIFNlbWlib2xkJztcXG4gICAgc3JjOiB1cmwoJy4vUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpO1xcbiAgfVxcblxcbkBmb250LWZhY2Uge1xcbmZvbnQtZmFtaWx5OiAnUG9wcGlucyBMaWdodCc7XFxuc3JjOiB1cmwoJy4vUG9wcGlucy9Qb3BwaW5zLUxpZ2h0LnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zIFJlZ3VsYXInO1xcbiAgICBzcmM6IHVybCgnLi9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGYnKTtcXG4gIH1cXG5cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGlucyBMaWdodFxcXCI7XFxufVxcblxcblxcbi5zY3JlZW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTIwcHggMWZyIC8gMzUwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoXFxufVxcblxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcilcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDhweCAwcHggMTVweCAtMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4uZm9sZGVyLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5saSB7XFxuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhciAub3Blbi10YXNrLW1vZGFsLCAuc2lkZWJhciAub3Blbi1mb2xkZXItbW9kYWwge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm9wZW4tdGFzay1tb2RhbCwgLm9wZW4tZm9sZGVyLW1vZGFsIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxufVxcblxcbi5vcGVuLXRhc2stbW9kYWw6aG92ZXIsIC5vcGVuLWZvbGRlci1tb2RhbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4udGltZS1wZXJpb2QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRpbmcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDEycHggMzBweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMgU2VtaWJvbGRcXFwiO1xcbn1cXG5cXG5saSBzcGFuIHtcXG4gICAgbWFyZ2luOiAwIDMwcHggMCAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAzMHB4IDUwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi50YXNrLWJhY2tncm91bmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCAtMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YXNrLXByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDMwcHg7XFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDk2LCA5Nik7XFxufVxcblxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAxMzIsIDcyKTtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NywgMTg1LCA5Myk7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b257XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zIFNlbWlib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uc2lkZWJhci1saXN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zaWRlYmFyLWxpc3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG4uYWN0aXZlLXNpZGViYXItaXRlbSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6ICh2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMgU2VtaWJvbGRcXFwiO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlGb2xkZXJzIChhcnJheSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyLXNpZGViYXItY29udGFpbmVyXCIpXG4gICAgY29uc3QgZm9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xkZXItYXJyYXktY29udGFpbmVyXCIpO1xuICAgIGFycmF5LmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImZvbGRlci1pdGVtXCIpXG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWxpc3QtaXRlbVwiKVxuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9sZGVyLWlkJywgZm9sZGVyLmlkKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGZvbGRlci5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGZvbGRlckRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZvbGRlckRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICBmb2xkZXJEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZvbGRlci1kZWxldGUtYnV0dG9uXCIpO1xuICAgICAgICBmb2xkZXJEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWZvbGRlci1pZCcsIGZvbGRlci5pZCk7XG4gICAgICAgIGZvbGRlckRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZm9sZGVySWQgPSB0aGlzLmRhdGFzZXQuZm9sZGVySWQ7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVFdmVudCA9IG5ldyBDdXN0b21FdmVudChcImZvbGRlckRlbGV0ZVwiLCB7ZGV0YWlsOiB7Zm9sZGVySWR9fSlcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZGVsZXRlRXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGZvbGRlckRlbGV0ZUJ1dHRvbik7XG4gICAgfSk7XG59O1xuXG4vLyBOZWVkIHRvIGFkZCBhIGJ1dHRvbiBhbmQgYSBmb3JtIGluIHRoZSBEb20uXG4vLyBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCwgdGhlIGZvcm0gb3BlbnMuXG4vLyBIZXJlIHlvdSBjYW4gY2hvb3NlIG9uZSBvZiB0aGUgZm9sZGVycyAoVGhleSBuZWVkIHRvIGJlIGdlbmVyYXRlZCBkeW5hbWljYWxseSBsaWtlIGluIHRoZSBhZGQgVGFzayBmb3JtKVxuLy8gT25jZSBhIGZvbGRlciBpcyBjaG9zZW4gYW5kIGNvbmZpcm1lZCB0aGUgdGFzayBnZXRzIHJlYXNzaWduZWQgdG8gYSBuZXcgZm9sZGVyXG4vLyBSZWZyZXNoIGFsbCBuZWVkZWQgZGlzcGxheSBGdW5jdGlvbnMgc28gdGhlIFRhc2sgaXMgc2hvd24gaW4gdGhlIHJpZ2h0IGZvbGRlclxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRhc2tzIChhcnJheSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIilcbiAgICBhcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJhY2tncm91bmRcIilcblxuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRlbnRcIik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIilcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibWVkaXVtLXByaW9yaXR5XCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcblxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1idXR0b25cIik7XG4gICAgICAgIHRhc2tEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB0YXNrLmlkKTtcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gdGhpcy5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwidGFza0RlbGV0ZVwiLCB7ZGV0YWlsOiB7dGFza0lkfX0pXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGRlbGV0ZUV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZGVhZGxpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZWFkbGluZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVhZGxpbmUtY29udGFpbmVyXCIpO1xuXG5cbiAgICAgICAgY29uc3QgZGVhZGxpbmVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNvbnN0IGRlYWRsaW5lRGF0ZSA9IGdldERhdGVWYWx1ZXModGFzay5kZWFkbGluZSk7XG4gICAgICAgIGRlYWRsaW5lRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiRGVhZGxpbmU6IFwiICsgZGVhZGxpbmVEYXRlWzBdICsgXCIuIFwiICsgZGVhZGxpbmVEYXRlWzFdICsgXCIsIFwiICsgZGVhZGxpbmVEYXRlWzJdICsgXCIgfCBcIjtcblxuICAgICAgICBjb25zdCB3ZWVrTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHdlZWtOdW1iZXIudGV4dENvbnRlbnQgPSBcIkNXOiBcIiArIGdldFdlZWsodGFzay5kZWFkbGluZSk7XG4gICAgICAgIHdlZWtOdW1iZXIuY2xhc3NMaXN0LmFkZChcIndlZWstbnVtYmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZUZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoYW5nZUZvbGRlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIEZvbGRlclwiO1xuICAgICAgICBjaGFuZ2VGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoYW5nZS1mb2xkZXItYnV0dG9uXCIpO1xuICAgICAgICBjaGFuZ2VGb2xkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB0YXNrLmlkKTtcbiAgICAgICAgY2hhbmdlRm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSB0aGlzLmRhdGFzZXQudGFza0lkO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlRm9sZGVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VGb2xkZXJcIiwge2RldGFpbDoge3Rhc2tJZH19KVxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjaGFuZ2VGb2xkZXJFdmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZURlYWRsaW5lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2hhbmdlRGVhZGxpbmVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoYW5nZSBEZWFkbGluZVwiO1xuICAgICAgICBjaGFuZ2VEZWFkbGluZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLWRlYWRsaW5lLWJ1dHRvblwiKTtcbiAgICAgICAgY2hhbmdlRGVhZGxpbmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB0YXNrLmlkKTtcbiAgICAgICAgY2hhbmdlRGVhZGxpbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IHRoaXMuZGF0YXNldC50YXNrSWQ7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VEZWFkbGluZUJ1dHRvbiA9IG5ldyBDdXN0b21FdmVudChcImNoYW5nZURlYWRsaW5lXCIsIHtkZXRhaWw6IHt0YXNrSWR9fSlcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY2hhbmdlRGVhZGxpbmVCdXR0b24pO1xuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgICAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lRGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtOdW1iZXIpO1xuICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGRlYWRsaW5lQ29udGFpbmVyKTtcbiAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2hhbmdlRm9sZGVyQnV0dG9uKTtcbiAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2hhbmdlRGVhZGxpbmVCdXR0b24pO1xuICAgIH0pO1xufTtcblxuLy8gc2hvdWxkbnQgYmUgaGVyZT9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlVmFsdWVzIChkYXRlKSB7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZS1ERScsIHsgbW9udGg6ICdsb25nJyB9KTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlVmFsdWVzSW5OdW1iZXJzIChkYXRlKSB7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lkZWJhckVmZmVjdHMgKCkge1xuICAgIGNvbnN0IHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1saXN0LWl0ZW1cIik7XG4gICAgc2lkZWJhckl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzaWRlYmFySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXItaXRlbVwiKSlcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNpZGViYXItaXRlbVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza3MgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb2xkZXJzICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1hcnJheS1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1vZGFsIChvcGVuQnV0dG9uQ2xhc3MsIG1vZGFsQ2xhc3MpIHtcbiAgICBjb25zdCBtb2RhbE9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wZW5CdXR0b25DbGFzcylcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxDbGFzcyk7XG4gICAgbW9kYWxPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5zaG93TW9kYWwoKSlcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWxCeUNsaWNrIChjbG9zZUJ1dHRvbkNsYXNzLCBtb2RhbENsYXNzLCBmb3JtQ2xhc3MpIHtcbiAgICBjb25zdCBtb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zZUJ1dHRvbkNsYXNzKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RhbENsYXNzKTtcbiAgICBtb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIHJlc2V0TW9kYWwoZm9ybUNsYXNzKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsIChtb2RhbENsYXNzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RhbENsYXNzKS5jbG9zZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRNb2RhbCAoZm9ybUNsYXNzKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybUNsYXNzKTtcbiAgICBmb3JtLnJlc2V0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUFsbFRhc2tGb2xkZXIgKCkge1xuICAgIGNvbnN0IGFsbFRhc2tzRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtdGFzay1mb2xkZXJcIik7XG4gICAgYWxsVGFza3NGb2xkZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zaWRlYmFyLWl0ZW1cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUpIHtcbiAgICBjb25zdCB0ZW1wRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICBjb25zdCBqYW51YXJ5Rm91cnRoID0gbmV3IERhdGUodGVtcERhdGUuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG4gICAgY29uc3QgamFudWFyeUZvdXJ0aERheSA9IGphbnVhcnlGb3VydGguZ2V0RGF5KCk7XG4gICAgamFudWFyeUZvdXJ0aC5zZXREYXRlKGphbnVhcnlGb3VydGguZ2V0RGF0ZSgpIC0gKGphbnVhcnlGb3VydGhEYXkgPiAwID8gamFudWFyeUZvdXJ0aERheSAtIDEgOiA2KSk7XG4gICAgY29uc3Qgd2Vla051bWJlciA9IE1hdGguY2VpbCgoKCh0ZW1wRGF0ZSAtIGphbnVhcnlGb3VydGgpIC8gODY0MDAwMDApICsgamFudWFyeUZvdXJ0aC5nZXREYXkoKSArIDEpIC8gNyk7XG4gICAgcmV0dXJuIHdlZWtOdW1iZXI7XG59XG4iLCJcblxubGV0IGZvbGRlckFycmF5ID0gW107XG5sZXQgdGltZUZvbGRlckFycmF5ID0gW3tuYW1lOiBcIk15IERheVwiLCBpZDogMX0sIHtuYW1lOiBcIk15IFdlZWtcIiwgaWQ6IDJ9LCB7bmFtZTogXCJNeSBNb250aFwiLCBpZDogM30sIHtuYW1lOiBcIk5leHQgTW9udGhcIiwgaWQ6IDR9LCB7bmFtZTogXCJMb25ndGVybVwiLCBpZDogNX0sIHtuYW1lOiBcIkxvbmd0ZXJtXCIsIGlkOiA2fV07XG5cbmZ1bmN0aW9uIGFkZEZvbGRlclRvQXJyYXkgKGZvbGRlcikge1xuICAgIGZvbGRlckFycmF5LnB1c2goZm9sZGVyKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2xkZXJzICgpIHtcbiAgICByZXR1cm4gZm9sZGVyQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lRm9sZGVycyAoKSB7XG4gICAgcmV0dXJuIHRpbWVGb2xkZXJBcnJheTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9sZGVyRnJvbUFycmF5IChmb2xkZXJJZCkge1xuICAgIGZvbGRlckFycmF5ID0gZm9sZGVyQXJyYXkuZmlsdGVyKChmb2xkZXIpID0+IGZvbGRlci5pZCAhPT0gcGFyc2VJbnQoZm9sZGVySWQpKVxufVxuXG5cbmxldCBuZXh0Rm9sZGVySWQgPSA3O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9sZGVyIChuYW1lKSB7XG4gICAgY29uc3QgbmV3Rm9sZGVyID0geyBuYW1lLCBpZDogbmV4dEZvbGRlcklkKysgfVxuICAgIGFkZEZvbGRlclRvQXJyYXkobmV3Rm9sZGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5ld0ZvbGRlciAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXItbmFtZVwiKS52YWx1ZTtcbiAgICBjcmVhdGVGb2xkZXIobmFtZSk7XG59O1xuXG5cbmZ1bmN0aW9uIGdldEZvbGRlckZvcm1PcHRpb25zIChmb3JtSWQpIHtcbiAgICBjb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1JZCk7XG4gICAgZm9sZGVyQXJyYXkuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uLm5hbWU7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24uaWQ7XG4gICAgICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGb2xkZXJGb3JtT3B0aW9ucyAoZm9ybUlkKSB7XG4gICAgY29uc3Qgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtSWQpO1xuICAgIG9wdGlvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29uc3Qgbm9uZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbm9uZU9wdGlvbi50ZXh0Q29udGVudCA9IFwiTm9uZVwiO1xuICAgIG5vbmVPcHRpb24udmFsdWUgPSBcIk5vbmVcIjtcbiAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobm9uZU9wdGlvbik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvbGRlckZvcm1PcHRpb25zIChmb3JtSWQpIHtcbiAgICBjbGVhckZvbGRlckZvcm1PcHRpb25zKGZvcm1JZCk7XG4gICAgZ2V0Rm9sZGVyRm9ybU9wdGlvbnMoZm9ybUlkKTtcbn07XG5cblxuXG4iLCJcblxubGV0IHRhc2tBcnJheSA9IFtdO1xuY29uc3QgdGFza0ZvbGRlck1hcCA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcCAoKSB7XG4gICAgcmV0dXJuIHRhc2tGb2xkZXJNYXA7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0FycmF5ICh0YXNrKSB7XG4gICAgdGFza0FycmF5LnVuc2hpZnQodGFzayk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MgKCkge1xuICAgIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUFycmF5ICh0YXNrSWQpIHtcbiAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBwYXJzZUludCh0YXNrSWQpKTtcbn1cblxubGV0IG5leHRUYXNrSWQgPSAxO1xuXG4vLyBjYW4gYWxzbyBiZSB1c2VkIHRvIGNoYW5nZSB0aGUgZm9sZGVyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza1RvRm9sZGVyICh0YXNrSWQsIGZvbGRlcklkKSB7XG4gICAgdGFza0ZvbGRlck1hcC5zZXQodGFza0lkLCBmb2xkZXJJZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRm9sZGVyICh0YXNrSWQpIHtcbiAgICB0YXNrRm9sZGVyTWFwLmRlbGV0ZSh0YXNrSWQpXG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayAobmFtZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkZWFkbGluZSwgZm9sZGVySWQpIHtcbiAgICBjb25zdCBuZXdUYXNrID0geyBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRlYWRsaW5lLCBpZDogbmV4dFRhc2tJZCsrfTtcbiAgICBhZGRUYXNrVG9BcnJheShuZXdUYXNrKTtcbiAgICBhZGRUYXNrVG9Gb2xkZXIobmV3VGFzay5pZCwgZm9sZGVySWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROZXdUYXNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1mb2xkZXJzXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlYWRsaW5lID0gbmV3IERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlYWRsaW5lXCIpLnZhbHVlKTtcbiAgICBjcmVhdGVUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGVhZGxpbmUsIGZvbGRlcklkKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGb2xkZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhbmdlLWZvbGRlclwiKS52YWx1ZTtcbiAgICByZXR1cm4gZm9sZGVySWQ7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9sZGVyVGFza3MoYWxsVGFza3NBcnJheSwgZm9sZGVySWQpIHtcbiAgICByZXR1cm4gYWxsVGFza3NBcnJheS5maWx0ZXIodGFzayA9PiBwYXJzZUludCh0YXNrRm9sZGVyTWFwLmdldCh0YXNrLmlkKSkgPT09IHBhcnNlSW50KGZvbGRlcklkKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0ZvbGRlciAodGFza0lkKSB7XG4gICAgcmV0dXJuIHRhc2tGb2xkZXJNYXAuZ2V0KHRhc2tJZCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5ICh0YXNrLCBwcmlvcml0eSkge1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbn1cblxuXG4vLyBmdW5jdGlvbiBzb3J0VGFza3NCeURhdGUgKCkge1xuICAgIC8vIGFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAvLyAgICAgLy8gVHVybiB5b3VyIHN0cmluZ3MgaW50byBkYXRlcywgYW5kIHRoZW4gc3VidHJhY3QgdGhlbVxuICAgIC8vICAgICAvLyB0byBnZXQgYSB2YWx1ZSB0aGF0IGlzIGVpdGhlciBuZWdhdGl2ZSwgcG9zaXRpdmUsIG9yIHplcm8uXG4gICAgLy8gICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKTtcbiAgICAvLyAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBzb3J0VGFza3NCeVByaW9yaXR5ICgpIHtcbiAgICBcbi8vIH1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgYWRkTmV3VGFzayBmcm9tIFwiLi90YXNrTWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgZ2V0VGFza3MsIHJlbW92ZVRhc2tGcm9tQXJyYXksIHJlbW92ZVRhc2tGcm9tRm9sZGVycywgYWRkVGFza1RvRm9sZGVyLCBjaGFuZ2VQcmlvcml0eSwgY3JlYXRlVGFzaywgZ2V0Rm9sZGVyVGFza3MsIGdldFRhc2tGb2xkZXIsIGNoYW5nZUZvbGRlciB9IGZyb20gJy4vdGFza01hbmFnZXIuanMnO1xuaW1wb3J0IGFkZE5ld0ZvbGRlciBmcm9tIFwiLi9mb2xkZXJNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBnZXRGb2xkZXJzLCBjcmVhdGVGb2xkZXIsIHJlbW92ZUZvbGRlckZyb21BcnJheSwgY3JlYXRlRm9sZGVyRm9ybU9wdGlvbnMsIGdldFRpbWVGb2xkZXJzIH0gZnJvbSBcIi4vZm9sZGVyTWFuYWdlci5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheUZvbGRlcnMsIGRpc3BsYXlUYXNrcywgb3Blbk1vZGFsLCBjbG9zZU1vZGFsLCBjbG9zZU1vZGFsQnlDbGljaywgcmVzZXRNb2RhbCwgY2xlYXJUYXNrcywgY2xlYXJGb2xkZXJzLCBnZXRTaWRlYmFyRWZmZWN0cywgYWN0aXZhdGVBbGxUYXNrRm9sZGVyLCBnZXREYXRlVmFsdWVzLCBnZXREYXRlVmFsdWVzSW5OdW1iZXJzLCBnZXRXZWVrIH0gZnJvbSBcIi4vZG9tRnVuY3Rpb25zLmpzXCI7XG5cblxuY3JlYXRlVGFzayAoXCJEYXlUZXN0XCIsIFwiRG8gYSB3b3Jrb3V0XCIsIFwiaGlnaFwiLCBuZXcgRGF0ZSAoXCJNYXJjaCA4LCAyMDI0XCIpKTtcbmFkZFRhc2tUb0ZvbGRlcigxLCA3KVxuY3JlYXRlVGFzayAoXCJXZWVrVGVzdFwiLCBcIkRvIGEgd29ya291dFwiLCBcImhpZ2hcIiwgbmV3IERhdGUgKFwiTWFyY2ggMTIsIDIwMjRcIikpO1xuYWRkVGFza1RvRm9sZGVyKDIsIDcpXG5jcmVhdGVUYXNrIChcIk1vbnRoVGVzdFwiLCBcIkRvIGEgd29ya291dFwiLCBcImhpZ2hcIiwgbmV3IERhdGUgKFwiTWFyY2ggMjQsIDIwMjRcIikpO1xuYWRkVGFza1RvRm9sZGVyKDMsIDcpXG5jcmVhdGVUYXNrIChcIk5leHRNb250aFRlc3RcIiwgXCJEbyBhIHdvcmtvdXRcIiwgXCJoaWdoXCIsIG5ldyBEYXRlIChcIkFwcmlsIDMwLCAyMDI0XCIpKTtcbmFkZFRhc2tUb0ZvbGRlcig0LCA3KVxuY3JlYXRlVGFzayAoXCJMb25ndGVybVRlc3RcIiwgXCJEbyBhIHdvcmtvdXRcIiwgXCJoaWdoXCIsIG5ldyBEYXRlIChcIk1heSAxLCAyMDI0XCIpKTtcbmFkZFRhc2tUb0ZvbGRlcig1LCA3KVxuY3JlYXRlVGFzayAoXCJPdmVyZHVlVGVzdFwiLCBcIkRvIGEgd29ya291dFwiLCBcImhpZ2hcIiwgbmV3IERhdGUgKFwiTWF5IDIsIDIwMjJcIikpO1xuYWRkVGFza1RvRm9sZGVyKDYsIDcpXG5jcmVhdGVUYXNrIChcIkZpdG5lc3NcIiwgXCJNZWRpdGF0ZSBmb3IgMzAgbWluXCIsIFwibG93XCIsIG5ldyBEYXRlIChcIkZlYnJ1YXJ5IDIsIDIwMjVcIikpO1xuYWRkVGFza1RvRm9sZGVyKDcsIDgpXG5jcmVhdGVUYXNrIChcIk1lZGl0YXRpb25cIiwgXCJNZWRpdGF0ZSBmb3IgMzAgbWluXCIsIFwibG93XCIsIG5ldyBEYXRlIChcIkphbnVhcnkgMzEsIDIwMjVcIikpO1xuYWRkVGFza1RvRm9sZGVyKDgsIDkpXG5jcmVhdGVUYXNrIChcIlByb2dyYW1taW5nXCIsIFwiRmluaXNoIHRoZSBwcm9ncmFtbWluZyBwcm9qZWN0XCIsIFwibWVkaXVtXCIsIG5ldyBEYXRlIChcIk1hcmNoIDMsIDIwMjZcIikpO1xuYWRkVGFza1RvRm9sZGVyKDksIDkpXG5cbmNyZWF0ZUZvbGRlcihcIlRpbWUgVGVzdHNcIik7XG5jcmVhdGVGb2xkZXIoXCJGaXRuZXNzXCIpO1xuY3JlYXRlRm9sZGVyKFwiTWVkaXRhdGlvblwiKTtcblxuXG5kaXNwbGF5Rm9sZGVycyhnZXRGb2xkZXJzKCkpO1xuY29uc29sZS5sb2coZ2V0Rm9sZGVycygpKTtcbmRpc3BsYXlUYXNrcyhnZXRUYXNrcygpKTtcbmNvbnNvbGUubG9nKGdldFRhc2tzKCkpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLXRhc2stbW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3JlYXRlRm9sZGVyRm9ybU9wdGlvbnMoXCIjZm9ybS1mb2xkZXJzXCIpO1xuICAgIH0pO1xuICAgIG9wZW5Nb2RhbChcIi5vcGVuLXRhc2stbW9kYWxcIiwgXCIudGFzay1tb2RhbFwiKTtcbiAgICBvcGVuTW9kYWwoXCIub3Blbi1mb2xkZXItbW9kYWxcIiwgXCIuZm9sZGVyLW1vZGFsXCIpO1xuICAgIGNsb3NlTW9kYWxCeUNsaWNrKFwiLmNsb3NlLXRhc2stbW9kYWxcIiwgXCIudGFzay1tb2RhbFwiLCBcIi50YXNrLWZvcm1cIik7XG4gICAgY2xvc2VNb2RhbEJ5Q2xpY2soXCIuY2xvc2UtZm9sZGVyLW1vZGFsXCIsIFwiLmZvbGRlci1tb2RhbFwiLCBcIi5mb2xkZXItZm9ybVwiKTtcbiAgICBnZXRTaWRlYmFyRWZmZWN0cygpO1xuICAgIGFkZFNpZGViYXJGb2xkZXJMb2dpYygpO1xuICAgIGFjdGl2YXRlQWxsVGFza0ZvbGRlcigpO1xufSk7XG5cblxudGFza0Zvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGFkZE5ld1Rhc2soZSk7XG4gICAgY2xvc2VNb2RhbChcIi50YXNrLW1vZGFsXCIpO1xuICAgIHJlc2V0TW9kYWwoXCIudGFzay1mb3JtXCIpO1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBkaXNwbGF5Q3VycmVudEZvbGRlcigpO1xuICAgIGNvbnNvbGUubG9nKGdldFRhc2tzKCkpO1xufTtcblxuZm9sZGVyRm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgYWRkTmV3Rm9sZGVyKGUpO1xuICAgIGNsb3NlTW9kYWwoXCIuZm9sZGVyLW1vZGFsXCIpO1xuICAgIHJlc2V0TW9kYWwoXCIuZm9sZGVyLWZvcm1cIik7XG4gICAgY2xlYXJGb2xkZXJzKCk7XG4gICAgZGlzcGxheUZvbGRlcnMoZ2V0Rm9sZGVycygpKTtcbiAgICBnZXRTaWRlYmFyRWZmZWN0cyAoKTtcbiAgICBhZGRTaWRlYmFyRm9sZGVyTG9naWMoKTtcbiAgICBjb25zb2xlLmxvZyhnZXRGb2xkZXJzKCkpO1xufTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlRm9sZGVyXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0lkID0gZXZlbnQuZGV0YWlsLnRhc2tJZDtcbiAgICBjb25zdCBvbGRGb2xkZXIgPSBnZXRGb2xkZXJzKCkuZmlsdGVyKChmb2xkZXIpID0+IGdldFRhc2tGb2xkZXIocGFyc2VJbnQodGFza0lkKSkgPT09IGZvbGRlci5pZClcbiAgICBsZXQgZm9sZGVyTmFtZSA9IFwiXCI7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2xkRm9sZGVyKSAmJiBvbGRGb2xkZXIubGVuZ3RoID4gMCAmJiB0eXBlb2Ygb2xkRm9sZGVyWzBdID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb2xkZXJOYW1lID0gb2xkRm9sZGVyWzBdLm5hbWVcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb2xkZXJOYW1lID0gXCJOb25lXCJcbiAgICB9O1xuICAgIGNyZWF0ZUZvbGRlckZvcm1PcHRpb25zKFwiI2NoYW5nZS1mb2xkZXJcIik7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1mb2xkZXItbW9kYWxcIik7XG4gICAgY29uc3QgY3VycmVudEZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC1mb2xkZXJcIik7XG4gICAgY3VycmVudEZvbGRlci50ZXh0Q29udGVudCA9IFwiQ3VycmVudCBGb2xkZXI6IFwiICsgZm9sZGVyTmFtZTtcbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICBjbG9zZU1vZGFsQnlDbGljayAoXCIuY2xvc2UtY2hhbmdlLWZvbGRlci1tb2RhbFwiLCBcIi5jaGFuZ2UtZm9sZGVyLW1vZGFsXCIsIFwiLmNoYW5nZS1mb2xkZXItZm9ybVwiKVxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1jaGFuZ2UtZm9sZGVyLW1vZGFsXCIpXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGN1cnJlbnRGb2xkZXIudGV4dENvbnRlbnQgPSBcIlwiKTtcbiAgICBjaGFuZ2VGb2xkZXJGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgZm9sZGVySWQgPSBjaGFuZ2VGb2xkZXIoZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGdldFRhc2tGb2xkZXIocGFyc2VJbnQodGFza0lkKSkpXG4gICAgICAgIGFkZFRhc2tUb0ZvbGRlciAocGFyc2VJbnQodGFza0lkKSwgcGFyc2VJbnQoZm9sZGVySWQpKTtcbiAgICAgICAgY29uc29sZS5sb2coZ2V0VGFza0ZvbGRlcihwYXJzZUludCh0YXNrSWQpKSlcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgY3VycmVudEZvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHJlc2V0TW9kYWwoXCIuY2hhbmdlLWZvbGRlci1mb3JtXCIpO1xuICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50Rm9sZGVyKCk7XG4gICAgfTtcbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VEZWFkbGluZVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LmRldGFpbC50YXNrSWQ7XG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBnZXRUYXNrcygpLmZpbHRlcigodGFzaykgPT4gcGFyc2VJbnQodGFza0lkKSA9PT0gcGFyc2VJbnQodGFzay5pZCkpO1xuICAgIGNvbnN0IGN1cnJlbnREZWFkbGluZURhdGVWYWx1ZXMgPSBnZXREYXRlVmFsdWVzKGN1cnJlbnRUYXNrWzBdLmRlYWRsaW5lKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlLWRlYWRsaW5lLW1vZGFsXCIpO1xuICAgIGNvbnN0IGN1cnJlbnREZWFkbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC1kZWFkbGluZVwiKTtcbiAgICBjdXJyZW50RGVhZGxpbmVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgRGVhZGxpbmU6IFwiICsgY3VycmVudERlYWRsaW5lRGF0ZVZhbHVlc1swXSArIFwiLiBcIiArIGN1cnJlbnREZWFkbGluZURhdGVWYWx1ZXNbMV0gKyBcIiwgXCIgKyBjdXJyZW50RGVhZGxpbmVEYXRlVmFsdWVzWzJdO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIGNsb3NlTW9kYWxCeUNsaWNrIChcIi5jbG9zZS1jaGFuZ2UtZGVhZGxpbmUtbW9kYWxcIiwgXCIuY2hhbmdlLWRlYWRsaW5lLW1vZGFsXCIsIFwiLmNoYW5nZS1kZWFkbGluZS1mb3JtXCIpXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWNoYW5nZS1kZWFkbGluZS1tb2RhbFwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjdXJyZW50RGVhZGxpbmVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiKTtcbiAgICBjaGFuZ2VEZWFkbGluZUZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5ld0RlYWRsaW5lID0gbmV3IERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGFuZ2UtZGVhZGxpbmVcIikudmFsdWUpO1xuICAgICAgICBjdXJyZW50VGFza1swXS5kZWFkbGluZSA9IG5ld0RlYWRsaW5lO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICBjdXJyZW50RGVhZGxpbmVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICByZXNldE1vZGFsKFwiLmNoYW5nZS1kZWFkbGluZS1mb3JtXCIpO1xuICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50Rm9sZGVyKCk7XG4gICAgfTtcbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXNrRGVsZXRlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0lkID0gZXZlbnQuZGV0YWlsLnRhc2tJZDtcbiAgICByZW1vdmVUYXNrRnJvbUFycmF5KHRhc2tJZCk7XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIGRpc3BsYXlDdXJyZW50Rm9sZGVyKCk7XG4gICAgY29uc29sZS5sb2coZ2V0VGFza3MoKSk7XG4gICAgY29uc29sZS5sb2coZ2V0Rm9sZGVycygpKTtcbn0pXG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Rm9sZGVyICgpIHtcbiAgICBjb25zdCBhY3RpdmVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtc2lkZWJhci1pdGVtXCIpXG4gICAgY29uc3QgYWN0aXZlVGFza0lkID0gYWN0aXZlVGFzay5kYXRhc2V0LmZvbGRlcklkO1xuICAgIGlmIChwYXJzZUludChhY3RpdmVUYXNrSWQpICE9PSBwYXJzZUludCgwKSkge1xuICAgICAgICBkaXNwbGF5VGFza3MoZ2V0Rm9sZGVyVGFza3MoZ2V0VGFza3MoKSwgYWN0aXZlVGFza0lkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVRhc2tzKGdldFRhc2tzKCkpO1xuICAgIH07XG59XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvbGRlckRlbGV0ZVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZm9sZGVyP1wiKTtcbiAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlcklkID0gZXZlbnQuZGV0YWlsLmZvbGRlcklkXG4gICAgICAgIHJlbW92ZUZvbGRlckZyb21BcnJheShmb2xkZXJJZCk7XG4gICAgICAgIGNsZWFyRm9sZGVycygpO1xuICAgICAgICBkaXNwbGF5Rm9sZGVycyhnZXRGb2xkZXJzKCkpO1xuICAgICAgICBnZXRTaWRlYmFyRWZmZWN0cygpO1xuICAgICAgICBhZGRTaWRlYmFyRm9sZGVyTG9naWMoKTtcbiAgICAgICAgYWN0aXZhdGVBbGxUYXNrRm9sZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG59KTtcblxuZnVuY3Rpb24gYWRkU2lkZWJhckZvbGRlckxvZ2ljICgpIHtcbiAgICBjb25zdCBmb2xkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb2xkZXItaXRlbVwiKTtcbiAgICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgICBmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlcklkID0gZm9sZGVyLmRhdGFzZXQuZm9sZGVySWQ7XG4gICAgICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoZ2V0Rm9sZGVyVGFza3MoZ2V0VGFza3MoKSwgZm9sZGVySWQpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuY29uc3QgYWxsVGFza3NGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC10YXNrLWZvbGRlclwiKTtcbmFsbFRhc2tzRm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIGRpc3BsYXlUYXNrcyhnZXRUYXNrcygpKTtcbn0pO1xuXG5cbmNvbnN0IG15RGF5Rm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteS1kYXktZm9sZGVyXCIpO1xubXlEYXlGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0TXlEYXlUYXNrcyhnZXRUYXNrcygpKTtcbn0pO1xuXG5jb25zdCBteVdlZWtGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215LXdlZWstZm9sZGVyXCIpO1xubXlXZWVrRm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIGdldE15V2Vla1Rhc2tzKGdldFRhc2tzKCkpO1xufSk7XG5cbmNvbnN0IG15TW9udGhGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215LW1vbnRoLWZvbGRlclwiKTtcbm15TW9udGhGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0TXlNb250aFRhc2tzKGdldFRhc2tzKCkpO1xufSk7XG5cbmNvbnN0IG5leHRNb250aEZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dC1tb250aC1mb2xkZXJcIik7XG5uZXh0TW9udGhGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0TmV4dE1vbnRoVGFza3MoZ2V0VGFza3MoKSk7XG59KTtcblxuY29uc3QgbG9uZ3Rlcm1Gb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvbmd0ZXJtLWZvbGRlclwiKTtcbmxvbmd0ZXJtRm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIGdldExvbmd0ZXJtVGFza3MoZ2V0VGFza3MoKSk7XG59KTtcblxuY29uc3Qgb3ZlcmR1ZUZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmR1ZS1mb2xkZXJcIik7XG5vdmVyZHVlRm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIGdldE92ZXJkdWVUYXNrcyhnZXRUYXNrcygpKTtcbn0pO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNeURheVRhc2tzIChhbGxUYXNrcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGdldERhdGVWYWx1ZXNJbk51bWJlcnModGFzay5kZWFkbGluZSkpID09PSBKU09OLnN0cmluZ2lmeShnZXREYXRlVmFsdWVzSW5OdW1iZXJzKG5ldyBEYXRlKCkpKTtcbiAgICB9KVxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE15V2Vla1Rhc2tzIChhbGxUYXNrcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgcmV0dXJuIGdldFdlZWsodGFzay5kZWFkbGluZSkgPT0gZ2V0V2VlayhuZXcgRGF0ZSgpKTtcbiAgICB9KVxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRhc2tzKTsgIFxufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXlNb250aFRhc2tzIChhbGxUYXNrcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgcmV0dXJuIChKU09OLnN0cmluZ2lmeShnZXREYXRlVmFsdWVzKHRhc2suZGVhZGxpbmUpWzFdKSA9PT0gSlNPTi5zdHJpbmdpZnkoZ2V0RGF0ZVZhbHVlcyhuZXcgRGF0ZSgpKVsxXSkgJiZcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShnZXREYXRlVmFsdWVzKHRhc2suZGVhZGxpbmUpWzJdKSA9PT0gSlNPTi5zdHJpbmdpZnkoZ2V0RGF0ZVZhbHVlcyhuZXcgRGF0ZSgpKVsyXSkpO1xuICAgIH0pXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVGFza3MpO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dE1vbnRoVGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBbZGVhZGxpbmVEYXksIGRlYWRsaW5lTW9udGgsIGRlYWRsaW5lWWVhcl0gPSBnZXREYXRlVmFsdWVzSW5OdW1iZXJzKHRhc2suZGVhZGxpbmUpO1xuICAgICAgICBjb25zdCBbY3VycmVudERheSwgY3VycmVudE1vbnRoLCBjdXJyZW50WWVhcl0gPSBnZXREYXRlVmFsdWVzSW5OdW1iZXJzKG5ldyBEYXRlKCkpO1xuICAgICAgICByZXR1cm4gIChkZWFkbGluZU1vbnRoID09PSBjdXJyZW50TW9udGggKyAxICYmIGRlYWRsaW5lWWVhciA9PT0gY3VycmVudFllYXIpIHx8XG4gICAgICAgICAgICAgICAgKGRlYWRsaW5lTW9udGggPT09IGN1cnJlbnRNb250aCAtIDExICYmIGRlYWRsaW5lWWVhciA9PT0gY3VycmVudFllYXIgKyAxKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5VGFza3MoZmlsdGVyZWRUYXNrcyk7XG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb25ndGVybVRhc2tzIChhbGxUYXNrcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgW2RlYWRsaW5lRGF5LCBkZWFkbGluZU1vbnRoLCBkZWFkbGluZVllYXJdID0gZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyh0YXNrLmRlYWRsaW5lKTtcbiAgICAgICAgY29uc3QgW2N1cnJlbnREYXksIGN1cnJlbnRNb250aCwgY3VycmVudFllYXJdID0gZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuICAoZGVhZGxpbmVZZWFyID4gY3VycmVudFllYXIgKyAxKSB8fFxuICAgICAgICAgICAgICAgIChkZWFkbGluZVllYXIgPiBjdXJyZW50WWVhciAmJiAhKGRlYWRsaW5lTW9udGggPT0gMCAmJiBjdXJyZW50TW9udGggPT0gMTEpKSB8fFxuICAgICAgICAgICAgICAgIChkZWFkbGluZVllYXIgPT0gY3VycmVudFllYXIgJiYgZGVhZGxpbmVNb250aCA+IGN1cnJlbnRNb250aCArIDEgKVxuICAgIH0pO1xuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE92ZXJkdWVUYXNrcyAoYWxsVGFza3MpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IFtkZWFkbGluZURheSwgZGVhZGxpbmVNb250aCwgZGVhZGxpbmVZZWFyXSA9IGdldERhdGVWYWx1ZXNJbk51bWJlcnModGFzay5kZWFkbGluZSk7XG4gICAgICAgIGNvbnN0IFtjdXJyZW50RGF5LCBjdXJyZW50TW9udGgsIGN1cnJlbnRZZWFyXSA9IGdldERhdGVWYWx1ZXNJbk51bWJlcnMobmV3IERhdGUoKSk7XG4gICAgICAgIHJldHVybiAgKGRlYWRsaW5lWWVhciA8IGN1cnJlbnRZZWFyKSB8fFxuICAgICAgICAgICAgICAgIChkZWFkbGluZVllYXIgPT0gY3VycmVudFllYXIgJiYgZGVhZGxpbmVNb250aCA8IGN1cnJlbnRNb250aCkgfHxcbiAgICAgICAgICAgICAgICAoZGVhZGxpbmVZZWFyID09IGN1cnJlbnRZZWFyICYmIGRlYWRsaW5lTW9udGggPT0gY3VycmVudE1vbnRoICYmIGRlYWRsaW5lRGF5IDwgY3VycmVudERheSlcbiAgICB9KTtcbiAgICBkaXNwbGF5VGFza3MoZmlsdGVyZWRUYXNrcyk7XG59O1xuXG5cblxuLy8gYWRkIGRlc2lnblxuLy8gYWRkIGxvY2FsIHN0b3JhZ2UiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=