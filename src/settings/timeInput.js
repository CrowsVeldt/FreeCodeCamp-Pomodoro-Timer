import {timerActive} from '../timer/timer.js'

import {storageAvailable, populateStorage} from './storageHandler'

import {updateTimerView} from '../timer/timerView.js'

const seconds = 60

export function createTimeInput (name, value, minValue, maxValue) {
  const input = document.createElement('input')
  input.setAttribute('id', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  input.setAttribute('value', value)
  input.setAttribute('type', 'number')
  input.setAttribute('min', minValue)
  input.setAttribute('max', maxValue)
  input.onkeydown = function (event) {
    if (!isAnAllowedKey(event)) {
      event.preventDefault()
    }
  }
  input.setAttribute('onpaste', 'return false')

  const label = document.createElement('label')
  label.innerHTML = name + ' Length'
  label.setAttribute('for', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  label.appendChild(input)

  input.addEventListener('input', function () {
    if (input.value > maxValue) {
      input.value = maxValue
    } else if (input.value.toString().charAt(0) === '0' && input.value > 0) {
      // Prevent ugly values like '06'
      input.value = input.value.toString().substr(1)
    } else if (timerActive === false && input.value >= minValue && input.value <= maxValue) {
      updateTimerView(name, input.value * seconds, 0)
    }
  })

  input.addEventListener('change', function () {
    if (input.value < minValue) {
      input.value = minValue
    }

    if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
      populateStorage()
    }
  })

  return label
}

function isAnAllowedKey (keyEvent) {
  if (/Enter|Backspace|Tab|ArrowUp|ArrowDown|ArrowRight|ArrowLeft|End|Home|Escape|Delete|[\d]/.test(keyEvent.key)) {
    return true
  } else {
    return false
  }
}
