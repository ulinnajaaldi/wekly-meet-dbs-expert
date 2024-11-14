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

const DetailRestaurant = (restaurant) => `
   <section class="details-wrapper ">
        <div class="details-header">
              <h1 class="details-title">${restaurant.name} <span>( ${restaurant.city} )</span></h1>
              <div class="details-subheader">
                  <img src="${CONFIG.IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" class="details-image"/>
                  <div class="details-content">
                    <div class="details-content-item">
                        <p class="details-content-title">Rating</p>: ${restaurant.rating} / 5.0
                    </div>
                    
                    <div class="details-content-item">
                        <p class="details-content-title">Alamat</p>: ${restaurant.address}
                    </div>

                    <div class="details-content-item">
                        <p class="details-content-title">Kategori</p>: ${restaurant.categories.map(
                          (category) => category.name
                        )}
                    </div>
                      <p class="details-description">
                      ${restaurant.description}
                      </p>
                  </div>
              </div>
         </div>

         <div>
            <h1 class="details-subtitle">Ulasan Kustomer</h1>
            <div class="details-review-wrapper">
                ${restaurant.customerReviews
                  .map(
                    (review) => `
                    <div class="details-review-item">
                        <div class="review-item-header">
                            <div class="review-item-user">
                                <h4>${review.name}</h4>
                            </div>
                            <p class="review-item-date">${review.date}</p>
                        </div>
                        <p class="review-item-desc">${review.review}</p>
                    </div>
                    `
                  )
                  .join('')}
                
            </div>
        </div>
      </section>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export const TemplateCreator = {
  RestaurantItem,
  DetailRestaurant,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
}
