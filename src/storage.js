import {default as localforage} from 'localforage'

import {state} from './state.js'

localforage.config({
  name: 'Pomodoro Timer Local Storage'
})

export function populateStorage () {
  localforage.setItem('state', state).then(value => {
    console.log(value)
  }).catch(err => {
    console.log('ERROR: ' + err)
  })
}
