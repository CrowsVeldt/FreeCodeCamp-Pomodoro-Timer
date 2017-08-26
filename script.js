(function () {
  'use strict;'



  const input = {
    
    startButton: document.getElementById('start'),
    stopButton: document.getElementById('stop'),
    alarm: document.getElementById('alarm'),
    pomodoroInput: document.getElementById('pomodoro'),
    shortBreakInput: document.getElementById('short-break'),
    longBreakInput: document.getElementById('long-break')
    
  }
  
  const view = {

    timerView: document.getElementById('timer-view'),

    updateTimerView: function (time) {
      view.timerView.innerHTML = view.formatTime(time)
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
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    timerID: 0,
    currentTime: 0,
    currentActivity: 'pomodoro', // other options: shortBreak, longBreak

    checkTime: function () {
      
      let check = new Date().getTime()

      timer.currentTime--

      view.updateTimerView(timer.currentTime)

      if (check >= timer.endTime) {
        
        alarm.play()

        clearInterval(timer.timerID)

        timer.active = false
        
        if(timer.currentActivity === 'pomodoro'){
          
          timer.startTime(timer.shortBreak)
          
          timer.currentActivity = 'shortBreak'
          
        } else if (timer.currentActivity === 'shortBreak'){
          
          timer.startTime(timer.pomodoro)
          
          timer.currentActivity = 'pomodoro'
          
        }      
      }
    },

    startTime: function (activity) {
      
      if (timer.active === false) {
        timer.active = true
        timer.start = new Date().getTime()
        timer.pomodoro = input.pomodoroInput.value
        timer.shortBreak = input.shortBreakInput.value
        timer.longBreak = input.longBreakInput.value
        timer.endTime = timer.start + (activity * 60000)
        timer.currentTime = activity * 60

        timer.timerID = setInterval(timer.checkTime, 1000)
        view.updateTimerView(timer.currentTime)
      }
    },

    stopTime: function () {
      if (timer.active === true) {
        timer.active = false

        clearInterval(timer.timerID)
      }
    }
  }

  view.updateTimerView(timer.pomodoro * 60)
  input.startButton.addEventListener('click',function () {timer.startTime(timer.pomodoro)})
  input.stopButton.addEventListener('click', timer.stopTime)
  input.pomodoroInput.addEventListener('change', function () {timer.pomodoro = this.value})
}())
