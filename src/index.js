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

    parentDiv.insertBefore(createProject(name), projectButtonDiv)
}

initialize();
addNewBook("Yusif");