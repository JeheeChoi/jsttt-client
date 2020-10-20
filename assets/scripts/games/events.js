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
  // if the box is empty(no X or O on it)
  if ($(event.target).text() !== 'X' && $(event.target).text() !== 'O') {
    // add the player token to the clicked box
    $(event.target).text(player)
  }
  // then add the player token to the gameData array
  const index = event.target.id
  gameData[index] = player
  console.log(index)
  console.log(gameData)

  // check if the player wins the game
  checkGameResult()

  // build the data object to pass to play games
  const data = {
    game: {
      cell: {
        index: index,
        value: player
      },
      over: over
    }
  }

  // it changes the turn of the player,}
  player = player === 'X' ? 'O' : 'X'

  // send the data to the API
  api.playGames(data)
    .then(ui.onPlayGamesSuccess)
    .catch(ui.onPlayGamesError)
}

const checkGameResult = function () {
  const box1 = $('#0').text()
  const box2 = $('#1').text()
  const box3 = $('#2').text()
  const box4 = $('#3').text()
  const box5 = $('#4').text()
  const box6 = $('#5').text()
  const box7 = $('#6').text()
  const box8 = $('#7').text()
  const box9 = $('#8').text()

  // const checkResult = function (event) {
  if (box1 === box2 && box1 === box3) {
    console.log('Player ' + box1 + ' wins!')
  } else if (box4 === box5 && box4 === box6) {
    console.log('Player ' + box4 + ' wins!')
  } else if (box7 === box8 && box7 === box9) {
    console.log('Player ' + box7 + ' wins!')
  } else if (box1 === box4 && box1 === box7) {
    console.log('Player ' + box1 + ' wins!')
  } else if (box2 === box5 && box2 === box8) {
    console.log('Player ' + box2 + ' wins!')
  } else if (box3 === box6 && box3 === box9) {
    console.log('Player ' + box3 + ' wins!')
  } else if (box1 === box5 && box1 === box9) {
    console.log('Player ' + box5 + ' wins!')
  } else if (box3 === box5 && box3 === box7) {
    console.log('Player ' + box5 + ' wins!')
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
