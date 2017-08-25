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

  const startButton = document.getElementById('start')
  const resetButton = document.getElementById('reset')

  function checkTime () {
    console.log('check')

    let check = new Date().getTime()

    if (check >= currentTimer.endTime) {
      currentTimer.endTime = check + (currentTimer.pomodoro * 60000)

      console.log('restart')
    }
  }

  function startTimer () {
    if (currentTimer.active === false) {
      currentTimer.active = true
      currentTimer.startTime = new Date().getTime()
      currentTimer.endTime = currentTimer.startTime + (currentTimer.pomodoro * 60000)

      currentTimer.timerID = setInterval(checkTime, 1000)
    }
  }

  function resetTimer () {
    if (currentTimer.active === true) {
      currentTimer.active = false

      clearInterval(currentTimer.timerID)
    }
  }

  startButton.addEventListener('click', startTimer)
  resetButton.addEventListener('click', resetTimer)
}())
