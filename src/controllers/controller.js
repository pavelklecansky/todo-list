import { itemFactory, itemMethods } from "../models/item";
import { projectFactory, projectMethods } from "../models/project";
import storageController from "./storageController";

const controller = (() => {
  const allProjects = getAllProjectFromStorage();
  let currentProject = allProjects[0] || projectFactory("Quick tasks");
  function getAllProjectFromStorage() {
    const allProjectsStorage = [];
    for (const project of storageController.getAllProject()) {
      allProjectsStorage.push(Object.assign(project, projectMethods));
      for (let index = 0; index < project.getItems().length; index++) {
        project.items[index] = Object.assign(project.items[index], itemMethods);
      }
    }
    return allProjectsStorage;
  }

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
    storageController.saveAllProjects();
  };

  const getCurrentProject = () => currentProject;
  const getAllProjects = () => allProjects;

  const addNewItem = (title) => {
    const item = itemFactory(title);
    Object.assign(currentProject, projectMethods);
    currentProject.addItem(item);
    storageController.saveAllProjects();
  };

  const removeItem = (item) => {
    currentProject.removeItem(item);
    console.log("delete");
    storageController.saveAllProjects();
  };

  return {
    getCurrentProject,
    getAllProjects,
    addNewProject,
    changeCurrentProject,
    addNewItem,
    removeItem,
    changeCurrentProjectByIndex,
  };
})();

export default controller;
