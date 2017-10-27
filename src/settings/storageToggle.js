import {storageAvailable} from '../storage.js'

export function createStorageToggle () {
  const storageToggleLabel = document.createElement('label')
  storageToggleLabel.setAttribute('for', 'storageToggle')
  storageToggleLabel.innerHTML = 'Save settings locally?'

  const storageToggle = document.createElement('input')
  storageToggle.setAttribute('type', 'checkbox')
  storageToggle.setAttribute('id', 'storageToggle')

  storageToggle.addEventListener('change', () => {
    // populateStorage()
  })

  if (!storageAvailable('localStorage')) {
    storageToggle.disabled = 'disabled'
    storageToggle.indeterminate = true
  }

  return [storageToggleLabel, storageToggle]
}
