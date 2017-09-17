import styles from './index.css'

import * as input from './input/input.js'

import * as timer from './timer/timerView.js'

window.onload = input.createSettingsView()

timer.createTimerView()

Notification.requestPermission().then()
