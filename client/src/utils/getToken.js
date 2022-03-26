export const getToken = () => {
  let token = window.localStorage.getItem('auth.token')
  if(token) {
    token = `Bearer ${token}`
    return token
  }
}