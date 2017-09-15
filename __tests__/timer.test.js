'use strict'

import * as timer from '../src/timer/timer.js'

jest.useFakeTimers()

afterEach(() => {
  setTimeout.mockClear()
})

const defaultTimer = timer.Timer()

describe('createTimer', () => {
  describe('values', () => {
    test('should return an object', () => {
      expect(typeof (defaultTimer)).toBe('object')
    })

    test('.startTime should be number', () => {
      expect(typeof (defaultTimer.startTime)).toBe('number')
    })

    test('.pomodoroCount should be a number', () => {
      expect(typeof (defaultTimer.pomodoroCount)).toBe('number')
    })

    describe('.endTime', () => {
      test('should be a number', () => {
        expect(typeof (defaultTimer.endTime)).toBe('number')
      })
    })

    describe('.currentActivity', () => {
      test('should be a string', () => {
        expect(typeof (defaultTimer.currentActivity)).toBe('string')
      })

      test('should not be an empty string', () => {
        expect(defaultTimer.currentActivity).not.toBe('')
      })
    })

    describe('.pomodoro', () => {
      test('should be a number', () => {
        expect(typeof (defaultTimer.pomodoro)).toBe('number')
      })

      test('should be greater than 0', () => {
        expect(defaultTimer.pomodoro).toBeGreaterThan(0)
      })
    })

    describe('.shortBreak', () => {
      test('should be a number', () => {
        expect(typeof (defaultTimer.shortBreak)).toBe('number')
      })

      test('should be greater than 0', () => {
        expect(defaultTimer.shortBreak).toBeGreaterThan(0)
      })
    })

    describe('.longBreak', () => {
      test('should be a number', () => {
        expect(typeof (defaultTimer.longBreak)).toBe('number')
      })

      test('should be greater than 0', () => {
        expect(defaultTimer.longBreak).toBeGreaterThan(0)
      })
    })
  })
})

describe('beginTimer', () => {
  test('starts a 1 second timer', () => {
    timer.beginTimer()
    expect(setTimeout.mock.calls.length).toBe(1)
    expect(setTimeout.mock.calls[0][1]).toBe(1000)
  })
})

describe('checkTimer', () => {
  test('starts a 1 second timer', () => {
    timer.checkTimer(defaultTimer)
    expect(setTimeout.mock.calls.length).toBe(1)
    expect(setTimeout.mock.calls[0][1]).toBe(1000)
  })

  test('returns "unfinished" when timer is not finished', () => {
    expect(timer.checkTimer(defaultTimer)).toBe('unfinished')
  })

  test('returns "finished" when timer is finished', () => {
    let time = new Date().getTime()
    let result = timer.Timer({
      endTime: time
    })
    expect(timer.checkTimer(result)).toBe('finished')
  })
})

describe('finishTimer', () => {
  test('starts a 1 second timer', () => {
    timer.finishTimer(defaultTimer)
    expect(setTimeout.mock.calls.length).toBe(1)
    expect(setTimeout.mock.calls[0][1]).toBe(1000)
  })

  test('starts a short break after finishing a pomodoro', () => {
    expect(timer.finishTimer(defaultTimer)).toBe('short break')
  })

  test('starts a long break after finishing four pomodoros', () => {
    let tempTimer = timer.Timer({
      currentActivity: 'pomodoro',
      pomodoroCount: 3
    })
    expect(timer.finishTimer(tempTimer)).toBe('long break')
  })

  test('starts a pomodoro after finishing a short break', () => {
    let shortBreakTimer = timer.Timer({
      currentActivity: 'short break'
    })
    expect(timer.finishTimer(shortBreakTimer)).toBe('pomodoro')
  })

  test('starts a pomodoro after finishing a long break', () => {
    let longBreakTimer = timer.Timer({
      currentActivity: 'long break'
    })
    expect(timer.finishTimer(longBreakTimer)).toBe('pomodoro')
  })
})
