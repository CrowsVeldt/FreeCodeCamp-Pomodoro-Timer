'use strict'

import styles from './input.css'

import {timerActive} from '../timer/timer.js'

import {createAlarmPicker} from './alarmPicker'

import {updateTimerView} from '../timer/timerView.js'

const seconds = 60
const maxValue = 60
const minValue = 1

function createInputElement (name, value) {
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
  label.addEventListener('click', function (event) {
    event.stopPropagation()
  })

  input.addEventListener('input', function () {
    if (input.value > maxValue) {
      input.value = maxValue
    } else if (input.value.toString().charAt(0) === '0' && input.value > 0) {
      // Prevent ugly values like '06'
      input.value = input.value.toString().substr(1)
    } else if (timerActive === false && input.value >= minValue && input.value <= maxValue) {
      updateTimerView({
        title: name,
        time: input.value * seconds
      })
    }
  })

  input.addEventListener('change', function () {
    if (input.value < minValue) {
      input.value = minValue
    }
  })

  return label
}

export function createSettingsView () {
  const settingsParent = document.createElement('div')
  settingsParent.setAttribute('id', 'settingsParent')
  settingsParent.classList.add(styles.settingsParent)

  settingsParent.addEventListener('click', () => {
    const settings = document.getElementById('settingsView')
    if (settings.classList.contains(styles.visible)) {
      toggleSettingsView('hide')
    } else if (settings.classList.contains(styles.hidden)) {
      toggleSettingsView('show')
    }
  })

  const settingsView = document.createElement('div')
  settingsView.setAttribute('id', 'settingsView')
  settingsView.classList.add(styles.settingsView, styles.hidden)

  const pomodoro = createInputElement('Pomodoro', '25')
  const short = createInputElement('Short Break', '5')
  const long = createInputElement('Long Break', '15')
  
  settingsView.appendChild(pomodoro)
  settingsView.appendChild(short)
  settingsView.appendChild(long)
  settingsView.appendChild(createAlarmPicker())
  settingsParent.appendChild(settingsView)

  return settingsParent
}

export function toggleSettingsView (value) {
  const settings = document.getElementById('settingsView')

  if (value === 'show') {
    settings.classList.add(styles.visible)
    settings.classList.remove(styles.hidden)
  } else if (value === 'hide') {
    settings.classList.remove(styles.visible)
    settings.classList.add(styles.hidden)
  }
}

export function getInputValue (inputElement) {
  const element = document.getElementById(inputElement)

  if (element.value <= minValue) {
    return minValue * seconds
  } else if (element.value % 1 === 0 && element.value < maxValue) {
    return element.value * seconds
  } else if (element.value >= maxValue) {
    return maxValue * seconds
  } else if (element.value % 1 !== 0) {
    return 0
  }
}

function isAnAllowedKey (keyEvent) {
  if (/Enter|Backspace|Tab|ArrowUp|ArrowDown|ArrowRight|ArrowLeft|End|Home|Escape|Delete|[\d]/.test(keyEvent.key)) {
    return true
  } else {
    return false
  }
}