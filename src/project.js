import { Task } from "./task";

let projectCounter = 1;

class Project {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.tasks = {};

    this.id = projectCounter;
    projectCounter++;
  }

  getName() { return this.name }
  getColor() { return this.color }
  getTasks() { return this.tasks }
  getID() { return this.id }

  setName(name) {
    this.name = name;
  }

  setColor(color) {
    this.color = color;
  }

  createTask(title, dueDate, description, priority) {
    const task = new Task(title, dueDate, description, priority, this.id);
    this.tasks[task.id] = task;
    return task.id;
  }

  removeTask(id) {
    delete this.tasks[id];
  }
}

export { Project };
