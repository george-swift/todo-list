import {
  createDefaultProject,
  newProjectButton,
  createProject,
} from './module/projectModule.js';

import {
  createCards, Todo,
} from './module/todoModule.js';

// const initialize = (projects = [], todo = [{
//   title: 'New Todo', dueDate: 'Fri May 21', description: 'Testing Card', priority: 'Low',
// }, {
//   title: 'New Todo', dueDate: 'Fri May 21', description: 'Testing Card', priority: 'Medium',
// }, {
//   title: 'New Todo', dueDate: 'Fri May 21', description: 'Testing Card', priority: 'High',
// }]) => {
//   const menuList = document.querySelector('#menu-items');
//   const defaultProject = createDefaultProject('Default');
//   const newProjectBtn = newProjectButton();
//   menuList.append(defaultProject, newProjectBtn);

//   projects.forEach((project) => addNewProject(project));

//   const mpBody = document.querySelector('#mp-body');
//   mpBody.appendChild(createCards(todo));
// };

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

const initialize = () => {
  const menuList = document.querySelector('#menu-items');
  const defaultProject = createDefaultProject('Default');
  const newProjectBtn = newProjectButton('New');

  menuList.append(defaultProject, newProjectBtn);
  return menuList;
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
  addNewToDo();
  $('#todoModal').modal('hide');
};

// const addTaskButtons = document.getElementsByClassName('addProject');

// const displayAddTaskModal = () => {
//   $('#todoModal').modal('show');
// };

// for (let i = 0; i < addTaskButtons.length; i++) {
//   addTaskButtons[i].addEventListener('click', displayAddTaskModal, false);
// }

// Test modal functionality

const addNewToDo = () => {
  const container = document.querySelector('#card-container');
  const title = document.querySelector('#todoTitle');
  const desc = document.querySelector('#todoDesc');
  const projectName = document.querySelector('#todoProjectList');
  const priorityLevel = document.querySelector('#todoPriorities');
  const dueDate = document.querySelector('#datepicker');
  
  const toDoItem = new Todo(title.value, desc.value, dueDate.value, priorityLevel.value);
  
  if (Object.values(toDoItem).every((input) => input.length > 2)) {
    container.appendChild(createCards(toDoItem));
  }
  resetFields(title, desc, projectName, priorityLevel, dueDate);
};
  
const resetFields = (...fields) => {
  fields.forEach((field) => {
    field.value = '';
  });
}
  