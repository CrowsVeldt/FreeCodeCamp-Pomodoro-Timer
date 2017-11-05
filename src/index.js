import styles from './index.css'

import {state} from './state'

import {createSettingsMenu, toggleSettingsMenu} from './settings/settingsMenu.js'

import {createSettingsToggle} from './settings/settingsToggle'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {default as localforage} from 'localforage'

import {setState} from './storage'

function createAllTheThings (currentState) {
  document.body.appendChild(createTimerView(currentState))

  document.body.appendChild(createSettingsToggle())

  updateTimerView('Pomodoro', currentState.activities.pomodoro.length / currentState.seconds, 0)

  document.body.appendChild(createSettingsMenu(currentState))

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
    if (currentState.settingsMenuOpen) {
      toggleSettingsMenu()
    }
  })

  Notification.requestPermission().then()
}

localforage.length().then(value => {
  if (value > 0) {
    return setState()
  } else {
    return state
  }
}).then((currentState) => {
  return createAllTheThings(currentState)
}).catch(err => {
  console.log(err)
})
