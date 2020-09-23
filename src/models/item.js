const itemFactory = (title, priority) => {
  const createDate = Date.now();
  let completed = false;

  const getTitle = () => title;
  const setTitle = (newTitle) => (title = newTitle);
  const getPriority = () => priority;
  const setPriority = (newPriority) => (priority = newPriority);
  const getCreateDate = () => createDate;
  const isCompleted = () => completed;
  const setCompleted = (state) => (completed = state);

  return { getTitle, setTitle, getPriority, setPriority, getCreateDate, isCompleted, setCompleted };
};

export default itemFactory;
