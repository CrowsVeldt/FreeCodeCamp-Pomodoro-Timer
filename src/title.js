import styles from './title.css'

export default function createTitle (specialClass, name) {
  const element = document.createElement('h1')

  element.classList.add(specialClass)

  element.innerHTML = name

  return element
}

document.body.appendChild(createTitle(styles.differentText, 'This is a Title'))
