export const getToken = () => {
  let token = window.localStorage.getItem('token')
  if(token) {
    token = `Bearer ${token}`
    return token
  }
}