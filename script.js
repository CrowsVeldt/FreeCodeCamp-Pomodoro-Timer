(function () {
  'use strict;'
  
  const currentTimer = {
    active: false,
    startTime: 0,
    pomodoro: 50,
    sBreak: 5,
    lBreak: 15,
  }
  
  const button = document.getElementById('play-reset')
  
  button.addEventListener('click', function(){
    
  // When currentTime is equal to startTime.getMinutes() + pomodoro % 60 the time is up.
    
    currentTimer.active = true
    currentTimer.startTime = new Date().getMinutes()
    currentTimer.endTime = (currentTimer.startTime + currentTimer.pomodoro) % 60
    
  })
}())