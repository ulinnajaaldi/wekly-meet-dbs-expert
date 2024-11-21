import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb'

describe('Unliking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestoIdb.putRestaurant({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestoIdb.deleteRestaurant(1)
  })

  it('should display unlike widget when the movie has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    })

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy()
  })

  it('should not display like widget when the movie has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    })

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy()
  })

  it('should be able to remove liked movie from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    })
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([])
  })

  it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    })
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteRestaurant(1)
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([])
  })
})
