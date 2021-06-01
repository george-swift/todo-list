/**
 * @jest-environment jsdom
 */

import {
  newProjectButton, createDefaultProject, createProject, wrapProject,
} from '../src/module/projectModule.js';

describe('project module', () => {
  const select = document.createElement('select');
  const menuList = document.createElement('ul');

  beforeAll(() => {
    const defaultProject = createDefaultProject('Default');
    const newProjectBtn = newProjectButton();
    const newProject = createProject('New Project');
    menuList.append(defaultProject, newProject, newProjectBtn);
    select.id = 'todoProjectList';
  });

  test('creates default project', () => {
    const projectList = menuList.querySelector('#Default');
    expect(projectList.id).toMatch(/Default/);
    const project = menuList.querySelector('a');
    expect(project.classList).toContain('project-name-default');
  });

  test('creates a new project button', () => {
    const newProjectBtn = menuList.querySelector('#newProjectBtn');
    expect(newProjectBtn).not.toBeNull();
    const action = newProjectBtn.querySelector('span');
    expect(action.textContent).toMatch(/Add new project/);
  });

  test('creates a new project', () => {
    const newProject = menuList.querySelector('#pr-new-project');
    expect(newProject.id).toMatch(/pr-new-project/);
  });

  test('adds a project to the list of projects', () => {
    const option = wrapProject('Default');
    select.appendChild(option);
    const defaultProject = select.querySelector('option');
    expect(defaultProject).not.toBeNull();
    const anotherOption = wrapProject('Second Project');
    select.appendChild(anotherOption);
    const projectList = select.querySelectorAll('option');
    expect(Array.from(projectList).filter((option) => option.innerHTML === 'Second Project')).not.toBeNull();
  });
});