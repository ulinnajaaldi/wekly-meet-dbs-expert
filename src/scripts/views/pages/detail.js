import UrlParser from '../../routes/url-parser'

const Detail = {
  async render() {
    return `
            <h2>Detail Page</h2>
          `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    console.log(url.id)
  },
}

export default Detail
