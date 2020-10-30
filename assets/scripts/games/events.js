const api = require('./api')
const ui = require('./ui')

let gameData = ['', '', '', '', '', '', '', '', '']
let player = 'X'
let over = false

// create new games
const createGames = function (event) {
  event.preventDefault()
  api.createGames()
    .then(ui.onCreateGamesSuccess)
    .then(() => $('.box').on('click', playGames))
    .then(() => { over = false })
    .then(() => { gameData = ['', '', '', '', '', '', '', '', ''] })
    .then(() => { player = 'X' })
  // .then(() => $('#gameboard-message').text(''))
    .catch(ui.onCreateGamesError)
}
// Game engine
const playGames = function (event) {
  event.preventDefault()

  const index = event.target.id

  // if the box is empty(no X or O on it)
  if ($(event.target).text() !== 'X' && $(event.target).text() !== 'O') {
    // add the player token to the clicked box
    $(event.target).text(player)
    // then add the player token to the gameData array
    gameData[index] = player

    // console.log(gameData)

    // check if the player wins the game
    // checkGameResult()
    const checkGameResult = checkGameStatus()
    if (checkGameResult === 'X') {
      over = true
      $('.box').off('click')
      $('#gameboard-message').html('<h4>Player ' + player + ' won!</h4>')
    } else if (checkGameResult === 'O') {
      over = true
      $('.box').off('click')
      $('#gameboard-message').html('<h4>Player ' + player + ' won!</h4>')
    } else if (checkGameResult === 0) {
      over = true
      $('.box').off('click')
      $('#gameboard-message').html('<h4>The game ends in a tie!</h4>')
    }
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
  }
}
// check the game result and prints the winner message
// const checkGameResult = function () {
//   // named each box
//   const box1 = gameData[0]
//   const box2 = gameData[1]
//   const box3 = gameData[2]
//   const box4 = gameData[3]
//   const box5 = gameData[4]
//   const box6 = gameData[5]
//   const box7 = gameData[6]
//   const box8 = gameData[7]
//   const box9 = gameData[8]
//
//   // Row 1 - 3
//   if (box1 !== '' && box1 === box2 && box1 === box3) {
//     over = true
//   } else if (box4 !== '' && box4 === box5 && box4 === box6) {
//     over = true
//   } else if (box7 !== '' && box8 && box7 === box9) {
//     over = true
//
//   // Vertical line 1(box 1, 4, 7)
//   } else if (box1 !== '' && box1 === box4 && box1 === box7) {
//     over = true
//
//     // Vertical line 2(box 2, 5, 8)
//   } else if (box2 !== '' && box2 === box5 && box2 === box8) {
//     over = true
//
//     // Vertical line 3(box 3, 6, 9)
//   } else if (box3 !== '' && box3 === box6 && box3 === box9) {
//     over = true
//
//     // Diagonal (box 1, 5, 9)
//   } else if (box1 !== '' && box1 === box5 && box1 === box9) {
//     over = true
//
//     // Diagonal (box 3, 5, 7)
//   } else if (box3 !== '' && box3 === box5 && box3 === box7) {
//     over = true
//
//     // Tie - if there's no empty index in the gameData array, the game ends
//   } else if (gameData.indexOf('') === -1) {
//     over = true
//     $('#gameboard-message').html('<h4>The game ends in a tie!</h4>')
//     return
//   }
//   // if the game is over, print the winner message.
//   if (over === true) {
//     $('.box').off('click')
//     $('#gameboard-message').html('<h4>Player ' + player + ' won!</h4>')
//   }
// }
// new checkGameStatus function
const checkGameStatus = function () {
  // Check Horizontal line 012 345 678
  for (let i = 0; i < 9; i += 3) {
    if (gameData[i] !== '' && gameData[i] === gameData[i + 1] && gameData[i] === gameData[i + 2]) {
      if (gameData[i] === 'X') {
        return 'X'
      } else {
        return 'O'
      }
    }
    // Check Vertical line - 036 147 258
    for (let i = 0; i < 3; i++) {
      if (gameData[i] !== '' && gameData[i] === gameData[i + 3] && gameData[i] === gameData[i + 6]) {
        if (gameData[i] === 'X') {
          return 'X'
        } else {
          return 'O'
        }
      }
    }
  }
  // Check diagonal 048
  if (gameData[0] !== '' && gameData[0] === gameData[4] && gameData[0] === gameData[8]) {
    if (gameData[0] === 'X') {
      return 'X'
    } else {
      return 'O'
    }
  }
  // Check diagonal 246
  if (gameData[2] !== '' && gameData[2] === gameData[4] && gameData[2] === gameData[6]) {
    if (gameData[2] === 'X') {
      return 'X'
    } else {
      return 'O'
    }
  }

  // Check Tie game result
  let count = 0
  // Using a for loop to loop through
  // to check all 9 indices in GameData array if any of them are empty(No X or O)
  for (let i = 0; i < gameData.length; i++) {
    if (gameData[i] !== '') {
      count++
    }
  }

  if (count === gameData.length) {
    return 0
  } else {
    return -1
  }
}

// shows the # of the games played
const showGames = function (event) {
  event.preventDefault()
  api.showGames()
    .then(ui.onShowGamesSuccess)
    .catch(ui.onShowGamesError)
}

module.exports = {
  createGames,
  playGames,
  checkGameStatus,
  showGames
}
