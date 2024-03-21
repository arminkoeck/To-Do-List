

let taskArray = [];
let taskFolderMap = new Map();

export function getMap () {
    return taskFolderMap;
}

export function getLocalMap() {
    const storageMap = localStorage.getItem("taskMap");
    if (storageMap) {
        const savedMap = new Map(JSON.parse(storageMap));
        taskFolderMap = savedMap;
    } else {
        setLocalMap();
    }
}

export function setLocalMap() {
    localStorage.setItem("taskMap", JSON.stringify([...taskFolderMap]));
}


function convertDatesToString(tasks) {
    return tasks.map(task => ({
        ...task,
        deadline: task.deadline.toISOString()
    }));
}

function convertStringsToDateObjects(tasks) {
    return tasks.map(task => ({
        ...task,
        deadline: new Date(task.deadline)
    }));
}


export function setLocalTasks() {
    const stringTasks = convertDatesToString(taskArray);
    localStorage.setItem("Tasks", JSON.stringify(stringTasks));
}


export function getLocalTasks() {
    const storageTasks = JSON.parse(localStorage.getItem("Tasks"));
    if (storageTasks) {
        taskArray = convertStringsToDateObjects(storageTasks);
    } else {
        setLocalTasks();
    }
}

export function setLocalNextTaskId() {
    localStorage.setItem("NextTaskId", JSON.stringify(nextTaskId));
}

export function getLocalNextTaskId() {
    const storageNextTaskId = JSON.parse(localStorage.getItem("NextTaskId"));
    if (storageNextTaskId) {
        nextTaskId = storageNextTaskId
    } else {
        setLocalNextTaskId();
    }
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

export function addNewTask(e) {
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

