import attributes from './domManager.js';

function Todo(id, title, description, dueDate, priority, project) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.projectName = project;
}

function defineAttributes(elem, attributes) {
  Object.entries(attributes).forEach(([key, value]) => {
    elem.setAttribute(key, value);
  });
}

function createCards(todos) {
  const cardsContainer = document.createElement('div');
  cardsContainer.id = 'card-container';

  for (let i = 0; i < todos.length; i += 1) {
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

    const itemPriority = document.createElement('span');
    defineAttributes(itemPriority, attributes.card.badge[`${todos[i].priority.toLowerCase()}`]);

    itemDetails.append(itemPriority, itemDate);
    cardHeader.append(itemTitle, itemDetails);

    const cardBody = document.createElement('div');
    defineAttributes(cardBody, attributes.card.body);

    const itemDescription = document.createElement('p');
    defineAttributes(itemDescription, attributes.card.desc);

    cardBody.appendChild(itemDescription);

    const cardFooter = document.createElement('div');
    defineAttributes(cardFooter, attributes.card.footer);

    const editButton = document.createElement('button');
    defineAttributes(editButton, attributes.card.editButton);
    editButton.textContent = 'Edit';
    editButton.id = `edit-${todos[i].id}`;

    const deleteButton = document.createElement('button');
    defineAttributes(deleteButton, attributes.card.deleteButton);
    deleteButton.textContent = 'Delete';
    deleteButton.id = `delete-${todos[i].id}`;

    cardFooter.append(editButton, deleteButton);

    Object.entries(todos[i]).forEach(([key, value]) => {
      if (key === 'title') {
        itemTitle.textContent = value;
      } else if (key === 'description') {
        itemDescription.textContent = value;
      } else if (key === 'dueDate') {
        itemDate.textContent = value;
      } else if (key === 'priority') {
        itemPriority.textContent = value;
      }
    });

    card.append(cardHeader, cardBody, cardFooter);

    cardsContainer.appendChild(card);
  }

  return cardsContainer;
}

export { Todo, createCards };