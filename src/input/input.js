'use strict'

import styles from './input.css'

import {timerActive} from '../timer/timer.js'

import {updateTimerView} from '../timer/timerView.js'

const seconds = 60
const maxValue = 60
const minValue = 0

function createInputElement (name, value) {
  const input = document.createElement('input')
  input.setAttribute('id', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  input.setAttribute('value', value)
  input.setAttribute('type', 'number')
  input.setAttribute('min', minValue)
  input.setAttribute('max', maxValue)
  input.onkeypress = function (event) {
    if (isAnAllowedKey(event)) {
      // allIsGood
    } else {
      event.preventDefault()
    }
  }
  input.setAttribute('onpaste', 'return false')
  const label = document.createElement('label')
  label.innerHTML = name + ' Length'
  label.setAttribute('for', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  label.appendChild(input)

  input.addEventListener('change', function () {
    if (timerActive === false && input.value > minValue && input.value <= maxValue) {
      input.value = Math.round(input.value)
      updateTimerView({
        title: name,
        time: input.value * seconds
      })
    } else if (timerActive === false && Math.abs(input.value) > maxValue) {
      input.value = maxValue
      updateTimerView({
        title: name,
        time: input.value * seconds
      })
    } else if (timerActive === false && input.value < minValue) {
      input.value = Math.round(-input.value)
      updateTimerView({
        title: name,
        time: input.value * seconds
      })
    } else {
      input.value = 0
      updateTimerView({
        title: name,
        time: 0
      })
    }
  })

  return label
}

export function createSettingsButton () {
  const button = document.createElement('button')
  button.setAttribute('id', 'settingsButton')
  button.innerHTML = 'settings'
  button.classList.add(styles.settingsButton)

  button.addEventListener('click', () => {
    const settings = document.getElementById('settingsView')
    if (settings.classList.contains(styles.visible)) {
      toggleSettingsView('hide')
    } else if (settings.classList.contains(styles.hidden)) {
      toggleSettingsView('show')
    }
  })

  return button
}

export function createSettingsView () {
  const settingsView = document.createElement('div')
  settingsView.setAttribute('id', 'settingsView')
  settingsView.classList.add(styles.visible, styles.settingsView)

  const pomodoro = createInputElement('Pomodoro', '25')
  const short = createInputElement('Short Break', '5')
  const long = createInputElement('Long Break', '15')

  settingsView.appendChild(pomodoro)
  settingsView.appendChild(short)
  settingsView.appendChild(long)

  return settingsView
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

  if (element.value % 1 === 0 && element.value < maxValue) {
    return element.value * seconds
  } else if (element.value >= maxValue) {
    return maxValue * seconds
  } else if (element.value % 1 !== 0) {
    return 0
  }
}

function isAnAllowedKey (keyEvent) {
  console.log(keyEvent.key)
  if (/Enter/.test(keyEvent.key)) {
    return true
  } else if (/[a-zA-Z]/.test(keyEvent.key)) {
    return false
  } else {
    return true
  }
}
