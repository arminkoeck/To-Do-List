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
/* harmony export */   addNewFolder: () => (/* binding */ addNewFolder),
/* harmony export */   createFolder: () => (/* binding */ createFolder),
/* harmony export */   createFolderFormOptions: () => (/* binding */ createFolderFormOptions),
/* harmony export */   getFolders: () => (/* binding */ getFolders),
/* harmony export */   getLocalFolders: () => (/* binding */ getLocalFolders),
/* harmony export */   getLocalNextFolderId: () => (/* binding */ getLocalNextFolderId),
/* harmony export */   getTimeFolders: () => (/* binding */ getTimeFolders),
/* harmony export */   removeFolderFromArray: () => (/* binding */ removeFolderFromArray),
/* harmony export */   setLocalFolders: () => (/* binding */ setLocalFolders),
/* harmony export */   setLocalNextFolderId: () => (/* binding */ setLocalNextFolderId)
/* harmony export */ });


let folderArray = [];
let timeFolderArray = [{name: "My Day", id: 1}, {name: "My Week", id: 2}, {name: "My Month", id: 3}, {name: "Next Month", id: 4}, {name: "Longterm", id: 5}, {name: "Longterm", id: 6}];


function getLocalFolders() {
    const storageFolders = JSON.parse(localStorage.getItem("Folders"));
    if (storageFolders) {
        folderArray = storageFolders;
    } else {
        setLocalFolders();
    }
}

function setLocalFolders() {
    localStorage.setItem("Folders", JSON.stringify(folderArray));
};

function setLocalNextFolderId() {
    localStorage.setItem("NextFolderId", JSON.stringify(nextFolderId));
}

function getLocalNextFolderId() {
    const storageNextFolderId = JSON.parse(localStorage.getItem("NextFolderId"));
    if (storageNextFolderId) {
        nextFolderId = storageNextFolderId;
    } else {
        setLocalNextFolderId();
    }
}

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
/* harmony export */   addNewTask: () => (/* binding */ addNewTask),
/* harmony export */   addTaskToFolder: () => (/* binding */ addTaskToFolder),
/* harmony export */   changeFolder: () => (/* binding */ changeFolder),
/* harmony export */   changePriority: () => (/* binding */ changePriority),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   getFolderTasks: () => (/* binding */ getFolderTasks),
/* harmony export */   getLocalMap: () => (/* binding */ getLocalMap),
/* harmony export */   getLocalNextTaskId: () => (/* binding */ getLocalNextTaskId),
/* harmony export */   getLocalTasks: () => (/* binding */ getLocalTasks),
/* harmony export */   getMap: () => (/* binding */ getMap),
/* harmony export */   getTaskFolder: () => (/* binding */ getTaskFolder),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   removeTaskFromArray: () => (/* binding */ removeTaskFromArray),
/* harmony export */   removeTaskFromFolder: () => (/* binding */ removeTaskFromFolder),
/* harmony export */   setLocalMap: () => (/* binding */ setLocalMap),
/* harmony export */   setLocalNextTaskId: () => (/* binding */ setLocalNextTaskId),
/* harmony export */   setLocalTasks: () => (/* binding */ setLocalTasks)
/* harmony export */ });


let taskArray = [];
let taskFolderMap = new Map();

function getMap () {
    return taskFolderMap;
}

function getLocalMap() {
    const storageMap = localStorage.getItem("taskMap");
    if (storageMap) {
        const savedMap = new Map(JSON.parse(storageMap));
        taskFolderMap = savedMap;
    } else {
        setLocalMap();
    }
}

function setLocalMap() {
    localStorage.setItem("taskMap", JSON.stringify([...taskFolderMap]));
}


function convertDatesToString(tasks) {
    return tasks.map(task => ({
        ...task,
        deadline: task.deadline.toISOString()
    }));
}

function convertStringsToDateObjects(tasks) {
    return tasks.map(task => ({
        ...task,
        deadline: new Date(task.deadline)
    }));
}


function setLocalTasks() {
    const stringTasks = convertDatesToString(taskArray);
    localStorage.setItem("Tasks", JSON.stringify(stringTasks));
}


function getLocalTasks() {
    const storageTasks = JSON.parse(localStorage.getItem("Tasks"));
    if (storageTasks) {
        taskArray = convertStringsToDateObjects(storageTasks);
    } else {
        setLocalTasks();
    }
}

function setLocalNextTaskId() {
    localStorage.setItem("NextTaskId", JSON.stringify(nextTaskId));
}

function getLocalNextTaskId() {
    const storageNextTaskId = JSON.parse(localStorage.getItem("NextTaskId"));
    if (storageNextTaskId) {
        nextTaskId = storageNextTaskId
    } else {
        setLocalNextTaskId();
    }
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








document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".open-task-modal").addEventListener("click", () => {
        (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.createFolderFormOptions)("#form-folders");
    });
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getLocalMap)();
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getLocalTasks)();
    (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getLocalFolders)();
    (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getLocalNextFolderId)();
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getLocalNextTaskId)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(".open-task-modal", ".task-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.openModal)(".open-folder-modal", ".folder-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModalByClick)(".close-task-modal", ".task-modal", ".task-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModalByClick)(".close-folder-modal", ".folder-modal", ".folder-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFolders)((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)((0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.getTasks)());
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getSidebarEffects)();
    addSidebarFolderLogic();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.activateAllTaskFolder)();
});


taskForm.onsubmit = (e) => {
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.addNewTask)(e);
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(".task-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)(".task-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    displayCurrentFolder();
    setLocalStorage()
};

folderForm.onsubmit = (e) => {
    (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.addNewFolder)(e);
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeModal)(".folder-modal");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.resetModal)(".folder-form");
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearFolders)();
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFolders)((0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.getFolders)());
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.getSidebarEffects) ();
    addSidebarFolderLogic();
    setLocalStorage()
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
        setLocalStorage()
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
        setLocalStorage()
    };
});


document.addEventListener("taskDelete", function(event) {
    const taskId = event.detail.taskId;
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.removeTaskFromArray)(taskId);
    (0,_domFunctions_js__WEBPACK_IMPORTED_MODULE_3__.clearTasks)();
    displayCurrentFolder();
    setLocalStorage()
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
    setLocalStorage()
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


function setLocalStorage() {
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.setLocalTasks)();
    (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.setLocalFolders)();
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.setLocalMap)();
    (0,_folderManager_js__WEBPACK_IMPORTED_MODULE_2__.setLocalNextFolderId)();
    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_1__.setLocalNextTaskId)();
};









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlJQUFpRDtBQUM3Riw0Q0FBNEMsbUlBQThDO0FBQzFGLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RUFBNkUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxxQ0FBcUMsK0JBQStCLGlDQUFpQyxnQ0FBZ0Msc0NBQXNDLHdD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QTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk1BO0FBQ0Esd0JBQXdCLHNCQUFzQixHQUFHLHVCQUF1QixHQUFHLHdCQUF3QixHQUFHLDBCQUEwQixHQUFHLHdCQUF3QixHQUFHLHdCQUF3Qjs7O0FBRy9LO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7O0FBR087QUFDUDtBQUNBOzs7QUFHQTs7QUFFTztBQUNQLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR087QUFDUDtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FB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QUFJLDREQUFVO0FBQ2QscUJBQXFCLHlEQUFRO0FBQzdCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksNERBQVU7QUFDZCxvQkFBb0IseURBQVE7QUFDNUIsQ0FBQzs7O0FBR007QUFDUDtBQUNBLDhCQUE4Qix3RUFBc0Isb0NBQW9DLHdFQUFzQjtBQUM5RyxLQUFLO0FBQ0wsSUFBSSwrREFBWTtBQUNoQjs7O0FBR087QUFDUDtBQUNBLGVBQWUseURBQU8sbUJBQW1CLHlEQUFPO0FBQ2hELEtBQUs7QUFDTCxJQUFJLCtEQUFZO0FBQ2hCOzs7QUFHTztBQUNQO0FBQ0EsK0JBQStCLCtEQUFhLHVDQUF1QywrREFBYTtBQUNoRywrQkFBK0IsK0RBQWEsdUNBQXVDLCtEQUFhO0FBQ2hHLEtBQUs7QUFDTCxJQUFJLCtEQUFZO0FBQ2hCOzs7QUFHTztBQUNQO0FBQ0EsMkRBQTJELHdFQUFzQjtBQUNqRix3REFBd0Qsd0VBQXNCO0FBQzlFO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7O0FBR087QUFDUDtBQUNBLDJEQUEyRCx3RUFBc0I7QUFDakYsd0RBQXdELHdFQUFzQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7O0FBR087QUFDUDtBQUNBLDJEQUEyRCx3RUFBc0I7QUFDakYsd0RBQXdELHdFQUFzQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSw4REFBWTtBQUNoQjs7O0FBR0E7QUFDQSxJQUFJLDhEQUFhO0FBQ2pCLElBQUksa0VBQWU7QUFDbkIsSUFBSSw0REFBVztBQUNmLElBQUksdUVBQW9CO0FBQ3hCLElBQUksbUVBQWtCO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ZvbGRlck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUG9wcGlucy9Qb3BwaW5zLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUG9wcGlucy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuXG46cm9vdCB7XG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNTA1MDVmO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjYjJiMmMzO1xuICAgIC0tdGVydGlhcnktY29sb3I6ICNlZGViZjA7XG4gICAgLS1ncmVlbi1jb2xvcjogcmdiKDk3LCAxODUsIDkzKTtcbiAgICAtLXllbGxvdy1jb2xvcjogcmdiKDIzNiwgMTgzLCA2Nyk7XG4gICAgLS1yZWQtY29sb3I6IHJnYigyNTUsIDk2LCA5Nik7XG4gICAgLS1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjMpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMgU2VtaWJvbGQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICB9XG5cbkBmb250LWZhY2Uge1xuZm9udC1mYW1pbHk6ICdQb3BwaW5zIExpZ2h0JztcbnNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMgUmVndWxhcic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIH1cblxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgTGlnaHRcIjtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIFNlbWlib2xkXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc2NyZWVuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiAxMjBweCAxZnIgLyAzNTBweCAxZnI7XG4gICAgaGVpZ2h0OiAxMDB2aFxufVxuXG4ubmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCAtMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28ge1xuICAgIGhlaWdodDogODBweDtcbiAgICBtYXJnaW46IDBweCAzMHB4O1xufVxuXG4uc2lkZWJhciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiA4cHggMHB4IDE1cHggLTEwcHggdmFyKC0tc2hhZG93LWNvbG9yKTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZvbGRlci1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxubGkge1xuICAgIHBhZGRpbmc6IDhweCAzMHB4O1xufVxuXG4uc2lkZWJhciAub3Blbi10YXNrLW1vZGFsLCAuc2lkZWJhciAub3Blbi1mb2xkZXItbW9kYWwge1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDBweDtcbn1cblxuXG4ub3Blbi10YXNrLW1vZGFsLCAub3Blbi1mb2xkZXItbW9kYWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgU2VtaWJvbGRcIjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG5cbi5vcGVuLXRhc2stbW9kYWw6aG92ZXIsIC5vcGVuLWZvbGRlci1tb2RhbDpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi50aW1lLXBlcmlvZC1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uc2lkZWJhci1oZWFkaW5nIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMzBweCAzMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIFNlbWlib2xkXCI7XG59XG5cbi5kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAgIG1hcmdpbjogMTBweCAzMHB4IDBweCAzMHB4O1xufVxuXG5saSBzcGFuIHtcbiAgICBtYXJnaW46IDAgMzBweCAwIDA7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDMwcHggNTBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuXG4udGFzay1iYWNrZ3JvdW5kIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjBweCAtMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxuXG4udGFzay1wcmlvcml0eSB7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAzMHB4O1xuICAgIGdyaWQtZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLXByaW9yaXR5IGgzIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuXG4uaGlnaC1wcmlvcml0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcbn1cblxuLm1lZGl1bS1wcmlvcml0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcbn1cblxuLmxvdy1wcmlvcml0eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tY29sb3IpO1xufVxuXG4udGFzay1kZWxldGUtYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LWZhbWlseTogUG9wcGlucyBTZW1pYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4udGFzay1kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5mb2xkZXItZGVsZXRlLWJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMgU2VtaWJvbGQ7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmZvbGRlci1kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cblxuLnNpZGViYXItbGlzdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnNpZGViYXItbGlzdC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uYWN0aXZlLXNpZGViYXItaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaDMge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMgU2VtaWJvbGRcIjtcbn1cblxuLnRhc2stY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICBoeXBoZW5zOiBhdXRvO1xufVxuXG4udGFzay1jb250ZW50IHAge1xuICAgIG1hcmdpbjogMjBweCAyMHB4IDBweCAyMHB4O1xufVxuXG4uZGVhZGxpbmUtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBTZW1pYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogYXV0byAyMHB4IDIwcHggMjBweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucyBTZW1pYm9sZFwiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbmZvcm0gaDMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XG59XG5cbmxhYmVsLCBsZWdlbmQge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zIFNlbWlib2xkXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW5wdXQ6aW52YWxpZCwgZmllbGRzZXQgaW5wdXQ6aW52YWxpZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkLWNvbG9yKTtcbn1cblxuaW5wdXQ6dmFsaWQsIGZpZWxkc2V0IGlucHV0OnZhbGlkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbi1jb2xvcik7XG59XG5cbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbi1jb2xvcik7XG59XG5cbmZpZWxkc2V0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG5maWVsZHNldCBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmZpZWxkc2V0IGRpdiBpbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKVxufVxuXG5pbnB1dFt0eXBlPSdyYWRpbyddOmFmdGVyIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0b3A6IC0ycHg7XG4gICAgbGVmdDogLTFweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG5pbnB1dFt0eXBlPSdyYWRpbyddOmNoZWNrZWQ6YWZ0ZXIge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRvcDogLTJweDtcbiAgICBsZWZ0OiAtMXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmFkZC10YXNrLW1vZGFsLWJ1dHRvbiwgLmFkZC1mb2xkZXItbW9kYWwtYnV0dG9uLCAuY2hhbmdlLWRlYWRsaW5lLW1vZGFsLWJ1dHRvbiwgLmNoYW5nZS1mb2xkZXItbW9kYWwtYnV0dG9uLCBkaWFsb2cgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5hZGQtdGFzay1tb2RhbC1idXR0b246aG92ZXIsIC5hZGQtZm9sZGVyLW1vZGFsLWJ1dHRvbjpob3ZlciwgLmNoYW5nZS1kZWFkbGluZS1tb2RhbC1idXR0b246aG92ZXIsIC5jaGFuZ2UtZm9sZGVyLW1vZGFsLWJ1dHRvbjpob3ZlciwgIGRpYWxvZyBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2stbW9kYWwsIC5mb2xkZXItbW9kYWwsIC5jaGFuZ2UtZm9sZGVyLW1vZGFsLCAuY2hhbmdlLWRlYWRsaW5lLW1vZGFsIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IC0xMHB4IHJnYigwLCAwLCAwLCAwLjcpO1xufVxuXG4jY3VycmVudC1kZWFkbGluZSwgI2N1cnJlbnQtZm9sZGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuZGlhbG9nIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcbn1cblxuZGlhbG9nIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOCwgNjgsIDY4KTtcbn1cblxuLmRpYWxvZy1idXR0b25zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsNENBQTBDO0VBQzVDOztBQUVGO0FBQ0EsNEJBQTRCO0FBQzVCLDRDQUF1QztBQUN2Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw0Q0FBeUM7RUFDM0M7OztBQUdGO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZDQUE2QztJQUM3QyxrREFBa0Q7SUFDbEQsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JB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YUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjNTA1MDVmO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2IyYjJjMztcXG4gICAgLS10ZXJ0aWFyeS1jb2xvcjogI2VkZWJmMDtcXG4gICAgLS1ncmVlbi1jb2xvcjogcmdiKDk3LCAxODUsIDkzKTtcXG4gICAgLS15ZWxsb3ctY29sb3I6IHJnYigyMzYsIDE4MywgNjcpO1xcbiAgICAtLXJlZC1jb2xvcjogcmdiKDI1NSwgOTYsIDk2KTtcXG4gICAgLS1zaGFkb3ctY29sb3I6IHJnYigwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zIFNlbWlib2xkJztcXG4gICAgc3JjOiB1cmwoJy4vUG9wcGlucy9Qb3BwaW5zLVNlbWlCb2xkLnR0ZicpO1xcbiAgfVxcblxcbkBmb250LWZhY2Uge1xcbmZvbnQtZmFtaWx5OiAnUG9wcGlucyBMaWdodCc7XFxuc3JjOiB1cmwoJy4vUG9wcGlucy9Qb3BwaW5zLUxpZ2h0LnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zIFJlZ3VsYXInO1xcbiAgICBzcmM6IHVybCgnLi9Qb3BwaW5zL1BvcHBpbnMtUmVndWxhci50dGYnKTtcXG4gIH1cXG5cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGlucyBMaWdodFxcXCI7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zIFNlbWlib2xkXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uc2NyZWVuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDEyMHB4IDFmciAvIDM1MHB4IDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aFxcbn1cXG5cXG4ubmF2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCAtMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgbWFyZ2luOiAwcHggMzBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDhweCAwcHggMTVweCAtMTBweCB2YXIoLS1zaGFkb3ctY29sb3IpO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbi5mb2xkZXItY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmxpIHtcXG4gICAgcGFkZGluZzogOHB4IDMwcHg7XFxufVxcblxcbi5zaWRlYmFyIC5vcGVuLXRhc2stbW9kYWwsIC5zaWRlYmFyIC5vcGVuLWZvbGRlci1tb2RhbCB7XFxuICAgIG1hcmdpbjogMTBweCAzMHB4IDBweDtcXG59XFxuXFxuXFxuLm9wZW4tdGFzay1tb2RhbCwgLm9wZW4tZm9sZGVyLW1vZGFsIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zIFNlbWlib2xkXFxcIjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG5cXG4ub3Blbi10YXNrLW1vZGFsOmhvdmVyLCAub3Blbi1mb2xkZXItbW9kYWw6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnRpbWUtcGVyaW9kLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhci1oZWFkaW5nIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMTBweDtcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGlucyBTZW1pYm9sZFxcXCI7XFxufVxcblxcbi5kaXZpZGVyIHtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMHB4IDMwcHg7XFxufVxcblxcbmxpIHNwYW4ge1xcbiAgICBtYXJnaW46IDAgMzBweCAwIDA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDMwcHggNTBweDtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLnRhc2stYmFja2dyb3VuZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyMHB4IC0xMHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XFxufVxcblxcblxcbi50YXNrLXByaW9yaXR5IHtcXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMzBweDtcXG4gICAgZ3JpZC1nYXA6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLXByaW9yaXR5IGgzIHtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcXG59XFxuXFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XFxufVxcblxcbi5sb3ctcHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zIFNlbWlib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5mb2xkZXItZGVsZXRlLWJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMgU2VtaWJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4uZm9sZGVyLWRlbGV0ZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcblxcbi5zaWRlYmFyLWxpc3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnNpZGViYXItbGlzdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbi5hY3RpdmUtc2lkZWJhci1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zIFNlbWlib2xkXFxcIjtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICBoeXBoZW5zOiBhdXRvO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHAge1xcbiAgICBtYXJnaW46IDIwcHggMjBweCAwcHggMjBweDtcXG59XFxuXFxuLmRlYWRsaW5lLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zIFNlbWlib2xkXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiBhdXRvIDIwcHggMjBweCAyMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGlucyBTZW1pYm9sZFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuZm9ybSBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcbn1cXG5cXG5sYWJlbCwgbGVnZW5kIHtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnMgU2VtaWJvbGRcXFwiO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmlucHV0OmludmFsaWQsIGZpZWxkc2V0IGlucHV0OmludmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1yZWQtY29sb3IpO1xcbn1cXG5cXG5pbnB1dDp2YWxpZCwgZmllbGRzZXQgaW5wdXQ6dmFsaWQge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmVlbi1jb2xvcik7XFxufVxcblxcbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMTBweCAwcHg7XFxufVxcblxcbmZpZWxkc2V0IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmZpZWxkc2V0IGRpdiBpbnB1dCB7XFxuICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLWNvbG9yKVxcbn1cXG5cXG5pbnB1dFt0eXBlPSdyYWRpbyddOmFmdGVyIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgdG9wOiAtMnB4O1xcbiAgICBsZWZ0OiAtMXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbmlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZDphZnRlciB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHRvcDogLTJweDtcXG4gICAgbGVmdDogLTFweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5hZGQtdGFzay1tb2RhbC1idXR0b24sIC5hZGQtZm9sZGVyLW1vZGFsLWJ1dHRvbiwgLmNoYW5nZS1kZWFkbGluZS1tb2RhbC1idXR0b24sIC5jaGFuZ2UtZm9sZGVyLW1vZGFsLWJ1dHRvbiwgZGlhbG9nIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXRhc2stbW9kYWwtYnV0dG9uOmhvdmVyLCAuYWRkLWZvbGRlci1tb2RhbC1idXR0b246aG92ZXIsIC5jaGFuZ2UtZGVhZGxpbmUtbW9kYWwtYnV0dG9uOmhvdmVyLCAuY2hhbmdlLWZvbGRlci1tb2RhbC1idXR0b246aG92ZXIsICBkaWFsb2cgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stbW9kYWwsIC5mb2xkZXItbW9kYWwsIC5jaGFuZ2UtZm9sZGVyLW1vZGFsLCAuY2hhbmdlLWRlYWRsaW5lLW1vZGFsIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCAtMTBweCByZ2IoMCwgMCwgMCwgMC43KTtcXG59XFxuXFxuI2N1cnJlbnQtZGVhZGxpbmUsICNjdXJyZW50LWZvbGRlciB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuZGlhbG9nIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XFxufVxcblxcbmRpYWxvZyBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA4LCA2OCwgNjgpO1xcbn1cXG5cXG4uZGlhbG9nLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBsb2dvRmlsZSBmcm9tIFwiLi9aZW5nZW5kYS1Mb2dvLnBuZ1wiXG5cbmNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2XCIpO1xuY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xubG9nby5zcmMgPSBsb2dvRmlsZVxubG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbm5hdkJhci5hcHBlbmRDaGlsZChsb2dvKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlGb2xkZXJzIChhcnJheSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9sZGVyLXNpZGViYXItY29udGFpbmVyXCIpXG4gICAgY29uc3QgZm9sZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xkZXItYXJyYXktY29udGFpbmVyXCIpO1xuICAgIGFycmF5LmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImZvbGRlci1pdGVtXCIpXG4gICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWxpc3QtaXRlbVwiKVxuICAgICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZm9sZGVyLWlkJywgZm9sZGVyLmlkKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGZvbGRlci5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGZvbGRlckRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZvbGRlckRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICBmb2xkZXJEZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImZvbGRlci1kZWxldGUtYnV0dG9uXCIpO1xuICAgICAgICBmb2xkZXJEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWZvbGRlci1pZCcsIGZvbGRlci5pZCk7XG4gICAgICAgIGZvbGRlckRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZm9sZGVySWQgPSB0aGlzLmRhdGFzZXQuZm9sZGVySWQ7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVFdmVudCA9IG5ldyBDdXN0b21FdmVudChcImZvbGRlckRlbGV0ZVwiLCB7ZGV0YWlsOiB7Zm9sZGVySWR9fSlcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZGVsZXRlRXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9sZGVyQ29udGFpbmVyKTtcbiAgICAgICAgZm9sZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGZvbGRlckRlbGV0ZUJ1dHRvbik7XG4gICAgfSk7XG59O1xuXG4vLyBOZWVkIHRvIGFkZCBhIGJ1dHRvbiBhbmQgYSBmb3JtIGluIHRoZSBEb20uXG4vLyBXaGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCwgdGhlIGZvcm0gb3BlbnMuXG4vLyBIZXJlIHlvdSBjYW4gY2hvb3NlIG9uZSBvZiB0aGUgZm9sZGVycyAoVGhleSBuZWVkIHRvIGJlIGdlbmVyYXRlZCBkeW5hbWljYWxseSBsaWtlIGluIHRoZSBhZGQgVGFzayBmb3JtKVxuLy8gT25jZSBhIGZvbGRlciBpcyBjaG9zZW4gYW5kIGNvbmZpcm1lZCB0aGUgdGFzayBnZXRzIHJlYXNzaWduZWQgdG8gYSBuZXcgZm9sZGVyXG4vLyBSZWZyZXNoIGFsbCBuZWVkZWQgZGlzcGxheSBGdW5jdGlvbnMgc28gdGhlIFRhc2sgaXMgc2hvd24gaW4gdGhlIHJpZ2h0IGZvbGRlclxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRhc2tzIChhcnJheSkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIilcbiAgICBhcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJhY2tncm91bmRcIilcblxuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRlbnRcIik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFzay1wcmlvcml0eVwiKTtcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJsb3ctcHJpb3JpdHlcIilcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwibWVkaXVtLXByaW9yaXR5XCIpXG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcblxuICAgICAgICBjb25zdCB0YXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwieFwiO1xuICAgICAgICB0YXNrRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlbGV0ZS1idXR0b25cIik7XG4gICAgICAgIHRhc2tEZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnLCB0YXNrLmlkKTtcbiAgICAgICAgdGFza0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gdGhpcy5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwidGFza0RlbGV0ZVwiLCB7ZGV0YWlsOiB7dGFza0lkfX0pXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGRlbGV0ZUV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZGVhZGxpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkZWFkbGluZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVhZGxpbmUtY29udGFpbmVyXCIpO1xuXG5cbiAgICAgICAgY29uc3QgZGVhZGxpbmVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNvbnN0IGRlYWRsaW5lRGF0ZSA9IGdldERhdGVWYWx1ZXModGFzay5kZWFkbGluZSk7XG4gICAgICAgIGRlYWRsaW5lRGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiRGVhZGxpbmU6IFwiICsgZGVhZGxpbmVEYXRlWzBdICsgXCIuIFwiICsgZGVhZGxpbmVEYXRlWzFdICsgXCIsIFwiICsgZGVhZGxpbmVEYXRlWzJdO1xuXG4gICAgICAgIGNvbnN0IHdlZWtOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB3ZWVrTnVtYmVyLnRleHRDb250ZW50ID0gXCJDVzogXCIgKyBnZXRXZWVrKHRhc2suZGVhZGxpbmUpO1xuICAgICAgICB3ZWVrTnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWVrLW51bWJlclwiKTtcblxuICAgICAgICBjb25zdCBjaGFuZ2VGb2xkZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjaGFuZ2VGb2xkZXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoYW5nZSBGb2xkZXJcIjtcbiAgICAgICAgY2hhbmdlRm9sZGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtZm9sZGVyLWJ1dHRvblwiKTtcbiAgICAgICAgY2hhbmdlRm9sZGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJywgdGFzay5pZCk7XG4gICAgICAgIGNoYW5nZUZvbGRlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gdGhpcy5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUZvbGRlckV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlRm9sZGVyXCIsIHtkZXRhaWw6IHt0YXNrSWR9fSlcbiAgICAgICAgICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY2hhbmdlRm9sZGVyRXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjaGFuZ2VEZWFkbGluZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoYW5nZURlYWRsaW5lQnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGFuZ2UgRGVhZGxpbmVcIjtcbiAgICAgICAgY2hhbmdlRGVhZGxpbmVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNoYW5nZS1kZWFkbGluZS1idXR0b25cIik7XG4gICAgICAgIGNoYW5nZURlYWRsaW5lQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJywgdGFzay5pZCk7XG4gICAgICAgIGNoYW5nZURlYWRsaW5lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSB0aGlzLmRhdGFzZXQudGFza0lkO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlRGVhZGxpbmVCdXR0b24gPSBuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VEZWFkbGluZVwiLCB7ZGV0YWlsOiB7dGFza0lkfX0pXG4gICAgICAgICAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGNoYW5nZURlYWRsaW5lQnV0dG9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICAgICAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICAgICAgYmFja2dyb3VuZC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudCk7XG4gICAgICAgIGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250YWluZXIpO1xuICAgICAgICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICAgICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lRGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlZWtOdW1iZXIpO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlRGVhZGxpbmVCdXR0b24pO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hhbmdlRm9sZGVyQnV0dG9uKTtcbiAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIH0pO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZVZhbHVlcyAoZGF0ZSkge1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZGUtREUnLCB7IG1vbnRoOiAnbG9uZycgfSk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gW2RheSwgbW9udGgsIHllYXJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyAoZGF0ZSkge1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZGViYXJFZmZlY3RzICgpIHtcbiAgICBjb25zdCBzaWRlYmFySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItbGlzdC1pdGVtXCIpO1xuICAgIHNpZGViYXJJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgc2lkZWJhckl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1zaWRlYmFyLWl0ZW1cIikpXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1zaWRlYmFyLWl0ZW1cIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclRhc2tzICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRm9sZGVycyAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb2xkZXItYXJyYXktY29udGFpbmVyXCIpLnRleHRDb250ZW50ID0gXCJcIjtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Nb2RhbCAob3BlbkJ1dHRvbkNsYXNzLCBtb2RhbENsYXNzKSB7XG4gICAgY29uc3QgbW9kYWxPcGVuQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcGVuQnV0dG9uQ2xhc3MpXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vZGFsQ2xhc3MpO1xuICAgIG1vZGFsT3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwuc2hvd01vZGFsKCkpXG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1vZGFsQnlDbGljayAoY2xvc2VCdXR0b25DbGFzcywgbW9kYWxDbGFzcywgZm9ybUNsYXNzKSB7XG4gICAgY29uc3QgbW9kYWxDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xvc2VCdXR0b25DbGFzcylcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxDbGFzcyk7XG4gICAgbW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICByZXNldE1vZGFsKGZvcm1DbGFzcyk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VNb2RhbCAobW9kYWxDbGFzcykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxDbGFzcykuY2xvc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TW9kYWwgKGZvcm1DbGFzcykge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1DbGFzcyk7XG4gICAgZm9ybS5yZXNldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVBbGxUYXNrRm9sZGVyICgpIHtcbiAgICBjb25zdCBhbGxUYXNrc0ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXRhc2stZm9sZGVyXCIpO1xuICAgIGFsbFRhc2tzRm9sZGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtc2lkZWJhci1pdGVtXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlKSB7XG4gICAgY29uc3QgdGVtcERhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XG4gICAgY29uc3QgamFudWFyeUZvdXJ0aCA9IG5ldyBEYXRlKHRlbXBEYXRlLmdldEZ1bGxZZWFyKCksIDAsIDQpO1xuICAgIGNvbnN0IGphbnVhcnlGb3VydGhEYXkgPSBqYW51YXJ5Rm91cnRoLmdldERheSgpO1xuICAgIGphbnVhcnlGb3VydGguc2V0RGF0ZShqYW51YXJ5Rm91cnRoLmdldERhdGUoKSAtIChqYW51YXJ5Rm91cnRoRGF5ID4gMCA/IGphbnVhcnlGb3VydGhEYXkgLSAxIDogNikpO1xuICAgIGNvbnN0IHdlZWtOdW1iZXIgPSBNYXRoLmNlaWwoKCgodGVtcERhdGUgLSBqYW51YXJ5Rm91cnRoKSAvIDg2NDAwMDAwKSArIGphbnVhcnlGb3VydGguZ2V0RGF5KCkgKyAxKSAvIDcpO1xuICAgIHJldHVybiB3ZWVrTnVtYmVyO1xufVxuXG4iLCJcblxubGV0IGZvbGRlckFycmF5ID0gW107XG5sZXQgdGltZUZvbGRlckFycmF5ID0gW3tuYW1lOiBcIk15IERheVwiLCBpZDogMX0sIHtuYW1lOiBcIk15IFdlZWtcIiwgaWQ6IDJ9LCB7bmFtZTogXCJNeSBNb250aFwiLCBpZDogM30sIHtuYW1lOiBcIk5leHQgTW9udGhcIiwgaWQ6IDR9LCB7bmFtZTogXCJMb25ndGVybVwiLCBpZDogNX0sIHtuYW1lOiBcIkxvbmd0ZXJtXCIsIGlkOiA2fV07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsRm9sZGVycygpIHtcbiAgICBjb25zdCBzdG9yYWdlRm9sZGVycyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJGb2xkZXJzXCIpKTtcbiAgICBpZiAoc3RvcmFnZUZvbGRlcnMpIHtcbiAgICAgICAgZm9sZGVyQXJyYXkgPSBzdG9yYWdlRm9sZGVycztcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMb2NhbEZvbGRlcnMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbEZvbGRlcnMoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJGb2xkZXJzXCIsIEpTT04uc3RyaW5naWZ5KGZvbGRlckFycmF5KSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxOZXh0Rm9sZGVySWQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJOZXh0Rm9sZGVySWRcIiwgSlNPTi5zdHJpbmdpZnkobmV4dEZvbGRlcklkKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbE5leHRGb2xkZXJJZCgpIHtcbiAgICBjb25zdCBzdG9yYWdlTmV4dEZvbGRlcklkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIk5leHRGb2xkZXJJZFwiKSk7XG4gICAgaWYgKHN0b3JhZ2VOZXh0Rm9sZGVySWQpIHtcbiAgICAgICAgbmV4dEZvbGRlcklkID0gc3RvcmFnZU5leHRGb2xkZXJJZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMb2NhbE5leHRGb2xkZXJJZCgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkRm9sZGVyVG9BcnJheSAoZm9sZGVyKSB7XG4gICAgZm9sZGVyQXJyYXkucHVzaChmb2xkZXIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbGRlcnMgKCkge1xuICAgIHJldHVybiBmb2xkZXJBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVGb2xkZXJzICgpIHtcbiAgICByZXR1cm4gdGltZUZvbGRlckFycmF5O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2xkZXJGcm9tQXJyYXkgKGZvbGRlcklkKSB7XG4gICAgZm9sZGVyQXJyYXkgPSBmb2xkZXJBcnJheS5maWx0ZXIoKGZvbGRlcikgPT4gZm9sZGVyLmlkICE9PSBwYXJzZUludChmb2xkZXJJZCkpXG59XG5cblxubGV0IG5leHRGb2xkZXJJZCA9IDc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb2xkZXIgKG5hbWUpIHtcbiAgICBjb25zdCBuZXdGb2xkZXIgPSB7IG5hbWUsIGlkOiBuZXh0Rm9sZGVySWQrKyB9XG4gICAgYWRkRm9sZGVyVG9BcnJheShuZXdGb2xkZXIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld0ZvbGRlciAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb2xkZXItbmFtZVwiKS52YWx1ZTtcbiAgICBjcmVhdGVGb2xkZXIobmFtZSk7XG59O1xuXG5cbmZ1bmN0aW9uIGdldEZvbGRlckZvcm1PcHRpb25zIChmb3JtSWQpIHtcbiAgICBjb25zdCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1JZCk7XG4gICAgZm9sZGVyQXJyYXkuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uLm5hbWU7XG4gICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb24uaWQ7XG4gICAgICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGb2xkZXJGb3JtT3B0aW9ucyAoZm9ybUlkKSB7XG4gICAgY29uc3Qgb3B0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtSWQpO1xuICAgIG9wdGlvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29uc3Qgbm9uZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbm9uZU9wdGlvbi50ZXh0Q29udGVudCA9IFwiTm9uZVwiO1xuICAgIG5vbmVPcHRpb24udmFsdWUgPSBcIk5vbmVcIjtcbiAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobm9uZU9wdGlvbik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvbGRlckZvcm1PcHRpb25zIChmb3JtSWQpIHtcbiAgICBjbGVhckZvbGRlckZvcm1PcHRpb25zKGZvcm1JZCk7XG4gICAgZ2V0Rm9sZGVyRm9ybU9wdGlvbnMoZm9ybUlkKTtcbn07XG5cblxuXG4iLCJcblxubGV0IHRhc2tBcnJheSA9IFtdO1xubGV0IHRhc2tGb2xkZXJNYXAgPSBuZXcgTWFwKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXAgKCkge1xuICAgIHJldHVybiB0YXNrRm9sZGVyTWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxNYXAoKSB7XG4gICAgY29uc3Qgc3RvcmFnZU1hcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza01hcFwiKTtcbiAgICBpZiAoc3RvcmFnZU1hcCkge1xuICAgICAgICBjb25zdCBzYXZlZE1hcCA9IG5ldyBNYXAoSlNPTi5wYXJzZShzdG9yYWdlTWFwKSk7XG4gICAgICAgIHRhc2tGb2xkZXJNYXAgPSBzYXZlZE1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRMb2NhbE1hcCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsTWFwKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza01hcFwiLCBKU09OLnN0cmluZ2lmeShbLi4udGFza0ZvbGRlck1hcF0pKTtcbn1cblxuXG5mdW5jdGlvbiBjb252ZXJ0RGF0ZXNUb1N0cmluZyh0YXNrcykge1xuICAgIHJldHVybiB0YXNrcy5tYXAodGFzayA9PiAoe1xuICAgICAgICAuLi50YXNrLFxuICAgICAgICBkZWFkbGluZTogdGFzay5kZWFkbGluZS50b0lTT1N0cmluZygpXG4gICAgfSkpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3RyaW5nc1RvRGF0ZU9iamVjdHModGFza3MpIHtcbiAgICByZXR1cm4gdGFza3MubWFwKHRhc2sgPT4gKHtcbiAgICAgICAgLi4udGFzayxcbiAgICAgICAgZGVhZGxpbmU6IG5ldyBEYXRlKHRhc2suZGVhZGxpbmUpXG4gICAgfSkpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbFRhc2tzKCkge1xuICAgIGNvbnN0IHN0cmluZ1Rhc2tzID0gY29udmVydERhdGVzVG9TdHJpbmcodGFza0FycmF5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHN0cmluZ1Rhc2tzKSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsVGFza3MoKSB7XG4gICAgY29uc3Qgc3RvcmFnZVRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRhc2tzXCIpKTtcbiAgICBpZiAoc3RvcmFnZVRhc2tzKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGNvbnZlcnRTdHJpbmdzVG9EYXRlT2JqZWN0cyhzdG9yYWdlVGFza3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldExvY2FsVGFza3MoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbE5leHRUYXNrSWQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJOZXh0VGFza0lkXCIsIEpTT04uc3RyaW5naWZ5KG5leHRUYXNrSWQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsTmV4dFRhc2tJZCgpIHtcbiAgICBjb25zdCBzdG9yYWdlTmV4dFRhc2tJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJOZXh0VGFza0lkXCIpKTtcbiAgICBpZiAoc3RvcmFnZU5leHRUYXNrSWQpIHtcbiAgICAgICAgbmV4dFRhc2tJZCA9IHN0b3JhZ2VOZXh0VGFza0lkXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TG9jYWxOZXh0VGFza0lkKCk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGFkZFRhc2tUb0FycmF5ICh0YXNrKSB7XG4gICAgdGFza0FycmF5LnVuc2hpZnQodGFzayk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza3MgKCkge1xuICAgIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrRnJvbUFycmF5ICh0YXNrSWQpIHtcbiAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBwYXJzZUludCh0YXNrSWQpKTtcbn1cblxubGV0IG5leHRUYXNrSWQgPSAxO1xuXG5cbi8vIGNhbiBhbHNvIGJlIHVzZWQgdG8gY2hhbmdlIHRoZSBmb2xkZXJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrVG9Gb2xkZXIgKHRhc2tJZCwgZm9sZGVySWQpIHtcbiAgICB0YXNrRm9sZGVyTWFwLnNldCh0YXNrSWQsIGZvbGRlcklkKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21Gb2xkZXIgKHRhc2tJZCkge1xuICAgIHRhc2tGb2xkZXJNYXAuZGVsZXRlKHRhc2tJZClcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrIChuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRlYWRsaW5lLCBmb2xkZXJJZCkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7IG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGVhZGxpbmUsIGlkOiBuZXh0VGFza0lkKyt9O1xuICAgIGFkZFRhc2tUb0FycmF5KG5ld1Rhc2spO1xuICAgIGFkZFRhc2tUb0ZvbGRlcihuZXdUYXNrLmlkLCBmb2xkZXJJZClcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdUYXNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybS1mb2xkZXJzXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlYWRsaW5lID0gbmV3IERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlYWRsaW5lXCIpLnZhbHVlKTtcbiAgICBjcmVhdGVUYXNrKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGVhZGxpbmUsIGZvbGRlcklkKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGb2xkZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb2xkZXJJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhbmdlLWZvbGRlclwiKS52YWx1ZTtcbiAgICByZXR1cm4gZm9sZGVySWQ7XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9sZGVyVGFza3MoYWxsVGFza3NBcnJheSwgZm9sZGVySWQpIHtcbiAgICByZXR1cm4gYWxsVGFza3NBcnJheS5maWx0ZXIodGFzayA9PiBwYXJzZUludCh0YXNrRm9sZGVyTWFwLmdldCh0YXNrLmlkKSkgPT09IHBhcnNlSW50KGZvbGRlcklkKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0ZvbGRlciAodGFza0lkKSB7XG4gICAgcmV0dXJuIHRhc2tGb2xkZXJNYXAuZ2V0KHRhc2tJZCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5ICh0YXNrLCBwcmlvcml0eSkge1xuICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbn1cblxuXG4vLyBmdW5jdGlvbiBzb3J0VGFza3NCeURhdGUgKCkge1xuICAgIC8vIGFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAvLyAgICAgLy8gVHVybiB5b3VyIHN0cmluZ3MgaW50byBkYXRlcywgYW5kIHRoZW4gc3VidHJhY3QgdGhlbVxuICAgIC8vICAgICAvLyB0byBnZXQgYSB2YWx1ZSB0aGF0IGlzIGVpdGhlciBuZWdhdGl2ZSwgcG9zaXRpdmUsIG9yIHplcm8uXG4gICAgLy8gICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGUpIC0gbmV3IERhdGUoYS5kYXRlKTtcbiAgICAvLyAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBzb3J0VGFza3NCeVByaW9yaXR5ICgpIHtcbiAgICBcbi8vIH1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyBhZGROZXdUYXNrLCBnZXRUYXNrcywgcmVtb3ZlVGFza0Zyb21BcnJheSwgcmVtb3ZlVGFza0Zyb21Gb2xkZXJzLCBhZGRUYXNrVG9Gb2xkZXIsIGNoYW5nZVByaW9yaXR5LCBjcmVhdGVUYXNrLCBnZXRGb2xkZXJUYXNrcyxcbiAgICAgICAgIGdldFRhc2tGb2xkZXIsIGNoYW5nZUZvbGRlciwgc2V0TG9jYWxNYXAsIGdldExvY2FsTWFwLCBnZXRMb2NhbFRhc2tzLCBzZXRMb2NhbFRhc2tzLCBnZXRMb2NhbE5leHRUYXNrSWQsIHNldExvY2FsTmV4dFRhc2tJZCB9IGZyb20gJy4vdGFza01hbmFnZXIuanMnO1xuaW1wb3J0IHsgYWRkTmV3Rm9sZGVyLCBnZXRGb2xkZXJzLCBjcmVhdGVGb2xkZXIsIHJlbW92ZUZvbGRlckZyb21BcnJheSwgY3JlYXRlRm9sZGVyRm9ybU9wdGlvbnMsIGdldFRpbWVGb2xkZXJzLCBzZXRMb2NhbEZvbGRlcnMsXG4gICAgICAgICBnZXRMb2NhbEZvbGRlcnMsIGdldExvY2FsTmV4dEZvbGRlcklkLCBzZXRMb2NhbE5leHRGb2xkZXJJZCB9IGZyb20gXCIuL2ZvbGRlck1hbmFnZXIuanNcIjtcbmltcG9ydCB7IGRpc3BsYXlGb2xkZXJzLCBkaXNwbGF5VGFza3MsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgY2xvc2VNb2RhbEJ5Q2xpY2ssIHJlc2V0TW9kYWwsIGNsZWFyVGFza3MsIGNsZWFyRm9sZGVycywgZ2V0U2lkZWJhckVmZmVjdHMsXG4gICAgICAgICBhY3RpdmF0ZUFsbFRhc2tGb2xkZXIsIGdldERhdGVWYWx1ZXMsIGdldERhdGVWYWx1ZXNJbk51bWJlcnMsIGdldFdlZWsgfSBmcm9tIFwiLi9kb21GdW5jdGlvbnMuanNcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuLXRhc2stbW9kYWxcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3JlYXRlRm9sZGVyRm9ybU9wdGlvbnMoXCIjZm9ybS1mb2xkZXJzXCIpO1xuICAgIH0pO1xuICAgIGdldExvY2FsTWFwKCk7XG4gICAgZ2V0TG9jYWxUYXNrcygpO1xuICAgIGdldExvY2FsRm9sZGVycygpO1xuICAgIGdldExvY2FsTmV4dEZvbGRlcklkKCk7XG4gICAgZ2V0TG9jYWxOZXh0VGFza0lkKCk7XG4gICAgb3Blbk1vZGFsKFwiLm9wZW4tdGFzay1tb2RhbFwiLCBcIi50YXNrLW1vZGFsXCIpO1xuICAgIG9wZW5Nb2RhbChcIi5vcGVuLWZvbGRlci1tb2RhbFwiLCBcIi5mb2xkZXItbW9kYWxcIik7XG4gICAgY2xvc2VNb2RhbEJ5Q2xpY2soXCIuY2xvc2UtdGFzay1tb2RhbFwiLCBcIi50YXNrLW1vZGFsXCIsIFwiLnRhc2stZm9ybVwiKTtcbiAgICBjbG9zZU1vZGFsQnlDbGljayhcIi5jbG9zZS1mb2xkZXItbW9kYWxcIiwgXCIuZm9sZGVyLW1vZGFsXCIsIFwiLmZvbGRlci1mb3JtXCIpO1xuICAgIGRpc3BsYXlGb2xkZXJzKGdldEZvbGRlcnMoKSk7XG4gICAgZGlzcGxheVRhc2tzKGdldFRhc2tzKCkpO1xuICAgIGdldFNpZGViYXJFZmZlY3RzKCk7XG4gICAgYWRkU2lkZWJhckZvbGRlckxvZ2ljKCk7XG4gICAgYWN0aXZhdGVBbGxUYXNrRm9sZGVyKCk7XG59KTtcblxuXG50YXNrRm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgYWRkTmV3VGFzayhlKTtcbiAgICBjbG9zZU1vZGFsKFwiLnRhc2stbW9kYWxcIik7XG4gICAgcmVzZXRNb2RhbChcIi50YXNrLWZvcm1cIik7XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIGRpc3BsYXlDdXJyZW50Rm9sZGVyKCk7XG4gICAgc2V0TG9jYWxTdG9yYWdlKClcbn07XG5cbmZvbGRlckZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgIGFkZE5ld0ZvbGRlcihlKTtcbiAgICBjbG9zZU1vZGFsKFwiLmZvbGRlci1tb2RhbFwiKTtcbiAgICByZXNldE1vZGFsKFwiLmZvbGRlci1mb3JtXCIpO1xuICAgIGNsZWFyRm9sZGVycygpO1xuICAgIGRpc3BsYXlGb2xkZXJzKGdldEZvbGRlcnMoKSk7XG4gICAgZ2V0U2lkZWJhckVmZmVjdHMgKCk7XG4gICAgYWRkU2lkZWJhckZvbGRlckxvZ2ljKCk7XG4gICAgc2V0TG9jYWxTdG9yYWdlKClcbn07XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZUZvbGRlclwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LmRldGFpbC50YXNrSWQ7XG4gICAgY29uc3Qgb2xkRm9sZGVyID0gZ2V0Rm9sZGVycygpLmZpbHRlcigoZm9sZGVyKSA9PiBnZXRUYXNrRm9sZGVyKHBhcnNlSW50KHRhc2tJZCkpID09PSBmb2xkZXIuaWQpXG4gICAgbGV0IGZvbGRlck5hbWUgPSBcIlwiO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9sZEZvbGRlcikgJiYgb2xkRm9sZGVyLmxlbmd0aCA+IDAgJiYgdHlwZW9mIG9sZEZvbGRlclswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9sZGVyTmFtZSA9IG9sZEZvbGRlclswXS5uYW1lXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9sZGVyTmFtZSA9IFwiTm9uZVwiXG4gICAgfTtcbiAgICBjcmVhdGVGb2xkZXJGb3JtT3B0aW9ucyhcIiNjaGFuZ2UtZm9sZGVyXCIpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2UtZm9sZGVyLW1vZGFsXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtZm9sZGVyXCIpO1xuICAgIGN1cnJlbnRGb2xkZXIudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgRm9sZGVyOiBcIiArIGZvbGRlck5hbWU7XG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY2xvc2VNb2RhbEJ5Q2xpY2sgKFwiLmNsb3NlLWNoYW5nZS1mb2xkZXItbW9kYWxcIiwgXCIuY2hhbmdlLWZvbGRlci1tb2RhbFwiLCBcIi5jaGFuZ2UtZm9sZGVyLWZvcm1cIilcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2UtY2hhbmdlLWZvbGRlci1tb2RhbFwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjdXJyZW50Rm9sZGVyLnRleHRDb250ZW50ID0gXCJcIik7XG4gICAgY2hhbmdlRm9sZGVyRm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvbGRlcklkID0gY2hhbmdlRm9sZGVyKGUpO1xuICAgICAgICBhZGRUYXNrVG9Gb2xkZXIgKHBhcnNlSW50KHRhc2tJZCksIHBhcnNlSW50KGZvbGRlcklkKSk7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIGN1cnJlbnRGb2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICByZXNldE1vZGFsKFwiLmNoYW5nZS1mb2xkZXItZm9ybVwiKTtcbiAgICAgICAgY2xlYXJUYXNrcygpO1xuICAgICAgICBkaXNwbGF5Q3VycmVudEZvbGRlcigpO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKVxuICAgIH07XG59KTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VEZWFkbGluZVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LmRldGFpbC50YXNrSWQ7XG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBnZXRUYXNrcygpLmZpbHRlcigodGFzaykgPT4gcGFyc2VJbnQodGFza0lkKSA9PT0gcGFyc2VJbnQodGFzay5pZCkpO1xuICAgIGNvbnN0IGN1cnJlbnREZWFkbGluZURhdGVWYWx1ZXMgPSBnZXREYXRlVmFsdWVzKGN1cnJlbnRUYXNrWzBdLmRlYWRsaW5lKTtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlLWRlYWRsaW5lLW1vZGFsXCIpO1xuICAgIGNvbnN0IGN1cnJlbnREZWFkbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC1kZWFkbGluZVwiKTtcbiAgICBjdXJyZW50RGVhZGxpbmVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQgRGVhZGxpbmU6IFwiICsgY3VycmVudERlYWRsaW5lRGF0ZVZhbHVlc1swXSArIFwiLiBcIiArIGN1cnJlbnREZWFkbGluZURhdGVWYWx1ZXNbMV0gKyBcIiwgXCIgKyBjdXJyZW50RGVhZGxpbmVEYXRlVmFsdWVzWzJdO1xuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIGNsb3NlTW9kYWxCeUNsaWNrIChcIi5jbG9zZS1jaGFuZ2UtZGVhZGxpbmUtbW9kYWxcIiwgXCIuY2hhbmdlLWRlYWRsaW5lLW1vZGFsXCIsIFwiLmNoYW5nZS1kZWFkbGluZS1mb3JtXCIpXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWNoYW5nZS1kZWFkbGluZS1tb2RhbFwiKVxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjdXJyZW50RGVhZGxpbmVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiKTtcbiAgICBjaGFuZ2VEZWFkbGluZUZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5ld0RlYWRsaW5lID0gbmV3IERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGFuZ2UtZGVhZGxpbmVcIikudmFsdWUpO1xuICAgICAgICBjdXJyZW50VGFza1swXS5kZWFkbGluZSA9IG5ld0RlYWRsaW5lO1xuICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICBjdXJyZW50RGVhZGxpbmVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICByZXNldE1vZGFsKFwiLmNoYW5nZS1kZWFkbGluZS1mb3JtXCIpO1xuICAgICAgICBjbGVhclRhc2tzKCk7XG4gICAgICAgIGRpc3BsYXlDdXJyZW50Rm9sZGVyKCk7XG4gICAgICAgIHNldExvY2FsU3RvcmFnZSgpXG4gICAgfTtcbn0pO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0YXNrRGVsZXRlXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgdGFza0lkID0gZXZlbnQuZGV0YWlsLnRhc2tJZDtcbiAgICByZW1vdmVUYXNrRnJvbUFycmF5KHRhc2tJZCk7XG4gICAgY2xlYXJUYXNrcygpO1xuICAgIGRpc3BsYXlDdXJyZW50Rm9sZGVyKCk7XG4gICAgc2V0TG9jYWxTdG9yYWdlKClcbn0pXG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50Rm9sZGVyICgpIHtcbiAgICBjb25zdCBhY3RpdmVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtc2lkZWJhci1pdGVtXCIpXG4gICAgY29uc3QgYWN0aXZlVGFza0lkID0gYWN0aXZlVGFzay5kYXRhc2V0LmZvbGRlcklkO1xuICAgIGlmIChwYXJzZUludChhY3RpdmVUYXNrSWQpICE9PSBwYXJzZUludCgwKSkge1xuICAgICAgICBkaXNwbGF5VGFza3MoZ2V0Rm9sZGVyVGFza3MoZ2V0VGFza3MoKSwgYWN0aXZlVGFza0lkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheVRhc2tzKGdldFRhc2tzKCkpO1xuICAgIH07XG59XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvbGRlckRlbGV0ZVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IGNvbmZpcm1lZCA9IGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZm9sZGVyP1wiKTtcbiAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlcklkID0gZXZlbnQuZGV0YWlsLmZvbGRlcklkXG4gICAgICAgIHJlbW92ZUZvbGRlckZyb21BcnJheShmb2xkZXJJZCk7XG4gICAgICAgIGNsZWFyRm9sZGVycygpO1xuICAgICAgICBkaXNwbGF5Rm9sZGVycyhnZXRGb2xkZXJzKCkpO1xuICAgICAgICBnZXRTaWRlYmFyRWZmZWN0cygpO1xuICAgICAgICBhZGRTaWRlYmFyRm9sZGVyTG9naWMoKTtcbiAgICAgICAgYWN0aXZhdGVBbGxUYXNrRm9sZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgc2V0TG9jYWxTdG9yYWdlKClcbn0pO1xuXG5mdW5jdGlvbiBhZGRTaWRlYmFyRm9sZGVyTG9naWMgKCkge1xuICAgIGNvbnN0IGZvbGRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvbGRlci1pdGVtXCIpO1xuICAgIGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgICAgIGZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9sZGVySWQgPSBmb2xkZXIuZGF0YXNldC5mb2xkZXJJZDtcbiAgICAgICAgICAgIGNsZWFyVGFza3MoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhnZXRGb2xkZXJUYXNrcyhnZXRUYXNrcygpLCBmb2xkZXJJZCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuXG5jb25zdCBhbGxUYXNrc0ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXRhc2stZm9sZGVyXCIpO1xuYWxsVGFza3NGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZGlzcGxheVRhc2tzKGdldFRhc2tzKCkpO1xufSk7XG5cblxuY29uc3QgbXlEYXlGb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215LWRheS1mb2xkZXJcIik7XG5teURheUZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBnZXRNeURheVRhc2tzKGdldFRhc2tzKCkpO1xufSk7XG5cbmNvbnN0IG15V2Vla0ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXktd2Vlay1mb2xkZXJcIik7XG5teVdlZWtGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0TXlXZWVrVGFza3MoZ2V0VGFza3MoKSk7XG59KTtcblxuY29uc3QgbXlNb250aEZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXktbW9udGgtZm9sZGVyXCIpO1xubXlNb250aEZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBnZXRNeU1vbnRoVGFza3MoZ2V0VGFza3MoKSk7XG59KTtcblxuY29uc3QgbmV4dE1vbnRoRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0LW1vbnRoLWZvbGRlclwiKTtcbm5leHRNb250aEZvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFyVGFza3MoKTtcbiAgICBnZXROZXh0TW9udGhUYXNrcyhnZXRUYXNrcygpKTtcbn0pO1xuXG5jb25zdCBsb25ndGVybUZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9uZ3Rlcm0tZm9sZGVyXCIpO1xubG9uZ3Rlcm1Gb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0TG9uZ3Rlcm1UYXNrcyhnZXRUYXNrcygpKTtcbn0pO1xuXG5jb25zdCBvdmVyZHVlRm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVyZHVlLWZvbGRlclwiKTtcbm92ZXJkdWVGb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclRhc2tzKCk7XG4gICAgZ2V0T3ZlcmR1ZVRhc2tzKGdldFRhc2tzKCkpO1xufSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE15RGF5VGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyh0YXNrLmRlYWRsaW5lKSkgPT09IEpTT04uc3RyaW5naWZ5KGdldERhdGVWYWx1ZXNJbk51bWJlcnMobmV3IERhdGUoKSkpO1xuICAgIH0pXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVGFza3MpO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TXlXZWVrVGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0V2Vlayh0YXNrLmRlYWRsaW5lKSA9PSBnZXRXZWVrKG5ldyBEYXRlKCkpO1xuICAgIH0pXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVGFza3MpOyAgXG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNeU1vbnRoVGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICByZXR1cm4gKEpTT04uc3RyaW5naWZ5KGdldERhdGVWYWx1ZXModGFzay5kZWFkbGluZSlbMV0pID09PSBKU09OLnN0cmluZ2lmeShnZXREYXRlVmFsdWVzKG5ldyBEYXRlKCkpWzFdKSAmJlxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGdldERhdGVWYWx1ZXModGFzay5kZWFkbGluZSlbMl0pID09PSBKU09OLnN0cmluZ2lmeShnZXREYXRlVmFsdWVzKG5ldyBEYXRlKCkpWzJdKSk7XG4gICAgfSlcbiAgICBkaXNwbGF5VGFza3MoZmlsdGVyZWRUYXNrcyk7XG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0TW9udGhUYXNrcyAoYWxsVGFza3MpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFRhc2tzID0gYWxsVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IFtkZWFkbGluZURheSwgZGVhZGxpbmVNb250aCwgZGVhZGxpbmVZZWFyXSA9IGdldERhdGVWYWx1ZXNJbk51bWJlcnModGFzay5kZWFkbGluZSk7XG4gICAgICAgIGNvbnN0IFtjdXJyZW50RGF5LCBjdXJyZW50TW9udGgsIGN1cnJlbnRZZWFyXSA9IGdldERhdGVWYWx1ZXNJbk51bWJlcnMobmV3IERhdGUoKSk7XG4gICAgICAgIHJldHVybiAgKGRlYWRsaW5lTW9udGggPT09IGN1cnJlbnRNb250aCArIDEgJiYgZGVhZGxpbmVZZWFyID09PSBjdXJyZW50WWVhcikgfHxcbiAgICAgICAgICAgICAgICAoZGVhZGxpbmVNb250aCA9PT0gY3VycmVudE1vbnRoIC0gMTEgJiYgZGVhZGxpbmVZZWFyID09PSBjdXJyZW50WWVhciArIDEpO1xuICAgIH0pO1xuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvbmd0ZXJtVGFza3MgKGFsbFRhc2tzKSB7XG4gICAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IGFsbFRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBbZGVhZGxpbmVEYXksIGRlYWRsaW5lTW9udGgsIGRlYWRsaW5lWWVhcl0gPSBnZXREYXRlVmFsdWVzSW5OdW1iZXJzKHRhc2suZGVhZGxpbmUpO1xuICAgICAgICBjb25zdCBbY3VycmVudERheSwgY3VycmVudE1vbnRoLCBjdXJyZW50WWVhcl0gPSBnZXREYXRlVmFsdWVzSW5OdW1iZXJzKG5ldyBEYXRlKCkpO1xuICAgICAgICByZXR1cm4gIChkZWFkbGluZVllYXIgPiBjdXJyZW50WWVhciArIDEpIHx8XG4gICAgICAgICAgICAgICAgKGRlYWRsaW5lWWVhciA+IGN1cnJlbnRZZWFyICYmICEoZGVhZGxpbmVNb250aCA9PSAwICYmIGN1cnJlbnRNb250aCA9PSAxMSkpIHx8XG4gICAgICAgICAgICAgICAgKGRlYWRsaW5lWWVhciA9PSBjdXJyZW50WWVhciAmJiBkZWFkbGluZU1vbnRoID4gY3VycmVudE1vbnRoICsgMSApXG4gICAgfSk7XG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVGFza3MpO1xufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3ZlcmR1ZVRhc2tzIChhbGxUYXNrcykge1xuICAgIGNvbnN0IGZpbHRlcmVkVGFza3MgPSBhbGxUYXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgW2RlYWRsaW5lRGF5LCBkZWFkbGluZU1vbnRoLCBkZWFkbGluZVllYXJdID0gZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyh0YXNrLmRlYWRsaW5lKTtcbiAgICAgICAgY29uc3QgW2N1cnJlbnREYXksIGN1cnJlbnRNb250aCwgY3VycmVudFllYXJdID0gZ2V0RGF0ZVZhbHVlc0luTnVtYmVycyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuICAoZGVhZGxpbmVZZWFyIDwgY3VycmVudFllYXIpIHx8XG4gICAgICAgICAgICAgICAgKGRlYWRsaW5lWWVhciA9PSBjdXJyZW50WWVhciAmJiBkZWFkbGluZU1vbnRoIDwgY3VycmVudE1vbnRoKSB8fFxuICAgICAgICAgICAgICAgIChkZWFkbGluZVllYXIgPT0gY3VycmVudFllYXIgJiYgZGVhZGxpbmVNb250aCA9PSBjdXJyZW50TW9udGggJiYgZGVhZGxpbmVEYXkgPCBjdXJyZW50RGF5KVxuICAgIH0pO1xuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRhc2tzKTtcbn07XG5cblxuZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIHNldExvY2FsVGFza3MoKTtcbiAgICBzZXRMb2NhbEZvbGRlcnMoKTtcbiAgICBzZXRMb2NhbE1hcCgpO1xuICAgIHNldExvY2FsTmV4dEZvbGRlcklkKCk7XG4gICAgc2V0TG9jYWxOZXh0VGFza0lkKCk7XG59O1xuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==