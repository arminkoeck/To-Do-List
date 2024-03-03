

const folderArray = [];

function addFolderToArray (folder) {
    folderArray.push(folder);
};

export function getFolders () {
    return folderArray;
}

export function removeFolder (folder) {
    const index = folderArray.indexOf(folder);
    if (index !== -1) {
        folderArray.splice(index, 1);
    };
};

// export default function createFolder (name) {
//     const newFolder = { name, tasks: [] }
//     addFolderToArray(newFolder);
// };

let nextFolderId = 1;

export default function createFolder (name) {
    const newFolder = { name, id: nextFolderId++ }
    addFolderToArray(newFolder);
};


function getFolderFormOptions () {
    const optionContainer = document.querySelector("#form-folders");
    folderArray.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option.name;
        optionElement.value = option.id;
        optionContainer.appendChild(optionElement);
    });
}

function clearFolderFormOptions () {
    const optionContainer = document.querySelector("#form-folders");
    optionContainer.textContent = "";
    const noneOption = document.createElement("option");
    noneOption.textContent = "None";
    noneOption.value = "None";
    optionContainer.appendChild(noneOption);
}

const modalOpenButton = document.querySelector(".open-task-modal")
modalOpenButton.addEventListener("click", () => {
    clearFolderFormOptions();
    getFolderFormOptions();
});
