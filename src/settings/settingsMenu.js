import styles from './settingsMenu.css'

import {state} from '../state'

import {createSettingsSection} from './settingsSection'

import {createTickToggle} from './tickToggle'

import {createAlarmPicker} from './alarmPicker'

import {createTimeInput} from './timeInput'

import {createStorageToggle} from './localStorageToggle'

import {createFilePicker} from './filePicker'

export function createSettingsMenu () {
  const settingsMenu = document.createElement('div')
  settingsMenu.setAttribute('id', 'settingsMenu')
  settingsMenu.classList.add(styles.settingsMenu, styles.hidden)

  settingsMenu.addEventListener('click', function (event) {
    event.stopPropagation()
  })

  const timeInputs = state.activities.map(createTimeInput)

  settingsMenu.appendChild((createSettingsSection('Time Settings', timeInputs[0], timeInputs[1], timeInputs[2])))
  settingsMenu.appendChild(createSettingsSection('Alarm Settings', createAlarmPicker(), createFilePicker()))
  settingsMenu.appendChild(createSettingsSection('Audio Settings', createTickToggle()))
  settingsMenu.appendChild(createSettingsSection('Storage Settings', createStorageToggle()))

  return settingsMenu
}

export function toggleSettingsMenu () {
  document.getElementById('settingsMenu').classList.toggle(styles.hidden)
  state.settingsMenuOpen = !state.settingsMenuOpen

  document.querySelectorAll('DIV:not(.settingsMenu)').forEach(node => {
    node.classList.toggle(styles.settingsOpen)
  })
}
