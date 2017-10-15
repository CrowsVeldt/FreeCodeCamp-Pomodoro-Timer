import {timerActive} from '../timer/timer.js'

import {storageAvailable, populateStorage} from './storageHandler'

export function createTickToggle () {
  const tickToggleLabel = document.createElement('label')
  tickToggleLabel.setAttribute('for', 'tickToggle')
  tickToggleLabel.innerHTML = 'Ticking:'

  const tickToggle = document.createElement('input')
  tickToggle.setAttribute('type', 'checkbox')
  tickToggle.setAttribute('id', 'tickToggle')
  tickToggleLabel.appendChild(tickToggle)

  tickToggleLabel.addEventListener('change', () => {
    if (!tickingIsDesired() && timerActive) {
      document.getElementById('tick').pause()
    } else if (tickingIsDesired && timerActive) {
      document.getElementById('tick').play()
    }

    if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
      populateStorage()
    }
  })

  return tickToggleLabel
}

export function tickingIsDesired () {
  return document.getElementById('tickToggle').checked
}
