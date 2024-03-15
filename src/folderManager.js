

let folderArray = [];
let timeFolderArray = [{name: "My Day", id: 1}, {name: "My Week", id: 2}, {name: "My Month", id: 3}, {name: "Next Month", id: 4}, {name: "Longterm", id: 5}, {name: "Longterm", id: 6}];

function addFolderToArray (folder) {
    folderArray.push(folder);
};

export function getFolders () {
    return folderArray;
}

export function getTimeFolders () {
    return timeFolderArray;
}


export function removeFolderFromArray (folderId) {
    folderArray = folderArray.filter((folder) => folder.id !== parseInt(folderId))
}


let nextFolderId = 7;

export function createFolder (name) {
    const newFolder = { name, id: nextFolderId++ }
    addFolderToArray(newFolder);
};

export default function addNewFolder (e) {
    e.preventDefault();
    const name = document.querySelector("#folder-name").value;
    createFolder(name);
};


function getFolderFormOptions (formId) {
    const optionContainer = document.querySelector(formId);
    folderArray.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option.name;
        optionElement.value = option.id;
        optionContainer.appendChild(optionElement);
    });
}

function clearFolderFormOptions (formId) {
    const optionContainer = document.querySelector(formId);
    optionContainer.textContent = "";
    const noneOption = document.createElement("option");
    noneOption.textContent = "None";
    noneOption.value = "None";
    optionContainer.appendChild(noneOption);
}


export function createFolderFormOptions (formId) {
    clearFolderFormOptions(formId);
    getFolderFormOptions(formId);
};



