import FavoriteRestoIdb from '../data/favorite-resto-idb'
import { TemplateCreator } from '../views/template/template-creator'

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton() {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestoIdb.getRestaurant(id)
    return !!restaurant
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML =
      TemplateCreator.createLikeButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML =
      TemplateCreator.createLikedButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  },
}

export default LikeButtonInitiator
