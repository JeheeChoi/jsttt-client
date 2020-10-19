const config = require('../config')
const store = require('../store')

const createGames = formData => {
  const user = store.user
  const headers = {}
  if (user) {
    headers.Authorization = 'Bearer ' + user.token
  }
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers
  })
} // else { console.log('User not logged in.') }

module.exports = {
  createGames
}
