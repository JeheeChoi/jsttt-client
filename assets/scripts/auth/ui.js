const store = require('./../store')

const onSignUpSuccess = function (res) {
  const user = res.user
  $('#message-display').html(`
    <p>New user
    ${user.email} successfully signed up!</p>
  `)
  $('#sign-up').trigger('reset')
  $('#sign-up').hide()
}

const onSignInSuccess = function (res) {
  const user = res.user
  store.user = res.user
  $('#message-display').html(`
    <p>Hello
    ${user.email}! </p>
  `)
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#create-show-games').show()
}

const onSignOutSuccess = function () {
  $('#message-display').html(`
    <p>User ${store.user.email} successfully signed out! </p>
  `)

  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-show-games').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const onChangePwSuccess = function () {
  $('#message-display').text('Password successfully changed!')
  $('#change-password').trigger('reset')

  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-show-games').hide()
}

// Error messages
const onSignUpError = function (error) {
  $('#message-display').text('Error Signing Up Code: ' + error.statusText)
  console.log('error is:', error)
  $('#sign-up').trigger('reset')
}

const onSignInError = function (error) {
  $('#message-display').text('Error Signing In Code: ' + error.statusText)
  console.log('error is:', error)
  $('#sign-in').trigger('reset')
}

const onSignOutError = function (error) {
  $('#message-display').text('Error Signing Out Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  console.log('error is:', error)
}

const onChangePwError = function (error) {
  $('#message-display').text('Error Changing Password Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  console.log('error is:', error)
  $('#change-password').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onChangePwSuccess,
  onSignUpError,
  onSignInError,
  onSignOutError,
  onChangePwError
}
