import {default as localforage} from 'localforage'

import {notify} from './notification'

// Check that storage is available
export function storageAvailable (type) {
  let local = false
  let indexed = false
  let x = '__storage_test__'

  localforage.setItem(x, x)
    .then(localforage.removeItem(x))
    .then(indexed = true)
    .catch(() => {
      console.log('IndexedDB unavailable')
    })

    // localstorage is undefined?
  if ('localStorage' in window) {
    window.localStorage.setItem(x, x)
    .then(window.localStorage.removeItem(x))
    .then(local = true)
    .catch(console.log('localStorage unavailable'))
  }

  return local || indexed
}

localforage.config({
  name: 'Pomodoro Timer Local Storage'
})

export function populateStorage (key, value) {
  localforage.setItem(key, value).then(() => {
    notify('Settings saved successfully!', 'Settings Saved')
  }).catch(err => {
    notify('Settings failed to save', 'Settings Not Saved')
    console.log('ERROR: ' + err)
  })
}

export function getStorage (item) {
  localforage.getItem(item).then(value => {
    return item
  }).catch(err => {
    console.log(err)
  })
}

export function clearStorage () {
  localforage.clear().then(() => {
    notify('Stored settings have been cleared', 'Settings Cleared')
  }).catch(err => {
    console.log(err)
  })
}
