'use strict'

import * as input from '../input/input.js'

import * as timerView from './timerView.js'

let timerActive = false
let timerID = 0

export const Timer = ({
startTime = new Date().getTime(),
pomodoro = input.userInputs.pomodoroLength,
shortBreak = input.userInputs.shortBreakLength,
longBreak = input.userInputs.longBreakLength,
pomodoroCount = 0,
currentActivity = 'pomodoro',
endTime = startTime + (pomodoro * 60000),
timeLeft = pomodoro * 60
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
  timerView.updateTimerView(display)
  timerToCheck.timeLeft--
  // console.log(timerToCheck.timeLeft)
  if (currentTime >= timerToCheck.endTime) {
    timerActive = false
    finishTimer(timerToCheck)
  } else {
    timerID = setTimeout(checkTimer, 1000, timerToCheck, display)
  }
}

export function finishTimer (previousTimer) {
  if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount < 3) {
    let newEndtime = new Date().getTime() + (previousTimer.shortBreak * 60000)
    let newTimeLeft = previousTimer.shortBreak * 60
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
    let newEndtime = new Date().getTime() + (previousTimer.longBreak * 60000)
    let newTimeLeft = previousTimer.longBreak * 60
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
    let newEndtime = new Date().getTime() + (previousTimer.pomodoro * 60000)
    notify('Recharged a bit? Good! Pick something new and go get \'em!', 'Pomodoro Started')
    toggleTimer(Timer({
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
