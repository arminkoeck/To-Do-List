
export function displayFolders (array) {
    const container = document.querySelector("#folder-sidebar-container")
    const folderContainer = document.querySelector(".folder-array-container");
    array.forEach((folder) => {
        const listItem = document.createElement("li");
        listItem.classList.add("folder-item")
        listItem.classList.add("sidebar-list-item")
        listItem.setAttribute('data-folder-id', folder.id);
        
        const span = document.createElement("span");
        span.textContent = folder.name;

        const folderDeleteButton = document.createElement("button");
        folderDeleteButton.textContent = "x";
        folderDeleteButton.classList.add("folder-delete-button");
        folderDeleteButton.setAttribute('data-folder-id', folder.id);
        folderDeleteButton.addEventListener("click", function () {
            const folderId = this.dataset.folderId;
            const deleteEvent = new CustomEvent("folderDelete", {detail: {folderId}})
            document.dispatchEvent(deleteEvent);
        });

        container.appendChild(folderContainer);
        folderContainer.appendChild(listItem);
        listItem.appendChild(span);
        listItem.appendChild(folderDeleteButton);
    });
};

// Need to add a button and a form in the Dom.
// When the button is clicked, the form opens.
// Here you can choose one of the folders (They need to be generated dynamically like in the add Task form)
// Once a folder is chosen and confirmed the task gets reassigned to a new folder
// Refresh all needed display Functions so the Task is shown in the right folder

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

        const taskDeleteButton = document.createElement("button");
        taskDeleteButton.textContent = "x";
        taskDeleteButton.classList.add("task-delete-button");
        taskDeleteButton.setAttribute('data-task-id', task.id);
        taskDeleteButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const deleteEvent = new CustomEvent("taskDelete", {detail: {taskId}})
            document.dispatchEvent(deleteEvent);
        });

        const description = document.createElement("p")
        description.textContent = task.description;

        const deadlineContainer = document.createElement("p");
        const deadlineDay = task.deadline.getDay();
        const deadlineMonth = task.deadline.toLocaleString('de-DE', { month: 'long' });
        const deadlineYear = task.deadline.getFullYear();
        deadlineContainer.textContent = "Deadline: " + deadlineDay + ". " + deadlineMonth + ", " + deadlineYear;

        const changeFolderButton = document.createElement("button");
        changeFolderButton.textContent = "Change Folder";
        changeFolderButton.classList.add("change-folder-button");
        changeFolderButton.setAttribute('data-task-id', task.id);
        changeFolderButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const changeFolderEvent = new CustomEvent("changeFolder", {detail: {taskId}})
            document.dispatchEvent(changeFolderEvent);
        });


        container.appendChild(background);
        background.appendChild(priority);
        background.appendChild(taskContent);
        priority.appendChild(taskName);
        priority.appendChild(taskDeleteButton);
        taskContent.appendChild(description);
        taskContent.appendChild(deadlineContainer);
        taskContent.appendChild(changeFolderButton);
    });
};


export function getSidebarEffects () {
    const sidebarItems = document.querySelectorAll(".sidebar-list-item");
    sidebarItems.forEach((item) => {
        item.addEventListener("click", () => {
        sidebarItems.forEach((item) => item.classList.remove("active-sidebar-item"))
        item.classList.add("active-sidebar-item");
        });
    });
}


export function clearTasks () {
    document.querySelector(".task-container").textContent = "";
}

export function clearFolders () {
    document.querySelector(".folder-array-container").textContent = "";
};


export function openModal (openButtonClass, modalClass) {
    const modalOpenButton = document.querySelector(openButtonClass)
    const modal = document.querySelector(modalClass);
    modalOpenButton.addEventListener("click", () => modal.showModal())
};


export function closeModalByClick (closeButtonClass, modalClass, formClass) {
    const modalCloseButton = document.querySelector(closeButtonClass)
    const modal = document.querySelector(modalClass);
    modalCloseButton.addEventListener("click", () => {
        modal.close();
        resetModal(formClass);
    });
};

export function closeModal (modalClass) {
    document.querySelector(modalClass).close();
}

export function resetModal (formClass) {
    const form = document.querySelector(formClass);
    form.reset();
}

export function activateAllTaskFolder () {
    const allTasksFolder = document.querySelector("#all-task-folder");
    allTasksFolder.classList.add("active-sidebar-item");
}
