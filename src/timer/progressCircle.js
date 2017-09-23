import styles from './progressCircle.css'

export function createProgressCircle (radius, height, width) {
  let circumference = 2 * radius * Math.PI
  let percent = 100 / 50

  let container = document.createElement('div')
  container.setAttribute('id', 'container')
  container.setAttribute('class', styles.container)

  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0, 0, ' + radius + ', ' + radius)
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  svg.setAttribute('id', 'svg')
  svg.setAttribute('class', styles.svg)

  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  circle.setAttribute('class', styles.circle)
  circle.setAttribute('id', 'circle')
  circle.setAttribute('fill', 'transparent')
  circle.setAttribute('stroke', 'red')
  circle.setAttribute('stroke-width', '10')
  circle.setAttribute('r', (radius / 2) - 5)
  circle.setAttribute('cx', '50%')
  circle.setAttribute('cy', '50%')

  let coverCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  coverCircle.setAttribute('class', styles.coverCircle)
  coverCircle.setAttribute('id', 'cover-circle')
  coverCircle.setAttribute('fill', 'transparent')
  coverCircle.setAttribute('stroke', 'lightgrey')
  coverCircle.setAttribute('stroke-width', '10.2')
  coverCircle.setAttribute('r', (radius / 2) - 5.1)
  coverCircle.setAttribute('cx', '50%')
  coverCircle.setAttribute('cy', '50%')
  coverCircle.setAttribute('stroke-dashoffset', -(circumference / 60) * percent)
  coverCircle.setAttribute('stroke-dasharray', circumference)

  svg.appendChild(circle)
  svg.appendChild(coverCircle)
  container.appendChild(svg)

  return (container)
}

function updateProgressCircle (percentage) {
  //
}
