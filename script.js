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
  // When currentTime is equal to startTime.getMinutes() + pomodoro % 60 the time is up.

    currentTimer.active = true
    currentTimer.startTime = new Date().getMinutes()
    currentTimer.endTime = (currentTimer.startTime + currentTimer.pomodoro) % 60

    setInterval(function () {
      console.log('checking')

      let check = new Date().getMinutes()

      if (check === currentTimer.endTime) {
        currentTimer.startTime = check
        currentTimer.endTime = (check + currentTimer.pomodoro) % 60

        console.log('restart')
      }
    }, 1000)
  })
}())
