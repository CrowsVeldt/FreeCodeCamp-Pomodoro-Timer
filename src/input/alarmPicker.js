'use strict'

import watchAlarm from '../static/watchAlarm.mp3'
import gongAlarm from '../static/gongAlarm.mp3'

import styles from './alarmPicker.css'

export function createAlarmPicker () {
  let dropdown = document.createElement('select')
  dropdown.setAttribute('id', 'alarmDropdown')

  let watchOption = document.createElement('option')
  watchOption.setAttribute('value', 'Watch Alarm')
  watchOption.innerHTML = 'Watch Alarm'

  let gongOption = document.createElement('option')
  gongOption.setAttribute('value', 'Gong')
  gongOption.innerHTML = 'Gong'

  dropdown.appendChild(watchOption)
  dropdown.appendChild(gongOption)

  dropdown.addEventListener('click', function (event) {
    event.stopPropagation()
  })

  dropdown.addEventListener('change', function (event) {
    if (document.getElementById('alarmDropdown').value === 'Watch Alarm') {
      chooseAlarmSound(watchAlarm)
    } else if (document.getElementById('alarmDropdown').value === 'Gong') {
      chooseAlarmSound(gongAlarm)
    }
  })

  return dropdown
}

export function chooseAlarmSound (name) {
  let alarm = document.getElementById('alarm')
  alarm.setAttribute('src', name)
}
