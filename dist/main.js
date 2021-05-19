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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/projectModule.js */ \"./src/module/projectModule.js\");\n/* harmony import */ var _module_domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/domManager.js */ \"./src/module/domManager.js\");\n// import {render} from './module/todoModule.js';\n\n\n\nconst parentDiv = document.querySelector('.accordion-body');\nconst prompt = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createPrompt)();\n\nfunction init() {\n  const menuList = document.querySelector('#menu-items');\n  const defaultProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.render)('Default Project', new Date().toLocaleString().split(',')[0]);\n\n  menuList.append(defaultProject, prompt);\n  return menuList;\n}\n\nfunction addNewProject() {\n  const menuList = document.querySelector('#menu-items');\n  const newProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.addProject)('Another Project');\n  menuList.insertBefore(newProject, prompt);\n}\n\nconst newProjectBtn = document.querySelector('#newProjectBtn');\n\nnewProjectBtn.addEventListener('click', () => {\n  const field = (0,_module_domManager_js__WEBPACK_IMPORTED_MODULE_1__.newProjectField)();\n  field.classList.toggle('d-block');\n  newProjectBtn.classList.add('d-none');\n  parentDiv.appendChild(field);\n});\n\ninit();\n\naddNewProject();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/module/domManager.js":
/*!**********************************!*\
  !*** ./src/module/domManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectField\": () => (/* binding */ newProjectField)\n/* harmony export */ });\nconst attrs = {\n  wrap: {\n    class: 'd-flex w-100',\n  },\n\n  input: {\n    class: 'form-control w-100',\n    id: 'projectName',\n  },\n\n  addBtn: {\n    class: 'btn btn-success text-white me-3',\n    id: 'addProjectBtn',\n  },\n\n  cancelBtn: {\n    class: 'btn btn-danger text-white',\n    id: 'cancelBtn',\n  },\n};\n\nconst customAttributes = (elem, attrs) => {\n  Object.entries(attrs).forEach((key, value) => {\n    elem.setAttribute(key, value);\n  });\n};\n\nconst newProjectField = () => {\n  const div = document.createElement('div');\n  div.classList.add('d-none');\n\n  const input = document.createElement('input');\n  customAttributes(input, attrs.input);\n\n  const wrap = document.createElement('div');\n  customAttributes(wrap, attrs.wrap);\n\n  const add = document.createElement('button');\n  customAttributes(add, attrs.addBtn);\n  add.textContent = 'Add';\n\n  const cancel = document.createElement('button');\n  customAttributes(cancel, attrs.cancelBtn);\n  cancel.textContent = 'Cancel';\n\n  wrap.append(add, cancel);\n\n  div.append(input, wrap);\n\n  return div;\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/module/domManager.js?");

/***/ }),

/***/ "./src/module/projectModule.js":
/*!*************************************!*\
  !*** ./src/module/projectModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"createPrompt\": () => (/* binding */ createPrompt)\n/* harmony export */ });\nconst render = (name) => {\n  const option = document.createElement('li');\n  const classes = ['option', 'center'];\n  option.classList.add(...classes);\n\n  const anchor = document.createElement('a');\n  anchor.href = '#';\n\n  const image = document.createElement('img');\n  image.src = 'assets/push-pin.svg';\n  image.className = 'project-icon';\n\n  const text = document.createElement('span');\n  text.textContent = name;\n\n  anchor.appendChild(image);\n  anchor.appendChild(text);\n  option.appendChild(anchor);\n\n  return option;\n};\n\nconst createPrompt = () => {\n  const option = document.createElement('li');\n  const classes = ['option', 'center'];\n  option.classList.add(...classes);\n\n  const anchor = document.createElement('a');\n  anchor.setAttribute('id', 'newProjectBtn');\n\n  const image = document.createElement('img');\n  image.src = 'assets/plus.svg';\n  image.className = 'project-icon';\n\n  const text = document.createElement('span');\n  text.textContent = 'Add new project';\n\n  anchor.appendChild(image);\n  anchor.appendChild(text);\n  option.appendChild(anchor);\n\n  return option;\n};\n\nconst addProject = (project) => {\n  const elem = createItem(project);\n  return elem;\n};\n\nconst createItem = (project) => {\n  const option = document.createElement('li');\n  const classes = ['option', 'center'];\n  option.classList.add(...classes);\n\n  const anchor = document.createElement('a');\n  anchor.href = '#';\n  anchor.classList.add('project-name');\n\n  const text = document.createElement('span');\n  text.textContent = project;\n\n  anchor.appendChild(text);\n  option.appendChild(anchor);\n\n  return option;\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/module/projectModule.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;