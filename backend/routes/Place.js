const router = require('express').Router()
const Place = require('../models/Places')
const User = require('../models/User')


router.post('/places', (req, res, next) => {
  console.log(req.body, req.user)
  const { name, address, id } = req.body
  console.log('name, address...', name, address)
  Place.create({ ...req.body, user: req.user._id })
    .then(place => {
      return res.status(201).json({ place })
    })
    .catch(err => console.log('el error', err))
})


router.delete('/places/:id', (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then(place => res.status(200).json({ place }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/places/:id', (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => res.status(201).json(place))
    .catch(error => res.status(500).json({ error }))
})

router.get('/places', (req, res, next) => {
  Place.find({ user: req.user.id })
    .then(place => res.status(201).json(place))
    .catch(error => res.status(500).json({ error }))
})


router.put('/edit-places/:id', (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(place => res.status(200).json({ place }))
    .catch(error => res.status(500).json({ error }))
})

module.exports = router
