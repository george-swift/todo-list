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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/projectModule.js */ \"./src/module/projectModule.js\");\n/* harmony import */ var _module_domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/domManager.js */ \"./src/module/domManager.js\");\n// import {render} from './module/todoModule.js';\r\n\r\n\r\n\r\nconst parentDiv = document.querySelector('.accordion-body');\r\n\r\nfunction init() {\r\n    const menuList = document.querySelector('#menu-items');\r\n    const defaultProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.render)('Default', new Date().toLocaleString().split(',')[0]);\r\n    const prompt = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createPrompt)();\r\n\r\n    menuList.append(defaultProject, prompt);\r\n    return menuList;\r\n}\r\n\r\nfunction addNewProject() {\r\n    const prompt = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createPrompt)();\r\n    const menuList = document.querySelector('#menu-items');\r\n    const newProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.addProject)('New');\r\n    menuList.insertBefore(newProject, prompt);\r\n}\r\n\r\n// const newProjectBtn = document.querySelector('#newProjectBtn');\r\n\r\n// newProjectBtn.addEventListener('click', () => {\r\n//   const field = newProjectField();\r\n//   field.classList.toggle('d-block');\r\n//   newProjectBtn.classList.add('d-none');\r\n//   parentDiv.appendChild(field);\r\n// });\r\n\r\ninit();\r\n//addNewProject();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/module/domManager.js":
/*!**********************************!*\
  !*** ./src/module/domManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newProjectField\": () => (/* binding */ newProjectField)\n/* harmony export */ });\nconst attrs = {\r\n    wrap: {\r\n        class: 'd-flex w-100',\r\n    },\r\n\r\n    input: {\r\n        class: 'form-control w-100',\r\n        id: 'projectName',\r\n    },\r\n\r\n    addBtn: {\r\n        class: 'btn btn-success text-white me-3',\r\n        id: 'addProjectBtn',\r\n    },\r\n\r\n    cancelBtn: {\r\n        class: 'btn btn-danger text-white',\r\n        id: 'cancelBtn',\r\n    },\r\n};\r\n\r\nconst customAttributes = (elem, attrs) => {\r\n    Object.entries(attrs).forEach(([key, value]) => {\r\n        elem.setAttribute(key, value);\r\n    });\r\n};\r\n\r\nconst newProjectField = () => {\r\n    const div = document.createElement('div');\r\n    div.classList.add('d-none');\r\n    div.setAttribute('id', 'addProjectDiv');\r\n\r\n    const input = document.createElement('input');\r\n    customAttributes(input, attrs.input);\r\n\r\n    const wrap = document.createElement('div');\r\n    customAttributes(wrap, attrs.wrap);\r\n\r\n    const add = document.createElement('button');\r\n    customAttributes(add, attrs.addBtn);\r\n    add.textContent = 'Add';\r\n\r\n    const cancel = document.createElement('button');\r\n    customAttributes(cancel, attrs.cancelBtn);\r\n    cancel.textContent = 'Cancel';\r\n\r\n    wrap.append(add, cancel);\r\n\r\n    div.append(input, wrap);\r\n\r\n    return div;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/module/domManager.js?");

/***/ }),

/***/ "./src/module/projectModule.js":
/*!*************************************!*\
  !*** ./src/module/projectModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"createPrompt\": () => (/* binding */ createPrompt)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n\r\n\r\nconst render = (name) => {\r\n    const option = document.createElement('li');\r\n    const classes = ['option', 'center'];\r\n    option.classList.add(...classes);\r\n\r\n    const anchor = document.createElement('a');\r\n    anchor.href = '#';\r\n\r\n    const image = document.createElement('img');\r\n    image.src = 'assets/push-pin.svg';\r\n    image.className = 'project-icon';\r\n\r\n    const text = document.createElement('span');\r\n    text.textContent = name;\r\n\r\n    anchor.appendChild(image);\r\n    anchor.appendChild(text);\r\n    option.appendChild(anchor);\r\n\r\n    return option;\r\n};\r\n\r\nconst createPrompt = () => {\r\n    const option = document.createElement('li');\r\n    const classes = ['option', 'center'];\r\n    option.classList.add(...classes);\r\n\r\n    const anchor = document.createElement('a');\r\n    anchor.setAttribute('id', 'newProjectBtn');\r\n\r\n    const image = document.createElement('img');\r\n    image.src = 'assets/plus.svg';\r\n    image.className = 'project-icon';\r\n\r\n    const text = document.createElement('span');\r\n    text.textContent = 'Add new project';\r\n\r\n    anchor.addEventListener('click', (event) => {\r\n        const field = document.querySelector(`#${event.currentTarget.id}`);\r\n        field.classList.toggle('d-block');\r\n        field.classList.add('d-none');\r\n\r\n        const adjacentDiv = document.querySelector('#addProjectDiv');\r\n        adjacentDiv.classList.toggle('d-none');\r\n        adjacentDiv.classList.add('d-block');\r\n    });\r\n\r\n    const addProj = (0,_domManager_js__WEBPACK_IMPORTED_MODULE_0__.newProjectField)();\r\n\r\n    anchor.appendChild(image);\r\n    anchor.appendChild(text);\r\n    option.appendChild(addProj);\r\n    option.appendChild(anchor);\r\n\r\n    return option;\r\n};\r\n\r\nconst addProject = (project) => {\r\n    const elem = createItem(project);\r\n    return elem;\r\n};\r\n\r\nconst createItem = (project) => {\r\n    const option = document.createElement('li');\r\n    const classes = ['option', 'center'];\r\n    option.classList.add(...classes);\r\n\r\n    const anchor = document.createElement('a');\r\n    anchor.href = '#';\r\n    anchor.classList.add('project-name');\r\n\r\n    const text = document.createElement('span');\r\n    text.textContent = project;\r\n\r\n    anchor.appendChild(text);\r\n    option.appendChild(anchor);\r\n\r\n    return option;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/module/projectModule.js?");

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