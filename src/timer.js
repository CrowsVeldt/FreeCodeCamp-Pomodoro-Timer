'use strict'

import styles from './timer.css'

// function to create a 'timer' instance
export const Timer = ({
currentTime = new Date().getTime(),
startTime = currentTime,
pomodoroLength = 25,
shortBreakLength = 5,
longBreakLength = 15,
pomodoroCount = 0,
currentActivity = 'pomodoro',
endTime = 0
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

// function to start a timer
export function beginTimer () {
  setTimeout(() => {}, 1000)
}
