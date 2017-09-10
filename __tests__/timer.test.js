import * as timer from '../src/timer.js'

const defaultTimer = timer.createTimer()

test('createTimer should return an object', () => {
  expect(typeof (defaultTimer)).toBe('object')
})

test('currentTime should be a number', () => {
  expect(typeof (defaultTimer.currentTime)).toBe('number')
})

test('startTime should default to currentTime', () => {
  expect(defaultTimer.startTime).toEqual(defaultTimer.currentTime)
})
