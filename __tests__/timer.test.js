import * as timer from '../src/timer.js'

const defaultTimer = timer.createTimer()
describe('createTimer', () => {
  test('should return an object', () => {
    expect(typeof (defaultTimer)).toBe('object')
  })

  test('.currentTime should be a number', () => {
    expect(typeof (defaultTimer.currentTime)).toBe('number')
  })

  test('.startTime should default to currentTime', () => {
    expect(defaultTimer.startTime).toEqual(defaultTimer.currentTime)
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
