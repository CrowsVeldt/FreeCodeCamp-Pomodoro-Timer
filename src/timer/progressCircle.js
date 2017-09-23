import styles from './progressCircle.css'

export function createProgressCircle () {
  let height = document.documentElement.clientHeight
  let width = document.documentElement.clientWidth
  let minDimension = height < width ? height : width
  let radius = minDimension / 2
  let circumference = 2 * radius * Math.PI
  let seconds = 1

  let container = document.createElement('div')
  container.setAttribute('class', styles.container)

  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0, 0, ' + height + ', ' + width)
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  svg.setAttribute('class', styles.svg)

  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  circle.setAttribute('class', styles.circle)
  circle.setAttribute('fill', 'transparent')
  circle.setAttribute('stroke', 'red')
  circle.setAttribute('stroke-width', '10')
  circle.setAttribute('r', radius)
  circle.setAttribute('cx', '50%')
  circle.setAttribute('cy', '50%')

  let coverCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  coverCircle.setAttribute('id', 'cover-circle')
  coverCircle.setAttribute('class', styles.coverCircle)
  coverCircle.setAttribute('fill', 'transparent')
  coverCircle.setAttribute('stroke', 'lightgrey')
  coverCircle.setAttribute('stroke-width', '12')
  coverCircle.setAttribute('r', radius)
  coverCircle.setAttribute('cx', '50%')
  coverCircle.setAttribute('cy', '50%')
  coverCircle.setAttribute('stroke-dashoffset', -(circumference / 60) * seconds)
  coverCircle.setAttribute('stroke-dasharray', circumference)

  setInterval(function () {
    seconds++
    document.getElementById('cover-circle').setAttribute('stroke-dashoffset', -(circumference / 60) * seconds)
  }, 1000)

  svg.appendChild(circle)
  svg.appendChild(coverCircle)
  container.appendChild(svg)

  return (container)
}

function updateProgressCircle () {

}
