import attributes from './domManager.js';

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

  const addNewIcon = document.createElement('img');
  customAttributes(addNewIcon, attributes.icon.new);

  const text = document.createElement('span');

  return {
    option, anchor, defaultIcon, addNewIcon, text,
  };
};

const superToggle = (elem, old, curr) => {
  if (!elem.classList.contains(old)) return;
  elem.classList.remove(old);
  elem.classList.add(curr);
};

const createDefaultProject = (name) => {
  const {
    option, anchor, defaultIcon, text,
  } = customLink();

  text.textContent = name;

  anchor.append(defaultIcon, text);
  option.appendChild(anchor);

  return option;
};

const newProjectButton = () => {
  const {
    option, anchor, addNewIcon, text,
  } = customLink();

  text.textContent = 'Add new project';

  customAttributes(anchor, attributes.a.new);
  anchor.append(addNewIcon, text);

  anchor.addEventListener('click', (event) => {
    const field = document.querySelector(`#${event.currentTarget.id}`);
    field.classList.add('d-none');

    const adjacentDiv = document.querySelector('#addProjectForm');
    superToggle(adjacentDiv, 'd-none', 'd-block');
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

  anchor.appendChild(text);
  option.appendChild(anchor);

  return option;
};

export {
  createDefaultProject, newProjectButton, createProject, superToggle,
};