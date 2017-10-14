import styles from './settingsMenuToggle.css'

import {toggleSettingsMenu} from './settingsMenu.js'

export function createSettingsToggle () {
  const settingsToggle = document.createElement('button')
  settingsToggle.innerHTML = '< < <'
  settingsToggle.setAttribute('id', 'settingsToggle')
  settingsToggle.classList.add(styles.settingsToggle)

  settingsToggle.addEventListener('click', () => {
    const settings = window.getComputedStyle(document.getElementById('settingsMenu')).getPropertyValue('visibility')

    if (settings === 'visible') {
      toggleSettingsMenu('hide')
    } else if (settings === 'hidden') {
      toggleSettingsMenu('show')
    }
  })

  return settingsToggle
}
