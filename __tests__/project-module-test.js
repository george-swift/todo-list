 /**
  * @jest-environment jsdom
  */

 import { createDefaultProject } from '../src/module/projectModule';

 describe('project module', () => {
     const menuList = document.createElement('ul');

     beforeAll(() => {
         const defaultProject = createDefaultProject('Default');
         menuList.appendChild(defaultProject);
     })

     test('creates default project', () => {
         const projectList = menuList.querySelector('#Default');
         expect(projectList.id).toBe('Default');
     });
 });