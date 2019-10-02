const router = require('express').Router();
const Pedido = require('../models/Pedido');

router.post('/pedidoCreate', (req, res, next) => {
  Pedidos.create(req.body)
    .then((pedido) => res.status(201).json({ pedido }))
    .catch((error) => res.status(500).json({ error }));
});