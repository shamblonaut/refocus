import { TaskManager } from "../taskManager";
import { loadProject } from "./project";

import { format } from "date-fns";

export default function loadTaskModal(projectID) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const form = document.createElement("form");
    form.classList.add("task-form");

    const modalHeading = document.createElement("div");
    modalHeading.classList.add("modal-heading");
    modalHeading.textContent = "Add task";
    form.appendChild(modalHeading);

    const taskTitleField = document.createElement("div");
    taskTitleField.classList.add("input-field", "title-field");

    const taskTitleLabel = document.createElement("label");
    taskTitleLabel.htmlFor = "title";
    taskTitleLabel.textContent = "Task Title: ";
    taskTitleField.appendChild(taskTitleLabel);

    const taskTitleInput = document.createElement("input");
    taskTitleInput.type = "text";
    taskTitleInput.name = "title";
    taskTitleInput.id = "title";
    taskTitleInput.required = true;
    taskTitleField.appendChild(taskTitleInput);

    form.appendChild(taskTitleField);

    const taskDueDateField = document.createElement("div");
    taskDueDateField.classList.add("input-field", "due-date-field");

    const taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.htmlFor = "due-date";
    taskDueDateLabel.textContent = "Due Date: ";
    taskDueDateField.appendChild(taskDueDateLabel);

    const taskDueDateSelector = document.createElement("input");
    taskDueDateSelector.type = "date";
    taskDueDateSelector.name = "date";
    taskDueDateSelector.id = "date";
    taskDueDateSelector.required = true;
    taskDueDateField.appendChild(taskDueDateSelector);

    form.appendChild(taskDueDateField);

    const taskDescriptionField = document.createElement("div");
    taskDescriptionField.classList.add("input-field", "description-field");

    const taskDescriptionLabel = document.createElement("label");
    taskDescriptionLabel.htmlFor = "description";
    taskDescriptionLabel.textContent = "Description: ";
    taskDescriptionField.appendChild(taskDescriptionLabel);

    const taskDescriptionInput = document.createElement("textarea");
    taskDescriptionInput.rows = 3;
    taskDescriptionInput.name = "description";
    taskDescriptionInput.id = "description";
    taskDescriptionField.appendChild(taskDescriptionInput);

    form.appendChild(taskDescriptionField);

    const taskPriorityField = document.createElement("div");
    taskPriorityField.classList.add("input-field", "priority-field");

    const taskPriorityLabel = document.createElement("label");
    taskPriorityLabel.htmlFor = "priority";
    taskPriorityLabel.textContent = "Priority: ";
    taskPriorityField.appendChild(taskPriorityLabel);

    const taskPrioritySelector = document.createElement("select");
    taskPrioritySelector.name = "priority";
    taskPrioritySelector.classList.add("priority-select");

    for (let i = 0; i <= 3; i++) {
        const taskPriorityOption = document.createElement("option");
        taskPriorityOption.value = i.toString();
        taskPriorityOption.textContent = TaskManager.priorities[i];
        taskPrioritySelector.appendChild(taskPriorityOption);
    }

    taskPriorityField.appendChild(taskPrioritySelector);

    form.appendChild(taskPriorityField);

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button", "pseudo-button");
    cancelButton.textContent = "×";
    cancelButton.addEventListener("click", () => { document.body.removeChild(document.querySelector(".modal")); });
    form.appendChild(cancelButton);

    const createTaskButton = document.createElement("button");
    createTaskButton.classList.add("create-task-button");
    createTaskButton.textContent = "Create Task";

    createTaskButton.addEventListener("click", () => {
        const valid = form.checkValidity();
        if (valid) {
            TaskManager.getProjects()[projectID].createTask(
                form.title.value,
                format(new Date(form.date.value), "PP"),
                (form.description.value) ? form.description.value : "No Description",
                Number(form.priority.value)
            );
            document.body.removeChild(document.querySelector(".modal"));
            loadProject(projectID);
        } else {
            form.reportValidity();
        }
    });

    form.appendChild(createTaskButton);

    modal.appendChild(form);

    return modal;
}