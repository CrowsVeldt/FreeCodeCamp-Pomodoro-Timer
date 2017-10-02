'use strict'

// Code thanks to MDN
export function storageAvailable (type) {
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

export function storagePopulated () {
  if (window.localStorage.length !== 0) {
    console.log('populated')
    return true
  }
}

export function populateStorage () {
  window.localStorage.setItem('pomodoroTime', document.getElementById('pomodoroInput').value)
  window.localStorage.setItem('shortBreakTime', document.getElementById('shortBreakInput').value)
  window.localStorage.setItem('longBreakTime', document.getElementById('longBreakInput').value)
  window.localStorage.setItem('alarmDropdown', document.getElementById('alarmDropdown').value)
  window.localStorage.setItem('ticking', document.getElementById('tickToggle').checked)
  window.localStorage.setItem('storageToggle', document.getElementById('storageToggle').checked)
}
