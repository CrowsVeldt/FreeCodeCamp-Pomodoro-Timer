import styles from './settingsMenu.css'

import {state} from '../state'

import {createTickToggle} from './tickToggle'

import {createAlarmPicker} from './alarmPicker'

import {createTimeInputs} from './timeInput'

import {createStorageToggle} from './localStorageToggle'

import {createFilePicker} from './filePicker'

export function createSettingsMenu () {
  const settingsMenu = document.createElement('div')
  settingsMenu.setAttribute('id', 'settingsMenu')
  settingsMenu.classList.add(styles.settingsMenu, styles.hidden)

  settingsMenu.addEventListener('click', function (event) {
    event.stopPropagation()
  })

  createTimeInputs().map(item => {
    settingsMenu.appendChild(item)
  })

  settingsMenu.appendChild(createAlarmPicker())
  settingsMenu.appendChild(createFilePicker())
  settingsMenu.appendChild(createTickToggle())
  settingsMenu.appendChild(createStorageToggle())
  return settingsMenu
}

export function toggleSettingsMenu () {
  document.getElementById('settingsMenu').classList.toggle(styles.hidden)
  state.settingsMenuOpen = !state.settingsMenuOpen

  document.querySelectorAll('DIV:not(.settingsMenu)').forEach(node => {
    node.classList.toggle(styles.settingsOpen)
  })
}
