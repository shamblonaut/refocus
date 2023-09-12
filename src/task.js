let taskCounter = 1;

class Task {
  constructor(title, description, dueDate, priority, projectID) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projectID = projectID;
    this.note = "";
    this.complete = false;

    this.id = taskCounter;
    taskCounter++;
  }

  getTitle() { return this.title }
  getDescription() { return this.description }
  getDueDate() { return this.dueDate }
  getPriority() { return this.priority }
  getProjectID() { return this.projectID }
  getNotes() { return this.notes }
  getID() { return this.id }


  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
  
  setPriority(priority) {
    this.priority = priority;
  }

  setProjectID(id) {
    setProjectID = id;
  }

  addNote(note) {
    this.note = note;
  }
  
  removeNote() {
    this.note = "";
  }

  markComplete() {
    this.complete = true;
  }
}

export { Task };
