import styles from './timer.css'

// function to create a 'timer' instance
const createTimer = ({
currentTime = new Date().getTime() // setting default values
} = {}) => ({
  currentTime
})

export const time = createTimer()
