import {default as localforage} from 'localforage'

import {state} from './state.js'

import {notify} from './notification'

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
  localforage.getItem('state').then(value => {
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
