'use strict'

import watchAlarm from '../static/watchAlarm.mp3'

import tick from '../static/tick.ogg'

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
  alarmElement.setAttribute('src', watchAlarm)
  alarmElement.setAttribute('id', 'alarm')

  const tickElement = document.createElement('audio')
  tickElement.setAttribute('src', tick)
  tickElement.setAttribute('id', 'tick')
  tickElement.setAttribute('loop', true)

  newTimerView.appendChild(timerTitle)
  newTimerView.appendChild(timerDisplay)
  newTimerView.appendChild(alarmElement)
  newTimerView.appendChild(tickElement)
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
  const seconds = timeInSeconds % 60
  const minutes = Math.floor(timeInSeconds / 60)

  if (seconds === 0) {
    return minutes + ':00'
  } else if (seconds < 10) {
    return minutes + ':0' + seconds
  } else {
    return minutes + ':' + seconds
  }
}
