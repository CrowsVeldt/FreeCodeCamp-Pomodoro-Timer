import {state as stateObject} from '../state'

export function createAlarmToggle (currentState) {
  const alarmToggleLabel = document.createElement('label')
  alarmToggleLabel.setAttribute('for', 'alarmToggle')
  alarmToggleLabel.innerHTML = 'No Alarm:'

  const alarmToggle = document.createElement('input')
  alarmToggle.setAttribute('type', 'checkbox')
  alarmToggle.setAttribute('id', 'alarmToggle')
  alarmToggle.checked = currentState.silence

  alarmToggle.addEventListener('change', () => {
    if (document.getElementById('alarmToggle').checked) {
      stateObject.silence = true
    } else {
      stateObject.silence = false
    }
  })

  return [alarmToggleLabel, alarmToggle]
}
