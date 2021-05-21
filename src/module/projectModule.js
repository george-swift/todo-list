import attributes from './domManager.js';
import Pushpin from '../assets/push-pin.svg';
import Plus from '../assets/plus.svg';

const customAttributes = (elem, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    elem.setAttribute(key, value);
  });
};

const customLink = () => {
  const option = document.createElement('li');
  customAttributes(option, attributes.li);

  const anchor = document.createElement('a');
  customAttributes(anchor, attributes.a.all);

  const defaultIcon = document.createElement('img');
  customAttributes(defaultIcon, attributes.icon.default);
  defaultIcon.src = Pushpin;

  const addNewIcon = document.createElement('img');
  customAttributes(addNewIcon, attributes.icon.new);
  addNewIcon.src = Plus;

  const text = document.createElement('span');

  return {
    option,
    anchor,
    defaultIcon,
    addNewIcon,
    text,
  };
};

const createDefaultProject = (name) => {
  const {
    option,
    anchor,
    defaultIcon,
    text,
  } = customLink();

  text.textContent = name;
  text.id = 'pr-default';

  anchor.append(defaultIcon, text);
  anchor.className = 'project-name-default';
  option.appendChild(anchor);

  return option;
};

const newProjectButton = () => {
  const {
    option,
    anchor,
    addNewIcon,
    text,
  } = customLink();

  text.textContent = 'Add new project';

  customAttributes(anchor, attributes.a.new);
  anchor.append(addNewIcon, text);

  anchor.addEventListener('click', (event) => {
    const field = document.querySelector(`#${event.currentTarget.id}`);
    field.classList.add('d-none');

    const adjacentDiv = document.querySelector('#addProjectForm');
    if (!adjacentDiv.classList.contains('d-none')) return;
    adjacentDiv.classList.remove('d-none');
    adjacentDiv.classList.add('d-block');
  });

  const addProjectForm = document.createElement('div');
  customAttributes(addProjectForm, attributes.div);

  const input = document.createElement('input');
  customAttributes(input, attributes.input);

  const wrap = document.createElement('div');
  customAttributes(wrap, attributes.wrap);

  const add = document.createElement('button');
  customAttributes(add, attributes.addBtn);
  add.textContent = 'Add';

  const cancel = document.createElement('button');
  customAttributes(cancel, attributes.cancelBtn);
  cancel.textContent = 'Cancel';

  wrap.append(add, cancel);
  addProjectForm.append(input, wrap);

  option.append(anchor, addProjectForm);

  return option;
};

const createProject = (project) => {
  const { option, anchor, text } = customLink();

  customAttributes(anchor, attributes.a.created);
  text.textContent = project;
  text.id = `pr-${project.toLowerCase()}`;

  anchor.appendChild(text);
  option.appendChild(anchor);

  return option;
};

const wrapProject = (project) => {
  const option = document.createElement('option');
  option.textContent = project;

  return option;
};

export {
  createDefaultProject,
  newProjectButton,
  createProject,
  wrapProject,
};