/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  font-family: 'Ubuntu', sans-serif;\\n}\\n\\n.darkblue {\\n  background-color: #34495e;\\n}\\n\\na,\\na:hover {\\n  font-weight: 350;\\n  font-size: 1.2em;\\n  letter-spacing: -0.75px;\\n  color: #34495e;\\n  text-decoration: none;\\n}\\n\\n.navbar {\\n  padding: 0 1.5rem;\\n}\\n\\n#app-name {\\n  transition: none;\\n}\\n\\n.navbar-brand {\\n  font-size: 1.25em;\\n  text-transform: uppercase;\\n}\\n\\n.navbar-brand,\\n.font-custom {\\n  letter-spacing: -1px;\\n  font-weight: bold;\\n}\\n\\n.nav-link {\\n  transition: font-size 0.4s ease-in-out;\\n}\\n\\n.nav-link:hover {\\n  font-size: 0.9em;\\n}\\n\\n.center {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.fs-8 {\\n  font-size: 0.8rem;\\n}\\n\\n.homepage {\\n  min-height: 93vh;\\n}\\n\\n.sidebar {\\n  flex: 0 0 auto;\\n  width: 20%;\\n  background-color: #fafafa;\\n}\\n\\nul,\\n.drop-down {\\n  padding-left: 30px;\\n  list-style: none;\\n}\\n\\n.option {\\n  padding: 0.3rem 0.5rem;\\n  margin-bottom: 0.2rem;\\n  border-radius: 3px;\\n  transition: background-color 0.5s ease-out;\\n}\\n\\n.option:hover,\\n.active {\\n  background-color: #ececec;\\n}\\n\\n.icons {\\n  width: 25px;\\n  height: 25px;\\n  margin-right: 1rem;\\n}\\n\\n.project-icon {\\n  margin-right: 0.5rem;\\n  width: 16px;\\n  height: 16px;\\n}\\n\\n.project-name::before {\\n  content: \\\"\\\";\\n  display: inline-block;\\n  width: 10px;\\n  height: 10px;\\n  margin-right: 0.8rem;\\n  background-color: #aaa;\\n  border-radius: 50%;\\n}\\n\\n.heading,\\n.wrap-btns {\\n  justify-content: space-between;\\n}\\n\\nh5 {\\n  margin-bottom: 0;\\n}\\n\\n.drop-down ul {\\n  padding: 0.5rem 0;\\n}\\n\\n.accordion-button {\\n  padding: 1rem 1.25rem 1rem 0.75rem;\\n  font-weight: bold;\\n}\\n\\n.accordion-body {\\n  padding: 0.5rem;\\n}\\n\\n.custom-btn {\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n  background-color: transparent;\\n}\\n\\n.main-page {\\n  flex: 0 0 auto;\\n  width: 80%;\\n}\\n\\n.mp-header {\\n  min-height: 10%;\\n}\\n\\n.mp-header,\\n.mp-body {\\n  width: 75%;\\n  margin: 0 auto;\\n}\\n\\n.mp-body {\\n  min-height: 85%;\\n}\\n\\n.editor,\\n.editor.open {\\n  min-height: 10rem;\\n  padding: 0.3rem;\\n}\\n\\n.close {\\n  background: none;\\n  border: none;\\n  color: floralwhite;\\n  font-weight: bold;\\n  border-radius: 10%;\\n}\\n\\n.editor * {\\n  font-size: 14px !important;\\n}\\n\\ntextarea {\\n  height: 100px;\\n}\\n\\n.datepicker {\\n  padding-left: 0.8rem !important;\\n}\\n\\n.actions {\\n  display: flex;\\n  justify-content: flex-end;\\n  padding: 0 0.8rem;\\n}\\n\\n.wrapper {\\n  padding: 0.5rem;\\n  width: 100%;\\n}\\n\\n.w-48 {\\n  width: 48%;\\n}\\n\\n.clear:hover {\\n  text-decoration: underline;\\n}\\n\\n.desc-td {\\n  height: 150px !important;\\n}\\n\\n@media screen and (max-width: 1200px) {\\n  .sidebar {\\n    width: 35%;\\n  }\\n\\n  .main-page {\\n    width: 65%;\\n  }\\n\\n  ul,\\n  .drop-down {\\n    padding-left: 0;\\n    list-style: none;\\n  }\\n\\n  .wrapper {\\n    padding: 0.75rem 0;\\n  }\\n}\\n\\n@media screen and (max-width: 768px) {\\n  .sidebar,\\n  .main-page {\\n    width: 100%;\\n  }\\n\\n  .navbar-nav {\\n    align-items: flex-end;\\n  }\\n}\\n\\n@media screen and (max-width: 400px) {\\n  .sidebar,\\n  .main-page {\\n    padding-left: 0;\\n  }\\n\\n  .navbar,\\n  ul,\\n  .drop-down {\\n    padding-left: 0.8rem;\\n  }\\n\\n  .mp-header,\\n  .mp-body {\\n    width: 85vw;\\n  }\\n\\n  .mp-body .btn {\\n    width: 100%;\\n    margin-top: 0.8em;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/add-task.png":
/*!*********************************!*\
  !*** ./src/assets/add-task.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5d8a10d9bc13f6deddfb.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/add-task.png?");

/***/ }),

/***/ "./src/assets/calendar.svg":
/*!*********************************!*\
  !*** ./src/assets/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eca9d6d883473ea98fcf.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/calendar.svg?");

/***/ }),

/***/ "./src/assets/hamburger.svg":
/*!**********************************!*\
  !*** ./src/assets/hamburger.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9992612a79f77e65b04f.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/hamburger.svg?");

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9248bc454751476bb3e9.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/plus.svg?");

/***/ }),

/***/ "./src/assets/push-pin.svg":
/*!*********************************!*\
  !*** ./src/assets/push-pin.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"064be01d2a6e18489d64.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/push-pin.svg?");

/***/ }),

/***/ "./src/assets/to-do.svg":
/*!******************************!*\
  !*** ./src/assets/to-do.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"165f2c8d18193b7c228d.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/to-do.svg?");

/***/ }),

/***/ "./src/assets/upcoming.svg":
/*!*********************************!*\
  !*** ./src/assets/upcoming.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fe27a9f69eaa75413561.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/upcoming.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_projectModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/projectModule.js */ \"./src/module/projectModule.js\");\n/* harmony import */ var _module_todoModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/todoModule.js */ \"./src/module/todoModule.js\");\n/* harmony import */ var _module_uxmanager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/uxmanager.js */ \"./src/module/uxmanager.js\");\n/* global $ */\n\n\n\n\n\n\n\n\nconst addToSelect = (project) => {\n  const select = document.querySelector('#todoProjectList');\n  const name = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_1__.wrapProject)(project);\n  select.appendChild(name);\n};\n\nconst addNewProject = (project) => {\n  const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;\n  const parentDiv = document.querySelector('#menu-items');\n\n  parentDiv.insertBefore((0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(project), projectButtonDiv);\n  addToSelect(project);\n};\n\nconst superToggle = (elem, old, curr) => {\n  if (!elem.classList.contains(old)) return;\n  elem.classList.remove(old);\n  elem.classList.add(curr);\n};\n\nconst collection = (key) => {\n  const storage = localStorage.getItem(`${key}-collection`)\n    ? JSON.parse(localStorage.getItem(`${key}-collection`)) : [];\n  return storage;\n};\n\nconst displayTracker = (project) => {\n  const todos = collection('todo');\n  const defaultTodos = todos.filter((storedTodo) => storedTodo.projectName === 'Default').length;\n  const customTodos = todos.filter((storedTodo) => storedTodo.projectName === project).length;\n  document.querySelector('#Default').textContent = defaultTodos;\n  document.querySelector(`#${project.split(' ').join('-')}`).textContent = customTodos;\n};\n\nconst initialize = () => {\n  const projects = collection('project');\n  const todos = collection('todo');\n\n  const menuList = document.querySelector('#menu-items');\n  const defaultProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)('Default');\n  const newProjectBtn = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_1__.newProjectButton)();\n  menuList.append(defaultProject, newProjectBtn);\n\n  projects.forEach((project) => {\n    addNewProject(project);\n    displayTracker(project);\n  });\n\n  const onLoad = todos.filter(((item) => item.projectName.toLowerCase() === 'default'));\n\n  const todoapp = document.querySelector('#todo-app');\n  todoapp.appendChild((0,_module_todoModule_js__WEBPACK_IMPORTED_MODULE_2__.createCards)(onLoad));\n};\n\ninitialize();\n(0,_module_uxmanager_js__WEBPACK_IMPORTED_MODULE_3__.uxManager)();\n\nconst saveNewToDo = (item) => {\n  const todos = collection('todo');\n  todos.push(item);\n  localStorage.setItem('todo-collection', JSON.stringify(todos));\n\n  document.getElementById('todo-app').innerHTML = '';\n  const todoapp = document.querySelector('#todo-app');\n  const displayFormat = item.projectName.toLowerCase();\n\n  const projectTodo = todos.filter((todo) => todo.projectName.toLowerCase() === displayFormat);\n  todoapp.appendChild((0,_module_todoModule_js__WEBPACK_IMPORTED_MODULE_2__.createCards)(projectTodo));\n\n  const tabTitle = document.querySelector('#tabTitle');\n  tabTitle.textContent = displayFormat;\n};\n\nconst updateTracker = (todo) => {\n  const todos = collection('todo');\n  const projectTodos = todos\n    .filter((storedTodo) => storedTodo.projectName === todo.projectName).length;\n  document.querySelector(`#${todo.projectName.split(' ').join('-')}`).textContent = projectTodos;\n};\n\nconst updateTodo = (todo) => {\n  const todos = JSON.parse(localStorage.getItem('todo-collection'));\n  const index = todos.findIndex((item) => item.id === todo.id);\n\n  todos[index] = todo;\n  localStorage.setItem('todo-collection', JSON.stringify(todos));\n\n  document.getElementById('todo-app').innerHTML = '';\n  const todoapp = document.querySelector('#todo-app');\n  const displayFormat = todo.projectName.toLowerCase();\n\n  const projectTodo = todos.filter((todo) => todo.projectName.toLowerCase() === displayFormat);\n  todoapp.appendChild((0,_module_todoModule_js__WEBPACK_IMPORTED_MODULE_2__.createCards)(projectTodo));\n\n  document.getElementById('tabTitle').innerHTML = '';\n  const tabTitle = document.querySelector('#tabTitle');\n  tabTitle.textContent = todo.projectName.toLowerCase();\n};\n\nconst resetFields = (...fields) => {\n  fields.forEach((field) => {\n    field.value = '';\n  });\n};\n\ndocument.addEventListener('click', (event) => {\n  if (event.target.id === 'addProjectBtn') {\n    if (document.getElementById('projectName').value.trim().length > 4) {\n      const projects = JSON.parse(localStorage.getItem('project-collection'))\n        ? JSON.parse(localStorage.getItem('project-collection')) : [];\n      projects.push(document.getElementById('projectName').value);\n      addNewProject(document.getElementById('projectName').value);\n      localStorage.setItem('project-collection', JSON.stringify(projects));\n      document.getElementById('projectName').value = '';\n    }\n  }\n\n  if (event.target.id === 'cancelBtn') {\n    document.getElementById('projectName').value = '';\n\n    const field = document.querySelector('#newProjectBtn');\n    superToggle(field, 'd-none', 'd-block');\n\n    const adjacentDiv = document.querySelector('#addProjectForm');\n    superToggle(adjacentDiv, 'd-block', 'd-none');\n  }\n\n  if (event.target.parentNode.className === 'project-name' || event.target.parentNode.className === 'project-name-default') {\n    const todos = JSON.parse(localStorage.getItem('todo-collection'))\n      .filter((project) => project.projectName.toLowerCase() === event.target.id.split('-')[1]);\n\n    document.getElementById('todo-app').innerHTML = '';\n    const todoapp = document.querySelector('#todo-app');\n    todoapp.appendChild((0,_module_todoModule_js__WEBPACK_IMPORTED_MODULE_2__.createCards)(todos));\n\n    document.getElementById('tabTitle').innerHTML = '';\n    const tabTitle = document.getElementById('tabTitle');\n    [, tabTitle.textContent] = event.target.id.split('-');\n  }\n\n  if (event.target.id.includes('delete-')) {\n    const todos = JSON.parse(localStorage.getItem('todo-collection'));\n    const [, finder] = event.target.id.split('-');\n\n    const index = todos.findIndex((todo) => todo.id === finder);\n\n    todos.splice(index, 1);\n\n    localStorage.setItem('todo-collection', JSON.stringify(todos));\n\n    document.getElementById('todo-app').innerHTML = '';\n    const todoapp = document.querySelector('#todo-app');\n    const displayedHeader = document.querySelector('#tabTitle').textContent.toLowerCase();\n    todoapp.appendChild((0,_module_todoModule_js__WEBPACK_IMPORTED_MODULE_2__.createCards)(todos\n      .filter((todo) => todo.projectName.toLowerCase() === displayedHeader)));\n  }\n\n  if (event.target.id.includes('edit-')) {\n    const todos = JSON.parse(localStorage.getItem('todo-collection'));\n\n    const [, finder] = event.target.id.split('-');\n    const [todo] = todos.filter((item) => item.id === finder);\n\n    document.querySelector('#activeTodo').value = finder;\n\n    document.querySelector('#todoTitle').value = todo.title;\n    document.querySelector('#todoDesc').value = todo.description;\n    document.querySelector('#todoProjectList').value = todo.projectName;\n    document.querySelector('#todoPriorities').value = todo.priority;\n    document.querySelector('#datepicker').value = todo.dueDate;\n\n    $('#todoModal').modal('show');\n  }\n});\n\ndocument.getElementById('saveBtn').onclick = () => {\n  const title = document.querySelector('#todoTitle');\n  const desc = document.querySelector('#todoDesc');\n  const projectName = document.querySelector('#todoProjectList');\n  const priorityLevel = document.querySelector('#todoPriorities');\n  const dueDate = document.querySelector('#datepicker');\n\n  const secretKey = document.querySelector('#activeTodo');\n\n  const T = new Date().setHours(0, 0, 0, 0);\n\n  if (secretKey.value) {\n    const todo = new _module_todoModule_js__WEBPACK_IMPORTED_MODULE_2__.Todo(\n      secretKey.value,\n      title.value,\n      desc.value,\n      dueDate.value,\n      priorityLevel.value,\n      projectName.value,\n    );\n\n    if (!Object.values(todo).every((input) => input.length > 2)) return;\n\n    if ((T.valueOf() !== (0,_module_uxmanager_js__WEBPACK_IMPORTED_MODULE_3__.validFormat)(todo.dueDate))\n    && T.valueOf() < (0,_module_uxmanager_js__WEBPACK_IMPORTED_MODULE_3__.validFormat)(todo.dueDate) === false) {\n      dueDate.classList.add('is-invalid');\n      dueDate.value = '';\n    } else {\n      if (dueDate.classList.contains('is-invalid')) dueDate.classList.remove('is-invalid');\n      updateTodo(todo);\n      updateTracker(todo);\n      $('#todoModal').modal('hide');\n      document.querySelector('#activeTodo').value = '';\n    }\n  } else {\n    const storageIndex = localStorage.getItem('todo-collection')\n      ? JSON.parse(localStorage.getItem('todo-collection')).length + 1 : 0;\n\n    const uniqueId = `${title.value.split(' ').join('')}${storageIndex}`;\n\n    const todo = new _module_todoModule_js__WEBPACK_IMPORTED_MODULE_2__.Todo(\n      uniqueId,\n      title.value,\n      desc.value,\n      dueDate.value,\n      priorityLevel.value,\n      projectName.value,\n    );\n\n    if (!Object.values(todo).every((input) => input.length > 2)) return;\n\n    if ((T.valueOf() !== (0,_module_uxmanager_js__WEBPACK_IMPORTED_MODULE_3__.validFormat)(todo.dueDate))\n    && T.valueOf() < (0,_module_uxmanager_js__WEBPACK_IMPORTED_MODULE_3__.validFormat)(todo.dueDate) === false) {\n      dueDate.classList.add('is-invalid');\n      dueDate.value = '';\n    } else {\n      if (dueDate.classList.contains('is-invalid')) dueDate.classList.remove('is-invalid');\n      saveNewToDo(todo);\n      updateTracker(todo);\n      $('#todoModal').modal('hide');\n      document.querySelector('#activeTodo').value = '';\n    }\n  }\n};\n\n$('#todoModal').on('hidden.bs.modal', () => {\n  const title = document.querySelector('#todoTitle');\n  const desc = document.querySelector('#todoDesc');\n  const projectName = document.querySelector('#todoProjectList');\n  const priorityLevel = document.querySelector('#todoPriorities');\n  const dueDate = document.querySelector('#datepicker');\n\n  resetFields(title, desc, projectName, priorityLevel, dueDate);\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/module/domManager.js":
/*!**********************************!*\
  !*** ./src/module/domManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst attributes = (() => ({\n  navbar: {\n    brand: {\n      href: '#',\n      class: 'navbar-brand center text-white',\n    },\n\n    logo: { alt: 'to-do list icon' },\n\n    hamburger: {\n      id: 'hamburger',\n      alt: 'menu icon',\n    },\n\n    action: {\n      alt: 'add task icon',\n      class: 'me-2',\n    },\n  },\n\n  div: {\n    class: 'd-none wrapper',\n    id: 'addProjectForm',\n  },\n\n  li: {\n    class: 'option center justify-content-between',\n  },\n\n  a: {\n    all: { href: '#' },\n    new: { id: 'newProjectBtn' },\n    created: { class: 'project-name' },\n  },\n\n  icon: {\n    default: {\n      class: 'project-icon',\n    },\n    new: {\n      class: 'project-icon',\n    },\n  },\n\n  date: {\n    class: 'd-none mb-1 ms-3',\n    id: 'date',\n  },\n\n  wrap: {\n    class: 'd-flex w-100 mt-2 wrap-btns',\n  },\n\n  input: {\n    class: 'form-control',\n    id: 'projectName',\n  },\n\n  addBtn: {\n    class: 'btn btn-success text-white w-48',\n    id: 'addProjectBtn',\n  },\n\n  cancelBtn: {\n    class: 'btn btn-danger text-white w-48',\n    id: 'cancelBtn',\n    textContent: 'Cancel',\n  },\n\n  project: {\n    class: 'badge bg-primary rounded-pill',\n  },\n\n  card: {\n    wrap: { class: 'card mt-3' },\n    header: {\n      class: 'card-header d-flex center justify-content-between',\n    },\n    title: {\n      class: 'item-name',\n    },\n    details: {\n      class: 'item-details d-flex flex-wrap',\n    },\n    date: {\n      class: 'item-date mb-0',\n    },\n    flag: {\n      alt: 'priority level',\n      class: 'me-2',\n    },\n    body: {\n      class: 'card-body',\n    },\n    desc: {\n      class: 'item-desc',\n    },\n    badge: {\n      high: {\n        class: 'badge btn-danger me-3',\n      },\n      medium: {\n        class: 'badge btn-primary me-3',\n      },\n      low: {\n        class: 'badge btn-warning me-3 text-dark',\n      },\n    },\n    footer: {\n      class: 'card-footer d-flex',\n    },\n    editButton: {\n      class: 'btn btn-secondary btn-sm me-1',\n    },\n    deleteButton: {\n      class: 'btn btn-danger btn-sm',\n    },\n  },\n}))();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);\n\n//# sourceURL=webpack://todo-list/./src/module/domManager.js?");

/***/ }),

/***/ "./src/module/projectModule.js":
/*!*************************************!*\
  !*** ./src/module/projectModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultProject\": () => (/* binding */ createDefaultProject),\n/* harmony export */   \"newProjectButton\": () => (/* binding */ newProjectButton),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"wrapProject\": () => (/* binding */ wrapProject)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n/* harmony import */ var _assets_push_pin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/push-pin.svg */ \"./src/assets/push-pin.svg\");\n/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/plus.svg */ \"./src/assets/plus.svg\");\n\n\n\n\nconst customAttributes = (elem, attributes) => {\n  Object.entries(attributes).forEach(([key, value]) => {\n    elem.setAttribute(key, value);\n  });\n};\n\nconst customLink = () => {\n  const option = document.createElement('li');\n  customAttributes(option, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.li);\n\n  const anchor = document.createElement('a');\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.all);\n\n  const defaultIcon = document.createElement('img');\n  customAttributes(defaultIcon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.icon.default);\n  defaultIcon.src = _assets_push_pin_svg__WEBPACK_IMPORTED_MODULE_1__;\n\n  const addNewIcon = document.createElement('img');\n  customAttributes(addNewIcon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.icon.new);\n  addNewIcon.src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_2__;\n\n  const text = document.createElement('span');\n\n  const tracker = document.createElement('span');\n  customAttributes(tracker, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.project);\n\n  return {\n    option,\n    anchor,\n    defaultIcon,\n    addNewIcon,\n    text,\n    tracker,\n  };\n};\n\nconst createDefaultProject = (name) => {\n  const {\n    option,\n    anchor,\n    defaultIcon,\n    text,\n    tracker,\n  } = customLink();\n\n  text.textContent = name;\n  text.id = 'pr-default';\n\n  tracker.id = name;\n\n  anchor.append(defaultIcon, text);\n  anchor.className = 'project-name-default';\n  option.append(anchor, tracker);\n\n  return option;\n};\n\nconst newProjectButton = () => {\n  const {\n    option,\n    anchor,\n    addNewIcon,\n    text,\n  } = customLink();\n\n  text.textContent = 'Add new project';\n\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.new);\n  anchor.append(addNewIcon, text);\n\n  anchor.addEventListener('click', (event) => {\n    const field = document.querySelector(`#${event.currentTarget.id}`);\n    field.classList.add('d-none');\n\n    const adjacentDiv = document.querySelector('#addProjectForm');\n    if (!adjacentDiv.classList.contains('d-none')) return;\n    adjacentDiv.classList.remove('d-none');\n    adjacentDiv.classList.add('d-block');\n  });\n\n  const addProjectForm = document.createElement('div');\n  customAttributes(addProjectForm, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.div);\n\n  const input = document.createElement('input');\n  customAttributes(input, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.input);\n\n  const wrap = document.createElement('div');\n  customAttributes(wrap, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.wrap);\n\n  const add = document.createElement('button');\n  customAttributes(add, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.addBtn);\n  add.textContent = 'Add';\n\n  const cancel = document.createElement('button');\n  customAttributes(cancel, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.cancelBtn);\n  cancel.textContent = 'Cancel';\n\n  wrap.append(add, cancel);\n  addProjectForm.append(input, wrap);\n\n  option.append(anchor, addProjectForm);\n\n  return option;\n};\n\nconst createProject = (project) => {\n  const {\n    option,\n    anchor,\n    text,\n    tracker,\n  } = customLink();\n\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.created);\n  text.textContent = project;\n  text.id = `pr-${project.toLowerCase()}`;\n\n  tracker.id = `${project.split(' ').join('-')}`;\n\n  anchor.appendChild(text);\n  option.append(anchor, tracker);\n\n  return option;\n};\n\nconst wrapProject = (project) => {\n  const option = document.createElement('option');\n  option.textContent = project;\n\n  return option;\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/module/projectModule.js?");

/***/ }),

/***/ "./src/module/todoModule.js":
/*!**********************************!*\
  !*** ./src/module/todoModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"createCards\": () => (/* binding */ createCards)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n\n\nfunction Todo(id, title, description, dueDate, priority, project) {\n  this.id = id;\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.projectName = project;\n}\n\nfunction defineAttributes(elem, attributes) {\n  Object.entries(attributes).forEach(([key, value]) => {\n    elem.setAttribute(key, value);\n  });\n}\n\nfunction createCards(todos) {\n  const cardsContainer = document.createElement('div');\n  cardsContainer.id = 'card-container';\n\n  for (let i = 0; i < todos.length; i += 1) {\n    const card = document.createElement('div');\n    defineAttributes(card, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.wrap);\n\n    const cardHeader = document.createElement('div');\n    defineAttributes(cardHeader, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.header);\n\n    const itemTitle = document.createElement('h5');\n    defineAttributes(itemTitle, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.title);\n\n    const itemDetails = document.createElement('div');\n    defineAttributes(itemDetails, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.details);\n\n    const itemDate = document.createElement('p');\n    defineAttributes(itemDate, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.date);\n\n    const itemPriority = document.createElement('span');\n    defineAttributes(itemPriority, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.badge[`${todos[i].priority.toLowerCase()}`]);\n\n    itemDetails.append(itemPriority, itemDate);\n    cardHeader.append(itemTitle, itemDetails);\n\n    const cardBody = document.createElement('div');\n    defineAttributes(cardBody, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.body);\n\n    const itemDescription = document.createElement('p');\n    defineAttributes(itemDescription, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.desc);\n\n    cardBody.appendChild(itemDescription);\n\n    const cardFooter = document.createElement('div');\n    defineAttributes(cardFooter, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.footer);\n\n    const editButton = document.createElement('button');\n    defineAttributes(editButton, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.editButton);\n    editButton.textContent = 'Edit';\n    editButton.id = `edit-${todos[i].id}`;\n\n    const deleteButton = document.createElement('button');\n    defineAttributes(deleteButton, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.deleteButton);\n    deleteButton.textContent = 'Delete';\n    deleteButton.id = `delete-${todos[i].id}`;\n\n    cardFooter.append(editButton, deleteButton);\n\n    Object.entries(todos[i]).forEach(([key, value]) => {\n      if (key === 'title') {\n        itemTitle.textContent = value;\n      } else if (key === 'description') {\n        itemDescription.textContent = value;\n      } else if (key === 'dueDate') {\n        itemDate.textContent = value;\n      } else if (key === 'priority') {\n        itemPriority.textContent = value;\n      }\n    });\n\n    card.append(cardHeader, cardBody, cardFooter);\n\n    cardsContainer.appendChild(card);\n  }\n\n  return cardsContainer;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/module/todoModule.js?");

/***/ }),

/***/ "./src/module/uxmanager.js":
/*!*********************************!*\
  !*** ./src/module/uxmanager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validFormat\": () => (/* binding */ validFormat),\n/* harmony export */   \"uxManager\": () => (/* binding */ uxManager)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n/* harmony import */ var _assets_to_do_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/to-do.svg */ \"./src/assets/to-do.svg\");\n/* harmony import */ var _assets_hamburger_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/hamburger.svg */ \"./src/assets/hamburger.svg\");\n/* harmony import */ var _assets_add_task_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/add-task.png */ \"./src/assets/add-task.png\");\n/* harmony import */ var _assets_calendar_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/calendar.svg */ \"./src/assets/calendar.svg\");\n/* harmony import */ var _assets_upcoming_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/upcoming.svg */ \"./src/assets/upcoming.svg\");\n/* harmony import */ var _todoModule_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todoModule.js */ \"./src/module/todoModule.js\");\n\n\n\n\n\n\n\n\nconst imageBuilder = (elem, attributes, asset = null) => {\n  Object.entries(attributes).forEach(([key, value]) => {\n    elem.setAttribute(key, value);\n  });\n  if (asset) elem.src = asset;\n};\n\nconst navElements = () => {\n  const navbarBrand = document.createElement('a');\n  imageBuilder(navbarBrand, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.navbar.brand);\n\n  const logo = document.createElement('img');\n  imageBuilder(logo, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.navbar.logo, _assets_to_do_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n  navbarBrand.append(logo, 'To-do List');\n\n  const hamburger = document.createElement('span');\n  const icon = document.createElement('img');\n  imageBuilder(icon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.navbar.hamburger, _assets_hamburger_svg__WEBPACK_IMPORTED_MODULE_2__);\n  hamburger.appendChild(icon);\n\n  const action = document.createElement('img');\n  imageBuilder(action, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.navbar.action, _assets_add_task_png__WEBPACK_IMPORTED_MODULE_3__);\n\n  return { navbarBrand, hamburger, action };\n};\n\nconst manageNav = () => {\n  const nav = document.querySelector('#app-name');\n  const navbarToggle = document.querySelector('.navbar-toggler');\n  const quickAdd = document.querySelector('#quick-add');\n\n  const { navbarBrand, hamburger, action } = navElements();\n\n  quickAdd.append(action, 'Quick Add Task');\n\n  navbarToggle.appendChild(hamburger);\n\n  nav.insertBefore(navbarBrand, navbarToggle);\n};\n\nconst renderTabIcons = () => {\n  const todayTab = document.getElementById('calendar');\n  const upcomingTab = document.getElementById('upcoming');\n\n  todayTab.src = _assets_calendar_svg__WEBPACK_IMPORTED_MODULE_4__;\n  upcomingTab.src = _assets_upcoming_svg__WEBPACK_IMPORTED_MODULE_5__;\n};\n\nconst validFormat = (input) => {\n  let date;\n  const T = input.split(/\\D+/).map((value) => parseInt(value, 10));\n\n  try {\n    date = new Date(T[0], T[1] - 1, T[2]);\n    if (date.getMonth() + 1 === T[1] && date.getDate() === T[2]) return date.setHours(0, 0, 0, 0);\n    throw new Error('Bad Date Format');\n  } catch (error) {\n    return NaN;\n  }\n};\n\nconst superToggle = (elem, old, curr) => {\n  if (!elem.classList.contains(old)) return;\n  elem.classList.remove(old);\n  elem.classList.add(curr);\n};\n\nconst setDate = () => {\n  const pageHeader = document.querySelector('.mp-header');\n  const date = document.createElement('p');\n  Object.entries(_domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.date).forEach(([key, value]) => {\n    date.setAttribute(key, value);\n  });\n  const [weekDay, month, day] = new Date().toDateString().split(' ');\n  date.textContent = `${weekDay} ${day} ${month}`;\n  pageHeader.appendChild(date);\n};\n\nconst setActiveTab = (link) => {\n  const tabs = document.getElementsByClassName('option');\n\n  Array.from(tabs).forEach((tab) => {\n    if (tab.classList.contains('active')) tab.classList.remove('active');\n  });\n\n  link.parentElement.classList.add('active');\n};\n\nconst updatePage = (selectedTab) => {\n  const title = document.querySelector('#tabTitle');\n  title.textContent = selectedTab.slice(7);\n\n  const date = document.querySelector('#date');\n\n  const container = document.querySelector('#todo-app');\n  const todoList = localStorage.getItem('todo-collection') ? JSON.parse(localStorage.getItem('todo-collection')) : [];\n\n  const currentDay = new Date().toLocaleDateString('en-GB')\n    .split('/')\n    .reverse()\n    .join('-');\n\n  const itemsToday = todoList.filter((todo) => todo.dueDate === currentDay);\n  const itemsUpcoming = todoList.filter((todo) => todo.dueDate > currentDay);\n\n  if (selectedTab.endsWith('Upcoming')) {\n    superToggle(date, 'd-block', 'd-none');\n    container.innerHTML = '';\n    container.appendChild((0,_todoModule_js__WEBPACK_IMPORTED_MODULE_6__.createCards)(itemsUpcoming));\n  } else if (selectedTab.endsWith('Today')) {\n    superToggle(date, 'd-none', 'd-block');\n    container.innerHTML = '';\n    container.appendChild((0,_todoModule_js__WEBPACK_IMPORTED_MODULE_6__.createCards)(itemsToday));\n  }\n};\n\nconst uxManager = () => {\n  manageNav();\n  renderTabIcons();\n  setDate();\n\n  const sidebarTabs = document.querySelector('.wrap-sb');\n  const tabIds = ['sidebarToday', 'sidebarUpcoming'];\n\n  sidebarTabs.addEventListener('click', (e) => {\n    const targetID = e.target.id;\n    if (!tabIds.includes(targetID)) return;\n    setActiveTab(document.querySelector(`#${targetID}`));\n    updatePage(targetID);\n  });\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/module/uxmanager.js?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;