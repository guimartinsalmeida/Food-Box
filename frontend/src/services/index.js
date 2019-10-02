import axios from 'axios';

process.env.NODE_ENV === 'production'
  ? (const baseURL = 'here should be your production endpoint')
  : (const baseURL = 'http://localhost:3000');

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {

  test: async () => {
    return await service.get('/');
  },
//Signup, login y logout
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('/login', user);
  },
  logOut: async () => {
    return await SERVICE.get('/logout');
  }
};
//luego le aparece todos los planes
  plans: async(plans) =>{
  return await SERVICE.get('/plans')
},
//selectPlan:async()
selectedPlans: async(plans)=>{
  return await SERVICE.get('/selectedPlans')
}
// rutas para las direcciones

//para crear
placeCreate: async(place)=>{
  return await SERVICE.post('/placeCreate')
}

//para hacer delete
placeDelete: async(place)=>{
  return await SERVICE.delete('/places/:id')
}

//para hacer el update
placeUpdate: async(place)=>{
  return await SERVICE.put('/places/:id')
}
export default MY_SERVICE;
