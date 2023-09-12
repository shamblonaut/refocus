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

  return {
    getProjects,
    createProject,
    removeProject,
  };
})();

export { TaskManager }
