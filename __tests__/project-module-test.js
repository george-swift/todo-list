/**
 * @jest-environment jsdom
 */

import { newProjectButton, createDefaultProject, createProject } from '../src/module/projectModule';

describe('project module', () => {
    const menuList = document.createElement('ul');

    beforeAll(() => {
        const defaultProject = createDefaultProject('Default');
        const newProjectBtn = newProjectButton();
        const newProject = createProject('New Project');
        menuList.append(defaultProject, newProject, newProjectBtn);
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


});