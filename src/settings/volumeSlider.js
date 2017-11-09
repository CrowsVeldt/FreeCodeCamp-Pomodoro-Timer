import styles from './volumeSlider.css'

import {state as stateObject} from '../state'

export function createVolumeSlider (currentState) {
  const alarmToggleLabel = document.createElement('label')
  alarmToggleLabel.setAttribute('for', 'volumeSlider')
  alarmToggleLabel.innerHTML = 'Volume:'

  const volumeSlider = document.createElement('input')
  volumeSlider.setAttribute('type', 'range')
  volumeSlider.setAttribute('id', 'volumeSlider')
  volumeSlider.classList.add(styles.volume)
  volumeSlider.setAttribute('min', '0')
  volumeSlider.setAttribute('max', '1')
  volumeSlider.setAttribute('step', '0.01')
  volumeSlider.setAttribute('value', currentState.volume)

  volumeSlider.addEventListener('change', () => {
    stateObject.volume = document.getElementById('volumeSlider').value
    document.querySelectorAll('audio').forEach((element) => {
      element.volume = volumeSlider.value
    })
  })

  return [alarmToggleLabel, volumeSlider]
}
