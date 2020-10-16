const config = require('../config')
const store = require('../store')

const createGames = formData => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: {},
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  createGames
}
