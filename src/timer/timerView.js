'use strict'

import styles from './timer.css'

import * as timer from './timer.js'

const TimerView = ({
  title = 'Pomodoro',
  time = '00/:00'
} = {}) => ({
  title,
  time
})

export function createTimerView () {
  const newTimerView = document.createElement('div')
  newTimerView.setAttribute('id', 'timer')

  const timerTitle = document.createElement('label')
  timerTitle.setAttribute('for', 'timer')

  newTimerView.appendChild(timerTitle)
  newTimerView.classList.add(styles.timer)
  newTimerView.addEventListener('click', () => {
    timer.toggleTimer()
  })
  document.body.appendChild(newTimerView)
  updateTimerView()
}

export function updateTimerView (view = TimerView()) {
  const timerElement = document.getElementById('timer')

  timerElement.childNodes[0].innerHTML = view.title
}

window.onload = createTimerView()
