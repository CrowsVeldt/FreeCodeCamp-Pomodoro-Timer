import watchAlarm from '../static/watchAlarm.mp3'
import gongAlarm from '../static/gongAlarm.mp3'

import {storageAvailable, populateStorage} from './storageHandler'

export function createAlarmPicker () {
  const dropdown = document.createElement('select')
  dropdown.setAttribute('id', 'alarmDropdown')

  const watchOption = document.createElement('option')
  watchOption.setAttribute('value', 'watchAlarm')
  watchOption.innerHTML = 'Watch Alarm'

  const gongOption = document.createElement('option')
  gongOption.setAttribute('value', 'gongAlarm')
  gongOption.innerHTML = 'Gong'

  dropdown.appendChild(watchOption)
  dropdown.appendChild(gongOption)

  dropdown.addEventListener('change', function (event, optionalUrl) {
    if (document.getElementById('alarmDropdown').value === 'watchAlarm') {
      chooseAlarmSound(watchAlarm)
    } else if (document.getElementById('alarmDropdown').value === 'gong') {
      chooseAlarmSound(gongAlarm)
    } /* else if (document.getElementById('alarmDropdown').value === 'userInputAlarm') {
      chooseAlarmSound(optionalUrl)
    } */

    if (storageAvailable('localStorage') && window.localStorage.getItem('pomodoro')) {
      populateStorage()
    }
  })

  return dropdown
}

export function chooseAlarmSound (name) {
  const alarm = document.getElementById('alarm')
  alarm.setAttribute('src', name)
}

export function addAlarm (URL, fileName) {
  chooseAlarmSound(URL)

  // How to get the objectURL to the event listener on the dropdown menu?
  const alarmDropdown = document.getElementById('alarmDropdown')
  const userAlarm = document.createElement('option')

  userAlarm.setAttribute('value', 'userInputAlarm')
  // use String.replace to clean up the fileName here
  userAlarm.innerHTML = fileName

  alarmDropdown.appendChild(userAlarm)
}
