/* global $ */
import './style.css';

import {
  createDefaultProject,
  newProjectButton,
  createProject,
  wrapProject,
} from './module/projectModule.js';

import { Todo, createCards } from './module/todoModule.js';

import { validFormat, uxManager } from './module/uxmanager.js';

const addToSelect = (project) => {
  const select = document.querySelector('#todoProjectList');
  const name = wrapProject(project);
  select.appendChild(name);
};

const addNewProject = (project) => {
  const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;
  const parentDiv = document.querySelector('#menu-items');

  parentDiv.insertBefore(createProject(project), projectButtonDiv);
  addToSelect(project);
};

const superToggle = (elem, old, curr) => {
  if (!elem.classList.contains(old)) return;
  elem.classList.remove(old);
  elem.classList.add(curr);
};

const collection = (key) => {
  const storage = localStorage.getItem(`${key}-collection`)
    ? JSON.parse(localStorage.getItem(`${key}-collection`)) : [];
  return storage;
};

const displayTracker = (project) => {
  const todos = collection('todo');
  const defaultTodos = todos.filter((storedTodo) => storedTodo.projectName === 'Default').length;
  const customTodos = todos.filter((storedTodo) => storedTodo.projectName === project).length;
  document.querySelector('#Default').textContent = defaultTodos;
  document.querySelector(`#${project.split(' ').join('-')}`).textContent = customTodos;
};

const initialize = () => {
  const projects = collection('project');
  const todos = collection('todo');

  const menuList = document.querySelector('#menu-items');
  const defaultProject = createDefaultProject('Default');
  const newProjectBtn = newProjectButton();
  menuList.append(defaultProject, newProjectBtn);

  projects.forEach((project) => {
    addNewProject(project);
    displayTracker(project);
  });

  const onLoad = todos.filter(((item) => item.projectName.toLowerCase() === 'default'));

  const todoapp = document.querySelector('#todo-app');
  todoapp.appendChild(createCards(onLoad));
};

initialize();
uxManager();

const saveNewToDo = (item) => {
  const todos = collection('todo');
  todos.push(item);
  localStorage.setItem('todo-collection', JSON.stringify(todos));

  document.getElementById('todo-app').innerHTML = '';
  const todoapp = document.querySelector('#todo-app');
  const displayFormat = item.projectName.toLowerCase();

  const projectTodo = todos.filter((todo) => todo.projectName.toLowerCase() === displayFormat);
  todoapp.appendChild(createCards(projectTodo));

  const tabTitle = document.querySelector('#tabTitle');
  tabTitle.textContent = displayFormat;
};

const updateTracker = (todo) => {
  const todos = collection('todo');
  const projectTodos = todos
    .filter((storedTodo) => storedTodo.projectName === todo.projectName).length;
  document.querySelector(`#${todo.projectName.split(' ').join('-')}`).textContent = projectTodos;
};

const updateTodo = (todo) => {
  const todos = JSON.parse(localStorage.getItem('todo-collection'));
  const index = todos.findIndex((item) => item.id === todo.id);

  todos[index] = todo;
  localStorage.setItem('todo-collection', JSON.stringify(todos));

  document.getElementById('todo-app').innerHTML = '';
  const todoapp = document.querySelector('#todo-app');
  const displayFormat = todo.projectName.toLowerCase();

  const projectTodo = todos.filter((todo) => todo.projectName.toLowerCase() === displayFormat);
  todoapp.appendChild(createCards(projectTodo));

  document.getElementById('tabTitle').innerHTML = '';
  const tabTitle = document.querySelector('#tabTitle');
  tabTitle.textContent = todo.projectName.toLowerCase();
};

const resetFields = (...fields) => {
  fields.forEach((field) => {
    field.value = '';
  });
};

document.addEventListener('click', (event) => {
  if (event.target.id === 'addProjectBtn') {
    if (document.getElementById('projectName').value.trim().length > 4) {
      const projects = JSON.parse(localStorage.getItem('project-collection'))
        ? JSON.parse(localStorage.getItem('project-collection')) : [];
      projects.push(document.getElementById('projectName').value);
      addNewProject(document.getElementById('projectName').value);
      localStorage.setItem('project-collection', JSON.stringify(projects));
      document.getElementById('projectName').value = '';
    }
  }

  if (event.target.id === 'cancelBtn') {
    document.getElementById('projectName').value = '';

    const field = document.querySelector('#newProjectBtn');
    superToggle(field, 'd-none', 'd-block');

    const adjacentDiv = document.querySelector('#addProjectForm');
    superToggle(adjacentDiv, 'd-block', 'd-none');
  }

  if (event.target.parentNode.className === 'project-name' || event.target.parentNode.className === 'project-name-default') {
    const todos = JSON.parse(localStorage.getItem('todo-collection'))
      .filter((project) => project.projectName.toLowerCase() === event.target.id.split('-')[1]);

    document.getElementById('todo-app').innerHTML = '';
    const todoapp = document.querySelector('#todo-app');
    todoapp.appendChild(createCards(todos));

    document.getElementById('tabTitle').innerHTML = '';
    const tabTitle = document.getElementById('tabTitle');
    [, tabTitle.textContent] = event.target.id.split('-');
  }

  if (event.target.id.includes('delete-')) {
    const todos = JSON.parse(localStorage.getItem('todo-collection'));
    const [, finder] = event.target.id.split('-');

    const index = todos.findIndex((todo) => todo.id === finder);

    todos.splice(index, 1);

    localStorage.setItem('todo-collection', JSON.stringify(todos));

    document.getElementById('todo-app').innerHTML = '';
    const todoapp = document.querySelector('#todo-app');
    const displayedHeader = document.querySelector('#tabTitle').textContent.toLowerCase();
    todoapp.appendChild(createCards(todos
      .filter((todo) => todo.projectName.toLowerCase() === displayedHeader)));
  }

  if (event.target.id.includes('edit-')) {
    const todos = JSON.parse(localStorage.getItem('todo-collection'));

    const [, finder] = event.target.id.split('-');
    const [todo] = todos.filter((item) => item.id === finder);

    document.querySelector('#activeTodo').value = finder;

    document.querySelector('#todoTitle').value = todo.title;
    document.querySelector('#todoDesc').value = todo.description;
    document.querySelector('#todoProjectList').value = todo.projectName;
    document.querySelector('#todoPriorities').value = todo.priority;
    document.querySelector('#datepicker').value = todo.dueDate;

    $('#todoModal').modal('show');
  }
});

document.getElementById('saveBtn').onclick = () => {
  const title = document.querySelector('#todoTitle');
  const desc = document.querySelector('#todoDesc');
  const projectName = document.querySelector('#todoProjectList');
  const priorityLevel = document.querySelector('#todoPriorities');
  const dueDate = document.querySelector('#datepicker');

  const secretKey = document.querySelector('#activeTodo');

  const T = new Date().setHours(0, 0, 0, 0);

  if (secretKey.value) {
    const todo = new Todo(
      secretKey.value,
      title.value,
      desc.value,
      dueDate.value,
      priorityLevel.value,
      projectName.value,
    );

    if (!Object.values(todo).every((input) => input.length > 2)) return;

    if ((T.valueOf() !== validFormat(todo.dueDate))
    && T.valueOf() < validFormat(todo.dueDate) === false) {
      dueDate.classList.add('is-invalid');
      dueDate.value = '';
    } else {
      if (dueDate.classList.contains('is-invalid')) dueDate.classList.remove('is-invalid');
      updateTodo(todo);
      updateTracker(todo);
      $('#todoModal').modal('hide');
      document.querySelector('#activeTodo').value = '';
    }
  } else {
    const storageIndex = localStorage.getItem('todo-collection')
      ? JSON.parse(localStorage.getItem('todo-collection')).length + 1 : 0;

    const uniqueId = `${title.value.split(' ').join('')}${storageIndex}`;

    const todo = new Todo(
      uniqueId,
      title.value,
      desc.value,
      dueDate.value,
      priorityLevel.value,
      projectName.value,
    );

    if (!Object.values(todo).every((input) => input.length > 2)) return;

    if ((T.valueOf() !== validFormat(todo.dueDate))
    && T.valueOf() < validFormat(todo.dueDate) === false) {
      dueDate.classList.add('is-invalid');
      dueDate.value = '';
    } else {
      if (dueDate.classList.contains('is-invalid')) dueDate.classList.remove('is-invalid');
      saveNewToDo(todo);
      updateTracker(todo);
      $('#todoModal').modal('hide');
      document.querySelector('#activeTodo').value = '';
    }
  }
};

$('#todoModal').on('hidden.bs.modal', () => {
  const title = document.querySelector('#todoTitle');
  const desc = document.querySelector('#todoDesc');
  const projectName = document.querySelector('#todoProjectList');
  const priorityLevel = document.querySelector('#todoPriorities');
  const dueDate = document.querySelector('#datepicker');

  resetFields(title, desc, projectName, priorityLevel, dueDate);
});