import {state} from '../state'

import {updateTimerView} from './timerView.js'

// import {getInputValue} from '../settings/settingsMenu.js'

import {tickingIsDesired} from '../settings/tickToggle'

import {updateProgressCircle} from './progressCircle.js'

import Icon from '../static/icon.png'

export const Timer = ({
startTime,
pomodoro,
shortBreak,
longBreak,
pomodoroCount,
currentActivity,
endTime,
timeLeft
}) => ({
  startTime,
  pomodoro,
  shortBreak,
  longBreak,
  pomodoroCount,
  currentActivity,
  endTime,
  timeLeft
})

export function beginTimer (timer = Timer({
  startTime: new Date().getTime(),
  pomodoro: state.activities[0].length,
  shortBreak: state.activities[1].length,
  longBreak: state.activities[2].length,
  pomodoroCount: 0,
  currentActivity: 'Pomodoro',
  endTime: new Date().getTime() + (state.activities[0].length * state.milliseconds),
  timeLeft: state.activities[0].length
})) {
  state.timerActive = true
  state.timerID = setTimeout(checkTimer, 1000, timer, timer.currentActivity, timer.timeLeft)
  updateProgressCircle(0, 0)
  updateTimerView(timer.currentActivity, timer.timeLeft, timer.pomodoroCount)

  const timerTick = document.getElementById('tick')
  if (tickingIsDesired()) {
    timerTick.play()
  }
}

export function endTimer () {
  state.timerActive = false
  clearTimeout(state.timerID)

  const timerTick = document.getElementById('tick')
  timerTick.pause()
}

function checkTimer (timerToCheck, title, time) {
  const currentTime = new Date().getTime()
  timerToCheck.timeLeft--
  updateTimerView(title, timerToCheck.timeLeft, timerToCheck.pomodoroCount)

  const totalTime = (timerToCheck.endTime - timerToCheck.startTime) / 1000
  updateProgressCircle(totalTime, (totalTime - timerToCheck.timeLeft))

  if (currentTime >= timerToCheck.endTime) {
    finishTimer(timerToCheck)
  } else {
    state.timerID = setTimeout(checkTimer, 1000, timerToCheck, title, time)
  }
}

function finishTimer (previousTimer) {
  if (document.getElementById('alarm') !== null) {
    const alarm = document.getElementById('alarm')
    alarm.play()
  }
  if (previousTimer.currentActivity === 'Pomodoro' && previousTimer.pomodoroCount < 3) {
    const newStartTime = new Date().getTime()
    const newEndtime = newStartTime + (previousTimer.shortBreak * state.milliseconds)

    notify('You finished, Take a short break!', 'Short Break Started')
    beginTimer(Timer({
      startTime: newStartTime,
      pomodoro: previousTimer.pomodoro,
      shortBreak: previousTimer.shortBreak,
      longBreak: previousTimer.longBreak,
      pomodoroCount: previousTimer.pomodoroCount + 1,
      currentActivity: 'Short Break',
      endTime: newEndtime,
      timeLeft: previousTimer.shortBreak
    }))
  } else if (previousTimer.currentActivity === 'Pomodoro' && previousTimer.pomodoroCount >= 3) {
    const newStartTime = new Date().getTime()
    const newEndtime = newStartTime + (previousTimer.longBreak * state.milliseconds)

    notify('Four in a row! Take a long one, dude.', 'Long Break Started')
    beginTimer(Timer({
      startTime: newStartTime,
      pomodoro: previousTimer.pomodoro,
      shortBreak: previousTimer.shortBreak,
      longBreak: previousTimer.longBreak,
      pomodoroCount: 0,
      currentActivity: 'Long Break',
      endTime: newEndtime,
      timeLeft: previousTimer.longBreak
    }))
  } else {
    const newStartTime = new Date().getTime()
    const newEndtime = newStartTime + (previousTimer.pomodoro * state.milliseconds)

    notify('Recharged a bit? Good! Pick something new and go get \'em!', 'Pomodoro Started')
    beginTimer(Timer({
      startTime: newStartTime,
      pomodoro: previousTimer.pomodoro,
      shortBreak: previousTimer.shortBreak,
      longBreak: previousTimer.longBreak,
      pomodoroCount: previousTimer.pomodoroCount,
      currentActivity: 'Pomodoro',
      endTime: newEndtime,
      timeLeft: previousTimer.pomodoro
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

  n.onclick = event => {
    if (document.getElementById('alarm') !== null) {
      const alarm = document.getElementById('alarm')
      alarm.pause()
      alarm.currentTime = 0
    }
    n.close()
  }
}
