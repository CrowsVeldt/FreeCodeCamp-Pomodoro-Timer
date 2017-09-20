'use strict'

import {TimerView, updateTimerView} from './timerView.js'

import {toggleSettingsView} from '../input/input.js'

export let timerActive = false
let timerID = 0
const seconds = 60
const milliseconds = 1000

export const Timer = ({
startTime = new Date().getTime(),
pomodoro = document.getElementById('pomodoroInput').value * seconds,
shortBreak = document.getElementById('shortBreakInput').value * seconds,
longBreak = document.getElementById('longBreakInput').value * seconds,
pomodoroCount = 0,
currentActivity = 'pomodoro',
endTime = startTime + (pomodoro * milliseconds),
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

export function toggleTimer (timer = Timer(), display = TimerView()) {
  if (timerActive === true) {
    timerActive = false
    clearTimeout(timerID)
    toggleSettingsView('hide')
    updateTimerView()
  } else if (timerActive === false) {
    timerActive = true
    timerID = setTimeout(checkTimer, 1000, timer, display)
    toggleSettingsView('show')
    updateTimerView(display)
  }
}

export function checkTimer (timerToCheck, display) {
  let currentTime = new Date().getTime()
  timerToCheck.timeLeft--
  updateTimerView(TimerView({
    title: display.title,
    time: timerToCheck.timeLeft
  }))
  if (currentTime >= timerToCheck.endTime) {
    finishTimer(timerToCheck)
  } else {
    timerID = setTimeout(checkTimer, 1000, timerToCheck, display)
  }
}

export function finishTimer (previousTimer) {
  if (document.getElementById('alarm') !== null) {
    let alarm = document.getElementById('alarm')
    alarm.play()
  }
  if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount < 3) {
    let newEndtime = new Date().getTime() + (previousTimer.shortBreak * milliseconds)
    let newTimeLeft = previousTimer.shortBreak
    notify('You finished! Good work! Take a short break, you deserve it', 'Short Break Started')
    toggleTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount + 1,
      currentActivity: 'shortBreak',
      endTime: newEndtime,
      timeLeft: newTimeLeft
    }), TimerView({
      title: 'Short Break',
      time: previousTimer.shortBreak
    }))
  } else if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount >= 3) {
    let newEndtime = new Date().getTime() + (previousTimer.longBreak * milliseconds)
    let newTimeLeft = previousTimer.longBreak
    notify('Four in a row! Awesome! Take a long one, dude.', 'Long Break Started')
    toggleTimer(Timer({
      pomodoroCount: 0,
      currentActivity: 'longBreak',
      endTime: newEndtime,
      timeLeft: newTimeLeft
    }), TimerView({
      title: 'Long Break',
      time: previousTimer.longBreak
    }))
  } else {
    let newEndtime = new Date().getTime() + (previousTimer.pomodoro * milliseconds)
    notify('Recharged a bit? Good! Pick something new and go get \'em!', 'Pomodoro Started')
    toggleTimer(Timer({
      pomodoroCount: previousTimer.pomodoroCount,
      endTime: newEndtime
    }))
  }
}

export function notify (theBody, theTitle) {
  let options = {
    body: theBody
  }
  let n = new Notification(theTitle, options)
  // close the notification for systems which don't close it automatically
  setTimeout(n.close.bind(n), 7000)

  n.onclick = function (event) {
    if (document.getElementById('alarm') !== null) {
      let alarm = document.getElementById('alarm')
      alarm.pause()
    }
  }
}
