const router = require('express').Router()
//const router = express.Router()
const User = require('../models/User')
const passport = require('../config/passport')
const Place = require('../models/Places')

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ err }))
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req
  res.status(200).json({ user })
})

router.get('/logout', (req, res, next) => {
  req.logout()
  res.status(200).json({ msg: 'Logged out' })
})

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then(user => res.status(200).json({ user }))
    .catch(err => res.status(500).json({ err }))
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' })
})
//place
router.post('/places', (req, res, next) => {
  const { name, address } = req.body
  console.log('name, address...', name, address)
  Place.create({ ...req.body })
    .then(place => res.status(201).json({ place }))
    .catch(error => res.status(500).json({ error }))
})

//pedido
router.post('/pedidos', (req, res, next) => {
  const {fecha, hora} = req.body
  console.log('fecha, hora ...', fecha, hora)
  Pedidos.create({...req.body})
    .then((pedido) => res.status(201).json({ pedido }))
    .catch((error) => res.status(500).json({ error }));
});

router.get("/places", async(req, res) => {
  try{
    console.log(req)
      let allplace = await places.find({user: req.user._id})
      res.status(201).json({allplace})
  } catch(err){
      res.status(500).json({err})
  }
})
module.exports = router
