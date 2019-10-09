import axios from 'axios'
const baseURL = 'https://vast-meadow-96941.herokuapp.com/api'

const SERVICE = axios.create({ withCredentials: true, baseURL })

const DATE_SERVICE = {
  postdate: async user => {
    return await SERVICE.post('/api/pedidos', )
  },
}

export const pedidoService = data => {
  console.log('data', data)
  return SERVICE.post('/places', data)
    .then(response => response.data)
    .catch(err => {
      throw err
    })
}

export default DATE_SERVICE