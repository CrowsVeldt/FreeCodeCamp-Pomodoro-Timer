'use strict'

import {TimerView, updateTimerView} from './timerView.js'

import {toggleSettingsView, getInputValue} from '../input/input.js'

import {updateProgressCircle} from './progressCircle.js'

import Icon from '../static/icon.svg'

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
  updateProgressCircle(0, 0)
  updateTimerView(display)
}

export function endTimer () {
  timerActive = false
  clearTimeout(timerID)
  toggleSettingsView('show')
  updateTimerView()
  updateProgressCircle(0, 0)
}

function checkTimer (timerToCheck, display) {
  let currentTime = new Date().getTime()
  timerToCheck.timeLeft--
  updateTimerView(TimerView({
    title: display.title,
    time: timerToCheck.timeLeft
  }))

  let totalTime = (timerToCheck.endTime - timerToCheck.startTime) / 1000
  updateProgressCircle(totalTime, (totalTime - timerToCheck.timeLeft))

  if (currentTime >= timerToCheck.endTime) {
    finishTimer(timerToCheck)
  } else {
    timerID = setTimeout(checkTimer, 1000, timerToCheck, display)
  }
}

function finishTimer (previousTimer) {
  let newStartTime = new Date().getTime()

  if (document.getElementById('alarm') !== null) {
    let alarm = document.getElementById('alarm')
    alarm.play()
  }
  if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount < 3) {
    let newEndtime = newStartTime + (previousTimer.shortBreak * milliseconds)

    notify('You finished, Take a short break!', 'Short Break Started')
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
    let newEndtime = newStartTime + (previousTimer.longBreak * milliseconds)

    notify('Four in a row! Take a long one, dude.', 'Long Break Started')
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
    let newEndtime = newStartTime + (previousTimer.pomodoro * milliseconds)

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
    body: theBody,
    icon: Icon
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
