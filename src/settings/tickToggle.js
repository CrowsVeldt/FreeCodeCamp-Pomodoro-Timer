import {state} from '../state'

import {storageAvailable, populateStorage} from './storageHandler'

export function createTickToggle () {
  const tickToggleLabel = document.createElement('label')
  tickToggleLabel.setAttribute('for', 'tickToggle')
  tickToggleLabel.innerHTML = 'Ticking:'

  const tickToggle = document.createElement('input')
  tickToggle.setAttribute('type', 'checkbox')
  tickToggle.setAttribute('id', 'tickToggle')

  tickToggle.addEventListener('change', () => {
    if (document.getElementById('tickToggle').checked) {
      state.ticking = true
    } else {
      state.ticking = false
    }

    if (!state.ticking && state.timerActive) {
      document.getElementById('tick').pause()
    } else if (state.ticking && state.timerActive) {
      document.getElementById('tick').play()
    }

    if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
      populateStorage()
    }
  })

  return [tickToggleLabel, tickToggle]
}
