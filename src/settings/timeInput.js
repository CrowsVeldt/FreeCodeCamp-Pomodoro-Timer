import styles from './timeInput.css'

import {state} from '../state'

import {storageAvailable, populateStorage} from './storageHandler'

import {updateTimerView} from '../timer/timerView.js'

export function createTimeInput (index) {
  const input = document.createElement('input')
  input.setAttribute('id', index.name[0].toLowerCase() + index.name.substr(1).replace(/\s/g, '') + 'Length')
  input.setAttribute('value', index.length / state.seconds)
  input.setAttribute('type', 'number')
  input.setAttribute('min', state.inputMinValue)
  input.setAttribute('max', state.inputMaxValue)
  // input.classList.add(styles.input)
  input.onkeydown = event => {
    if (!isAnAllowedKey(event)) {
      event.preventDefault()
    }
  }
  input.setAttribute('onpaste', 'return false')

  const label = document.createElement('label')
  label.innerHTML = index.name + ' Length'
  label.setAttribute('for', index.name[0].toLowerCase() + index.name.substr(1).replace(/\s/g, '') + 'Length')

    // Trim input to acceptable values
  input.addEventListener('input', () => {
    if (input.value > state.inputMaxValue) {
      input.value = state.inputMaxValue
      index.length = input.value * state.seconds
    } else if (input.value.toString().charAt(0) === '0' && input.value > 0) {
      // Prevent ugly values like '06'
      input.value = input.value.toString().substr(1)
      index.length = input.value * state.seconds
    } else if (input.value >= state.inputMinValue && input.value <= state.inputMaxValue) {
      index.length = input.value * state.seconds
    }
  })

    // Update view only if the timer isn't active
  input.addEventListener('input', () => {
    if (state.timerActive === false) {
      updateTimerView(index.name, input.value * state.seconds, 0)
    }
  })

  input.addEventListener('change', () => {
    if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
      populateStorage()
    }
  })
  return [label, input]
}

function isAnAllowedKey (keyEvent) {
  if (/Enter|Backspace|Tab|ArrowUp|ArrowDown|ArrowRight|ArrowLeft|End|Home|Escape|Delete|[\d]/.test(keyEvent.key)) {
    return true
  } else {
    return false
  }
}
