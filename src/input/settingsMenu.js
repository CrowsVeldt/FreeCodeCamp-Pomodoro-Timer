'use strict'

import styles from './settingsMenu.css'

import {timerActive} from '../timer/timer.js'

import {createAlarmPicker} from './alarmPicker'

import {createTimeInput} from './timeInput'

const seconds = 60
const maxValue = 60
const minValue = 1

function createTickToggle () {
  const tickToggleLabel = document.createElement('label')
  tickToggleLabel.setAttribute('for', 'tickToggle')
  tickToggleLabel.innerHTML = 'Ticking:'

  const tickToggle = document.createElement('input')
  tickToggle.setAttribute('type', 'checkbox')
  tickToggle.setAttribute('id', 'tickToggle')
  tickToggle.checked = true
  tickToggleLabel.appendChild(tickToggle)

  tickToggleLabel.addEventListener('change', function () {
    if (!tickingIsDesired() && timerActive) {
      document.getElementById('tick').pause()
    } else if (tickingIsDesired && timerActive) {
      document.getElementById('tick').play()
    }
  })

  return tickToggleLabel
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

  settingsView.addEventListener('click', function (event) {
    event.stopPropagation()
  })

  const pomodoro = createTimeInput('Pomodoro', '25', minValue, maxValue)
  const short = createTimeInput('Short Break', '5', minValue, maxValue)
  const long = createTimeInput('Long Break', '15', minValue, maxValue)

  settingsView.appendChild(pomodoro)
  settingsView.appendChild(short)
  settingsView.appendChild(long)
  settingsView.appendChild(createAlarmPicker())
  settingsView.appendChild(createTickToggle())
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

export function tickingIsDesired () {
  return document.getElementById('tickToggle').checked
}
