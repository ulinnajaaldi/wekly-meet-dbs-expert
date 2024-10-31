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
}

export default RestaurantApiSource
