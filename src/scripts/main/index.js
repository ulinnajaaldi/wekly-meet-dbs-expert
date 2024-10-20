import data from '../../public/data/DATA.json'

const main = () => {
  const cardListElement = document.querySelector('card-list')
  cardListElement.setRestaurantList(data)

  const body = document.querySelector('body')
  const mainWrapper = document.querySelector('#main-wrapper')
  const hamburgerMenu = document.querySelector('.hamburger-menu')
  const navbarItem = document.querySelector('.navbar-item')

  hamburgerMenu.addEventListener('click', function (e) {
    navbarItem.classList.toggle('active')
    mainWrapper.classList.toggle('bg-blur')
    body.classList.toggle('overflow-hidden')
  })

  document.addEventListener('keydown', function (e) {
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

export default main
