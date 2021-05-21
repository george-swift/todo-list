import {
  createDefaultProject,
  newProjectButton,
  createProject,
} from './module/projectModule.js';

import {
  createCards,
  Todo,
} from './module/todoModule.js';

const todos = [];

const initialize = (projects = [], todos = []) => {
  const menuList = document.querySelector('#menu-items');
  const defaultProject = createDefaultProject('Default');
  const newProjectBtn = newProjectButton();
  menuList.append(defaultProject, newProjectBtn);

  projects.forEach((project) => addNewProject(project));

  const todoapp = document.querySelector('#todo-app');
  todoapp.appendChild(createCards(todos));
};

const addNewProject = (project) => {
  const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;
  const parentDiv = document.querySelector('#menu-items');

  parentDiv.insertBefore(createProject(project), projectButtonDiv);
};

const superToggle = (elem, old, curr) => {
  if (!elem.classList.contains(old)) return;
  elem.classList.remove(old);
  elem.classList.add(curr);
};

initialize();

document.addEventListener('click', (event) => {
  if (event.target.id === 'addProjectBtn') {
    if (document.getElementById('projectName').value.trim().length > 4) {
      addNewProject(document.getElementById('projectName').value);
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
});

document.getElementById('saveBtn').onclick = () => {
  const title = document.querySelector('#todoTitle');
  const desc = document.querySelector('#todoDesc');
  const projectName = document.querySelector('#todoProjectList');
  const priorityLevel = document.querySelector('#todoPriorities');
  const dueDate = document.querySelector('#datepicker');

  const toDoItem = new Todo(
    title.value, desc.value, dueDate.value, priorityLevel.value, projectName.value,
  );

  saveNewToDo(todos, toDoItem);
  resetFields(title, desc, projectName, priorityLevel, dueDate);
  $('#todoModal').modal('hide');
};

const saveNewToDo = (todos, item) => {
  todos.push(item);
  localStorage.setItem('todo-collection', JSON.stringify(todos));

  document.getElementById('todo-app').innerHTML = '';
  const todoapp = document.querySelector('#todo-app');

  todoapp.appendChild(createCards(todos));
};

const resetFields = (...fields) => {
  fields.forEach((field) => {
    field.value = '';
  });
}