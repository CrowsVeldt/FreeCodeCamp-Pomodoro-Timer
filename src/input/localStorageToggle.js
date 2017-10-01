'use strict'

import {storageAvailable} from './storageHandler'

export function createStorageToggle () {
  const storageToggleLabel = document.createElement('label')
  storageToggleLabel.setAttribute('for', 'storageToggle')
  storageToggleLabel.innerHTML = 'Do you want to save your settings locally?'

  const storageToggle = document.createElement('input')
  storageToggle.setAttribute('type', 'checkbox')
  storageToggle.setAttribute('id', 'storageToggle')

  if (storageAvailable('localStorage')) {
    console.log('available')
  } else {
    console.log('not available')
    storageToggle.disabled = 'disabled'
    storageToggle.indeterminate = true
  }

  storageToggleLabel.appendChild(storageToggle)

  return storageToggleLabel
}
