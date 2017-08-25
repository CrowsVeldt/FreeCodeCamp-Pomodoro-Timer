(function () {
  'use strict;'

  const currentTimer = {
    active: false,
    startTime: 0,
    pomodoro: 1,
    sBreak: 5,
    lBreak: 15,
    timerID: 0
  }

  const button = document.getElementById('play-reset')

  // Extract the code from addEventListener to these functions, call them from the eventListener

  function startTimer () {
    // debugger
    if (currentTimer.active === false) {
      currentTimer.active = true
      currentTimer.startTime = new Date().getTime()
      currentTimer.endTime = currentTimer.startTime + (currentTimer.pomodoro * 60000)

      currentTimer.timerID = setInterval(function () {
        console.log('check')

        let check = new Date().getTime()

        if (check >= currentTimer.endTime) {
          // currentTimer.startTime = check

          currentTimer.endTime = check + (currentTimer.pomodoro * 60000)

          console.log('restart')
        }
      }, 1000)
    }
  }

  function resetTimer () {
    // debugger
    if (currentTimer.active === true) {
      currentTimer.active = false

      clearInterval(currentTimer.timerID)
    }
  }

  button.addEventListener('click', startTimer)
  button.addEventListener('click', resetTimer)
}())
