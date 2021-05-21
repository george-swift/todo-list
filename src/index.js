import {
    createDefaultProject,
    newProjectButton,
    createProject,
    wrapProject,
} from './module/projectModule.js';

import {
    createCards,
    Todo,
} from './module/todoModule.js';

const initialize = (projects = JSON.parse(localStorage.getItem('project-collection')) ? JSON.parse(localStorage.getItem('project-collection')) : [], todos = JSON.parse(localStorage.getItem('todo-collection')) ? JSON.parse(localStorage.getItem('todo-collection')) : []) => {
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
    addToSelect(project);
};

const addToSelect = (project) => {
    const select = document.querySelector('#todoProjectList');
    const name = wrapProject(project);
    select.appendChild(name);
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
            const projects = JSON.parse(localStorage.getItem('project-collection')) ? JSON.parse(localStorage.getItem('project-collection')) : [];
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

    if (event.target.parentNode.className === 'project-name' | event.target.parentNode.className === 'project-name-default') {
        const todos = JSON.parse(localStorage.getItem('todo-collection')).filter(project => project.projectName.toLowerCase() === event.target.id.split('-')[1]);
        document.getElementById('todo-app').innerHTML = '';
        const todoapp = document.querySelector('#todo-app');

        todoapp.appendChild(createCards(todos));
    }
});

document.getElementById('saveBtn').onclick = () => {
    const title = document.querySelector('#todoTitle');
    const desc = document.querySelector('#todoDesc');
    const projectName = document.querySelector('#todoProjectList');
    const priorityLevel = document.querySelector('#todoPriorities');
    const dueDate = document.querySelector('#datepicker');

    const todo = new Todo(
        title.value, desc.value, dueDate.value, priorityLevel.value, projectName.value,
    );

    if (!Object.values(todo).every((input) => input.length > 2)) return;
    saveNewToDo(todo);
    resetFields(title, desc, projectName, priorityLevel, dueDate);
    $('#todoModal').modal('hide');
};

const saveNewToDo = (item) => {
    const todos = JSON.parse(localStorage.getItem('todo-collection')) ? JSON.parse(localStorage.getItem('todo-collection')) : [];
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