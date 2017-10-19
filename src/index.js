import styles from './index.css'

import {state} from './state'

import {storageAvailable, getStoredSettings} from './settings/storageHandler'

import {createSettingsMenu, toggleSettingsMenu} from './settings/settingsMenu.js'

import {createSettingsToggle} from './settings/settingsToggle'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {createProgressCircle} from './timer/progressCircle.js'

document.body.appendChild(createTimerView())

document.body.appendChild(createProgressCircle())

document.body.appendChild(createSettingsToggle())

document.body.appendChild(createSettingsMenu())

if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
  getStoredSettings()
  updateTimerView('Pomodoro', window.localStorage.getItem('pomodoro'), 0)
} else {
  updateTimerView('Pomodoro', state.activities.pomodoro.length / 60, 0)
}

document.body.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    toggleSettingsMenu()
  }
})

document.body.addEventListener('click', () => {
  if (state.settingsMenuOpen) {
    toggleSettingsMenu()
  }
})

Notification.requestPermission().then()
