/**
 * @jest-environment jsdom
*/

import { validFormat, setDate, setActiveTab } from '../src/module/uxmanager.js';

const setActiveOnClick = jest.fn().mockImplementation((link) => {
  link.click();
  setActiveTab(link);
});

describe('User experience', () => {
  document.body.innerHTML = `<ul>
                              <li class="option center">
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
                              </li>
                            </ul>
                            <div class="mp-header center mt-3 mb-1">
                              <h3 class="font-custom" id="tabTitle">Default</h3>
                            </div>`;

  const today = document.querySelector('#sidebarToday');
  const upcoming = document.querySelector('#sidebarUpcoming');

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
      setActiveOnClick(today);
      expect(upcoming.parentElement.classList).not.toContain('active');
      expect(today.parentElement.classList).toContain('active');
    });
  });

  describe('Given dates', () => {
    it('ensures correct date format and throws an error otherwise', () => {
      let dueDate = '2021 abcd @#';
      expect(validFormat(dueDate)).toBeNaN();
      const today = new Date().toLocaleString().split(',')[0].split('/');
      dueDate = `${today[2]} ${today[1]} ${today[0]}`;
      expect(validFormat(dueDate)).toEqual(new Date(dueDate).setHours(0, 0, 0, 0));
    });
  });
});