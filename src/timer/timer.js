'use strict'

import * as input from '../input/input.js'

import styles from './timer.css'

// function to create a 'timer' instance
export const Timer = ({
startTime = new Date().getTime(),
pomodoroLength = input.userInputs.pomodoroLength,
shortBreakLength = input.userInputs.shortBreakLength,
longBreakLength = input.userInputs.longBreakLength,
pomodoroCount = 0,
currentActivity = 'pomodoro',
endTime = startTime + (pomodoroLength * 60000)
} = {}) => ({
  startTime,
  pomodoroLength,
  shortBreakLength,
  longBreakLength,
  pomodoroCount,
  currentActivity,
  endTime,
  timerID: 0
})

export function beginTimer (timer = new Timer()) {
  timer.timerID = setTimeout(checkTimer, 1000, timer)
}

export function checkTimer (timerToCheck) {
  let currentTime = new Date().getTime()
  if (currentTime >= timerToCheck.endTime) {
    console.log('finished')
  } else {
    console.log('tick')
    timerToCheck.timerID = setTimeout(checkTimer, 1000, timerToCheck)
  }
}
