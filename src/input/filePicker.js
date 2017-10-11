export function createFilePicker () {
  const fileLabel = document.createElement('label')
  fileLabel.setAttribute('for', 'file')
  fileLabel.innerHTML = 'Pick a file:'

  const filePicker = document.createElement('input')
  filePicker.setAttribute('type', 'file')
  filePicker.setAttribute('id', 'file')

  fileLabel.appendChild(filePicker)

  fileLabel.addEventListener('change', function () {
    // console.log(document.getElementById('file').files[0])
  })

  return fileLabel
}
