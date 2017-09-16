'use strict'

import * as input from '../input/input.js'

import * as timerView from './timerView.js'

let timerActive = false
let timerID = 0

export const Timer = ({
startTime = new Date().getTime(),
// Multiplying to convert minutes to seconds:
pomodoro = input.userInputs.pomodoroLength * 60,
shortBreak = input.userInputs.shortBreakLength * 60,
longBreak = input.userInputs.longBreakLength * 60,
pomodoroCount = 0,
currentActivity = 'pomodoro',
// Converting seconds to milliseconds, for comparing with the result of Date.getTime()
endTime = startTime + (pomodoro * 1000),
timeLeft = pomodoro
} = {}) => ({
  startTime,
  pomodoro,
  shortBreak,
  longBreak,
  pomodoroCount,
  currentActivity,
  endTime,
  timeLeft
})

export function toggleTimer (timer = Timer(), display = timerView.TimerView()) {
  if (timerActive === true) {
    clearTimeout(timerID)
    timerActive = false
    timerView.updateTimerView()
  } else {
    timerID = setTimeout(checkTimer, 1000, timer, display)
    timerActive = true
    timerView.updateTimerView(display)
  }
}

export function checkTimer (timerToCheck, display) {
  let currentTime = new Date().getTime()
  timerToCheck.timeLeft--
  timerView.updateTimerView(timerView.TimerView({
    title: display.title,
    time: timerToCheck.timeLeft
  }))
  if (currentTime >= timerToCheck.endTime) {
    timerActive = false
    finishTimer(timerToCheck)
  } else {
    timerID = setTimeout(checkTimer, 1000, timerToCheck, display)
  }
}

export function finishTimer (previousTimer) {
  if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount < 3) {
    let newEndtime = new Date().getTime() + (previousTimer.shortBreak * 1000)
    let newTimeLeft = previousTimer.shortBreak
    notify('You finished! Good work! Take a short break, you deserve it', 'Short Break Started')
    toggleTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount + 1,
      currentActivity: 'shortBreak',
      endTime: newEndtime,
      timeLeft: newTimeLeft
    }), timerView.TimerView({
      title: 'Short Break',
      time: previousTimer.shortBreak
    }))
  } else if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount === 3) {
    let newEndtime = new Date().getTime() + (previousTimer.longBreak * 1000)
    let newTimeLeft = previousTimer.longBreak
    notify('Four in a row! Awesome! Take a long one, dude.', 'Long Break Started')
    toggleTimer(Timer({
      pomodoroCount: 0,
      currentActivity: 'longBreak',
      endTime: newEndtime,
      timeLeft: newTimeLeft
    }), timerView.TimerView({
      title: 'Long Break',
      time: previousTimer.longBreak
    }))
  } else {
    // Using previousTimer.pomodoro so that changing input values doesn't change the timer while it's running
    let newEndtime = new Date().getTime() + (previousTimer.pomodoro * 1000)
    notify('Recharged a bit? Good! Pick something new and go get \'em!', 'Pomodoro Started')
    toggleTimer(Timer({ // Leaving timeLeft out so it uses the default value
      pomodoroCount: previousTimer.pomodoroCount,
      currentActivity: 'pomodoro',
      endTime: newEndtime
    }))
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
