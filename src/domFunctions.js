
export function displayFolders (array) {
    array.forEach((folder) => console.log(folder.name));
};

export function displayTasks (array) {
    array.forEach((task) => console.log(task.name))
};

export function openTaskModal () {
    const modalOpenButton = document.querySelector(".open-task-modal")
    const modal = document.querySelector(".task-modal");
    modalOpenButton.addEventListener("click", () => modal.showModal())
};

export function closeTaskModal () {
    const modalCloseButton = document.querySelector(".close-task-modal")
    const modal = document.querySelector(".task-modal");
    modalCloseButton.addEventListener("click", () => modal.close())
};


