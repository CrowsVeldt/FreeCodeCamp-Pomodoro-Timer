import {state} from '../state'

import notify from '../notification.js'

import {updateTimerView} from './timerView.js'

import {updateProgressCircle} from './progressCircle.js'

let timerID = 0

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
  pomodoro: state.activities.pomodoro.length,
  shortBreak: state.activities.shortBreak.length,
  longBreak: state.activities.longBreak.length,
  pomodoroCount: 0,
  currentActivity: 'Pomodoro',
  endTime: new Date().getTime() + (state.activities.pomodoro.length * state.milliseconds),
  timeLeft: state.activities.pomodoro.length
})) {
  state.timerActive = true
  timerID = setTimeout(checkTimer, 1000, timer, timer.currentActivity, timer.timeLeft)
  updateProgressCircle(0, 0)
  updateTimerView(timer.currentActivity, timer.timeLeft, timer.pomodoroCount)

  const timerTick = document.getElementById('tick')
  if (state.ticking) {
    timerTick.play()
  }
}

export function endTimer () {
  state.timerActive = false
  clearTimeout(timerID)

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
    timerID = setTimeout(checkTimer, 1000, timerToCheck, title, time)
  }
}

function finishTimer (previousTimer) {
  if (document.getElementById('alarm') !== null && !state.silence) {
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
      pomodoroCount: 4,
      currentActivity: 'Long Break',
      endTime: newEndtime,
      timeLeft: previousTimer.longBreak
    }))
  } else {
    const newStartTime = new Date().getTime()
    const newEndtime = newStartTime + (previousTimer.pomodoro * state.milliseconds)

    const currentPomodoroCount = previousTimer.pomodoroCount === 4 ? 0 : previousTimer.pomodoroCount

    notify('Recharged a bit? Good! Pick something new and go get \'em!', 'Pomodoro Started')
    beginTimer(Timer({
      startTime: newStartTime,
      pomodoro: previousTimer.pomodoro,
      shortBreak: previousTimer.shortBreak,
      longBreak: previousTimer.longBreak,
      pomodoroCount: currentPomodoroCount,
      currentActivity: 'Pomodoro',
      endTime: newEndtime,
      timeLeft: previousTimer.pomodoro
    }))
  }
}
