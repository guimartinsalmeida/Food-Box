const router = require('express').Router();
const Place = require('../models/Place');



router.post('/placeCreate', (req, res, next) => {
  Places.create(req.body)
    .then((place) => res.status(201).json({ place }))
    .catch((error) => res.status(500).json({ error }));
});

router.delete('/places/:id', (req, res, next) => {
  Place.findByIdAndDelete(req.params.id)
    .then((place) => res.status(200).json({ place }))
    .catch((error) => res.status(500).json({ error }));
});

//no entendi porque usar put 
router.put('/places/:id', (req, res, next) => {
  Place.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then((place) => res.status(200).json({ place }))
    .catch((error) => res.status(500).json({ error }));
});