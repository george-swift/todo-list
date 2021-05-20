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

function createCard(todo) {
  const card = document.createElement('div');

  const cardHeader = document.createElement('div');
  defineAttributes(cardHeader, attributes.card.header);

  const itemTitle = document.createElement('h5');
  defineAttributes(itemTitle, attributes.card.title);
  itemTitle.textContent = todo.title;

  const itemDetails = document.createElement('div');
  defineAttributes(itemDetails, attributes.card.details);

  const itemDate = document.createElement('p');
  defineAttributes(itemDate, attributes.card.date);
  itemDate.textContent = todo.dueDate; // which will be formatted first obviously

  const itemPriority = document.createElement('img');
  defineAttributes(itemPriority, attributes.card.flag);
  itemPriority.setAttribute('src', `assets/priority-${todo.priority[-1]}.svg`);

  itemDetails.append(itemDate, itemPriority);

  cardHeader.append(itemTitle, itemDetails);

  const cardBody = document.createElement('div');
  defineAttributes(cardBody, attributes.card.body);

  const itemDescription = document.createElement('p');
  defineAttributes(itemDescription, attributes.card.desc);
  itemDescription.textContent = todo.description;

  cardBody.appendChild(itemDescription);

  card.append(cardHeader, cardBody);

  return card;
}

export { Todo, createCard };