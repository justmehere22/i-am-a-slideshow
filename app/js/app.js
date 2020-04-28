
// const { dialog } = require('electron')
// console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))

const addPhotoButton = document.getElementById('add-photo-button');

addPhotoButton.addEventListener('click', addPhotoHandler);

function addPhotoHandler() {
    dialog.showOpenDialog(mainWindow, {
        properties: ['openFile', 'openDirectory']
      }).then(result => {
        console.log(result.canceled)
        console.log(result.filePaths)
      }).catch(err => {
        console.log(err)
      })
    }



