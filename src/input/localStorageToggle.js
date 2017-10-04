'use strict'

import {storageAvailable, populateStorage} from './storageHandler'

export function createStorageToggle () {
  const storageToggleLabel = document.createElement('label')
  storageToggleLabel.setAttribute('for', 'storageToggle')
  storageToggleLabel.innerHTML = 'Save settings locally?'

  const storageToggle = document.createElement('input')
  storageToggle.setAttribute('type', 'checkbox')
  storageToggle.setAttribute('id', 'storageToggle')
  storageToggle.addEventListener('change', function () {
    populateStorage()
  })

  if (storageAvailable('localStorage')) {
    // ask user if they want to save their settings
  } else {
    storageToggle.disabled = 'disabled'
    storageToggle.indeterminate = true
  }

  storageToggleLabel.appendChild(storageToggle)

  return storageToggleLabel
}
