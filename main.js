/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


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

  createTask(title, description="", dueDate="", priority=4) {
    const task = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority);
    this.tasks[task.id] = task;
    return task.id;
  }

  removeTask(id) {
    delete this.tasks[id];
  }
}




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
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




/***/ }),

/***/ "./src/taskManager.js":
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskManager: () => (/* binding */ TaskManager)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");



const TaskManager = (() => {
  let projects = {};

  let getProjects = () => projects;

  let createProject = (name, color) => {
    const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(name, color);
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ "./src/taskManager.js");


const p1 = _taskManager__WEBPACK_IMPORTED_MODULE_0__.TaskManager.createProject("Hello World", "black");
const p2 = _taskManager__WEBPACK_IMPORTED_MODULE_0__.TaskManager.createProject("Bye World", "white");

const projects = _taskManager__WEBPACK_IMPORTED_MODULE_0__.TaskManager.getProjects();
console.log(projects[p1]);
console.log(projects[p2]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxlQUFlO0FBQ2YsZUFBZTtBQUNmLFlBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix1Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRW1COzs7Ozs7Ozs7Ozs7Ozs7QUN0Q25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixlQUFlO0FBQ2YsWUFBWTs7O0FBR1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDMURvQjs7O0FBR3BDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsNkNBQU87QUFDL0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVxQjs7Ozs7OztVQ3ZCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040Qzs7QUFFNUMsV0FBVyxxREFBVztBQUN0QixXQUFXLHFEQUFXOztBQUV0QixpQkFBaUIscURBQVc7QUFDNUI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZm9jdXMvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9yZWZvY3VzLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vcmVmb2N1cy8uL3NyYy90YXNrTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9yZWZvY3VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlZm9jdXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlZm9jdXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWZvY3VzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVmb2N1cy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5sZXQgcHJvamVjdENvdW50ZXIgPSAxO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgY29sb3IpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLnRhc2tzID0ge307XG5cbiAgICB0aGlzLmlkID0gcHJvamVjdENvdW50ZXI7XG4gICAgcHJvamVjdENvdW50ZXIrKztcbiAgfVxuXG4gIGdldE5hbWUoKSB7IHJldHVybiB0aGlzLm5hbWUgfVxuICBnZXRDb2xvcigpIHsgcmV0dXJuIHRoaXMuY29sb3IgfVxuICBnZXRUYXNrcygpIHsgcmV0dXJuIHRoaXMudGFza3MgfVxuICBnZXRJRCgpIHsgcmV0dXJuIHRoaXMuaWQgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRDb2xvcihjb2xvcikge1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uPVwiXCIsIGR1ZURhdGU9XCJcIiwgcHJpb3JpdHk9NCkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICB0aGlzLnRhc2tzW3Rhc2suaWRdID0gdGFzaztcbiAgICByZXR1cm4gdGFzay5pZDtcbiAgfVxuXG4gIHJlbW92ZVRhc2soaWQpIHtcbiAgICBkZWxldGUgdGhpcy50YXNrc1tpZF07XG4gIH1cbn1cblxuZXhwb3J0IHsgUHJvamVjdCB9O1xuIiwibGV0IHRhc2tDb3VudGVyID0gMTtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3RJRCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0SUQgPSBwcm9qZWN0SUQ7XG4gICAgdGhpcy5ub3RlID0gXCJcIjtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLmlkID0gdGFza0NvdW50ZXI7XG4gICAgdGFza0NvdW50ZXIrKztcbiAgfVxuXG4gIGdldFRpdGxlKCkgeyByZXR1cm4gdGhpcy50aXRsZSB9XG4gIGdldERlc2NyaXB0aW9uKCkgeyByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbiB9XG4gIGdldER1ZURhdGUoKSB7IHJldHVybiB0aGlzLmR1ZURhdGUgfVxuICBnZXRQcmlvcml0eSgpIHsgcmV0dXJuIHRoaXMucHJpb3JpdHkgfVxuICBnZXRQcm9qZWN0SUQoKSB7IHJldHVybiB0aGlzLnByb2plY3RJRCB9XG4gIGdldE5vdGVzKCkgeyByZXR1cm4gdGhpcy5ub3RlcyB9XG4gIGdldElEKCkgeyByZXR1cm4gdGhpcy5pZCB9XG5cblxuICBzZXRUaXRsZSh0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgfVxuICBcbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBzZXRQcm9qZWN0SUQoaWQpIHtcbiAgICBzZXRQcm9qZWN0SUQgPSBpZDtcbiAgfVxuXG4gIGFkZE5vdGUobm90ZSkge1xuICAgIHRoaXMubm90ZSA9IG5vdGU7XG4gIH1cbiAgXG4gIHJlbW92ZU5vdGUoKSB7XG4gICAgdGhpcy5ub3RlID0gXCJcIjtcbiAgfVxuXG4gIG1hcmtDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBUYXNrIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5cbmNvbnN0IFRhc2tNYW5hZ2VyID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0ge307XG5cbiAgbGV0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgbGV0IGNyZWF0ZVByb2plY3QgPSAobmFtZSwgY29sb3IpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSwgY29sb3IpO1xuICAgIHByb2plY3RzW3Byb2plY3QuaWRdID0gcHJvamVjdDtcbiAgICByZXR1cm4gcHJvamVjdC5pZDtcbiAgfVxuXG4gIGxldCByZW1vdmVQcm9qZWN0ID0gaWQgPT4gZGVsZXRlIHByb2plY3RzW2lkXTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IFRhc2tNYW5hZ2VyIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVGFza01hbmFnZXIgfSBmcm9tIFwiLi90YXNrTWFuYWdlclwiO1xuXG5jb25zdCBwMSA9IFRhc2tNYW5hZ2VyLmNyZWF0ZVByb2plY3QoXCJIZWxsbyBXb3JsZFwiLCBcImJsYWNrXCIpO1xuY29uc3QgcDIgPSBUYXNrTWFuYWdlci5jcmVhdGVQcm9qZWN0KFwiQnllIFdvcmxkXCIsIFwid2hpdGVcIik7XG5cbmNvbnN0IHByb2plY3RzID0gVGFza01hbmFnZXIuZ2V0UHJvamVjdHMoKTtcbmNvbnNvbGUubG9nKHByb2plY3RzW3AxXSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0c1twMl0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9