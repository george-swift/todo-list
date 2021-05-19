import { newProjectField } from './domManager.js';

const render = (name) => {
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

const createPrompt = () => {
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

  anchor.addEventListener('click', (event) => {
    const field = document.querySelector(`#${event.currentTarget.id}`);
    field.classList.toggle('d-block');
    field.classList.add('d-none');

    const adjacentDiv = document.querySelector('#addProjectDiv');
    adjacentDiv.classList.toggle('d-none');
    adjacentDiv.classList.add('d-block');
  });

  const addProj = newProjectField();

  anchor.appendChild(image);
  anchor.appendChild(text);
  option.appendChild(addProj);
  option.appendChild(anchor);

  return option;
};

const createItem = (project) => {
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

const addProject = (project) => {
  const elem = createItem(project);
  return elem;
};

export { render, addProject, createPrompt };