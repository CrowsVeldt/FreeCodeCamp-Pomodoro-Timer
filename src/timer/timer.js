'use strict'

import {TimerView, updateTimerView} from './timerView.js'

import {toggleSettingsView, getInputValue} from '../input/input.js'

export let timerActive = false
let timerID = 0
const milliseconds = 1000

export const Timer = ({
startTime = new Date().getTime(),
pomodoro = getInputValue('pomodoroInput'),
shortBreak = getInputValue('shortBreakInput'),
longBreak = getInputValue('longBreakInput'),
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

export function beginTimer (timer = Timer(), display = TimerView()) {
  timerActive = true
  timerID = setTimeout(checkTimer, 1000, timer, display)
  toggleSettingsView('hide')
  updateTimerView(display)
}

export function endTimer () {
  timerActive = false
  clearTimeout(timerID)
  toggleSettingsView('show')
  updateTimerView()
}

function checkTimer (timerToCheck, display) {
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

function finishTimer (previousTimer) {
  if (document.getElementById('alarm') !== null) {
    let alarm = document.getElementById('alarm')
    alarm.play()
  }
  if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount < 3) {
    let newEndtime = new Date().getTime() + (previousTimer.shortBreak * milliseconds)
    notify('You finished! Good work! Take a short break, you deserve it', 'Short Break Started')
    beginTimer(Timer({
      pomodoro: previousTimer.pomodoro,
      shortBreak: previousTimer.shortBreak,
      longBreak: previousTimer.longBreak,
      pomodoroCount: previousTimer.pomodoroCount + 1,
      currentActivity: 'shortBreak',
      endTime: newEndtime,
      timeLeft: previousTimer.shortBreak
    }), TimerView({
      title: 'Short Break',
      time: previousTimer.shortBreak
    }))
  } else if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount >= 3) {
    let newEndtime = new Date().getTime() + (previousTimer.longBreak * milliseconds)
    notify('Four in a row! Awesome! Take a long one, dude.', 'Long Break Started')
    beginTimer(Timer({
      pomodoro: previousTimer.pomodoro,
      shortBreak: previousTimer.shortBreak,
      longBreak: previousTimer.longBreak,
      pomodoroCount: 0,
      currentActivity: 'longBreak',
      endTime: newEndtime,
      timeLeft: previousTimer.longBreak
    }), TimerView({
      title: 'Long Break',
      time: previousTimer.longBreak
    }))
  } else {
    let newEndtime = new Date().getTime() + (previousTimer.pomodoro * milliseconds)
    notify('Recharged a bit? Good! Pick something new and go get \'em!', 'Pomodoro Started')
    beginTimer(Timer({
      pomodoro: previousTimer.pomodoro,
      shortBreak: previousTimer.shortBreak,
      longBreak: previousTimer.longBreak,
      pomodoroCount: previousTimer.pomodoroCount,
      endTime: newEndtime,
      timeLeft: previousTimer.pomodoro
    }), TimerView({
      title: 'Pomodoro',
      time: previousTimer.pomodoro
    }))
  }
}

function notify (theBody, theTitle) {
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
