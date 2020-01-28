export function hello () {
  console.log('Hello, world!')
}

if (typeof module !== 'undefined' && !module.parent) {
  hello()
}
