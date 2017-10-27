import styles from './index.css'

import {state} from './state'

import {createSettingsMenu, toggleSettingsMenu} from './settings/settingsMenu.js'

import {createSettingsToggle} from './settings/settingsToggle'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {storageAvailable} from './storage.js'

console.log(storageAvailable())

document.body.appendChild(createTimerView())

document.body.appendChild(createSettingsToggle())

document.body.appendChild(createSettingsMenu())

updateTimerView('Pomodoro', state.activities.pomodoro.length / state.seconds, 0)

const filter = document.createElement('div')
filter.setAttribute('class', styles.filter)
filter.setAttribute('id', 'filtser')

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
