const render = (name, dateCreated) => {
    const option = document.createElement('li');
    const classes = ["option", "center"];
    option.classList.add(...classes);

    const anchor = document.createElement('a');
    anchor.href = '#';

    const image = document.createElement('img');
    image.src = 'assets/push-pin.svg';
    image.className = 'project-icon';

    const text = document.createElement('span');
    text.textContent = name;

    anchor.appendChild(image);
    anchor.appendChild(text);
    option.appendChild(anchor);

    return option;
}

export { render };