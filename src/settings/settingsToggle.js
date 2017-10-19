import styles from './settingsToggle.css'

import {toggleSettingsMenu} from './settingsMenu.js'

export function createSettingsToggle () {
  const settingsToggle = document.createElement('button')
  settingsToggle.innerHTML = '< < <'
  settingsToggle.setAttribute('id', 'settingsToggle')
  settingsToggle.classList.add(styles.settingsToggle)

  settingsToggle.addEventListener('click', (event) => {
    event.stopPropagation()
    toggleSettingsMenu()
  })

  return settingsToggle
}
