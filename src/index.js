import { loadNav, updateProjectsList } from "./frontend/nav";
import { loadProject } from "./frontend/project";

import "./frontend/style.css";

import { TaskManager } from "./taskManager";


document.body.appendChild(loadNav());

const home = TaskManager.createProject("Home", "skyblue");
TaskManager.getProjects()[home].createTask("Cook Dinner", "Sep 23, 2023", "Make a dinner to the best of your abilities", 0);
TaskManager.getProjects()[home].createTask("Do Laundry", "Sep 23, 2023", "You can't just leave 'em there!", 0);
document.body.appendChild(loadProject(home));
loadProject(home);

const school = TaskManager.createProject("School", "orange");
TaskManager.getProjects()[school].createTask("Physics Project", "Sep 23, 2023", "Show them a little part of how the world works!", 3);
TaskManager.getProjects()[school].createTask("Chemistry Project", "Sep 24, 2023", "Splashing, exploding and disappearing. Why?", 2);
TaskManager.getProjects()[school].createTask("Mathematics Project", "Sep 25, 2023", "Don't do drugs. Do Math!", 1);
TaskManager.getProjects()[school].createTask("Computer Project", "Sep 25, 2023", "The computerification of the world doesn't happen by magic...", 0);
document.body.appendChild(loadProject(school));
loadProject(school);

updateProjectsList();