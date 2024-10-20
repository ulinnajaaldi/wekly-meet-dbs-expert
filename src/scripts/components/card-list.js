class CardList extends HTMLElement {
  constructor() {
    super()

    this._data = []
  }

  setRestaurantList(value) {
    this._data = value
    this.render()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const wrapper = document.createElement('div')
    wrapper.classList.add('card-container')

    const mappingData = this._data.restaurants?.map((item) => {
      const restaurant = document.createElement('card-item')
      restaurant.setValue(item)

      return restaurant
    })

    this.innerHTML = ''
    this.append(wrapper)
    if (mappingData) {
      mappingData.forEach((item) => {
        wrapper.append(item)
      })
    }
  }
}

customElements.define('card-list', CardList)
