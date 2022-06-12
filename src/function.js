import Api from './api'

export default class Functions {
  static theFunc () {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const userInput = document.querySelector('.username')
      Api.getAPI(userInput.value.trim())
      userInput.value = ''
    })
  }
}
