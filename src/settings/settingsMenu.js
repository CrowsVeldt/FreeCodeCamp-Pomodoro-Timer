import styles from './settingsMenu.css'

import {state} from '../state'

import {createSettingsSection} from './settingsSection'

import {createTickToggle} from './tickToggle'

import {createAlarmPicker} from './alarmPicker'

import {createTimeInput} from './timeInput'

import {createFilePicker} from './filePicker'

export function createSettingsMenu () {
  const settingsMenu = document.createElement('div')
  settingsMenu.setAttribute('id', 'settingsMenu')
  settingsMenu.classList.add(styles.settingsMenu, styles.hidden)

  settingsMenu.addEventListener('click', event => {
    event.stopPropagation()
  })

  const timeSettings = createSettingsSection('Time Settings',
  createTimeInput(state.activities.pomodoro),
  createTimeInput(state.activities.shortBreak),
  createTimeInput(state.activities.longBreak))

  const alarmSettings = createSettingsSection('Alarm Settings',
  createAlarmPicker(),
  createFilePicker())

  const audioSettings = createSettingsSection('Audio Settings',
  createTickToggle())

  settingsMenu.appendChild(timeSettings)
  settingsMenu.appendChild(alarmSettings)
  settingsMenu.appendChild(audioSettings)

  return settingsMenu
}

export function toggleSettingsMenu () {
  document.getElementById('settingsMenu').classList.toggle(styles.hidden)
  state.settingsMenuOpen = !state.settingsMenuOpen

  document.getElementById('filter').classList.toggle(styles.opaqueFilter)

  document.getElementById('timer').classList.toggle(styles.flat)

  document.querySelectorAll('DIV:not(.settingsMenu)').forEach(node => {
    node.classList.toggle(styles.settingsOpen)
  })
}
