import attributes from './domManager.js';
import Brand from '../assets/to-do.svg';
import Hamburger from '../assets/hamburger.svg';
import QuickAdd from '../assets/add-task.png';
import Calendar from '../assets/calendar.svg';
import Upcoming from '../assets/upcoming.svg';
import { createCards } from './todoModule.js';

const imageBuilder = (elem, attributes, asset = null) => {
  Object.entries(attributes).forEach(([key, value]) => {
    elem.setAttribute(key, value);
  });
  if (asset) elem.src = asset;
};

const navElements = () => {
  const navbarBrand = document.createElement('a');
  imageBuilder(navbarBrand, attributes.navbar.brand);

  const logo = document.createElement('img');
  imageBuilder(logo, attributes.navbar.logo, Brand);

  navbarBrand.append(logo, 'To-do List');

  const hamburger = document.createElement('span');
  const icon = document.createElement('img');
  imageBuilder(icon, attributes.navbar.hamburger, Hamburger);
  hamburger.appendChild(icon);

  const action = document.createElement('img');
  imageBuilder(action, attributes.navbar.action, QuickAdd);

  return { navbarBrand, hamburger, action };
};

const manageNav = () => {
  const nav = document.querySelector('#app-name');
  const navbarToggle = document.querySelector('.navbar-toggler');
  const quickAdd = document.querySelector('#quick-add');

  const { navbarBrand, hamburger, action } = navElements();

  quickAdd.append(action, 'Quick Add Task');

  navbarToggle.appendChild(hamburger);

  nav.insertBefore(navbarBrand, navbarToggle);
};

const renderTabIcons = () => {
  const todayTab = document.getElementById('calendar');
  const upcomingTab = document.getElementById('upcoming');

  todayTab.src = Calendar;
  upcomingTab.src = Upcoming;
};

const validFormat = (input) => {
  let date;
  const T = input.split(/\D+/).map((value) => parseInt(value, 10));

  try {
    date = new Date(T[0], T[1] - 1, T[2]);
    if (date.getMonth() + 1 === T[1] && date.getDate() === T[2]) return date.setHours(0, 0, 0, 0);
    throw new Error('Bad Date Format');
  } catch (error) {
    return NaN;
  }
};

const superToggle = (elem, old, curr) => {
  if (!elem.classList.contains(old)) return;
  elem.classList.remove(old);
  elem.classList.add(curr);
};

const setDate = () => {
  const pageHeader = document.querySelector('.mp-header');
  const date = document.createElement('p');
  Object.entries(attributes.date).forEach(([key, value]) => {
    date.setAttribute(key, value);
  });
  const [weekDay, month, day] = new Date().toDateString().split(' ');
  date.textContent = `${weekDay} ${day} ${month}`;
  pageHeader.appendChild(date);
};

const setActiveTab = (link) => {
  const tabs = document.getElementsByClassName('option');

  Array.from(tabs).forEach((tab) => {
    if (tab.classList.contains('active')) tab.classList.remove('active');
  });

  link.parentElement.classList.add('active');
};

const updatePage = (selectedTab) => {
  const title = document.querySelector('#tabTitle');
  title.textContent = selectedTab.slice(7);

  const date = document.querySelector('#date');

  const container = document.querySelector('#todo-app');
  const todoList = localStorage.getItem('todo-collection') ? JSON.parse(localStorage.getItem('todo-collection')) : [];

  const currentDay = new Date().toLocaleDateString('en-GB')
    .split('/')
    .reverse()
    .join('-');

  const itemsToday = todoList.filter((todo) => todo.dueDate === currentDay);
  const itemsUpcoming = todoList.filter((todo) => todo.dueDate > currentDay);

  if (selectedTab.endsWith('Upcoming')) {
    superToggle(date, 'd-block', 'd-none');
    container.innerHTML = '';
    container.appendChild(createCards(itemsUpcoming));
  } else if (selectedTab.endsWith('Today')) {
    superToggle(date, 'd-none', 'd-block');
    container.innerHTML = '';
    container.appendChild(createCards(itemsToday));
  }
};

const uxManager = () => {
  manageNav();
  renderTabIcons();
  setDate();

  const sidebarTabs = document.querySelector('.wrap-sb');
  const tabIds = ['sidebarToday', 'sidebarUpcoming'];

  sidebarTabs.addEventListener('click', (e) => {
    const targetID = e.target.id;
    if (!tabIds.includes(targetID)) return;
    setActiveTab(document.querySelector(`#${targetID}`));
    updatePage(targetID);
  });
};

export { validFormat, uxManager };