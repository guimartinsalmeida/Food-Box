import axios from 'axios'
const baseURL = 'http://localhost:3000/api'

const SERVICE = axios.create({ baseURL, withCredentials: true })

const PLACE_SERVICE = {
  postaddress: async places => {
    console.log('llega a service;;;;' + Object.values(places))
    console.log(places)
    return await SERVICE.post('/places', places)
  },
  getPlace: async(places) => {
    return await SERVICE.get('/places', places)
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
