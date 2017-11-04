import {default as localforage} from 'localforage'

import {state} from './state'

import {notify} from './notification'

localforage.config({
  name: 'Pomodoro Timer Local Storage'
})

export function populateStorage () {
  Object.entries(state).forEach(element => {
    localforage.setItem(element[0], element[1]).then(value => {
        // console.log(JSON.stringify(element))
    }).catch(err => {
      notify('Settings failed to save', 'Settings Not Saved')
      console.log('ERROR: ' + err)
    })
  })
  notify('Settings saved successfully!', 'Settings Saved')
}

export function emptyStorage () {
  localforage.clear().then(() => {
    notify('Settings cleared successfully!', 'Settings Cleared')
  }).catch(err => {
    console.log(err)
    notify('Settings failed to clear', 'Settings Not Cleared')
  })
}

export function setState () {
  localforage.iterate((value, key, iterationNumber) => {
    state[key] = value
    console.log([key, state[key]])
  }).then(() => {
    console.log('finished')
  }).catch(err => {
    console.log(err)
  })
}
