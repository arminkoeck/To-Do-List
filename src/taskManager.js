

let taskArray = [];
const taskFolderMap = new Map();

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
export function removeTaskFromFolders(taskId, folders) {
    folders.forEach((folder) => {
        folder.tasks = folder.tasks.filter((task) => task.id !== parseInt(taskId));
    });
};

let nextTaskId = 1;

export default function createTask (name, description, priority) {
    const newTask = { name, description, priority, id: nextTaskId++};
    addTaskToArray(newTask);
};


export function addNewTask(e) {
    e.preventDefault();
    let valueArray = []
    let data = new FormData(taskForm)
    for (let v of data) {
        valueArray.push(v[1])
    };
    createTask(...valueArray);
};



// export function addTaskToFolder (task, folder) {
//     folder.unshift(task);
// };


export function changeTaskFolder (task, oldFolder, newFolder) {
    removeTaskFromFolder(task, oldFolder);
    addTaskToFolder(task, newFolder);
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

