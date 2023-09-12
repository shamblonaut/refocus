import { TaskManager } from "./taskManager";

const p1 = TaskManager.createProject("Hello World", "black");
const p2 = TaskManager.createProject("Bye World", "white");

const projects = TaskManager.getProjects();
console.log(projects[p1]);
console.log(projects[p2]);
