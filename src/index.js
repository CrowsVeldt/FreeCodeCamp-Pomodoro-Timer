import styles from './index.css'

import {state} from './state'

import {createSettingsMenu, toggleSettingsMenu} from './settings/settingsMenu.js'

import {createSettingsToggle} from './settings/settingsToggle'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {createProgressCircle} from './timer/progressCircle.js'

document.body.appendChild(createTimerView())

document.body.appendChild(createProgressCircle())

document.body.appendChild(createSettingsToggle())

document.body.appendChild(createSettingsMenu())

updateTimerView('Pomodoro', state.activities.pomodoro.length / state.seconds, 0)

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
