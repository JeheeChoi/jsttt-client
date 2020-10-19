const api = require('./api')
const ui = require('./ui')

const gameData = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let over = false

const createGames = function (event) {
  event.preventDefault()
  api.createGames()
    .then(ui.onCreateGamesSuccess)
    .catch(ui.onCreateGamesError)
}

const playGames = function (event) {
  event.preventDefault()
  if ($(event.target).text() === 'X' || $(event.target).text() === 'O') return
  const cellIndex = event.target.dataset.cellIndex

  gameData[cellIndex] = player

  const data = {
    game: {
      cell: {
        index: cellIndex,
        value: player
      },
      over: over
    }
  }
  player = player === 'X' ? 'O' : 'X'
  api.playGames(data)
    .then(ui.onPlayGamesSuccess)
    .catch(ui.onPlayGamesError)
}

const indexGames = function (event) {
  event.preventDefault()
  api.indexGames()
    .then(ui.onIndexGamesSuccess)
    .catch(ui.onIndexGamesError)
}

module.exports = {
  createGames,
  playGames,
  indexGames
}
