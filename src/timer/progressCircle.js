import styles from './progressCircle.css'

let height = document.documentElement.clientHeight
let width = document.documentElement.clientWidth
let minDimension = height < width ? height : width
let radius = minDimension / 8
let viewBox = minDimension / 3.8
let circumference = 2 * radius * Math.PI

export function createProgressCircle () {
  let circumference = 2 * radius * Math.PI

  let container = document.createElement('div')
  container.setAttribute('id', 'container')
  container.setAttribute('class', styles.container)

  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0, 0, ' + viewBox + ', ' + viewBox)
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  svg.setAttribute('id', 'svg')
  svg.setAttribute('class', styles.svg)

  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  circle.setAttribute('id', 'circle')
  circle.setAttribute('fill', 'transparent')
  circle.setAttribute('stroke', 'red')
  circle.setAttribute('stroke-width', '5%')
  circle.setAttribute('r', radius)
  circle.setAttribute('cx', '50%')
  circle.setAttribute('cy', '50%')

  let coverCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  coverCircle.setAttribute('id', 'cover-circle')
  coverCircle.setAttribute('fill', 'transparent')
  coverCircle.setAttribute('stroke', 'lightgrey')
  coverCircle.setAttribute('stroke-width', '5%')
  coverCircle.setAttribute('r', radius)
  coverCircle.setAttribute('cx', '50%')
  coverCircle.setAttribute('cy', '50%')
  coverCircle.setAttribute('stroke-dashoffset', 0)
  coverCircle.setAttribute('stroke-dasharray', circumference)

  svg.appendChild(circle)
  svg.appendChild(coverCircle)
  container.appendChild(svg)

  return (container)
}

export function updateProgressCircle (total, amountDone) {
  let coverCircle = document.getElementById('cover-circle')

  coverCircle.setAttribute('stroke-dashoffset', -(circumference / total) * amountDone)
}
