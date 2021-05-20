import { attributes } from './domManager.js';

const createDefaultProject = (name) => {
    const option = document.createElement('li');
    const classes = ['option', 'center'];
    option.classList.add(...classes);

    const anchor = document.createElement('a');
    anchor.href = '#';

    const image = document.createElement('img');
    image.src = 'assets/push-pin.svg';
    image.className = 'project-icon';

    const text = document.createElement('span');
    text.textContent = name;

    anchor.appendChild(image);
    anchor.appendChild(text);
    option.appendChild(anchor);

    return option;
};

const customAttributes = (elem, attributes) => {
    Object.entries(attributes).forEach(([key, value]) => {
        elem.setAttribute(key, value);
    });
};

const newProjectButton = () => {
    const option = document.createElement('li');
    const classes = ['option', 'center'];
    option.classList.add(...classes);

    const anchor = document.createElement('a');
    anchor.setAttribute('id', 'newProjectBtn');

    const image = document.createElement('img');
    image.src = 'assets/plus.svg';
    image.className = 'project-icon';

    const text = document.createElement('span');
    text.textContent = 'Add new project';

    anchor.append(image, text);

    anchor.addEventListener('click', (event) => {
        const field = document.querySelector(`#${event.currentTarget.id}`);
        field.classList.toggle('d-block');
        field.classList.add('d-none');

        const adjacentDiv = document.querySelector('#addProjectForm');
        adjacentDiv.classList.toggle('d-none');
        adjacentDiv.classList.add('d-block');
    });

    const addProjectForm = document.createElement('div');
    customAttributes(addProjectForm, attributes.div);

    const input = document.createElement('div');
    customAttributes(input, attributes.input);

    const wrap = document.createElement('div');
    customAttributes(wrap, attributes.wrap);

    const add = document.createElement('button');
    customAttributes(add, attributes.addBtn);

    const cancel = document.createElement('button');
    customAttributes(cancel, attributes.cancelBtn);

    wrap.append(add, cancel);
    addProjectForm.append(input, wrap);

    option.append(anchor, addProjectForm);

    return option;

};

const createProject = (project) => {
    const option = document.createElement('li');
    const classes = ['option', 'center'];
    option.classList.add(...classes);

    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.classList.add('project-name');

    const text = document.createElement('span');
    text.textContent = project;

    anchor.appendChild(text);
    option.appendChild(anchor);

    return option;
};

export { createDefaultProject, newProjectButton, createProject };