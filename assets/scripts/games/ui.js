
const onCreateGamesSuccess = function (res) {
  $('#create-games-display').text('Successfully Created A New Game!')
  console.log(res)
}

const onCreateGamesError = function (error) {
  $('#create-games-display').text('Error Creating Games Code: ' + error.statusText)
  console.log('error is:', error)
}

const onPlayGamesSuccess = function (res) {
  event.preventDefault()
  $('.box').text('X')
}

const onPlayGamesError = function (error) {
  $('#play-games-display').text('Error Playing Games Code: ' + error.statusText)
  console.log('error is:', error)
}

module.exports = {
  onCreateGamesSuccess,
  onCreateGamesError,
  onPlayGamesSuccess,
  onPlayGamesError
}
