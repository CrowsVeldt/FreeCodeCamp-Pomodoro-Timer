import styles from './settingsSection.css'

export function createSettingsSection (title, ...children) {
  const sectionLabel = document.createElement('label')
  sectionLabel.innerHTML = title
  sectionLabel.classList.add(styles.label)
  sectionLabel.setAttribute('for', title + 'Section')

  const section = document.createElement('section')
  section.classList.add(styles.section /*styles.closedSection*/)
  section.setAttribute('id', title + 'Section')

  sectionLabel.addEventListener('click', () => {
    section.classList.toggle(styles.closedSection)
  })

  section.addEventListener('click', event => {
    event.stopPropagation()
  })

  children.map(child => {
    section.appendChild(child)
  })

  sectionLabel.appendChild(section)

  return sectionLabel
}