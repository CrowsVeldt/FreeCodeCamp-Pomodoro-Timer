(function () {
  'use strict;'

  const startButton = document.getElementById('start')
  const stopButton = document.getElementById('stop')
  const alarm = document.getElementById('alarm')

  const view = {

    timerView: document.getElementById('timer-view'),

    updateTimerView: function (time) {
      view.timerView.innerHTML = view.formatTime(time)
    },

    formatTime: function (s) {
      let seconds = s % 60

      let minutes = Math.floor(s / 60)

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
    pomodoro: 25,
    sBreak: 5,
    lBreak: 15,
    timerID: 0,
    currentTime: 0,
    currentActivity: 'pomodoro', // other options: sBreak, lBreak

    checkTime: function () {
      let check = new Date().getTime()

      timer.currentTime--

      view.updateTimerView(timer.currentTime)

      if (check >= timer.endTime) {
        alarm.play()

        clearInterval(timer.timerID)

        timer.active = false

        timer.startTimer()
      }
    },

    startTimer: function () {
      if (timer.active === false) {
        timer.active = true
        timer.start = new Date().getTime()
        timer.pomodoro = document.getElementById('pomodoro').value
        timer.sBreak = document.getElementById('short-break').value
        timer.lBreak = document.getElementById('long-break').value
        timer.endTime = timer.start + (timer.pomodoro * 60000)
        timer.currentTime = timer.pomodoro * 60

        timer.timerID = setInterval(timer.checkTime, 1000)
        view.updateTimerView(timer.currentTime)
      }
    },

    stopTimer: function () {
      if (timer.active === true) {
        timer.active = false

        clearInterval(timer.timerID)
      }
    }
  }

  view.updateTimerView(timer.pomodoro * 60)
  startButton.addEventListener('click', timer.startTimer)
  stopButton.addEventListener('click', timer.stopTimer)
}())
