import styles from './settingsSection.css'

export function createSettingsSection (title, ...children) {
  const sectionLabel = document.createElement('label')
  sectionLabel.innerHTML = title

  const section = document.createElement('section')
  section.classList.add(styles.section, styles.closedSection)

  section.addEventListener('click', () => {
    section.classList.toggle(styles.closedSection)
  })

  children.map(child => {
    section.appendChild(child)
  })

  sectionLabel.appendChild(section)

  return sectionLabel
}
