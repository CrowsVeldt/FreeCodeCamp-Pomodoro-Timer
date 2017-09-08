// figuring out how to test with Jest

export const corgiButt = 'boo'

export function createTitle (specialClass, name) {
  const element = document.createElement('h1')

  element.classList.add(specialClass)

  element.innerHTML = name

  return element
}

export function addTwoNumbers (a, b) {
  return a + b
}

document.body.appendChild(createTitle('class', 'This is a Title'))
