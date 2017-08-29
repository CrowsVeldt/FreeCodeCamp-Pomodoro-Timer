(function () {
  'use strict;'

  const input = {

    startButton: document.getElementById('start'),
    stopButton: document.getElementById('stop'),
    alarm: document.getElementById('alarm'),
    pomodoroInput: document.getElementById('pomodoro'),
    shortBreakInput: document.getElementById('short-break'),
    longBreakInput: document.getElementById('long-break'),

    acceptTimerInput: function (inputName, minutes) {
      if (timer.active === false) {
        timer[inputName] = minutes * 60
        view.updateTimerView(minutes * 60, timer.currentActivity)
      }
    }
  }

  const view = {

    timerView: document.getElementById('timer-view'),
    timer: document.getElementById('timer'),
    timerTitle: document.getElementById('timer-title'),
    checkmarks: document.getElementById('checkmarks'),

    updateTimerView: function (time, activity) {
      view.timer.innerHTML = view.formatTime(time)
      view.timerTitle.innerHTML = activity
      view.checkmarks.innerHTML = 'X'.repeat(timer.pomodorosFinished)
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
    },

    fillTimerView: function (percent, color) {
      // TODO: make it work

      view.timerView.style.backgroundImage = 'linear-gradient(0deg, ' + color + ' ' + percent + '%, transparent 1%)'
    }
  }

  const timer = {
    active: false,
    start: 0,
    pomodoro: input.pomodoroInput.value * 60,
    shortBreak: input.shortBreakInput.value * 60,
    longBreak: input.longBreakInput.value * 60,
    timerID: 0,
    endTime: 0,
    currentTime: 0,
    currentActivity: 'Pomodoro',
    pomodorosFinished: 0,

    checkTime: function () {
      let check = new Date().getTime()

      timer.currentTime--

      view.updateTimerView(timer.currentTime, timer.currentActivity)

      timer.timerID = setTimeout(timer.checkTime, 1000)

      if (check >= timer.endTime) {
        input.alarm.play()

        if (timer.currentActivity === 'Pomodoro') {
          if (timer.pomodorosFinished < 3) {
            timer.pomodorosFinished++
            timer.startTime(timer.shortBreak, 'Short Break')
            window.alert('You\'ve finished for now, take a break!')
          } else {
            timer.pomodorosFinished++
            timer.startTime(timer.longBreak, 'Long Break')
            timer.pomodorosFinished = 0
            window.alert('Well done! Take a good long break now. Youe deserve it!')
          }
        } else if (timer.currentActivity === 'Short Break' || timer.currentActivity === 'Long Break') {
          timer.startTime(timer.pomodoro, 'Pomodoro')
          window.alert('Did you rest a bit? Good! What do you want to do next?')
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
      timer.endTime = timer.start + (activity * 1000)
      timer.currentTime = activity

      timer.timerID = setTimeout(timer.checkTime, 1000)
      view.updateTimerView(timer.currentTime, timer.currentActivity)
    },

    stopTime: function () {
      if (timer.active === true) {
        timer.active = false

        clearTimeout(timer.timerID)

        input.acceptTimerInput('longBreak', input.longBreakInput.value)
        input.acceptTimerInput('shortBreak', input.shortBreakInput.value)
        input.acceptTimerInput('pomodoro', input.pomodoroInput.value)
      }
    }
  }

  view.fillTimerView(10, 'lightgreen')
  view.updateTimerView(timer.pomodoro, 'Pomodoro')
  input.startButton.addEventListener('click', function () { timer.startTime(timer.pomodoro, 'Pomodoro') })
  input.stopButton.addEventListener('click', timer.stopTime)
  input.pomodoroInput.addEventListener('change', function () { input.acceptTimerInput('pomodoro', input.pomodoroInput.value) })
  input.shortBreakInput.addEventListener('change', function () { input.acceptTimerInput('shortBreak', input.shortBreakInput.value) })
  input.longBreakInput.addEventListener('change', function () { input.acceptTimerInput('longBreak', input.longBreakInput.value) })
}())
