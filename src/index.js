if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const cells = document.querySelectorAll('td')
const instructions = document.querySelector('h3')
// const button = document.querySelector('button')

let player = 'X'
const main = () => {
  // let turn = true
  // if (turn) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      // if (cells[i].textContent !== '') {
      cells[i].textContent = player
      if (player === 'X') {
        player = 'O'
        cells[i].dataset.player = 'X'
      } else {
        player = 'X'
        cells[i].dataset.player = 'O'
      }
      instructions.textContent = `Player ${player} Goes`
    }
    )
  }
  instructions.textContent = 'Player X Goes'

  // const gameOver () => {
  //   if (document.querySelector('.top') === x)
  // }
}
document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
