import watchAlarm from './static/watchAlarm.mp3'
import gongAlarm from './static/gongAlarm.mp3'
import birdSongAlarm from './static/Birdsong.mp3'

export const state = {
  'activities': {
    'pomodoro': {
      'name': 'Pomodoro',
      'length': 25 * 60
    },
    'shortBreak': {
      'name': 'Short Break',
      'length': 5 * 60
    },
    'longBreak': {
      'name': 'Long Break',
      'length': 15 * 60
    }
  },
  'alarmOptions': [
    {
      'name': 'Watch',
      'value': '0',
      'source': watchAlarm
    },
    {
      'name': 'Gong',
      'value': '1',
      'source': gongAlarm
    },
    {
      'name': 'Bird Song',
      'value': '2',
      'source': birdSongAlarm
    }
  ],
  'inputMaxValue': 60,
  'inputMinValue': 1,
  'milliseconds': 1000,
  'seconds': 60,
  'settingsMenuOpen': false,
  'silence': false,
  'ticking': false,
  'timerActive': false
}
