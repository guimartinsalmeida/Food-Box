const router = require('express').Router()
const User = require('../models/User')

//Create
router.post('/User', (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).json({ user }))
    .catch((error) => res.status(500).json({ error }));
});
//Delete
router.delete('/User/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

//Update
router.put('/edit-User/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(user => res.status(200).json({ user }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/User/:id')(req,res,next)=>{
  User.findById(req.params.id)
  .populate('plan')
  .populate('places')
  .then((user)=> res.status(200).json(user))
  .catch((user)=> res.status(500).json({err}))
}