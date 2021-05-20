const attributes = (function() {
    return {
        div: {
            class: 'd-none p-2',
            id: 'addProjectForm',
        },
        wrap: {
            class: 'd-flex w-100 mt-2 wrap-btns',
        },
        input: {
            class: 'form-control w-100',
            id: 'projectName',
        },
        addBtn: {
            class: 'btn btn-success text-white w-48',
            id: 'addProjectBtn',
            textContent: 'Add'
        },
        cancelBtn: {
            class: 'btn btn-danger text-white w-48',
            id: 'cancelBtn',
            textContent: 'Cancel'
        },
    };
})();

export { attributes };