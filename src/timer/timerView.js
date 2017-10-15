import watchAlarm from '../static/watchAlarm.mp3'

import tick from '../static/tick.ogg'

import styles from './timer.css'

import {timerActive, beginTimer, endTimer} from './timer.js'

export function createTimerView () {
  const newTimerView = document.createElement('div')
  newTimerView.setAttribute('id', 'timer')
  newTimerView.setAttribute('tabindex', '0')

  const timerTitle = document.createElement('p')
  timerTitle.setAttribute('class', styles.title)

  const timerDisplay = document.createElement('p')

  const pomodoroCounter = document.createElement('p')
  pomodoroCounter.setAttribute('class', styles.pomodoroCounter)

  const alarmElement = document.createElement('audio')
  alarmElement.setAttribute('src', watchAlarm)
  alarmElement.setAttribute('id', 'alarm')

  const tickElement = document.createElement('audio')
  tickElement.setAttribute('src', tick)
  tickElement.setAttribute('id', 'tick')
  tickElement.setAttribute('loop', true)

  newTimerView.appendChild(timerTitle)
  newTimerView.appendChild(timerDisplay)
  newTimerView.appendChild(pomodoroCounter)
  newTimerView.appendChild(alarmElement)
  newTimerView.appendChild(tickElement)
  newTimerView.classList.add(styles.timer)

  newTimerView.addEventListener('click', () => {
    if (timerActive === false) {
      beginTimer()
    } else if (timerActive === true) {
      endTimer()
    }
  })

  newTimerView.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'Spacebar') {
      if (timerActive === false) {
        beginTimer()
      } else {
        endTimer()
      }
    }
  })

  return newTimerView
}

export function updateTimerView (title, time, pomodoroCount) {
  const timerElement = document.getElementById('timer')

  timerElement.childNodes[0].innerHTML = title
  timerElement.childNodes[1].innerHTML = formatTime(time)
  timerElement.childNodes[2].innerHTML = 'X'.repeat(pomodoroCount)
}

function formatTime (timeInSeconds) {
  const seconds = timeInSeconds % 60
  const minutes = Math.floor(timeInSeconds / 60)

  if (seconds === 0) {
    return minutes + ':00'
  } else if (minutes <= 0 && timeInSeconds < 60) {
    return seconds
  } else if (seconds < 10) {
    return minutes + ':0' + seconds
  } else {
    return minutes + ':' + seconds
  }
}
