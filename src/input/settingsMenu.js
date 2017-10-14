import styles from './settingsMenu.css'

import {createTickToggle} from './tickToggle'

import {createAlarmPicker} from './alarmPicker'

import {createTimeInput} from './timeInput'

import {createStorageToggle} from './localStorageToggle'

import {createFilePicker} from './filePicker'

const seconds = 60
const maxValue = 60
const minValue = 1

export function createSettingsMenu () {
  const settingsParent = document.createElement('div')
  settingsParent.setAttribute('id', 'settingsParent')
  settingsParent.classList.add(styles.settingsParent)

  const settingsMenu = document.createElement('div')
  settingsMenu.setAttribute('id', 'settingsMenu')
  settingsMenu.classList.add(styles.settingsMenu, styles.visible)

  settingsMenu.addEventListener('click', function (event) {
    event.stopPropagation()
  })

  const settingsToggle = document.createElement('button')
  settingsToggle.innerHTML = '< < <'
  settingsToggle.setAttribute('id', 'settingsToggle')
  settingsToggle.classList.add(styles.settingsToggle, styles.toggleWhenMenuVisible)

  settingsToggle.addEventListener('click', () => {
    const settings = document.getElementById('settingsMenu')
    if (settings.classList.contains(styles.visible)) {
      toggleSettingsMenu('hide')
    } else if (settings.classList.contains(styles.hidden)) {
      toggleSettingsMenu('show')
    }
  })

  const pomodoro = createTimeInput('Pomodoro', '25', minValue, maxValue)
  const short = createTimeInput('Short Break', '5', minValue, maxValue)
  const long = createTimeInput('Long Break', '15', minValue, maxValue)

  settingsMenu.appendChild(pomodoro)
  settingsMenu.appendChild(short)
  settingsMenu.appendChild(long)
  settingsMenu.appendChild(createAlarmPicker())
  settingsMenu.appendChild(createFilePicker())
  settingsMenu.appendChild(createTickToggle())
  settingsMenu.appendChild(createStorageToggle())
  settingsParent.appendChild(settingsToggle)
  settingsParent.appendChild(settingsMenu)

  return settingsParent
}

export function toggleSettingsMenu (value) {
  const settings = document.getElementById('settingsMenu')
  const toggle = document.getElementById('settingsToggle')

  if (value === 'show') {
    settings.classList.add(styles.visible)
    settings.classList.remove(styles.hidden)
    toggle.classList.add(styles.toggleWhenMenuVisible)
    toggle.classList.remove(styles.toggleWhenMenuHidden)
    toggle.innerHTML = '> > >'
  } else if (value === 'hide') {
    settings.classList.remove(styles.visible)
    settings.classList.add(styles.hidden)
    toggle.classList.remove(styles.toggleWhenMenuVisible)
    toggle.classList.add(styles.toggleWhenMenuHidden)
    toggle.innerHTML = '< < <'
  }
}

export function getInputValue (inputElement) {
  const element = document.getElementById(inputElement)

  if (element.value <= minValue) {
    return minValue * seconds
  } else if (element.value % 1 === 0 && element.value < maxValue) {
    return element.value * seconds
  } else if (element.value >= maxValue) {
    return maxValue * seconds
  } else if (element.value % 1 !== 0) {
    return 0
  }
}
