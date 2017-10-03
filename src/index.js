import styles from './index.css'

import {storageAvailable, getStoredSettings} from './input/storageHandler'

import {createSettingsMenu, toggleSettingsMenu} from './input/settingsMenu.js'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {beginTimer, endTimer, timerActive} from './timer/timer.js'

import {createProgressCircle} from './timer/progressCircle.js'

document.body.appendChild(createSettingsMenu())
if (storageAvailable() && window.localStorage.getItem('pomodoro')) {
  getStoredSettings()
  console.log('is called')
}

document.body.appendChild(createTimerView())

document.body.appendChild(createProgressCircle())

document.body.addEventListener('keydown', function (event) {
  let settings = window.getComputedStyle(document.getElementById('settingsMenu')).getPropertyValue('visibility')
  if (event.key === 'Escape') {
    if (settings === 'hidden') {
      toggleSettingsMenu('show')
    } else {
      toggleSettingsMenu('hide')
    }
  } else if (event.key === ' ' || event.key === 'Spacebar') {
    if (timerActive === false) {
      beginTimer()
    } else {
      endTimer()
    }
  }
})

updateTimerView()

Notification.requestPermission().then()
