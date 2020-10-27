const api = require('./api')
const ui = require('./ui')

let gameData = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let over = false

const createGames = function (event) {
  event.preventDefault()
  api.createGames()
    .then(ui.onCreateGamesSuccess)
    .then(() => $('.box').on('click', playGames))
    .then(() => { over = false })
    .then(() => { gameData = ['', '', '', '', '', '', '', '', ''] })
    .catch(ui.onCreateGamesError)
}

const playGames = function (event) {
  event.preventDefault()
  const index = event.target.id

  // if the box is empty(no X or O on it)
  if ($(event.target).text() !== 'X' && $(event.target).text() !== 'O') {
  // add the player token to the clicked box
    $(event.target).text(player)
    // then add the player token to the gameData array
    gameData[index] = player
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

    // send the data to the API
    api.updateGames(data)
      .then(ui.onPlayGamesSuccess)
      .catch(ui.onPlayGamesError)

    // it changes the turn of the player,}
    player = player === 'X' ? 'O' : 'X'
  // if the box is either X or O, the player can't choose the clicked the box to change the text on it
  // and it doesn't update the game array
  } else if ($(event.target).text() === 'X' || $(event.target).text() === 'O') {
    $('#gameboard-message').text('The box has been clicked already!')
  }
}

const checkGameResult = function () {
  // named each box
  const box1 = gameData[0]
  const box2 = gameData[1]
  const box3 = gameData[2]
  const box4 = gameData[3]
  const box5 = gameData[4]
  const box6 = gameData[5]
  const box7 = gameData[6]
  const box8 = gameData[7]
  const box9 = gameData[8]

  if (box1 !== '' && box1 === box2 && box1 === box3) {
    over = true
    $('#gameboard-message').text('Player ' + player + ' wins!')
  // $(event.target.id).unbind('click')
  } else if (box4 !== '' && box4 === box5 && box4 === box6) {
    $('#gameboard-message').text('Player ' + player + ' wins!')
    over = true
  } else if (box7 !== '' && box8 && box7 === box9) {
    $('#gameboard-message').text('Player ' + player + ' wins!')
    over = true
  } else if (box1 !== '' && box1 === box4 && box1 === box7) {
    $('#gameboard-message').text('Player ' + player + ' wins!')
    over = true
  } else if (box2 !== '' && box2 === box5 && box2 === box8) {
    $('#gameboard-message').text('Player ' + player + ' wins!')
    over = true
  } else if (box3 !== '' && box3 === box6 && box3 === box9) {
    $('#gameboard-message').text('Player ' + player + ' wins!')
    over = true
  } else if (box1 !== '' && box1 === box5 && box1 === box9) {
    $('#gameboard-message').text('Player ' + player + ' wins!')
    over = true
  } else if (box3 !== '' && box3 === box5 && box3 === box7) {
    $('#gameboard-message').text('Player ' + player + ' wins!')
    over = true
  }
  if (over === true) {
    $('.box').off('click')
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
