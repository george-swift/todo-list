import attributes from './domManager.js';

function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function defineAttributes(elem, attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
        elem.setAttribute(key, value);
    });
}

function createCards(todos) {
    const cardsContainer = document.createElement('div');
    cardsContainer.id = 'card-container';

    for (let i = 0; i < todos.length; i++) {

        const card = document.createElement('div');
        defineAttributes(card, attributes.card.wrap);

        const cardHeader = document.createElement('div');
        defineAttributes(cardHeader, attributes.card.header);

        const itemTitle = document.createElement('h5');
        defineAttributes(itemTitle, attributes.card.title);

        const itemDetails = document.createElement('div');
        defineAttributes(itemDetails, attributes.card.details);

        const itemDate = document.createElement('p');
        defineAttributes(itemDate, attributes.card.date);

        const itemPriority = document.createElement('img');
        defineAttributes(itemPriority, attributes.card.flag);

        const cardBody = document.createElement('div');
        defineAttributes(cardBody, attributes.card.body);

        const itemDescription = document.createElement('p');
        defineAttributes(itemDescription, attributes.card.desc);

        Object.entries(todos[i]).forEach(([key, value]) => {
            if (key === 'title') {
                itemTitle.textContent = value;
            } else if (key === 'description') {
                itemDescription.textContent = value;
            } else if (key === 'dueDate') {
                itemDate.textContent = value;
            } else if (key === 'priority') {
                itemPriority.setAttribute('src', `assets/${value}.svg`);
            }
        });

        itemDetails.append(itemPriority, itemDate);
        cardHeader.append(itemTitle, itemDetails);
        cardBody.appendChild(itemDescription);
        card.append(cardHeader, cardBody);

        cardsContainer.appendChild(card);
    };

    return cardsContainer;
}

export { Todo, createCards };