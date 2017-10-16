export const state = {
  seconds: 60,
  milliseconds: 1000,
  timerActive: false,
  timerID: 0,
  activities: [
    {
      name: 'Pomodoro',
      length: 25 * 60
    },
    {
      name: 'Short Break',
      length: 5 * 60
    },
    {
      name: 'Long Break',
      length: 15 * 60
    }
  ],
  inputMinValue: 1,
  inputMaxValue: 60
}
