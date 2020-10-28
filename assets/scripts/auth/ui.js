const store = require('./../store')

const onSignUpSuccess = function (res) {
  const user = res.user
  $('#message-display').html(`
    <h4>New user
    ${user.email} successfully signed up!</h4>
  `)
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (res) {
  const user = res.user
  store.user = res.user
  $('#message-display').html(`
    <h4>Hello
    ${user.email}! </h4>
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
    <h4>User ${store.user.email} successfully signed out! </h4>
  `)

  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-show-games').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const onChangePwSuccess = function () {
  $('#message-display').html('<h4>Password successfully changed! </h4>')
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
  // console.log('error is:', error)
  $('#sign-up').trigger('reset')
}

const onSignInError = function (error) {
  $('#message-display').text('Error Signing In Code: ' + error.statusText)
  // console.log('error is:', error)
  $('#sign-in').trigger('reset')
}

const onSignOutError = function (error) {
  $('#message-display').text('Error Signing Out Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  // console.log('error is:', error)
}

const onChangePwError = function (error) {
  $('#message-display').text('Error Changing Password Code: ' + error.statusText + '. ' + 'Please Sign In First!')
  // console.log('error is:', error)
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
