const attributes = (() => ({
    div: {
        class: 'd-none wrapper',
        id: 'addProjectForm',
    },

    li: {
        class: 'option center',
    },

    a: {
        all: { href: '#' },
        new: { id: 'newProjectBtn' },
        created: { class: 'project-name' },
    },

    icon: {
        default: {
            class: 'project-icon',
        },
        new: {
            class: 'project-icon',
        },
    },

    wrap: {
        class: 'd-flex w-100 mt-2 wrap-btns',
    },

    input: {
        class: 'form-control',
        id: 'projectName',
    },

    addBtn: {
        class: 'btn btn-success text-white w-48',
        id: 'addProjectBtn',
    },

    cancelBtn: {
        class: 'btn btn-danger text-white w-48',
        id: 'cancelBtn',
        textContent: 'Cancel',
    },

    card: {
        wrap: { class: 'card mt-3' },
        header: {
            class: 'card-header d-flex center justify-content-between',
        },
        title: {
            class: 'item-name',
        },
        details: {
            class: 'item-details d-flex flex-wrap',
        },
        date: {
            class: 'item-date mb-0',
        },
        flag: {
            alt: 'priority level',
            class: 'me-2',
        },
        body: {
            class: 'card-body',
        },
        desc: {
            class: 'item-desc',
        },
        badge: {
            high: {
                class: 'badge btn-danger me-3',
            },
            medium: {
                class: 'badge btn-primary me-3',
            },
            low: {
                class: 'badge btn-warning me-3 text-dark',
            },
        },
        footer: {
            class: 'card-footer d-flex justify-content-end'
        },
        editButton: {
            class: 'btn btn-secondary btn-sm me-2'
        },
        deleteButton: {
            class: 'btn btn-danger btn-sm',
            textContent: 'Delete'
        }
    },
}))();

export default attributes;