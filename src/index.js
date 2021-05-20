import {
    createDefaultProject,
    newProjectButton,
    createProject,
} from './module/projectModule.js';

const initialize = () => {
    const menuList = document.querySelector('#menu-items');
    const defaultProject = createDefaultProject('Default');
    const newProjectBtn = newProjectButton('New');

    menuList.append(defaultProject, newProjectBtn);
    return menuList;
};

const addNewProject = (name) => {
    const projectButtonDiv = document.querySelector('#newProjectBtn').parentNode;
    const parentDiv = document.querySelector('#menu-items');

    parentDiv.insertBefore(createProject(name), projectButtonDiv);
};

const superToggle = (elem, old, curr) => {
    if (!elem.classList.contains(old)) return;
    elem.classList.remove(old);
    elem.classList.add(curr);
};

initialize();

$('.datepicker').datepicker({
    "format": "mm-dd-yy",
    "todayHighlight": true,
    "autoclose": true,
    "keyboardNavigation": false
});


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

    if (event.target.matches('.task')) {
        const overlay = document.querySelector('.overlay');
        superToggle(overlay, 'd-none', 'open');
    }
});