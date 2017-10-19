import {state} from '../state'

import {storageAvailable, populateStorage} from './storageHandler'

export function createAlarmPicker () {
  const dropdown = document.createElement('select')
  dropdown.setAttribute('id', 'alarmDropdown')

  state.alarmOptions.forEach(function (option) {
    const watchOption = document.createElement('option')
    watchOption.setAttribute('value', option.value)
    watchOption.innerHTML = option.name
    dropdown.appendChild(watchOption)
  })

  dropdown.addEventListener('change', function () {
    setAlarm(document.getElementById('alarmDropdown').value)
  })

  return [dropdown]
}

function updateAlarmPicker () {
  const dropdown = document.getElementById('alarmDropdown')

  while (dropdown.hasChildNodes()) {
    dropdown.removeChild(dropdown.lastChild)
  }

  state.alarmOptions.forEach(function (option) {
    const watchOption = document.createElement('option')
    watchOption.setAttribute('value', option.value)
    watchOption.innerHTML = option.name
    dropdown.appendChild(watchOption)
  })
}

function setAlarm (number) {
  const alarm = document.getElementById('alarm')
  alarm.setAttribute('src', state.alarmOptions[number].source)

  if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
    populateStorage()
  }
}

export function addAlarm (URL, fileName) {
  state.alarmOptions.push({
    name: fileName.replace('.mp3', ''),
    value: state.alarmOptions.length,
    source: URL
  })
  setAlarm(state.alarmOptions.length - 1)
  updateAlarmPicker()

  const dropdown = document.getElementById('alarmDropdown')
  dropdown.value = state.alarmOptions.length - 1
}
