if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const cells = document.querySelectorAll('td')
const instructions = document.querySelector('h3')
// const button = document.querySelector('button')

let player = 'X'
const win = [
  ['t0', 't1', 't2'], ['t3', 't4', 't5'], ['t6', 't7', 't8'],
  ['t0', 't3', 't6'], ['t1', 't4', 't7'], ['t2', 't5', 't8'],
  ['t0', 't4', 't8'], ['t2', 't4', 't6']
]
console.log(win)

const main = () => {
  // let turn = true
  // if (turn) {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      // if (cells[i].textContent !== '') { // this will only work when I take the numbers out
      cells[i].textContent = player
      if (player === 'X') {
        player = 'O'
      } else {
        player = 'X'
      }
      instructions.textContent = `Player ${player} Goes`
    }
    // }
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
