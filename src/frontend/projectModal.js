import { TaskManager } from "../taskManager";
import { updateProjectsList } from "./nav";
import { loadProject } from "./project";

export default function loadProjectModal() {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const form = document.createElement("form");
    form.classList.add("project-form");

    const modalHeading = document.createElement("div");
    modalHeading.classList.add("modal-heading");
    modalHeading.textContent = "New Project";
    form.appendChild(modalHeading);

    const projectNameField = document.createElement("div");
    projectNameField.classList.add("input-field", "name-field");

    const projectNameLabel = document.createElement("label");
    projectNameLabel.htmlFor = "name";
    projectNameLabel.textContent = "Project Name: ";
    projectNameField.appendChild(projectNameLabel);

    const projectNameInput = document.createElement("input");
    projectNameInput.type = "text";
    projectNameInput.name = "name";
    projectNameInput.id = "name";
    projectNameInput.required = true;
    projectNameField.appendChild(projectNameInput);

    form.appendChild(projectNameField);

    const projectColorField = document.createElement("div");
    projectColorField.classList.add("input-field", "color-field");

    const projectColorLabel = document.createElement("label");
    projectColorLabel.htmlFor = "color";
    projectColorLabel.textContent = "Color: ";
    projectColorField.appendChild(projectColorLabel);

    const projectColorPicker = document.createElement("input");
    projectColorPicker.type = "color";
    projectColorPicker.name = "color";
    projectColorPicker.id = "color";
    projectColorField.appendChild(projectColorPicker);

    form.appendChild(projectColorField);

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button", "pseudo-button");
    cancelButton.textContent = "×";
    cancelButton.addEventListener("click", () => { document.body.removeChild(document.querySelector(".modal")); });
    form.appendChild(cancelButton);

    const createProjectButton = document.createElement("button");
    createProjectButton.classList.add("create-project-button");
    createProjectButton.textContent = "Create Project";

    createProjectButton.addEventListener("click", () => {
        const valid = form.checkValidity();
        if (valid) {
            const newProject = TaskManager.createProject(form.name.value, form.color.value);
            document.body.removeChild(document.querySelector(".modal"));
            updateProjectsList();
            loadProject(newProject);
        } else {
            form.reportValidity();
        }
    });
    form.appendChild(createProjectButton);

    modal.appendChild(form);

    return modal;
}