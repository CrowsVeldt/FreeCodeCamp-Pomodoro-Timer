import watchAlarm from '../static/watchAlarm.mp3'
import gongAlarm from '../static/gongAlarm.mp3'

import {storageAvailable, populateStorage} from './storageHandler'

const alarmOptions = [
  {
    name: 'Watch',
    value: '0',
    source: watchAlarm
  },
  {
    name: 'Gong',
    value: '1',
    source: gongAlarm
  }

]

export function createAlarmPicker () {
  const dropdown = document.createElement('select')
  dropdown.setAttribute('id', 'alarmDropdown')

  alarmOptions.forEach(function (option) {
    const watchOption = document.createElement('option')
    watchOption.setAttribute('value', option.value)
    watchOption.innerHTML = option.name
    dropdown.appendChild(watchOption)
  })

  dropdown.addEventListener('change', function () {
    setAlarm(document.getElementById('alarmDropdown').value)
  })

  return dropdown
}

function updateAlarmPicker () {
  const dropdown = document.getElementById('alarmDropdown')

  while (dropdown.hasChildNodes()) {
    dropdown.removeChild(dropdown.lastChild)
  }

  alarmOptions.forEach(function (option) {
    const watchOption = document.createElement('option')
    watchOption.setAttribute('value', option.value)
    watchOption.innerHTML = option.name
    dropdown.appendChild(watchOption)
  })
}

function setAlarm (number) {
  const alarm = document.getElementById('alarm')
  alarm.setAttribute('src', alarmOptions[number].source)
  // How can I save user added alarms? Save file location?
  if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
    populateStorage()
  }
}

export function addAlarm (URL, fileName) {
  alarmOptions.push({
    // remove file suffix with String.prototype.slice
    name: fileName,
    value: alarmOptions.length,
    source: URL
  })
  setAlarm(alarmOptions.length - 1)
  updateAlarmPicker()

  const dropdown = document.getElementById('alarmDropdown')
  dropdown.value = alarmOptions.length - 1
}
