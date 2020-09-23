import itemFactory from "../models/item";
import projectFactory from "../models/project";

const controller = (() => {
  let currentProject = projectFactory("Quick tasks");
  const allProjects = [currentProject];

  const changeCurrentProject = (index) => {
    const project = allProjects[index];
    currentProject = project;
  };

  const addNewProject = (title) => {
    const newProject = projectFactory(title);
    allProjects.push(newProject);
  };

  const getCurrentProject = () => currentProject;
  const getAllProjects = () => allProjects;

  return { getCurrentProject, getAllProjects, addNewProject, changeCurrentProject };
})();

export default controller;
