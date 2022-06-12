import { DateTime } from 'luxon'

export default class Date {
  static theDate () {
    const pickDate = document.querySelector('.date')
    pickDate.innerHTML = DateTime.now().toLocaleString({
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    })
  }
}
