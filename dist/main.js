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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/projectModule.js */ \"./src/module/projectModule.js\");\n\r\n\r\nconst initialize = () => {\r\n    const menuList = document.querySelector('#menu-items');\r\n    const defaultProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createDefaultProject)('Default');\r\n    const newProjectBtn = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButton)('New');\r\n\r\n    menuList.append(defaultProject, newProjectBtn);\r\n    return menuList;\r\n}\r\n\r\nconst addNewBook = (name) => {\r\n    const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;\r\n    const parentDiv = document.querySelector(\"#menu-items\")\r\n\r\n    parentDiv.insertBefore((0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name), projectButtonDiv);\r\n}\r\n\r\ninitialize();\r\n\r\ndocument.addEventListener('click', (event) => {\r\n    if (event.target.id === 'addProjectBtn') {\r\n        if (document.getElementById(\"projectName\").value.trim().length > 4) {\r\n            addNewBook(document.getElementById(\"projectName\").value);\r\n            document.getElementById(\"projectName\").value = '';\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/module/domManager.js":
/*!**********************************!*\
  !*** ./src/module/domManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attributes\": () => (/* binding */ attributes)\n/* harmony export */ });\nconst attributes = (function() {\r\n    return {\r\n        div: {\r\n            class: 'd-none p-2 w-100',\r\n            id: 'addProjectForm',\r\n        },\r\n        wrap: {\r\n            class: 'd-flex w-100 mt-2 wrap-btns',\r\n        },\r\n        input: {\r\n            class: 'form-control',\r\n            id: 'projectName',\r\n        },\r\n        addBtn: {\r\n            class: 'btn btn-success text-white w-48',\r\n            id: 'addProjectBtn',\r\n\r\n        },\r\n        cancelBtn: {\r\n            class: 'btn btn-danger text-white w-48',\r\n            id: 'cancelBtn',\r\n            textContent: 'Cancel'\r\n        },\r\n    };\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/module/domManager.js?");

/***/ }),

/***/ "./src/module/projectModule.js":
/*!*************************************!*\
  !*** ./src/module/projectModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultProject\": () => (/* binding */ createDefaultProject),\n/* harmony export */   \"newProjectButton\": () => (/* binding */ newProjectButton),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n\r\n\r\nconst createDefaultProject = (name) => {\r\n    const option = document.createElement('li');\r\n    const classes = ['option', 'center'];\r\n    option.classList.add(...classes);\r\n\r\n    const anchor = document.createElement('a');\r\n    anchor.href = '#';\r\n\r\n    const image = document.createElement('img');\r\n    image.src = 'assets/push-pin.svg';\r\n    image.className = 'project-icon';\r\n\r\n    const text = document.createElement('span');\r\n    text.textContent = name;\r\n\r\n    anchor.appendChild(image);\r\n    anchor.appendChild(text);\r\n    option.appendChild(anchor);\r\n\r\n    return option;\r\n};\r\n\r\nconst customAttributes = (elem, attributes) => {\r\n    Object.entries(attributes).forEach(([key, value]) => {\r\n        elem.setAttribute(key, value);\r\n    });\r\n};\r\n\r\nconst newProjectButton = () => {\r\n    const option = document.createElement('li');\r\n    const classes = ['option', 'center'];\r\n    option.classList.add(...classes);\r\n\r\n    const anchor = document.createElement('a');\r\n    anchor.setAttribute('id', 'newProjectBtn');\r\n\r\n    const image = document.createElement('img');\r\n    image.src = 'assets/plus.svg';\r\n    image.className = 'project-icon';\r\n\r\n    const text = document.createElement('span');\r\n    text.textContent = 'Add new project';\r\n\r\n    anchor.append(image, text);\r\n\r\n    anchor.addEventListener('click', (event) => {\r\n        const field = document.querySelector(`#${event.currentTarget.id}`);\r\n        field.classList.toggle('d-block');\r\n        field.classList.add('d-none');\r\n\r\n        const adjacentDiv = document.querySelector('#addProjectForm');\r\n        adjacentDiv.classList.toggle('d-none');\r\n        adjacentDiv.classList.add('d-block');\r\n    });\r\n\r\n    const addProjectForm = document.createElement('div');\r\n    customAttributes(addProjectForm, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.attributes.div);\r\n\r\n    const input = document.createElement('input');\r\n    customAttributes(input, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.attributes.input);\r\n\r\n    const wrap = document.createElement('div');\r\n    customAttributes(wrap, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.attributes.wrap);\r\n\r\n    const add = document.createElement('button');\r\n    customAttributes(add, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.attributes.addBtn);\r\n    add.textContent = 'Add';\r\n\r\n    const cancel = document.createElement('button');\r\n    customAttributes(cancel, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.attributes.cancelBtn);\r\n    cancel.textContent = 'Cancel';\r\n\r\n    wrap.append(add, cancel);\r\n    addProjectForm.append(input, wrap);\r\n\r\n    option.append(anchor, addProjectForm);\r\n\r\n    return option;\r\n};\r\n\r\nconst createProject = (project) => {\r\n    const option = document.createElement('li');\r\n    const classes = ['option', 'center'];\r\n    option.classList.add(...classes);\r\n\r\n    const anchor = document.createElement('a');\r\n    anchor.href = '#';\r\n    anchor.classList.add('project-name');\r\n\r\n    const text = document.createElement('span');\r\n    text.textContent = project;\r\n\r\n    anchor.appendChild(text);\r\n    option.appendChild(anchor);\r\n\r\n    return option;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/module/projectModule.js?");

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