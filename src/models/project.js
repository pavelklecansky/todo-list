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

  return { getTitle, setTitle, addItem, getItems, getItemByIndex, removeItem, removeItemByIndex };
};

export default projectFactory;
