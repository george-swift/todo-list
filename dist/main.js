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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/projectModule.js */ \"./src/module/projectModule.js\");\n/* harmony import */ var _module_todoModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/todoModule.js */ \"./src/module/todoModule.js\");\n\r\n\r\n\r\n\r\nconst initialize = (projects = [], todos = JSON.parse(localStorage.getItem('todo-collection')) ? JSON.parse(localStorage.getItem('todo-collection')) : []) => {\r\n    const menuList = document.querySelector('#menu-items');\r\n    const defaultProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createDefaultProject)('Default');\r\n    const newProjectBtn = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButton)();\r\n    menuList.append(defaultProject, newProjectBtn);\r\n\r\n    projects.forEach((project) => addNewProject(project));\r\n\r\n    const todoapp = document.querySelector('#todo-app');\r\n    todoapp.appendChild((0,_module_todoModule_js__WEBPACK_IMPORTED_MODULE_1__.createCards)(todos));\r\n};\r\n\r\nconst addNewProject = (project) => {\r\n    const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;\r\n    const parentDiv = document.querySelector('#menu-items');\r\n\r\n    parentDiv.insertBefore((0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(project), projectButtonDiv);\r\n};\r\n\r\nconst superToggle = (elem, old, curr) => {\r\n    if (!elem.classList.contains(old)) return;\r\n    elem.classList.remove(old);\r\n    elem.classList.add(curr);\r\n};\r\n\r\ninitialize();\r\n\r\ndocument.addEventListener('click', (event) => {\r\n    if (event.target.id === 'addProjectBtn') {\r\n        if (document.getElementById('projectName').value.trim().length > 4) {\r\n            addNewProject(document.getElementById('projectName').value);\r\n            document.getElementById('projectName').value = '';\r\n        }\r\n    }\r\n\r\n    if (event.target.id === 'cancelBtn') {\r\n        document.getElementById('projectName').value = '';\r\n\r\n        const field = document.querySelector('#newProjectBtn');\r\n        superToggle(field, 'd-none', 'd-block');\r\n\r\n        const adjacentDiv = document.querySelector('#addProjectForm');\r\n        superToggle(adjacentDiv, 'd-block', 'd-none');\r\n    }\r\n});\r\n\r\ndocument.getElementById('saveBtn').onclick = () => {\r\n    const title = document.querySelector('#todoTitle');\r\n    const desc = document.querySelector('#todoDesc');\r\n    const projectName = document.querySelector('#todoProjectList');\r\n    const priorityLevel = document.querySelector('#todoPriorities');\r\n    const dueDate = document.querySelector('#datepicker');\r\n\r\n    const todo = new _module_todoModule_js__WEBPACK_IMPORTED_MODULE_1__.Todo(\r\n        title.value, desc.value, dueDate.value, priorityLevel.value, projectName.value,\r\n    );\r\n\r\n    saveNewToDo(todo);\r\n    resetFields(title, desc, projectName, priorityLevel, dueDate);\r\n    $('#todoModal').modal('hide');\r\n};\r\n\r\nconst saveNewToDo = (item) => {\r\n    const todos = JSON.parse(localStorage.getItem('todo-collection')) ? JSON.parse(localStorage.getItem('todo-collection')) : [];\r\n    todos.push(item);\r\n    localStorage.setItem('todo-collection', JSON.stringify(todos));\r\n\r\n    document.getElementById('todo-app').innerHTML = '';\r\n    const todoapp = document.querySelector('#todo-app');\r\n\r\n    todoapp.appendChild((0,_module_todoModule_js__WEBPACK_IMPORTED_MODULE_1__.createCards)(todos));\r\n};\r\n\r\nconst resetFields = (...fields) => {\r\n    fields.forEach((field) => {\r\n        field.value = '';\r\n    });\r\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/module/domManager.js":
/*!**********************************!*\
  !*** ./src/module/domManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst attributes = (() => ({\r\n  div: {\r\n    class: 'd-none wrapper',\r\n    id: 'addProjectForm',\r\n  },\r\n\r\n  li: {\r\n    class: 'option center',\r\n  },\r\n\r\n  a: {\r\n    all: { href: '#' },\r\n    new: { id: 'newProjectBtn' },\r\n    created: { class: 'project-name' },\r\n  },\r\n\r\n  icon: {\r\n    default: {\r\n      class: 'project-icon',\r\n      src: 'assets/push-pin.svg',\r\n    },\r\n    new: {\r\n      class: 'project-icon',\r\n      src: 'assets/plus.svg',\r\n    },\r\n  },\r\n\r\n  wrap: {\r\n    class: 'd-flex w-100 mt-2 wrap-btns',\r\n  },\r\n\r\n  input: {\r\n    class: 'form-control',\r\n    id: 'projectName',\r\n  },\r\n\r\n  addBtn: {\r\n    class: 'btn btn-success text-white w-48',\r\n    id: 'addProjectBtn',\r\n  },\r\n\r\n  cancelBtn: {\r\n    class: 'btn btn-danger text-white w-48',\r\n    id: 'cancelBtn',\r\n    textContent: 'Cancel',\r\n  },\r\n\r\n  card: {\r\n    wrap: { class: 'card mt-3 font-custom' },\r\n    header: {\r\n      class: 'card-header d-flex center justify-content-between',\r\n    },\r\n    title: {\r\n      class: 'item-name fw-bold',\r\n    },\r\n    details: {\r\n      class: 'item-details d-flex flex-wrap',\r\n    },\r\n    date: {\r\n      class: 'item-date mb-0 fw-light',\r\n    },\r\n    flag: {\r\n      alt: 'priority level',\r\n      class: 'me-2',\r\n    },\r\n    body: {\r\n      class: 'card-body',\r\n    },\r\n    desc: {\r\n      class: 'item-desc fw-lighter',\r\n    },\r\n    badge: {\r\n      high: {\r\n        class: 'badge btn-danger me-3',\r\n      },\r\n      medium: {\r\n        class: 'badge btn-primary me-3',\r\n      },\r\n      low: {\r\n        class: 'badge btn-warning me-3',\r\n      },\r\n    },\r\n  },\r\n}))();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);\n\n//# sourceURL=webpack://todo-list/./src/module/domManager.js?");

/***/ }),

/***/ "./src/module/projectModule.js":
/*!*************************************!*\
  !*** ./src/module/projectModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultProject\": () => (/* binding */ createDefaultProject),\n/* harmony export */   \"newProjectButton\": () => (/* binding */ newProjectButton),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n\r\n\r\nconst customAttributes = (elem, attributes) => {\r\n  Object.entries(attributes).forEach(([key, value]) => {\r\n    elem.setAttribute(key, value);\r\n  });\r\n};\r\n\r\nconst customLink = () => {\r\n  const option = document.createElement('li');\r\n  customAttributes(option, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.li);\r\n\r\n  const anchor = document.createElement('a');\r\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.all);\r\n\r\n  const defaultIcon = document.createElement('img');\r\n  customAttributes(defaultIcon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.icon.default);\r\n\r\n  const addNewIcon = document.createElement('img');\r\n  customAttributes(addNewIcon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.icon.new);\r\n\r\n  const text = document.createElement('span');\r\n\r\n  return {\r\n    option,\r\n    anchor,\r\n    defaultIcon,\r\n    addNewIcon,\r\n    text,\r\n  };\r\n};\r\n\r\nconst createDefaultProject = (name) => {\r\n  const {\r\n    option,\r\n    anchor,\r\n    defaultIcon,\r\n    text,\r\n  } = customLink();\r\n\r\n  text.textContent = name;\r\n\r\n  anchor.append(defaultIcon, text);\r\n  option.appendChild(anchor);\r\n\r\n  return option;\r\n};\r\n\r\nconst newProjectButton = () => {\r\n  const {\r\n    option,\r\n    anchor,\r\n    addNewIcon,\r\n    text,\r\n  } = customLink();\r\n\r\n  text.textContent = 'Add new project';\r\n\r\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.new);\r\n  anchor.append(addNewIcon, text);\r\n\r\n  anchor.addEventListener('click', (event) => {\r\n    const field = document.querySelector(`#${event.currentTarget.id}`);\r\n    field.classList.add('d-none');\r\n\r\n    const adjacentDiv = document.querySelector('#addProjectForm');\r\n    if (!adjacentDiv.classList.contains('d-none')) return;\r\n    adjacentDiv.classList.remove('d-none');\r\n    adjacentDiv.classList.add('d-block');\r\n  });\r\n\r\n  const addProjectForm = document.createElement('div');\r\n  customAttributes(addProjectForm, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.div);\r\n\r\n  const input = document.createElement('input');\r\n  customAttributes(input, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.input);\r\n\r\n  const wrap = document.createElement('div');\r\n  customAttributes(wrap, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.wrap);\r\n\r\n  const add = document.createElement('button');\r\n  customAttributes(add, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.addBtn);\r\n  add.textContent = 'Add';\r\n\r\n  const cancel = document.createElement('button');\r\n  customAttributes(cancel, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.cancelBtn);\r\n  cancel.textContent = 'Cancel';\r\n\r\n  wrap.append(add, cancel);\r\n  addProjectForm.append(input, wrap);\r\n\r\n  option.append(anchor, addProjectForm);\r\n\r\n  return option;\r\n};\r\n\r\nconst createProject = (project) => {\r\n  const { option, anchor, text } = customLink();\r\n\r\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.created);\r\n  text.textContent = project;\r\n\r\n  anchor.appendChild(text);\r\n  option.appendChild(anchor);\r\n\r\n  return option;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/module/projectModule.js?");

/***/ }),

/***/ "./src/module/todoModule.js":
/*!**********************************!*\
  !*** ./src/module/todoModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"createCards\": () => (/* binding */ createCards)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n\r\n\r\nfunction Todo(title, description, dueDate, priority, project) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.projectName = project;\r\n}\r\n\r\nfunction defineAttributes(elem, attributes) {\r\n    Object.entries(attributes).forEach(([key, value]) => {\r\n        elem.setAttribute(key, value);\r\n    });\r\n}\r\n\r\nfunction createCards(todos) {\r\n    const cardsContainer = document.createElement('div');\r\n    cardsContainer.id = 'card-container';\r\n\r\n    for (let i = 0; i < todos.length; i++) {\r\n        const card = document.createElement('div');\r\n        defineAttributes(card, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.wrap);\r\n\r\n        const cardHeader = document.createElement('div');\r\n        defineAttributes(cardHeader, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.header);\r\n\r\n        const itemTitle = document.createElement('h5');\r\n        defineAttributes(itemTitle, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.title);\r\n\r\n        const itemDetails = document.createElement('div');\r\n        defineAttributes(itemDetails, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.details);\r\n\r\n        const itemDate = document.createElement('p');\r\n        defineAttributes(itemDate, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.date);\r\n\r\n        const itemPriority = document.createElement('span');\r\n        defineAttributes(itemPriority, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.badge[`${todos[i].priority.toLowerCase()}`]);\r\n        // <span class=\"badge badge-success\">Success</span>\r\n\r\n        // const itemPriority = document.createElement('img');\r\n        // defineAttributes(itemPriority, attributes.card.flag);\r\n\r\n        const cardBody = document.createElement('div');\r\n        defineAttributes(cardBody, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.body);\r\n\r\n        const itemDescription = document.createElement('p');\r\n        defineAttributes(itemDescription, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.desc);\r\n\r\n        Object.entries(todos[i]).forEach(([key, value]) => {\r\n            if (key === 'title') {\r\n                itemTitle.textContent = value;\r\n            } else if (key === 'description') {\r\n                itemDescription.textContent = value;\r\n            } else if (key === 'dueDate') {\r\n                itemDate.textContent = value;\r\n            } else if (key === 'priority') {\r\n                itemPriority.textContent = value;\r\n            }\r\n        });\r\n\r\n        itemDetails.append(itemPriority, itemDate);\r\n        cardHeader.append(itemTitle, itemDetails);\r\n        cardBody.appendChild(itemDescription);\r\n        card.append(cardHeader, cardBody);\r\n\r\n        cardsContainer.appendChild(card);\r\n    }\r\n\r\n    return cardsContainer;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/module/todoModule.js?");

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