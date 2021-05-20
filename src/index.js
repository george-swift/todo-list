import { createDefaultProject, newProjectButton, createProject } from './module/projectModule.js';

const initialize = () => {
    const menuList = document.querySelector('#menu-items');
    const defaultProject = createDefaultProject('Default');
    const newProjectBtn = newProjectButton('New');

    menuList.append(defaultProject, newProjectBtn);
    return menuList;
}

const addNewBook = (name) => {
    const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;
    const parentDiv = document.querySelector("#menu-items")

    parentDiv.insertBefore(createProject(name), projectButtonDiv);
}

initialize();

document.addEventListener('click', (event) => {
    if (event.target.id === 'addProjectBtn') {
        if (document.getElementById("projectName").value.trim().length > 4) {
            addNewBook(document.getElementById("projectName").value);
            document.getElementById("projectName").value = '';
        }
    }
});