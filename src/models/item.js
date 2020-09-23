const itemFactory = (title) => {
  const getTitle = () => title;
  const setTitle = (newTitle) => (title = newTitle);

  return { title, getTitle, setTitle };
};

const itemMethods = {
  getTitle() {
    return this.title;
  },
  setTitle(title) {
    this.title = title;
  },
};

export { itemFactory, itemMethods };
