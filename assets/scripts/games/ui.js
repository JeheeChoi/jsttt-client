const store = require('./../store')

const onCreateGamesSuccess = function (res) {
  $('#create-games-display').text('Successfully Created A New Game!')
  console.log(res)
  store.game = res.game
}

const onCreateGamesError = function (error) {
  $('#create-games-display').text('Error Creating Games Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  console.log('error is:', error)
}

const onPlayGamesSuccess = function (res) {
  console.log(res)
  $('#game-board-message').text('Next turn: ')
  // const cells = res.game.cells
  // for (let i = 0; i < cells.length; i++) {
  // console.log('Player ' + cells[i] + ' clicked Box# ' + cells.indexOf(cells[i]))
  // if (cells[i] !== '') {
  //   const box = $('.box')[i]
  // box1 = $('#0').text()
  // box2 = $('#1').text()
  // box3 = $('#2').text()
  // box4 = $('#3').text()
  // box5 = $('#4').text()
  // box6 = $('#5').text()
  // box7 = $('#6').text()
  // box8 = $('#7').text()
  // box9 = $('#8').test()
  //   $(box).text(cells[i])
  //   cells.forEach(i => console.log(i))
  //   $('#gameboard-message').text('Player ' + cells[i] + ' clicked box#: ' + cells.indexOf(cells[i]))
  // }
  // $('#gameboard-message').text('Player Clicked Box# ' + cells.indexOf(cells[i]))
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
