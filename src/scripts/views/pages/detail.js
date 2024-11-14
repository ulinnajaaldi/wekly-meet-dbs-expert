import RestaurantApiSource from '../../data/RestaurantApiSource'
import UrlParser from '../../routes/url-parser'
import LikeButtonInitiator from '../../utils/like-button-initiator'
import { TemplateCreator } from '../template/template-creator'

const Detail = {
  async render() {
    return `
    <div id="detail-content"></div>
    <loader-element></loader-element>
     <div class="details-container">
          <form class="form-review">
            <h1 class="details-subtitle">Tambahkan Ulasanmu</h1>
            <div>
              <label>Nama</label>
              <input type="text" name="name" id="name" placeholder="Nama" />
            </div>
            <div>
              <label>Ulasan</label>
              <textarea name="review" id="review" rows="4" placeholder="Ulasan"></textarea>
            </div>
            <button type="submit" id="submit-review">Kirim</button>
          </form>
     </div>
     <div id="likeButtonContainer"></div>
    `
  },

  async afterRender() {
    const contentElement = document.querySelector('#detail-content')
    const loaderElement = document.querySelector('loader-element')
    const inputName = document.querySelector('#name')
    const inputReview = document.querySelector('#review')
    const formReview = document.querySelector('.form-review')

    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const response = await RestaurantApiSource.getRestaurantDetail(url.id)

    loaderElement.classList.add('hidden')

    formReview.addEventListener('submit', async (e) => {
      e.preventDefault()
      e.stopPropagation()

      const data = {
        id: url.id,
        name: inputName.value,
        review: inputReview.value,
      }
      await RestaurantApiSource.mutateAddReview(data)
    })

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: response.id,
        pictureId: response.pictureId,
        name: response.name,
        city: response.city,
        rating: response.rating,
        description: response.description,
      },
    })
    contentElement.innerHTML += TemplateCreator.DetailRestaurant(response)
  },
}

export default Detail
