import styles from './index.css'

import {createSettingsView, createSettingsButton} from './input/input.js'

import {createTimerView, updateTimerView} from './timer/timerView.js'

document.body.appendChild(createSettingsView())

document.body.appendChild(createSettingsButton())

document.body.appendChild(createTimerView())

updateTimerView()

Notification.requestPermission().then()
