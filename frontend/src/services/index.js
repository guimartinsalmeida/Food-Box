import axios from 'axios'
const baseURL = 'https://vast-meadow-96941.herokuapp.com'

const SERVICE = axios.create({ withCredentials: true, baseURL })

const AUTH_SERVICE = {
  signup: async user => {
    return await SERVICE.post('/api/signup', user)
  },
  login: async user => {
    return await SERVICE.post('/api/login', user)
  },
  logOut: async () => {
    return await SERVICE.get('/api/logout')
  }
}

export default AUTH_SERVICE
