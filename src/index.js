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
  let player = 'x'
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      cells[i].textContent = player
      if (player === 'x') {
        player = 'o'
        cells[i].dataset.player = 'x'
        console.log(`${cells[i].dataset.player}`)
        checkWin()
      } else {
        player = 'x'
        cells[i].dataset.player = 'o'
        console.log(`${cells[i].dataset.player}`)
        checkWin()
      }
      instructions.textContent = `Player ${player} Goes`
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
    if (qsa('td.p0[data-player=x]').length === 3 || qsa('td.p1[data-player=x]').length === 3 || qsa('td.p2[data-player=x]').length === 3 || qsa('td.p3[data-player=x]').length === 3 || qsa('td.p4[data-player=x]').length === 3 || qsa('td.p5[data-player=x]').length === 3 || qsa('td.p6[data-player=x]').length === 3 || qsa('td.p7[data-player=x]').length === 3) {
      console.log('Player X wins')
      gameOver(true)
      // instructions.textContent = 'Player X Won'
    } else if (qsa('td.p0[data-player=o]').length === 3 || qsa('td.p1[data-player=o]').length === 3 || qsa('td.p2[data-player=o]').length === 3 || qsa('td.p3[data-player=o]').length === 3 || qsa('td.p4[data-player=o]').length === 3 || qsa('td.p5[data-player=o]').length === 3 || qsa('td.p6[data-player=o]').length === 3 || qsa('td.p7[data-player=o]').length === 3) {
      console.log('Player O wins')
      gameOver(false)
      // instructions.textContent = 'Player O Won'
    }
  }
  // const resetGame = () => {
  //   qs('body').className = ' '
  //   // for (let i = 0; i < cells.length; i++) {
  //     cells[i].textContent = ' '
  //   }
  // }
}
  // qsa('button').addEventListener('click', () => {
  //   qs('body').className = ' '
  //   for (let i = 0; i < cells.length; i++) {
  //     cells[i].textContent = ' '
  //     }
  // }

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
