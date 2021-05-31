/**
 * @jest-environment jsdom
 */

import { validFormat, setDate, setActiveTab } from '../src/module/uxmanager.js';

describe('User experience', () => {
  document.body.innerHTML = `<div class="mp-header center mt-3 mb-1">
                              <h3 class="font-custom" id="tabTitle">Default</h3>
                            </div>`;

  const sidebarTabs = document.createElement('ul');
  sidebarTabs.innerHTML = `<li class="option center">
                              <a href="#" id="sidebarToday">
                              <img src='#' id="calendar" alt="calendar icon" class="icons">
                                Today
                              </a>
                            </li>
                            <li class="option center">
                              <a href="#" id="sidebarUpcoming">
                              <img src='#' id="upcoming" alt="schedule icon" class="icons">
                                Upcoming
                              </a>
                            </li>`;

  const today = sidebarTabs.querySelector('#sidebarToday');
  const upcoming = sidebarTabs.querySelector('#sidebarUpcoming');

  describe('Main page', () => {
    it('displays date when ux manager is called', () => {
      const date = document.querySelector('#date');
      expect(date).toBeNull();
      const pageHeader = document.querySelector('.mp-header');
      expect(pageHeader.childElementCount).toEqual(1);
      setDate();
      expect(pageHeader.childElementCount).toEqual(2);
      const today = pageHeader.querySelector('#date');
      const [weekDay, month, day] = new Date().toDateString().split(' ');
      expect(today.textContent).toBe(`${weekDay} ${day} ${month}`);
    });
  });

  describe('Active tab', () => {
    it('adds an active class to tabs on button click', () => {
      expect(today.parentElement.classList).not.toContain('active');
      today.click();
      setActiveTab(today);
      expect(upcoming.parentElement.classList).not.toContain('active');
      expect(today.parentElement.classList).toContain('active');
    });
  });

  describe('Given dates', () => {
    it('ensures correct date format and throws an error otherwise', () => {
      let dueDate = '2021 abcd @#';
      expect(validFormat(dueDate)).toBeNaN();
      dueDate = '2021 05 31';
      expect(validFormat(dueDate)).toBe(1622415600000);
    });
  });
});