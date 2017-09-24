// 'use strict'

// import * as timer from '../src/timer/timer.js'

// jest.useFakeTimers()

// afterEach(() => {
//   setTimeout.mockClear()
// })

// describe('beginTimer', () => {
//   test('starts a 1 second timer', () => {
//     timer.toggleTimer()
//     expect(setTimeout.mock.calls.length).toBe(1)
//     expect(setTimeout.mock.calls[0][1]).toBe(1000)
//   })
// })

// describe('checkTimer', () => {
//   test('starts a 1 second timer', () => {
//     const testObject = {endTime: 1}
//     timer.checkTimer(testObject)
//     expect(setTimeout.mock.calls.length).toBe(1)
//     expect(setTimeout.mock.calls[0][1]).toBe(1000)
//   })

//   test('returns "unfinished" when timer is not finished', () => {
//     const testObject = {endTime: 1}
//     expect(timer.checkTimer(testObject)).toBe('unfinished')
//   })

//   test('returns "finished" when timer is finished', () => {
//     let time = new Date().getTime()
//     let result = timer.Timer({
//       endTime: time
//     })
//     expect(timer.checkTimer(result)).toBe('finished')
//   })
// })

// describe('finishTimer', () => {
//   test('starts a 1 second timer', () => {
//     timer.finishTimer(defaultTimer)
//     expect(setTimeout.mock.calls.length).toBe(1)
//     expect(setTimeout.mock.calls[0][1]).toBe(1000)
//   })

//   test('starts a short break after finishing a pomodoro', () => {
//     expect(timer.finishTimer(defaultTimer)).toBe('short break')
//   })

//   test('starts a long break after finishing four pomodoros', () => {
//     let tempTimer = timer.Timer({
//       currentActivity: 'pomodoro',
//       pomodoroCount: 3
//     })
//     expect(timer.finishTimer(tempTimer)).toBe('long break')
//   })

//   test('starts a pomodoro after finishing a short break', () => {
//     let shortBreakTimer = timer.Timer({
//       currentActivity: 'short break'
//     })
//     expect(timer.finishTimer(shortBreakTimer)).toBe('pomodoro')
//   })

//   test('starts a pomodoro after finishing a long break', () => {
//     let longBreakTimer = timer.Timer({
//       currentActivity: 'long break'
//     })
//     expect(timer.finishTimer(longBreakTimer)).toBe('pomodoro')
//   })
// })
