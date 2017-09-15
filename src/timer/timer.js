'use strict'

import * as input from '../input/input.js'

import styles from './timer.css'

// function to create a 'timer' instance
export const Timer = ({
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
  endTime,
  timerID: 0
})

export function beginTimer (timer = Timer()) {
  timer.timerID = setTimeout(checkTimer, 1000, timer)
}

export function checkTimer (timerToCheck) {
  let currentTime = new Date().getTime()
  if (currentTime >= timerToCheck.endTime) {
    finishTimer(timerToCheck)
    return 'finished'
  } else {
    timerToCheck.timerID = setTimeout(checkTimer, 1000, timerToCheck)
    console.log('tick')
    return 'unfinished'
  }
}

export function finishTimer (previousTimer) {
  if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount < 3) {
    console.log('finished pomodoro #' + previousTimer.pomodoroCount + ', starting short break')
    let newEndtime = new Date().getTime() + (previousTimer.shortBreak * 60000)
    spawnNotification('You finished! Good work! Take a short break, you deserve it', 'Pomodoro: Finished')
    beginTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount + 1,
      currentActivity: 'shortBreak',
      endTime: newEndtime
    }))
    return 'short break'
  } else if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount === 3) {
    console.log('finished pomodoro #' + previousTimer.pomodoroCount + ', starting long break')
    let newEndtime = new Date().getTime() + (previousTimer.longBreak * 60000)
    beginTimer(Timer({
      pomodoroCount: 0,
      currentActivity: 'longBreak',
      endTime: newEndtime
    }))
    return 'long break'
  } else {
    console.log('finished break, starting pomodoro #' + previousTimer.pomodoroCount)
    let newEndtime = new Date().getTime() + (previousTimer.pomodoro * 60000)
    spawnNotification('Recharged a bit? Good! Pick something new and go get \'em!', 'New Pomodoro Started')
    beginTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount,
      currentActivity: 'pomodoro',
      endTime: newEndtime
    }))
    return 'pomodoro'
  }
}

export function spawnNotification (theBody, theTitle) {
  let options = {
    body: theBody
  }
  let n = new Notification(theTitle, options)
}
