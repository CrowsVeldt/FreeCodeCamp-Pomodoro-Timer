import styles from './index.css'

import {createSettingsView, toggleSettingsView} from './input/input.js'

import {createTimerView, updateTimerView} from './timer/timerView.js'

import {beginTimer, endTimer, timerActive} from './timer/timer.js'

import {createProgressCircle} from './timer/progressCircle.js'

document.body.appendChild(createSettingsView())

document.body.appendChild(createTimerView())

let height = document.documentElement.clientHeight
let width = document.documentElement.clientWidth
let minDimension = height < width ? height : width
document.body.appendChild((createProgressCircle((minDimension / 8), (minDimension / 3.8), 1)))

document.body.addEventListener('keydown', function (event) {
  let settings = window.getComputedStyle(document.getElementById('settingsView')).getPropertyValue('visibility')
  if (event.key === 'Escape') {
    if (settings === 'hidden') {
      toggleSettingsView('show')
    } else {
      toggleSettingsView('hide')
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
