'use strict'

import styles from './input.css'

import {timerActive} from '../timer/timer.js'

import {updateTimerView} from '../timer/timerView.js'

function createInputElement (name, value) {
  const input = document.createElement('input')
  input.setAttribute('id', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  input.setAttribute('value', value)
  input.setAttribute('type', 'number')
  const label = document.createElement('label')
  label.innerHTML = name + ' Length'
  label.setAttribute('for', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  label.appendChild(input)

  input.addEventListener('change', function () {
    if (timerActive === false) {
      updateTimerView({
        title: name,
        time: input.value * 60 // seconds
      })
    }
  })

  return label
}

export function createSettingsButton () {
  const button = document.createElement('button')
  button.setAttribute('id', 'settingsButton')
  button.innerHTML = 'settings'

  button.addEventListener('click', function () {
    const settings = document.getElementById('settingsView')

    if (settings.classList.contains('visible')) {
      settings.classList.remove(styles.visible)
      settings.classList.add(styles.hidden)
    } else {
      settings.classList.remove(styles.hidden)
      settings.classList.add(styles.visible)
    }
  })

  return button
}

export function createSettingsView () {
  const settingsView = document.createElement('div')
  settingsView.setAttribute('id', 'settingsView')
  settingsView.classList.add(styles.visible)

  const pomodoro = createInputElement('Pomodoro', '25')
  const short = createInputElement('Short Break', '5')
  const long = createInputElement('Long Break', '15')

  settingsView.appendChild(pomodoro)
  settingsView.appendChild(short)
  settingsView.appendChild(long)

  return settingsView
}
