class FooterElement extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <footer class="container">
      <p>&copy;DBS Expert Weekly Restoku</p>
    </footer>
          `
  }
}

customElements.define('footer-element', FooterElement)
