import 'regenerator-runtime' /* for async await transpile */
import '../styles/_index.scss'
import './components'
import main from './main/index.js'

document.addEventListener('DOMContentLoaded', () => {
  main()
})
