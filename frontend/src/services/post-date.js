import axios from 'axios'
const baseURL = 'http://localhost:3000'

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