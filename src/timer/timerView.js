'use strict'

import styles from './timer.css'

import * as timer from './timer.js'

// what is the best way to create and then update the timer?

/**
 * A template for the timer view : title,
 * time to display, percent to fill
 *
 * export const TimerView = ({
 *   title = 'Pomodoro'
 * } = {}) => ({
 *   title
 * })
*/

// Create a timer view based on the above template
export function createTimerView (percentDone, title) {
  const timerView = document.createElement('div')
  timerView.setAttribute('id', 'timer')

  const timerTitle = document.createElement('label')
  timerTitle.innerHTML = title
  timerTitle.setAttribute('for', 'timer')

  timerView.appendChild(timerTitle)
  timerView.classList.add(styles.timer)
  timerView.addEventListener('click', () => {
    timer.toggleTimer()
  })
  document.body.appendChild(timerView)
}

createTimerView()
