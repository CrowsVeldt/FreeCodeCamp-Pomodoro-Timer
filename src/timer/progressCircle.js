import styles from './progressCircle.css'

export function createProgressCircle (radius, viewBox, amountDone) {
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
  // circle.setAttribute('class', styles.circle)
  circle.setAttribute('id', 'circle')
  circle.setAttribute('fill', 'transparent')
  circle.setAttribute('stroke', 'red')
  circle.setAttribute('stroke-width', '5%')
  circle.setAttribute('r', radius)
  circle.setAttribute('cx', '50%')
  circle.setAttribute('cy', '50%')
  circle.setAttribute('stroke-dasharray', circumference)

  let coverCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  // coverCircle.setAttribute('class', styles.coverCircle)
  coverCircle.setAttribute('id', 'cover-circle')
  coverCircle.setAttribute('fill', 'transparent')
  coverCircle.setAttribute('stroke', 'lightgrey')
  coverCircle.setAttribute('stroke-width', '5%')
  coverCircle.setAttribute('r', radius)
  coverCircle.setAttribute('cx', '50%')
  coverCircle.setAttribute('cy', '50%')
  coverCircle.setAttribute('stroke-dashoffset', -(circumference / 360) * amountDone)
  coverCircle.setAttribute('stroke-dasharray', circumference)

  svg.appendChild(circle)
  svg.appendChild(coverCircle)
  container.appendChild(svg)

  return (container)
}

function updateProgressCircle (amountDone) {
  // access coverCircle with id
  // update the dashoffset with the new amountDone
}
