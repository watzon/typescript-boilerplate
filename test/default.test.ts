import { hello } from '../src'

it('logs "Hello, world!" to the console', () => {
  const consoleSpy = jest.spyOn(console, 'log')
  hello()
  expect(consoleSpy).toHaveBeenCalledWith('Hello, world!')
})
