import { Project } from "./project";


const TaskManager = (() => {
  let projects = {};

  let getProjects = () => projects;

  let createProject = (name, color) => {
    const project = new Project(name, color);
    projects[project.id] = project;
    return project.id;
  }

  let removeProject = id => delete projects[id];

  const priorities = ["Normal", "Low", "Medium", "High"];

  return {
    getProjects,
    createProject,
    removeProject,
    priorities,
  };
})();

export { TaskManager };
