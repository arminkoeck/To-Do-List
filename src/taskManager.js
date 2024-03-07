

let taskArray = [];
const taskFolderMap = new Map();

export function getMap () {
    return taskFolderMap;
}

function addTaskToArray (task) {
    taskArray.unshift(task);
};

export function getTasks () {
    return taskArray;
}

export function removeTaskFromArray (taskId) {
    taskArray = taskArray.filter((task) => task.id !== parseInt(taskId));
}

let nextTaskId = 1;

// can also be used to change the folder
export function addTaskToFolder (taskId, folderId) {
    taskFolderMap.set(taskId, folderId)
}

export function removeTaskFromFolder (taskId) {
    taskFolderMap.delete(taskId)
}



export function createTask (name, description, priority, deadline, folderId) {
    const newTask = { name, description, priority, deadline, id: nextTaskId++};
    addTaskToArray(newTask);
    addTaskToFolder(newTask.id, folderId)
};

export default function addNewTask(e) {
    e.preventDefault();
    const name = document.querySelector("#task-name").value;
    const description = document.querySelector("#task-description").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const folderId = document.querySelector("#form-folders").value;
    const deadline = new Date(document.querySelector("#task-deadline").value);
    createTask(name, description, priority, deadline, folderId);
};

export function changeFolder(e) {
    e.preventDefault();
    const folderId = document.querySelector("#change-folder").value;
    return folderId;
}



export function getFolderTasks(allTasksArray, folderId) {
    return allTasksArray.filter(task => parseInt(taskFolderMap.get(task.id)) === parseInt(folderId));
};

export function getTaskFolder (taskId) {
    return taskFolderMap.get(taskId);
}


export function changePriority (task, priority) {
    task.priority = priority;
}


// function sortTasksByDate () {
    // array.sort(function(a,b){
    //     // Turn your strings into dates, and then subtract them
    //     // to get a value that is either negative, positive, or zero.
    //     return new Date(b.date) - new Date(a.date);
    //   });
// }

// function sortTasksByPriority () {
    
// }

