const file = require('../src/title')

test('constant "corgiButt" exists', () => {
  expect(file.corgiButt).toBeDefined()
})

test('function "createTitle" exists', () => {
  expect(file.createTitle).toBeDefined()
})

test('addTwoNumbers adds two numbers', () => {
  expect(file.addTwoNumbers(1, 2)).toBe(3)
})
