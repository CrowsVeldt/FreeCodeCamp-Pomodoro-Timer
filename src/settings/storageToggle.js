import styles from './storageToggle.css'

export function createStorageToggle () {
  const storageToggleLabel = document.createElement('label')
  storageToggleLabel.setAttribute('for', 'storageToggle')
  storageToggleLabel.innerHTML = 'Save settings locally?'

  const storageToggle = document.createElement('input')
  storageToggle.setAttribute('type', 'checkbox')
  storageToggle.setAttribute('id', 'storageToggle')
  storageToggleLabel.setAttribute('class', styles.storageToggle)

  const storageToggleSpan = document.createElement('span')
  storageToggleSpan.setAttribute('class', styles.slider, styles.round)

  storageToggle.addEventListener('change', () => {
    // make this an actual 'toggle', that moves back and forth
    // if it is 'on' save settings
    // else clear them
  })

  return [storageToggleLabel, storageToggle, storageToggleSpan]
}
