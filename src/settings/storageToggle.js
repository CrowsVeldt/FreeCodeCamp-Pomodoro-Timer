import styles from './storageToggle.css'

export function createStorageToggle () {
  const storageToggleLabel = document.createElement('label')
  storageToggleLabel.setAttribute('for', 'storageToggle')
  storageToggleLabel.innerHTML = 'Save settings locally?'

  const toggleContainer = document.createElement('div')
  toggleContainer.setAttribute('id', 'toggleContainer')
  toggleContainer.setAttribute('class', styles.toggleContainer)

  const storageToggle = document.createElement('input')
  storageToggle.setAttribute('type', 'checkbox')
  storageToggle.setAttribute('id', 'storageToggle')
  storageToggle.setAttribute('class', styles.storageToggle)

  const storageToggleSpan = document.createElement('span')
  storageToggleSpan.setAttribute('class', styles.slider)

  toggleContainer.appendChild(storageToggle)
  toggleContainer.appendChild(storageToggleSpan)
  storageToggleLabel.appendChild(toggleContainer)

  storageToggle.addEventListener('change', () => {
    // if 'checked' save settings
    // else clear them
  })

  return [storageToggleLabel]
}
