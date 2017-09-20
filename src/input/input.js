'use strict'

import styles from './input.css'

import {timerActive} from '../timer/timer.js'

import {updateTimerView} from '../timer/timerView.js'

function createInputElement (name, value) {
  const input = document.createElement('input')
  input.setAttribute('id', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  input.setAttribute('value', value)
  input.setAttribute('type', 'number')
  input.setAttribute('min', '0')
  input.setAttribute('max', '60')
  const label = document.createElement('label')
  label.innerHTML = name + ' Length'
  label.setAttribute('for', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  label.appendChild(input)

  input.addEventListener('input', function () {
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
