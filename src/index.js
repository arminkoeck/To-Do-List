
import './style.css';

import createTask from "./taskManager.js";
import { getTasks, removeTaskFromArray, removeTaskFromFolders, addTaskToFolder, changeTaskFolder, changePriority, addNewTask } from './taskManager.js';
import createFolder from "./folderManager.js";
import { getFolders, removeFolder } from "./folderManager.js";
import { displayFolders, displayTasks, openTaskModal, closeTaskModal, closeTaskModalByClick, resetTaskModal, clearTasks } from "./domFunctions.js";





createTask ("Fitness", "Do a workout", "high");
createTask ("Meditation", "Meditate for 30 min", "low");
createTask ("Programming", "Finish the programming project", "medium");

createFolder("Fitness");
createFolder("Meditation");
// addTaskToFolder(getTasks()[2], getFolders()[0].tasks)


displayFolders(getFolders());
console.log(getFolders());
displayTasks(getTasks());
console.log(getTasks());

document.addEventListener("DOMContentLoaded", () => {
    openTaskModal();
});

document.addEventListener("DOMContentLoaded", () => {
    closeTaskModalByClick();
});

   

taskForm.onsubmit = (e) => {
    addNewTask(e);
    closeTaskModal();
    resetTaskModal();
    clearTasks();
    displayTasks(getTasks());
    console.log(getTasks());
};


document.addEventListener("taskDelete", function(event) {
    const taskId = event.detail.taskId;
    removeTaskFromArray(taskId);
    removeTaskFromFolders(taskId, getFolders()); //funktioniert ja nur, wenn ich auf den delete Button drücke, nicht wenn ich den Folder ändern möchte
    clearTasks();
    displayTasks(getTasks());
    console.log(getTasks());
    console.log(getFolders());
})


// after deleting a task, the same folder should be reloaded with the rest of the tasks and not the all tasks array



