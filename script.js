(function () {
  'use strict;'
  
  const input = {
    
    startButton: document.getElementById('start'),
    stopButton: document.getElementById('stop'),
    pomodoroInput: document.getElementById('pomodoro').value,
    shortBreakInput: document.getElementById('short-break').value,
    longBreakInput: document.getElementById('long-break').value
    
  }
  
  const view = {
    
    timerView: document.getElementById('timer').value
    
  }

  const currentTimer = {
    active: false,
    startTime: 0,
    pomodoro: input.pomodoroInput,
    sBreak: input.shortBreakInput,
    lBreak: input.longBreakInput,
    timerID: 0,
    
    checkTime: function checkTime () {
      console.log('check')

      let check = new Date().getTime()

      if (check >= currentTimer.endTime) {
        currentTimer.endTime = check + (currentTimer.pomodoro * 60000)

        console.log('restart')
      }
    },
    
    startTimer: function startTimer () {
      if (currentTimer.active === false) {
        currentTimer.active = true
        currentTimer.startTime = new Date().getTime()
        currentTimer.endTime = currentTimer.startTime + (currentTimer.pomodoro * 60000)

        currentTimer.timerID = setInterval(currentTimer.checkTime, 1000)
      }
    },
    
    stopTimer: function stopTimer () {
      console.log('stopped')
      if (currentTimer.active === true) {
        currentTimer.active = false

        clearInterval(currentTimer.timerID)
      }
    }  
  }
  
  input.startButton.addEventListener('click', currentTimer.startTimer)
  input.stopButton.addEventListener('click', currentTimer.stopTimer)
}())
