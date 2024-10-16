import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import './components'
import main from './main/index.js'

document.addEventListener('DOMContentLoaded', () => {
  main()
})
