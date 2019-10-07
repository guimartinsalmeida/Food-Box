const router = require('express').Router()
const Plan = require('../models/Plan')

router.get('/plans', (req, res, next) => {
  //Plan.create(req.body)
  Plan.find()
    .then(plans => res.status(201).json({ plans }))
    .catch(error => res.status(500).json({ error }))
})

router.get('/selectedPlan/:id', async(req, res, next)=>{
const selectPlan = await Plan.findById(req.plan._id)
res.status(201).json({selectPlan})
})

router.get('/selectedPlan/:id', (req, res, next) => {
  //Plan.create(req.body)
  Plan.findById(req.params.id)
    .then(plan => res.status(201).json({ plan }))
    .catch(error => res.status(500).json({ error }))
})

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' })
}

module.exports = router
