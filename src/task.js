let taskCounter = 1;

class Task {
  constructor(title, dueDate, description, priority, projectID) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.projectID = projectID;
    this.note = "";
    this.complete = false;

    this.id = taskCounter;
    taskCounter++;
  }

  getTitle() { return this.title }
  getDueDate() { return this.dueDate }
  getDescription() { return this.description }
  getPriority() { return this.priority }
  getProjectID() { return this.projectID }
  getNotes() { return this.notes }
  getID() { return this.id }


  setTitle(title) {
    this.title = title;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setDescription(description) {
    this.description = description;
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
