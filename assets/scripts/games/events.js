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
  if ($(event.target).text() !== 'X' && $(event.target).text() !== 'O') {
    // if the box is empty(no X or O on it)
    $(event.target).text(player)
    // add the player token to the clicked box
    const index = event.target.id
    console.log(index)
    gameData[index] = player
    console.log(gameData)
    // then add the player token to the gameData array

    checkGameResult()
    // check if the player wins the game

    const data = {
      game: {
        cell: {
          index: index,
          value: player
        },
        over: over
      }
    }
    // build the data object to pass to play games
  } else if (over === false) {
    $(event.target).text('O')
    const index = event.target.id
    gameData[index] = player
    console.log(index)
    console.log(gameData)
  }
  // it changes the turn of the player,

  // send the data to the API
  api.playGames(gameData)
    .then(ui.onPlayGamesSuccess)
    .catch(ui.onPlayGamesError)
}
const checkGameResult = function () {
  const box1 = $('#0').text()
  const box2 = $('#1').text()
  const box3 = $('#2').text()
  // const box4 = $('#3').text()
  // const box5 = $('#4').text()
  // const box6 = $('#5').text()
  // const box7 = $('#6').text()
  // const box8 = $('#7').text()
  // const box9 = $('#8').test()

  // const checkResult = function (event) {
  if (box1 === box2 && box1 === box3) {
    console.log('Player ' + box1 + ' wins!')
  }
}

const showGames = function (event) {
  event.preventDefault()
  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onShowGamesError)
}

module.exports = {
  createGames,
  playGames,
  showGames
}
