if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const qs = (s) => document.querySelector(s)
const qsa = (s) => document.querySelectorAll(s)
const cells = qsa('td')
const instructions = qs('h3')
const button = qs('button')

// const button = document.querySelector('button')

const main = () => {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = ' '
  }
  let player = 'X'
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      cells[i].textContent = player
      if (player === 'X') {
        player = 'O'
        cells[i].dataset.player = 'X'
        console.log(`${cells[i].dataset.player}`)
        checkWin()
      } else {
        player = 'X'
        cells[i].dataset.player = 'O'
        console.log(`${cells[i].dataset.player}`)
        checkWin()
      }
      instructions.textContent = `Player ${player.toUpperCase()} Goes`
    }
    )
  }
  const gameOver = (xWon) => {
    if (xWon) {
      document.querySelector('.dialog h3').textContent = 'Player X Won!'
    } else {
      document.querySelector('.dialog h3').textContent = 'Player O won!'
    }
    document.querySelector('body').className = 'modal'
  }

  const checkWin = () => {
    if (qsa('td.p0[data-player=X]').length === 3 || qsa('td.p1[data-player=X]').length === 3 || qsa('td.p2[data-player=X]').length === 3 || qsa('td.p3[data-player=X]').length === 3 || qsa('td.p4[data-player=X]').length === 3 || qsa('td.p5[data-player=X]').length === 3 || qsa('td.p6[data-player=X]').length === 3 || qsa('td.p7[data-player=X]').length === 3) {
      console.log('Player X wins')
      gameOver(true)
      // instructions.textContent = 'Player X Won'
    } else if (qsa('td.p0[data-player=O]').length === 3 || qsa('td.p1[data-player=O]').length === 3 || qsa('td.p2[data-player=O]').length === 3 || qsa('td.p3[data-player=O]').length === 3 || qsa('td.p4[data-player=O]').length === 3 || qsa('td.p5[data-player=O]').length === 3 || qsa('td.p6[data-player=O]').length === 3 || qsa('td.p7[data-player=O]').length === 3) {
      console.log('Player O wins')
      gameOver(false)
      // instructions.textContent = 'Player O Won'
    }
  }
  const resetGame = () => {
    qs('body').className = ''
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = ''
      cells[i].dataset.player = null
    }
  }
  button.addEventListener('click', resetGame)
}
document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
