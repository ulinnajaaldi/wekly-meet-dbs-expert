import ROUTES from '../routes/routes'
import UrlParser from '../routes/url-parser'
import DrawerInitiator from '../utils/drawer-inititor'

class App {
  constructor({ button, drawer, content, body }) {
    this._button = button
    this._drawer = drawer
    this._content = content
    this._body = body

    this._initialAppShell()
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      body: this._body,
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = ROUTES[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()

    const body = document.querySelector('body')
    const mainWrapper = document.querySelector('#main-wrapper')
    const navbarItem = document.querySelector('.navbar-item')

    document.addEventListener('keydown', (e) => {
      const items = navbarItem.querySelectorAll('a')
      if (window.innerWidth < 641) {
        if (e.key === 'Tab') {
          if (document.activeElement === items[items.length - 1]) {
            navbarItem.classList.toggle('active')
            mainWrapper.classList.toggle('bg-blur')
            body.classList.toggle('overflow-hidden')
          }
        }
      }
    })
  }
}

export default App
