'use strict'

import styles from './timer.css'

import * as timer from './timer.js'

export function createTimerView () {
  const newTimerView = document.createElement('div')
  newTimerView.setAttribute('id', 'timer')

  const timerTitle = document.createElement('label')
  timerTitle.setAttribute('for', 'timer')

  const timerDisplay = document.createElement('p')

  newTimerView.appendChild(timerTitle)
  newTimerView.appendChild(timerDisplay)
  newTimerView.classList.add(styles.timer)
  newTimerView.addEventListener('click', () => {
    timer.toggleTimer()
  })

  document.body.appendChild(newTimerView)
  updateTimerView()
}

export function updateTimerView (view = {
  title: 'Timer',
  time: '25:00'
}) {
  const timerElement = document.getElementById('timer')

  timerElement.childNodes[0].innerHTML = view.title
  timerElement.childNodes[1].innerHTML = view.time
}

window.onload = createTimerView()
