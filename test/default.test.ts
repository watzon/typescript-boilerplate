// Copyright (c) 2020 Chris Watson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { hello } from '.'

it('logs "Hello, world!" to the console', () => {
  const consoleSpy = jest.spyOn(console, 'log')
  hello()
  expect(consoleSpy).toHaveBeenCalledWith('Hello, world!')
})
