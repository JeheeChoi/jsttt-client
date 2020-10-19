const store = require('./../store')

const onCreateGamesSuccess = function (res) {
  $('#create-games-display').text('Successfully Created A New Game!')
  console.log(res)
  store.game = res.game
}

const onCreateGamesError = function (error) {
  $('#create-games-display').text('Error Creating Games Code: ' + error.statusText)
  console.log('error is:', error)
}

const onPlayGamesSuccess = function (res) {
  $('#index-games-display').text('Successfully played a game')
  console.log(res)
  const cells = res.game.cells
  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const box = $('.box')[i]
      $(box).text(cells[i])
    }
  }
}

const onPlayGamesError = function (error) {
  $('#play-games-display').text('Error Playing Games Code: ' + error.statusText)
  console.log('error is:', error)
}

const onIndexGamesSuccess = function (res) {
  $('#index-games-display').text('User Game History: ', res)
  console.log(res)
  const games = res.games

  $('#index-games-display').text(games.length)

  // games.forEach(function (currentGame) {
  //  const gamesHTML = (`
  //    ${currentGames.games
  //  `)
  //  $('#index-games-display').append(gamesHTML)
  // $('#index-games').trigger('reset')
  // })
}

const onIndexGamesError = function (error) {
  $('#show-games-display').text('Error Showing Games Code: ' + error.statusText)
  console.log('error is:', error)
}

module.exports = {
  onCreateGamesSuccess,
  onCreateGamesError,
  onPlayGamesSuccess,
  onPlayGamesError,
  onIndexGamesSuccess,
  onIndexGamesError
}
