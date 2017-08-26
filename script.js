(function () {
  'use strict;'

  const input = {

    startButton: document.getElementById('start'),
    stopButton: document.getElementById('stop'),
    alarm: document.getElementById('alarm'),
    pomodoroInput: document.getElementById('pomodoro'),
    shortBreakInput: document.getElementById('short-break'),
    longBreakInput: document.getElementById('long-break'),

    acceptTimerInput: function (elementName, value) {
      if (timer.active === false) {
        timer[elementName] = value
        view.updateTimerView(value * 60)
      }
    }
  }

  const view = {

    timer: document.getElementById('timer'),
    timerTitle: document.getElementById('timer-title'),

    updateTimerView: function (time) {
      view.timer.innerHTML = view.formatTime(time)
      view.timerTitle.innerHTML = timer.currentActivity
    },

    formatTime: function (sec) {
      let seconds = sec % 60

      let minutes = Math.floor(sec / 60)

      if (seconds === 0) {
        return minutes + ':00'
      } else if (seconds < 10) {
        return minutes + ':0' + seconds
      } else {
        return minutes + ':' + seconds
      }
    }

  }

  const timer = {
    active: false,
    start: 0,
    pomodoro: input.pomodoroInput.value,
    shortBreak: input.shortBreakInput.value,
    longBreak: input.longBreakInput.value,
    timerID: 0,
    endTime: 0,
    currentTime: 0,
    currentActivity: 'Pomodoro', // other options: Short Break, Long Break

    checkTime: function () {
      let check = new Date().getTime()

      timer.currentTime--

      view.updateTimerView(timer.currentTime)

      timer.timerID = setTimeout(timer.checkTime, 1000)

      if (check >= timer.endTime) {
        input.alarm.play()

        if (timer.currentActivity === 'Pomodoro') {
          timer.startTime(timer.shortBreak, 'Short Break')
        } else if (timer.currentActivity === 'Short Break') {
          timer.startTime(timer.pomodoro, 'Pomodoro')
        }
      }
    },

    startTime: function (activity, activityName) {
      if (timer.active === true) {
        clearTimeout(timer.timerID)
      }

      timer.currentActivity = activityName
      timer.active = true
      timer.start = new Date().getTime()
      timer.endTime = timer.start + (activity * 60000)
      timer.currentTime = activity * 60

      timer.timerID = setTimeout(timer.checkTime, 1000)
      view.updateTimerView(timer.currentTime)
    },

    stopTime: function () {
      if (timer.active === true) {
        timer.active = false

        timer.currentActivity = 'pomodoro'

        clearTimeout(timer.timerID)

        input.acceptTimerInput('longBreak', input.longBreakInput.value)
        input.acceptTimerInput('shortBreak', input.shortBreakInput.value)
        input.acceptTimerInput('pomodoro', input.pomodoroInput.value)
      }
    }
  }

  view.updateTimerView(timer.pomodoro * 60)
  input.startButton.addEventListener('click', function () { timer.startTime(timer.pomodoro, 'Pomodoro') })
  input.stopButton.addEventListener('click', timer.stopTime)
  input.pomodoroInput.addEventListener('change', function () { input.acceptTimerInput('pomodoro', input.pomodoroInput.value) })
  input.shortBreakInput.addEventListener('change', function () { input.acceptTimerInput('shortBreak', input.shortBreakInput.value) })
  input.longBreakInput.addEventListener('change', function () { input.acceptTimerInput('longBreak', input.longBreakInput.value) })
}())
