/**
 * @jest-environment jsdom
 */

import { createCards, Todo } from '../src/module/todoModule';

describe('project module - todo', () => {

    const listOfTodos = [];
    listOfTodos.push(new Todo(1, 'The name of the boy is Blessing', 'Description here', '2021-06-02', 'High', 'Yusif'));

    test('creates title', () => {
        const div = document.createElement('div');
        div.id = 'todo-app';
        div.appendChild(createCards(listOfTodos));
        const card = div.querySelector('.card');
        expect(card.querySelector('.item-name').innerHTML).toMatch(/The name of the boy is Blessing/);
    });

    test('creates todo priority', () => {
        const div = document.createElement('div');
        div.id = 'todo-app';
        div.appendChild(createCards(listOfTodos));
        const badge = div.querySelector('.badge');
        expect(badge.innerHTML).toMatch(/High/);
    });

    test('creates todo date', () => {
        const div = document.createElement('div');
        div.id = 'todo-app';
        div.appendChild(createCards(listOfTodos));
        const itemDate = div.querySelector('.item-date');
        expect(itemDate.innerHTML).toMatch(/2021-06-02/);
    });

    test('creates todo description', () => {
        const div = document.createElement('div');
        div.id = 'todo-app';
        div.appendChild(createCards(listOfTodos));
        const itemDesc = div.querySelector('.item-desc');
        expect(itemDesc.innerHTML).toMatch(/Description here/);
    });

    test('creates edit and delete buttons', () => {
        const div = document.createElement('div');
        div.id = 'todo-app';
        div.appendChild(createCards(listOfTodos));
        const footer = div.querySelector('.card-footer');
        expect(footer.querySelector('.btn-secondary').innerHTML).toMatch(/Edit/);
        expect(footer.querySelector('.btn-danger').innerHTML).toMatch(/Delete/);
        expect(footer.querySelectorAll('button').length).toEqual(2);
    });

    describe('project module - list of cards', () => {
        const listOfTodos = [];

        beforeAll(() => {
            for (let i = 0; i < 5; i += 1) {
                listOfTodos.push(new Todo(i + 1, 'The name of the boy is Blessing', 'Description here', '2021-06-02', 'High', 'Yusif'));
            }
        });

        test('creates all cards', () => {
            const div = document.createElement('div');
            div.id = 'todo-app';
            div.appendChild(createCards(listOfTodos));
            const cards = div.querySelectorAll('.card');
            expect(cards.length).toEqual(5);
        });
    });

})