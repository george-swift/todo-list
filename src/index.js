//import {render} from './module/todoModule.js';
import { render } from './module/projectModule.js';

function init() {
    const menuList = document.querySelector('#menu-items');
    console.log(menuList);
    const defaultProject = render('Default Project', new Date().toLocaleString().split(",")[0]);

    menuList.appendChild(defaultProject);
    return menuList;
}

init();