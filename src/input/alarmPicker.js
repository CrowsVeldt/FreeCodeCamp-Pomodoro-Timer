import watchAlarm from '../static/watchAlarm.mp3'
import gongAlarm from '../static/gongAlarm.mp3'

import {storageAvailable, populateStorage} from './storageHandler'

export function createAlarmPicker () {
  const dropdown = document.createElement('select')
  dropdown.setAttribute('id', 'alarmDropdown')

  const watchOption = document.createElement('option')
  watchOption.setAttribute('value', 'Watch Alarm')
  watchOption.innerHTML = 'Watch Alarm'

  const gongOption = document.createElement('option')
  gongOption.setAttribute('value', 'Gong')
  gongOption.innerHTML = 'Gong'

  dropdown.appendChild(watchOption)
  dropdown.appendChild(gongOption)

  dropdown.addEventListener('change', function (event) {
    if (document.getElementById('alarmDropdown').value === 'Watch Alarm') {
      chooseAlarmSound(watchAlarm)
    } else if (document.getElementById('alarmDropdown').value === 'Gong') {
      chooseAlarmSound(gongAlarm)
    }

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
