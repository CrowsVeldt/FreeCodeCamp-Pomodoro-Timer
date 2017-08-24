(function () {
  'use strict;'

  const currentTimer = {
    active: false,
    startTime: 0,
    pomodoro: 1,
    sBreak: 5,
    lBreak: 15
  }

  const button = document.getElementById('play-reset')

  button.addEventListener('click', function () {
    
    var intervalID

    if(currentTimer.active === false){
      
      currentTimer.active = true
      currentTimer.startTime = new Date().getTime()
      currentTimer.endTime = currentTimer.startTime + (currentTimer.pomodoro * 60000)
    
        intervalID = setInterval(function () {
        console.log('check')

        let check = new Date().getTime()

        if (check >= currentTimer.endTime) {
          //currentTimer.startTime = check

          currentTimer.endTime = check + (currentTimer.pomodoro * 60000)

          console.log('restart')
        }
      }, 1000) 
      
      
    } else {
    //debugger
      currentTimer.active = false
      
      clearInterval(intervalID)
    }
  })
}())
new Date().getT