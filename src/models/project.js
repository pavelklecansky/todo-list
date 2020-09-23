const projectFactory = (title) => {
  const items = [];

  const getTitle = () => title;
  const setTitle = (newTitle) => (title = newTitle);

  const addItem = (item) => {
    items.push(item);
  };

  const getItems = () => items;

  const getItemByIndex = (index) => items[index];

  const removeItem = (item) => {
    let index = items.indexOf(item);
    items.splice(index, 1);
  };

  const removeItemByIndex = (index) => {
    items.splice(index, 1);
  };

  return { items, title, getTitle, setTitle, addItem, getItems, getItemByIndex, removeItem, removeItemByIndex };
};

const projectMethods = {
  getTitle() {
    return this.title;
  },

  setTitle(title) {
    this.title = title;
  },
  addItem(item) {
    this.items.push(item);
  },

  getItems() {
    return this.items;
  },

  getItemByIndex(index) {
    return this.items[index];
  },

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  },

  removeItemByIndex(index) {
    this.items.splice(index, 1);
  },
};

export { projectFactory, projectMethods };
