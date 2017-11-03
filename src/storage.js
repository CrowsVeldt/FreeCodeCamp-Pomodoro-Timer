import {default as localforage} from 'localforage'

import {state} from './state'

import {notify} from './notification'

localforage.config({
  name: 'Pomodoro Timer Local Storage'
})

export function populateStorage (key, value) {
  localforage.setItem(key, value).then(() => {
    Object.entries(state).forEach(element => {
      localforage.setItem(element[0], element[1]).then(value => {
        console.log(element[0])
      }).catch(err => {
        console.log(err)
      })
    }, this)
    console.log(Object.entries(state))

    notify('Settings saved successfully!', 'Settings Saved')
  }).catch(err => {
    notify('Settings failed to save', 'Settings Not Saved')
    console.log('ERROR: ' + err)
  })
}

export function emptyStorage () {
  localforage.clear().then(() => {
    notify('Settings cleared successfully!', 'Settings Cleared')
  }).catch(err => {
    console.log(err)
    notify('Settings failed to clear', 'Settings Not Cleared')
  })
}
