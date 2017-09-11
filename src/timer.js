import styles from './timer.css'

// function to create a 'timer' instance
export const createTimer = ({
currentTime = new Date().getTime(),
startTime = currentTime,
pomodoroLength = 25,
shortBreakLength = 5,
longBreakLength = 15
} = {}) => ({
  currentTime,
  startTime,
  pomodoroLength,
  shortBreakLength,
  longBreakLength
})
