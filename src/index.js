import styles from './index.css'

import {createSettingsView} from './input/input.js'

import {createTimerView} from './timer/timerView.js'

createSettingsView()

createTimerView()

Notification.requestPermission().then()
