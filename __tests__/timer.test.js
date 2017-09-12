'use strict'

import * as timer from '../src/timer.js'

jest.useFakeTimers()

const defaultTimer = timer.Timer()

describe('createTimer', () => {
  describe('values', () => {
    test('should return an object', () => {
      expect(typeof (defaultTimer)).toBe('object')
    })

    test('.currentTime should be a number', () => {
      expect(typeof (defaultTimer.currentTime)).toBe('number')
    })

    test('.startTime should default to currentTime', () => {
      expect(defaultTimer.startTime).toEqual(defaultTimer.currentTime)
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

    describe('.pomodoroLength', () => {
      test('should be a number', () => {
        expect(typeof (defaultTimer.pomodoroLength)).toBe('number')
      })

      test('should be greater than 0', () => {
        expect(defaultTimer.pomodoroLength).toBeGreaterThan(0)
      })

      test('should not be fraction', () => {
        expect((defaultTimer.pomodoroLength).toString()).not.toMatch(/\./g)
      })
    })

    describe('.shortBreakLength', () => {
      test('should be a number', () => {
        expect(typeof (defaultTimer.shortBreakLength)).toBe('number')
      })

      test('should be greater than 0', () => {
        expect(defaultTimer.shortBreakLength).toBeGreaterThan(0)
      })

      test('should not be fraction', () => {
        expect((defaultTimer.shortBreakLength).toString()).not.toMatch(/\./g)
      })
    })

    describe('.longBreakLength', () => {
      test('should be a number', () => {
        expect(typeof (defaultTimer.longBreakLength)).toBe('number')
      })

      test('should be greater than 0', () => {
        expect(defaultTimer.longBreakLength).toBeGreaterThan(0)
      })

      test('should not be fraction', () => {
        expect((defaultTimer.longBreakLength).toString()).not.toMatch(/\./g)
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
