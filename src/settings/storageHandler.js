export function storageAvailable (type) {
  // this function is from MDN
  try {
    let storage = window[type]
    let x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    let storage = window[type]
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
  }
}

export function populateStorage () {
  if (document.getElementById('storageToggle').checked) {
    window.localStorage.setItem('pomodoro', document.getElementById('pomodoroLength').value)
    window.localStorage.setItem('shortBreak', document.getElementById('shortBreakLength').value)
    window.localStorage.setItem('longBreak', document.getElementById('longBreakLength').value)
    window.localStorage.setItem('alarm', document.getElementById('alarmDropdown').value)
    window.localStorage.setItem('ticking', document.getElementById('tickToggle').checked)
  } else {
    emptyStorage()
  }
}

export function emptyStorage () {
  window.localStorage.clear()
}

export function getStoredSettings () {
  const pomodoro = window.localStorage.getItem('pomodoro')
  const shortBreak = window.localStorage.getItem('shortBreak')
  const longBreak = window.localStorage.getItem('longBreak')
  const alarm = window.localStorage.getItem('alarm')
  const ticking = window.localStorage.getItem('ticking')

  document.getElementById('pomodoroLength').value = pomodoro
  document.getElementById('shortBreakLength').value = shortBreak
  document.getElementById('longBreakLength').value = longBreak
  document.getElementById('alarmDropdown').value = alarm

  if (ticking === 'true') { // awkard, but localStorage keeps values as strings
    document.getElementById('tickToggle').checked = true
  } else {
    document.getElementById('tickToggle').checked = false
  }

  // if getStoredSettings is called then by definition storage is true
  document.getElementById('storageToggle').checked = true
}
