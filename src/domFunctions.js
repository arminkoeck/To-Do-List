
export function displayFolders (array) {
    const container = document.querySelector(".sidebar-list")
    array.forEach((folder) => {
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = folder.name;
        listItem.appendChild(span);
        container.appendChild(listItem);
    });
};

export function displayTasks (array) {
    const container = document.querySelector(".task-container")
    array.forEach((task) => {
        const background = document.createElement("div");
        background.classList.add("task-background")

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        const priority = document.createElement("div");
        priority.classList.add("task-priority");
        if (task.priority === "low") {
            priority.classList.add("low-priority")
        } else if (task.priority === "medium") {
            priority.classList.add("medium-priority")
        } else if (task.priority === "high") {
            priority.classList.add("high-priority");
        };

        const taskName = document.createElement("h3");
        taskName.textContent = task.name;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "x";
        deleteButton.classList.add("delete-button");
        deleteButton.setAttribute('data-task-id', task.id);
        deleteButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const deleteEvent = new CustomEvent("taskDelete", {detail: {taskId}})
            document.dispatchEvent(deleteEvent);
        });


        const description = document.createElement("p")
        description.textContent = task.description;

        container.appendChild(background);
        background.appendChild(priority);
        background.appendChild(taskContent);
        priority.appendChild(taskName);
        priority.appendChild(deleteButton);
        taskContent.appendChild(description);
    });
};



// For folders, check if each folder has an item, that doesnt occur in the "All items Array". If there is one delete it.
// Also give each task a folder value. If the folder value changes, move task to other folder. If its assigned first to a folder, add it to this folder.


export function openTaskModal () {
    const modalOpenButton = document.querySelector(".open-task-modal")
    const modal = document.querySelector(".task-modal");
    modalOpenButton.addEventListener("click", () => modal.showModal())
};


export function closeTaskModalByClick () {
    const modalCloseButton = document.querySelector(".close-task-modal")
    const modal = document.querySelector(".task-modal");
    modalCloseButton.addEventListener("click", () => modal.close());
};

export function closeTaskModal () {
    document.querySelector(".task-modal").close();
}

export function resetTaskModal () {
    document.querySelector(".task-form").reset();
}

export function clearTasks () {
    document.querySelector(".task-container").textContent = "";
}



