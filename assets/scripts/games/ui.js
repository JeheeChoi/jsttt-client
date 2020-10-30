const store = require('./../store')

const onCreateGamesSuccess = function (res) {
  $('#gameboard-message').html('<h4>Successfully Created A New Game! </h4>')
  // console.log(res)
  store.game = res.game
  $('#gameboard').show()
  $('#gameboard-message').show()
  $('.box').text('?')
}

const onPlayGamesSuccess = function (res) {
}

const onShowGamesSuccess = function (res) {
  // console.log(res)
  const games = res.games
  $('#gameboard-message').html(`
    <h4># of games played: ${games.length} </h4>
    `)

  // $('#show-games').trigger('reset')

  // games.forEach(function (currentGame) {
  //  const gamesHTML = (`
  //    ${currentGames.games
  //  `)
  //  $('#index-games-display').append(gamesHTML)
  // $('#index-games').trigger('reset')
  // })
}

const onCreateGamesError = function (error) {
  $('#message-display').text('Error Creating Games Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  // console.log('error is:', error)
}

const onPlayGamesError = function (error) {
  $('#gameboard-message').text('Error Playing Games Code: ' + error.statusText)
  // console.log('error is:', error)
}

const onShowGamesError = function (error) {
  $('#message-display').text('Error Showing Games Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  // console.log('error is:', error)
}

module.exports = {
  onCreateGamesSuccess,
  onPlayGamesSuccess,
  onShowGamesSuccess,
  onPlayGamesError,
  onCreateGamesError,
  onShowGamesError
}
