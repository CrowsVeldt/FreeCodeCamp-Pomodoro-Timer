import styles from './index.css'

import {storageAvailable, getStoredSettings} from './input/storageHandler'

import {createSettingsMenu, toggleSettingsMenu} from './input/settingsMenu.js'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {Timer, beginTimer, endTimer, timerActive} from './timer/timer.js'

import {createProgressCircle} from './timer/progressCircle.js'

const seconds = 60

document.body.appendChild(createSettingsMenu())

document.body.appendChild(createTimerView())

document.body.appendChild(createProgressCircle())

if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
  getStoredSettings()
  updateTimerView('Pomodoro', window.localStorage.getItem('pomodoro') * seconds)
} else {
  updateTimerView('Pomodoro', 25 * seconds)
}

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
      beginTimer(Timer(), 'Pomodoro', Timer().pomodoro)
    } else {
      endTimer()
    }
  }
})

Notification.requestPermission().then()
