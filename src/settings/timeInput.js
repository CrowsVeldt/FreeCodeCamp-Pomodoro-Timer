import {state} from '../state'

import {storageAvailable, populateStorage} from './storageHandler'

import {updateTimerView} from '../timer/timerView.js'

export function createTimeInputs () {
  const inputs = state.activities.map((item, index) => {
    const input = document.createElement('input')
    input.setAttribute('id', item.name[0].toLowerCase() + item.name.substr(1).replace(/\s/g, '') + 'Length')
    input.setAttribute('value', item.length / state.seconds)
    input.setAttribute('type', 'number')
    input.setAttribute('min', state.inputMinValue)
    input.setAttribute('max', state.inputMaxValue)
    input.onkeydown = event => {
      if (!isAnAllowedKey(event)) {
        event.preventDefault()
      }
    }
    input.setAttribute('onpaste', 'return false')

    const label = document.createElement('label')
    label.innerHTML = item.name + ' Length'
    label.setAttribute('for', item.name[0].toLowerCase() + item.name.substr(1).replace(/\s/g, '') + 'Length')
    label.appendChild(input)

    // Trim input to acceptable values
    input.addEventListener('input', () => {
      if (input.value > state.inputMaxValue) {
        input.value = state.inputMaxValue
        state.activities[index].length = input.value * state.seconds
      } else if (input.value.toString().charAt(0) === '0' && input.value > 0) {
      // Prevent ugly values like '06'
        input.value = input.value.toString().substr(1)
        state.activities[index].length = input.value * state.seconds
      } else if (input.value >= state.inputMinValue && input.value <= state.inputMaxValue) {
        state.activities[index].length = input.value * state.seconds
      }
    })

    // Update view only if the timer isn't active
    input.addEventListener('input', () => {
      if (state.timerActive === false) {
        updateTimerView(item.name, input.value * state.seconds, 0)
      }
    })

    input.addEventListener('change', () => {
      if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
        populateStorage()
      }
    })

    return label
  })

  return inputs
}

function isAnAllowedKey (keyEvent) {
  if (/Enter|Backspace|Tab|ArrowUp|ArrowDown|ArrowRight|ArrowLeft|End|Home|Escape|Delete|[\d]/.test(keyEvent.key)) {
    return true
  } else {
    return false
  }
}
