

const taskArray = [];

function addTaskToArray (task) {
    taskArray.unshift(task);
};

export function getTasks () {
    return taskArray;
}

export function removeTaskFromArray (task) {
    const index = taskArray.indexOf(task);
    if (index !== -1) {
        taskArray.splice(index, 1);
    }
}

export default function createTask (name, description, priority) {
    const newTask = { name, description, priority };
    addTaskToArray(newTask);
};


// sollte nicht exportiert werden, sondern nur changeTaskFolder, damit man ein To-Do nicht in mehrere Folder geben kann.
// -> man müsste gleich bei der Erstellung des Tasks einen Ordner zuweisen. Was wenn man das nicht möchte oder keinen Ordner hat?
// -> man bräuchte einen allgemeinen Ordner, wo Tasks von Grund auf drinnen sind, der darf dann aber nicht löschbar sein -> Umsetzung recherchieren
// -> Vor dem Löschen eines Arrays soll getestet werden, ob es der Standard Array ist. Dieser sollte nicht gelöscht werden können
// -> Falls ein Array gelöscht wird, werden alle Objekte zu dem Standard Array umgeleitet.
// -> Werden Tasks neu erstellt, sollten sie auch dem Standard Array zugeordnet werden. (Folder könnte "General" heißen)

export function addTaskToFolder (task, folder) {
    folder.unshift(task);
};


function removeTaskFromFolder (task, folder) {
    const index = folder.indexOf(task);
    if (index !== -1) {
        folder.splice(index, 1);
    }
}

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

