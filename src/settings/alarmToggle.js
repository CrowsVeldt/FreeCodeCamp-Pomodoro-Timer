import {state} from '../state'

export function createAlarmToggle () {
  const alarmToggleLabel = document.createElement('label')
  alarmToggleLabel.setAttribute('for', 'alarmToggle')
  alarmToggleLabel.innerHTML = 'No Alarm:'

  const alarmToggle = document.createElement('input')
  alarmToggle.setAttribute('type', 'checkbox')
  alarmToggle.setAttribute('id', 'alarmToggle')

  alarmToggle.addEventListener('change', () => {
    if (document.getElementById('alarmToggle').checked) {
      state.silence = true
    } else {
      state.silence = false
    }
  })
  alarmToggleLabel.appendChild(alarmToggle)

  return [alarmToggleLabel]
}
