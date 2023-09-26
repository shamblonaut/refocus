import { TaskManager } from "../taskManager";
import { loadProject } from "./project";
import loadProjectModal from "./projectModal";

import RefocusLogoSvg from "../../assets/refocus-logo.svg";
import SunMoonSvg from "../../assets/sun-moon.svg";

function loadNav() {
    const nav = document.createElement("div");
    nav.classList.add("nav");

    const brand = document.createElement("div");
    brand.classList.add("brand");

    const logo = new Image();
    logo.classList.add("logo");
    logo.src = RefocusLogoSvg;
    logo.alt = "Refocus Logo";
    brand.appendChild(logo);

    const wordmark = document.createElement("div");
    wordmark.classList.add("wordmark");
    wordmark.textContent = "REFOCUS";
    brand.appendChild(wordmark);

    nav.appendChild(brand);

    const projectsList = document.createElement("div");
    projectsList.classList.add("projects-list");

    const projectsHeading = document.createElement("div");
    projectsHeading.classList.add("heading");
    projectsHeading.textContent = "Projects";

    const newProjectButton = document.createElement("button");
    newProjectButton.classList.add("new-project", "pseudo-button");
    newProjectButton.textContent = "+";

    newProjectButton.addEventListener("click", () => {
        if (!document.querySelector(".modal")) document.body.appendChild(loadProjectModal());
    });

    projectsHeading.appendChild(newProjectButton);

    projectsList.appendChild(projectsHeading);

    const projects = document.createElement("ul");
    projects.classList.add("projects");
    projectsList.appendChild(projects);

    nav.appendChild(projectsList);

    return nav;
}

function updateProjectsList() {
    const projectsList = document.querySelector(".projects");
    while (projectsList.firstChild) {
        projectsList.removeChild(projectsList.lastChild);
    }

    const projects = TaskManager.getProjects();
    Object.keys(projects).forEach(id => {
        const project = document.createElement("div");
        project.classList.add("project");

        const projectName = document.createElement("button");
        projectName.classList.add("list-name", "pseudo-button");
        projectName.textContent = projects[id].getName();
        projectName.style.color = projects[id].getColor();
        projectName.addEventListener("click", () => {
            loadProject(id);
        });
        project.appendChild(projectName);

        const projectActions = document.createElement("button");
        projectActions.classList.add("actions", "pseudo-button");
        projectActions.textContent = "⋮";

        projectActions.addEventListener("click", () => {
            TaskManager.removeProject(id);
            updateProjectsList();
            loadProject(Object.keys(projects)[0]);
        });

        project.appendChild(projectActions);

        projectsList.appendChild(project);
    });
}

export { loadNav, updateProjectsList };