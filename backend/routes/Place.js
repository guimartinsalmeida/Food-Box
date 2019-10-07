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
  const { name, address, id } = req.body
  console.log('name, address...', name, address)
  Place.create({ ...req.body })
    .then((place) => {
      // para mandar las hubicaciones a mi usuario
      console.log('entro', place)
      const profile = User.findByIdAndUpdate(id,{$set:{location: place._id}}).then(res => console.log('que paso', res)).catch(err => console.log('el error', err))
      
     return res.status(201).json({ place })

    })
    .catch(error => res.status(400).json({ error }))
})

router.delete('/places/:id', (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(place => res.status(200).json({ place }))
    .catch(error => res.status(500).json({ error }))
})

//no entendi porque usar put
router.put('/places/:id', (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(place => res.status(200).json({ place }))
    .catch(error => res.status(500).json({ error }))
})
