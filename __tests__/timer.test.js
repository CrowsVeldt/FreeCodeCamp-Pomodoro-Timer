'use strict'

import * as timer from '../src/timer/timer.js'

jest.useFakeTimers()

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

/*
*  Test checkTimer: when it is called, move the time forward by pomodoroLength minutes,
*  and check if finishTimer() is called
*/
