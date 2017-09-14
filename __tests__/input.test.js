'use strict'

import * as input from '../src/input/input.js'

describe('input object', () => {
  test('to be an object', () => {
    expect(typeof (input.userInputs)).toBe('object')
  })
})
