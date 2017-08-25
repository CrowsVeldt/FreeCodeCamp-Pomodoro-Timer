(function () {
  'use strict;'
  
  const input = {
    
    startButton: document.getElementById('start'),
    stopButton: document.getElementById('stop')
    
  }
  
  const view = {
    
    timerView: document.getElementById('timer-view').value
    
  }

  const timer = {
    active: false,
    startTime: 0,
    pomodoro: 0,
    sBreak: 0,
    lBreak: 0,
    timerID: 0,
    
    checkTime: function checkTime () {
      console.log('check')

      let check = new Date().getTime()

      if (check >= timer.endTime) {
        timer.endTime = check + (timer.pomodoro * 60000)

        console.log('restart')
      }
    },
    
    startTimer: function startTimer () {
      if (timer.active === false) {
        timer.active = true
        timer.startTime = new Date().getTime()
        timer.pomodoro = document.getElementById('pomodoro').value
        timer.sBreak = document.getElementById('short-break').value
        timer.lBreak = document.getElementById('long-break').value
        timer.endTime = timer.startTime + (timer.pomodoro * 60000)

        timer.timerID = setInterval(timer.checkTime, 1000)
      }
    },
    
    stopTimer: function stopTimer () {
      console.log('stopped')
      if (timer.active === true) {
        timer.active = false

        clearInterval(timer.timerID)
      }
    }  
  }
  
  input.startButton.addEventListener('click', timer.startTimer)
  input.stopButton.addEventListener('click', timer.stopTimer)
}())
