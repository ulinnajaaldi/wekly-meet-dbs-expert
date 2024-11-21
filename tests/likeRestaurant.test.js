import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator'
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb'

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the movie has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    })

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy()
  })

  it('should not show the unlike button when the movie has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    })

    expect(
      document.querySelector('[aria-label="unlike this movie"]')
    ).toBeFalsy()
  })

  it('should be able to like the movie', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    const restaurant = await FavoriteRestoIdb.getRestaurant(1)
    expect(restaurant).toEqual({ id: 1 })

    await FavoriteRestoIdb.deleteRestaurant(1)
  })

  it('should not add a movie again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    })
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.putRestaurant({ id: 1 })
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([{ id: 1 }])

    await FavoriteRestoIdb.deleteRestaurant(1)
  })

  it('should not add a movie when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {},
    })
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllRestaurant()).toEqual([])
  })
})
