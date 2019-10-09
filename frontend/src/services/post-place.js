import axios from 'axios'
const baseURL = 'https://vast-meadow-96941.herokuapp.com'

const SERVICE = axios.create({ baseURL, withCredentials: true })

const PLACE_SERVICE = {
  postaddress: async places => {
    console.log('llega a service;;;;' + Object.values(places))
    console.log(places)
    return await SERVICE.post('/places', places)
  },
  getPlace: async(places) => {
    return await SERVICE.get('/places', places)
  },

  onDelete: async(id)=>{
    return await SERVICE.delete(`/places/${id}`)
  },
  onEdit: async(id, form)=>{
    return await SERVICE.put(`/edit-places/${id}`, form)
  }
  //getAddress: async (userid) => {
    //return await SERVICE.get('/places', userid)
  //},
}

export const placeService = data => {
  console.log('data', data)
  return SERVICE.post('/places', data)
    .then(response => response.data)
    .catch(err => {
      throw err
    })
}

export default PLACE_SERVICE
