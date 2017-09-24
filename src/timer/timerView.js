'use strict'

import alarmFile from '../static/alarm.mp3'

import styles from './timer.css'

import {Timer, timerActive, beginTimer, endTimer} from './timer.js'

export const TimerView = ({
  title = 'Pomodoro',
  time = Timer().pomodoro
} = {}) => ({
  title,
  time
})

export function createTimerView () {
  const newTimerView = document.createElement('div')
  newTimerView.setAttribute('id', 'timer')

  const timerTitle = document.createElement('label')
  timerTitle.setAttribute('for', 'timer')
  timerTitle.setAttribute('class', styles.title)

  const timerDisplay = document.createElement('p')

  const alarmElement = document.createElement('audio')
  alarmElement.setAttribute('src', alarmFile)
  alarmElement.setAttribute('id', 'alarm')

  newTimerView.appendChild(timerTitle)
  newTimerView.appendChild(timerDisplay)
  newTimerView.appendChild(alarmElement)
  newTimerView.classList.add(styles.timer)
  newTimerView.addEventListener('click', () => {
    if (timerActive === false) {
      beginTimer(Timer(), TimerView())
    } else if (timerActive === true) {
      endTimer()
    }
  })

  return newTimerView
}

export function updateTimerView (view = TimerView()) {
  const timerElement = document.getElementById('timer')

  timerElement.childNodes[0].innerHTML = view.title
  timerElement.childNodes[1].innerHTML = formatTime(view.time)
}

function formatTime (timeInSeconds) {
  let seconds = timeInSeconds % 60
  let minutes = Math.floor(timeInSeconds / 60)

  if (seconds === 0) {
    return minutes + ':00'
  } else if (seconds < 10) {
    return minutes + ':0' + seconds
  } else {
    return minutes + ':' + seconds
  }
}
