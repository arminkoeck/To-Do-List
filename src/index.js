
import './style.css';

import { addNewTask, getTasks, removeTaskFromArray, removeTaskFromFolders, addTaskToFolder, changePriority, createTask, getFolderTasks,
         getTaskFolder, changeFolder, setLocalMap, getLocalMap, getLocalTasks, setLocalTasks, getLocalNextTaskId, setLocalNextTaskId } from './taskManager.js';
import { addNewFolder, getFolders, createFolder, removeFolderFromArray, createFolderFormOptions, getTimeFolders, setLocalFolders,
         getLocalFolders, getLocalNextFolderId, setLocalNextFolderId } from "./folderManager.js";
import { displayFolders, displayTasks, openModal, closeModal, closeModalByClick, resetModal, clearTasks, clearFolders, getSidebarEffects,
         activateAllTaskFolder, getDateValues, getDateValuesInNumbers, getWeek } from "./domFunctions.js";


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".open-task-modal").addEventListener("click", () => {
        createFolderFormOptions("#form-folders");
    });
    getLocalMap();
    getLocalTasks();
    getLocalFolders();
    getLocalNextFolderId();
    getLocalNextTaskId();
    openModal(".open-task-modal", ".task-modal");
    openModal(".open-folder-modal", ".folder-modal");
    closeModalByClick(".close-task-modal", ".task-modal", ".task-form");
    closeModalByClick(".close-folder-modal", ".folder-modal", ".folder-form");
    displayFolders(getFolders());
    displayTasks(getTasks());
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
    setLocalStorage()
};

folderForm.onsubmit = (e) => {
    addNewFolder(e);
    closeModal(".folder-modal");
    resetModal(".folder-form");
    clearFolders();
    displayFolders(getFolders());
    getSidebarEffects ();
    addSidebarFolderLogic();
    setLocalStorage()
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
    const currentFolder = document.querySelector("#current-folder");
    currentFolder.textContent = "Current Folder: " + folderName;
    modal.showModal();
    closeModalByClick (".close-change-folder-modal", ".change-folder-modal", ".change-folder-form")
    const closeButton = document.querySelector(".close-change-folder-modal")
    closeButton.addEventListener("click", () => currentFolder.textContent = "");
    changeFolderForm.onsubmit = (e) => {
        const folderId = changeFolder(e);
        addTaskToFolder (parseInt(taskId), parseInt(folderId));
        modal.close();
        currentFolder.textContent = "";
        resetModal(".change-folder-form");
        clearTasks();
        displayCurrentFolder();
        setLocalStorage()
    };
});



document.addEventListener("changeDeadline", function(event) {
    const taskId = event.detail.taskId;
    const currentTask = getTasks().filter((task) => parseInt(taskId) === parseInt(task.id));
    const currentDeadlineDateValues = getDateValues(currentTask[0].deadline);
    const modal = document.querySelector(".change-deadline-modal");
    const currentDeadlineContainer = document.querySelector("#current-deadline");
    currentDeadlineContainer.textContent = "Current Deadline: " + currentDeadlineDateValues[0] + ". " + currentDeadlineDateValues[1] + ", " + currentDeadlineDateValues[2];
    modal.showModal();
    closeModalByClick (".close-change-deadline-modal", ".change-deadline-modal", ".change-deadline-form")
    const closeButton = document.querySelector(".close-change-deadline-modal")
    closeButton.addEventListener("click", () => currentDeadlineContainer.textContent = "");
    changeDeadlineForm.onsubmit = (e) => {
        e.preventDefault();
        const newDeadline = new Date(document.querySelector("#change-deadline").value);
        currentTask[0].deadline = newDeadline;
        modal.close();
        currentDeadlineContainer.textContent = "";
        resetModal(".change-deadline-form");
        clearTasks();
        displayCurrentFolder();
        setLocalStorage()
    };
});


document.addEventListener("taskDelete", function(event) {
    const taskId = event.detail.taskId;
    removeTaskFromArray(taskId);
    clearTasks();
    displayCurrentFolder();
    setLocalStorage()
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
    setLocalStorage()
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


const myDayFolder = document.querySelector("#my-day-folder");
myDayFolder.addEventListener("click", () => {
    clearTasks();
    getMyDayTasks(getTasks());
});

const myWeekFolder = document.querySelector("#my-week-folder");
myWeekFolder.addEventListener("click", () => {
    clearTasks();
    getMyWeekTasks(getTasks());
});

const myMonthFolder = document.querySelector("#my-month-folder");
myMonthFolder.addEventListener("click", () => {
    clearTasks();
    getMyMonthTasks(getTasks());
});

const nextMonthFolder = document.querySelector("#next-month-folder");
nextMonthFolder.addEventListener("click", () => {
    clearTasks();
    getNextMonthTasks(getTasks());
});

const longtermFolder = document.querySelector("#longterm-folder");
longtermFolder.addEventListener("click", () => {
    clearTasks();
    getLongtermTasks(getTasks());
});

const overdueFolder = document.querySelector("#overdue-folder");
overdueFolder.addEventListener("click", () => {
    clearTasks();
    getOverdueTasks(getTasks());
});


export function getMyDayTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        return JSON.stringify(getDateValuesInNumbers(task.deadline)) === JSON.stringify(getDateValuesInNumbers(new Date()));
    })
    displayTasks(filteredTasks);
};


export function getMyWeekTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        return getWeek(task.deadline) == getWeek(new Date());
    })
    displayTasks(filteredTasks);  
};


export function getMyMonthTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        return (JSON.stringify(getDateValues(task.deadline)[1]) === JSON.stringify(getDateValues(new Date())[1]) &&
                JSON.stringify(getDateValues(task.deadline)[2]) === JSON.stringify(getDateValues(new Date())[2]));
    })
    displayTasks(filteredTasks);
};


export function getNextMonthTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        const [deadlineDay, deadlineMonth, deadlineYear] = getDateValuesInNumbers(task.deadline);
        const [currentDay, currentMonth, currentYear] = getDateValuesInNumbers(new Date());
        return  (deadlineMonth === currentMonth + 1 && deadlineYear === currentYear) ||
                (deadlineMonth === currentMonth - 11 && deadlineYear === currentYear + 1);
    });
    displayTasks(filteredTasks);
};


export function getLongtermTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        const [deadlineDay, deadlineMonth, deadlineYear] = getDateValuesInNumbers(task.deadline);
        const [currentDay, currentMonth, currentYear] = getDateValuesInNumbers(new Date());
        return  (deadlineYear > currentYear + 1) ||
                (deadlineYear > currentYear && !(deadlineMonth == 0 && currentMonth == 11)) ||
                (deadlineYear == currentYear && deadlineMonth > currentMonth + 1 )
    });
    displayTasks(filteredTasks);
};


export function getOverdueTasks (allTasks) {
    const filteredTasks = allTasks.filter((task) => {
        const [deadlineDay, deadlineMonth, deadlineYear] = getDateValuesInNumbers(task.deadline);
        const [currentDay, currentMonth, currentYear] = getDateValuesInNumbers(new Date());
        return  (deadlineYear < currentYear) ||
                (deadlineYear == currentYear && deadlineMonth < currentMonth) ||
                (deadlineYear == currentYear && deadlineMonth == currentMonth && deadlineDay < currentDay)
    });
    displayTasks(filteredTasks);
};


function setLocalStorage() {
    setLocalTasks();
    setLocalFolders();
    setLocalMap();
    setLocalNextFolderId();
    setLocalNextTaskId();
};








