const router = require('express').Router()
const Plan = require('../models/Plan')


router.get('/plans', (req, res, next) => {
  Plan.find()
    .then(plans => res.status(201).json({ plans }))
    .catch(error => res.status(500).json({ error }))
})


router.get('/selectedPlan/:id', (req, res, next) => {
  Plan.findById(req.params.id)
    .then(plan => res.status(201).json({ plan }))
    .catch(error => res.status(500).json({ error }))
})


router.post('/plans-create', (req, res, next) => {
  Plan.create(req.body)
    .then((plan) => res.status(201).json({ plan }))
    .catch((error) => res.status(500).json({ error }));
});


router.delete('/plans/:id', (req, res, next) => {
  Plan.findByIdAndDelete(req.params.id)
    .then(plan => res.status(200).json({ plan }))
    .catch(error => res.status(500).json({ error }))
})


router.put('/edit-plans/:id', (req, res, next) => {
  Plan.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(plan => res.status(200).json({ plan }))
    .catch(error => res.status(500).json({ error }))
})

module.exports = router
