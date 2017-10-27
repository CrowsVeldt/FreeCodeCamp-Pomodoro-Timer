import Icon from './static/icon.png'

export function notify (theBody, theTitle) {
  const options = {
    body: theBody,
    icon: Icon
  }
  const n = new Notification(theTitle, options)
  // close the notification for systems which don't close it automatically
  setTimeout(n.close.bind(n), 7000)

  n.onclick = event => {
    if (document.getElementById('alarm') !== null) {
      const alarm = document.getElementById('alarm')
      alarm.pause()
      alarm.currentTime = 0
    }
    n.close()
  }
}
