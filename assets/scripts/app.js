'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.signUp)
  $('#sign-in').on('submit', authEvents.signIn)
  $('#sign-out').on('submit', authEvents.signOut)
  $('#change-password').on('submit', authEvents.changePassword)
  $('#create-games').on('click', gameEvents.createGames)
  $('#show-games').on('click', gameEvents.showGames)
  $('.box').on('click', gameEvents.playGames)
})
