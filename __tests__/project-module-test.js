/**
  * @jest-environment jsdom
  */

import { newProjectButton, createDefaultProject } from '../src/module/projectModule';

describe('project module', () => {
  const menuList = document.createElement('ul');

  beforeAll(() => {
    const defaultProject = createDefaultProject('Default');
    const newProjectBtn = newProjectButton();
    menuList.append(defaultProject, newProjectBtn);
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
});