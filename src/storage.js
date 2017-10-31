import {default as localforage} from 'localforage'

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
