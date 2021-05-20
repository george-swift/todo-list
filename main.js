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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/projectModule.js */ \"./src/module/projectModule.js\");\n\n\nconst initialize = () => {\n    const menuList = document.querySelector('#menu-items');\n    const defaultProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createDefaultProject)('Default');\n    const newProjectBtn = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButton)('New');\n\n    menuList.append(defaultProject, newProjectBtn);\n    return menuList;\n};\n\nconst addNewProject = (name) => {\n    const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;\n    const parentDiv = document.querySelector('#menu-items');\n\n    parentDiv.insertBefore((0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(name), projectButtonDiv);\n};\n\nconst superToggle = (elem, old, curr) => {\n    if (!elem.classList.contains(old)) return;\n    elem.classList.remove(old);\n    elem.classList.add(curr);\n};\n\ninitialize();\n\n$('.datepicker').datepicker({\n    \"format\": \"mm-dd-yy\",\n    \"todayHighlight\": true,\n    \"autoclose\": true,\n    \"keyboardNavigation\": false\n});\n\n\ndocument.addEventListener('click', (event) => {\n    if (event.target.id === 'addProjectBtn') {\n        if (document.getElementById('projectName').value.trim().length > 4) {\n            addNewProject(document.getElementById('projectName').value);\n            document.getElementById('projectName').value = '';\n        }\n    }\n\n    if (event.target.id === 'cancelBtn') {\n        document.getElementById('projectName').value = '';\n\n        const field = document.querySelector('#newProjectBtn');\n        superToggle(field, 'd-none', 'd-block');\n\n        const adjacentDiv = document.querySelector('#addProjectForm');\n        superToggle(adjacentDiv, 'd-block', 'd-none');\n    }\n\n    if (event.target.matches('.task')) {\n        const overlay = document.querySelector('.overlay');\n        superToggle(overlay, 'd-none', 'open');\n    }\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/module/domManager.js":
/*!**********************************!*\
  !*** ./src/module/domManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst attributes = (() => ({\n    div: {\n        class: 'd-none wrapper',\n        id: 'addProjectForm',\n    },\n\n    li: {\n        class: 'option center',\n    },\n\n    a: {\n        all: { href: '#' },\n        new: { id: 'newProjectBtn' },\n        created: { class: 'project-name' },\n    },\n\n    icon: {\n        default: {\n            class: 'project-icon',\n            src: 'assets/push-pin.svg',\n        },\n        new: {\n            class: 'project-icon',\n            src: 'assets/plus.svg',\n        },\n    },\n\n    wrap: {\n        class: 'd-flex w-100 mt-2 wrap-btns',\n    },\n\n    input: {\n        class: 'form-control',\n        id: 'projectName',\n    },\n\n    addBtn: {\n        class: 'btn btn-success text-white w-48',\n        id: 'addProjectBtn',\n    },\n\n    cancelBtn: {\n        class: 'btn btn-danger text-white w-48',\n        id: 'cancelBtn',\n        textContent: 'Cancel',\n    },\n\n    card: {\n        header: {\n            class: 'd-flex center justify-content-between',\n        },\n        title: {\n            class: 'item-name',\n        },\n        details: {\n            class: 'item-details d-flex',\n        },\n        date: {\n            class: 'item-date mb-0',\n        },\n        flag: {\n            alt: 'priority level',\n            class: 'ms-2',\n        },\n        body: {\n            class: 'card-body',\n        },\n        desc: {\n            class: 'item-desc',\n        },\n\n    },\n}))();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);\n\n//# sourceURL=webpack://todo-list/./src/module/domManager.js?");

/***/ }),

/***/ "./src/module/projectModule.js":
/*!*************************************!*\
  !*** ./src/module/projectModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultProject\": () => (/* binding */ createDefaultProject),\n/* harmony export */   \"newProjectButton\": () => (/* binding */ newProjectButton),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n\n\nconst customAttributes = (elem, attributes) => {\n  Object.entries(attributes).forEach(([key, value]) => {\n    elem.setAttribute(key, value);\n  });\n};\n\nconst customLink = () => {\n  const option = document.createElement('li');\n  customAttributes(option, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.li);\n\n  const anchor = document.createElement('a');\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.all);\n\n  const defaultIcon = document.createElement('img');\n  customAttributes(defaultIcon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.icon.default);\n\n  const addNewIcon = document.createElement('img');\n  customAttributes(addNewIcon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.icon.new);\n\n  const text = document.createElement('span');\n\n  return {\n    option,\n    anchor,\n    defaultIcon,\n    addNewIcon,\n    text,\n  };\n};\n\nconst createDefaultProject = (name) => {\n  const {\n    option,\n    anchor,\n    defaultIcon,\n    text,\n  } = customLink();\n\n  text.textContent = name;\n\n  anchor.append(defaultIcon, text);\n  option.appendChild(anchor);\n\n  return option;\n};\n\nconst newProjectButton = () => {\n  const {\n    option,\n    anchor,\n    addNewIcon,\n    text,\n  } = customLink();\n\n  text.textContent = 'Add new project';\n\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.new);\n  anchor.append(addNewIcon, text);\n\n  anchor.addEventListener('click', (event) => {\n    const field = document.querySelector(`#${event.currentTarget.id}`);\n    field.classList.add('d-none');\n\n    const adjacentDiv = document.querySelector('#addProjectForm');\n    if (!adjacentDiv.classList.contains('d-none')) return;\n    adjacentDiv.classList.remove('d-none');\n    adjacentDiv.classList.add('d-block');\n  });\n\n  const addProjectForm = document.createElement('div');\n  customAttributes(addProjectForm, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.div);\n\n  const input = document.createElement('input');\n  customAttributes(input, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.input);\n\n  const wrap = document.createElement('div');\n  customAttributes(wrap, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.wrap);\n\n  const add = document.createElement('button');\n  customAttributes(add, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.addBtn);\n  add.textContent = 'Add';\n\n  const cancel = document.createElement('button');\n  customAttributes(cancel, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.cancelBtn);\n  cancel.textContent = 'Cancel';\n\n  wrap.append(add, cancel);\n  addProjectForm.append(input, wrap);\n\n  option.append(anchor, addProjectForm);\n\n  return option;\n};\n\nconst createProject = (project) => {\n  const { option, anchor, text } = customLink();\n\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.created);\n  text.textContent = project;\n\n  anchor.appendChild(text);\n  option.appendChild(anchor);\n\n  return option;\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/module/projectModule.js?");

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