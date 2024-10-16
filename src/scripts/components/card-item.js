class CardItem extends HTMLElement {
  constructor() {
    super()

    this._restaurant = {
      id: 'SSAMPLE_ID',
      pictureId: 'SAMPLE_ID',
      name: 'SAMPLE_name',
      city: 'SAMPLE_BODY',
      rating: 'SAMPLE_BODY',
      description: 'SAMPLE_BODY',
    }
  }

  setValue(value) {
    this._restaurant['id'] = value['id']
    this._restaurant['pictureId'] = value['pictureId']
    this._restaurant['name'] = value['name']
    this._restaurant['city'] = value['city']
    this._restaurant['rating'] = value['rating']
    this._restaurant['description'] = value['description']
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.setAttribute('restaurant-id', this._restaurant.id)

    this.innerHTML = `
        <div class="card-wrapper">
            <img src=${this._restaurant.pictureId} />
            <div class="card-content">
              <h3><a> ${this._restaurant.name} </a></h3>
              <p>city: ${this._restaurant.city}</p>
              <p>Rating: ${this._restaurant.rating}</p>
              <p class="line-clamp">
                ${this._restaurant.description}
              </p>
            </div>
          </div>
        `
  }
}

customElements.define('card-item', CardItem)
