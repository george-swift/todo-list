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
      src: 'assets/push-pin.svg',
    },
    new: {
      class: 'project-icon',
      src: 'assets/plus.svg',
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
    header: {
      class: 'd-flex center justify-content-between',
    },
    title: {
      class: 'item-name',
    },
    details: {
      class: 'item-details d-flex',
    },
    date: {
      class: 'item-date mb-0',
    },
    flag: {
      alt: 'priority level',
      class: 'ms-2',
    },
    body: {
      class: 'card-body',
    },
    desc: {
      class: 'item-desc',
    },
  },
}))();

export default attributes;