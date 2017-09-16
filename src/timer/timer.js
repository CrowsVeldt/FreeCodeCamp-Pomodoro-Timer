'use strict'

import * as input from '../input/input.js'

import * as timerView from './timerView.js'

let timerActive = false
let timerID = 0

const Timer = ({
startTime = new Date().getTime(),
pomodoro = input.userInputs.pomodoroLength,
shortBreak = input.userInputs.shortBreakLength,
longBreak = input.userInputs.longBreakLength,
pomodoroCount = 0,
currentActivity = 'pomodoro',
endTime = startTime + (pomodoro * 60000)
} = {}) => ({
  startTime,
  pomodoro,
  shortBreak,
  longBreak,
  pomodoroCount,
  currentActivity,
  endTime
})

export function toggleTimer (timer = Timer()) {
  if (timerActive === true) {
    clearTimeout(timerID)
    timerActive = false
    timerView.updateTimerView()
  } else {
    timerID = setTimeout(checkTimer, 1000, timer)
    timerActive = true
    timerView.updateTimerView({
      title: 'Pomodoro',
      time: timer.pomodoro
    })
  }
}

export function checkTimer (timerToCheck) {
  let currentTime = new Date().getTime()
  if (currentTime >= timerToCheck.endTime) {
    timerActive = false
    finishTimer(timerToCheck)
    return 'finished'
  } else {
    timerID = setTimeout(checkTimer, 1000, timerToCheck)
    // console.log('tick')
    return 'unfinished'
  }
}

export function finishTimer (previousTimer) {
  if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount < 3) {
    // console.log('finished pomodoro #' + previousTimer.pomodoroCount + ', starting short break')
    let newEndtime = new Date().getTime() + (previousTimer.shortBreak * 60000)
    notify('You finished! Good work! Take a short break, you deserve it', 'Short Break Started')
    toggleTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount + 1,
      currentActivity: 'shortBreak',
      endTime: newEndtime
    }))
    return 'short break'
  } else if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount === 3) {
    // console.log('finished pomodoro #' + previousTimer.pomodoroCount + ', starting long break')
    let newEndtime = new Date().getTime() + (previousTimer.longBreak * 60000)
    notify('Four in a row! Awesome! Take a long one, dude.', 'Long Break Started')
    toggleTimer(Timer({
      pomodoroCount: 0,
      currentActivity: 'longBreak',
      endTime: newEndtime
    }))
    return 'long break'
  } else {
    // console.log('finished break, starting pomodoro #' + previousTimer.pomodoroCount)
    let newEndtime = new Date().getTime() + (previousTimer.pomodoro * 60000)
    notify('Recharged a bit? Good! Pick something new and go get \'em!', 'Pomodoro Started')
    toggleTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount,
      currentActivity: 'pomodoro',
      endTime: newEndtime
    }))
    return 'pomodoro'
  }
}

export function notify (theBody, theTitle) {
  let options = {
    body: theBody
  }
  let n = new Notification(theTitle, options)
  // close the notification for browsers who don't close it automatically
  setTimeout(n.close.bind(n), 5000)
}
