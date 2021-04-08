const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordersController')

router.get('/', controller.getOrders);

router.post('/', controller.createOrder);

router.get('/:id', controller.updateOrder);

router.get('/delivered/:id', controller.deliveredOrder)

module.exports = router