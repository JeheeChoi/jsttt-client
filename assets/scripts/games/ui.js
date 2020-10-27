const store = require('./../store')

const onCreateGamesSuccess = function (res) {
  $('#create-games-display').text('Successfully Created A New Game!')
  console.log(res)
  store.game = res.game
  $('#gameboard').show()
  $('.box').text('?')
}

const onCreateGamesError = function (error) {
  $('#create-games-display').text('Error Creating Games Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  console.log('error is:', error)
}

const onPlayGamesSuccess = function (res) {
  $('#gameboard-message').text('Next turn: ')
  console.log(res)
  // const cells = res.game.cells
//   for (let i = 0; i < cells.length; i++) {
//     if (cells[i] !== '') {
//       const box = $('.box')[i]
//
//       $(box).text(cells[i])
//     }
//   }
// }
}

const onPlayGamesError = function (error) {
  $('#gameboard-message').text('Error Playing Games Code: ' + error.statusText)
  console.log('error is:', error)
}

const onShowGamesSuccess = function (res) {
  console.log(res)
  const games = res.games
  $('#show-games-display').text('# of games played: ' + games.length)
  $('#show-games').trigger('reset')

  // games.forEach(function (currentGame) {
  //  const gamesHTML = (`
  //    ${currentGames.games
  //  `)
  //  $('#index-games-display').append(gamesHTML)
  // $('#index-games').trigger('reset')
  // })
}

const onShowGamesError = function (error) {
  $('#show-games-display').text('Error Showing Games Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  console.log('error is:', error)
}

module.exports = {
  onCreateGamesSuccess,
  onCreateGamesError,
  onPlayGamesSuccess,
  onPlayGamesError,
  onShowGamesSuccess,
  onShowGamesError
}
