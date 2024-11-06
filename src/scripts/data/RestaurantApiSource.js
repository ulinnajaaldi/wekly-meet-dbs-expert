import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantApiSource {
  static async getRestaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.resturant_list)
      const result = await response.json()
      return result?.restaurants
    } catch (error) {
      console.log(error)
    }
  }

  static async getRestaurantDetail(id) {
    try {
      const response = await fetch(API_ENDPOINT.restaurant_detail + id)
      const result = await response.json()
      return result?.restaurant
    } catch (error) {
      console.log(error)
    }
  }

  static async mutateAddReview(data) {
    try {
      const response = await fetch(API_ENDPOINT.add_comment, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()

      window.location.reload()

      return result
    } catch (error) {
      console.log(error)
    }
  }
}

export default RestaurantApiSource
