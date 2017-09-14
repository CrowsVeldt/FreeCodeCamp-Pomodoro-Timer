'use strict'

import * as input from '../input/input.js'

import styles from './timer.css'

// function to create a 'timer' instance
export const Timer = ({
  // leaving defaults so I'll remember what should be there
currentTime = new Date().getTime(),
startTime = currentTime,
pomodoroLength = 25,
shortBreakLength = 5,
longBreakLength = 15,
pomodoroCount = 0,
currentActivity = 'pomodoro',
endTime = startTime + (pomodoroLength * 60000)
} = {}) => ({
  currentTime,
  startTime,
  pomodoroLength,
  shortBreakLength,
  longBreakLength,
  pomodoroCount,
  currentActivity,
  endTime
})

/*
How to Instantiate Timer
new Timer({
  pomodoroLength: input.userInputs.pomodoroLength,
  shortBreakLength: input.userInputs.shortBreakLength,
  longBreakLength: input.userInputs.longBreakLength
})
*/

export function beginTimer () {
  setTimeout(() => {}, 1000)
}
