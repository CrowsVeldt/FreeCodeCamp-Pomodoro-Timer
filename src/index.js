import styles from './index.css'

import {state} from './state'

import {createSettingsMenu, toggleSettingsMenu} from './settings/settingsMenu.js'

import {createSettingsToggle} from './settings/settingsToggle'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {default as localforage} from 'localforage'

import {setState} from './storage'

document.body.appendChild(createTimerView())

localforage.length().then(value => {
  value > 0 ? setState() : console.log('no settings found')
}).then(() => {
  // debugger
  updateTimerView('Pomodoro', state.activities.pomodoro.length / state.seconds, 0)
})
  .catch(err => {
    console.log(err)
  })

document.body.appendChild(createSettingsToggle())

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
