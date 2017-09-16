'use strict'

import * as timer from './timer.js'

function createTimerView () {
  const timerView = document.createElement('div')
  timerView.setAttribute('display', 'flex')
  timerView.setAttribute('flex-direction', 'column')
  timerView.setAttribute('justify-content', 'center')
  timerView.setAttribute('id', 'timer')

  const timerTitle = document.createElement('label')
  timerTitle.innerHTML = 'Timer'
  timerTitle.setAttribute('for', 'timer')

  timerView.appendChild(timerTitle)
  timerView.addEventListener('click', () => {
    timer.toggleTimer()
  })
  return timerView
}

document.body.appendChild(createTimerView())
