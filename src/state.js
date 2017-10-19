import watchAlarm from './static/watchAlarm.mp3'
import gongAlarm from './static/gongAlarm.mp3'

export const state = {
  seconds: 60,
  milliseconds: 1000,
  timerActive: false,
  timerID: 0,
  inputMinValue: 1,
  inputMaxValue: 60,
  settingsMenuOpen: false,
  ticking: false, // Not fully implemented yet
  storage: false, // Not fully implemented yet
  activities: {
    pomodoro: {
      name: 'Pomodoro',
      length: 25 * 60
    },
    shortBreak: {
      name: 'Short Break',
      length: 5 * 60
    },
    longBreak: {
      name: 'Long Break',
      length: 15 * 60
    }
  },
  alarmOptions: [
    {
      name: 'Watch',
      value: '0',
      source: watchAlarm
    },
    {
      name: 'Gong',
      value: '1',
      source: gongAlarm
    }
  ]
}
