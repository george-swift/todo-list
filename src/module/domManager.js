const attrs = {
    wrap: {
        class: 'd-flex w-100',
    },

    input: {
        class: 'form-control w-100',
        id: 'projectName',
    },

    addBtn: {
        class: 'btn btn-success text-white me-3',
        id: 'addProjectBtn',
    },

    cancelBtn: {
        class: 'btn btn-danger text-white',
        id: 'cancelBtn',
    },
};

const customAttributes = (elem, attrs) => {
    Object.entries(attrs).forEach(([key, value]) => {
        elem.setAttribute(key, value);
    });
};

const newProjectField = () => {
    const div = document.createElement('div');
    div.classList.add('d-none');
    div.setAttribute('id', 'addProjectDiv');

    const input = document.createElement('input');
    customAttributes(input, attrs.input);

    const wrap = document.createElement('div');
    customAttributes(wrap, attrs.wrap);

    const add = document.createElement('button');
    customAttributes(add, attrs.addBtn);
    add.textContent = 'Add';

    const cancel = document.createElement('button');
    customAttributes(cancel, attrs.cancelBtn);
    cancel.textContent = 'Cancel';

    wrap.append(add, cancel);

    div.append(input, wrap);

    return div;
};

export { newProjectField };