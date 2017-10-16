import styles from './index.css'

import {state} from './state'

import {storageAvailable, getStoredSettings} from './settings/storageHandler'

import {createSettingsMenu, toggleSettingsMenu} from './settings/settingsMenu.js'

import {createSettingsToggle} from './settings/settingsMenuToggle'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {createProgressCircle} from './timer/progressCircle.js'

document.body.appendChild(createTimerView())

document.body.appendChild(createProgressCircle())

document.body.appendChild(createSettingsToggle())

document.body.appendChild(createSettingsMenu())

if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
  getStoredSettings()
  updateTimerView('Pomodoro', window.localStorage.getItem('pomodoro') * state.seconds, 0)
} else {
  updateTimerView('Pomodoro', state.activities[0].length, 0)
}

document.body.addEventListener('keydown', event => {
  let settings = window.getComputedStyle(document.getElementById('settingsMenu')).getPropertyValue('visibility')
  if (event.key === 'Escape') {
    if (settings === 'hidden') {
      toggleSettingsMenu('show')
    } else {
      toggleSettingsMenu('hide')
    }
  }
})

document.body.addEventListener('click', () => {
  let settings = window.getComputedStyle(document.getElementById('settingsMenu')).getPropertyValue('visibility')
  if (settings === 'visible') {
    toggleSettingsMenu('hide')
  }
})

Notification.requestPermission().then()
