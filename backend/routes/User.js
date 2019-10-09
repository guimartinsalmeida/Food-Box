const router = require('express').Router()
const User = require('../models/User')


router.get('/User/:id')(req,res,next)=>{
  User.findById(req.params.id)
  .populate('plan')
  .populate('places')
  .then((user)=> res.status(200).json(user))
  .catch((user)=> res.status(500).json({err}))
}