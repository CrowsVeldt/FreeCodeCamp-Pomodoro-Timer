import {addAlarm} from './alarmPicker'

export function createFilePicker () {
  const fileLabel = document.createElement('label')
  fileLabel.setAttribute('for', 'file')
  fileLabel.innerHTML = 'Pick a file:'

  const filePicker = document.createElement('input')
  filePicker.setAttribute('type', 'file')
  filePicker.setAttribute('id', 'file')
  filePicker.setAttribute('accept', 'audio/*')

  fileLabel.appendChild(filePicker)

  filePicker.addEventListener('change', function () {
    // Check the file is a valid audio file here
    const selectedFile = document.getElementById('file').files[0]
    handleFiles(selectedFile, selectedFile.name)
  })

  return fileLabel
}

function handleFiles (file, fileName) {
  const objectURL = window.URL.createObjectURL(file)
  addAlarm(objectURL, fileName)
}
