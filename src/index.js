import styles from './index.css'

import * as timer from './timer/timer.js'

Notification.requestPermission().then(function (result) {})

timer.beginTimer()
