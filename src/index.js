// import {render} from './module/todoModule.js';
import { render, addProject, createPrompt } from './module/projectModule.js';
import { newProjectField } from './module/domManager.js';

function init() {
  const menuList = document.querySelector('#menu-items');
  const defaultProject = render('Default', new Date().toLocaleString().split(',')[0]);
  const prompt = createPrompt();

  menuList.append(defaultProject, prompt);
  return menuList;
}

function addNewProject() {
  const prompt = createPrompt();
  const menuList = document.querySelector('#menu-items');
  const newProject = addProject('New');
  menuList.insertBefore(newProject, prompt);
}

// const newProjectBtn = document.querySelector('#newProjectBtn');

// newProjectBtn.addEventListener('click', () => {
//   const field = newProjectField();
//   field.classList.toggle('d-block');
//   newProjectBtn.classList.add('d-none');
//   parentDiv.appendChild(field);
// });

init();
// addNewProject();