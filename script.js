(function () {
  'use strict;'

  const startButton = document.getElementById('start')
  const stopButton = document.getElementById('stop')

  const view = {
    
    timerView: document.getElementById('timer-view'),
    
    updateTimerView: function (time) {
      
      view.timerView.innerHTML = time
      
    },
    
    formatTime: function (ms) {
      
      //write this function
      
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

    checkTime: function () {
      console.log('check')
      
      let check = new Date().getTime()
      
      timer.currentTime--
      
      view.updateTimerView(timer.currentTime)

      if (check >= timer.endTime) {
        clearInterval(timer.timerID)
        
        timer.active = false
        
        timer.startTimer()
        
        console.log('restart')
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
      console.log('stopped')
      if (timer.active === true) {
        timer.active = false

        clearInterval(timer.timerID)
      }
    }
  }
  
  view.updateTimerView(timer.pomodoro)
  startButton.addEventListener('click', timer.startTimer)
  stopButton.addEventListener('click', timer.stopTimer)
}())
