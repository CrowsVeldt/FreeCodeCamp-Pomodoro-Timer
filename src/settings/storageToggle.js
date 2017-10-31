export function createStorageToggle () {
  const storageToggleLabel = document.createElement('label')
  storageToggleLabel.setAttribute('for', 'storageToggle')
  storageToggleLabel.innerHTML = 'Save settings locally?'

  const storageToggle = document.createElement('input')
  storageToggle.setAttribute('type', 'checkbox')
  storageToggle.setAttribute('id', 'storageToggle')

  storageToggle.addEventListener('change', () => {
    // make this an actual 'toggle', that moves back and forth
    // if it is 'on' save settings
    // else clear them
  })

  return [storageToggleLabel, storageToggle]
}
