import axios from 'axios'
const baseURL = 'http://localhost:3000'

const SERVICE = axios.create({ baseURL, withCredentials: true })

const PLACE_SERVICE = {
  postaddress: async places => {
    console.log('llega a service;;;;' + Object.values(places))
    console.log(places)
    return await SERVICE.post('api/places', places)
  },
  getPlace: async () => {
    return await SERVICE.get('api/places')
  },

  onDelete: async id => {
    return await SERVICE.delete(`api/places/${id}`)
  },
  onEdit: async (id, form) => {
    return await SERVICE.put(`api/edit-places/${id}`, form)
  },
  onSendDate: async form => {
    return await SERVICE.post('/pedido-create', form)
  }
}

export const placeService = data => {
  console.log('data', data)
  return SERVICE.post('api/places', data)
    .then(response => response.data)
    .catch(err => {
      throw err
    })
}

export default PLACE_SERVICE
