const router = require('express').Router();
const Plan = require('../models/Plan');


router.get('/plans', (req, res, next) => {
  //Plan.create(req.body)
  Plan.find()
    .then((plans) => res.status(201).json({ plans }))
    .catch((error) => res.status(500).json({ error }));
});

router.get('/selectedPlan', async(req, res, next)=>{
const selectPlan = await Plans.findById(req.plan._id)
res.status(201).json({selectPlan})
})

module.exports = router