import styles from './timer.css'

// function to create a 'timer' instance
export const createTimer = ({
currentTime = new Date().getTime(),
startTime = currentTime
} = {}) => ({
  currentTime,
  startTime
})
