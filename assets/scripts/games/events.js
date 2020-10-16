const api = require('./api')
const ui = require('./ui')

const gameData = ['', '', '', '', '', '', '', '', '']
let player = 'x'

const createGames = function (event) {
  event.preventDefault()
  api.createGames()
    .then(ui.onCreateGamesSuccess)
    .catch(ui.onCreateGamesError)
}

const playGames = function (event) {
  event.preventDefault()
  console.log(event)
  console.log(event.target.dataset.cellIndex)
  const cellIndex = event.target.dataset.cellIndex
  gameData[cellIndex] = player
  player = player === 'x' ? 'o' : 'x'
  console.log(gameData)
}

module.exports = {
  createGames,
  playGames
}
