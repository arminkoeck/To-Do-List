

const folderArray = [];

function addFolderToArray (folder) {
    folderArray.push(folder);
};

function getFolders () {
    return folderArray;
}

function removeFolder (folder) {
    const index = folderArray.indexOf(folder);
    if (index !== -1) {
        folderArray.splice(index, 1);
    };
};

export default function createFolder (name) {
    const newFolder = { name, tasks: [] }
    addFolderToArray(newFolder);
};


export { getFolders, removeFolder };