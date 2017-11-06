import {state as stateObject} from '../state'

export function createAlarmPicker (currentState) {
  const dropdown = document.createElement('select')
  dropdown.setAttribute('id', 'alarmDropdown')

  currentState.alarmOptions.forEach(option => {
    const watchOption = document.createElement('option')
    watchOption.setAttribute('value', option.value)
    watchOption.innerHTML = option.name
    dropdown.appendChild(watchOption)
  })

  dropdown.addEventListener('change', () => {
    setAlarm(document.getElementById('alarmDropdown').value)
  })

  return [dropdown]
}

function updateAlarmPicker () {
  const dropdown = document.getElementById('alarmDropdown')

  while (dropdown.hasChildNodes()) {
    dropdown.removeChild(dropdown.lastChild)
  }

  stateObject.alarmOptions.forEach(option => {
    const watchOption = document.createElement('option')
    watchOption.setAttribute('value', option.value)
    watchOption.innerHTML = option.name
    dropdown.appendChild(watchOption)
  })
}

function setAlarm (number) {
  const alarm = document.getElementById('alarm')
  alarm.setAttribute('src', stateObject.alarmOptions[number].source)
  stateObject.alarmValue = stateObject.alarmOptions[number].value
}

export function addAlarm (URL, fileName) {
  stateObject.alarmOptions.push({
    name: fileName.replace('.mp3', ''),
    value: stateObject.alarmOptions.length,
    source: URL
  })
  setAlarm(stateObject.alarmOptions.length - 1)
  updateAlarmPicker()

  const dropdown = document.getElementById('alarmDropdown')
  dropdown.value = stateObject.alarmOptions.length - 1
}
