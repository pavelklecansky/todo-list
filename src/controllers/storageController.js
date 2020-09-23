import controller from "./controller";

const storageController = (() => {
  const saveAllProjects = () => {
    localStorage.setItem("projects", JSON.stringify(controller.getAllProjects()));
  };

  let getAllProject = () => {
    return JSON.parse(localStorage.getItem("projects"));
  };
  return { getAllProject, saveAllProjects };
})();

export default storageController;
