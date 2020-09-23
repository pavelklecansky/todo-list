import itemFactory from "../models/item";
import projectFactory from "../models/project";

const controller = (() => {
  let currentProject = projectFactory("Quick tasks");
  const allProjects = [currentProject];

  const addFakeData = () => {
    addNewItem("test");
    addNewItem("test2");
  };

  const changeCurrentProject = (project) => {
    currentProject = project;
  };

  const changeCurrentProjectByIndex = (index) => {
    const project = allProjects[index];
    currentProject = project;
  };

  const addNewProject = (title) => {
    const newProject = projectFactory(title);
    allProjects.push(newProject);
  };

  const getCurrentProject = () => currentProject;
  const getAllProjects = () => allProjects;

  const addNewItem = (title) => {
    const item = itemFactory(title);
    currentProject.addItem(item);
  };

  const removeItem = (item) => {
    currentProject.removeItem(item);
  };

  return {
    getCurrentProject,
    getAllProjects,
    addNewProject,
    changeCurrentProject,
    addNewItem,
    removeItem,
    addFakeData,
    changeCurrentProjectByIndex,
  };
})();

export default controller;
