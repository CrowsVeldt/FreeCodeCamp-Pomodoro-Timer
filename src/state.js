import watchAlarm from './static/watchAlarm.mp3'
import gongAlarm from './static/gongAlarm.mp3'

export const state = {
  seconds: 60,
  milliseconds: 1000,
  timerActive: false,
  timerID: 0,
  inputMinValue: 1,
  inputMaxValue: 60,
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
    },
    {
      name: 'Silent',
      value: '2',
      source: ''
    }
  ]
}
