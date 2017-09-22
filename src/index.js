import styles from './index.css'

import inputStyles from './input/input.css'

import {createSettingsView, toggleSettingsView} from './input/input.js'

import {createTimerView, updateTimerView} from './timer/timerView.js'

document.body.appendChild(createSettingsView())

document.body.appendChild(createTimerView())

document.body.addEventListener('keydown', function (event) {
  let settings = window.getComputedStyle(document.getElementById('settingsView')).getPropertyValue('visibility')
  if (event.key === 'Escape') {
    if (settings === 'hidden') {
      toggleSettingsView('show')
    } else {
      toggleSettingsView('hide')
    }
  }
})

updateTimerView()

Notification.requestPermission().then()
