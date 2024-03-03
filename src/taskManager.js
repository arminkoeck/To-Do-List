

let taskArray = [];
const taskFolderMap = new Map();

// Eigenes file für die Map Funktionen? Oder zwischen file für die task & folder funktionen
// export function getMap() {
//     return taskFolderMap
// }

// also changes the task Array
function addTaskToArray (task) {
    taskArray.unshift(task);
};

export function getTasks () {
    return taskArray;
}

export function removeTaskFromArray (taskId) {
    taskArray = taskArray.filter((task) => task.id !== parseInt(taskId));
}


// nicht ideal. wenn ich .tasks im folderManager umbenenne, funktioniert der Code hier nicht mehr
// export function removeTaskFromFolders(taskId, folders) {
//     folders.forEach((folder) => {
//         folder.tasks = folder.tasks.filter((task) => task.id !== parseInt(taskId));
//     });
// };

let nextTaskId = 1;


export function addTaskToFolder (taskId, folderId) {
    taskFolderMap.set(taskId, folderId)
}

export function removeTaskFromFolder (taskId) {
    taskFolderMap.delete(taskId)
}

export function createTask (name, description, priority, folderId) {
    const newTask = { name, description, priority, id: nextTaskId++};
    addTaskToArray(newTask);
    console.log(newTask.id)
    console.log(folderId);
    addTaskToFolder(newTask.id, folderId)
};

export default function addNewTask(e) {
    e.preventDefault();
    const name = document.querySelector("#task-name").value;
    const description = document.querySelector("#task-description").value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const folderId = document.querySelector("#form-folders").value;
    createTask(name, description, priority, folderId);
};


export function getFolderTasks(allTasksArray, folderId) {
    return allTasksArray.filter(task => parseInt(taskFolderMap.get(task.id)) === parseInt(folderId));
};


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

