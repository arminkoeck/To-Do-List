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
    --primary-color: #50505f;
    --secondary-color: #b2b2c3;
    --tertiary-color: #edebf0;
    --green-color: rgb(97, 185, 93);
    --yellow-color: rgb(236, 183, 67);
    --red-color: rgb(255, 96, 96);
    --shadow-color: rgb(0, 0, 0, 0.3);
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
    color: var(--primary-color);
    letter-spacing: 1px;
}

button {
    font-family: "Poppins Semibold";
    font-size: 14px;
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
    z-index: 1;
    border-bottom: 2px solid var(--primary-color);
    box-shadow: 0px 8px 15px -10px var(--shadow-color);
    display: flex;
    align-items: center;
}

.logo {
    height: 80px;
    margin: 0px 30px;
}

.sidebar {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background-color: white;
    box-shadow: 8px 0px 15px -10px var(--shadow-color);
    z-index: 2;
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
    margin: 10px 30px 0px;
}


.open-task-modal, .open-folder-modal {
    border: none;
    border-radius: 3px;
    color: var(--primary-color);
    font-family: "Poppins Semibold";
    font-size: 18px;
    background-color: transparent;
    padding: 0px;
}


.open-task-modal:hover, .open-folder-modal:hover {
    color: var(--secondary-color);
}

.time-period-container {
    padding-bottom: 20px;
}

.sidebar-heading {
    margin: 0;
    padding: 30px 30px 10px;
    font-size: 22px;
    color: var(--primary-color);
    font-family: "Poppins Semibold";
}

.divider {
    border-top: 2px solid var(--tertiary-color);
    margin: 10px 30px 0px 30px;
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
    box-shadow: 0px 12px 20px -10px var(--shadow-color);
    border-radius: 5px;
    max-height: 400px;
}


.task-priority {
    padding: 0px 20px;
    color: white;
    border-radius: 5px 5px 0px 0px;
    display: grid;
    grid-template: 1fr / 1fr 30px;
    grid-gap: 20px;
    align-items: center;
}

.task-priority h3 {
    overflow: auto;
    overflow-wrap: break-word;
}

.high-priority {
    background-color: var(--red-color);
}

.medium-priority {
    background-color: var(--yellow-color);
}

.low-priority {
    background-color: var(--green-color);
}

.task-delete-button {
    outline: none;
    border: none;
    font-family: Poppins Semibold;
    color: white;
    font-size: 20px;
    background-color: transparent;
}

.task-delete-button:hover {
    color: var(--primary-color);
}

.folder-delete-button {
    outline: none;
    border: none;
    font-family: Poppins Semibold;
    color: var(--secondary-color);
    font-size: 18px;
    background-color: transparent;
    margin: 0px;
    padding: 0px;
}

.folder-delete-button:hover {
    color: var(--primary-color);
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
    color: var(--primary-color);
}

h3 {
    font-family: "Poppins Semibold";
}

.task-content {
    overflow: auto;
    overflow-wrap: break-word;
    hyphens: auto;
}

.task-content p {
    margin: 20px 20px 0px 20px;
}

.deadline-container {
    margin: 20px;
    font-family: "Poppins Semibold";
    font-size: 14px;
}

.button-container {
    display: flex;
    justify-content: space-between;
    margin: auto 20px 20px 20px;
}

.button-container button {
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0px;
    font-family: "Poppins Semibold";
    font-size: 14px;
    color: var(--secondary-color);
}

.button-container button:hover {
    color: var(--primary-color);
}

form h3 {
    font-size: 30px;
    margin: 0px 0px 20px 0px;
}

label, legend {
    color: var(--primary-color);
    font-family: "Poppins Semibold";
    font-size: 14px;
    display: block;
}

input, textarea, select {
    color: var(--primary-color);
    background-color: var(--tertiary-color);
    border: 2px solid var(--primary-color);
    border-radius: 3px;
    padding: 3px;
    outline: none;
    margin-bottom: 20px;
}

input:invalid, fieldset input:invalid {
    border: 2px solid var(--red-color);
}

input:valid, fieldset input:valid {
    border: 2px solid var(--green-color);
}

input:focus, textarea:focus, select:focus {
    border: 2px solid var(--green-color);
}

fieldset {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    outline: none;
    border: none;
    padding: 0px;
    margin: 10px 0px;
}

fieldset div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
}

fieldset div input {
    margin-top: 16px;
    margin-right: 15px;
    color: var(--green-color)
}

input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: var(--tertiary-color);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
}

input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: -1px;
    position: relative;
    background-color: var(--primary-color);
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
}

.add-task-modal-button, .add-folder-modal-button, .change-deadline-modal-button, .change-folder-modal-button, dialog button {
    background-color: var(--secondary-color);
    color: white;
    padding: 5px 10px;
    border-radius: 3px;
    outline: none;
    border: none;
}

.add-task-modal-button:hover, .add-folder-modal-button:hover, .change-deadline-modal-button:hover, .change-folder-modal-button:hover,  dialog button:hover {
    background-color: var(--primary-color);
    color: white;
}

.task-modal, .folder-modal, .change-folder-modal, .change-deadline-modal {
    border: none;
    border-radius: 3px;
    padding: 40px;
    box-shadow: 0px 8px 15px -10px rgb(0, 0, 0, 0.7);
}

#current-deadline, #current-folder {
    font-size: 16px;
    margin-bottom: 20px;
}

dialog button {
    background-color: var(--red-color);
}

dialog button:hover {
    background-color: rgb(208, 68, 68);
}

.dialog-buttons-container {
    display: flex;
    justify-content: space-between;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\n\n:root {\n    --primary-color: #50505f;\n    --secondary-color: #b2b2c3;\n    --tertiary-color: #edebf0;\n    --green-color: rgb(97, 185, 93);\n    --yellow-color: rgb(236, 183, 67);\n    --red-color: rgb(255, 96, 96);\n    --shadow-color: rgb(0, 0, 0, 0.3);\n}\n\n@font-face {\n    font-family: 'Poppins Semibold';\n    src: url('./Poppins/Poppins-SemiBold.ttf');\n  }\n\n@font-face {\nfont-family: 'Poppins Light';\nsrc: url('./Poppins/Poppins-Light.ttf');\n}\n\n@font-face {\n    font-family: 'Poppins Regular';\n    src: url('./Poppins/Poppins-Regular.ttf');\n  }\n\n\nbody {\n    margin: 0;\n    border: 0;\n    font-family: \"Poppins Light\";\n    color: var(--primary-color);\n    letter-spacing: 1px;\n}\n\nbutton {\n    font-family: \"Poppins Semibold\";\n    font-size: 14px;\n}\n\n.screen-container {\n    display: grid;\n    grid-template: 120px 1fr / 350px 1fr;\n    height: 100vh\n}\n\n.nav {\n    background-color: white;\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    z-index: 1;\n    border-bottom: 2px solid var(--primary-color);\n    box-shadow: 0px 8px 15px -10px var(--shadow-color);\n    display: flex;\n    align-items: center;\n}\n\n.logo {\n    height: 80px;\n    margin: 0px 30px;\n}\n\n.sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    background-color: white;\n    box-shadow: 8px 0px 15px -10px var(--shadow-color);\n    z-index: 2;\n    font-size: 10px;\n}\n\n.folder-container {\n    padding-bottom: 20px;\n}\n\n.task-container {\n    background-color: var(--tertiary-color);\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\nul {\n    list-style: none;\n    font-size: 18px;\n    font-weight: 400;\n    padding: 0;\n    margin: 0;\n}\n\nli {\n    padding: 8px 30px;\n}\n\n.sidebar .open-task-modal, .sidebar .open-folder-modal {\n    margin: 10px 30px 0px;\n}\n\n\n.open-task-modal, .open-folder-modal {\n    border: none;\n    border-radius: 3px;\n    color: var(--primary-color);\n    font-family: \"Poppins Semibold\";\n    font-size: 18px;\n    background-color: transparent;\n    padding: 0px;\n}\n\n\n.open-task-modal:hover, .open-folder-modal:hover {\n    color: var(--secondary-color);\n}\n\n.time-period-container {\n    padding-bottom: 20px;\n}\n\n.sidebar-heading {\n    margin: 0;\n    padding: 30px 30px 10px;\n    font-size: 22px;\n    color: var(--primary-color);\n    font-family: \"Poppins Semibold\";\n}\n\n.divider {\n    border-top: 2px solid var(--tertiary-color);\n    margin: 10px 30px 0px 30px;\n}\n\nli span {\n    margin: 0 30px 0 0;\n}\n\n.task-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 30px 50px;\n    padding: 30px;\n}\n\n.task-background {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    box-shadow: 0px 12px 20px -10px var(--shadow-color);\n    border-radius: 5px;\n    max-height: 400px;\n}\n\n\n.task-priority {\n    padding: 0px 20px;\n    color: white;\n    border-radius: 5px 5px 0px 0px;\n    display: grid;\n    grid-template: 1fr / 1fr 30px;\n    grid-gap: 20px;\n    align-items: center;\n}\n\n.task-priority h3 {\n    overflow: auto;\n    overflow-wrap: break-word;\n}\n\n.high-priority {\n    background-color: var(--red-color);\n}\n\n.medium-priority {\n    background-color: var(--yellow-color);\n}\n\n.low-priority {\n    background-color: var(--green-color);\n}\n\n.task-delete-button {\n    outline: none;\n    border: none;\n    font-family: Poppins Semibold;\n    color: white;\n    font-size: 20px;\n    background-color: transparent;\n}\n\n.task-delete-button:hover {\n    color: var(--primary-color);\n}\n\n.folder-delete-button {\n    outline: none;\n    border: none;\n    font-family: Poppins Semibold;\n    color: var(--secondary-color);\n    font-size: 18px;\n    background-color: transparent;\n    margin: 0px;\n    padding: 0px;\n}\n\n.folder-delete-button:hover {\n    color: var(--primary-color);\n}\n\n\n.sidebar-list-item {\n    display: flex;\n    justify-content: space-between;\n}\n\n.sidebar-list-item:hover {\n    background-color: var(--tertiary-color);\n    color: var(--primary-color);\n}\n\n.active-sidebar-item {\n    background-color: var(--tertiary-color);\n    color: var(--primary-color);\n}\n\nh3 {\n    font-family: \"Poppins Semibold\";\n}\n\n.task-content {\n    overflow: auto;\n    overflow-wrap: break-word;\n    hyphens: auto;\n}\n\n.task-content p {\n    margin: 20px 20px 0px 20px;\n}\n\n.deadline-container {\n    margin: 20px;\n    font-family: \"Poppins Semibold\";\n    font-size: 14px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: space-between;\n    margin: auto 20px 20px 20px;\n}\n\n.button-container button {\n    outline: none;\n    border: none;\n    background-color: transparent;\n    padding: 0px;\n    font-family: \"Poppins Semibold\";\n    font-size: 14px;\n    color: var(--secondary-color);\n}\n\n.button-container button:hover {\n    color: var(--primary-color);\n}\n\nform h3 {\n    font-size: 30px;\n    margin: 0px 0px 20px 0px;\n}\n\nlabel, legend {\n    color: var(--primary-color);\n    font-family: \"Poppins Semibold\";\n    font-size: 14px;\n    display: block;\n}\n\ninput, textarea, select {\n    color: var(--primary-color);\n    background-color: var(--tertiary-color);\n    border: 2px solid var(--primary-color);\n    border-radius: 3px;\n    padding: 3px;\n    outline: none;\n    margin-bottom: 20px;\n}\n\ninput:invalid, fieldset input:invalid {\n    border: 2px solid var(--red-color);\n}\n\ninput:valid, fieldset input:valid {\n    border: 2px solid var(--green-color);\n}\n\ninput:focus, textarea:focus, select:focus {\n    border: 2px solid var(--green-color);\n}\n\nfieldset {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    outline: none;\n    border: none;\n    padding: 0px;\n    margin: 10px 0px;\n}\n\nfieldset div {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-top: 10px;\n}\n\nfieldset div input {\n    margin-top: 16px;\n    margin-right: 15px;\n    color: var(--green-color)\n}\n\ninput[type='radio']:after {\n    width: 15px;\n    height: 15px;\n    border-radius: 15px;\n    top: -2px;\n    left: -1px;\n    position: relative;\n    background-color: var(--tertiary-color);\n    content: '';\n    display: inline-block;\n    visibility: visible;\n    border: 2px solid white;\n}\n\ninput[type='radio']:checked:after {\n    width: 15px;\n    height: 15px;\n    border-radius: 15px;\n    top: -2px;\n    left: -1px;\n    position: relative;\n    background-color: var(--primary-color);\n    content: '';\n    display: inline-block;\n    visibility: visible;\n    border: 2px solid white;\n}\n\n.add-task-modal-button, .add-folder-modal-button, .change-deadline-modal-button, .change-folder-modal-button, dialog button {\n    background-color: var(--secondary-color);\n    color: white;\n    padding: 5px 10px;\n    border-radius: 3px;\n    outline: none;\n    border: none;\n}\n\n.add-task-modal-button:hover, .add-folder-modal-button:hover, .change-deadline-modal-button:hover, .change-folder-modal-button:hover,  dialog button:hover {\n    background-color: var(--primary-color);\n    color: white;\n}\n\n.task-modal, .folder-modal, .change-folder-modal, .change-deadline-modal {\n    border: none;\n    border-radius: 3px;\n    padding: 40px;\n    box-shadow: 0px 8px 15px -10px rgb(0, 0, 0, 0.7);\n}\n\n#current-deadline, #current-folder {\n    font-size: 16px;\n    margin-bottom: 20px;\n}\n\ndialog button {\n    background-color: var(--red-color);\n}\n\ndialog button:hover {\n    background-color: rgb(208, 68, 68);\n}\n\n.dialog-buttons-container {\n    display: flex;\n    justify-content: space-between;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _Zengenda_Logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Zengenda-Logo.png */ "./src/Zengenda-Logo.png");


const navBar = document.querySelector(".nav");
const logo = new Image();
logo.src = _Zengenda_Logo_png__WEBPACK_IMPORTED_MODULE_0__
logo.classList.add("logo");
navBar.appendChild(logo);

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
        deadlineDateContainer.textContent = "Deadline: " + deadlineDate[0] + ". " + deadlineDate[1] + ", " + deadlineDate[2];

        const weekNumber = document.createElement("div");
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

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");


        container.appendChild(background);
        background.appendChild(priority);
        background.appendChild(taskContent);
        background.appendChild(deadlineContainer);
        background.appendChild(buttonContainer);
        priority.appendChild(taskName);
        priority.appendChild(taskDeleteButton);
        deadlineContainer.appendChild(deadlineDateContainer);
        deadlineContainer.appendChild(weekNumber);
        buttonContainer.appendChild(changeDeadlineButton);
        buttonContainer.appendChild(changeFolderButton);
        taskContent.appendChild(description);
    });
};


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

/***/ }),

/***/ "./src/Zengenda-Logo.png":
/*!*******************************!*\
  !*** ./src/Zengenda-Logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc65851ed7441a98de01.png";

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
;(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.createTask) ("Programming", "Finish the programming project. To finish this programming Project i have to finish the To-Do-List Project i am currently working on. asdfasdfsadfsadfasdfasdfsadfsadfasdfsadfsadf asdfasdfsadfsadfasdfasdfsadfsadfasdfsadfsadf asdfasdfsadfsadfasdfasdfsadfsadfasdfsadfsadfasdfasdfsadfsadfasdfasdfsadfsadfasdfsadfsadf", "medium", new Date ("March 3, 2026"));
(0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder)(9, 9)

;(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolder)("Time Tests");
(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolder)("Fitness");
(0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolder)("Meditation");

(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFolders)((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
(0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());

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
};

folderForm.onsubmit = (e) => {
    (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(".folder-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)(".folder-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearFolders)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFolders)((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getSidebarEffects) ();
    addSidebarFolderLogic();
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
        (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addTaskToFolder) (parseInt(taskId), parseInt(folderId));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlJQUFpRDtBQUM3Riw0Q0FBNEMsbUlBQThDO0FBQzFGLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RUFBNkUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxxQ0FBcUMsK0JBQStCLGlDQUFpQyxnQ0FBZ0Msc0NBQXNDLHdD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YTtBQUNoRywrQkFBK0IsK0RBQWEsdUNBQXVDLCtEQUFhO0FBQ2hHLEtBQUs7QUFDTCxJQUFJLCtEQUFZO0FBQ2hCOzs7QUFHTztBQUNQO0FBQ0EsMkRBQTJELHdFQUFzQjtBQUNqRix3REFBd0Qsd0VBQXNCO0FBQzlFO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7O0FBR087QUFDUDtBQUNBLDJEQUEyRCx3RUFBc0I7QUFDakYsd0RBQXdELHdFQUFzQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7O0FBR087QUFDUDtBQUNBLDJEQUEyRCx3RUFBc0I7QUFDakYsd0RBQXdELHdFQUFzQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7OztBQUlBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9sZGVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Qb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Qb3BwaW5zL1BvcHBpbnMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5cbjpyb290IHtcbiAgICAtLXByaW1hcnktY29sb3I6ICM1MDUwNWY7XG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICNiMmIyYzM7XG4gICAgLS10ZXJ0aWFyeS1jb2xvcjogI2VkZWJmMDtcbiAgICAtLWdyZWVuLWNvbG9yOiByZ2IoOTcsIDE4NSwgOTMpO1xuICAgIC0teWVsbG93LWNvbG9yOiByZ2IoMjM2LCAxODMsIDY3KTtcbiAgICAtLXJlZC1jb2xvcjogcmdiKDI1NSwgOTYsIDk2KTtcbiAgICAtLXNoYWRvdy1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMyk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyBTZW1pYm9sZCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIH1cblxuQGZvbnQtZmFjZSB7XG5mb250LWZhbWlseTogJ1BvcHBpbnMgTGlnaHQnO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyBSZWd1bGFyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgfVxuXG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBMaWdodFwiO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgU2VtaWJvbGRcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zY3JlZW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDEyMHB4IDFmciAvIDM1MHB4IDFmcjtcbiAgICBoZWlnaHQ6IDEwMHZoXG59XG5cbi5uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgei1pbmRleDogMTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IC0xMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogMHB4IDMwcHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDhweCAwcHggMTVweCAtMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZm9sZGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5saSB7XG4gICAgcGFkZGluZzogOHB4IDMwcHg7XG59XG5cbi5zaWRlYmFyIC5vcGVuLXRhc2stbW9kYWwsIC5zaWRlYmFyIC5vcGVuLWZvbGRlci1tb2RhbCB7XG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMHB4O1xufVxuXG5cbi5vcGVuLXRhc2stbW9kYWwsIC5vcGVuLWZvbGRlci1tb2RhbCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBTZW1pYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cblxuLm9wZW4tdGFzay1tb2RhbDpob3ZlciwgLm9wZW4tZm9sZGVyLW1vZGFsOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLnRpbWUtcGVyaW9kLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgU2VtaWJvbGRcIjtcbn1cblxuLmRpdmlkZXIge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMHB4IDMwcHg7XG59XG5cbmxpIHNwYW4ge1xuICAgIG1hcmdpbjogMCAzMHB4IDAgMDtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMzBweCA1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi50YXNrLWJhY2tncm91bmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IC0xMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xufVxuXG5cbi50YXNrLXByaW9yaXR5IHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDMwcHg7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stcHJpb3JpdHkgaDMge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5oaWdoLXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xufVxuXG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xufVxuXG4ubG93LXByaW9yaXR5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XG59XG5cbi50YXNrLWRlbGV0ZS1idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zIFNlbWlib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50YXNrLWRlbGV0ZS1idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmZvbGRlci1kZWxldGUtYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LWZhbWlseTogUG9wcGlucyBTZW1pYm9sZDtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uZm9sZGVyLWRlbGV0ZS1idXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuXG4uc2lkZWJhci1saXN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc2lkZWJhci1saXN0LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5hY3RpdmUtc2lkZWJhci1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5oMyB7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBTZW1pYm9sZFwiO1xufVxuXG4udGFzay1jb250ZW50IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIGh5cGhlbnM6IGF1dG87XG59XG5cbi50YXNrLWNvbnRlbnQgcCB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5kZWFkbGluZS1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIFNlbWlib2xkXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiBhdXRvIDIwcHggMjBweCAyMHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIFNlbWlib2xkXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuZm9ybSBoMyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcbn1cblxubGFiZWwsIGxlZ2VuZCB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgU2VtaWJvbGRcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pbnB1dDppbnZhbGlkLCBmaWVsZHNldCBpbnB1dDppbnZhbGlkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1yZWQtY29sb3IpO1xufVxuXG5pbnB1dDp2YWxpZCwgZmllbGRzZXQgaW5wdXQ6dmFsaWQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuLWNvbG9yKTtcbn1cblxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuLWNvbG9yKTtcbn1cblxuZmllbGRzZXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbmZpZWxkc2V0IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuZmllbGRzZXQgZGl2IGlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpXG59XG5cbmlucHV0W3R5cGU9J3JhZGlvJ106YWZ0ZXIge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRvcDogLTJweDtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG59XG5cbmlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZDphZnRlciB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdG9wOiAtMnB4O1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYWRkLXRhc2stbW9kYWwtYnV0dG9uLCAuYWRkLWZvbGRlci1tb2RhbC1idXR0b24sIC5jaGFuZ2UtZGVhZGxpbmUtbW9kYWwtYnV0dG9uLCAuY2hhbmdlLWZvbGRlci1tb2RhbC1idXR0b24sIGRpYWxvZyBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmFkZC10YXNrLW1vZGFsLWJ1dHRvbjpob3ZlciwgLmFkZC1mb2xkZXItbW9kYWwtYnV0dG9uOmhvdmVyLCAuY2hhbmdlLWRlYWRsaW5lLW1vZGFsLWJ1dHRvbjpob3ZlciwgLmNoYW5nZS1mb2xkZXItbW9kYWwtYnV0dG9uOmhvdmVyLCAgZGlhbG9nIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFzay1tb2RhbCwgLmZvbGRlci1tb2RhbCwgLmNoYW5nZS1mb2xkZXItbW9kYWwsIC5jaGFuZ2UtZGVhZGxpbmUtbW9kYWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggLTEwcHggcmdiKDAsIDAsIDAsIDAuNyk7XG59XG5cbiNjdXJyZW50LWRlYWRsaW5lLCAjY3VycmVudC1mb2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5kaWFsb2cgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xufVxuXG5kaWFsb2cgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCA2OCwgNjgpO1xufVxuXG4uZGlhbG9nLWJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiw0Q0FBMEM7RUFDNUM7O0FBRUY7QUFDQSw0QkFBNEI7QUFDNUIsNENBQXVDO0FBQ3ZDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDRDQUF5QztFQUMzQzs7O0FBR0Y7SUFDSSxTQUFTO0lBQ1QsU0FBUztJQUNULDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDO0FBQ0o7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsNkNBQTZDO0lBQzdDLGtEQUFrRDtJQUNsRCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGtEQUFrRDtJQUNsRCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1EQUFtRDtJQUNuRCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktY29sb3I6ICM1MDUwNWY7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYjJiMmMzO1xcbiAgICAtLXRlcnRpYXJ5LWNvbG9yOiAjZWRlYmYwO1xcbiAgICAtLWdyZWVuLWNvbG9yOiByZ2IoOTcsIDE4NSwgOTMpO1xcbiAgICAtLXllbGxvdy1jb2xvcjogcmdiKDIzNiwgMTgzLCA2Nyk7XFxuICAgIC0tcmVkLWNvbG9yOiByZ2IoMjU1LCA5NiwgOTYpO1xcbiAgICAtLXNoYWRvdy1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMgU2VtaWJvbGQnO1xcbiAgICBzcmM6IHVybCgnLi9Qb3BwaW5zL1BvcHBpbnMtU2VtaUJvbGQudHRmJyk7XFxuICB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuZm9udC1mYW1pbHk6ICdQb3BwaW5zIExpZ2h0JztcXG5zcmM6IHVybCgnLi9Qb3BwaW5zL1BvcHBpbnMtTGlnaHQudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMgUmVndWxhcic7XFxuICAgIHNyYzogdXJsKCcuL1BvcHBpbnMvUG9wcGlucy1SZWd1bGFyLnR0ZicpO1xcbiAgfVxcblxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zIExpZ2h0XFxcIjtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMgU2VtaWJvbGRcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5zY3JlZW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTIwcHggMWZyIC8gMzUwcHggMWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoXFxufVxcblxcbi5uYXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IC0xMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW46IDBweCAzMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogOHB4IDBweCAxNXB4IC0xMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmZvbGRlci1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxubGkge1xcbiAgICBwYWRkaW5nOiA4cHggMzBweDtcXG59XFxuXFxuLnNpZGViYXIgLm9wZW4tdGFzay1tb2RhbCwgLnNpZGViYXIgLm9wZW4tZm9sZGVyLW1vZGFsIHtcXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMHB4O1xcbn1cXG5cXG5cXG4ub3Blbi10YXNrLW1vZGFsLCAub3Blbi1mb2xkZXItbW9kYWwge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMgU2VtaWJvbGRcXFwiO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcblxcbi5vcGVuLXRhc2stbW9kYWw6aG92ZXIsIC5vcGVuLWZvbGRlci1tb2RhbDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4udGltZS1wZXJpb2QtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyLWhlYWRpbmcge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zIFNlbWlib2xkXFxcIjtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgICBtYXJnaW46IDEwcHggMzBweCAwcHggMzBweDtcXG59XFxuXFxubGkgc3BhbiB7XFxuICAgIG1hcmdpbjogMCAzMHB4IDAgMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdhcDogMzBweCA1MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4udGFzay1iYWNrZ3JvdW5kIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDIwcHggLTEwcHggdmFyKC0tc2hhZG93LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcXG59XFxuXFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAzMHB4O1xcbiAgICBncmlkLWdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHkgaDMge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xcbn1cXG5cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcXG59XFxuXFxuLmxvdy1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMgU2VtaWJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvbGRlci1kZWxldGUtYnV0dG9uIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucyBTZW1pYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5mb2xkZXItZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuXFxuLnNpZGViYXItbGlzdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc2lkZWJhci1saXN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmFjdGl2ZS1zaWRlYmFyLWl0ZW0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMgU2VtaWJvbGRcXFwiO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGh5cGhlbnM6IGF1dG87XFxufVxcblxcbi50YXNrLWNvbnRlbnQgcCB7XFxuICAgIG1hcmdpbjogMjBweCAyMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4uZGVhZGxpbmUtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMgU2VtaWJvbGRcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IGF1dG8gMjBweCAyMHB4IDIwcHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zIFNlbWlib2xkXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5mb3JtIGgzIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxufVxcblxcbmxhYmVsLCBsZWdlbmQge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGlucyBTZW1pYm9sZFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCwgZmllbGRzZXQgaW5wdXQ6aW52YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXJlZC1jb2xvcik7XFxufVxcblxcbmlucHV0OnZhbGlkLCBmaWVsZHNldCBpbnB1dDp2YWxpZCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcXG59XFxuXFxuZmllbGRzZXQgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuZmllbGRzZXQgZGl2IGlucHV0IHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpXFxufVxcblxcbmlucHV0W3R5cGU9J3JhZGlvJ106YWZ0ZXIge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICB0b3A6IC0ycHg7XFxuICAgIGxlZnQ6IC0xcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT0ncmFkaW8nXTpjaGVja2VkOmFmdGVyIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdG9wOiAtMnB4O1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmFkZC10YXNrLW1vZGFsLWJ1dHRvbiwgLmFkZC1mb2xkZXItbW9kYWwtYnV0dG9uLCAuY2hhbmdlLWRlYWRsaW5lLW1vZGFsLWJ1dHRvbiwgLmNoYW5nZS1mb2xkZXItbW9kYWwtYnV0dG9uLCBkaWFsb2cgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGQtdGFzay1tb2RhbC1idXR0b246aG92ZXIsIC5hZGQtZm9sZGVyLW1vZGFsLWJ1dHRvbjpob3ZlciwgLmNoYW5nZS1kZWFkbGluZS1tb2RhbC1idXR0b246aG92ZXIsIC5jaGFuZ2UtZm9sZGVyLW1vZGFsLWJ1dHRvbjpob3ZlciwgIGRpYWxvZyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1tb2RhbCwgLmZvbGRlci1tb2RhbCwgLmNoYW5nZS1mb2xkZXItbW9kYWwsIC5jaGFuZ2UtZGVhZGxpbmUtbW9kYWwge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IC0xMHB4IHJnYigwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4jY3VycmVudC1kZWFkbGluZSwgI2N1cnJlbnQtZm9sZGVyIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5kaWFsb2cgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXG59XFxuXFxuZGlhbG9nIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDgsIDY4LCA2OCk7XFxufVxcblxcbi5kaWFsb2ctYnV0dG9ucy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvZ29GaWxlIGZyb20gXCIuL1plbmdlbmRhLUxvZ28ucG5nXCJcblxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XG5jb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG5sb2dvLnNyYyA9IGxvZ29GaWxlXG5sb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xubmF2QmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvbGRlcnMgKGFycmF5KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXItc2lkZWJhci1jb250YWluZXJcIilcbiAgICBjb25zdCBmb2xkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1hcnJheS1jb250YWluZXJcIik7XG4gICAgYXJyYXkuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLWl0ZW1cIilcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItbGlzdC1pdGVtXCIpXG4gICAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1mb2xkZXItaWQnLCBmb2xkZXIuaWQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZm9sZGVyLm5hbWU7XG5cbiAgICAgICAgY29uc3QgZm9sZGVyRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZm9sZGVyRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGZvbGRlckRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLWRlbGV0ZS1idXR0b25cIik7XG4gICAgICAgIGZvbGRlckRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9sZGVyLWlkJywgZm9sZGVyLmlkKTtcbiAgICAgICAgZm9sZGVyRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXJJZCA9IHRoaXMuZGF0YXNldC5mb2xkZXJJZDtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiZm9sZGVyRGVsZXRlXCIsIHtkZXRhaWw6IHtmb2xkZXJJZH19KVxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChkZWxldGVFdmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb2xkZXJDb250YWluZXIpO1xuICAgICAgICBmb2xkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZm9sZGVyRGVsZXRlQnV0dG9uKTtcbiAgICB9KTtcbn07XG5cbi8vIE5lZWQgdG8gYWRkIGEgYnV0dG9uIGFuZCBhIGZvcm0gaW4gdGhlIERvbS5cbi8vIFdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLCB0aGUgZm9ybSBvcGVucy5cbi8vIEhlcmUgeW91IGNhbiBjaG9vc2Ugb25lIG9mIHRoZSBmb2xkZXJzIChUaGV5IG5lZWQgdG8gYmUgZ2VuZXJhdGVkIGR5bmFtaWNhbGx5IGxpa2UgaW4gdGhlIGFkZCBUYXNrIGZvcm0pXG4vLyBPbmNlIGEgZm9sZGVyIGlzIGNob3NlbiBhbmQgY29uZmlybWVkIHRoZSB0YXNrIGdldHMgcmVhc3NpZ25lZCB0byBhIG5ldyBmb2xkZXJcbi8vIFJlZnJlc2ggYWxsIG5lZWRlZCBkaXNwbGF5IEZ1bmN0aW9ucyBzbyB0aGUgVGFzayBpcyBzaG93biBpbiB0aGUgcmlnaHQgZm9sZGVyXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza3MgKGFycmF5KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKVxuICAgIGFycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZChcInRhc2stYmFja2dyb3VuZFwiKVxuXG4gICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGVudFwiKTtcblxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5XCIpO1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKVxuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIilcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSBcImhpZ2hcIikge1xuICAgICAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIHRhc2tEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlLWJ1dHRvblwiKTtcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcsIHRhc2suaWQpO1xuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSB0aGlzLmRhdGFzZXQudGFza0lkO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJ0YXNrRGVsZXRlXCIsIHtkZXRhaWw6IHt0YXNrSWR9fSlcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZGVsZXRlRXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRlYWRsaW5lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZWFkbGluZS1jb250YWluZXJcIik7XG5cblxuICAgICAgICBjb25zdCBkZWFkbGluZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVEYXRlID0gZ2V0RGF0ZVZhbHVlcyh0YXNrLmRlYWRsaW5lKTtcbiAgICAgICAgZGVhZGxpbmVEYXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJEZWFkbGluZTogXCIgKyBkZWFkbGluZURhdGVbMF0gKyBcIi4gXCIgKyBkZWFkbGluZURhdGVbMV0gKyBcIiwgXCIgKyBkZWFkbGluZURhdGVbMl07XG5cbiAgICAgICAgY29uc3Qgd2Vla051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHdlZWtOdW1iZXIudGV4dENvbnRlbnQgPSBcIkNXOiBcIiArIGdldFdlZWsodGFzay5kZWFkbGluZSk7XG4gICAgICAgIHdlZWtOdW1iZXIuY2xhc3NMaXN0LmFkZChcIndlZWstbnVtYmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZUZvbGRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoYW5nZUZvbGRlckJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2hhbmdlIEZvbGRlclwiO1xuICAgICAgICBjaGFuZ2VGb2xkZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoYW5nZS1mb2xkZXItYnV0dG9uXCIpO1xuICAgICAgICBjaGFuZ2VGb2xkZXJCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB0YXNrLmlkKTtcbiAgICAgICAgY2hhbmdlRm9sZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSB0aGlzLmRhdGFzZXQudGFza0lkO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlRm9sZGVyRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VGb2xkZXJcIiwge2RldGFpbDoge3Rhc2tJZH19KVxuICAgICAgICAgICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChjaGFuZ2VGb2xkZXJFdmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZURlYWRsaW5lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2hhbmdlRGVhZGxpbmVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoYW5nZSBEZWFkbGluZVwiO1xuICAgICAgICBjaGFuZ2VEZWFkbGluZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLWRlYWRsaW5lLWJ1dHRvblwiKTtcbiAgICAgICAgY2hhbmdlRGVhZGxpbmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB0YXNrLmlkKTtcbiAgICAgICAgY2hhbmdlRGVhZGxpbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IHRoaXMuZGF0YXNldC50YXNrSWQ7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VEZWFkbGluZUJ1dHRvbiA9IG5ldyBDdXN0b21FdmVudChcImNoYW5nZURlYWRsaW5lXCIsIHtkZXRhaWw6IHt0YXNrSWR9fSlcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY2hhbmdlRGVhZGxpbmVCdXR0b24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG5cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XG4gICAgICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICAgICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRhaW5lcik7XG4gICAgICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICAgICAgICBwcmlvcml0eS5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnV0dG9uKTtcbiAgICAgICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVEYXRlQ29udGFpbmVyKTtcbiAgICAgICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla051bWJlcik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VEZWFkbGluZUJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VGb2xkZXJCdXR0b24pO1xuICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgfSk7XG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlVmFsdWVzIChkYXRlKSB7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdkZS1ERScsIHsgbW9udGg6ICdsb25nJyB9KTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBbZGF5LCBtb250aCwgeWVhcl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlVmFsdWVzSW5OdW1iZXJzIChkYXRlKSB7XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2lkZWJhckVmZmVjdHMgKCkge1xuICAgIGNvbnN0IHNpZGViYXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhci1saXN0LWl0ZW1cIik7XG4gICAgc2lkZWJhckl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzaWRlYmFySXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXNpZGViYXItaXRlbVwiKSlcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXNpZGViYXItaXRlbVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyVGFza3MgKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb2xkZXJzICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvbGRlci1hcnJheS1jb250YWluZXJcIikudGV4dENvbnRlbnQgPSBcIlwiO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbk1vZGFsIChvcGVuQnV0dG9uQ2xhc3MsIG1vZGFsQ2xhc3MpIHtcbiAgICBjb25zdCBtb2RhbE9wZW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wZW5CdXR0b25DbGFzcylcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxDbGFzcyk7XG4gICAgbW9kYWxPcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5zaG93TW9kYWwoKSlcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlTW9kYWxCeUNsaWNrIChjbG9zZUJ1dHRvbkNsYXNzLCBtb2RhbENsYXNzLCBmb3JtQ2xhc3MpIHtcbiAgICBjb25zdCBtb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zZUJ1dHRvbkNsYXNzKVxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RhbENsYXNzKTtcbiAgICBtb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIHJlc2V0TW9kYWwoZm9ybUNsYXNzKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsIChtb2RhbENsYXNzKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb2RhbENsYXNzKS5jbG9zZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRNb2RhbCAoZm9ybUNsYXNzKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybUNsYXNzKTtcbiAgICBmb3JtLnJlc2V0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUFsbFRhc2tGb2xkZXIgKCkge1xuICAgIGNvbnN0IGFsbFRhc2tzRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtdGFzay1mb2xkZXJcIik7XG4gICAgYWxsVGFza3NGb2xkZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zaWRlYmFyLWl0ZW1cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUpIHtcbiAgICBjb25zdCB0ZW1wRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgICBjb25zdCBqYW51YXJ5Rm91cnRoID0gbmV3IERhdGUodGVtcERhdGUuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG4gICAgY29uc3QgamFudWFyeUZvdXJ0aERheSA9IGphbnVhcnlGb3VydGguZ2V0RGF5KCk7XG4gICAgamFudWFyeUZvdXJ0aC5zZXREYXRlKGphbnVhcnlGb3VydGguZ2V0RGF0ZSgpIC0gKGphbnVhcnlGb3VydGhEYXkgPiAwID8gamFudWFyeUZvdXJ0aERheSAtIDEgOiA2KSk7XG4gICAgY29uc3Qgd2Vla051bWJlciA9IE1hdGguY2VpbCgoKCh0ZW1wRGF0ZSAtIGphbnVhcnlGb3VydGgpIC8gODY0MDAwMDApICsgamFudWFyeUZvdXJ0aC5nZXREYXkoKSArIDEpIC8gNyk7XG4gICAgcmV0dXJuIHdlZWtOdW1iZXI7XG59XG5cbiIsIlxuXG5sZXQgZm9sZGVyQXJyYXkgPSBbXTtcbmxldCB0aW1lRm9sZGVyQXJyYXkgPSBbe25hbWU6IFwiTXkgRGF5XCIsIGlkOiAxfSwge25hbWU6IFwiTXkgV2Vla1wiLCBpZDogMn0sIHtuYW1lOiBcIk15IE1vbnRoXCIsIGlkOiAzfSwge25hbWU6IFwiTmV4dCBNb250aFwiLCBpZDogNH0sIHtuYW1lOiBcIkxvbmd0ZXJtXCIsIGlkOiA1fSwge25hbWU6IFwiTG9uZ3Rlcm1cIiwgaWQ6IDZ9XTtcblxuZnVuY3Rpb24gYWRkRm9sZGVyVG9BcnJheSAoZm9sZGVyKSB7XG4gICAgZm9sZGVyQXJyYXkucHVzaChmb2xkZXIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbGRlcnMgKCkge1xuICAgIHJldHVybiBmb2xkZXJBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVGb2xkZXJzICgpIHtcbiAgICByZXR1cm4gdGltZUZvbGRlckFycmF5O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2xkZXJGcm9tQXJyYXkgKGZvbGRlcklkKSB7XG4gICAgZm9sZGVyQXJyYXkgPSBmb2xkZXJBcnJheS5maWx0ZXIoKGZvbGRlcikgPT4gZm9sZGVyLmlkICE9PSBwYXJzZUludChmb2xkZXJJZCkpXG59XG5cblxubGV0IG5leHRGb2xkZXJJZCA9IDc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb2xkZXIgKG5hbWUpIHtcbiAgICBjb25zdCBuZXdGb2xkZXIgPSB7IG5hbWUsIGlkOiBuZXh0Rm9sZGVySWQrKyB9XG4gICAgYWRkRm9sZGVyVG9BcnJheShuZXdGb2xkZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmV3Rm9sZGVyIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZvbGRlci1uYW1lXCIpLnZhbHVlO1xuICAgIGNyZWF0ZUZvbGRlcihuYW1lKTtcbn07XG5cblxuZnVuY3Rpb24gZ2V0Rm9sZGVyRm9ybU9wdGlvbnMgKGZvcm1JZCkge1xuICAgIGNvbnN0IG9wdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybUlkKTtcbiAgICBmb2xkZXJBcnJheS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb24ubmFtZTtcbiAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbi5pZDtcbiAgICAgICAgb3B0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckZvbGRlckZvcm1PcHRpb25zIChmb3JtSWQpIHtcbiAgICBjb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1JZCk7XG4gICAgb3B0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb25zdCBub25lT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBub25lT3B0aW9uLnRleHRDb250ZW50ID0gXCJOb25lXCI7XG4gICAgbm9uZU9wdGlvbi52YWx1ZSA9IFwiTm9uZVwiO1xuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChub25lT3B0aW9uKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm9sZGVyRm9ybU9wdGlvbnMgKGZvcm1JZCkge1xuICAgIGNsZWFyRm9sZGVyRm9ybU9wdGlvbnMoZm9ybUlkKTtcbiAgICBnZXRGb2xkZXJGb3JtT3B0aW9ucyhmb3JtSWQpO1xufTtcblxuXG5cbiIsIlxuXG5sZXQgdGFza0FycmF5ID0gW107XG5jb25zdCB0YXNrRm9sZGVyTWFwID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwICgpIHtcbiAgICByZXR1cm4gdGFza0ZvbGRlck1hcDtcbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvQXJyYXkgKHRhc2spIHtcbiAgICB0YXNrQXJyYXkudW5zaGlmdCh0YXNrKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrcyAoKSB7XG4gICAgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tQXJyYXkgKHRhc2tJZCkge1xuICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHBhcnNlSW50KHRhc2tJZCkpO1xufVxuXG5sZXQgbmV4dFRhc2tJZCA9IDE7XG5cbi8vIGNhbiBhbHNvIGJlIHVzZWQgdG8gY2hhbmdlIHRoZSBmb2xkZXJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9Gb2xkZXIgKHRhc2tJZCwgZm9sZGVySWQpIHtcbiAgICB0YXNrRm9sZGVyTWFwLnNldCh0YXNrSWQsIGZvbGRlcklkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Gb2xkZXIgKHRhc2tJZCkge1xuICAgIHRhc2tGb2xkZXJNYXAuZGVsZXRlKHRhc2tJZClcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrIChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRlYWRsaW5lLCBmb2xkZXJJZCkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7IG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGVhZGxpbmUsIGlkOiBuZXh0VGFza0lkKyt9O1xuICAgIGFkZFRhc2tUb0FycmF5KG5ld1Rhc2spO1xuICAgIGFkZFRhc2tUb0ZvbGRlcihuZXdUYXNrLmlkLCBmb2xkZXJJZClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5ld1Rhc2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW5hbWVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICAgIGNvbnN0IGZvbGRlcklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLWZvbGRlcnNcIikudmFsdWU7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVhZGxpbmVcIikudmFsdWUpO1xuICAgIGNyZWF0ZVRhc2sobmFtZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkZWFkbGluZSwgZm9sZGVySWQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZvbGRlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvbGRlcklkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGFuZ2UtZm9sZGVyXCIpLnZhbHVlO1xuICAgIHJldHVybiBmb2xkZXJJZDtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb2xkZXJUYXNrcyhhbGxUYXNrc0FycmF5LCBmb2xkZXJJZCkge1xuICAgIHJldHVybiBhbGxUYXNrc0FycmF5LmZpbHRlcih0YXNrID0+IHBhcnNlSW50KHRhc2tGb2xkZXJNYXAuZ2V0KHRhc2suaWQpKSA9PT0gcGFyc2VJbnQoZm9sZGVySWQpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRm9sZGVyICh0YXNrSWQpIHtcbiAgICByZXR1cm4gdGFza0ZvbGRlck1hcC5nZXQodGFza0lkKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkgKHRhc2ssIHByaW9yaXR5KSB7XG4gICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG5cbi8vIGZ1bmN0aW9uIHNvcnRUYXNrc0J5RGF0ZSAoKSB7XG4gICAgLy8gYXJyYXkuc29ydChmdW5jdGlvbihhLGIpe1xuICAgIC8vICAgICAvLyBUdXJuIHlvdXIgc3RyaW5ncyBpbnRvIGRhdGVzLCBhbmQgdGhlbiBzdWJ0cmFjdCB0aGVtXG4gICAgLy8gICAgIC8vIHRvIGdldCBhIHZhbHVlIHRoYXQgaXMgZWl0aGVyIG5lZ2F0aXZlLCBwb3NpdGl2ZSwgb3IgemVyby5cbiAgICAvLyAgICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpO1xuICAgIC8vICAgfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHNvcnRUYXNrc0J5UHJpb3JpdHkgKCkge1xuICAgIFxuLy8gfVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCBhZGROZXdUYXNrIGZyb20gXCIuL3Rhc2tNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBnZXRUYXNrcywgcmVtb3ZlVGFza0Zyb21BcnJheSwgcmVtb3ZlVGFza0Zyb21Gb2xkZXJzLCBhZGRUYXNrVG9Gb2xkZXIsIGNoYW5nZVByaW9yaXR5LCBjcmVhdGVUYXNrLCBnZXRGb2xkZXJUYXNrcywgZ2V0VGFza0ZvbGRlciwgY2hhbmdlRm9sZGVyIH0gZnJvbSAnLi90YXNrTWFuYWdlci5qcyc7XG5pbXBvcnQgYWRkTmV3Rm9sZGVyIGZyb20gXCIuL2ZvbGRlck1hbmFnZXIuanNcIjtcbmltcG9ydCB7IGdldEZvbGRlcnMsIGNyZWF0ZUZvbGRlciwgcmVtb3ZlRm9sZGVyRnJvbUFycmF5LCBjcmVhdGVGb2xkZXJGb3JtT3B0aW9ucywgZ2V0VGltZUZvbGRlcnMgfSBmcm9tIFwiLi9mb2xkZXJNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5Rm9sZGVycywgZGlzcGxheVRhc2tzLCBvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGNsb3NlTW9kYWxCeUNsaWNrLCByZXNldE1vZGFsLCBjbGVhclRhc2tzLCBjbGVhckZvbGRlcnMsIGdldFNpZGViYXJFZmZlY3RzLCBhY3RpdmF0ZUFsbFRhc2tGb2xkZXIsIGdldERhdGVWYWx1ZXMsIGdldERhdGVWYWx1ZXNJbk51bWJlcnMsIGdldFdlZWsgfSBmcm9tIFwiLi9kb21GdW5jdGlvbnMuanNcIjtcblxuXG5jcmVhdGVUYXNrIChcIkRheVRlc3RcIiwgXCJEbyBhIHdvcmtvdXRcIiwgXCJoaWdoXCIsIG5ldyBEYXRlIChcIk1hcmNoIDgsIDIwMjRcIikpO1xuYWRkVGFza1RvRm9sZGVyKDEsIDcpXG5jcmVhdGVUYXNrIChcIldlZWtUZXN0XCIsIFwiRG8gYSB3b3Jrb3V0XCIsIFwiaGlnaFwiLCBuZXcgRGF0ZSAoXCJNYXJjaCAxMiwgMjAyNFwiKSk7XG5hZGRUYXNrVG9Gb2xkZXIoMiwgNylcbmNyZWF0ZVRhc2sgKFwiTW9udGhUZXN0XCIsIFwiRG8gYSB3b3Jrb3V0XCIsIFwiaGlnaFwiLCBuZXcgRGF0ZSAoXCJNYXJjaCAyNCwgMjAyNFwiKSk7XG5hZGRUYXNrVG9Gb2xkZXIoMywgNylcbmNyZWF0ZVRhc2sgKFwiTmV4dE1vbnRoVGVzdFwiLCBcIkRvIGEgd29ya291dFwiLCBcImhpZ2hcIiwgbmV3IERhdGUgKFwiQXByaWwgMzAsIDIwMjRcIikpO1xuYWRkVGFza1RvRm9sZGVyKDQsIDcpXG5jcmVhdGVUYXNrIChcIkxvbmd0ZXJtVGVzdFwiLCBcIkRvIGEgd29ya291dFwiLCBcImhpZ2hcIiwgbmV3IERhdGUgKFwiTWF5IDEsIDIwMjRcIikpO1xuYWRkVGFza1RvRm9sZGVyKDUsIDcpXG5jcmVhdGVUYXNrIChcIk92ZXJkdWVUZXN0XCIsIFwiRG8gYSB3b3Jrb3V0XCIsIFwiaGlnaFwiLCBuZXcgRGF0ZSAoXCJNYXkgMiwgMjAyMlwiKSk7XG5hZGRUYXNrVG9Gb2xkZXIoNiwgNylcbmNyZWF0ZVRhc2sgKFwiRml0bmVzc1wiLCBcIk1lZGl0YXRlIGZvciAzMCBtaW5cIiwgXCJsb3dcIiwgbmV3IERhdGUgKFwiRmVicnVhcnkgMiwgMjAyNVwiKSk7XG5hZGRUYXNrVG9Gb2xkZXIoNywgOClcbmNyZWF0ZVRhc2sgKFwiTWVkaXRhdGlvblwiLCBcIk1lZGl0YXRlIGZvciAzMCBtaW5cIiwgXCJsb3dcIiwgbmV3IERhdGUgKFwiSmFudWFyeSAzMSwgMjAyNVwiKSk7XG5hZGRUYXNrVG9Gb2xkZXIoOCwgOSlcbmNyZWF0ZVRhc2sgKFwiUHJvZ3JhbW1pbmdcIiwgXCJGaW5pc2ggdGhlIHByb2dyYW1taW5nIHByb2plY3QuIFRvIGZpbmlzaCB0aGlzIHByb2dyYW1taW5nIFByb2plY3QgaSBoYXZlIHRvIGZpbmlzaCB0aGUgVG8tRG8tTGlzdCBQcm9qZWN0IGkgYW0gY3VycmVudGx5IHdvcmtpbmcgb24uIGFzZGZhc2Rmc2FkZnNhZGZhc2RmYXNkZnNhZGZzYWRmYXNkZnNhZGZzYWRmIGFzZGZhc2Rmc2FkZnNhZGZhc2RmYXNkZnNhZGZzYWRmYXNkZnNhZGZzYWRmIGFzZGZhc2Rmc2FkZnNhZGZhc2RmYXNkZnNhZGZzYWRmYXNkZnNhZGZzYWRmYXNkZmFzZGZzYWRmc2FkZmFzZGZhc2Rmc2FkZnNhZGZhc2Rmc2FkZnNhZGZcIiwgXCJtZWRpdW1cIiwgbmV3IERhdGUgKFwiTWFyY2ggMywgMjAyNlwiKSk7XG5hZGRUYXNrVG9Gb2xkZXIoOSwgOSlcblxuY3JlYXRlRm9sZGVyKFwiVGltZSBUZXN0c1wiKTtcbmNyZWF0ZUZvbGRlcihcIkZpdG5lc3NcIik7XG5jcmVhdGVGb2xkZXIoXCJNZWRpdGF0aW9uXCIpO1xuXG5kaXNwbGF5Rm9sZGVycyhnZXRGb2xkZXJzKCkpO1xuZGlzcGxheVRhc2tzKGdldFRhc2tzKCkpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLXRhc2stbW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3JlYXRlRm9sZGVyRm9ybU9wdGlvbnMoXCIjZm9ybS1mb2xkZXJzXCIpO1xuICAgIH0pO1xuICAgIG9wZW5Nb2RhbChcIi5vcGVuLXRhc2stbW9kYWxcIiwgXCIudGFzay1tb2RhbFwiKTtcbiAgICBvcGVuTW9kYWwoXCIub3Blbi1mb2xkZXItbW9kYWxcIiwgXCIuZm9sZGVyLW1vZGFsXCIpO1xuICAgIGNsb3NlTW9kYWxCeUNsaWNrKFwiLmNsb3NlLXRhc2stbW9kYWxcIiwgXCIudGFzay1tb2RhbFwiLCBcIi50YXNrLWZvcm1cIik7XG4gICAgY2xvc2VNb2RhbEJ5Q2xpY2soXCIuY2xvc2UtZm9sZGVyLW1vZGFsXCIsIFwiLmZvbGRlci1tb2RhbFwiLCBcIi5mb2xkZXItZm9ybVwiKTtcbiAgICBnZXRTaWRlYmFyRWZmZWN0cygpO1xuICAgIGFkZFNpZGViYXJGb2xkZXJMb2dpYygpO1xuICAgIGFjdGl2YXRlQWxsVGFza0ZvbGRlcigpO1xufSk7XG5cblxudGFza0Zvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGFkZE5ld1Rhc2soZSk7XG4gICAgY2xvc2VNb2RhbChcIi50YXNrLW1vZGFsXCIpO1xuICAgIHJlc2V0TW9kYWwoXCIudGFzay1mb3JtXCIpO1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBkaXNwbGF5Q3VycmVudEZvbGRlcigpO1xufTtcblxuZm9sZGVyRm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgYWRkTmV3Rm9sZGVyKGUpO1xuICAgIGNsb3NlTW9kYWwoXCIuZm9sZGVyLW1vZGFsXCIpO1xuICAgIHJlc2V0TW9kYWwoXCIuZm9sZGVyLWZvcm1cIik7XG4gICAgY2xlYXJGb2xkZXJzKCk7XG4gICAgZGlzcGxheUZvbGRlcnMoZ2V0Rm9sZGVycygpKTtcbiAgICBnZXRTaWRlYmFyRWZmZWN0cyAoKTtcbiAgICBhZGRTaWRlYmFyRm9sZGVyTG9naWMoKTtcbn07XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZUZvbGRlclwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LmRldGFpbC50YXNrSWQ7XG4gICAgY29uc3Qgb2xkRm9sZGVyID0gZ2V0Rm9sZGVycygpLmZpbHRlcigoZm9sZGVyKSA9PiBnZXRUYXNrRm9sZGVyKHBhcnNlSW50KHRhc2tJZCkpID09PSBmb2xkZXIuaWQpXG4gICAgbGV0IGZvbGRlck5hbWUgPSBcIlwiO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9sZEZvbGRlcikgJiYgb2xkRm9sZGVyLmxlbmd0aCA+IDAgJiYgdHlwZW9mIG9sZEZvbGRlclswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9sZGVyTmFtZSA9IG9sZEZvbGRlclswXS5uYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9sZGVyTmFtZSA9IFwiTm9uZVwiXG4gICAgfTtcbiAgICBjcmVhdGVGb2xkZXJGb3JtT3B0aW9ucyhcIiNjaGFuZ2UtZm9sZGVyXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2UtZm9sZGVyLW1vZGFsXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtZm9sZGVyXCIpO1xuICAgIGN1cnJlbnRGb2xkZXIudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgRm9sZGVyOiBcIiArIGZvbGRlck5hbWU7XG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY2xvc2VNb2RhbEJ5Q2xpY2sgKFwiLmNsb3NlLWNoYW5nZS1mb2xkZXItbW9kYWxcIiwgXCIuY2hhbmdlLWZvbGRlci1tb2RhbFwiLCBcIi5jaGFuZ2UtZm9sZGVyLWZvcm1cIilcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtY2hhbmdlLWZvbGRlci1tb2RhbFwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjdXJyZW50Rm9sZGVyLnRleHRDb250ZW50ID0gXCJcIik7XG4gICAgY2hhbmdlRm9sZGVyRm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvbGRlcklkID0gY2hhbmdlRm9sZGVyKGUpO1xuICAgICAgICBhZGRUYXNrVG9Gb2xkZXIgKHBhcnNlSW50KHRhc2tJZCksIHBhcnNlSW50KGZvbGRlcklkKSk7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIGN1cnJlbnRGb2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICByZXNldE1vZGFsKFwiLmNoYW5nZS1mb2xkZXItZm9ybVwiKTtcbiAgICAgICAgY2xlYXJUYXNrcygpO1xuICAgICAgICBkaXNwbGF5Q3VycmVudEZvbGRlcigpO1xuICAgIH07XG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlRGVhZGxpbmVcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCB0YXNrSWQgPSBldmVudC5kZXRhaWwudGFza0lkO1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gZ2V0VGFza3MoKS5maWx0ZXIoKHRhc2spID0+IHBhcnNlSW50KHRhc2tJZCkgPT09IHBhcnNlSW50KHRhc2suaWQpKTtcbiAgICBjb25zdCBjdXJyZW50RGVhZGxpbmVEYXRlVmFsdWVzID0gZ2V0RGF0ZVZhbHVlcyhjdXJyZW50VGFza1swXS5kZWFkbGluZSk7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5nZS1kZWFkbGluZS1tb2RhbFwiKTtcbiAgICBjb25zdCBjdXJyZW50RGVhZGxpbmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtZGVhZGxpbmVcIik7XG4gICAgY3VycmVudERlYWRsaW5lQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDdXJyZW50IERlYWRsaW5lOiBcIiArIGN1cnJlbnREZWFkbGluZURhdGVWYWx1ZXNbMF0gKyBcIi4gXCIgKyBjdXJyZW50RGVhZGxpbmVEYXRlVmFsdWVzWzFdICsgXCIsIFwiICsgY3VycmVudERlYWRsaW5lRGF0ZVZhbHVlc1syXTtcbiAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICBjbG9zZU1vZGFsQnlDbGljayAoXCIuY2xvc2UtY2hhbmdlLWRlYWRsaW5lLW1vZGFsXCIsIFwiLmNoYW5nZS1kZWFkbGluZS1tb2RhbFwiLCBcIi5jaGFuZ2UtZGVhZGxpbmUtZm9ybVwiKVxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1jaGFuZ2UtZGVhZGxpbmUtbW9kYWxcIilcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY3VycmVudERlYWRsaW5lQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIik7XG4gICAgY2hhbmdlRGVhZGxpbmVGb3JtLm9uc3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXdEZWFkbGluZSA9IG5ldyBEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhbmdlLWRlYWRsaW5lXCIpLnZhbHVlKTtcbiAgICAgICAgY3VycmVudFRhc2tbMF0uZGVhZGxpbmUgPSBuZXdEZWFkbGluZTtcbiAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgY3VycmVudERlYWRsaW5lQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgcmVzZXRNb2RhbChcIi5jaGFuZ2UtZGVhZGxpbmUtZm9ybVwiKTtcbiAgICAgICAgY2xlYXJUYXNrcygpO1xuICAgICAgICBkaXNwbGF5Q3VycmVudEZvbGRlcigpO1xuICAgIH07XG59KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidGFza0RlbGV0ZVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LmRldGFpbC50YXNrSWQ7XG4gICAgcmVtb3ZlVGFza0Zyb21BcnJheSh0YXNrSWQpO1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBkaXNwbGF5Q3VycmVudEZvbGRlcigpO1xufSlcblxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRGb2xkZXIgKCkge1xuICAgIGNvbnN0IGFjdGl2ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1zaWRlYmFyLWl0ZW1cIilcbiAgICBjb25zdCBhY3RpdmVUYXNrSWQgPSBhY3RpdmVUYXNrLmRhdGFzZXQuZm9sZGVySWQ7XG4gICAgaWYgKHBhcnNlSW50KGFjdGl2ZVRhc2tJZCkgIT09IHBhcnNlSW50KDApKSB7XG4gICAgICAgIGRpc3BsYXlUYXNrcyhnZXRGb2xkZXJUYXNrcyhnZXRUYXNrcygpLCBhY3RpdmVUYXNrSWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5VGFza3MoZ2V0VGFza3MoKSk7XG4gICAgfTtcbn1cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9sZGVyRGVsZXRlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgY29uZmlybWVkID0gY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmb2xkZXI/XCIpO1xuICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgY29uc3QgZm9sZGVySWQgPSBldmVudC5kZXRhaWwuZm9sZGVySWRcbiAgICAgICAgcmVtb3ZlRm9sZGVyRnJvbUFycmF5KGZvbGRlcklkKTtcbiAgICAgICAgY2xlYXJGb2xkZXJzKCk7XG4gICAgICAgIGRpc3BsYXlGb2xkZXJzKGdldEZvbGRlcnMoKSk7XG4gICAgICAgIGdldFNpZGViYXJFZmZlY3RzKCk7XG4gICAgICAgIGFkZFNpZGViYXJGb2xkZXJMb2dpYygpO1xuICAgICAgICBhY3RpdmF0ZUFsbFRhc2tGb2xkZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRTaWRlYmFyRm9sZGVyTG9naWMgKCkge1xuICAgIGNvbnN0IGZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvbGRlci1pdGVtXCIpO1xuICAgIGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgICAgIGZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9sZGVySWQgPSBmb2xkZXIuZGF0YXNldC5mb2xkZXJJZDtcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhnZXRGb2xkZXJUYXNrcyhnZXRUYXNrcygpLCBmb2xkZXJJZCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5jb25zdCBhbGxUYXNrc0ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXRhc2stZm9sZGVyXCIpO1xuYWxsVGFza3NGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZGlzcGxheVRhc2tzKGdldFRhc2tzKCkpO1xufSk7XG5cblxuY29uc3QgbXlEYXlGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215LWRheS1mb2xkZXJcIik7XG5teURheUZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBnZXRNeURheVRhc2tzKGdldFRhc2tzKCkpO1xufSk7XG5cbmNvbnN0IG15V2Vla0ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXktd2Vlay1mb2xkZXJcIik7XG5teVdlZWtGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0TXlXZWVrVGFza3MoZ2V0VGFza3MoKSk7XG59KTtcblxuY29uc3QgbXlNb250aEZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXktbW9udGgtZm9sZGVyXCIpO1xubXlNb250aEZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBnZXRNeU1vbnRoVGFza3MoZ2V0VGFza3MoKSk7XG59KTtcblxuY29uc3QgbmV4dE1vbnRoRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0LW1vbnRoLWZvbGRlclwiKTtcbm5leHRNb250aEZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBnZXROZXh0TW9udGhUYXNrcyhnZXRUYXNrcygpKTtcbn0pO1xuXG5jb25zdCBsb25ndGVybUZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9uZ3Rlcm0tZm9sZGVyXCIpO1xubG9uZ3Rlcm1Gb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0TG9uZ3Rlcm1UYXNrcyhnZXRUYXNrcygpKTtcbn0pO1xuXG5jb25zdCBvdmVyZHVlRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVyZHVlLWZvbGRlclwiKTtcbm92ZXJkdWVGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0T3ZlcmR1ZVRhc2tzKGdldFRhc2tzKCkpO1xufSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE15RGF5VGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyh0YXNrLmRlYWRsaW5lKSkgPT09IEpTT04uc3RyaW5naWZ5KGdldERhdGVWYWx1ZXNJbk51bWJlcnMobmV3IERhdGUoKSkpO1xuICAgIH0pXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVGFza3MpO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXlXZWVrVGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0V2Vlayh0YXNrLmRlYWRsaW5lKSA9PSBnZXRXZWVrKG5ldyBEYXRlKCkpO1xuICAgIH0pXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVGFza3MpOyAgXG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNeU1vbnRoVGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gKEpTT04uc3RyaW5naWZ5KGdldERhdGVWYWx1ZXModGFzay5kZWFkbGluZSlbMV0pID09PSBKU09OLnN0cmluZ2lmeShnZXREYXRlVmFsdWVzKG5ldyBEYXRlKCkpWzFdKSAmJlxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGdldERhdGVWYWx1ZXModGFzay5kZWFkbGluZSlbMl0pID09PSBKU09OLnN0cmluZ2lmeShnZXREYXRlVmFsdWVzKG5ldyBEYXRlKCkpWzJdKSk7XG4gICAgfSlcbiAgICBkaXNwbGF5VGFza3MoZmlsdGVyZWRUYXNrcyk7XG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TW9udGhUYXNrcyAoYWxsVGFza3MpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IFtkZWFkbGluZURheSwgZGVhZGxpbmVNb250aCwgZGVhZGxpbmVZZWFyXSA9IGdldERhdGVWYWx1ZXNJbk51bWJlcnModGFzay5kZWFkbGluZSk7XG4gICAgICAgIGNvbnN0IFtjdXJyZW50RGF5LCBjdXJyZW50TW9udGgsIGN1cnJlbnRZZWFyXSA9IGdldERhdGVWYWx1ZXNJbk51bWJlcnMobmV3IERhdGUoKSk7XG4gICAgICAgIHJldHVybiAgKGRlYWRsaW5lTW9udGggPT09IGN1cnJlbnRNb250aCArIDEgJiYgZGVhZGxpbmVZZWFyID09PSBjdXJyZW50WWVhcikgfHxcbiAgICAgICAgICAgICAgICAoZGVhZGxpbmVNb250aCA9PT0gY3VycmVudE1vbnRoIC0gMTEgJiYgZGVhZGxpbmVZZWFyID09PSBjdXJyZW50WWVhciArIDEpO1xuICAgIH0pO1xuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvbmd0ZXJtVGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBbZGVhZGxpbmVEYXksIGRlYWRsaW5lTW9udGgsIGRlYWRsaW5lWWVhcl0gPSBnZXREYXRlVmFsdWVzSW5OdW1iZXJzKHRhc2suZGVhZGxpbmUpO1xuICAgICAgICBjb25zdCBbY3VycmVudERheSwgY3VycmVudE1vbnRoLCBjdXJyZW50WWVhcl0gPSBnZXREYXRlVmFsdWVzSW5OdW1iZXJzKG5ldyBEYXRlKCkpO1xuICAgICAgICByZXR1cm4gIChkZWFkbGluZVllYXIgPiBjdXJyZW50WWVhciArIDEpIHx8XG4gICAgICAgICAgICAgICAgKGRlYWRsaW5lWWVhciA+IGN1cnJlbnRZZWFyICYmICEoZGVhZGxpbmVNb250aCA9PSAwICYmIGN1cnJlbnRNb250aCA9PSAxMSkpIHx8XG4gICAgICAgICAgICAgICAgKGRlYWRsaW5lWWVhciA9PSBjdXJyZW50WWVhciAmJiBkZWFkbGluZU1vbnRoID4gY3VycmVudE1vbnRoICsgMSApXG4gICAgfSk7XG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVGFza3MpO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3ZlcmR1ZVRhc2tzIChhbGxUYXNrcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgW2RlYWRsaW5lRGF5LCBkZWFkbGluZU1vbnRoLCBkZWFkbGluZVllYXJdID0gZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyh0YXNrLmRlYWRsaW5lKTtcbiAgICAgICAgY29uc3QgW2N1cnJlbnREYXksIGN1cnJlbnRNb250aCwgY3VycmVudFllYXJdID0gZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuICAoZGVhZGxpbmVZZWFyIDwgY3VycmVudFllYXIpIHx8XG4gICAgICAgICAgICAgICAgKGRlYWRsaW5lWWVhciA9PSBjdXJyZW50WWVhciAmJiBkZWFkbGluZU1vbnRoIDwgY3VycmVudE1vbnRoKSB8fFxuICAgICAgICAgICAgICAgIChkZWFkbGluZVllYXIgPT0gY3VycmVudFllYXIgJiYgZGVhZGxpbmVNb250aCA9PSBjdXJyZW50TW9udGggJiYgZGVhZGxpbmVEYXkgPCBjdXJyZW50RGF5KVxuICAgIH0pO1xuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbn07XG5cblxuXG4vLyBhZGQgZGVzaWduXG4vLyBhZGQgbG9jYWwgc3RvcmFnZVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=