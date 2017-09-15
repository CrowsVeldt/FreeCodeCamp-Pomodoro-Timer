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
  } else {
    console.log('tick')
    timerToCheck.timerID = setTimeout(checkTimer, 1000, timerToCheck)
  }
}

export function finishTimer (previousTimer) {
  if (previousTimer.currentActivity === 'pomodoro') {
    console.log('finished pomodoro #' + previousTimer.pomodoroCount)
    let newEndtime = new Date().getTime() + (previousTimer.shortBreak * 60000)
    beginTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount + 1,
      currentActivity: 'shortBreak',
      endTime: newEndtime
    }))
  } else {
    console.log('finished break')
    let newEndtime = new Date().getTime() + (previousTimer.pomodoro * 60000)
    beginTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount,
      currentActivity: 'pomodoro',
      endTime: newEndtime
    }))
  }
}
