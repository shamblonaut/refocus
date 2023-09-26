import { TaskManager } from "../taskManager";
import loadProjectModal from "./projectModal";

import loadTaskModal from "./taskModal";

function loadProject(id) {
    let main = document.querySelector(".main");
    if (!main) {
        main = document.createElement("div");
        main.classList.add("main");
    }
    
    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }

    const project = TaskManager.getProjects()[id];
    if (!project) {
        const projectNotFound = document.createElement("div");
        projectNotFound.classList.add("pnf");

        const message = document.createElement("div");
        message.classList.add("pnf-message");
        message.textContent = "Create a project to get started!";
        projectNotFound.appendChild(message);

        const newProjectButton = document.createElement("button");
        newProjectButton.classList.add("new-project");
        newProjectButton.textContent = "+ New Project";
        newProjectButton.addEventListener("click", () => {
            document.body.appendChild(loadProjectModal());
        });
        projectNotFound.appendChild(newProjectButton);

        main.appendChild(projectNotFound);
        return main;
    }

    const projectName = document.createElement("div");
    projectName.classList.add("name");
    projectName.textContent = project.getName();
    main.appendChild(projectName);

    let taskList = document.querySelector(".tasks");
    if (!taskList) {
        taskList = document.createElement("ul");
        taskList.classList.add("tasks");
    }
    
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
    }

    const tasks = project.getTasks();
    Object.keys(tasks).forEach(taskID => {
        const task = project.getTasks()[taskID];

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task");
        taskContainer.classList.add(`priority-${task.getPriority()}`);

        const taskDoneButton = document.createElement("button");
        taskDoneButton.classList.add("done");
        taskDoneButton.classList.add(`priority-${task.getPriority()}`);
        taskDoneButton.addEventListener("click", () => {
            if (!taskDoneButton.classList.contains("checked")) {
                taskDoneButton.classList.add("checked");
                taskDoneButton.nextElementSibling.classList.add("strike");
                taskDoneButton.parentElement.classList.add("checked");
            }
            project.removeTask(taskID);
            setTimeout(() => {
                loadProject(id);
            }, 1000);
        });
        taskContainer.appendChild(taskDoneButton);

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = task.getTitle();
        taskContainer.appendChild(title);

        const dueDate = document.createElement("div");
        dueDate.classList.add("due-date");
        dueDate.textContent = task.getDueDate();
        taskContainer.appendChild(dueDate);

        const expandButton = document.createElement("button");
        expandButton.classList.add("expand", "pseudo-button");
        expandButton.textContent = "↓";

        expandButton.addEventListener("click", () => {
            if (taskContainer.classList.contains("active")) {
                expandButton.textContent = "↓";
                taskContainer.classList.remove("active");
                taskContainer.childNodes.forEach(child => {
                    child.classList.remove("active");
                });
                taskContainer.removeChild(taskContainer.lastChild);
                taskContainer.removeChild(taskContainer.lastChild);
            } else {
                expandButton.textContent = "↑";

                taskContainer.classList.add("active");
                taskContainer.childNodes.forEach(child => {
                    child.classList.add("active");
                });

                const description = document.createElement("div");
                description.classList.add("description");
                description.textContent = task.getDescription();
                taskContainer.appendChild(description);

                const priority = document.createElement("div");
                priority.classList.add("priority");
                priority.textContent = "Priority: ";

                const priorityLevel = document.createElement("select");
                priorityLevel.classList.add("priority-select");
                for (let i = 0; i <= 3; i++) {
                    const priorityOption = document.createElement("option");
                    priorityOption.value = i.toString();
                    priorityOption.textContent = TaskManager.priorities[i];
                    if (i === task.getPriority()) priorityOption.selected = true;
                    priorityLevel.appendChild(priorityOption);
                }
                priorityLevel.addEventListener("change", () => {
                    taskDoneButton.classList.remove(`priority-${task.getPriority()}`);
                    taskContainer.classList.remove(`priority-${task.getPriority()}`);
                    task.setPriority(priorityLevel.value);
                    taskDoneButton.classList.add(`priority-${task.getPriority()}`);
                    taskContainer.classList.add(`priority-${task.getPriority()}`);
                });
                priority.appendChild(priorityLevel);

                taskContainer.appendChild(priority);
            }
        });

        taskContainer.appendChild(expandButton);

        taskList.appendChild(taskContainer);
    });

    main.appendChild(taskList);

    const newTaskButton = document.createElement("button");
    newTaskButton.classList.add("new-task", "pseudo-button");
    newTaskButton.textContent = "+ New Task";

    newTaskButton.addEventListener("click", () => {
        if (!document.querySelector(".modal")) document.body.appendChild(loadTaskModal(id));
        if(TaskManager.getProjects()[id]) loadProject(id);
    });
    main.appendChild(newTaskButton);

    return main;
}

export { loadProject };