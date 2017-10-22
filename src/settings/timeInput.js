import styles from './timeInput.css'

import {state} from '../state'

import {updateTimerView} from '../timer/timerView.js'

export function createTimeInput (index) {
  const name = index.name[0].toLowerCase() + index.name.substr(1).replace(/\s/g, '') + 'Length'

  const label = document.createElement('label')
  label.innerHTML = index.name + ' Length'
  label.setAttribute('for', name)

  const downButton = document.createElement('button')
  downButton.setAttribute('id', name + 'DownButton')
  downButton.innerHTML = '<'

  downButton.addEventListener('click', () => {
    const value = parseInt(document.getElementById(name).value)
    if (value > state.inputMinValue) {
      document.getElementById(name).value = value - 1
      index.length = input.value * state.seconds

      if (!state.timerActive) {
        updateTimerView(index.name, input.value, 0)
      }
    }
  })

  const upButton = document.createElement('button')
  upButton.setAttribute('id', name + 'upButton')
  upButton.innerHTML = '>'

  upButton.addEventListener('click', () => {
    const value = parseInt(document.getElementById(name).value)
    if (value < state.inputMaxValue) {
      document.getElementById(name).value = value + 1
      index.length = input.value * state.seconds

      if (!state.timerActive) {
        updateTimerView(index.name, input.value, 0)
      }
    }
  })

  const input = document.createElement('input')
  input.setAttribute('id', name)
  input.setAttribute('value', index.length / state.seconds)
  input.setAttribute('type', 'number')
  input.setAttribute('min', state.inputMinValue)
  input.setAttribute('max', state.inputMaxValue)
  input.setAttribute('onpaste', 'return false')
  input.classList.add(styles.input)

  input.onkeydown = event => {
    if (!isAnAllowedKey(event)) {
      event.preventDefault()
    }
  }

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
      updateTimerView(index.name, input.value, 0)
    }
  })

  return [label, downButton, input, upButton]
}

function isAnAllowedKey (keyEvent) {
  if (/Enter|Backspace|Tab|ArrowUp|ArrowDown|ArrowRight|ArrowLeft|End|Home|Escape|Delete|[\d]/.test(keyEvent.key)) {
    return true
  } else {
    return false
  }
}
