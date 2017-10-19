import {addAlarm} from './alarmPicker'

import styles from './filePicker.css'

export function createFilePicker () {
  const fileLabel = document.createElement('label')
  fileLabel.setAttribute('for', 'file')
  fileLabel.setAttribute('class', styles.fileLabel)
  fileLabel.innerHTML = 'Pick a file:'

  const filePicker = document.createElement('input')
  filePicker.setAttribute('type', 'file')
  filePicker.setAttribute('id', 'file')
  // Currently only accepting mp3 files!
  filePicker.setAttribute('accept', '.mp3')
  filePicker.setAttribute('class', styles.filePicker)

  filePicker.addEventListener('change', () => {
    const selectedFile = document.getElementById('file').files[0]
    const objectURL = window.URL.createObjectURL(selectedFile)
    addAlarm(objectURL, selectedFile.name)
  })

  return [fileLabel, filePicker]
}
