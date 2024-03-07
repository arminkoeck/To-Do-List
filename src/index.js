
import './style.css';

import addNewTask from "./taskManager.js";
import { getTasks, removeTaskFromArray, removeTaskFromFolders, addTaskToFolder, changePriority, createTask, getFolderTasks, getTaskFolder, changeFolder } from './taskManager.js';
import addNewFolder from "./folderManager.js";
import { getFolders, createFolder, removeFolderFromArray, createFolderFormOptions } from "./folderManager.js";
import { displayFolders, displayTasks, openModal, closeModal, closeModalByClick, resetModal, clearTasks, clearFolders, getSidebarEffects, activateAllTaskFolder } from "./domFunctions.js";



createTask ("Fitness", "Do a workout", "high", new Date ("August 12, 2024"));
addTaskToFolder(1, 1)
createTask ("Meditation", "Meditate for 30 min", "low", new Date ("January 2, 2025"));
addTaskToFolder(2, 2)
createTask ("Programming", "Finish the programming project", "medium", new Date ("March 3, 2026"));
addTaskToFolder(3, 2)

createFolder("Fitness");
createFolder("Meditation");


displayFolders(getFolders());
console.log(getFolders());
displayTasks(getTasks());
console.log(getTasks());

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".open-task-modal").addEventListener("click", () => {
        createFolderFormOptions("#form-folders");
    });
    openModal(".open-task-modal", ".task-modal");
    openModal(".open-folder-modal", ".folder-modal");
    closeModalByClick(".close-task-modal", ".task-modal", ".task-form");
    closeModalByClick(".close-folder-modal", ".folder-modal", ".folder-form");
    getSidebarEffects();
    addSidebarFolderLogic();
    activateAllTaskFolder();
});


taskForm.onsubmit = (e) => {
    addNewTask(e);
    closeModal(".task-modal");
    resetModal(".task-form");
    clearTasks();
    displayCurrentFolder();
    console.log(getTasks());
};

folderForm.onsubmit = (e) => {
    addNewFolder(e);
    closeModal(".folder-modal");
    resetModal(".folder-form");
    clearFolders();
    displayFolders(getFolders());
    getSidebarEffects ();
    addSidebarFolderLogic();
    console.log(getFolders());
};


document.addEventListener("changeFolder", function(event) {
    const taskId = event.detail.taskId;
    const oldFolder = getFolders().filter((folder) => getTaskFolder(parseInt(taskId)) === folder.id)
    let folderName = "";
    if (Array.isArray(oldFolder) && oldFolder.length > 0 && typeof oldFolder[0] === 'object') {
        folderName = oldFolder[0].name
    } else {
        folderName = "None"
    };
    createFolderFormOptions("#change-folder");
    const modal = document.querySelector(".change-folder-modal");
    const currentFolder = document.createElement("div");
    currentFolder.textContent = "Current Folder: " + folderName;
    modal.appendChild(currentFolder);
    modal.showModal();
    closeModalByClick (".close-change-folder-modal", ".change-folder-modal", ".change-folder-form")
    const closeButton = document.querySelector(".close-change-folder-modal")
    closeButton.addEventListener("click", () => modal.removeChild(currentFolder));
    changeFolderForm.onsubmit = (e) => {
        const folderId = changeFolder(e);
        console.log(getTaskFolder(parseInt(taskId)))
        addTaskToFolder (parseInt(taskId), parseInt(folderId));
        console.log(getTaskFolder(parseInt(taskId)))
        modal.close();
        modal.removeChild(currentFolder);
        resetModal(".change-folder-form");
        clearTasks();
        displayCurrentFolder();
    };
});


document.addEventListener("taskDelete", function(event) {
    const taskId = event.detail.taskId;
    removeTaskFromArray(taskId);
    clearTasks();
    displayCurrentFolder();
    console.log(getTasks());
    console.log(getFolders());
})

function displayCurrentFolder () {
    const activeTask = document.querySelector(".active-sidebar-item")
    const activeTaskId = activeTask.dataset.folderId;
    if (parseInt(activeTaskId) !== parseInt(0)) {
        displayTasks(getFolderTasks(getTasks(), activeTaskId));
    } else {
        displayTasks(getTasks());
    };
}


document.addEventListener("folderDelete", function(event) {
    const confirmed = confirm("Are you sure you want to delete this folder?");
    if (confirmed) {
        const folderId = event.detail.folderId
        removeFolderFromArray(folderId);
        clearFolders();
        displayFolders(getFolders());
        getSidebarEffects();
        addSidebarFolderLogic();
        activateAllTaskFolder();
    } else {
        return;
    };
});

function addSidebarFolderLogic () {
    const folders = document.querySelectorAll(".folder-item");
    folders.forEach((folder) => {
        folder.addEventListener("click", () => {
            const folderId = folder.dataset.folderId;
            clearTasks();
            displayTasks(getFolderTasks(getTasks(), folderId));
        });
    });
}


const allTasksFolder = document.querySelector("#all-task-folder");
allTasksFolder.addEventListener("click", () => {
    clearTasks();
    displayTasks(getTasks());
});


// check if dueDate has the same Week, Month or NextMonth as the current Date
// add task display options when Time Folders are clicked
// Refresh Folders, when time folders are clicked
// change dueDate



