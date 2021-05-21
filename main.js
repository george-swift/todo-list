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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/projectModule.js */ \"./src/module/projectModule.js\");\n/* harmony import */ var _module_todoModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/todoModule.js */ \"./src/module/todoModule.js\");\n\n\n\n\n// const initialize = (projects = [], todo = [{\n//   title: 'New Todo', dueDate: 'Fri May 21', description: 'Testing Card', priority: 'Low',\n// }, {\n//   title: 'New Todo', dueDate: 'Fri May 21', description: 'Testing Card', priority: 'Medium',\n// }, {\n//   title: 'New Todo', dueDate: 'Fri May 21', description: 'Testing Card', priority: 'High',\n// }]) => {\n//   const menuList = document.querySelector('#menu-items');\n//   const defaultProject = createDefaultProject('Default');\n//   const newProjectBtn = newProjectButton();\n//   menuList.append(defaultProject, newProjectBtn);\n\n//   projects.forEach((project) => addNewProject(project));\n\n//   const mpBody = document.querySelector('#mp-body');\n//   mpBody.appendChild(createCards(todo));\n// };\n\nconst addNewProject = (project) => {\n  const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;\n  const parentDiv = document.querySelector('#menu-items');\n\n  parentDiv.insertBefore((0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(project), projectButtonDiv);\n};\n\nconst superToggle = (elem, old, curr) => {\n  if (!elem.classList.contains(old)) return;\n  elem.classList.remove(old);\n  elem.classList.add(curr);\n};\n\nconst initialize = () => {\n  const menuList = document.querySelector('#menu-items');\n  const defaultProject = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.createDefaultProject)('Default');\n  const newProjectBtn = (0,_module_projectModule_js__WEBPACK_IMPORTED_MODULE_0__.newProjectButton)('New');\n\n  menuList.append(defaultProject, newProjectBtn);\n  return menuList;\n};\n\ninitialize();\n\ndocument.addEventListener('click', (event) => {\n  if (event.target.id === 'addProjectBtn') {\n    if (document.getElementById('projectName').value.trim().length > 4) {\n      addNewProject(document.getElementById('projectName').value);\n      document.getElementById('projectName').value = '';\n    }\n  }\n\n  if (event.target.id === 'cancelBtn') {\n    document.getElementById('projectName').value = '';\n\n    const field = document.querySelector('#newProjectBtn');\n    superToggle(field, 'd-none', 'd-block');\n\n    const adjacentDiv = document.querySelector('#addProjectForm');\n    superToggle(adjacentDiv, 'd-block', 'd-none');\n  }\n});\n\ndocument.getElementById('saveBtn').onclick = () => {\n  addNewToDo();\n  $('#todoModal').modal('hide');\n};\n\n// const addTaskButtons = document.getElementsByClassName('addProject');\n\n// const displayAddTaskModal = () => {\n//   $('#todoModal').modal('show');\n// };\n\n// for (let i = 0; i < addTaskButtons.length; i++) {\n//   addTaskButtons[i].addEventListener('click', displayAddTaskModal, false);\n// }\n\n// Test modal functionality\n\nconst addNewToDo = () => {\n  const container = document.querySelector('#card-container');\n  const title = document.querySelector('#todoTitle');\n  const desc = document.querySelector('#todoDesc');\n  const projectName = document.querySelector('#todoProjectList');\n  const priorityLevel = document.querySelector('#todoPriorities');\n  const dueDate = document.querySelector('#datepicker');\n  \n  const toDoItem = new _module_todoModule_js__WEBPACK_IMPORTED_MODULE_1__.Todo(title.value, desc.value, dueDate.value, priorityLevel.value);\n  \n  if (Object.values(toDoItem).every((input) => input.length > 2)) {\n    container.appendChild((0,_module_todoModule_js__WEBPACK_IMPORTED_MODULE_1__.createCards)(toDoItem));\n  }\n  resetFields(title, desc, projectName, priorityLevel, dueDate);\n};\n  \nconst resetFields = (...fields) => {\n  fields.forEach((field) => {\n    field.value = '';\n  });\n}\n  \n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/module/domManager.js":
/*!**********************************!*\
  !*** ./src/module/domManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst attributes = (() => ({\n  div: {\n    class: 'd-none wrapper',\n    id: 'addProjectForm',\n  },\n\n  li: {\n    class: 'option center',\n  },\n\n  a: {\n    all: { href: '#' },\n    new: { id: 'newProjectBtn' },\n    created: { class: 'project-name' },\n  },\n\n  icon: {\n    default: {\n      class: 'project-icon',\n      src: 'assets/push-pin.svg',\n    },\n    new: {\n      class: 'project-icon',\n      src: 'assets/plus.svg',\n    },\n  },\n\n  wrap: {\n    class: 'd-flex w-100 mt-2 wrap-btns',\n  },\n\n  input: {\n    class: 'form-control',\n    id: 'projectName',\n  },\n\n  addBtn: {\n    class: 'btn btn-success text-white w-48',\n    id: 'addProjectBtn',\n  },\n\n  cancelBtn: {\n    class: 'btn btn-danger text-white w-48',\n    id: 'cancelBtn',\n    textContent: 'Cancel',\n  },\n\n  card: {\n    wrap: { class: 'card mt-3 font-custom' },\n    header: {\n      class: 'card-header d-flex center justify-content-between',\n    },\n    title: {\n      class: 'item-name fw-bold',\n    },\n    details: {\n      class: 'item-details d-flex flex-wrap',\n    },\n    date: {\n      class: 'item-date mb-0 fw-light',\n    },\n    flag: {\n      alt: 'priority level',\n      class: 'me-2',\n    },\n    body: {\n      class: 'card-body',\n    },\n    desc: {\n      class: 'item-desc fw-lighter',\n    },\n    badge: {\n      high: {\n        class: 'badge btn-danger me-3',\n      },\n      medium: {\n        class: 'badge btn-primary me-3',\n      },\n      low: {\n        class: 'badge btn-warning me-3',\n      },\n    },\n  },\n}))();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attributes);\n\n//# sourceURL=webpack://todo-list/./src/module/domManager.js?");

/***/ }),

/***/ "./src/module/projectModule.js":
/*!*************************************!*\
  !*** ./src/module/projectModule.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDefaultProject\": () => (/* binding */ createDefaultProject),\n/* harmony export */   \"newProjectButton\": () => (/* binding */ newProjectButton),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n\n\nconst customAttributes = (elem, attributes) => {\n  Object.entries(attributes).forEach(([key, value]) => {\n    elem.setAttribute(key, value);\n  });\n};\n\nconst customLink = () => {\n  const option = document.createElement('li');\n  customAttributes(option, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.li);\n\n  const anchor = document.createElement('a');\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.all);\n\n  const defaultIcon = document.createElement('img');\n  customAttributes(defaultIcon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.icon.default);\n\n  const addNewIcon = document.createElement('img');\n  customAttributes(addNewIcon, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.icon.new);\n\n  const text = document.createElement('span');\n\n  return {\n    option,\n    anchor,\n    defaultIcon,\n    addNewIcon,\n    text,\n  };\n};\n\nconst createDefaultProject = (name) => {\n  const {\n    option,\n    anchor,\n    defaultIcon,\n    text,\n  } = customLink();\n\n  text.textContent = name;\n\n  anchor.append(defaultIcon, text);\n  option.appendChild(anchor);\n\n  return option;\n};\n\nconst newProjectButton = () => {\n  const {\n    option,\n    anchor,\n    addNewIcon,\n    text,\n  } = customLink();\n\n  text.textContent = 'Add new project';\n\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.new);\n  anchor.append(addNewIcon, text);\n\n  anchor.addEventListener('click', (event) => {\n    const field = document.querySelector(`#${event.currentTarget.id}`);\n    field.classList.add('d-none');\n\n    const adjacentDiv = document.querySelector('#addProjectForm');\n    if (!adjacentDiv.classList.contains('d-none')) return;\n    adjacentDiv.classList.remove('d-none');\n    adjacentDiv.classList.add('d-block');\n  });\n\n  const addProjectForm = document.createElement('div');\n  customAttributes(addProjectForm, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.div);\n\n  const input = document.createElement('input');\n  customAttributes(input, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.input);\n\n  const wrap = document.createElement('div');\n  customAttributes(wrap, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.wrap);\n\n  const add = document.createElement('button');\n  customAttributes(add, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.addBtn);\n  add.textContent = 'Add';\n\n  const cancel = document.createElement('button');\n  customAttributes(cancel, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.cancelBtn);\n  cancel.textContent = 'Cancel';\n\n  wrap.append(add, cancel);\n  addProjectForm.append(input, wrap);\n\n  option.append(anchor, addProjectForm);\n\n  return option;\n};\n\nconst createProject = (project) => {\n  const { option, anchor, text } = customLink();\n\n  customAttributes(anchor, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.a.created);\n  text.textContent = project;\n\n  anchor.appendChild(text);\n  option.appendChild(anchor);\n\n  return option;\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/module/projectModule.js?");

/***/ }),

/***/ "./src/module/todoModule.js":
/*!**********************************!*\
  !*** ./src/module/todoModule.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"createCards\": () => (/* binding */ createCards)\n/* harmony export */ });\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManager.js */ \"./src/module/domManager.js\");\n\n\nfunction Todo(title, description, dueDate, priority) {\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n}\n\nfunction defineAttributes(elem, attributes) {\n  Object.entries(attributes).forEach(([key, value]) => {\n    elem.setAttribute(key, value);\n  });\n}\n\n\n// Customized for dummy todo tasks\n// function createCards(todos) {\n//   const cardsContainer = document.createElement('div');\n//   cardsContainer.id = 'card-container';\n\n//   for (let i = 0; i < todos.length; i++) {\n//     const card = document.createElement('div');\n//     defineAttributes(card, attributes.card.wrap);\n\n//     const cardHeader = document.createElement('div');\n//     defineAttributes(cardHeader, attributes.card.header);\n\n//     const itemTitle = document.createElement('h5');\n//     defineAttributes(itemTitle, attributes.card.title);\n\n//     const itemDetails = document.createElement('div');\n//     defineAttributes(itemDetails, attributes.card.details);\n\n//     const itemDate = document.createElement('p');\n//     defineAttributes(itemDate, attributes.card.date);\n\n//     const itemPriority = document.createElement('span');\n//     defineAttributes(itemPriority, attributes.card.badge[`${todos[i].priority.toLowerCase()}`]);\n//     // <span class=\"badge badge-success\">Success</span>\n\n//     // const itemPriority = document.createElement('img');\n//     // defineAttributes(itemPriority, attributes.card.flag);\n\n//     const cardBody = document.createElement('div');\n//     defineAttributes(cardBody, attributes.card.body);\n\n//     const itemDescription = document.createElement('p');\n//     defineAttributes(itemDescription, attributes.card.desc);\n\n//     Object.entries(todos[i]).forEach(([key, value]) => {\n//       if (key === 'title') {\n//         itemTitle.textContent = value;\n//       } else if (key === 'description') {\n//         itemDescription.textContent = value;\n//       } else if (key === 'dueDate') {\n//         itemDate.textContent = value;\n//       } else if (key === 'priority') {\n//         itemPriority.textContent = value;\n//       }\n//     });\n\n//     itemDetails.append(itemPriority, itemDate);\n//     cardHeader.append(itemTitle, itemDetails);\n//     cardBody.appendChild(itemDescription);\n//     card.append(cardHeader, cardBody);\n\n//     cardsContainer.appendChild(card);\n//   }\n\n//   return cardsContainer;\n// }\n\n// Test modal input\nfunction createCards(todo) {\n  const card = document.createElement('div');\n  defineAttributes(card, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.wrap);\n\n  const cardHeader = document.createElement('div');\n  defineAttributes(cardHeader, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.header);\n\n  const itemTitle = document.createElement('h5');\n  defineAttributes(itemTitle, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.title);\n\n  const itemDetails = document.createElement('div');\n  defineAttributes(itemDetails, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.details);\n\n  const itemDate = document.createElement('p');\n  defineAttributes(itemDate, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.date);\n\n  const itemPriority = document.createElement('span');\n  defineAttributes(itemPriority, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.badge[`${todo.priority.toLowerCase()}`]);\n\n  const cardBody = document.createElement('div');\n  defineAttributes(cardBody, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.body);\n\n  const itemDescription = document.createElement('p');\n  defineAttributes(itemDescription, _domManager_js__WEBPACK_IMPORTED_MODULE_0__.default.card.desc);\n\n  Object.entries(todo).forEach(([key, value]) => {\n    if (key === 'title') {\n      itemTitle.textContent = value;\n    } else if (key === 'description') {\n      itemDescription.textContent = value;\n    } else if (key === 'dueDate') {\n      itemDate.textContent = value;\n    } else {\n      itemPriority.textContent = value;\n    }\n  });\n\n  itemDetails.append(itemPriority, itemDate);\n  cardHeader.append(itemTitle, itemDetails);\n  cardBody.appendChild(itemDescription);\n  card.append(cardHeader, cardBody);\n\n  return card;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/module/todoModule.js?");

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