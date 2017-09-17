'use strict'

export function createInputElement (name, value) {
  const input = document.createElement('input')
  // using replace so I can use one string for the label and the ID
  input.setAttribute('id', name.replace(/\s/g, '') + 'Input')
  input.setAttribute('value', value)
  const label = document.createElement('label')
  label.innerHTML = name[0].toUpperCase() + name.substr(1) + ' Length'
  label.setAttribute('for', name.replace(/\s/g, '') + 'Input')
  label.appendChild(input)

  document.body.appendChild(label)
}

export function createSettingsView () {
  createInputElement('pomodoro', '25')
  createInputElement('short Break', '5')
  createInputElement('long Break', '15')
}

/* Placeholder variables for input from input elements */
export const userInputs = {
  pomodoroLength: 0.1,
  shortBreakLength: 0.2,
  longBreakLength: 0.3
}
/* end of placeholder variables */
