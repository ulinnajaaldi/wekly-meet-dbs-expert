import CONFIG from './config'

const API_ENDPOINT = {
  resturant_list: `${CONFIG.BASE_URL}/list`,
  restaurant_detail: `${CONFIG.BASE_URL}/detail/`,
  add_comment: `${CONFIG.BASE_URL}/review`,
}

export default API_ENDPOINT
