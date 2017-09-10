import * as timer from '../src/timer.js'

test('it should return a number', () => {
  expect(typeof (timer.time.currentTime)).toBe('number')
})
