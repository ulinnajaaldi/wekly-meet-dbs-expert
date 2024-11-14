import FavoriteRestoIdb from '../../data/favorite-resto-idb'
import { TemplateCreator } from '../template/template-creator'

const Favorite = {
  async render() {
    return `
       <section id="restaurant-list">
        <h2 class="font-semibold">Daftar Restaurant Favorit</h2>
        <div id="card-list" class="card-container"></div>
      </section>
        `
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    const restaurantsAPI = await FavoriteRestoIdb.getAllRestaurant()
    const restaurantsContainer = document.querySelector('#card-list')

    restaurantsAPI.forEach((movie) => {
      restaurantsContainer.innerHTML += TemplateCreator.RestaurantItem(movie)
    })
  },
}

export default Favorite
