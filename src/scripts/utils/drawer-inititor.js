const DrawerInitiator = {
  init({ button, drawer, content, body }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, content, body)
    })

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, content, body)
    })
  },

  _toggleDrawer(event, drawer, content, body) {
    event.stopPropagation()
    drawer.classList.toggle('active')
    content.classList.toggle('bg-blur')
    body.classList.toggle('overflow-hidden')
  },

  _closeDrawer(event, drawer, content, body) {
    event.stopPropagation()
    drawer.classList?.remove('active')
    content.classList?.remove('bg-blur')
    body.classList?.remove('overflow-hidden')
  },
}

export default DrawerInitiator
