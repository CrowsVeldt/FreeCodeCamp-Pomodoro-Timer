'use strict'

import {timerActive} from '../timer/timer.js'

import {updateTimerView} from '../timer/timerView.js'

export function createInputElement (name, value) {
  const input = document.createElement('input')
  input.setAttribute('id', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  input.setAttribute('value', value)
  input.setAttribute('type', 'number')
  const label = document.createElement('label')
  label.innerHTML = name + ' Length'
  label.setAttribute('for', name[0].toLowerCase() + name.substr(1).replace(/\s/g, '') + 'Input')
  label.appendChild(input)

  document.body.appendChild(label)
  input.addEventListener('change', function () {
    if (timerActive === false) {
      updateTimerView({
        title: name,
        time: input.value * 60 // seconds
      })
    }
  })
}

export function createSettingsView () {
  createInputElement('Pomodoro', '25')
  createInputElement('Short Break', '5')
  createInputElement('Long Break', '15')
}
