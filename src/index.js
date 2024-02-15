
import './style.css';

import createTask from "./taskManager.js";
import { getTasks, removeTaskFromArray, addTaskToFolder, changeTaskFolder, changePriority } from './taskManager.js';
import createFolder from "./folderManager.js";
import { getFolders, removeFolder } from "./folderManager.js";
import { displayFolders, displayTasks, openTaskModal, closeTaskModal } from "./domFunctions.js";




createTask ("Fitness", "Do a workout", "high");
createTask ("Meditation", "Meditate for 30 min", "low");
createTask ("Programming", "Finish the programming project", "medium");

createFolder("Fitness Folder");
createFolder("Meditation Folder");
addTaskToFolder(getTasks()[2], getFolders()[0].tasks)


console.log(getTasks());
console.log(getFolders());

displayFolders(getFolders());
displayTasks(getTasks());

changeTaskFolder (getTasks()[2], getFolders()[0].tasks, getFolders()[1].tasks)

console.log(getFolders());

changePriority(getTasks()[2], "low");

console.log(getTasks());

document.addEventListener("DOMContentLoaded", () => {
    openTaskModal();
});

document.addEventListener("DOMContentLoaded", () => {
    closeTaskModal();
});

