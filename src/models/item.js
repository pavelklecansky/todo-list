const itemFactory = (title) => {
  const createDate = Date.now();
  let completed = false;

  const getTitle = () => title;
  const setTitle = (newTitle) => (title = newTitle);
  const getCreateDate = () => createDate;
  const isCompleted = () => completed;
  const setCompleted = (state) => (completed = state);

  return { getTitle, setTitle, getCreateDate, isCompleted, setCompleted };
};

export default itemFactory;
