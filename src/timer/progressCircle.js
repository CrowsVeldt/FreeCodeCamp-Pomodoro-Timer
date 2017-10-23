import styles from './progressCircle.css'

const height = document.documentElement.clientHeight
const width = document.documentElement.clientWidth
const minDimension = height < width ? height : width
const radius = minDimension / 8
const viewBox = minDimension / 3.8
const circumference = 2 * radius * Math.PI

export function createProgressCircle () {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0, 0, ' + viewBox + ', ' + viewBox)
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  svg.setAttribute('id', 'svg')
  svg.setAttribute('class', styles.svg)

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  circle.setAttribute('id', 'circle')
  circle.setAttribute('fill', 'transparent')
  circle.setAttribute('stroke', 'black')
  circle.setAttribute('stroke-width', '5%')
  circle.setAttribute('r', radius)
  circle.setAttribute('cx', '50%')
  circle.setAttribute('cy', '50%')

  const coverCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  coverCircle.setAttribute('id', 'cover-circle')
  coverCircle.setAttribute('fill', 'transparent')
  coverCircle.setAttribute('stroke', 'white')
  coverCircle.setAttribute('stroke-width', '5%')
  coverCircle.setAttribute('r', radius)
  coverCircle.setAttribute('cx', '50%')
  coverCircle.setAttribute('cy', '50%')
  coverCircle.setAttribute('stroke-dashoffset', 0)
  coverCircle.setAttribute('stroke-dasharray', circumference)

  svg.appendChild(circle)
  svg.appendChild(coverCircle)

  return (svg)
}

export function updateProgressCircle (total, amountDone) {
  const coverCircle = document.getElementById('cover-circle')

  coverCircle.setAttribute('stroke-dashoffset', -(circumference / total) * amountDone)
}
