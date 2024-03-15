
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

        const deadlineContainer = document.createElement("div");
        deadlineContainer.classList.add("deadline-container");


        const deadlineDateContainer = document.createElement("span");
        const deadlineDate = getDateValues(task.deadline);
        deadlineDateContainer.textContent = "Deadline: " + deadlineDate[0] + ". " + deadlineDate[1] + ", " + deadlineDate[2] + " | ";

        const weekNumber = document.createElement("span");
        weekNumber.textContent = "CW: " + getWeek(task.deadline);
        weekNumber.classList.add("week-number");

        const changeFolderButton = document.createElement("button");
        changeFolderButton.textContent = "Change Folder";
        changeFolderButton.classList.add("change-folder-button");
        changeFolderButton.setAttribute('data-task-id', task.id);
        changeFolderButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const changeFolderEvent = new CustomEvent("changeFolder", {detail: {taskId}})
            document.dispatchEvent(changeFolderEvent);
        });

        const changeDeadlineButton = document.createElement("button");
        changeDeadlineButton.textContent = "Change Deadline";
        changeDeadlineButton.classList.add("change-deadline-button");
        changeDeadlineButton.setAttribute('data-task-id', task.id);
        changeDeadlineButton.addEventListener("click", function () {
            const taskId = this.dataset.taskId;
            const changeDeadlineButton = new CustomEvent("changeDeadline", {detail: {taskId}})
            document.dispatchEvent(changeDeadlineButton);
        });



        container.appendChild(background);
        background.appendChild(priority);
        background.appendChild(taskContent);
        priority.appendChild(taskName);
        priority.appendChild(taskDeleteButton);
        deadlineContainer.appendChild(deadlineDateContainer);
        deadlineContainer.appendChild(weekNumber);
        taskContent.appendChild(description);
        taskContent.appendChild(deadlineContainer);
        taskContent.appendChild(changeFolderButton);
        taskContent.appendChild(changeDeadlineButton);
    });
};

// shouldnt be here?
export function getDateValues (date) {
    const day = date.getDate();
    const month = date.toLocaleString('de-DE', { month: 'long' });
    const year = date.getFullYear();
    return [day, month, year];
}

export function getDateValuesInNumbers (date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return [day, month, year];
}

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

export function getWeek(date) {
    const tempDate = new Date(date.getTime());
    const januaryFourth = new Date(tempDate.getFullYear(), 0, 4);
    const januaryFourthDay = januaryFourth.getDay();
    januaryFourth.setDate(januaryFourth.getDate() - (januaryFourthDay > 0 ? januaryFourthDay - 1 : 6));
    const weekNumber = Math.ceil((((tempDate - januaryFourth) / 86400000) + januaryFourth.getDay() + 1) / 7);
    return weekNumber;
}
