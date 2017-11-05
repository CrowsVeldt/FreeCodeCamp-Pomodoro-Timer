import {state as stateObject} from '../state'

export function createTickToggle (currentState) {
  const tickToggleLabel = document.createElement('label')
  tickToggleLabel.setAttribute('for', 'tickToggle')
  tickToggleLabel.innerHTML = 'Ticking:'

  const tickToggle = document.createElement('input')
  tickToggle.setAttribute('type', 'checkbox')
  tickToggle.setAttribute('id', 'tickToggle')
  tickToggle.checked = currentState.ticking

  tickToggle.addEventListener('change', () => {
    if (document.getElementById('tickToggle').checked) {
      stateObject.ticking = true
    } else {
      stateObject.ticking = false
    }

    if (!stateObject.ticking && stateObject.timerActive) {
      document.getElementById('tick').pause()
    } else if (stateObject.ticking && stateObject.timerActive) {
      document.getElementById('tick').play()
    }
  })

  return [tickToggleLabel, tickToggle]
}
