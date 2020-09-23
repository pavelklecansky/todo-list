import controller from "../controllers/controller";

const domController = (() => {
  const createProjectTitle = (project) => {
    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.getTitle();
    projectTitle.addEventListener("click", () => {
      controller.changeCurrentProject(project);
      createCentralColumn();
    });

    return projectTitle;
  };

  const createLeftColumn = () => {
    const projectsDiv = document.querySelector("#projects");
    projectsDiv.innerHTML = "";
    for (const project of controller.getAllProjects()) {
      const projectTitle = createProjectTitle(project);
      projectsDiv.append(projectTitle);
    }

    return projectsDiv;
  };

  const createTasksToolbar = (title) => {
    const taskBar = document.querySelector("#tasksToolbar");
    taskBar.innerHTML = "";
    const projectTitle = document.createElement("h2");
    projectTitle.textContent = title;
    taskBar.appendChild(projectTitle);
  };
  const createDeleteItem = (item) => {
    const trashImg = document.createElement("img");
    trashImg.src = "../../dist/trash.svg";
    trashImg.addEventListener("click", () => {
      controller.removeItem(item);
      createCentralColumn();
    });
    return trashImg;
  };


  const createItem = (item) => {
    const itemDiv = document.createElement("div");
    const itemTitle = document.createElement("h3");
    itemTitle.textContent = item.getTitle();
    itemDiv.appendChild(itemTitle);

    itemDiv.appendChild(createDeleteItem());

    return itemDiv;
  };

  const createItems = (items) => {
    const itemsDiv = document.querySelector("#items");
    itemsDiv.innerHTML = "";
    for (const item of items) {
      const projectTitle = createItem(item);
      itemsDiv.appendChild(projectTitle);
    }
  };

  const createCentralColumn = () => {
    const currentProject = controller.getCurrentProject();
    createTasksToolbar(currentProject.getTitle());
    createItems(currentProject.getItems());
  };

  const addNewProjectEvent = () => {
    const input = document.querySelector("#addProject input");
    input.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        if (input.value) {
          controller.addNewProject(input.value);
          createLeftColumn();
          input.value = "";
        }
      }
    });
  };

  const addNewItemEvent = () => {
    const input = document.querySelector("#addItem input");
    input.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        if (input.value) {
          controller.addNewItem(input.value);
          createCentralColumn();
          input.value = "";
        }
      }
    });
  };

  const addEventListeners = () => {
    addNewProjectEvent();
    addNewItemEvent();
  };

  const render = () => {
    addEventListeners();
    createLeftColumn();
    createCentralColumn();
  };

  return { render };
})();

export default domController;
