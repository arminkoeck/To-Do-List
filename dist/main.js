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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
body {
    margin: 0;
    border: 0;
}


.screen-container {
    display: grid;
    grid-template: 120px 1fr / 350px 1fr;
    height: 100vh
}

.nav {
    background-color: #493d55;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    padding-top: 20px;
}

.sidebar {
    background-color: #41c9a0;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
}

.folder-container {
    padding-bottom: 20px;
}

.task-container {
    background-color: #fbfb5e;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
}

ul {
    list-style: none;
    font-size: 24px;
    font-weight: 400;
    padding: 0;
    margin: 0;
}

li {
    padding: 10px 30px;
}

.sidebar .open-task-modal {
    margin-left: 30px;
    margin-top: 20px;
}

.open-task-modal {
    border: 2px solid red;
    border-radius: 3px;
    background-color: rgb(255, 185, 185);
    font-size: 24px;
    font-weight: 600;
    padding: 5px 15px;
}

.time-period-container {
    background-color: darkgreen;
    padding-bottom: 20px;
}

.sidebar-heading {
    margin: 0;
    padding: 20px 30px;
    font-size: 30px;
    background-color: orange;
    margin-bottom: 20px;
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
}

.high-priority {
    background-color: red;
}

.medium-priority {
    background-color: blue;
}

.low-priority {
    background-color: green;
}

.delete-button {
    background-color: pink;
    color: red;
    border: none;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,SAAS;IACT,SAAS;AACb;;;AAGA;IACI,aAAa;IACb,oCAAoC;IACpC;AACJ;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,oCAAoC;IACpC,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;IAC3B,oBAAoB;AACxB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,eAAe;IACf,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iDAAiD;IACjD,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,aAAa;IACb,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,YAAY;AAChB","sourcesContent":["\nbody {\n    margin: 0;\n    border: 0;\n}\n\n\n.screen-container {\n    display: grid;\n    grid-template: 120px 1fr / 350px 1fr;\n    height: 100vh\n}\n\n.nav {\n    background-color: #493d55;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    padding-top: 20px;\n}\n\n.sidebar {\n    background-color: #41c9a0;\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\n.folder-container {\n    padding-bottom: 20px;\n}\n\n.task-container {\n    background-color: #fbfb5e;\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\nul {\n    list-style: none;\n    font-size: 24px;\n    font-weight: 400;\n    padding: 0;\n    margin: 0;\n}\n\nli {\n    padding: 10px 30px;\n}\n\n.sidebar .open-task-modal {\n    margin-left: 30px;\n    margin-top: 20px;\n}\n\n.open-task-modal {\n    border: 2px solid red;\n    border-radius: 3px;\n    background-color: rgb(255, 185, 185);\n    font-size: 24px;\n    font-weight: 600;\n    padding: 5px 15px;\n}\n\n.time-period-container {\n    background-color: darkgreen;\n    padding-bottom: 20px;\n}\n\n.sidebar-heading {\n    margin: 0;\n    padding: 20px 30px;\n    font-size: 30px;\n    background-color: orange;\n    margin-bottom: 20px;\n}\n\nli span {\n    margin: 0 30px 0 0;\n}\n\n.task-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px 50px;\n    padding: 30px;\n}\n\n.task-background {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    box-shadow: 0px 12px 20px -10px rgb(0, 0, 0, 0.3);\n    border-radius: 5px;\n    max-height: 400px;\n}\n\n.task-content {\n    padding: 20px;\n}\n\n.task-priority {\n    padding: 10px 20px;\n    color: white;\n    border-radius: 5px 5px 0px 0px;\n    display: grid;\n    grid-template: 1fr / 1fr 30px;\n    grid-gap: 20px;\n}\n\n.high-priority {\n    background-color: red;\n}\n\n.medium-priority {\n    background-color: blue;\n}\n\n.low-priority {\n    background-color: green;\n}\n\n.delete-button {\n    background-color: pink;\n    color: red;\n    border: none;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony export */   clearTasks: () => (/* binding */ clearTasks),
/* harmony export */   closeTaskModal: () => (/* binding */ closeTaskModal),
/* harmony export */   closeTaskModalByClick: () => (/* binding */ closeTaskModalByClick),
/* harmony export */   displayFolders: () => (/* binding */ displayFolders),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   openTaskModal: () => (/* binding */ openTaskModal),
/* harmony export */   resetTaskModal: () => (/* binding */ resetTaskModal)
/* harmony export */ });

function displayFolders (array) {
    const container = document.querySelector(".sidebar-list")
    array.forEach((folder) => {
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = folder.name;
        listItem.appendChild(span);
        container.appendChild(listItem);
    });
};

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

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.classList.add("delete-button");
        deleteButton.setAttribute('data-task-id', task.id);
        deleteButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const deleteEvent = new CustomEvent("taskDelete", {detail: {taskId}})
            document.dispatchEvent(deleteEvent);
        });


        const description = document.createElement("p")
        description.textContent = task.description;

        container.appendChild(background);
        background.appendChild(priority);
        background.appendChild(taskContent);
        priority.appendChild(taskName);
        priority.appendChild(deleteButton);
        taskContent.appendChild(description);
    });
};



// For folders, check if each folder has an item, that doesnt occur in the "All items Array". If there is one delete it.
// Also give each task a folder value. If the folder value changes, move task to other folder. If its assigned first to a folder, add it to this folder.


function openTaskModal () {
    const modalOpenButton = document.querySelector(".open-task-modal")
    const modal = document.querySelector(".task-modal");
    modalOpenButton.addEventListener("click", () => modal.showModal())
};


function closeTaskModalByClick () {
    const modalCloseButton = document.querySelector(".close-task-modal")
    const modal = document.querySelector(".task-modal");
    modalCloseButton.addEventListener("click", () => modal.close());
};

function closeTaskModal () {
    document.querySelector(".task-modal").close();
}

function resetTaskModal () {
    document.querySelector(".task-form").reset();
}

function clearTasks () {
    document.querySelector(".task-container").textContent = "";
}





/***/ }),

/***/ "./src/folderManager.js":
/*!******************************!*\
  !*** ./src/folderManager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFolder),
/* harmony export */   getFolders: () => (/* binding */ getFolders),
/* harmony export */   removeFolder: () => (/* binding */ removeFolder)
/* harmony export */ });


const folderArray = [];

function addFolderToArray (folder) {
    folderArray.push(folder);
};

function getFolders () {
    return folderArray;
}

function removeFolder (folder) {
    const index = folderArray.indexOf(folder);
    if (index !== -1) {
        folderArray.splice(index, 1);
    };
};

// export default function createFolder (name) {
//     const newFolder = { name, tasks: [] }
//     addFolderToArray(newFolder);
// };

let nextFolderId = 1;

function createFolder (name) {
    const newFolder = { name, Id: nextFolderId++ }
    addFolderToArray(newFolder);
};

function getFolderFormOptions () {

    const optionContainer = document.querySelector("#form-folders");

    folderArray.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option.name;
        optionElement.value = option.name;
        optionContainer.appendChild(optionElement);
    });
}

function clearFolderFormOptions () {
    const optionContainer = document.querySelector("#form-folders");
    optionContainer.textContent = "";
    const noneOption = document.createElement("option");
    noneOption.textContent = "None";
    noneOption.value = "None";
    optionContainer.appendChild(noneOption);
}

const modalOpenButton = document.querySelector(".open-task-modal")
modalOpenButton.addEventListener("click", () => {
    clearFolderFormOptions();
    getFolderFormOptions();
});


/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewTask: () => (/* binding */ addNewTask),
/* harmony export */   changePriority: () => (/* binding */ changePriority),
/* harmony export */   changeTaskFolder: () => (/* binding */ changeTaskFolder),
/* harmony export */   "default": () => (/* binding */ createTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   removeTaskFromArray: () => (/* binding */ removeTaskFromArray),
/* harmony export */   removeTaskFromFolders: () => (/* binding */ removeTaskFromFolders)
/* harmony export */ });


let taskArray = [];
const taskFolderMap = new Map();

function addTaskToArray (task) {
    taskArray.unshift(task);
};

function getTasks () {
    return taskArray;
}

function removeTaskFromArray (taskId) {
    taskArray = taskArray.filter((task) => task.id !== parseInt(taskId));
}


// nicht ideal. wenn ich .tasks im folderManager umbenenne, funktioniert der Code hier nicht mehr
function removeTaskFromFolders(taskId, folders) {
    folders.forEach((folder) => {
        folder.tasks = folder.tasks.filter((task) => task.id !== parseInt(taskId));
    });
};

let nextTaskId = 1;

function createTask (name, description, priority) {
    const newTask = { name, description, priority, id: nextTaskId++};
    addTaskToArray(newTask);
};


function addNewTask(e) {
    e.preventDefault();
    let valueArray = []
    let data = new FormData(taskForm)
    for (let v of data) {
        valueArray.push(v[1])
    };
    createTask(...valueArray);
};



// export function addTaskToFolder (task, folder) {
//     folder.unshift(task);
// };


function changeTaskFolder (task, oldFolder, newFolder) {
    removeTaskFromFolder(task, oldFolder);
    addTaskToFolder(task, newFolder);
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskManager.js */ "./src/taskManager.js");
/* harmony import */ var _folderManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folderManager.js */ "./src/folderManager.js");
/* harmony import */ var _domFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domFunctions.js */ "./src/domFunctions.js");













(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]) ("Fitness", "Do a workout", "high");
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]) ("Meditation", "Meditate for 30 min", "low");
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]) ("Programming", "Finish the programming project", "medium");

(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__["default"])("Fitness");
(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__["default"])("Meditation");
// addTaskToFolder(getTasks()[2], getFolders()[0].tasks)


(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFolders)((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
console.log((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
console.log((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());

document.addEventListener("DOMContentLoaded", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.openTaskModal)();
});

document.addEventListener("DOMContentLoaded", () => {
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeTaskModalByClick)();
});

   

taskForm.onsubmit = (e) => {
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(e);
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeTaskModal)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetTaskModal)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
    console.log((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
};


document.addEventListener("taskDelete", function(event) {
    const taskId = event.detail.taskId;
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromArray)(taskId);
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromFolders)(taskId, (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)()); //funktioniert ja nur, wenn ich auf den delete Button drücke, nicht wenn ich den Folder ändern möchte
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
    console.log((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
    console.log((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
})


// after deleting a task, the same folder should be reloaded with the rest of the tasks and not the all tasks array




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQ3FCOztBQUVxQjtBQUM2RztBQUN6RztBQUNnQjtBQUNxRjs7Ozs7O0FBTW5KLDJEQUFVO0FBQ1YsMkRBQVU7QUFDViwyREFBVTs7QUFFViw2REFBWTtBQUNaLDZEQUFZO0FBQ1o7OztBQUdBLGdFQUFjLENBQUMsNkRBQVU7QUFDekIsWUFBWSw2REFBVTtBQUN0Qiw4REFBWSxDQUFDLHlEQUFRO0FBQ3JCLFlBQVkseURBQVE7O0FBRXBCO0FBQ0EsSUFBSSwrREFBYTtBQUNqQixDQUFDOztBQUVEO0FBQ0EsSUFBSSx1RUFBcUI7QUFDekIsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLElBQUksMkRBQVU7QUFDZCxJQUFJLGdFQUFjO0FBQ2xCLElBQUksZ0VBQWM7QUFDbEIsSUFBSSw0REFBVTtBQUNkLElBQUksOERBQVksQ0FBQyx5REFBUTtBQUN6QixnQkFBZ0IseURBQVE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLG9FQUFtQjtBQUN2QixJQUFJLHNFQUFxQixTQUFTLDZEQUFVLEtBQUs7QUFDakQsSUFBSSw0REFBVTtBQUNkLElBQUksOERBQVksQ0FBQyx5REFBUTtBQUN6QixnQkFBZ0IseURBQVE7QUFDeEIsZ0JBQWdCLDZEQUFVO0FBQzFCLENBQUM7OztBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ZvbGRlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG59XG5cblxuLnNjcmVlbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMTIwcHggMWZyIC8gMzUwcHggMWZyO1xuICAgIGhlaWdodDogMTAwdmhcbn1cblxuLm5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5M2Q1NTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc2lkZWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxYzlhMDtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG4uZm9sZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmI1ZTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxubGkge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbn1cblxuLnNpZGViYXIgLm9wZW4tdGFzay1tb2RhbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm9wZW4tdGFzay1tb2RhbCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODUsIDE4NSk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi50aW1lLXBlcmlvZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZGViYXItaGVhZGluZyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmxpIHNwYW4ge1xuICAgIG1hcmdpbjogMCAzMHB4IDAgMDtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMzBweCA1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi50YXNrLWJhY2tncm91bmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IC0xMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxuLnRhc2stY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhc2stcHJpb3JpdHkge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDMwcHg7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG59XG5cbi5oaWdoLXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5tZWRpdW0tcHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbi5sb3ctcHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLFNBQVM7SUFDVCxTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpREFBaUQ7SUFDakQsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbn1cXG5cXG5cXG4uc2NyZWVuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEyMHB4IDFmciAvIDM1MHB4IDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aFxcbn1cXG5cXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5M2Q1NTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MWM5YTA7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4uZm9sZGVyLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYjVlO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxubGkge1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5vcGVuLXRhc2stbW9kYWwge1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLm9wZW4tdGFzay1tb2RhbCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODUsIDE4NSk7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxufVxcblxcbi50aW1lLXBlcmlvZC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5saSBzcGFuIHtcXG4gICAgbWFyZ2luOiAwIDMwcHggMCAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAzMHB4IDUwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi50YXNrLWJhY2tncm91bmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCAtMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi50YXNrLXByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDMwcHg7XFxuICAgIGdyaWQtZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9sZGVycyAoYXJyYXkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItbGlzdFwiKVxuICAgIGFycmF5LmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZm9sZGVyLm5hbWU7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyAoYXJyYXkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpXG4gICAgYXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKFwidGFzay1iYWNrZ3JvdW5kXCIpXG5cbiAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2stcHJpb3JpdHlcIik7XG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKVxuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwiaGlnaC1wcmlvcml0eVwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJywgdGFzay5pZCk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gdGhpcy5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwidGFza0RlbGV0ZVwiLCB7ZGV0YWlsOiB7dGFza0lkfX0pXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGRlbGV0ZUV2ZW50KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgfSk7XG59O1xuXG5cblxuLy8gRm9yIGZvbGRlcnMsIGNoZWNrIGlmIGVhY2ggZm9sZGVyIGhhcyBhbiBpdGVtLCB0aGF0IGRvZXNudCBvY2N1ciBpbiB0aGUgXCJBbGwgaXRlbXMgQXJyYXlcIi4gSWYgdGhlcmUgaXMgb25lIGRlbGV0ZSBpdC5cbi8vIEFsc28gZ2l2ZSBlYWNoIHRhc2sgYSBmb2xkZXIgdmFsdWUuIElmIHRoZSBmb2xkZXIgdmFsdWUgY2hhbmdlcywgbW92ZSB0YXNrIHRvIG90aGVyIGZvbGRlci4gSWYgaXRzIGFzc2lnbmVkIGZpcnN0IHRvIGEgZm9sZGVyLCBhZGQgaXQgdG8gdGhpcyBmb2xkZXIuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5UYXNrTW9kYWwgKCkge1xuICAgIGNvbnN0IG1vZGFsT3BlbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3Blbi10YXNrLW1vZGFsXCIpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbW9kYWxcIik7XG4gICAgbW9kYWxPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5zaG93TW9kYWwoKSlcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlVGFza01vZGFsQnlDbGljayAoKSB7XG4gICAgY29uc3QgbW9kYWxDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtdGFzay1tb2RhbFwiKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW1vZGFsXCIpO1xuICAgIG1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1vZGFsLmNsb3NlKCkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlVGFza01vZGFsICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbW9kYWxcIikuY2xvc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0VGFza01vZGFsICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKS5yZXNldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUYXNrcyAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKS50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cblxuXG4iLCJcblxuY29uc3QgZm9sZGVyQXJyYXkgPSBbXTtcblxuZnVuY3Rpb24gYWRkRm9sZGVyVG9BcnJheSAoZm9sZGVyKSB7XG4gICAgZm9sZGVyQXJyYXkucHVzaChmb2xkZXIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbGRlcnMgKCkge1xuICAgIHJldHVybiBmb2xkZXJBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvbGRlciAoZm9sZGVyKSB7XG4gICAgY29uc3QgaW5kZXggPSBmb2xkZXJBcnJheS5pbmRleE9mKGZvbGRlcik7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBmb2xkZXJBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG59O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb2xkZXIgKG5hbWUpIHtcbi8vICAgICBjb25zdCBuZXdGb2xkZXIgPSB7IG5hbWUsIHRhc2tzOiBbXSB9XG4vLyAgICAgYWRkRm9sZGVyVG9BcnJheShuZXdGb2xkZXIpO1xuLy8gfTtcblxubGV0IG5leHRGb2xkZXJJZCA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvbGRlciAobmFtZSkge1xuICAgIGNvbnN0IG5ld0ZvbGRlciA9IHsgbmFtZSwgSWQ6IG5leHRGb2xkZXJJZCsrIH1cbiAgICBhZGRGb2xkZXJUb0FycmF5KG5ld0ZvbGRlcik7XG59O1xuXG5mdW5jdGlvbiBnZXRGb2xkZXJGb3JtT3B0aW9ucyAoKSB7XG5cbiAgICBjb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm0tZm9sZGVyc1wiKTtcblxuICAgIGZvbGRlckFycmF5LmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbi5uYW1lO1xuICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uLm5hbWU7XG4gICAgICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGb2xkZXJGb3JtT3B0aW9ucyAoKSB7XG4gICAgY29uc3Qgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWZvbGRlcnNcIik7XG4gICAgb3B0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb25zdCBub25lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBub25lT3B0aW9uLnRleHRDb250ZW50ID0gXCJOb25lXCI7XG4gICAgbm9uZU9wdGlvbi52YWx1ZSA9IFwiTm9uZVwiO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChub25lT3B0aW9uKTtcbn1cblxuY29uc3QgbW9kYWxPcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLXRhc2stbW9kYWxcIilcbm1vZGFsT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyRm9sZGVyRm9ybU9wdGlvbnMoKTtcbiAgICBnZXRGb2xkZXJGb3JtT3B0aW9ucygpO1xufSk7XG4iLCJcblxubGV0IHRhc2tBcnJheSA9IFtdO1xuY29uc3QgdGFza0ZvbGRlck1hcCA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gYWRkVGFza1RvQXJyYXkgKHRhc2spIHtcbiAgICB0YXNrQXJyYXkudW5zaGlmdCh0YXNrKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrcyAoKSB7XG4gICAgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tQXJyYXkgKHRhc2tJZCkge1xuICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHBhcnNlSW50KHRhc2tJZCkpO1xufVxuXG5cbi8vIG5pY2h0IGlkZWFsLiB3ZW5uIGljaCAudGFza3MgaW0gZm9sZGVyTWFuYWdlciB1bWJlbmVubmUsIGZ1bmt0aW9uaWVydCBkZXIgQ29kZSBoaWVyIG5pY2h0IG1laHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUZvbGRlcnModGFza0lkLCBmb2xkZXJzKSB7XG4gICAgZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICAgICAgZm9sZGVyLnRhc2tzID0gZm9sZGVyLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gcGFyc2VJbnQodGFza0lkKSk7XG4gICAgfSk7XG59O1xuXG5sZXQgbmV4dFRhc2tJZCA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sgKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7IG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgaWQ6IG5leHRUYXNrSWQrK307XG4gICAgYWRkVGFza1RvQXJyYXkobmV3VGFzayk7XG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdUYXNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHZhbHVlQXJyYXkgPSBbXVxuICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKHRhc2tGb3JtKVxuICAgIGZvciAobGV0IHYgb2YgZGF0YSkge1xuICAgICAgICB2YWx1ZUFycmF5LnB1c2godlsxXSlcbiAgICB9O1xuICAgIGNyZWF0ZVRhc2soLi4udmFsdWVBcnJheSk7XG59O1xuXG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tUb0ZvbGRlciAodGFzaywgZm9sZGVyKSB7XG4vLyAgICAgZm9sZGVyLnVuc2hpZnQodGFzayk7XG4vLyB9O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUYXNrRm9sZGVyICh0YXNrLCBvbGRGb2xkZXIsIG5ld0ZvbGRlcikge1xuICAgIHJlbW92ZVRhc2tGcm9tRm9sZGVyKHRhc2ssIG9sZEZvbGRlcik7XG4gICAgYWRkVGFza1RvRm9sZGVyKHRhc2ssIG5ld0ZvbGRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmlvcml0eSAodGFzaywgcHJpb3JpdHkpIHtcbiAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG59XG5cblxuLy8gZnVuY3Rpb24gc29ydFRhc2tzQnlEYXRlICgpIHtcbiAgICAvLyBhcnJheS5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgLy8gICAgIC8vIFR1cm4geW91ciBzdHJpbmdzIGludG8gZGF0ZXMsIGFuZCB0aGVuIHN1YnRyYWN0IHRoZW1cbiAgICAvLyAgICAgLy8gdG8gZ2V0IGEgdmFsdWUgdGhhdCBpcyBlaXRoZXIgbmVnYXRpdmUsIHBvc2l0aXZlLCBvciB6ZXJvLlxuICAgIC8vICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSk7XG4gICAgLy8gICB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gc29ydFRhc2tzQnlQcmlvcml0eSAoKSB7XG4gICAgXG4vLyB9XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL3Rhc2tNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBnZXRUYXNrcywgcmVtb3ZlVGFza0Zyb21BcnJheSwgcmVtb3ZlVGFza0Zyb21Gb2xkZXJzLCBhZGRUYXNrVG9Gb2xkZXIsIGNoYW5nZVRhc2tGb2xkZXIsIGNoYW5nZVByaW9yaXR5LCBhZGROZXdUYXNrIH0gZnJvbSAnLi90YXNrTWFuYWdlci5qcyc7XG5pbXBvcnQgY3JlYXRlRm9sZGVyIGZyb20gXCIuL2ZvbGRlck1hbmFnZXIuanNcIjtcbmltcG9ydCB7IGdldEZvbGRlcnMsIHJlbW92ZUZvbGRlciB9IGZyb20gXCIuL2ZvbGRlck1hbmFnZXIuanNcIjtcbmltcG9ydCB7IGRpc3BsYXlGb2xkZXJzLCBkaXNwbGF5VGFza3MsIG9wZW5UYXNrTW9kYWwsIGNsb3NlVGFza01vZGFsLCBjbG9zZVRhc2tNb2RhbEJ5Q2xpY2ssIHJlc2V0VGFza01vZGFsLCBjbGVhclRhc2tzIH0gZnJvbSBcIi4vZG9tRnVuY3Rpb25zLmpzXCI7XG5cblxuXG5cblxuY3JlYXRlVGFzayAoXCJGaXRuZXNzXCIsIFwiRG8gYSB3b3Jrb3V0XCIsIFwiaGlnaFwiKTtcbmNyZWF0ZVRhc2sgKFwiTWVkaXRhdGlvblwiLCBcIk1lZGl0YXRlIGZvciAzMCBtaW5cIiwgXCJsb3dcIik7XG5jcmVhdGVUYXNrIChcIlByb2dyYW1taW5nXCIsIFwiRmluaXNoIHRoZSBwcm9ncmFtbWluZyBwcm9qZWN0XCIsIFwibWVkaXVtXCIpO1xuXG5jcmVhdGVGb2xkZXIoXCJGaXRuZXNzXCIpO1xuY3JlYXRlRm9sZGVyKFwiTWVkaXRhdGlvblwiKTtcbi8vIGFkZFRhc2tUb0ZvbGRlcihnZXRUYXNrcygpWzJdLCBnZXRGb2xkZXJzKClbMF0udGFza3MpXG5cblxuZGlzcGxheUZvbGRlcnMoZ2V0Rm9sZGVycygpKTtcbmNvbnNvbGUubG9nKGdldEZvbGRlcnMoKSk7XG5kaXNwbGF5VGFza3MoZ2V0VGFza3MoKSk7XG5jb25zb2xlLmxvZyhnZXRUYXNrcygpKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIG9wZW5UYXNrTW9kYWwoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY2xvc2VUYXNrTW9kYWxCeUNsaWNrKCk7XG59KTtcblxuICAgXG5cbnRhc2tGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICBhZGROZXdUYXNrKGUpO1xuICAgIGNsb3NlVGFza01vZGFsKCk7XG4gICAgcmVzZXRUYXNrTW9kYWwoKTtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZGlzcGxheVRhc2tzKGdldFRhc2tzKCkpO1xuICAgIGNvbnNvbGUubG9nKGdldFRhc2tzKCkpO1xufTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidGFza0RlbGV0ZVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LmRldGFpbC50YXNrSWQ7XG4gICAgcmVtb3ZlVGFza0Zyb21BcnJheSh0YXNrSWQpO1xuICAgIHJlbW92ZVRhc2tGcm9tRm9sZGVycyh0YXNrSWQsIGdldEZvbGRlcnMoKSk7IC8vZnVua3Rpb25pZXJ0IGphIG51ciwgd2VubiBpY2ggYXVmIGRlbiBkZWxldGUgQnV0dG9uIGRyw7xja2UsIG5pY2h0IHdlbm4gaWNoIGRlbiBGb2xkZXIgw6RuZGVybiBtw7ZjaHRlXG4gICAgY2xlYXJUYXNrcygpO1xuICAgIGRpc3BsYXlUYXNrcyhnZXRUYXNrcygpKTtcbiAgICBjb25zb2xlLmxvZyhnZXRUYXNrcygpKTtcbiAgICBjb25zb2xlLmxvZyhnZXRGb2xkZXJzKCkpO1xufSlcblxuXG4vLyBhZnRlciBkZWxldGluZyBhIHRhc2ssIHRoZSBzYW1lIGZvbGRlciBzaG91bGQgYmUgcmVsb2FkZWQgd2l0aCB0aGUgcmVzdCBvZiB0aGUgdGFza3MgYW5kIG5vdCB0aGUgYWxsIHRhc2tzIGFycmF5XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=