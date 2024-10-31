import RestaurantApiSource from '../../data/RestaurantApiSource'
import { TemplateCreator } from '../template/template-creator'

const Home = {
  async render() {
    return `
      <section class="jumbroton-wrapper">
        <div class="image-wrapper">
          <img src="./images/heros/hero-image_2.jpg" width="450" alt="" />
          <h1 class="font-bold">Selamat datang di restoku!</h1>
        </div>
      </section>
      <section id="restaurant-list">
        <h2 class="font-semibold">Daftar Restaurant</h2>
        <loader-element></loader-element>
        <div id="card-list" class="card-container"></div>
      </section>
     `
  },

  async afterRender() {
    const restaurants = document.querySelector('#card-list')
    const loaderElement = document.querySelector('loader-element')

    const response = await RestaurantApiSource.getRestaurantList()

    loaderElement.classList.add('hidden')

    response.forEach((restaurant) => {
      restaurants.innerHTML += TemplateCreator.RestaurantItem(restaurant)
    })
  },
}

export default Home
