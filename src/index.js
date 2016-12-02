if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const cells = document.querySelectorAll('td')
const playerTurn = document.querySelector('h3')

// const button = document.querySelector('button')

const main = () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      cells[i].textContent = 'X'
    })
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
