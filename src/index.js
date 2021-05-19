// import {render} from './module/todoModule.js';
import { render, addProject, createPrompt } from './module/projectModule.js';
import { newProjectField } from './module/domManager.js';

const parentDiv = document.querySelector('.accordion-body');
const prompt = createPrompt();

function init() {
  const menuList = document.querySelector('#menu-items');
  const defaultProject = render('Default Project', new Date().toLocaleString().split(',')[0]);

  menuList.append(defaultProject, prompt);
  return menuList;
}

function addNewProject() {
  const menuList = document.querySelector('#menu-items');
  const newProject = addProject('Another Project');
  menuList.insertBefore(newProject, prompt);
}

const newProjectBtn = document.querySelector('#newProjectBtn');

newProjectBtn.addEventListener('click', () => {
  const field = newProjectField();
  field.classList.toggle('d-block');
  newProjectBtn.classList.add('d-none');
  parentDiv.appendChild(field);
});

init();

addNewProject();