const router = require('express').Router()
const Place = require('../models/Places')
const User = require('../models/User')

//exports.toGetPlaces = async(req, res) => {
  //try{
    //  let allplace = await places.find({user: req.user._id})
      //res.status(201).json({allplace})
  //} catch(err){
    //  res.status(500).json({err})
 // }
//}

router.post('/places', (req, res, next) => {
  console.log(req.body, req.user)
  const { name, address, id } = req.body
  console.log('name, address...', name, address)
  Place.create({ ...req.body, user: req.user._id })
    .then((place) => {
      // para mandar las hubicaciones a mi usuario
      console.log('entro', place)
      const profile = User.findByIdAndUpdate(id,{$set:{user: place._id}}).then(res => console.log('que paso', res))
      return res.status(201).json({ place })
    })
      
      .catch(err => console.log('el error', err))
      

    //.catch(error => res.status(400).json({ error }))
})

router.delete('/places/:id', (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(place => res.status(200).json({ place }))
    .catch(error => res.status(500).json({ error }))
})
//para imprimirlo
router.get('/places/:id', (req, res, next) => {
  //Plan.create(req.body)
  Place.findById(req.params.id)
    .then(place => res.status(201).json({ place }))
    //.catch(error => res.status(500).json({ error }))
})
//me trae todos los cards de place
router.get('/places', (req, res, next) => {
  //Plan.create(req.body)
  Place.find().populate('user')
    .then(place => res.status(201).json({ place }))
    .catch(error => res.status(500).json({ error }))
})

//no entendi porque usar put
router.put('/edit-places/:id', (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(place => res.status(200).json({ place }))
    .catch(error => res.status(500).json({ error }))
})

module.exports = router