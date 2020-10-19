const config = require('../config')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}
const signOut = formData => {
  const user = store.user
  const headers = {}
  if (user) {
    headers.Authorization = 'Bearer ' + user.token
  }
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    data: {},
    headers
  })
}
//   return $.ajax({
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
const changePassword = formData => {
  const user = store.user
  const headers = {}
  if (user) {
    headers.Authorization = 'Bearer ' + user.token
  }
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers
  })
}
//   return $.ajax({
//     url: config.apiUrl + '/change-password',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: formData
//   })
// }

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
