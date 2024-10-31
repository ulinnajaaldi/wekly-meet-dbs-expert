import CONFIG from '../../globals/config'

const RestaurantItem = (restaurant) => `
    <card-item
     id="${restaurant.id}"
     pictureId="${CONFIG.IMAGE_URL}/${restaurant.pictureId}"
     href="${restaurant.id}"
     name="${restaurant.name}"
     city="${restaurant.city}"
     rating="${restaurant.rating}"
     description="${restaurant.description}"
    ></card-item>
`

export const TemplateCreator = {
  RestaurantItem,
}
