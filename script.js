(function () {
  'use strict;'
  
  const startButton = document.getElementById('start')
  const stopButton = document.getElementById('stop')

  const currentTimer = {
    active: false,
    startTime: 0,
    pomodoro: 1,
    sBreak: 5,
    lBreak: 15,
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
  
  startButton.addEventListener('click', currentTimer.startTimer)
  stopButton.addEventListener('click', currentTimer.stopTimer)
}())
