import styles from './button.css'

export default function button (specialClass, name) {
  const element = document.createElement('button')

  element.classList.add(specialClass)

  element.innerHTML = name

  element.onclick = () => {
    window.alert('You pushed the button!')
  }

  return element
}

document.body.appendChild(button(styles.button, 'This is a Button'))
