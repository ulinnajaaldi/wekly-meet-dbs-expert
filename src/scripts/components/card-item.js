class CardItem extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
        <div class="card-wrapper" id=${this.getAttribute('id')}>
            <img src=${this.getAttribute('pictureId')} />
            <div class="card-content">
              <a href="#/detail/${this.getAttribute('href')}" class="font-semibold">
                ${this.getAttribute('name')}
              </a>
              <p>city: ${this.getAttribute('city')}</p>
              <p>Rating: ${this.getAttribute('rating')}</p>
              <p class="line-clamp">
                ${this.getAttribute('description')}
              </p>
            </div>
          </div>
        `
  }
}

customElements.define('card-item', CardItem)
