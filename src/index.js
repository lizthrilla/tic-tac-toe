if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const cells = document.querySelectorAll('td')
const instructions = document.querySelector('h3')
const qsa = (s) => document.querySelectorAll(s)
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
  // instructions.textContent = 'Player X Goes'
}
const checkWin = () => {
  if (qsa('td.p0[data-player=x]').length === 3) {
    console.log('Player X wins')
  } else if (qsa('td.p1[data-player=x]').length === 3) {
    console.log('Player X wins')
  } else if (qsa('td.p2[data-player=x]').length === 3) {
    console.log('Player X wins')
  } else if (qsa('td.p3[data-player=x]').length === 3) {
    console.log('Player X wins')
  } else if (qsa('td.p4[data-player=x]').length === 3) {
    console.log('Player X wins')
  } else if (qsa('td.p5[data-player=x]').length === 3) {
    console.log('Player X wins')
  } else if (qsa('td.p6[data-player=x]').length === 3) {
    console.log('Player X wins')
  } else if (qsa('td.p7[data-player=x]').length === 3) {
    console.log('Player X wins')
  } else if (qsa('td.p0[data-player=o]').length === 3) {
    console.log('Player O wins')
  } else if (qsa('td.p1[data-player=o]').length === 3) {
    console.log('Player O wins')
  } else if (qsa('td.p2[data-player=o]').length === 3) {
    console.log('Player O wins')
  } else if (qsa('td.p3[data-player=o]').length === 3) {
    console.log('Player O wins')
  } else if (qsa('td.p4[data-player=o]').length === 3) {
    console.log('Player O wins')
  } else if (qsa('td.p5[data-player=o]').length === 3) {
    console.log('Player O wins')
  } else if (qsa('td.p6[data-player=o]').length === 3) {
    console.log('Player O wins')
  } else if (qsa('td.p7[data-player=o]').length === 3) {
    console.log('Player O wins')
  }
}

  // const gameOver () => {
  //   if (document.querySelector('.top') === x)
  // }

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
