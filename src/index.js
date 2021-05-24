import './style.css';

import {
    createDefaultProject,
    newProjectButton,
    createProject,
    wrapProject,
} from './module/projectModule.js';

import createCards from './module/todoModule.js';

function Todo(id, title, description, dueDate, priority, project) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectName = project;
}

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

const initialize = (projects = JSON.parse(localStorage.getItem('project-collection')) ?
    JSON.parse(localStorage.getItem('project-collection')) : [], todos = JSON.parse(localStorage.getItem('todo-collection')) ?
    JSON.parse(localStorage.getItem('todo-collection')).filter((todo) => todo.projectName.toLowerCase() === 'default') : []) => {
    const menuList = document.querySelector('#menu-items');
    const defaultProject = createDefaultProject('Default');
    const newProjectBtn = newProjectButton();
    menuList.append(defaultProject, newProjectBtn);

    projects.forEach((project) => addNewProject(project));

    const todoapp = document.querySelector('#todo-app');
    todoapp.appendChild(createCards(todos));
};

initialize();

const saveNewToDo = (item) => {
    const todos = JSON.parse(localStorage.getItem('todo-collection')) ?
        JSON.parse(localStorage.getItem('todo-collection')) : [];
    todos.push(item);
    localStorage.setItem('todo-collection', JSON.stringify(todos));

    document.getElementById('todo-app').innerHTML = '';
    const todoapp = document.querySelector('#todo-app');
    const prjLwC = item.projectName.toLowerCase();
    const projectTodo = todos.filter((todo) => todo.projectName.toLowerCase() === prjLwC);
    todoapp.appendChild(createCards(projectTodo));

    document.getElementById('tabTitle').innerHTML = '';
    const tabTitle = document.querySelector('#tabTitle');
    tabTitle.textContent = item.projectName.toLowerCase();
};

const updateTodo = (todo) => {
    const todos = JSON.parse(localStorage.getItem('todo-collection'));
    todos[todo.id] = todo;
    localStorage.setItem('todo-collection', JSON.stringify(todos));

    document.getElementById('todo-app').innerHTML = '';
    const todoapp = document.querySelector('#todo-app');
    const prjLwC = todo.projectName.toLowerCase();
    const projectTodo = todos.filter((todoItem) => todoItem.projectName.toLowerCase() === prjLwC);
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
            const projects = JSON.parse(localStorage.getItem('project-collection')) ?
                JSON.parse(localStorage.getItem('project-collection')) : [];
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
        const todoIndex = todos.indexOf(todos.filter((todo) => todo.id === parseInt(event.target.id.split('-')[1], 10))[0]);
        todos.splice(todoIndex, 1);
        localStorage.setItem('todo-collection', JSON.stringify(todos));

        document.getElementById('todo-app').innerHTML = '';
        const todoapp = document.querySelector('#todo-app');
        todoapp.appendChild(createCards(todos.filter((todo) => todo.projectName.toLowerCase() === document.querySelector('#tabTitle').textContent.toLowerCase())));
    }

    if (event.target.id.includes('edit-')) {
        const todos = JSON.parse(localStorage.getItem('todo-collection'));
        const todoIndex = todos.indexOf(todos.filter((todo) => todo.id === parseInt(event.target.id.split('-')[1], 10))[0]);
        const todo = todos[todoIndex];

        document.querySelector('#activeTodo').value = todoIndex;

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

    if (document.querySelector('#activeTodo').value) {
        const todo = new Todo(parseInt(document.querySelector('#activeTodo').value, 10), title.value, desc.value, dueDate.value, priorityLevel.value, projectName.value);
        updateTodo(todo);
    } else {
        const id = JSON.parse(localStorage.getItem('todo-collection')) ? JSON.parse(localStorage.getItem('todo-collection')).length + 1 : 0;
        const todo = new Todo(
            id, title.value, desc.value, dueDate.value, priorityLevel.value, projectName.value,
        );
        saveNewToDo(todo);
    }

    resetFields(title, desc, projectName, priorityLevel, dueDate);

    $('#todoModal').modal('hide');
    document.querySelector('#activeTodo').value = '';
};

$('#todoModal').on('hidden.bs.modal', () => {
    const title = document.querySelector('#todoTitle');
    const desc = document.querySelector('#todoDesc');
    const projectName = document.querySelector('#todoProjectList');
    const priorityLevel = document.querySelector('#todoPriorities');
    const dueDate = document.querySelector('#datepicker');

    resetFields(title, desc, projectName, priorityLevel, dueDate);
});