import {default as localforage} from 'localforage'

import {state as stateObject} from './state'

import {notify} from './notification'

localforage.config({
  name: 'Pomodoro Timer Local Storage'
})

export function populateStorage () {
  Object.entries(stateObject).forEach(element => {
    localforage.setItem(element[0], element[1]).then(value => {
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
  // create promise that promises to return new state

  // chain the iterator function to that promise

  // ???
  return localforage.iterate((value, key, iterationNumber) => {
    let newState = stateObject
    newState[key] = value
    return newState
  }).then((newState) => {
    console.log(newState)
    return newState
  }).catch(err => {
    console.log(err)
  })
}
