class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <header class="navigation border-b">
      <nav class="container">
        <div class="navigation-content">
          <img src="./images/logo.svg" alt="Logo Lorem" />
          <div class="navbar-action">
            <button class="hamburger-menu">
              <i class="fa fa-bars"></i>
            </button>
            <div class="navbar-item">
              <a href="#/favorite" class="button font-bold">Favorite</a>
              <a href="https://www.google.com" class="button font-bold"
                >About Us</a
              >
            </div>
          </div>
        </div>
      </nav>
    </header>
            `
  }
}

customElements.define('navigation-bar', NavigationBar)
