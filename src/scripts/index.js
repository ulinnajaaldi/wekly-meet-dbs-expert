import 'regenerator-runtime' /* for async await transpile */
import '../styles/_index.scss'
import './components'
import App from './views/app'

const app = new App({
  button: document.querySelector('.hamburger-menu'),
  drawer: document.querySelector('.navbar-item'),
  content: document.querySelector('main'),
  body: document.querySelector('body'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
