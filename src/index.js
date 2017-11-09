import styles from './index.css'

import {state} from './state'

import {createSettingsMenu, toggleSettingsMenu} from './settings/settingsMenu.js'

import {createSettingsToggle} from './settings/settingsToggle'

import {createTimerView, updateTimerView} from './timer/timerView.js'

document.body.appendChild(createTimerView())

document.body.appendChild(createSettingsToggle())

updateTimerView('Pomodoro', state.activities.pomodoro.length / state.seconds, 0)

document.body.appendChild(createSettingsMenu())

const filter = document.createElement('div')
filter.setAttribute('class', styles.filter)
filter.setAttribute('id', 'filter')

document.body.appendChild(filter)

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
