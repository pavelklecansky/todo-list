import controller from "../controllers/controller";

const domController = (() => {
  const leftColumn = document.querySelector("#leftColumn");

  const createProjectTitle = (title) => {
    const projectTitle = document.createElement("h2");
    projectTitle.textContent = title;
    return projectTitle;
  };

  const createLeftColumn = () => {
    const projectsDiv = document.createElement("div");
    for (const project of controller.getAllProjects()) {
      const projectTitle = createProjectTitle(project.getTitle());
      projectsDiv.append(projectTitle);
    }

    return projectsDiv;
  };

  const render = () => {
    leftColumn.appendChild(createLeftColumn());
  };

  return { render };
})();

export default domController;
