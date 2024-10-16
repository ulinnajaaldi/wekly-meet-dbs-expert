import data from '../../public/data/DATA.json'

const main = () => {
  const cardListElement = document.querySelector('card-list')
  cardListElement.setRestaurantList(data)
}

export default main
