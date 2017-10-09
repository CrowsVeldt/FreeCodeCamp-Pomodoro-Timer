'use strict'

import {TimerView, updateTimerView} from './timerView.js'

import {toggleSettingsMenu, getInputValue} from '../input/settingsMenu.js'

import {tickingIsDesired} from '../input/tickToggle'

import {updateProgressCircle} from './progressCircle.js'

import Icon from '../static/icon.png'

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
  toggleSettingsMenu('hide')
  updateProgressCircle(0, 0)
  updateTimerView(display)

  const timerTick = document.getElementById('tick')
  if (tickingIsDesired()) {
    timerTick.play()
  }
}

export function endTimer () {
  timerActive = false
  clearTimeout(timerID)
  toggleSettingsMenu('show')
  updateTimerView()
  updateProgressCircle(0, 0)

  const timerTick = document.getElementById('tick')
  timerTick.pause()
}

function checkTimer (timerToCheck, display) {
  const currentTime = new Date().getTime()
  timerToCheck.timeLeft--
  updateTimerView(TimerView({
    title: display.title,
    time: timerToCheck.timeLeft
  }))

  const totalTime = (timerToCheck.endTime - timerToCheck.startTime) / 1000
  updateProgressCircle(totalTime, (totalTime - timerToCheck.timeLeft))

  if (currentTime >= timerToCheck.endTime) {
    finishTimer(timerToCheck)
  } else {
    timerID = setTimeout(checkTimer, 1000, timerToCheck, display)
  }
}

function finishTimer (previousTimer) {
  const newStartTime = new Date().getTime()

  if (document.getElementById('alarm') !== null) {
    const alarm = document.getElementById('alarm')
    alarm.play()
  }
  if (previousTimer.currentActivity === 'pomodoro' && previousTimer.pomodoroCount < 3) {
    const newEndtime = newStartTime + (previousTimer.shortBreak * milliseconds)

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
    const newEndtime = newStartTime + (previousTimer.longBreak * milliseconds)

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
    const newEndtime = newStartTime + (previousTimer.pomodoro * milliseconds)

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
  const options = {
    body: theBody,
    icon: Icon
  }
  const n = new Notification(theTitle, options)
  // close the notification for systems which don't close it automatically
  setTimeout(n.close.bind(n), 7000)

  n.onclick = function (event) {
    if (document.getElementById('alarm') !== null) {
      const alarm = document.getElementById('alarm')
      alarm.pause()
    }
  }
}
